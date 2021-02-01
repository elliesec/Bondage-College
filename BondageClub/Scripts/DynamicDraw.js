"use strict";

const DynamicDrawTextRegex = /^(?:\w|[ ~!$#%*+])*$/;
const DynamicDrawTextInputPattern = "(?:\\w|[ ~!$#%*+])*";

const DynamicDrawTextDefaultOptions = {
	fontSize: 30,
	fontFamily: CommonGetFontName(),
	textAlign: "center",
	textBaseline: "middle",
	color: "#000",
	effect: undefined,
	width: undefined,
	contain: true,
};

const DynamicDrawTextEffect = {
	BURN: "burn",
};

const DynamicDrawTextEffects = {
	[DynamicDrawTextEffect.BURN]: {
		before(text, ctx, x, y, { width }) {
			ctx.save();
			ctx.fillStyle = "#000";
			ctx.fillText(text, x - 1, y - 1, width);
			ctx.restore();
		},
	},
};

function DynamicDrawText(text, ctx, x, y, options) {
	options = DynamicDrawParseOptions(options);
	DynamicDrawTextAndEffects(text, ctx, x, y, options);
}

function DynamicDrawTextFromTo(text, ctx, from, to, options) {
	const { fontSize, contain } = options = DynamicDrawParseOptions(options);

	// From coordinate (x0, y0)
	const x0 = from[0];
	const y0 = from[1];
	// To coordinate (x1, y1)
	const x1 = to[0];
	const y1 = to[1];
	// Calculate x & y deltas
	const dx = x1 - x0;
	const dy = y1 - y0;
	// Diagonal distance
	options.width = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
	if (contain && dx !== 0) {
		// If the text should be fully contained withing the [x0, y0], [x1, y1] box, subtract appropriately
		options.width -= 2 * Math.abs(dy / dx) * (fontSize / 2);
	}
	// Center point (cx, cy)
	const cx = x0 + 0.5 * dx;
	const cy = y0 + 0.5 * dy;

	let angle;
	if (dx === 0) {
		angle = dy > 0 ? Math.PI / 2 : -Math.PI / 2;
	} else {
		angle = Math.atan(dy / dx);
	}
	if (dx < 0) angle += Math.PI;

	ctx.save();
	ctx.translate(cx, cy);
	ctx.rotate(angle);
	ctx.translate(-cx, -cy);
	DynamicDrawTextAndEffects(text, ctx, cx, cy, options);
	ctx.restore();
}

function DynamicDrawTextAndEffects(text, ctx, x, y, options) {
	const { effect, width } = options;
	DynamicDrawApplyOptions(ctx, options);
	if (typeof effect.before === "function") effect.before(text, ctx, x, y, options);
	ctx.fillText(text, x, y, width);
	if (typeof effect.after === "function") effect.after(text, ctx, x, y, options);
}

function DynamicDrawParseOptions(options) {
	options = options || {};
	const parsedOptions = Object.assign({}, DynamicDrawTextDefaultOptions, options);
	parsedOptions.effect = DynamicDrawTextEffects[parsedOptions.effect] || {};
	return parsedOptions;
}

function DynamicDrawApplyOptions(ctx, { fontSize, fontFamily, textAlign, textBaseline, color }) {
	ctx.font = `${fontSize}px ${fontFamily}`;
	ctx.textAlign = textAlign;
	ctx.textBaseline = textBaseline;
	ctx.fillStyle = color;
	// Dummy text fill to force the browser to load the font (otherwise it won't get loaded until after the first time
	// the text has been populated, causing the first draw to fallback)
	ctx.fillText("", 0, 0);
}
