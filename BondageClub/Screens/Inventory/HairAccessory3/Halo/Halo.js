const InventoryHairAccessory3HaloBrightnessInputId = "InventoryHairAccessory3HaloBrightness";

/**
 * Loads the extended item's properties
 * @returns {void} - Nothing
 */
function InventoryHairAccessory3HaloLoad() {
	const C = CharacterAppearanceSelection;
	const item = DialogFocusItem;
	const Property = item.Property = item.Property || {};
	if (typeof Property.Opacity !== "number") {
		Property.Opacity = 0;
		CharacterRefresh(C, false);
	}

	const brightnessInput = ElementCreateRangeInput(
		InventoryHairAccessory3HaloBrightnessInputId, Property.Opacity, item.Asset.MinOpacity, item.Asset.MaxOpacity, 0.01, "lightbulb");
	if (brightnessInput) {
		brightnessInput.addEventListener(
			"input",
			(e) => InventoryHairAccessory3HaloBrightnessChange(C, item, Number(e.target.value)),
		);
	}
}

/**
 * Handles drawing the Halo's extended item screen
 * @returns {void} - Nothing
 */
function InventoryHairAccessory3HaloDraw() {
	// Draw the header and item
	DrawRect(1387, 125, 225, 275, "white");
	DrawImageResize(
		"Assets/" + DialogFocusItem.Asset.Group.Family + "/" + DialogFocusItem.Asset.DynamicGroupName + "/Preview/" + DialogFocusItem.Asset.Name +
		".png", 1389, 127, 221, 221);
	DrawTextFit(DialogFocusItem.Asset.Description, 1500, 375, 221, "black");

	MainCanvas.textAlign = "right";
	DrawTextFit("Brightness", 1475, 500, 400, "#fff", "#000");
	ElementPosition(InventoryHairAccessory3HaloBrightnessInputId, 1725, 500, 400);
	MainCanvas.textAlign = "center";
}

/**
 * Handles clicks on the Halo's extended item screen
 * @returns {void} - Nothing
 */
function InventoryHairAccessory3HaloClick() {
	// Exits the screen
	if (MouseIn(1885, 25, 90, 90)) {
		return InventoryHairAccessory3HaloExit();
	}
}

/**
 * Debounced callback for opacity slider changes
 * @param {Character} C - The character being modified
 * @param {Item} item - The halo item being modified
 * @param {number} brightness - The new brightness to set on the halo
 * @returns {void} - Nothing
 */
const InventoryHairAccessory3HaloBrightnessChange = CommonDebounce((C, item, brightness) => {
	item.Property.Opacity = brightness;
	CharacterRefresh(C, false);
}, 100);

/**
 * Exit handler for the Halo's extended item screen. Updates the character and removes UI components.
 * @returns {void} - Nothing
 */
function InventoryHairAccessory3HaloExit() {
	const C = CharacterAppearanceSelection;
	const item = DialogFocusItem;

	item.Property.Opacity = Number(ElementValue(InventoryHairAccessory3HaloBrightnessInputId));
	ChatRoomCharacterItemUpdate(C, item.Asset.Group.Name);

	ElementRemove(InventoryHairAccessory3HaloBrightnessInputId);
	PreferenceMessage = "";
	DialogFocusItem = null;
}
