"use strict";
var AppearanceBackground = "Dressing";
var CharacterAppearanceOffset = 0;
var CharacterAppearanceNumPerPage = 9;
var CharacterAppearanceHeaderText = "";
var CharacterAppearanceBackup = null;
var CharacterAppearanceAssets = [];
var CharacterAppearanceColorPicker = "";
var CharacterAppearanceColorPickerBackup = "";
var CharacterAppearanceColorPickerRefreshTimer = null;
var CharacterAppearanceSelection = null;
var CharacterAppearanceReturnRoom = "MainHall";
var CharacterAppearanceReturnModule = "Room";
var CharacterAppearanceWardrobeOffset = 0;
var CharacterAppearanceWardrobeMode = false;
var CharacterAppearanceWardrobeText = "";
var CharacterAppearanceForceUpCharacter = 0;

/**
 * Builds all the assets that can be used to dress up the character
 * @param {Character} C - The character whose appearance is modified
 * @returns {void} - Nothing
 */
function CharacterAppearanceBuildAssets(C) {

	// Adds all items with 0 value and from the appearance category
	CharacterAppearanceAssets = [];
	for (var A = 0; A < Asset.length; A++)
		if ((Asset[A].Value == 0) && (Asset[A].Group.Family == C.AssetFamily) && (Asset[A].Group.Category == "Appearance"))
			CharacterAppearanceAssets.push(Asset[A]);
	for (var A = 0; A < C.Inventory.length; A++)
		if ((C.Inventory[A].Asset != null) && (C.Inventory[A].Asset.Group.Family == C.AssetFamily) && (C.Inventory[A].Asset.Group.Category == "Appearance"))
			CharacterAppearanceAssets.push(C.Inventory[A].Asset);

}

// 
/**
 * Makes sure the character appearance is valid from inventory and asset requirement
 * @param {Character} C - The character whose appearance is checked
 * @returns {void} - Nothing
 */
function CharacterAppearanceValidate(C) {

	// Remove any appearance item that's not in inventory
	var Refresh = false;
	for (var A = 0; A < C.Appearance.length; A++)
		if ((C.Appearance[A].Asset.Value != 0) && (C.Appearance[A].Asset.Group.Category == "Appearance") && !InventoryAvailable(C, C.Appearance[A].Asset.Name, C.Appearance[A].Asset.Group.Name)) {
			C.Appearance.splice(A, 1);
			Refresh = true;
			A--;
		}

	// Remove items flagged as "Remove At Login"
	if (!Player.GameplaySettings || !Player.GameplaySettings.DisableAutoRemoveLogin)
		for (var A = 0; A < C.Appearance.length; A++)
			if (C.Appearance[A].Asset.RemoveAtLogin) {
				C.Appearance.splice(A, 1);
				Refresh = true;
				A--;
			}

	// Dress back if there are missing appearance items
	for (var A = 0; A < AssetGroup.length; A++)
		if (!AssetGroup[A].AllowNone && (CharacterAppearanceGetCurrentValue(C, AssetGroup[A].Name, "Name") == "None"))
			for (var B = 0; B < Asset.length; B++)
				if (Asset[B].Group.Name == AssetGroup[A].Name) {
					C.Appearance.push({ Asset: Asset[B], Color: Asset[B].Group.ColorSchema[0] });
					Refresh = true;
					break;
				}

	// If we must refresh the character and push the appearance to the server
	if (Refresh) CharacterRefresh(C);

}

/**
 * Resets the character to it's default appearance
 * @param {Character} C - The character to redress to its default appearance
 * @returns {void} - Nothing
 */
function CharacterAppearanceSetDefault(C) {

	// Resets the current appearance and prepares the assets
	C.Appearance = [];
	C.Pose = [];
	if (CharacterAppearanceAssets.length == 0) CharacterAppearanceBuildAssets(C);

	// For each items in the character appearance assets
	for (var I = 0; I < CharacterAppearanceAssets.length; I++)
		if (CharacterAppearanceAssets[I].Group.IsDefault) {

			// If there's no item in a slot, the first one becomes the default
			var MustWear = true;
			for (var A = 0; A < C.Appearance.length; A++)
				if (C.Appearance[A].Asset.Group.Name == CharacterAppearanceAssets[I].Group.Name)
					MustWear = false;

			// No item, we wear it with the default color
			if (MustWear) {
				var NA = {
					Asset: CharacterAppearanceAssets[I],
					Color: CharacterAppearanceAssets[I].Group.ColorSchema[0]
				}
				C.Appearance.push(NA);
			}

		}

	// Loads the new character canvas
	CharacterLoadCanvas(C);

}

// 
/**
 * Checks wether an item group is required for this asset
 * @param {Character} C - The character, whose assets are used for the check
 * @param {string} GroupName - The name of the group to check
 * @returns {boolean} - Returns TRUE if the item group is required from
 */
function CharacterAppearanceRequired(C, GroupName) {
	for (var A = 0; A < C.Appearance.length; A++)
		if ((C.Appearance[A].Asset.Require != null) && (C.Appearance[A].Asset.Require.indexOf(GroupName) >= 0))
			return true;
	return false;
}

/**
 * Checks, wether the item group must be hidden for a certain asset
 * @param {Character} C - The character, whose assets are used for the check
 * @param {string} GroupName - The name of the group to check
 * @returns {boolean} - Returns TRUE if the item group must be hidden and not chosen
 */
