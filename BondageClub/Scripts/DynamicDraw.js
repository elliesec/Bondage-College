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
};

const DynamicDrawTextEffect = {
	BURN: "burn",
};

const DynamicDrawTextEffects = {
	[DynamicDrawTextEffect.BURN]: {
		before(text, ctx, x, y, { width }) {
			ctx.fillStyle = "#000";
			ctx.fillText(text, x - 1, y - 1, width);
		},
	},
};

function DynamicDrawText(text, ctx, x, y, options) {
	options = options || {};
	const { fontSize, fontFamily, textAlign, textBaseline, color, effect, width }
		= options
		= Object.assign({}, DynamicDrawTextDefaultOptions, options);
	const effectDef = DynamicDrawTextEffects[effect] || {};

	ctx.font = `${fontSize}px ${fontFamily}`;
	ctx.textAlign = textAlign;
	ctx.textBaseline = textBaseline;

	if (typeof effectDef.before === "function") effectDef.before(text, ctx, x, y, options);

	ctx.fillStyle = color;
	ctx.fillText(text, x, y, width);

	if (typeof effectDef.after === "function") effectDef.after(text, ctx, x, y, options);
}
