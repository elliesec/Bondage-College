const InventoryItemDevicesWoodenBoxMaxLength = 20;
const InventoryItemDevicesWoodenBoxTextInputId = "InventoryItemDevicesWoodenBoxText";
const InventoryItemDevicesWoodenBoxOpacityInputId = "InventoryItemDevicesWoodenBoxOpacity";

let InventoryItemDevicesWoodenBoxOriginalText = null;

/**
 * Loads the wooden box's extended item properties
 * @returns {void} - Nothing
 */
function InventoryItemDevicesWoodenBoxLoad() {
	const C = CharacterGetCurrent();
	const item = DialogFocusItem;
	let mustRefresh = false;

	const Property = item.Property = item.Property || {};
	if (typeof Property.Text !== "string") {
		Property.Text = "";
		mustRefresh = true;
	}
	if (typeof Property.Opacity !== "number") {
		Property.Opacity = 0;
		InventoryItemDevicesWoodenBoxSetOpacity(Property, Property.Opacity);
		mustRefresh = true;
	}


	if (mustRefresh) {
		CharacterRefresh(C);
		ChatRoomCharacterItemUpdate(C, item.Asset.Group.Name);
	}

	if (InventoryItemDevicesWoodenBoxOriginalText == null) {
		InventoryItemDevicesWoodenBoxOriginalText = Property.Text;
	}

	const textInput = ElementCreateInput(
		InventoryItemDevicesWoodenBoxTextInputId, "text", Property.Text, InventoryItemDevicesWoodenBoxMaxLength);
	if (textInput) {
		textInput.pattern = DynamicDrawTextInputPattern;
		textInput.addEventListener("input", (e) => InventoryItemDevicesWoodenBoxTextChange(C, item, e.target.value));
	}

	const opacitySlider = ElementCreateRangeInput(InventoryItemDevicesWoodenBoxOpacityInputId, Property.Opacity, item.Asset.MinOpacity, item.Asset.MaxOpacity, 0.01, "blindfold");
	if (opacitySlider) {
		opacitySlider.addEventListener("input", (e) => InventoryItemDevicesWoodenBoxOpacityChange(C, item, e.target.value));
	}
}

/**
 * Draw handler for the wooden box's extended item screen
 * @returns {void} - Nothing
 */
function InventoryItemDevicesWoodenBoxDraw() {
	// Draw the header and item
	DrawAssetPreview(1387, 125, DialogFocusItem.Asset);

	MainCanvas.textAlign = "right";
	DrawTextFit(DialogFindPlayer("WoodenBoxOpacityLabel"), 1475, 500, 400, "#fff", "#000");
	ElementPosition(InventoryItemDevicesWoodenBoxOpacityInputId, 1725, 500, 400);

	DrawTextFit(DialogFindPlayer("WoodenBoxTextLabel"), 1475, 580, 400, "#fff", "#000");
	ElementPosition(InventoryItemDevicesWoodenBoxTextInputId, 1725, 580, 400);
	MainCanvas.textAlign = "center";
}

/**
 * Click handler for the wooden box's extended item screen
 * @returns {void} - Nothing
 */
function InventoryItemDevicesWoodenBoxClick() {
	// Exits the screen
	if (MouseIn(1885, 25, 90, 90)) {
		return InventoryItemDevicesWoodenBoxExit();
	}
}

/**
 * Exits the wooden box's extended item screen, sends a chatroom message if appropriate, and cleans up inputs and text
 * @returns {void} - Nothing
 */
