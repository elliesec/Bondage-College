"use strict";

const InventoryItemArmsVetWrapOptions = [
	{
		Name: "Boxtie",
		SelfBondageLevel: 5,
		Property: { Type: null },
	},
	{
		Name: "Armbinder",
		SelfBondageLevel: 7,
		Property: {
			Type: "Armbinder",
			Difficulty: 3,
		}
	},
	{
		Name: "Pet",
		SelfBondageLevel: 5,
		Property: {
			Type: "Pet",
			Difficulty: 1,
		},
	},
	{
		Name: "Strait",
		SelfBondageLevel: 6,
		Property: {
			Type: "Strait",
			Difficulty: 2,
		}
	}
];

function InventoryItemArmsVetWrapLoad() {
	ExtendedItemLoad(InventoryItemArmsVetWrapOptions, "VetWrapSelect");
}

function InventoryItemArmsVetWrapDraw() {
	ExtendedItemDraw(InventoryItemArmsVetWrapOptions, "VetWrapType");
}

function InventoryItemArmsVetWrapClick() {
	ExtendedItemClick(InventoryItemArmsVetWrapOptions);
}

function InventoryItemArmsVetWrapPublishAction(C, Option) {
	const msg = "VetWrapSet" + Option.Name;
	const dictionary = [
		{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
		{ Tag: "TargetCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
		{ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
	];
	ChatRoomPublishCustomAction(msg, true, dictionary);
}

function InventoryItemArmsVetWrapNpcDialog(C, Option) {
	C.CurrentDialog = DialogFind(C, "ItemArmsVetWrap" + Option.Name, "ItemArms");
}
