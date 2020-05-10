'use strict';

const WebArmsOptions = [
	{
		Name: 'Tangled',
		Property: { Type: null, Difficulty: 0 },
	},
	{
		Name: 'Wrapped',
		Property: {
			Type: 'Wrapped',
			Difficulty: 2,
			Prerequisite: ['NoFeetSpreader'],
			AllowPose: ['Kneel'],
			SetPose: ['LegsClosed'],
			Effect: ['Block', 'Freeze', 'Prone'],
			Block: ['ItemTorso', 'ItemHands', 'ItemLegs', 'ItemFeet', 'ItemBoots'],
		},
	},
	{
		Name: 'Cocooned',
		Property: {
			Type: 'Cocooned',
			Difficulty: 5,
			Prerequisite: ['NoFeetSpreader'],
			AllowPose: ['Kneel'],
			SetPose: ['LegsClosed'],
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
	},
];

// Loads the item extension properties
function InventoryItemArmsWebLoad() {
	if (DialogFocusItem.Property == null) {
		DialogFocusItem.Property = WebArmsOptions[0].Property;
	}
	DialogExtendedMessage = DialogFind(Player, 'WebBondageSelect');
}

function InventoryItemArmsWebDraw() {
	var Asset = DialogFocusItem.Asset;

	// Draw the header and item
	DrawRect(1387, 125, 225, 275, 'white');
	DrawImageResize('Assets/' + Asset.Group.Family + '/' + Asset.Group.Name + '/Preview/' +
					Asset.Name + '.png', 1389, 127, 221, 221);
	DrawTextFit(Asset.Description, 1500, 375, 221, 'black');
	DrawText(DialogExtendedMessage, 1500, 475, 'white', 'gray');

	// Draw the possible variants
	for (var I = 0; I < WebArmsOptions.length; I++) {
		var X = 1050 + I * 337;
		var Y = 550;
		var Option = WebArmsOptions[I];

		DrawButton(X, Y, 225, 225, '', ((DialogFocusItem.Property.Type == Option.Property.Type)) ? '#888888' : 'White');
		DrawImage('Screens/Inventory/' + Asset.Group.Name + '/' + Asset.Name + '/' + WebArmsOptions[I].Name + '.png', X, Y);
		DrawText(DialogFind(Player, 'WebBondage' + Option.Name), X + 113, Y + 250, 'white', 'gray');
	}
}

function InventoryItemArmsWebClick() {

	// Menu buttons
	if ((MouseX >= 1885) && (MouseX <= 1975) && (MouseY >= 25) && (MouseY <= 110)) {
		DialogFocusItem = null;
	}

	for (var I = 0; I < WebArmsOptions.length; I++) {
		var X = 1050 + I * 337;
		var Y = 550;
		if (MouseX >= X && MouseX <= X + 225 && MouseY >= Y && MouseY <= Y + 225 && DialogFocusItem.Property.Type !==
			WebArmsOptions[I].Property.Type) {
			InventoryItemArmsWebSetType(I);
		}
	}
}

function InventoryItemArmsWebSetType(NewIndex) {
	// Gets the current item and character
	var C = (Player.FocusGroup != null) ? Player : CurrentCharacter;
	if (CurrentScreen == 'ChatRoom') {
		DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);
		InventoryItemArmsWebLoad();
	}

	const NewType = WebArmsOptions[NewIndex];
	const OldIndex = WebArmsOptions.findIndex(Option => Option.Property.Type === DialogFocusItem.Property.Type);

	DialogFocusItem.Property = NewType.Property;
	CharacterRefresh(C);

	if (CurrentScreen == 'ChatRoom') {
		var msg = 'ArmsWebSet' + NewType.Name;
		var Dictionary = [];
		const ActionDialog = DialogFind(Player, NewIndex > OldIndex ? 'tightens' : 'loosens', 'ItemArms');
		console.log(ActionDialog);
		Dictionary.push({ Tag: 'SourceCharacter', Text: Player.Name, MemberNumber: Player.MemberNumber });
		Dictionary.push({ Tag: 'TargetCharacter', Text: C.Name, MemberNumber: C.MemberNumber });
		Dictionary.push({ Tag: 'Action', Text: ActionDialog });
		ChatRoomPublishCustomAction(msg, true, Dictionary);
	} else {
		DialogFocusItem = null;
		if (C.ID == 0) {
			DialogMenuButtonBuild(C);
		} else {
			C.CurrentDialog = DialogFind(C, 'RopeBondage' + NewType.Name, 'ItemArms');
			C.FocusGroup = null;
		}
	}
}
