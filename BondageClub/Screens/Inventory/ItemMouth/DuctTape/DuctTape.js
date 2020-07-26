"use strict";

var InventoryItemMouthDuctTapeOptions = [
	{
		Name: "Small",
		Property: {
			Type: null,
			Effect: ["GagVeryLight"],
		},
	},
	{
		Name: "Crossed",
		Property: {
			Type: "Crossed",
			Effect: ["GagLight"],
		},
	},
	{
		Name: "Full",
		Property: {
			Type: "Full",
			Effect: ["GagEasy"],
		},
	},
	{
		Name: "Double",
		Property: {
			Type: "Double",
			Effect: ["GagNormal"],
		},
	},
	{
		Name: "Cover",
		Property: {
			Type: "Cover",
			Effect: ["GagMedium"],
		},
	},
];

function InventoryItemMouthDuctTapeLoad() {
	ExtendedItemLoad(InventoryItemMouthDuctTapeOptions, "SelectGagType");
}

function InventoryItemMouthDuctTapeDraw() {
	ExtendedItemDraw(InventoryItemMouthDuctTapeOptions, "DuctTapeMouthType");
}

function InventoryItemMouthDuctTapeClick() {
	ExtendedItemClick(InventoryItemMouthDuctTapeOptions);
}

function InventoryItemMouthDuctTapePublishAction(C, Option) {
	var msg = "DuctTapeMouthSet" + Option.Name;
	var Dictionary = [
		{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
		{ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
	];
	ChatRoomPublishCustomAction(msg, true, Dictionary);
}

function InventoryItemMouthDuctTapeNpcDialog(C, Option) {
	C.CurrentDialog = DialogFind(C, "ItemMouthDuctTape" + Option.Name, "ItemMouth");
}