function CharacterAppearanceMustHide(C, GroupName) {
	for (var A = 0; A < C.Appearance.length; A++) {
		if ((C.Appearance[A].Asset.Hide != null) && (C.Appearance[A].Asset.Hide.indexOf(GroupName) >= 0)) return true;
		if ((C.Appearance[A].Property != null) && (C.Appearance[A].Property.Hide != null) && (C.Appearance[A].Property.Hide.indexOf(GroupName) >= 0)) return true;
	}
	return false;
}


/**
 * Sets a full random set of items for a character. Only items that do not have the "Random" property set to false will be used.
 * @param {Character} C - The character to dress
 * @param {boolean} ClothOnly - Defines, if only clothes should be used
 * @returns {void} - Nothing
 */
function CharacterAppearanceFullRandom(C, ClothOnly) {

	// Clear the current appearance
	for (var A = 0; A < C.Appearance.length; A++)
		if (C.Appearance[A].Asset.Group.Category == "Appearance")
			if ((ClothOnly == null) || (C.Appearance[A].Asset.Group.AllowNone)) {
				C.Appearance.splice(A, 1);
				A--;
			}

	// For each item group (non default items only show at a 20% rate, if it can occasionally happen)
	for (var A = 0; A < AssetGroup.length; A++)
		if ((AssetGroup[A].Category == "Appearance") && (AssetGroup[A].IsDefault || (AssetGroup[A].Random && Math.random() < 0.2) || CharacterAppearanceRequired(C, AssetGroup[A].Name)) && (!CharacterAppearanceMustHide(C, AssetGroup[A].Name) || !AssetGroup[A].AllowNone) && (CharacterAppearanceGetCurrentValue(C, AssetGroup[A].Name, "Name") == "None")) {
			
			// Get the parent size
			var ParentSize = "";
			if (AssetGroup[A].ParentSize != "")
				ParentSize = CharacterAppearanceGetCurrentValue(C, AssetGroup[A].ParentSize, "Name");

			// Check for a parent
			var R = [];
			for (var I = 0; I < CharacterAppearanceAssets.length; I++)
				if ((CharacterAppearanceAssets[I].Group.Name == AssetGroup[A].Name) && (CharacterAppearanceAssets[I].ParentItem != null) && ((ParentSize == "") || (CharacterAppearanceAssets[I].Name == ParentSize)))
					for (var P = 0; P < C.Appearance.length; P++)
						if (C.Appearance[P].Asset.Name == CharacterAppearanceAssets[I].ParentItem)
							R.push(CharacterAppearanceAssets[I]);

			// Since there was no parent, get all the possible items
			if (R.length == 0)
				for (var I = 0; I < CharacterAppearanceAssets.length; I++)
					if ((CharacterAppearanceAssets[I].Group.Name == AssetGroup[A].Name) && (CharacterAppearanceAssets[I].ParentItem == null) && ((ParentSize == "") || (CharacterAppearanceAssets[I].Name == ParentSize)))
						R.push(CharacterAppearanceAssets[I]);

			// Picks a random item and color and add it
			if (R.length > 0) {
				var SelectedAsset = R[Math.round(Math.random() * (R.length - 1))];
				var SelectedColor = SelectedAsset.Group.ColorSchema[Math.round(Math.random() * (SelectedAsset.Group.ColorSchema.length - 1))];
				if ((SelectedAsset.Group.ColorSchema[0] == "Default") && (Math.random() < 0.5)) SelectedColor = "Default";
				if (SelectedAsset.Group.ParentColor != "")
					if (CharacterAppearanceGetCurrentValue(C, SelectedAsset.Group.ParentColor, "Color") != "None")
						SelectedColor = CharacterAppearanceGetCurrentValue(C, SelectedAsset.Group.ParentColor, "Color");
				// Rare chance of keeping eyes of a different color
				if (SelectedAsset.Group.Name == "Eyes2" && Math.random() < 0.995)
					for (var A = 0; A < C.Appearance.length; A++)
						if (C.Appearance[A].Asset.Group.Name == "Eyes")
							SelectedColor = C.Appearance[A].Color;
				var NA = {
					Asset: SelectedAsset,
					Color: SelectedColor
				}
				C.Appearance.push(NA);
			}

		}

	// Loads the new character canvas
	CharacterLoadCanvas(C);

}

/**
 * Removes all items that can be removed, making the character naked. Currently includes cosplay items, like tails, wings or ears.
 * @param {Character} C - The character to undress
 * @returns {void} - Nothing
 */
function CharacterAppearanceNaked(C) {

	// For each item group (non default items only show at a 20% rate)
	for (var A = 0; A < C.Appearance.length; A++)
		if (C.Appearance[A].Asset.Group.AllowNone && !C.Appearance[A].Asset.Group.KeepNaked && (C.Appearance[A].Asset.Group.Category == "Appearance")) {
			C.Appearance.splice(A, 1);
			A--;
		}

	// Loads the new character canvas
	CharacterLoadCanvas(C);

}


/**
 * Removes one layer of clothing: outer clothes, then underwear, then body-cosplay clothes, then nothing
 * @param {Character} C - The character to undress
 * @returns {void} - Nothing
 */
