"use strict";

/**
 * A callback function used for clearing a rectangular area of a canvas
 * @callback clearRect
 * @param {number} x - The x coordinate of the left of the rectangle to clear
 * @param {number} y - The y coordinate of the top of the rectangle to clear
 * @param {number} w - The width of the rectangle to clear
 * @param {number} h - The height of the rectangle to clear
 */

/**
 * A callback function used to draw an image to a canvas
 * @callback drawImage
 * @param {string} src - The URL of the image to draw
 * @param {number} x - The x coordinate to draw the image at
 * @param {number} y - The y coordinate to draw the image at
 * @param {number} opacity - The opacity to draw the image at
 */

/**
 * A callback function used to draw a colorized image to a canvas
 * @callback drawImageColorize
 * @param {string} src - The URL of the image to draw
 * @param {number} x - The x coordinate to draw the image at
 * @param {number} y - The y coordinate to draw the image at
 * @param {string} color - The color to apply to the image
 * @param {boolean} fullAlpha - Whether or not to apply colour to the entire image
 * @param {number} opacity - The opacity to draw the image at
 */

/**
 * Prepares the character's drawing canvases before drawing the character's appearance.
 * @param {Character} C - The character to prepare
 * @returns {void} - Nothing
 */
function CommonDrawCanvasPrepare(C) {
	if (C.Canvas == null) {
		C.Canvas = document.createElement("canvas");
		C.Canvas.width = 500;
		C.Canvas.height = 1000;
	} else C.Canvas.getContext("2d").clearRect(0, 0, 500, 1000);
	if (C.CanvasBlink == null) {
		C.CanvasBlink = document.createElement("canvas");
		C.CanvasBlink.width = 500;
		C.CanvasBlink.height = 1000;
	} else C.CanvasBlink.getContext("2d").clearRect(0, 0, 500, 1000);

	C.MustDraw = true;
}

/**
 * Draws the given character's appearance using the provided drawing callbacks
 * @param {Character} C - The character whose appearance to draw
 * @param {clearRect} clearRect - A callback to clear an area of the main character canvas
 * @param {clearRect} clearRectBlink - A callback to clear an area of the blink character canvas
 * @param {drawImage} drawImage - A callback to draw an image to the main character canvas
 * @param {drawImage} drawImageBlink - A callback to draw an image to the blink character canvas
 * @param {drawImageColorize} drawImageColorize - A callback to draw a colorized image to the main character canvas
 * @param {drawImageColorize} drawImageColorizeBlink - A callback to draw a colorized image to the blink character canvas
 */
