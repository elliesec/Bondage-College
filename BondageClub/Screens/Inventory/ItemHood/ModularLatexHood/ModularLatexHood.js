var InventoryItemHoodModularLatexHoodBlindfoldOptions = [
	{
		Name: "b0",
	},
	{
		Name: "b1",
		Block: ["ItemHead"],
		Effect: ["Prone", "BlindHeavy"],
	},
];

var InventoryItemHoodModularLatexHoodGagOptions = [
	{
		Name: "g0",
	},
	{
		Name: "g1",
		Block: ["ItemMouth", "ItemMouth2", "ItemMouth3"],
		Effect: ["BlockMouth", "GagEasy"],
	},
	{
		Name: "g2",
		Block: ["ItemMouth", "ItemMouth2", "ItemMouth3"],
		Effect: ["BlockMouth", "GagHeavy"],
	},
];

var InventoryItemHoodModularLatexHoodDeafnessOptions = [
	{
		Name: "d0",
	},
	{
		Name: "d1",
		Effect: ["DeafLight"],
	},
	{
		Name: "d2",
		Effect: ["DeafNormal"],
	},
];

var InventoryItemHoodModularLatexHoodPage = "Base";

var InventoryItemHoodModularLatexHoodDrawFunctions = {
	Base: InventoryItemHoodModularLatexHoodDrawBase,
	Blindfold: InventoryItemHoodModularLatexHoodDrawBlindfold,
	Gag: InventoryItemHoodModularLatexHoodDrawGag,
	Deafness: InventoryItemHoodModularLatexHoodDrawDeafness,
};

var InventoryItemHoodModularLatexHoodClickFunctions = {
	Base: InventoryItemHoodModularLatexHoodClickBase,
	Blindfold: InventoryItemHoodModularLatexHoodClickBlindfold,
	Gag: InventoryItemHoodModularLatexHoodClickGag,
	Deafness: InventoryItemHoodModularLatexHoodClickDeafness,
};

function InventoryItemHoodModularLatexHoodLoad() {
	if (!DialogFocusItem.Property) {
		// Default to the base configuration if no property is set
		var [b, g, d] = InventoryItemHoodModularLatexHoodParseCurrent();
		DialogFocusItem.Property = InventoryItemHoodModularLatexHoodMergeOptions(b, g, d);
		CharacterRefresh(CharacterGetCurrent());
	}
	DialogExtendedMessage = DialogFind(Player, "ItemHoodModularLatexHoodSelectBase");
}

function InventoryItemHoodModularLatexHoodCall(functionMap) {
	var func = functionMap[InventoryItemHoodModularLatexHoodPage] || functionMap.Base;
	return func();
}

function InventoryItemHoodModularLatexHoodDraw() {
	InventoryItemHoodModularLatexHoodCall(InventoryItemHoodModularLatexHoodDrawFunctions);
}

function InventoryItemHoodModularLatexHoodClick() {
	InventoryItemHoodModularLatexHoodCall(InventoryItemHoodModularLatexHoodClickFunctions);
}

function InventoryItemHoodModularLatexHoodPageTransition(newPage) {
	InventoryItemHoodModularLatexHoodPage = newPage;
	DialogExtendedMessage = DialogFind(Player, "ItemHoodModularLatexHoodSelect" + newPage);
}

function InventoryItemHoodModularLatexHoodDrawCommon(buttonDefinitions) {
	var A = DialogFocusItem.Asset;
	// Draw the header and item
	DrawRect(1387, 55, 225, 275, "#fff");
	DrawImageResize("Assets/" + A.Group.Family + "/" + A.Group.Name + "/Preview/" + A.Name + ".png", 1389, 57, 221, 221);
	DrawTextFit(A.Description, 1500, 310, 221, "#000");
	DrawText(DialogExtendedMessage, 1500, 375, "#fff", "#808080");

	buttonDefinitions.forEach(([imageUrl, textKey, color], i) => {
		var x = 1200 + (i % 2 * 387);
		var y = 450 + (Math.floor(i / 2) * 300);
		DrawButton(x, y, 225, 225, "", color || "#fff");
		DrawImage(imageUrl, x, y);
		DrawText(DialogFind(Player, textKey), x + 113, y - 20, "#fff", "#808080");
	});
}

function InventoryItemHoodModularLatexHoodMapButtonDefinition(option) {
	var C = CharacterGetCurrent();
	var A = DialogFocusItem.Asset;
	var failLockCheck = DialogFocusItem.Property.LockedBy && !DialogCanUnlock(C, DialogFocusItem);
	return [
		"Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/" + option.Name + ".png",
		"ItemHoodModularLatexHoodType" + option.Name,
		failLockCheck ? "#ffc0cb" : "#fff",
	];
}

function InventoryItemHoodModularLatexHoodDrawBase() {
	var A = DialogFocusItem.Asset;
	var DialogPrefix = "ItemHoodModularLatexHoodConfigure";
	var [b, g, d] = InventoryItemHoodModularLatexHoodParseCurrent();
	InventoryItemHoodModularLatexHoodDrawCommon([
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/b" + b + ".png", DialogPrefix + "Blindfold"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/g" + g + ".png", DialogPrefix + "Gag"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/d" + d + ".png", DialogPrefix + "Deafness"],
	]);
}

function InventoryItemHoodModularLatexHoodDrawBlindfold() {
	InventoryItemHoodModularLatexHoodDrawCommon(
		InventoryItemHoodModularLatexHoodBlindfoldOptions.map(InventoryItemHoodModularLatexHoodMapButtonDefinition),
	);
}

function InventoryItemHoodModularLatexHoodDrawGag() {
	InventoryItemHoodModularLatexHoodDrawCommon(
		InventoryItemHoodModularLatexHoodGagOptions.map(InventoryItemHoodModularLatexHoodMapButtonDefinition),
	);
}

