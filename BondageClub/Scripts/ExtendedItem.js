"use strict";

/**
 * Utility file for handling extended items
 *
 * Item option format:
 *
 * Option.Name:				The name of the type - used for the preview icon and the translation key in the CSV
 * Option.BondageLevel:		The required bondage skill level for this type (optional)
 * Option.SelfBondageLevel:	The required self-bondage skill level for this type when using it on yourself (optional)
 * Option.Property:			The Property object to be applied when this option is used
 *
 */

var ExtendedItemOffsets = {};

/**
 * Loads the item extension properties
 *
 * @param {Object[]} Options - An Array of type definitions for each allowed extended type
 * @param {string} Options[].Name - The name of the type - used for the preview icon and the translation key in the CSV
 * @param {number} [Options[].BondageLevel] - The required bondage skill level for this type (optional)
 * @param {number} [Options[].SelfBondageLevel] - The required self-bondage skill level for this type when using it on yourself (optional)
 * @param {Object} [Options[].Property] - The Property object to be applied when this type is used
 * @param {string} DialogKey - The dialog key for the message to display prompting the player to select an extended type
 */
function ExtendedItemLoad(Options, DialogKey) {
	if (!DialogFocusItem.Property) {
		DialogFocusItem.Property = Options[0].Property;
	}

	if (Options.length > 2) {
		ExtendedItemSetOffset(0);
	}

	DialogExtendedMessage = DialogFind(Player, DialogKey);
}

/**
 * Draws the extended item type selection screen
 *
 * @param {Object[]} Options - An Array of type definitions for each allowed extended type (as defined in ExtendedItemLoad)
 * @param {string} DialogPrefix - The prefix to the dialog keys for the display strings describing each extended type. The full dialog key will be
 *     <Prefix><Option.Name>
 */
function ExtendedItemDraw(Options, DialogPrefix) {
	var IsSelfBondage = CharacterGetCurrent().ID === 0;
	var Asset = DialogFocusItem.Asset;

	// If we have to paginate, draw the next button
	if (Options.length > 4) {
		DrawButton(1775, 25, 90, 90, "", "White", "Icons/Next.png");
	}

	// Draw the header and item
	DrawRect(1387, 55, 225, 275, "white");
	DrawImageResize("Assets/" + Asset.Group.Family + "/" + Asset.Group.Name + "/Preview/" + Asset.Name + ".png", 1389, 57, 221, 221);
	DrawTextFit(Asset.Description, 1500, 310, 221, "black");
	DrawText(DialogExtendedMessage, 1500, 375, "white", "gray");

	if (Options.length === 2) {
		ExtendedItemDrawTwo(Options, DialogPrefix, IsSelfBondage);
	} else {
		ExtendedItemDrawGrid(Options, DialogPrefix, IsSelfBondage);
	}
}

/**
 * Handles clicks on the extended item type selection screen
 *
 * @param {Object[]} Options - An Array of type definitions for each allowed extended type (as defined in ExtendedItemLoad)
 */
function ExtendedItemClick(Options) {
	// Exit button
	if (MouseX >= 1885 && MouseX <= 1975 && MouseY >= 25 && MouseY <= 110) {
		DialogFocusItem = null;
		return;
	}

	var IsSelfBondage = CharacterGetCurrent().ID === 0;

	if (Options.length === 2) {
		ExtendedItemClickTwo(Options, IsSelfBondage);
	} else {
		ExtendedItemClickGrid(Options, IsSelfBondage);
	}
}

/**
 * Handler function for setting the type of an extended item
 *
 * @param {Object[]} Options - An Array of type definitions for each allowed extended type (as defined in ExtendedItemLoad)
 * @param {Object} Option - The selected type definition (as defined in ExtendedItemLoad)
 */
function ExtendedItemSetType(Options, Option) {
	var C = CharacterGetCurrent();
	var FunctionPrefix = ExtendedItemFunctionPrefix();

	// An extendable item may provide a validation function. Returning false from the validation function will drop out of
	// this function, and the new type will not be applied.
	if (CommonCallFunctionByName(FunctionPrefix + "Validate", Option) === false) {
		return;
	}

	if (CurrentScreen == "ChatRoom") {
		DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);
		// Call the item's load function
		CommonCallFunctionByName(FunctionPrefix + "Load");
	}

	DialogFocusItem.Property = Option.Property;
	CharacterRefresh(C);
	ChatRoomCharacterUpdate(C);

	if (CurrentScreen === "ChatRoom") {
		// If we're in a chatroom, call the item's publish function to publish a message to the chatroom
		var PreviousOption = Options.find(Option => Option.Property.Type === DialogFocusItem.Property.Type);
		CommonCallFunctionByName(FunctionPrefix + "PublishAction", Option, PreviousOption);
	}

	if (DialogInventory) {
		DialogFocusItem = null;
		DialogMenuButtonBuild(C);
	}
}

