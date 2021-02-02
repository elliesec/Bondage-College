"use strict";

const DynamicDrawTextRegex = /^(?:\w|[ ~!$#%*+])*$/;
const DynamicDrawTextInputPattern = "(?:\\w|[ ~!$#%*+])*";
const DynamicDrawValidTextCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_- ~!$#%*+".split("");
const DynamicDrawTextArcPaddingRatio = 1.15;
const DynamicDrawFontMeasurements = {};
const DynamicDrawTextDirection = {
	CLOCKWISE: 1,
	ANTICLOCKWISE: -1,
};
const DynamicDrawTextCurve = {
	SMILEY: -1,
	FROWNY: 1,
};

const DynamicDrawTextDefaultOptions = {
	fontSize: 30,
	fontFamily: CommonGetFontName(),
	textAlign: "center",
	textBaseline: "middle",
	color: "#000",
	effect: undefined,
	width: undefined,
	contain: true,
	angle: 0,
	radius: 450,
	maxAngle: Math.PI,
	direction: DynamicDrawTextDirection.CLOCKWISE,
	textCurve: DynamicDrawTextCurve.FROWNY,
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

function DynamicDrawLoadFont(fontFamily) {
	// If we've already measured the font, do nothing
	if (DynamicDrawFontMeasurements[fontFamily]) return;

	const canvas = document.createElement("canvas");
	canvas.width = 20;
	canvas.height = 20;
	const ctx = canvas.getContext("2d");

	// Dummy text fill to force the browser to load the font (otherwise it won't get loaded until after the first time
	// the text has been populated, causing the first draw to fallback)
	ctx.font = `1px ${fontFamily}`;
	ctx.fillText("", 0, 0);

	// Measure each of the valid characters in the given font and record the maximum width
	let maxWidth = 0;
	const measurements = DynamicDrawValidTextCharacters.map(char => {
		const width = ctx.measureText(char).width;
		if (width > maxWidth) maxWidth = width;
		return width;
	});

	// Capture the maximum character width for the font, and set up a relative map for character weights
	const weightMap = DynamicDrawFontMeasurements[fontFamily] = {
		width: maxWidth,
		weights: {},
	};

	// Normalise the width of each character as a weight relative to the max width
	DynamicDrawValidTextCharacters.forEach((char, i) => {
		weightMap.weights[char] = measurements[i] / maxWidth;
	});
}

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

	// Calculate the angle of the text
	let angle;
	if (dx === 0) {
		// If dx is 0, the text is vertical
		angle = dy > 0 ? Math.PI / 2 : -Math.PI / 2;
	} else {
		angle = Math.atan(dy / dx);
	}
	// If dx < 0, then we need to rotate 180 degrees to respect directionality
	if (dx < 0) angle += Math.PI;

	// Save the canvas state and rotate by the calculated angle about the center point
	ctx.save();
	ctx.translate(cx, cy);
	ctx.rotate(angle);
	ctx.translate(-cx, -cy);
	// Draw the text and any dynamic text effects
	DynamicDrawTextAndEffects(text, ctx, cx, cy, options);
	// Restore the canvas rotation
	ctx.restore();
}

function DynamicDrawTextArc(text, ctx, x, y, options) {
	let { fontFamily, angle, radius, width, maxAngle, fontSize, direction, textCurve } = options = DynamicDrawParseOptions(options);

	// Load the font measurements if they haven't already been populated
	DynamicDrawLoadFont(fontFamily);

	// Calculate the circle's center based on the desired text position and the angle
	const cx = x - radius * Math.sin(angle);
	const cy = y - radius * Math.cos(angle);

	// Retrieve the character weight map for the font
	const weightMap = DynamicDrawFontMeasurements[fontFamily] || {
		width: 1,
		weights: {},
	};

	// Calculate the total weight of the desired text
	let totalWeight = 0;
	for (let i = 0; i < text.length; i++) {
		totalWeight += weightMap.weights[text[i]] || 1;
	}

	if (width == null || width > 2 * radius + fontSize) {
		width = 2 * radius + fontSize;
	}
	// Check whether the maximum angle should be constrained by the maximum width
	const angleConstraint = 2 * Math.asin(width / (fontSize + 2 * radius));
	maxAngle = Math.min(maxAngle, angleConstraint);

	// Check whether the font size should be constrained by the maximum angle
	const baseWidth = weightMap.width * totalWeight * DynamicDrawTextArcPaddingRatio;
	const fontSizeConstraint = (2 * maxAngle * radius) / (2 * baseWidth + maxAngle);
	options.fontSize = Math.min(fontSize, fontSizeConstraint);

	// Based on the computed font size, calculate the actual angle that the text will occupy (may be less than the max
	// angle)
	const actualAngle = options.fontSize * baseWidth / radius;

	// Apply drawing options
	DynamicDrawApplyOptions(ctx, options);

	// Prepare the canvas by translating to the intended drawing position, then translating over to the center of the
	// circle. Then rotate the canvas around to the angle where the text should be draw, and rotate back again half the
	// angle occupied by the text
	ctx.save();
	ctx.translate(x, y);
	ctx.translate(x - cx, y - cy);
	ctx.rotate(-angle);
	ctx.rotate(-1 * direction * actualAngle / 2);

	// Draw each character in turn, rotating a little before and after each character to space them out evenly
	for (let n = 0; n < text.length; n++) {
		const char = text[n];
		const rotationAngle = direction * 0.5 * actualAngle * (weightMap.weights[char] || 1) / totalWeight;
		ctx.rotate(rotationAngle);
		ctx.save();
		ctx.translate(0, -radius);
		ctx.transform(direction, 0, 0, textCurve, 0, 0);
		DynamicDrawTextAndEffects(char, ctx, 0, 0, options);
		ctx.restore();
		ctx.rotate(rotationAngle);
	}

	// Restore the canvas back to its original position and orientation
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
}
