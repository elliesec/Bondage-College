"use strict";

var InventoryItemVulvaLoversEggOptions = [
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
				Effect: ["Egged", "Vibrating"],
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
				Intensity: () => -1 + Math.floor(Math.random() * 5),
				ChangeTime: () => CurrentTime,
				Effect: ["Egged", "Vibrating"],
			},
		},
		{
			Name: "Edge",
			Property: {
				Mode: "Edge",
				Intensity: () => 0,
				ChangeTime: () => CurrentTime,
			},
		},
	],
];

function InventoryItemVulvaLoversEggLoad() {
	if (DialogFocusItem.Property == null) {
		DialogFocusItem.Property = InventoryItemVulvaLoversEggOptions[0][0].Property;
	}
}

function InventoryItemVulvaLoversEggDraw() {
	DrawRect(1387, 150, 225, 275, "white");
	var AssetPath = "Assets/" + DialogFocusItem.Asset.Group.Family + "/" + DialogFocusItem.Asset.Group.Name + "/Preview/" +
					DialogFocusItem.Asset.Name + ".png";
	if (DialogFocusItem.Property.Intensity >= 0) {
		DrawImageResize(AssetPath, 1389 + Math.floor(Math.random() * 3) - 1, 152 + Math.floor(Math.random() * 3) - 1, 221,
			221,
		);
	} else {
		DrawImageResize(AssetPath, 1389, 152, 221, 221);
	}
	DrawTextFit(DialogFocusItem.Asset.Description, 1500, 400, 221, "black");
	DrawText(
		DialogFind(Player, "Intensity" + DialogFocusItem.Property.Intensity.toString()).replace("Item", DialogFocusItem.Asset.Description),
		1500, 525, "White", "Gray",
	);

	let Y = 525;
	InventoryItemVulvaLoversEggOptions.forEach((OptionGroup) => {
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

function InventoryItemVulvaLoversEggClick() {
	// Exit Button
	if ((MouseX >= 1885) && (MouseX <= 1975) && (MouseY >= 25) && (MouseY <= 110)) {
		DialogFocusItem = null;
	}

	let Y = 525;
	InventoryItemVulvaLoversEggOptions.some((OptionGroup) => {
		var Handled = OptionGroup.some((Option, I) => {
			var X = 1175 + (I % 3) * 250;
			if (I % 3 === 0) {
				Y += 75;
			}
			if (MouseX >= X && MouseX <= X + 200 && MouseY >= Y && MouseY <= Y + 55) {
				if (Option.Property.Mode !== DialogFocusItem.Property.Mode) {
					InventoryItemVulvaLoversEggOptionSetMode(Option);
				}
				return true;
			}
		});
		Y += 40;
		return Handled;
	});
}

function InventoryItemVulvaLoversEggOptionSetMode(Option) {
	var C = CharacterGetCurrent();
	DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);
	var OldIntensity = DialogFocusItem.Property.Intensity;
	var Property = DialogFocusItem.Property = Object.assign({}, Option.Property);
	typeof Property.Intensity === "function" && (Property.Intensity = Property.Intensity());
	typeof Property.ChangeTime === "function" && (Property.ChangeTime = Property.ChangeTime());
	typeof Property.LastChange === "function" && (Property.LastChange = Property.LastChange());
	CharacterRefresh(C);
	ChatRoomCharacterUpdate(C);

	if (Property.Intensity !== OldIntensity) {
		var Direction = Property.Intensity > OldIntensity ? "Increase" : "Decrease";
		var Dictionary = [{ Tag: "DestinationCharacterName", Text: C.Name, MemberNumber: C.MemberNumber }];
		ChatRoomPublishCustomAction("Egg" + Direction + "To" + Property.Intensity, true, Dictionary);
	} else {
		// TODO: New chat message here
		// SourceCharacter adjusts the settings for DestinationCharacterName vibrating egg
	}
}