function CharacterAppearanceStripLayer(C) {
	var HasClothes = false;
	var HasUnderwear = false;
	var HasBodyCosplay = false;

	// Find out what the top layer currently is
	for (var A = 0; A < C.Appearance.length; A++) {
		if (C.Appearance[A].Asset.Group.BodyCosplay || C.Appearance[A].Asset.BodyCosplay) HasBodyCosplay = true;
		else if (C.Appearance[A].Asset.Group.Underwear) HasUnderwear = true;
		else if (C.Appearance[A].Asset.Group.Clothing) { HasClothes = true; break; }
	}

	// Check if there's anything to remove
	if (!HasClothes && !HasUnderwear && !HasBodyCosplay) return;

	// Ensure only the top layer is 'true'
	HasBodyCosplay = HasBodyCosplay && !HasUnderwear && !HasClothes;
	HasUnderwear = HasUnderwear && !HasClothes;

	// Remove assets from the top layer only
	var RemoveAsset = false;
	for (var A = 0; A < C.Appearance.length; A++) {
		RemoveAsset = false;

		if (C.Appearance[A].Asset.Group.BodyCosplay || C.Appearance[A].Asset.BodyCosplay) {
			if (HasBodyCosplay) RemoveAsset = true;
		}
		else if (C.Appearance[A].Asset.Group.Underwear) {
			if (HasUnderwear) RemoveAsset = true;
		}
		else if (C.Appearance[A].Asset.Group.Clothing) {
			if (HasClothes) RemoveAsset = true;
		}

		if (RemoveAsset) {
			C.Appearance.splice(A, 1);
			A--;
		}
	}

	// Loads the new character canvas
	CharacterLoadCanvas(C);
}

/**
 * Builds a filtered and sorted set of appearance layers, each representing a drawable layer of a character's current appearance. Layers
 * that will not be drawn (because their asset is not visible or they do not permit the current asset type) are filtered out at this stage.
 * @param {Character} C - The character to build the layers for
 * @return {Layer[]} - A sorted set of layers, sorted by layer drawing priority
 */
function CharacterAppearanceSortLayers(C) {
	var layers = C.Appearance.reduce((layersAcc, item) => {
		var asset = item.Asset;
		// Only include layers for visible assets
		if (asset.Visible && CharacterAppearanceVisible(C, asset.Name, asset.Group.Name)) {
			// Check if we need to draw a different variation (from type property)
			var type = (item.Property && item.Property.Type) || "";
			// Only include layers that permit the current type (if AllowTypes is not defined, also include the layer)
			var layersToDraw = asset.Layer
				.filter(layer => !layer.AllowTypes || layer.AllowTypes.includes(type))
				.map(layer => {
					var drawLayer = Object.assign({}, layer);
					// If the item has an OverridePriority property, it completely overrides the layer priority
					if (item.Property && typeof item.Property.OverridePriority === "number") drawLayer.Priority =
						item.Property.OverridePriority;
					return drawLayer;
				});
			Array.prototype.push.apply(layersAcc, layersToDraw);
		}
		return layersAcc;
	}, []);
	return layers.sort((l1, l2) => {
		// If the layers belong to the same Asset, ensure layer order is preserved
		if (l1.Asset === l2.Asset) return l1.Asset.Layer.indexOf(l1) - l1.Asset.Layer.indexOf(l2);
		// If priorities are different, sort by priority
		if (l1.Priority !== l2.Priority) return l1.Priority - l2.Priority;
		// If priorities are identical, sort alphabetically to maintain consistency
		return (l1.Asset.Group.Name + l1.Asset.Name).localeCompare(l2.Asset.Group.Name + l2.Asset.Name);
	});
}

/**
 * Determines wether an item or a whole item group is visible or not
 * @param {Character} C - The character whose assets are checked
 * @param {string} AssetName - The name of the asset to check
 * @param {string} GroupName - The name of the item group to check
 * @returns {boolean} - Returns TRUE if we can show the item or the item group
 */
function CharacterAppearanceVisible(C, AssetName, GroupName) {
	for (var A = 0; A < C.Appearance.length; A++) {
		if ((C.Appearance[A].Asset.Hide != null) && (C.Appearance[A].Asset.Hide.indexOf(GroupName) >= 0)) return false;
		if ((C.Appearance[A].Property != null) && (C.Appearance[A].Property.Hide != null) && (C.Appearance[A].Property.Hide.indexOf(GroupName) >= 0)) return false;
		if ((C.Appearance[A].Asset.HideItem != null) && (C.Appearance[A].Asset.HideItem.indexOf(GroupName + AssetName) >= 0)) return false;
	}
	if (C.Pose != null)
		for (var A = 0; A < C.Pose.length; A++)
			for (var P = 0; P < Pose.length; P++)
				if (Pose[P].Name == C.Pose[A])
					if ((Pose[P].Hide != null) && (Pose[P].Hide.indexOf(GroupName) >= 0))
						return false;
	return true;
}

/**
 * Calculates and sets the height modifier which determines the character's vertical position on screen
 * @param {Character} C - The character whose height must be calculated
 * @returns {void} - Nothing
 */
function CharacterApperanceSetHeightModifier(C) {
	if (CharacterAppearanceForceUpCharacter == C.MemberNumber) {
		C.HeightModifier = 0;
	} else {
		var Height = 0;
		for (var A = 0; A < C.Appearance.length; A++)
			if (CharacterAppearanceVisible(C, C.Appearance[A].Asset.Name, C.Appearance[A].Asset.Group.Name))
				Height += C.Appearance[A].Asset.HeightModifier;
		if (C.Pose != null) 
			for (var A = 0; A < C.Pose.length; A++)
				for (var P = 0; P < Pose.length; P++)
					if (Pose[P].Name == C.Pose[A])
						if (Pose[P].OverrideHeight != null) {
							if (!((Pose[P].Name == "Kneel") && (C.Pose.indexOf("Hogtied") >= 0)))
								// Ignore kneel, if player is hogtied. 
								// Allows the use of a short chain on hogtied players
								Height = Pose[P].OverrideHeight;
						}// if
		C.HeightModifier = Height;
	}
}

