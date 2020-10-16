const fs = require("fs");
const path = require("path");
const util = require("util");
const marked = require("marked");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const root = path.resolve(__dirname, "..");

buildChangelog();

async function buildChangelog() {
	const markdown = await readFile(path.join(root, "CHANGELOG.md"), "utf8");
	const start = markdown.indexOf("## ");
	const trimmed = "# Bondage Club - Changelog\n\n" + markdown.substr(start);
	const html = marked(trimmed);
	await writeFile(path.join(root, "changelog.html"), html);
}