function CommonDrawAppearanceBuild(C, {
	clearRect,
	clearRectBlink,
	drawImage,
	drawImageBlink,
	drawImageColorize,
	drawImageColorizeBlink,
}) {
	var LayerCounts = {};

	// Loop through all layers in the character appearance
	C.AppearanceLayers.forEach(Layer => {
		var A = Layer.Asset;
		var AG = A.Group;
		var CA = C.Appearance.find(item => item.Asset === A);
		var Property = CA.Property;

		// If there's a parent group (parent group of the layer overrides that of the asset, which overrides that of the group)
		var ParentGroupName = Layer.ParentGroupName;
		if (typeof ParentGroupName === "undefined") ParentGroupName = A.ParentGroupName;
		if (typeof ParentGroupName === "undefined") ParentGroupName = AG.ParentGroupName;
		var G = "";
		if (ParentGroupName) {
			var ParentItem = C.Appearance.find(Item => Item.Asset.Group.Name === ParentGroupName);
			if (ParentItem) G = "_" + ParentItem.Asset.Name;
		}

		// If there's a pose style we must add (items take priority over groups, layers may override completely)
		var Pose = "";
		if (C.Pose && C.Pose.length) {
			if (Layer.OverrideAllowPose) {
				Pose = CommonDrawFindPose(C, Layer.OverrideAllowPose);
			} else {
				Pose = CommonDrawFindPose(C, A.AllowPose);
				if (!Pose) Pose = CommonDrawFindPose(C, AG.AllowPose);
			}
		}

		// If we must apply alpha masks to the current image as it is being drawn
		if (Array.isArray(A.Alpha))
			A.Alpha.forEach(([x, y, w, h]) => {
				clearRect(x, y, w, h);
				clearRectBlink(x, y, w, h);
			});

		// Check if we need to draw a different expression (for facial features)
		var Expression = "";
		if (AG.AllowExpression && AG.AllowExpression.length)
			if ((Property && Property.Expression && AG.AllowExpression.includes(Property.Expression)))
				Expression = Property.Expression + "/";

		// Find the X and Y position to draw on
		var X = A.DrawingLeft != null ? A.DrawingLeft : AG.DrawingLeft;
		var Y = A.DrawingTop != null ? A.DrawingTop : AG.DrawingTop;
		if (C.Pose && C.Pose.length) {
			C.Pose.forEach(CP => {
				var PoseDef = PoseFemale3DCG.find(P => P.Name === CP && P.MovePosition);
				if (PoseDef) {
					var MovePosition = PoseDef.MovePosition.find(MP => MP.Group === AG.Name);
					if (MovePosition) {
						X += MovePosition.X;
						Y += MovePosition.Y;
					}
				}
			});
		}

		// Check if we need to draw a different variation (from type property)
		var Type = (Property && Property.Type) || "";

		var L = "";
		var LayerType = Type;
		if (Layer.Name) L = "_" + Layer.Name;
		if (!Layer.HasType) LayerType = "";
		var Opacity = (Property && typeof Property.Opacity === "number") ? AssetParseOpacity(Property.Opacity) : Layer.Opacity;
		var BlinkExpression = (A.OverrideBlinking ? !AG.DrawingBlink : AG.DrawingBlink) ? "Closed/" : Expression;

		// Draw the item on the canvas (default or empty means no special color, # means apply a color, regular text means we apply that text)
		if ((CA.Color != null) && (CA.Color.indexOf("#") == 0) && Layer.AllowColorize) {
			drawImageColorize("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + Expression + A.Name + G + LayerType + L + ".png", X, Y, CA.Color, AG.DrawingFullAlpha, Opacity);
			drawImageColorizeBlink("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + BlinkExpression + A.Name + G + LayerType + L + ".png", X, Y, CA.Color, AG.DrawingFullAlpha, Opacity);
		} else {
			var Color = ((CA.Color == null) || (CA.Color == "Default") || (CA.Color == "") || (CA.Color.length == 1) || (CA.Color.indexOf("#") == 0)) ? "" : "_" + CA.Color;
			drawImage("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + Expression + A.Name + G + LayerType + Color + L + ".png", X, Y, Opacity);
			drawImageBlink("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + BlinkExpression + A.Name + G + LayerType + Color + L + ".png", X, Y, Opacity);
		}

		// If the item has been locked
		if (Property && Property.LockedBy) {
			// Count how many layers we've drawn for this asset
			var CountKey = AG.Name + "/" + A.Name;
			LayerCounts[CountKey] = (LayerCounts[CountKey] || 0) + 1;

			// How many layers should be drawn for the asset
			var DrawableLayerCount = C.AppearanceLayers.filter(AL => AL.Asset === A).length;

			// If we just drew the last drawable layer for this asset, draw the lock too (never colorized)
			if (DrawableLayerCount === LayerCounts[CountKey]) {
				drawImage("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + Expression + A.Name + Type + "_Lock.png", X, Y, 1);
				drawImageBlink("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + BlinkExpression + A.Name + Type + "_Lock.png", X, Y, 1);
			}
		}
	});
}

/**
 * Finds the correct pose to draw for drawable layer for the provided character from the provided list of allowed poses
 * @param {Character} C - The character to check for poses against
 * @param {string[]} AllowedPoses - The list of permitted poses for the current layer
 * @return {string} - The name of the pose to draw for the layer, or an empty string if no pose should be drawn
 */
function CommonDrawFindPose(C, AllowedPoses) {
	var Pose = "";
	if (AllowedPoses && AllowedPoses.length) {
		AllowedPoses.forEach(AllowedPose => {
			if (C.Pose.includes(AllowedPose)) Pose = AllowedPose + "/";
		});
	}
	return Pose;
}
