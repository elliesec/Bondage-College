"use strict";

// TODO: Can some of the dynamic initialisers be improved?
var InventoryItemVulvaLoversVibratorOptions = [
	[
		{
			Name: "TurnOff",
			Property: {
				Mode: "Off",
				Intensity: -1,
				Effect: ["Egged"],
			},
		},
		{
			Name: "Low",
			Property: {
				Mode: "Low",
				Intensity: 0,
				Effect: ["Egged", "Vibrating"],
			},
		},
		{
			Name: "Medium",
			Property: {
				Mode: "Medium",
				Intensity: 1,
				Effect: ["Egged", "Vibrating"],
			},
		},
		{
			Name: "High",
			Property: {
				Mode: "High",
				Intensity: 2,
				Effect: ["Egged", "Vibrating"],
			},
		},
		{
			Name: "Maximum",
			Property: {
				Mode: "Maximum",
				Intensity: 3,
				Effect: ["Egged", "Vibrating"],
			},
		},
	],
	[
		{
			Name: "Random",
			Property: {
				Mode: "Random",
				Intensity: () => CommonRandomItemFromList(null, [-1, 0, 1, 2, 3]),
				ChangeTime: () => Math.floor(CurrentTime + 60000 + Math.random() * 120000),
				Effect: (Intensity) => Intensity >= 0 ? ["Egged", "Vibrating"] : ["Egged"],
			},
		},
		{
			Name: "Escalate",
			Property: {
				Mode: "Escalate",
				Intensity: 0,
				ChangeTime: Math.floor(CurrentTime + (5000 + Math.random() * 5000) * 16),
				Effect: ["Egged", "Vibrating"],
			},
		},
		{
			Name: "Tease",
			Property: {
				Mode: "Tease",
				Intensity: () => CommonRandomItemFromList(-1, [0, 1, 2, 3]),
				ChangeTime: () => CurrentTime + 2000,
				LastChange: () => CurrentTime,
				Effect: ["Egged", "Vibrating"],
			},
		},
		{
			Name: "Deny",
			Property: {
				Mode: "Deny",
				Intensity: () => CommonRandomItemFromList(-1, [0, 1, 2, 3]),
				ChangeTime: () => CurrentTime,
				LastChange: () => CurrentTime,
				Effect: ["Egged", "Vibrating", "Edged"],
			},
		},
		{
			Name: "Edge",
			Property: {
				Mode: "Edge",
				Intensity: CommonRandomItemFromList(null, [0, 1]),
				ChangeTime: () => Math.floor(CurrentTime + 60000 + Math.random() * 120000),
				Effect: ["Egged", "Vibrating", "Edged"],
			},
		},
	],
];

function InventoryItemVulvaLoversVibratorLoad() {
	if (!DialogFocusItem.Property || !DialogFocusItem.Property.Mode) {
		DialogFocusItem.Property = Object.assign({}, DialogFocusItem.Property, InventoryItemVulvaLoversVibratorOptions[0][0].Property);
	}
}

function InventoryItemVulvaLoversVibratorDraw() {
	var { Asset, Property } = DialogFocusItem;
	var Description = Asset.Description;
	var AssetPath = "Assets/" + Asset.Group.Family + "/" + Asset.Group.Name + "/Preview/" + Asset.Name + ".png";

	var X = 1389;
	var Y = 102;
	if (DialogFocusItem.Property.Intensity >= 0) {
		X += Math.floor(Math.random() * 3) - 1;
		Y += Math.floor(Math.random() * 3) - 1;
	}
	DrawRect(1387, 100, 225, 275, "white");
	DrawImageResize(AssetPath, X, Y, 221, 221);

	DrawTextFit(Description, 1500, 350, 221, "black");
	var ItemMemberNumber = DialogFind(Player, "ItemMemberNumber").replace("Item", Description);
	DrawText(ItemMemberNumber + " " + Property.ItemMemberNumber, 1500, 450, "white", "gray");
	var ItemIntensity = DialogFind(Player, "Intensity" + Property.Intensity.toString()).replace("Item", Description);
	DrawText(ItemIntensity, 1500, 525, "white", "gray");

	InventoryItemVulvaLoversVibratorOptions.forEach((OptionGroup) => {
		var Y = 525;
		OptionGroup.forEach((Option, I) => {
			var X = 1175 + (I % 3) * 225;
			if (I % 3 === 0) {
				Y += 75;
			}
			var Color = DialogFocusItem.Property.Mode === Option.Property.Mode ? "#888" : "White";
			DrawButton(X, Y, 200, 55, DialogFind(Player, Option.Name), Color);
		});
		Y += 40;
	});
}

function InventoryItemVulvaLoversVibratorClick() {
	// Exit Button
	if (CommonIsClickAt(1885, 25, 90, 85)) {
		DialogFocusItem = null;
	}

	let Y = 525;
	InventoryItemVulvaLoversVibratorOptions.some((OptionGroup) => {
		var Handled = OptionGroup.some((Option, I) => {
			var X = 1175 + (I % 3) * 225;
			if (I % 3 === 0) {
				Y += 75;
			}
			if (CommonIsClickAt(X, Y, 200, 55)) {
				if (Option.Property.Mode !== DialogFocusItem.Property.Mode) {
					InventoryItemVulvaLoversVibratorOptionSetMode(Option);
				}
				return true;
			}
		});
		Y += 40;
		return Handled;
	});
}

function InventoryItemVulvaLoversVibratorOptionSetMode(Option) {
	var C = CharacterGetCurrent();
	DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);
	var OldIntensity = DialogFocusItem.Property.Intensity;
	var Property = DialogFocusItem.Property = Object.assign({}, DialogFocusItem.Property, Option.Property);
	typeof Property.Intensity === "function" && (Property.Intensity = Property.Intensity());
	typeof Property.ChangeTime === "function" && (Property.ChangeTime = Property.ChangeTime());
	typeof Property.LastChange === "function" && (Property.LastChange = Property.LastChange());
	typeof Property.Effect === "function" && (Property.Effect = Property.Effect(Property.Intensity));
	CharacterRefresh(C);
	ChatRoomCharacterUpdate(C);

	var Message;
	var Dictionary = [];

	if (Property.Intensity !== OldIntensity) {
		var Direction = Property.Intensity > OldIntensity ? "Increase" : "Decrease";
		Message = "Egg" + Direction + "To" + Property.Intensity;
		Dictionary.push({ Tag: "DestinationCharacterName", Text: C.Name, MemberNumber: C.MemberNumber });
	} else {
		Message = "EggModeChange";
		Dictionary.push(
			{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
			{ Tag: "DestinationCharacterName", Text: C.Name, MemberNumber: C.MemberNumber },
		);
	}

	ChatRoomPublishCustomAction(Message, true, Dictionary);
}