/**
 * Draws the character canvas
 * @param {Character} C - The character to draw
 * @returns {void} - Nothing
 */
function CharacterAppearanceBuildCanvas(C) {
	CommonDrawCanvasPrepare(C);
	CommonDrawAppearanceBuild(C, {
		clearRect: (x, y, w, h) => C.Canvas.getContext("2d").clearRect(x, y, w, h),
		clearRectBlink: (x, y, w, h) => C.CanvasBlink.getContext("2d").clearRect(x, y, w, h),
		drawImage: (src, x, y, opacity) => DrawImageCanvas(src, C.Canvas.getContext("2d"), x, y, opacity),
		drawImageBlink: (src, x, y, opacity) => DrawImageCanvas(src, C.CanvasBlink.getContext("2d"), x, y, opacity),
		drawImageColorize: (src, x, y, color, fullAlpha, opacity) => DrawImageCanvasColorize(src, C.Canvas.getContext("2d"), x, y, 1, color, fullAlpha, opacity),
		drawImageColorizeBlink: (src, x, y, color, fullAlpha, opacity) => DrawImageCanvasColorize(src, C.CanvasBlink.getContext("2d"), x, y, 1, color, fullAlpha, opacity),
	});
}

/**
 * Returns a value from the character current appearance
 * @param {Character} C - The character to get values from
 * @param {string} Group - The name of the group, whose values we want to get
 * @param {string} Type - The name of the value, we want to get
 * @returns {*} - The return value
 */
function CharacterAppearanceGetCurrentValue(C, Group, Type) {

	// Finds the value
	for (var A = 0; A < C.Appearance.length; A++)
		if ((C.Appearance[A].Asset.Group.Family == C.AssetFamily) && (C.Appearance[A].Asset.Group.Name == Group)) {
			if (Type == "Name") return C.Appearance[A].Asset.Name;
			if (Type == "Description") return C.Appearance[A].Asset.Description;
			if (Type == "Color") return C.Appearance[A].Color;
			if (Type == "ID") return A;
			if (Type == "Effect") return C.Appearance[A].Asset.Effect;
			if (Type == "Asset") return C.Appearance[A].Asset;
			if (Type == "Full") return C.Appearance[A];
			if (Type == "Zoom") return ((C.Appearance[A].Asset.ZoomModifier == null) || (C.Appearance[A].Asset.ZoomModifier > 1) || (C.Appearance[A].Asset.ZoomModifier < 0.9)) ? 1 : C.Appearance[A].Asset.ZoomModifier;
		}
	return "None";

}

/**
 * Loads the character appearance screen and keeps a backup of the previous appearance. The function name is created dynamically.
 * @returns {void} - Nothing
 */
function AppearanceLoad() {
	if (!CharacterAppearanceSelection) CharacterAppearanceSelection = Player;
	var C = CharacterAppearanceSelection;
	CharacterAppearanceBuildAssets(Player);
	CharacterAppearanceBackup = C.Appearance.slice();
}

/**
 * Run the character appearance selection screen. The function name is created dynamically.
 * @returns {void} - Nothing
 */