function ExtendedItemDrawTwo(Options, DialogPrefix, IsSelfBondage) {
	var Asset = DialogFocusItem.Asset;

	for (var I = 0; I < Options.length; I++) {
		var X = 1175 + I * 425;
		var Y = 550;
		var Option = Options[I];
		var FailSkillCheck = !!ExtendedItemRequirementCheckMessage(Option, IsSelfBondage);

		DrawButton(X, Y, 225, 225, "", ((DialogFocusItem.Property.Type == Option.Property.Type)) ? "#888888" : FailSkillCheck ? "Pink" : "White");
		DrawImage("Screens/Inventory/" + Asset.Group.Name + "/" + Asset.Name + "/" + Option.Name + ".png", X, Y);
		DrawText(DialogFind(Player, DialogPrefix + Option.Name), X + 113, Y + 250, "white", "gray");
	}
}

function ExtendedItemDrawGrid(Options, DialogPrefix, IsSelfBondage) {
	var Asset = DialogFocusItem.Asset;
	var ItemOptionsOffset = ExtendedItemGetOffset();
	// Draw the possible variants and their requirements, 4 at a time in a 2x2 grid
	for (var I = ItemOptionsOffset; I < Options.length && I < ItemOptionsOffset + 4; I++) {
		var PageOffset = I - ItemOptionsOffset;
		var X = 1200 + (PageOffset % 2 * 387);
		var Y = 450 + (Math.floor(PageOffset / 2) * 300);
		var Option = Options[I];
		var FailSkillCheck = !!ExtendedItemRequirementCheckMessage(Option, IsSelfBondage);

		DrawButton(X, Y, 225, 225, "", ((DialogFocusItem.Property.Type == Option.Property.Type)) ? "#888888" : FailSkillCheck ? "Pink" : "White");
		DrawImage("Screens/Inventory/" + Asset.Group.Name + "/" + Asset.Name + "/" + Option.Name + ".png", X, Y);
		DrawText(DialogFind(Player, DialogPrefix + Option.Name), X + 113, Y - 20, "white", "gray");
	}
}

function ExtendedItemClickTwo(Options, IsSelfBondage) {
	for (var I = 0; I < Options.length; I++) {
		var X = 1175 + I * 425;
		var Y = 550;
		var Option = Options[I];
		if (MouseX >= X && MouseX <= X + 225 && MouseY >= Y && MouseY <= Y + 225 && DialogFocusItem.Property.Type !== Option.Property.Type) {
			ExtendedItemHandleOptionClick(Options, Option, IsSelfBondage);
		}
	}
}

function ExtendedItemClickGrid(Options, IsSelfBondage) {
	// Pagination button
	if (Options.length > 4 && MouseX >= 1775 && MouseX <= 1865 && MouseY >= 25 && MouseY <= 110) {
		ExtendedItemNextPage(InventoryItemArmsWebOptions);
	}

	var ItemOptionsOffset = ExtendedItemGetOffset();

	for (var I = ItemOptionsOffset; I < Options.length && I < ItemOptionsOffset + 4; I++) {
		var offset = I - ItemOptionsOffset;
		var X = 1200 + (offset % 2 * 387);
		var Y = 450 + (Math.floor(offset / 2) * 300);
		var Option = Options[I];
		if (MouseX >= X && MouseX <= X + 225 && MouseY >= Y && MouseY <= Y + 225 && DialogFocusItem.Property.Type !== Option.Property.Type) {
			ExtendedItemHandleOptionClick(Options, Option, IsSelfBondage);
		}
	}
}

function ExtendedItemHandleOptionClick(Options, Option, IsSelfBondage) {
	var requirementMessage = ExtendedItemRequirementCheckMessage(Option, IsSelfBondage);
	if (requirementMessage) {
		DialogExtendedMessage = requirementMessage;
	} else {
		ExtendedItemSetType(Options, Option);
	}
}

function ExtendedItemRequirementCheckMessage(Type, IsSelfBondage) {
	if (IsSelfBondage && SkillGetLevelReal(Player, "SelfBondage") < Type.SelfBondageLevel) {
		return DialogFind(Player, "RequireSelfBondage" + Type.SelfBondageLevel);
	} else if (!IsSelfBondage && SkillGetLevelReal(Player, "Bondage") < Type.BondageLevel) {
		return DialogFind(Player, "RequireBondageLevel").replace("ReqLevel", Type.BondageLevel);
	}
	return null;
}

function ExtendedItemFunctionPrefix() {
	var Asset = DialogFocusItem.Asset;
	return "Inventory" + Asset.Group.Name + Asset.Name;
}

function ExtendedItemOffsetKey() {
	var Asset = DialogFocusItem.Asset;
	return Asset.Group.Name + "/" + Asset.Name;
}

function ExtendedItemGetOffset() {
	return ExtendedItemOffsets[ExtendedItemOffsetKey()];
}

function ExtendedItemSetOffset(Offset) {
	ExtendedItemOffsets[ExtendedItemOffsetKey()] = Offset;
}

function ExtendedItemNextPage(Options) {
	var OffsetKey = ExtendedItemOffsetKey();
	ExtendedItemOffsets[OffsetKey] += 4;
	if (ExtendedItemOffsets[OffsetKey] >= Options.length) {
		ExtendedItemOffsets[OffsetKey] = 0;
	}
}