function InventoryItemHoodModularLatexHoodDrawDeafness() {
	InventoryItemHoodModularLatexHoodDrawCommon(
		InventoryItemHoodModularLatexHoodDeafnessOptions.map(InventoryItemHoodModularLatexHoodMapButtonDefinition),
	);
}

function InventoryItemHoodModularLatexHoodClickCommon(exitCallback, itemCallback) {
	// Exit button
	if (MouseIn(1885, 25, 90, 85)) {
		return exitCallback();
	}

	for (var i = 0; i < 4; i++) {
		var x = 1200 + (i % 2 * 387);
		var y = 450 + (Math.floor(i / 2) * 300);
		if (MouseIn(x, y, 225, 225)) {
			itemCallback(i);
		}
	}
}

function InventoryItemHoodModularLatexHoodClickComponent(options) {
	InventoryItemHoodModularLatexHoodClickCommon(
		() => InventoryItemHoodModularLatexHoodPageTransition("Base"),
		i => {
			const selected = options[i];
			if (selected) InventoryItemHoodModularLatexHoodSetType(selected);
		},
	);
}

function InventoryItemHoodModularLatexHoodClickBase() {
	var configPages = ["Blindfold", "Gag", "Deafness"];
	InventoryItemHoodModularLatexHoodClickCommon(
		() => DialogFocusItem = null,
		i => {
			const newPage = configPages[i];
			if (newPage) InventoryItemHoodModularLatexHoodPageTransition(newPage);
		},
	);
}

function InventoryItemHoodModularLatexHoodClickBlindfold() {
	InventoryItemHoodModularLatexHoodClickComponent(InventoryItemHoodModularLatexHoodBlindfoldOptions);
}

function InventoryItemHoodModularLatexHoodClickGag() {
	InventoryItemHoodModularLatexHoodClickComponent(InventoryItemHoodModularLatexHoodGagOptions);
}

function InventoryItemHoodModularLatexHoodClickDeafness() {
	InventoryItemHoodModularLatexHoodClickComponent(InventoryItemHoodModularLatexHoodDeafnessOptions);
}

function InventoryItemHoodModularLatexHoodParseCurrent() {
	var type = (DialogFocusItem.Property && DialogFocusItem.Property.Type) || "b0g0d0";
	var [, b, g, d] = type.match(/^b(\d)g(\d)d(\d)$/);
	return [Number(b), Number(g), Number(d)];
}

function InventoryItemHoodModularLatexHoodSetType(option) {
	var C = CharacterGetCurrent();
	DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);

	// Lock check - cannot change type if you can't unlock the item
	if (DialogFocusItem.Property.LockedBy && !DialogCanUnlock(C, DialogFocusItem)) {
		DialogExtendedMessage = DialogFind(Player, "CantChangeWhileLocked");
		return;
	}

	var [b, g, d] = InventoryItemHoodModularLatexHoodParseCurrent();
	var componentType = option.Name[0];
	var componentIndex = Number(option.Name[1]);
	var hasChanged = false;
	switch (componentType) {
		case "b":
			if (b !== componentIndex) hasChanged = true;
			b = componentIndex;
			break;
		case "g":
			if (g !== componentIndex) hasChanged = true;
			g = componentIndex;
			break;
		case "d":
			if (d !== componentIndex) hasChanged = true;
			d = componentIndex;
			break;
	}

	if (hasChanged) {
		Object.assign(DialogFocusItem.Property, InventoryItemHoodModularLatexHoodMergeOptions(b, g, d));
		CharacterRefresh(C);
		ChatRoomCharacterUpdate(C);

		if (CurrentScreen === "ChatRoom") {
			InventoryItemHoodModularLatexHoodChatRoomMessage(option.Name);
		} else if (C.ID === 0) {
			// Player is using the item on herself
			DialogMenuButtonBuild(C);
		} else {
			// Otherwise, set the NPC's dialog
			C.CurrentDialog = DialogFind(C, "ItemHoodModularLatexHood" + DialogFocusItem.Property.Type, "ItemHood");
		}
	}

	InventoryItemHoodModularLatexHoodPageTransition("Base");
}

function InventoryItemHoodModularLatexHoodMergeOptions(b, g, d) {
	var blindfold = InventoryItemHoodModularLatexHoodBlindfoldOptions[b];
	var gag = InventoryItemHoodModularLatexHoodGagOptions[g];
	var deafness = InventoryItemHoodModularLatexHoodDeafnessOptions[d];
	return [blindfold, gag, deafness].reduce((prop, componentProp) => {
		prop.Difficulty += (componentProp.Difficulty || 0);
		if (componentProp.Block) InventoryItemHoodModularLatexHoodAddToArray(prop.Block, componentProp.Block);
		if (componentProp.Effect) InventoryItemHoodModularLatexHoodAddToArray(prop.Effect, componentProp.Effect);
		return prop;
	}, {
		Type: `b${b}g${g}d${d}`,
		Difficulty: 0,
		Block: ["ItemNose", "ItemEars"],
		Effect: [],
		Hide: ["HairFront", "HairBack", "Glasses", "Hat", "HairAccessory1", "HairAccessory2", "Mask"],
	});
}

function InventoryItemHoodModularLatexHoodAddToArray(dest, src) {
	src.forEach(item => {
		if (!dest.includes(item)) dest.push(item);
	});
}

function InventoryItemHoodModularLatexHoodChatRoomMessage(componentName) {
	var C = CharacterGetCurrent();
	var msg = "ItemHoodModularLatexHoodSet" + componentName;
	var dictionary = [
		{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
		{ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
	];
	ChatRoomPublishCustomAction(msg, false, dictionary);
}
