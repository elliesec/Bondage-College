"use strict";

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
		var ParentGroupName = Layer.NewParentGroupName;
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
				C.Canvas.getContext("2d").clearRect(x, y, w, h);
				C.CanvasBlink.getContext("2d").clearRect(x, y, w, h);
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

		// Draw the item on the canvas (default or empty means no special color, # means apply a color, regular text means we apply that text)
		if ((CA.Color != null) && (CA.Color.indexOf("#") == 0) && Layer.AllowColorize) {
			drawImageColorize("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + Expression + A.Name + G + LayerType + L + ".png", X, Y, CA.Color, AG.DrawingFullAlpha);
			drawImageColorizeBlink("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + (AG.DrawingBlink ? "Closed/" : Expression) + A.Name + G + LayerType + L + ".png", X, Y, CA.Color, AG.DrawingFullAlpha);
		} else {
			var Color = ((CA.Color == null) || (CA.Color == "Default") || (CA.Color == "") || (CA.Color.length == 1) || (CA.Color.indexOf("#") == 0)) ? "" : "_" + CA.Color;
			drawImage("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + Expression + A.Name + G + LayerType + Color + L + ".png", X, Y);
			drawImageBlink("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + (AG.DrawingBlink ? "Closed/" : Expression) + A.Name + G + LayerType + Color + L + ".png", X, Y);
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
				drawImage("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + Expression + A.Name + Type + "_Lock.png", X, Y);
				drawImageBlink("Assets/" + AG.Family + "/" + AG.Name + "/" + Pose + (AG.DrawingBlink ? "Closed/" : Expression) + A.Name + Type + "_Lock.png", X, Y);
			}
		}
	});
}

function CommonDrawFindPose(C, AllowedPoses) {
	let Pose = "";
	if (AllowedPoses && AllowedPoses.length) {
		AllowedPoses.forEach(AllowedPose => {
			if (C.Pose.includes(AllowedPose)) Pose = AllowedPose + "/";
		});
	}
	return Pose;
}