function InventoryItemDevicesWoodenBoxExit() {
	const C = CharacterGetCurrent();
	const item = DialogFocusItem;

	InventoryItemDevicesWoodenBoxSetOpacity(item.Property, InventoryItemDevicesWoodenBoxGetInputOpacity());
	const text = InventoryItemDevicesWoodenBoxGetText();
	if (DynamicDrawTextRegex.test(text)) item.Property.Text = text;

	if (CurrentScreen === "ChatRoom" && text !== InventoryItemDevicesWoodenBoxOriginalText) {
		const dictionary = [
			{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
			{ Tag: "DestinationCharacterName", Text: C.Name, MemberNumber: C.MemberNumber },
			{ Tag: "NewText", Text: text },
			{ Tag: "AssetName", AssetName: item.Asset.Name },
		];
		const msg = text === "" ? "WoodenBoxTextRemove" : "WoodenBoxTextChange";
		ChatRoomPublishCustomAction(msg, false, dictionary);
	}

	CharacterRefresh(C);
	ChatRoomCharacterItemUpdate(C, item.Asset.Group.Name);

	ElementRemove(InventoryItemDevicesWoodenBoxTextInputId);
	ElementRemove(InventoryItemDevicesWoodenBoxOpacityInputId);
	InventoryItemDevicesWoodenBoxOriginalText = null;
	PreferenceMessage = "";
	DialogFocusItem = null;
	if (DialogInventory != null) DialogMenuButtonBuild(CharacterGetCurrent());
}

/**
 * Sets the opacity of the wooden box based, and applies effects based on its opacity value
 * @param {Property} property - The item's Property object
 * @param {number} opacity - The opacity to set on the item's Property
 * @returns {void} - Nothing
 */
function InventoryItemDevicesWoodenBoxSetOpacity(property, opacity) {
	if (opacity !== property.opacity) property.Opacity = opacity;
	if (!Array.isArray(property.Effect)) property.Effect = [];
	const transparent = property.Opacity < 0.15;
	const effectsToApply = transparent ? ["Prone", "Enclose", "Freeze"] : ["Prone", "Enclose", "BlindNormal", "GagLight", "Freeze"];
	const effectsToRemoves = transparent ? ["BlindNormal", "GagLight"] : [];
	property.Effect = property.Effect.filter(e => !effectsToRemoves.includes(e));
	effectsToApply.forEach(e => {
		if (!property.Effect.includes(e)) property.Effect.push(e);
	});
}

/**
 * Handles wooden box opacity changes. Refreshes the character locally
 * @returns {void} - Nothing
 */
const InventoryItemDevicesWoodenBoxOpacityChange = CommonDebounce((C, item, opacity) => {
	item.Property.Opacity = Number(opacity);
	CharacterRefresh(C, false);
}, 100);

/**
 * Handles wooden box text changes. Refreshes the character locally
 * @returns {void} - Nothing
 */
const InventoryItemDevicesWoodenBoxTextChange = CommonDebounce((C, item, text) => {
	if (DynamicDrawTextRegex.test(text)) {
		item.Property.Text = text.substring(0, InventoryItemDevicesWoodenBoxMaxLength);
		CharacterRefresh(C, false);
	}
}, 200);

/**
 * Fetches the current input text, trimmed appropriately
 * @returns {string} - The text in the wooden box's input element
 */
function InventoryItemDevicesWoodenBoxGetText() {
	return ElementValue(InventoryItemDevicesWoodenBoxTextInputId).substring(0, InventoryItemDevicesWoodenBoxMaxLength);
}

function InventoryItemDevicesWoodenBoxGetInputOpacity() {
	return Number(ElementValue(InventoryItemDevicesWoodenBoxOpacityInputId));
}

function AssetsItemDevicesWoodenBoxAfterDraw({ C, A, X, Y, L, Pose, Property, drawCanvas, drawCanvasBlink, AlphaMasks, Color, Opacity }) {
	if (L === "_Text") {
		const height = 900;
		const width = 310;
		const tmpCanvas = AnimationGenerateTempCanvas(C, A, width, height);
		const ctx = tmpCanvas.getContext("2d");

		let text = Property && Property.Text || "";
		if (!DynamicDrawTextRegex.test(text)) text = "";
		text = text.substring(0, InventoryItemDevicesWoodenBoxMaxLength);

		const { r, g, b } = DrawHexToRGB(Color);
		DynamicDrawTextFromTo(text, ctx, [0, height], [width, 0], {
			fontSize: 96,
			fontFamily: `'Saira Stencil One', 'Arial', sans-serif`,
			color: `rgba(${r}, ${g}, ${b}, ${0.7 * Opacity})`,
		});

		let drawY = Y + 300;
		if (Pose === "Kneel/") drawY -= 250;

		// We print the canvas on the character based on the asset position
		drawCanvas(tmpCanvas, X + 90, drawY, AlphaMasks);
		drawCanvasBlink(tmpCanvas, X + 90, drawY, AlphaMasks);
	}
}

