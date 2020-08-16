"use strict";

function InventoryItemVulvaLoversVibratorLoad() {
	VibratorModeLoad(["Standard", "Advanced"]);
}

function InventoryItemVulvaLoversVibratorDraw() {
	var { Asset, Property } = DialogFocusItem;
	VibratorModeDrawHeader();
	var ItemMemberNumber = DialogFind(Player, "ItemMemberNumber").replace("Item", Asset.Description);
	DrawText(ItemMemberNumber + " " + Property.ItemMemberNumber, 1500, 450, "white", "gray");
	VibratorModeDrawControls(525, ["Standard", "Advanced"]);
}

function InventoryItemVulvaLoversVibratorClick() {
	VibratorModeClick(525, ["Standard", "Advanced"]);
}
