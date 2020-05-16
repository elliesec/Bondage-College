'use strict';

const InventoryItemArmsWebOptions = [
	{
		Name: 'Tangled',
		Property: { Type: null, Difficulty: 0 },
	},
	{
		Name: 'Wrapped',
		BondageLevel: 0,
		SelfBondageLevel: 4,
		Property: {
			Type: 'Wrapped',
			Difficulty: 2,
			Prerequisite: ['NoFeetSpreader'],
			AllowPose: ['Kneel'],
			SetPose: ['LegsClosed', 'BackElbowTouch'],
			Effect: ['Block', 'Freeze', 'Prone'],
			Block: ['ItemTorso', 'ItemHands', 'ItemLegs', 'ItemFeet', 'ItemBoots'],
		},
	},
	{
		Name: 'Cocooned',
		BondageLevel: 1,
		SelfBondageLevel: 5,
		Property: {
			Type: 'Cocooned',
			Difficulty: 4,
			Prerequisite: ['NoFeetSpreader'],
			AllowPose: ['Kneel'],
			SetPose: ['LegsClosed', 'BackElbowTouch'],
			Effect: ['Block', 'Freeze', 'Prone'],
			Block: [
				'ItemVulva',
				'ItemVulvaPiercings',
				'ItemButt',
				'ItemPelvis',
				'ItemTorso',
				'ItemHands',
				'ItemLegs',
				'ItemFeet',
				'ItemBoots',
				'ItemNipples',
				'ItemNipplesPiercings',
				'ItemBreast',
			],
		},
	},/*
	{
		Name: 'Hogtied',
		BondageLevel: 3,
		SelfBondageLevel: 6
	},
	{
		Name: 'Suspended',
		BondageLevel: 4,
		SelfBondageLevel: 8,
		Property: {},
	},
	{
		Name: 'SuspensionHogtied',
		BondageLevel: 5,
		SelfBondageLevel: 9,
		Property: {},
	},*/
];

// Loads the item extension properties
function InventoryItemArmsWebLoad() {
	if (!DialogFocusItem.Property) {
		DialogFocusItem.Property = InventoryItemArmsWebOptions[0].Property;
	}
	DialogExtendedMessage = DialogFind(Player, 'WebBondageSelect');
}

function InventoryItemArmsWebDraw() {
	var IsSelfBondage = CharacterGetCurrent().MemberNumber === Player.MemberNumber;
	var Asset = DialogFocusItem.Asset;

	// Draw the header and item
	DrawRect(1387, 125, 225, 275, 'white');
	DrawImageResize('Assets/' + Asset.Group.Family + '/' + Asset.Group.Name + '/Preview/' +
					Asset.Name + '.png', 1389, 127, 221, 221);
	DrawTextFit(Asset.Description, 1500, 375, 221, 'black');
	DrawText(DialogExtendedMessage, 1500, 475, 'white', 'gray');

	// Draw the possible variants and their requirements
	for (var I = 0; I < InventoryItemArmsWebOptions.length; I++) {
		var X = 1050 + I * 337;
		var Y = 550;
		var Option = InventoryItemArmsWebOptions[I];
		var FailSkillCheck = !!InventoryItemArmsWebRequirementCheckMessage(Option, IsSelfBondage);

		DrawButton(
			X,
			Y,
			225,
			225,
			'',
			((DialogFocusItem.Property.Type == Option.Property.Type)) ? '#888888' : FailSkillCheck ? 'Pink' : 'White',
		);
		DrawImage('Screens/Inventory/' + Asset.Group.Name + '/' + Asset.Name + '/' + InventoryItemArmsWebOptions[I].Name + '.png', X, Y);
		DrawText(DialogFind(Player, 'WebBondage' + Option.Name), X + 113, Y + 250, 'white', 'gray');
	}
}

function InventoryItemArmsWebClick() {
	// Menu buttons
	if ((MouseX >= 1885) && (MouseX <= 1975) && (MouseY >= 25) && (MouseY <= 110)) {
		DialogFocusItem = null;
	}

	var IsSelfBondage = CharacterGetCurrent().MemberNumber === Player.MemberNumber;

	for (var I = 0; I < InventoryItemArmsWebOptions.length; I++) {
		var X = 1050 + I * 337;
		var Y = 550;
		var Option = InventoryItemArmsWebOptions[I];
		if (
			MouseX >= X
			&& MouseX <= X + 225
			&& MouseY >= Y
			&& MouseY <= Y + 225
			&& DialogFocusItem.Property.Type !== Option.Property.Type
		) {
			var requirementMessage = InventoryItemArmsWebRequirementCheckMessage(Option, IsSelfBondage);
			if (requirementMessage) {
				DialogExtendedMessage = requirementMessage;
			} else {
				InventoryItemArmsWebSetType(Option);
			}
		}
	}
}

function InventoryItemArmsWebRequirementCheckMessage(Type, IsSelfBondage) {
	if (IsSelfBondage && SkillGetLevelReal(Player, 'SelfBondage') < Type.SelfBondageLevel) {
		return DialogFind(Player, 'RequireSelfBondage' + Type.SelfBondageLevel);
	} else if (SkillGetLevelReal(Player, 'Bondage') < Type.BondageLevel) {
		return DialogFind(Player, 'RequireBondageLevel').replace('ReqLevel', Type.BondageLevel);
	}
	return null;
}

function InventoryItemArmsWebSetType(NewType) {
	// Gets the current item and character
	var C = CharacterGetCurrent();
	if (CurrentScreen == 'ChatRoom') {
		DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);
		InventoryItemArmsWebLoad();
	}

	const NewIndex = InventoryItemArmsWebOptions.indexOf(NewType);
	const OldIndex = InventoryItemArmsWebOptions.findIndex(Option => Option.Property.Type === DialogFocusItem.Property.Type);

	DialogFocusItem.Property = NewType.Property;
	CharacterRefresh(C);

	if (CurrentScreen == 'ChatRoom') {
		var msg = 'ArmsWebSet' + NewType.Name;
		var ActionDialog = DialogFind(Player, NewIndex > OldIndex ? 'tightens' : 'loosens', 'ItemArms');
		var Dictionary = [
			{ Tag: 'SourceCharacter', Text: Player.Name, MemberNumber: Player.MemberNumber },
			{ Tag: 'TargetCharacter', Text: C.Name, MemberNumber: C.MemberNumber },
			{ Tag: 'Action', Text: ActionDialog },
		];
		ChatRoomPublishCustomAction(msg, true, Dictionary);
	}

	if (DialogInventory) {
		DialogFocusItem = null;
		DialogMenuButtonBuild(C);
	}
}
