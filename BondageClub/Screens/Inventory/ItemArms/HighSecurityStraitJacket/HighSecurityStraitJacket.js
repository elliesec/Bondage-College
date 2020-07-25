"use strict";

/**
 * Key to type codes:
 *
 * c0 - No crotch panel
 * c1 - Crotch panel
 *
 * a0 - Arms loose
 * a1 - Arms in front
 * a2 - Arms behind
 *
 * s0 - No crotch strap
 * s1 - One crotch strap
 * s2 - Two crotch straps
 * s3 - Three crotch straps
 */

var InventoryItemArmsHighSecurityStraitJacketCrotchOptions = [
	{
		Name: "c0",
		Difficulty: 0,
	},
	{
		Name: "c1",
		Difficulty: 1,
	},
];

var InventoryItemArmsHighSecurityStraitJacketArmsOptions = [
	{
		Name: "a0",
		Difficulty: 0,
	},
	{
		Name: "a1",
		Difficulty: 2,
	},
	{
		Name: "a2",
		Difficulty: 3,
	},
];

var InventoryItemArmsHighSecurityStraitJacketStrapsOptions = [
	{
		Name: "s0",
		Difficulty: 0,
	},
	{
		Name: "s1",
		Difficulty: 1,
	},
	{
		Name: "s2",
		Difficulty: 2,
	},
	{
		Name: "s3",
		Difficulty: 2,
	},
];

var InventoryItemArmsHighSecurityStraitJacketPage = "base";

var InventoryItemArmsHighSecurityStraitJacketDrawFunctions = {
	base: InventoryItemArmsHighSecurityStraitJacketDrawBase,
	crotch: InventoryItemArmsHighSecurityStraitJacketDrawCrotch,
	arms: InventoryItemArmsHighSecurityStraitJacketDrawArms,
	straps: InventoryItemArmsHighSecurityStraitJacketDrawStraps,
};

var InventoryItemArmsHighSecurityStraitJacketClickFunctions = {
	base: InventoryItemArmsHighSecurityStraitJacketClickBase,
	crotch: InventoryItemArmsHighSecurityStraitJacketClickCrotch,
	arms: InventoryItemArmsHighSecurityStraitJacketClickArms,
	straps: InventoryItemArmsHighSecurityStraitJacketClickStraps,
};

function InventoryItemArmsHighSecurityStraitJacketLoad() {
	if (!DialogFocusItem.Property) {
		// Default to the base configuration if no property is set
		var [c, a, s] = InventoryItemArmsHighSecurityStraitJacketParseCurrent();
		DialogFocusItem.Property = InventoryItemArmsHighSecurityStraitJacketMergeOptions(c, a, s);
		CharacterRefresh(CharacterGetCurrent());
	}
	DialogExtendedMessage = DialogFind(Player, "ItemArmsHighSecurityStraitJacketSelect");
}

function InventoryItemArmsHighSecurityStraitJacketDraw() {
	var drawFunction = InventoryItemArmsHighSecurityStraitJacketDrawFunctions[InventoryItemArmsHighSecurityStraitJacketPage] ||
					   InventoryItemArmsHighSecurityStraitJacketDrawFunctions.base;
	drawFunction();
}

function InventoryItemArmsHighSecurityStraitJacketClick() {
	var clickFunction = InventoryItemArmsHighSecurityStraitJacketClickFunctions[InventoryItemArmsHighSecurityStraitJacketPage] ||
						InventoryItemArmsHighSecurityStraitJacketClickFunctions.base;
	clickFunction();
}

function InventoryItemArmsHighSecurityStraitJacketDrawCommon(buttonDefinitions) {
	var A = DialogFocusItem.Asset;
	// Draw the header and item
	DrawRect(1387, 55, 225, 275, "#fff");
	DrawImageResize("Assets/" + A.Group.Family + "/" + A.Group.Name + "/Preview/" + A.Name + ".png", 1389, 57, 221, 221);
	DrawTextFit(A.Description, 1500, 310, 221, "#000");
	DrawText(DialogExtendedMessage, 1500, 375, "#fff", "#808080");

	buttonDefinitions.forEach(([imageUrl, textKey], i) => {
		var x = 1200 + (i % 2 * 387);
		var y = 450 + (Math.floor(i / 2) * 300);
		DrawButton(x, y, 225, 225, "", "#fff");
		DrawImage(imageUrl, x, y);
		DrawText(DialogFind(Player, textKey), x + 113, y - 20, "#fff", "#808080");
	});
}

function InventoryItemArmsHighSecurityStraitJacketDrawBase() {
	DialogExtendedMessage = DialogFind(Player, "ItemArmsHighSecurityStraitJacketSelect");
	var A = DialogFocusItem.Asset;
	var DialogPrefix = "ItemArmsHighSecurityStraitJacketConfigure";
	var [c, a, s] = InventoryItemArmsHighSecurityStraitJacketParseCurrent();
	InventoryItemArmsHighSecurityStraitJacketDrawCommon([
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + `/c${c}.png`, DialogPrefix + "Crotch"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + `/a${a}.png`, DialogPrefix + "Arms"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + `/s${s}.png`, DialogPrefix + "Straps"],
	]);
}

function InventoryItemArmsHighSecurityStraitJacketDrawCrotch() {
	DialogExtendedMessage = DialogFind(Player, "ItemArmsHighSecurityStraitJacketSelectCrotch");
	var A = DialogFocusItem.Asset;
	var DialogPrefix = "ItemArmsHighSecurityStraitJacketType";
	InventoryItemArmsHighSecurityStraitJacketDrawCommon([
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/c0.png", DialogPrefix + "c0"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/c1.png", DialogPrefix + "c1"],
	]);
}

