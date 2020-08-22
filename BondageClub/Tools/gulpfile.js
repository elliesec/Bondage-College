const fs = require("fs");
const path = require("path");
const { src, dest, series } = require("gulp");
const gulpif = require("gulp-if");
const terser = require("gulp-terser");
const rimraf = require("rimraf");
const glob = require("glob");
const slash = require("slash");
const filesize = require("filesize");
const imagemin = require("gulp-imagemin");
const columnify = require("columnify");
const cssmin = require("gulp-cssmin");

const clubRoot = slash(path.resolve(__dirname, ".."));
const outDir = slash(path.resolve(__dirname, "..", "..", "BondageClubDist"));

exports.build = series(clean, copy);
exports.report = series(report);

function clean(cb) {
	return rimraf(outDir, cb);
}

function copy() {
	return src([
		`${clubRoot}/**`,
		`!${clubRoot}/Tools/**`,
		`!${clubRoot}/**/node_modules/**`,
	])
		.pipe(gulpif(/\.js$/i, terser({
			compress: {
				passes: 3,
			},
		})))
		.pipe(gulpif(/\.css$/i, cssmin()))
		.pipe(gulpif(/\.(png|jpe?g|gif|svg)$/i, imagemin()))
		.pipe(dest(outDir));
}

function report(cb) {
	glob(`${outDir}/**`, { nodir: true }, (err, files) => {
		let originalTotal = 0;
		let newTotal = 0;
		const compressionData = {};
		const fileData = files.map(newPath => {
			const originalPath = newPath.replace(outDir, clubRoot);
			const originalSize = fs.statSync(originalPath).size;
			const newSize = fs.statSync(newPath).size;
			const ratio = newSize / originalSize;

			originalTotal += originalSize;
			newTotal += newSize;

			const extension = newPath.match(/\.(\w+)$/)[1].toLowerCase().replace("jpeg", "jpg");
			const extensionCompression = compressionData[extension] || (compressionData[extension] = { before: 0, after: 0, count: 0 });
			extensionCompression.before += originalSize;
			extensionCompression.after += newSize;
			extensionCompression.count++;

			return { originalPath, newPath, originalSize, newSize, ratio };
		});

		console.log(`
----------------------------------------
Compression ratio by file extension
----------------------------------------`);

		Object.keys(compressionData).forEach(extension => {
			const { before, after, count } = compressionData[extension];
			if (after / before > 0.999) return;
			const columns = columnify({
				"Extension: ": `.${extension}`,
				"Count: ": count,
				"Before: ": filesize(before),
				"After: ": filesize(after),
				"Reduction: ": filesize(before - after),
				"Compression Ratio: ": `${(100 * after / before).toFixed(2)}%`,
				"Space Savings: ": `${(100 * (1 - after / before)).toFixed(2)}%`,
			}, { showHeaders: false });
			console.log(`${columns}\n`);
		});

		console.log(`
----------------------------------------
Totals
----------------------------------------`);
		const columns = columnify({
			"File Count: ": files.length,
			"Before: ": filesize(originalTotal),
			"After: ": filesize(newTotal),
			"Reduction: ": filesize(originalTotal - newTotal),
			"Compression Ratio: ": `${(100 * newTotal / originalTotal).toFixed(2)}%`,
			"Space Savings: ": `${(100 * (1 - newTotal / originalTotal)).toFixed(2)}%`,
		}, { showHeaders: false });

		console.log(`${columns}\n\n`);

		fs.writeFile(path.join(__dirname, "report.json"), JSON.stringify(fileData, null, 4), cb);
	});
}