function AppearanceRun() {

	// Draw the background and the character twice
	var C = CharacterAppearanceSelection;
	var HideColorPicker = true;
	if (CharacterAppearanceHeaderText == "") {
		if (C.ID == 0) CharacterAppearanceHeaderText = TextGet("SelectYourAppearance");
		else CharacterAppearanceHeaderText = TextGet("SelectSomeoneAppearance").replace("TargetCharacterName", C.Name);
	}
	DrawCharacter(C, -600, (C.IsKneeling()) ? -1100 : -100, 4, false);
	DrawCharacter(C, 750, 0, 1);
	DrawText(CharacterAppearanceHeaderText, 400, 40, "White", "Black");

	// Out of the color picker
	if (!CharacterAppearanceWardrobeMode && CharacterAppearanceColorPicker == "") {

		// Draw the top buttons with images
		if (C.ID == 0) {
			DrawButton(1300, 25, 90, 90, "", "White", "Icons/" + ((LogQuery("Wardrobe", "PrivateRoom")) ? "Wardrobe" : "Reset") + ".png", TextGet(LogQuery("Wardrobe", "PrivateRoom") ? "Wardrobe" : "ResetClothes"));
			DrawButton(1417, 25, 90, 90, "", "White", "Icons/Random.png", TextGet("Random"));
		} else if (LogQuery("Wardrobe", "PrivateRoom")) DrawButton(1417, 25, 90, 90, "", "White", "Icons/Wardrobe.png", TextGet("Wardrobe"));
		DrawButton(1534, 25, 90, 90, "", "White", "Icons/Naked.png", TextGet("Naked"));
		DrawButton(1651, 25, 90, 90, "", "White", "Icons/Next.png", TextGet("Next"));

		// Creates buttons for all groups
		for (var A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
			if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && AssetGroup[A].AllowCustomize && (C.ID == 0 || AssetGroup[A].Clothing)) {
				if (AssetGroup[A].AllowNone && !AssetGroup[A].KeepNaked && (AssetGroup[A].Category == "Appearance") && (InventoryGet(C, AssetGroup[A].Name) != null))
					DrawButton(1210, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", "White", "Icons/Small/Naked.png", TextGet("StripItem"));
				DrawBackNextButton(1300, 145 + (A - CharacterAppearanceOffset) * 95, 400, 65, AssetGroup[A].Description + ": " + CharacterAppearanceGetCurrentValue(C, AssetGroup[A].Name, "Description"), "White", "",
					() => CharacterAppearanceNextItem(C, AssetGroup[A].Name, false, true),
					() => CharacterAppearanceNextItem(C, AssetGroup[A].Name, true, true));
				var Color = CharacterAppearanceGetCurrentValue(C, AssetGroup[A].Name, "Color", "");
				if (Color == null) Color = "Default";
				DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, Color, ((Color.indexOf("#") == 0) ? Color : "White"));
				DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", "White", AssetGroup[A].AllowColorize ? "Icons/Color.png" : "Icons/ColorBlocked.png");
			}

	} else if (CharacterAppearanceWardrobeMode) {

		// Draw the wardrobe top controls & buttons
		DrawButton(1417, 25, 90, 90, "", "White", "Icons/Dress.png", TextGet("DressManually"));
		DrawButton(1534, 25, 90, 90, "", "White", "Icons/Naked.png", TextGet("Naked"));
		DrawButton(1651, 25, 90, 90, "", "White", "Icons/Next.png", TextGet("Next"));
		DrawText(CharacterAppearanceWardrobeText, 1645, 220, "White", "Gray");
		ElementPosition("InputWardrobeName", 1645, 315, 690);

		// Draw 6 wardrobe options
		for (var W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++) {
			DrawButton(1300, 430 + (W - CharacterAppearanceWardrobeOffset) * 95, 500, 65, "", "White", "");
			DrawTextFit((W + 1).toString() + (W < 9 ? ":  " : ": ") + Player.WardrobeCharacterNames[W], 1550, 463 + (W - CharacterAppearanceWardrobeOffset) * 95, 496, "Black");
			DrawButton(1820, 430 + (W - CharacterAppearanceWardrobeOffset) * 95, 160, 65, "Save", "White", "");
		}

	} else {

		// Draw the color picker, the setTimeout is done to prevent unnecessary character redraw
		ElementPosition("InputColor", 1450, 65, 300);
		HideColorPicker = false;
		ColorPickerDraw(1300, 145, 675, 830, document.getElementById("InputColor"), function (Color) {
			clearTimeout(CharacterAppearanceColorPickerRefreshTimer);
			CharacterAppearanceColorPickerRefreshTimer = setTimeout(function () {
				CharacterAppearanceSetColorForGroup(C, Color, CharacterAppearanceColorPicker);
			}, 100);
		});

	}

	// Hides the color picker if needed
	if (HideColorPicker) ColorPickerHide();

	// Draw the default buttons
	DrawButton(1768, 25, 90, 90, "", "White", "Icons/Cancel.png", TextGet("Cancel"));
	DrawButton(1885, 25, 90, 90, "", "White", "Icons/Accept.png", TextGet("Accept"));

}


/**
 * Sets an item in the character appearance
 * @param {Character} C - The character whose appearance should be changed
 * @param {string} Group - The name of the corresponding groupr for the item
 * @param {Asset} ItemAsset - The asset collection of the item to be changed
 * @param {string} NewColor - The new color (as "#xxyyzz" hex value) for that item
 * @param {number} DifficultyFactor - The difficulty factor of the ne item
 * @param {number} ItemMemberNumber - The member number of the player adding the item - defaults to -1
 * @param {boolean} Refresh - Determines, wether the character should be redrawn after the item change
 * @returns {void} - Nothing
 */
function CharacterAppearanceSetItem(C, Group, ItemAsset, NewColor, DifficultyFactor, ItemMemberNumber, Refresh) {

	// Sets the difficulty factor
	if (DifficultyFactor == null) DifficultyFactor = 0;

	// Removes the previous if we need to
	var ID = CharacterAppearanceGetCurrentValue(C, Group, "ID");
	var ItemColor;
	if (ID != "None") {
		if (CurrentScreen == "Appearance") ItemColor = CharacterAppearanceGetCurrentValue(C, Group, "Color");
		C.Appearance.splice(ID, 1);
	} else if (ItemAsset != null) ItemColor = ItemAsset.Group.ColorSchema[0];

	// Add the new item to the character appearance
	if (ItemAsset != null) {
		var NA = {
			Asset: ItemAsset,
			Difficulty: parseInt((ItemAsset.Difficulty == null) ? 0 : ItemAsset.Difficulty) + parseInt(DifficultyFactor),
			Color: ((NewColor == null) ? ItemColor : NewColor),
			Property: ItemAsset.CharacterRestricted ? {ItemMemberNumber: ItemMemberNumber == null ? -1 : ItemMemberNumber} : undefined
		}
		C.Appearance.push(NA);
	}

	// Draw the character canvas and calculate the effects on the character
	if (Refresh == null || Refresh) CharacterRefresh(C);

}

/**
 * Cycle in the appearance assets to find the next item in a group and wear it
 * @param {Character} C - The character whose assets are used
 * @param {string} Group - The name of the group to cycle
 * @param {boolean} Forward - Sets the direction of the cycling
 * @param {boolean} Description - Determines, wether the description of the item should be returned or not.
 * @returns {string} - The Description of the worn item
 */