function InventoryItemArmsHighSecurityStraitJacketDrawArms() {
	DialogExtendedMessage = DialogFind(Player, "ItemArmsHighSecurityStraitJacketSelectArms");
	var A = DialogFocusItem.Asset;
	var DialogPrefix = "ItemArmsHighSecurityStraitJacketType";
	InventoryItemArmsHighSecurityStraitJacketDrawCommon([
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/a0.png", DialogPrefix + "a0"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/a1.png", DialogPrefix + "a1"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/a2.png", DialogPrefix + "a2"],
	]);
}

function InventoryItemArmsHighSecurityStraitJacketDrawStraps() {
	DialogExtendedMessage = DialogFind(Player, "ItemArmsHighSecurityStraitJacketSelectStraps");
	var A = DialogFocusItem.Asset;
	var DialogPrefix = "ItemArmsHighSecurityStraitJacketType";
	InventoryItemArmsHighSecurityStraitJacketDrawCommon([
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/s0.png", DialogPrefix + "s0"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/s1.png", DialogPrefix + "s1"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/s2.png", DialogPrefix + "s2"],
		["Screens/Inventory/" + A.Group.Name + "/" + A.Name + "/s3.png", DialogPrefix + "s3"],
	]);
}

function InventoryItemArmsHighSecurityStraitJacketClickCommon(exitCallback, itemCallback) {
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

function InventoryItemArmsHighSecurityStraitJacketClickComponent(options) {
	InventoryItemArmsHighSecurityStraitJacketClickCommon(
		() => InventoryItemArmsHighSecurityStraitJacketPage = "base",
		i => {
			const selected = options[i];
			if (selected) InventoryItemArmsHighSecurityStraitJacketSetType(selected);
		},
	);
}

function InventoryItemArmsHighSecurityStraitJacketClickBase() {
	var configPages = ["crotch", "arms", "straps"];
	InventoryItemArmsHighSecurityStraitJacketClickCommon(
		() => DialogFocusItem = null,
		i => {
			const newPage = configPages[i];
			if (newPage) InventoryItemArmsHighSecurityStraitJacketPage = newPage;
		},
	);
}

function InventoryItemArmsHighSecurityStraitJacketClickCrotch() {
	InventoryItemArmsHighSecurityStraitJacketClickComponent(InventoryItemArmsHighSecurityStraitJacketCrotchOptions);
}

function InventoryItemArmsHighSecurityStraitJacketClickArms() {
	InventoryItemArmsHighSecurityStraitJacketClickComponent(InventoryItemArmsHighSecurityStraitJacketArmsOptions);
}

function InventoryItemArmsHighSecurityStraitJacketClickStraps() {
	InventoryItemArmsHighSecurityStraitJacketClickComponent(InventoryItemArmsHighSecurityStraitJacketStrapsOptions);
}

function InventoryItemArmsHighSecurityStraitJacketParseCurrent() {
	var type = (DialogFocusItem.Property && DialogFocusItem.Property.Type) || "c0a0s0";
	var [, c, a, s] = type.match(/^c(\d)a(\d)s(\d)$/);
	return [Number(c), Number(a), Number(s)];
}

function InventoryItemArmsHighSecurityStraitJacketSetType(option) {
	var C = CharacterGetCurrent();
	DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);

	var [c, a, s] = InventoryItemArmsHighSecurityStraitJacketParseCurrent();
	var componentType = option.Name[0];
	var componentIndex = Number(option.Name[1]);
	var hasChanged = false;
	switch (componentType) {
		case "c":
			if (c !== componentIndex) hasChanged = true;
			c = componentIndex;
			break;
		case "a":
			if (a !== componentIndex) hasChanged = true;
			a = componentIndex;
			break;
		case "s":
			if (s !== componentIndex) hasChanged = true;
			s = componentIndex;
			break;
	}

	if (hasChanged) {
		DialogFocusItem.Property = InventoryItemArmsHighSecurityStraitJacketMergeOptions(c, a, s);
		CharacterRefresh(C);
		ChatRoomCharacterUpdate(C);

		if (CurrentScreen === "ChatRoom") {
			InventoryItemArmsHighSecurityStraitJacketChatRoomMessage(option.Name);
		} else if (C.ID === 0) {
			// Player is using the item on herself
			DialogMenuButtonBuild(C);
		} else {
			// Otherwise, set the NPC's dialog
			C.CurrentDialog = DialogFind(C, "ItemArmsHighSecurityStraitJacket" + DialogFocusItem.Property.Type, "ItemArms");
		}
	}

	console.log(JSON.stringify(DialogFocusItem.Property, null, 4));
	InventoryItemArmsHighSecurityStraitJacketPage = "base";
}

function InventoryItemArmsHighSecurityStraitJacketMergeOptions(c, a, s) {
	var crotch = InventoryItemArmsHighSecurityStraitJacketCrotchOptions[c];
	var arms = InventoryItemArmsHighSecurityStraitJacketArmsOptions[a];
	var straps = InventoryItemArmsHighSecurityStraitJacketStrapsOptions[s];
	return [crotch, arms, straps].reduce((prop, componentProp) => {
		prop.Difficulty += (componentProp.Difficulty || 0);
		return prop;
	}, {
		Type: `c${c}a${a}s${s}`,
		Difficulty: 0,
		Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"],
	});
}

function InventoryItemArmsHighSecurityStraitJacketChatRoomMessage(componentName) {
	console.log(componentName);
}
