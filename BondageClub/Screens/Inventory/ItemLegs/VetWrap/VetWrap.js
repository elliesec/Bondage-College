"use strict";

const InventoryItemLegsVetWrapOptions = [
	{
		Name: "Open",
		Property: { Type: null },
	},
	{
		Name: "Cover",
		Property: {
			Type: "Cover",
			Block: ["ItemFeet", "ItemBoots", "ItemVulva", "ItemButt", "ItemVulvaPiercings", "ItemPelvis"],
		},
	},
];

function InventoryItemLegsVetWrapLoad() {
	ExtendedItemLoad(InventoryItemLegsVetWrapOptions, "VetWrapSelect");
}

function InventoryItemLegsVetWrapDraw() {
	ExtendedItemDraw(InventoryItemLegsVetWrapOptions, "ItemLegsVetWrapType");
}

function InventoryItemLegsVetWrapClick() {
	ExtendedItemClick(InventoryItemLegsVetWrapOptions);
}

function InventoryItemLegsVetWrapPublishAction(C, Option) {
	const msg = "ItemLegsVetWrapSet" + Option.Name;
	const dictionary = [
		{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
		{ Tag: "TargetCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
		{ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
	];
	ChatRoomPublishCustomAction(msg, true, dictionary);
}

function InventoryItemLegsVetWrapNpcDialog(C, Option) {
	C.CurrentDialog = DialogFind(C, "ItemLegsVetWrap" + Option.Name, "ItemLegs");
}