function CharacterAppearanceNextItem(C, Group, Forward, Description) {
	var Current = CharacterAppearanceGetCurrentValue(C, Group, "Name");
	var CAA = CharacterAppearanceAssets.filter(a => a.Group.Name == Group);
	if (Description == true && CAA.length == 0) return "None";
	if (Current != "None") {
		// If we found the item we move forward or backward if possible
		var I = CAA.findIndex(a => a.Name == Current);
		if (I >= 0) {
			if (Forward == null || Forward) {
				if (I + 1 < CAA.length) {
					if (Description == true) return CAA[I + 1].Description;
					CharacterAppearanceSetItem(C, Group, CAA[I + 1]);
					return;
				}
			} else {
				if (I - 1 >= 0) {
					if (Description == true) return CAA[I - 1].Description;
					CharacterAppearanceSetItem(C, Group, CAA[I - 1]);
					return;
				}
			}
		}
	}
	// Since we didn't found any item, we pick "None" if we had an item or the first or last item
	var AG = AssetGroup.find(g => g.Name == Group);
	if (Current != "None" && AG != null && AG.AllowNone) {
		if (Description == true) return "None";
		CharacterAppearanceSetItem(C, Group, null);
	} else if (Forward == null || Forward) {
		if (Description == true) return CAA[0].Description;
		CharacterAppearanceSetItem(C, Group, CAA[0]);
	} else {
		if (Description == true) return CAA[CAA.length - 1].Description;
		CharacterAppearanceSetItem(C, Group, CAA[CAA.length - 1]);
	}
	if (Description == true) return "None";
}


/**
 * Find the next color for the item
 * @param {Character} C - The character whose items are cycled
 * @param {string} Group - The name of the group for which we are colour cycling
 * @returns {void} - Nothing
 */
function CharacterAppearanceNextColor(C, Group) {

	// For each item, we first find the item and pick the next one
	var Color = CharacterAppearanceGetCurrentValue(C, Group, "Color");
	for (var A = 0; A < AssetGroup.length; A++)
		if (AssetGroup[A].Name == Group) {

			// Finds the next color
			var Pos = AssetGroup[A].ColorSchema.indexOf(Color) + 1;
			if ((Pos < 0) || (Pos >= AssetGroup[A].ColorSchema.length)) Pos = 0;
			Color = AssetGroup[A].ColorSchema[Pos];

			// Sets the color
			for (Pos = 0; Pos < C.Appearance.length; Pos++)
				if ((C.Appearance[Pos].Asset.Group.Name == Group) && (C.Appearance[Pos].Asset.Group.Family == C.AssetFamily))
					C.Appearance[Pos].Color = Color;

			// Reloads the character canvas
			CharacterLoadCanvas(C);
			return;

		}

}

/**
 * Moves the offset to get new character appearance items
 * @param {Character} C - The character whose visible groups are used for calculation
 * @param {number} Move - The amount the next asset group should be moved before it is displayed
 * @returns {void} - Nothing
 */
function CharacterAppearanceMoveOffset(C, Move) {

	// Get the amount of visible groups for that character
	var AssetGroupLength = (C.ID == 0) ? AssetGroup.length : AssetGroup.filter(G => G.Clothing).length;

	// Calculate the new offset
	CharacterAppearanceOffset = CharacterAppearanceOffset + Move;
	if (CharacterAppearanceOffset >= AssetGroupLength) CharacterAppearanceOffset = 0;
	if ((AssetGroup[CharacterAppearanceOffset].Category != "Appearance") || !AssetGroup[CharacterAppearanceOffset].AllowCustomize) CharacterAppearanceOffset = 0;
	if (CharacterAppearanceOffset < 0) CharacterAppearanceOffset = Math.floor(AssetGroupLength / CharacterAppearanceNumPerPage) * CharacterAppearanceNumPerPage;

}


/**
 * Sets the color for a specific group
 * @param {Character} C - The character whose item group should be coloured
 * @param {string} Color - The colour (in the format "#rrggbb") to be applied to the group
 * @param {string} Group - The name of the group, whose colour should be changed
 * @returns {void} - Nothing
 */
function CharacterAppearanceSetColorForGroup(C, Color, Group) {
	for (var A = 0; A < C.Appearance.length; A++)
		if (C.Appearance[A].Asset.Group.Name == Group)
			C.Appearance[A].Color = Color;
	CharacterLoadCanvas(C);
}


/**
 * Handle the clicks in the character appearance selection screen. The function name is created dynamically.
 * @returns {void} - Nothing
 */
function AppearanceClick() {
	var C = CharacterAppearanceSelection;

	// In regular mode
	if (!CharacterAppearanceWardrobeMode && CharacterAppearanceColorPicker == "") {

		// If we must remove/restore to default the item
		if ((MouseX >= 1210) && (MouseX < 1275) && (MouseY >= 145) && (MouseY < 975))
			for (var A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && (C.ID == 0 || AssetGroup[A].Clothing) && AssetGroup[A].AllowNone && !AssetGroup[A].KeepNaked && (InventoryGet(C, AssetGroup[A].Name) != null))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95))
						InventoryRemove(C, AssetGroup[A].Name);

		// If we must switch to the next item in the assets
		if ((MouseX >= 1300) && (MouseX < 1700) && (MouseY >= 145) && (MouseY < 975))
			for (var A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && (C.ID == 0 || AssetGroup[A].Clothing))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95))
						CharacterAppearanceNextItem(C, AssetGroup[A].Name, (MouseX > 1500));

		// If we must switch to the next color in the assets
		if ((MouseX >= 1725) && (MouseX < 1885) && (MouseY >= 145) && (MouseY < 975))
			for (var A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && (C.ID == 0 || AssetGroup[A].Clothing))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95))
						CharacterAppearanceNextColor(C, AssetGroup[A].Name);

		// If we must open the color panel
		if ((MouseX >= 1910) && (MouseX < 1975) && (MouseY >= 145) && (MouseY < 975))
			for (var A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && (C.ID == 0 || AssetGroup[A].Clothing) && AssetGroup[A].AllowColorize)
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95)) {

						// Keeps the previous color in backup and creates a text box to enter the color
						CharacterAppearanceColorPicker = AssetGroup[A].Name;
						CharacterAppearanceColorPickerBackup = CharacterAppearanceGetCurrentValue(C, CharacterAppearanceColorPicker, "Color");
						ElementCreateInput("InputColor", "text", ((CharacterAppearanceColorPickerBackup == "Default") || (CharacterAppearanceColorPickerBackup == "None")) ? "#" : CharacterAppearanceColorPickerBackup, "7");

					}

		// If we must set back the default outfit or set a random outfit
		if ((MouseX >= 1300) && (MouseX < 1390) && (MouseY >= 25) && (MouseY < 115) && (C.ID == 0) && !LogQuery("Wardrobe", "PrivateRoom")) CharacterAppearanceSetDefault(C);
		if ((MouseX >= 1300) && (MouseX < 1390) && (MouseY >= 25) && (MouseY < 115) && (C.ID == 0) && LogQuery("Wardrobe", "PrivateRoom")) CharacterAppearanceWardrobeLoad(C);
		if ((MouseX >= 1417) && (MouseX < 1507) && (MouseY >= 25) && (MouseY < 115) && (C.ID == 0)) CharacterAppearanceFullRandom(C);
		if ((MouseX >= 1417) && (MouseX < 1507) && (MouseY >= 25) && (MouseY < 115) && (C.ID != 0) && LogQuery("Wardrobe", "PrivateRoom")) CharacterAppearanceWardrobeLoad(C);
		if ((MouseX >= 1534) && (MouseX < 1624) && (MouseY >= 25) && (MouseY < 115)) CharacterAppearanceStripLayer(C);
		if ((MouseX >= 1651) && (MouseX < 1741) && (MouseY >= 25) && (MouseY < 115)) CharacterAppearanceMoveOffset(C, CharacterAppearanceNumPerPage);
		if ((MouseX >= 1768) && (MouseX < 1858) && (MouseY >= 25) && (MouseY < 115)) CharacterAppearanceExit(C);
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 25) && (MouseY < 115)) CharacterAppearanceReady(C);

	} else if (CharacterAppearanceWardrobeMode) {

		// In warehouse mode, we draw the 12 possible warehouse slots for the character to save & load
		if ((MouseX >= 1651) && (MouseX < 1741) && (MouseY >= 25) && (MouseY < 115)) {
			CharacterAppearanceWardrobeOffset += 6;
			if (CharacterAppearanceWardrobeOffset >= Player.Wardrobe.length) CharacterAppearanceWardrobeOffset = 0;
		}
		if ((MouseX >= 1300) && (MouseX < 1800) && (MouseY >= 430) && (MouseY < 970))
			for (var W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++)
				if ((MouseY >= 430 + (W - CharacterAppearanceWardrobeOffset) * 95) && (MouseY <= 495 + (W - CharacterAppearanceWardrobeOffset) * 95))
					WardrobeFastLoad(C, W, false);
		if ((MouseX >= 1820) && (MouseX < 1975) && (MouseY >= 430) && (MouseY < 970))
			for (var W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++)
				if ((MouseY >= 430 + (W - CharacterAppearanceWardrobeOffset) * 95) && (MouseY <= 495 + (W - CharacterAppearanceWardrobeOffset) * 95)) {
					WardrobeFastSave(C, W);
					var LS = /^[a-zA-Z ]+$/;
					var Name = ElementValue("InputWardrobeName").trim();
					if (Name.match(LS) || Name.length == 0) {
						WardrobeSetCharacterName(W, Name);
						CharacterAppearanceWardrobeText = TextGet("WardrobeNameInfo");
					} else {
						CharacterAppearanceWardrobeText = TextGet("WardrobeNameError");
					}
				}
		if ((MouseX >= 1417) && (MouseX < 1507) && (MouseY >= 25) && (MouseY < 115)) { CharacterAppearanceWardrobeMode = false; ElementRemove("InputWardrobeName"); }
		if ((MouseX >= 1534) && (MouseX < 1624) && (MouseY >= 25) && (MouseY < 115)) CharacterAppearanceStripLayer(C);
		if ((MouseX >= 1768) && (MouseX < 1858) && (MouseY >= 25) && (MouseY < 115)) CharacterAppearanceExit(C);
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 25) && (MouseY < 115)) CharacterAppearanceReady(C);

	} else {

		// Can set a color manually from the text field
		if ((MouseX >= 1610) && (MouseX < 1675) && (MouseY >= 37) && (MouseY < 102))
			if (CommonIsColor(ElementValue("InputColor")))
				CharacterAppearanceSetColorForGroup(C, ElementValue("InputColor").toLowerCase(), CharacterAppearanceColorPicker);

		// Accepts the new color
		if ((MouseX >= 1768) && (MouseX < 1858) && (MouseY >= 25) && (MouseY < 115)) {
			CharacterAppearanceSetColorForGroup(C, CharacterAppearanceColorPickerBackup, CharacterAppearanceColorPicker);
			CharacterAppearanceColorPicker = "";
		}

		// Cancel out of color picking
		if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 25) && (MouseY < 115)) CharacterAppearanceColorPicker = "";
		if (CharacterAppearanceColorPicker == "") ElementRemove("InputColor");

	}

}

/**
 * Handle the exiting of the appearance screen. The function name is created dynamically.
 * @returns {void} - Nothing
 */
function AppearanceExit() {
	if (CharacterAppearanceColorPicker != "") { CharacterAppearanceColorPicker = ""; ElementRemove("InputColor"); }
	else if (CharacterAppearanceWardrobeMode) { CharacterAppearanceWardrobeMode = false; ElementRemove("InputWardrobeName"); }
	else CharacterAppearanceExit(CharacterAppearanceSelection);
}

/**
 * Restore the characters appearance backup, if the exit button is clicked
 * @param {Character} C - The character, whose appearance backup should be used
 * @returns {void} - Nothing
 */
function CharacterAppearanceExit(C) {
	ElementRemove("InputWardrobeName");
	CharacterAppearanceWardrobeMode = false;
	C.Appearance = CharacterAppearanceBackup;
	CharacterLoadCanvas(C);
	if (C.AccountName != "") CommonSetScreen(CharacterAppearanceReturnModule, CharacterAppearanceReturnRoom);
	else CommonSetScreen("Character", "Login");
	CharacterAppearanceReturnRoom = "MainHall";
	CharacterAppearanceReturnModule = "Room";
	CharacterAppearanceHeaderText = "";
}

/**
 * Handle the confirmation click in the wardrobe screen. 
 * @param {Character} C - The character who has been changed
 * @returns {void} - Nothing
 */
function CharacterAppearanceReady(C) {

	// Make sure the character has one item of each default type (not used for now)
	if (CharacterAppearanceReturnRoom == "DO NOT USE")
		for (var A = 0; A < AssetGroup.length; A++)
			if ((AssetGroup[A].IsDefault) || CharacterAppearanceRequired(C, AssetGroup[A].Name)) {

				// Check to find at least one item from the group
				var Found = false;
				for (var P = 0; P < C.Appearance.length; P++)
					if (C.Appearance[P].Asset.Group.Name == AssetGroup[A].Name)
						Found = true;

				// If we didn't found the group, we warn the user
				if (!Found) {
					CharacterAppearanceHeaderText = TextGet("MustPickItem") + " " + AssetGroup[A].Name;
					return;
				}

			}

	// Exits wardrobe mode
	ElementRemove("InputWardrobeName");
	CharacterAppearanceWardrobeMode = false;

	// If there's no error, we continue to the login or main hall if already logged
	if (C.AccountName != "") {
		ServerPlayerAppearanceSync();
		if ((CharacterAppearanceReturnRoom == "ChatRoom") && (C.ID != 0)) {
			var Dictionary = [];
			Dictionary.push({ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber });
			Dictionary.push({ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber });
			ServerSend("ChatRoomChat", { Content: "ChangeClothes", Type: "Action", Dictionary: Dictionary });
			ChatRoomCharacterUpdate(C);
		}
		CommonSetScreen(CharacterAppearanceReturnModule, CharacterAppearanceReturnRoom);
		CharacterAppearanceReturnRoom = "MainHall";
		CharacterAppearanceReturnModule = "Room";
	} else CommonSetScreen("Character", "Creation");

}

/**
 * Copy the appearance from a character to another
 * @param {Character} FromC - The character to copy from
 * @param {Character} ToC - The character to copy to
 */
function CharacterAppearanceCopy(FromC, ToC) {

	// Removes any previous appearance asset
	for (var A = 0; A < ToC.Appearance.length; A++)
		if ((ToC.Appearance[A].Asset != null) && (ToC.Appearance[A].Asset.Group.Category == "Appearance")) {
			ToC.Appearance.splice(A, 1);
			A--;
		}

	// Adds all appearance assets from the first character to the second
	for (var A = 0; A < FromC.Appearance.length; A++)
		if ((FromC.Appearance[A].Asset != null) && (FromC.Appearance[A].Asset.Group.Category == "Appearance"))
			ToC.Appearance.push(FromC.Appearance[A]);

	// Refreshes the second character and saves it if it's the player
	CharacterRefresh(ToC);
	if (ToC.ID == 0) ServerPlayerAppearanceSync();

}

/**
 * Loads the appearance editing screen for a character
 * @param {Character} C - The character for whom the appearance screen should be loaded
 * @returns {void} - nothing
 */
function CharacterAppearanceLoadCharacter(C) {
	CharacterAppearanceSelection = C;
	CharacterAppearanceReturnRoom = CurrentScreen;
	CharacterAppearanceReturnModule = CurrentModule;
	CommonSetScreen("Character", "Appearance");
}

/**
 * Load wardrobe menu in appearance selection screen
 * @param {Character} C - The character whose wardrobe should be loaded
 * @returns {void} - Nothing
 */
function CharacterAppearanceWardrobeLoad(C) {
	if ((Player.Wardrobe == null) || (Player.Wardrobe.length < 12))
		WardrobeLoadCharacters(true);
	else
		WardrobeLoadCharacterNames();
	ElementCreateInput("InputWardrobeName", "text", C.Name, "20");
	CharacterAppearanceWardrobeMode = true;
	CharacterAppearanceWardrobeText = TextGet("WardrobeNameInfo");
}
