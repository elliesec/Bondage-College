"use strict";

var VibratorModeState = {
	DEFAULT: "Default",
	DENY: "Deny",
	ORGASM: "Orgasm",
	REST: "Rest",
};

var VibratorModeOptions = {
	Standard: [
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
	Advanced: [
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
};

function VibratorModeLoad(Options) {
	var { Asset, Property } = DialogFocusItem;
	if (!Property || !Property.Mode) {
		Options = (Options && Options.length) ? Options : ["Standard"];
		var FirstOption = VibratorModeOptions[Options[0]][0] || VibratorModeOptions.Standard[0];
		DialogFocusItem.Property = Object.assign({}, Property, FirstOption.Property);
		VibratorModeSetDynamicProperties(Property);
		var C = CharacterGetCurrent();
		CharacterRefresh(C);
		ChatRoomCharacterItemUpdate(C, Asset.Group.Name);
	}
}

function VibratorModeDraw(Options) {
	VibratorModeDrawHeader();
	VibratorModeDrawControls(Options);
}

function VibratorModeDrawHeader() {
	var { Asset, Property } = DialogFocusItem;
	var AssetPath = "Assets/" + Asset.Group.Family + "/" + Asset.Group.Name + "/Preview/" + Asset.Name + ".png";

	var X = 1389;
	var Y = 102;
	if (Property.Intensity >= 0) {
		X += Math.floor(Math.random() * 3) - 1;
		Y += Math.floor(Math.random() * 3) - 1;
	}
	DrawRect(1387, 100, 225, 275, "white");
	DrawImageResize(AssetPath, X, Y, 221, 221);
	DrawTextFit(Asset.Description, 1500, 350, 221, "black");
}

function VibratorModeDrawControls(Options, Y) {
	Y = typeof Y === "number" ? Y : 450;
	Options = Options || ["Standard"];
	var { Asset, Property } = DialogFocusItem;
	var ItemIntensity = DialogFind(Player, "Intensity" + Property.Intensity.toString()).replace("Item", Asset.Description);
	DrawText(ItemIntensity, 1500, Y, "white", "gray");

	Options.forEach((OptionName) => {
		var OptionGroup = VibratorModeOptions[OptionName];
		OptionGroup.forEach((Option, I) => {
			var X = 1175 + (I % 3) * 225;
			if (I % 3 === 0) Y += 75;
			var Color = Property.Mode === Option.Property.Mode ? "#888" : "White";
			DrawButton(X, Y, 200, 55, DialogFind(Player, Option.Name), Color);
		});
		Y += 40;
	});
}

function VibratorModeClick(Options, Y) {
	Y = typeof Y === "number" ? Y : 450;
	// Exit Button
	if (MouseIn(1885, 25, 90, 85)) DialogFocusItem = null;

	Options.some((OptionName) => {
		var OptionGroup = VibratorModeOptions[OptionName];
		var Handled = OptionGroup.some((Option, I) => {
			var X = 1175 + (I % 3) * 225;
			if (I % 3 === 0) Y += 75;
			if (MouseIn(X, Y, 200, 55)) {
				if (Option.Property.Mode !== DialogFocusItem.Property.Mode)
					VibratorModeSetMode(Option);
				return true;
			}
		});
		Y += 40;
		return Handled;
	});
}

function VibratorModeSetMode(Option) {
	var C = CharacterGetCurrent();
	DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);
	var OldIntensity = DialogFocusItem.Property.Intensity;
	var Property = DialogFocusItem.Property = Object.assign({}, DialogFocusItem.Property, Option.Property);
	VibratorModeSetDynamicProperties(Property);
	CharacterRefresh(C);
	ChatRoomCharacterItemUpdate(C, C.FocusGroup.Name);

	var Message;
	var Dictionary = [
		{ Tag: "DestinationCharacterName", Text: C.Name, MemberNumber: C.MemberNumber },
		{ Tag: "AssetName", AssetName: DialogFocusItem.Asset.Name },
	];

	if (Property.Intensity !== OldIntensity) {
		var Direction = Property.Intensity > OldIntensity ? "Increase" : "Decrease";
		Message = "Vibe" + Direction + "To" + Property.Intensity;
	} else {
		Message = "VibeModeChange";
		Dictionary.push({ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber });
	}

	ChatRoomPublishCustomAction(Message, false, Dictionary);
}

function VibratorModeSetDynamicProperties(Property) {
	if (typeof Property.Intensity === "function") Property.Intensity = Property.Intensity();
	if (typeof Property.ChangeTime === "function") Property.ChangeTime = Property.ChangeTime();
	if (typeof Property.LastChange === "function") Property.LastChange = Property.LastChange();
	if (typeof Property.Effect === "function") Property.Effect = Property.Effect(Property.Intensity);
}

function VibratorModeUpdate(Item, C) {
	if (!Item.Property || !Item.Property.Mode) return;
	CommonCallFunctionByName("VibratorModeUpdate" + Item.Property.Mode, Item, C);
}

function VibratorModeUpdateRandom(Item, C) {
	var OneMinute = 60000;
	var OldIntensity = Item.Property.Intensity;
	Object.assign(Item.Property, {
		Intensity: CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]),
		ChangeTime: Math.floor(CurrentTime + OneMinute + Math.random() * 2 * OneMinute), // Next update 1 - 3 minutes from now
		Effect: ["Egged", "Vibrating"],
	});
	VibratorModePublish(C, Item, OldIntensity, Item.Property.Intensity);
}

function VibratorModeUpdateEscalate(Item, C) {
	var OldIntensity = Item.Property.Intensity;
	var Intensity = (OldIntensity + 1) % 4;
	// As intensity increases, time between updates decreases
	var TimeFactor = Math.pow((4 - Intensity), 2);
	var TimeToNextUpdate = (5000 + Math.random() * 5000) * TimeFactor;
	Object.assign(Item.Property, {
		Intensity: Intensity,
		ChangeTime: Math.floor(CurrentTime + TimeToNextUpdate),
		Effect: ["Egged", "Vibrating"],
	});
	VibratorModePublish(C, Item, OldIntensity, Intensity);
}

function VibratorModeUpdateTease(Item, C) {
	// Tease mode allows orgasm and denial states once arousal gets high enough
	VibratorModeUpdateStateBased(Item, C, [VibratorModeState.DENY, VibratorModeState.ORGASM]);
}

function VibratorModeUpdateDeny(Item, C) {
	// Deny mode only allows the denial state on high arousal
	VibratorModeUpdateStateBased(Item, C, [VibratorModeState.DENY]);
}

function VibratorModeUpdateEdge(Item, C) {
	var ThirtySeconds = 30000;
	var OldIntensity = Item.Property.Intensity;
	var NewIntensity = Math.min(Item.Property.Intensity + 1, 3);
	Object.assign(Item.Property, {
		Intensity: NewIntensity,
		ChangeTime: Math.floor(CurrentTime + ThirtySeconds + Math.random() * ThirtySeconds), // Next update 30-60 seconds from now
		Effect: ["Egged", "Vibrating", "Edged"],
	});
	if (NewIntensity === 3) {
		// If we've hit max intensity, no more changes needed
		delete Item.Property.ChangeTime;
	}
	VibratorModePublish(C, Item, OldIntensity, Item.Property.Intensity);
}

function VibratorModeUpdateStateBased(Item, C, TransitionsFromDefault) {
	var Arousal = C.ArousalSettings.Progress;
	var TimeSinceLastChange = CurrentTime - (Item.Property.LastChange || 0);
	var OldState = Item.Property.State || VibratorModeState.DEFAULT;
	var OldIntensity = Item.Property.Intensity;

	var { State, Intensity } = CommonCallFunctionByName(
		"VibratorModeStateUpdate" + OldState,
		C,
		Arousal,
		TimeSinceLastChange,
		OldIntensity,
		TransitionsFromDefault,
	);

	if (!State) State = VibratorModeState.DEFAULT;
	if (typeof Intensity !== "number" || Intensity < -1 || Intensity > 3) Intensity = OldIntensity;

	var Effect = ["Egged"];
	if (State === VibratorModeState.DENY || Item.Property.Mode === "Deny") Effect.push("Edged");
	if (Intensity !== -1) Effect.push("Vibrating");

	Object.assign(Item.Property, {
		State,
		Intensity,
		ChangeTime: CurrentTime + 5000,
		LastChange: Intensity !== OldIntensity ? CurrentTime : Item.Property.LastChange,
		Effect,
	});

	if (Intensity !== OldIntensity) VibratorModePublish(C, Item, OldIntensity, Intensity);
}

function VibratorModeStateUpdateDefault(C, Arousal, TimeSinceLastChange, OldIntensity, TransitionsFromDefault) {
	var OneMinute = 60000;
	var State = VibratorModeState.DEFAULT;
	var Intensity = OldIntensity;
	// If arousal is high, decide whether to deny or orgasm, based on provided transitions
	if (Arousal > 90) State = CommonRandomItemFromList(VibratorModeState.DEFAULT, TransitionsFromDefault);
	// If it's been at least a minute since the last intensity change, there's a 5% chance to change intensity
	if (TimeSinceLastChange > OneMinute && Math.random() < 0.05) Intensity = CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]);
	return { State, Intensity };
}

function VibratorModeStateUpdateDeny(C, Arousal, TimeSinceLastChange, OldIntensity) {
	var TwoMinutes = 2 * 60000;
	var State = VibratorModeState.DENY;
	var Intensity = OldIntensity;
	if (Arousal > 95 && TimeSinceLastChange > TwoMinutes && Math.random() < 0.2) {
		// In deny mode, there's a small chance to change to rest mode after two minutes
		State = VibratorModeState.REST;
		Intensity = -1;
	} else if (Arousal > 95) {
		// If arousal is too high, change intensity back down to tease
		Intensity = 0;
	} else if (TimeSinceLastChange > TwoMinutes && Math.random() < 0.05) {
		// Otherwise, there's a 5% chance to change intensity if it's been more than two minutes since the last change
		Intensity = CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]);
	}
	return { State, Intensity };
}

function VibratorModeStateUpdateOrgasm(C, Arousal, TimeSinceLastChange, OldIntensity) {
	var OneMinute = 60000;
	var State = VibratorModeState.ORGASM;
	var Intensity = OldIntensity;
	if (C.ArousalSettings.OrgasmStage > 0) {
		// If we're in orgasm mode and the player is either resisting or mid-orgasm, change back to either rest or default mode
		State = Math.random() < 0.75 ? VibratorModeState.REST : VibratorModeState.DEFAULT;
	} else if (TimeSinceLastChange > OneMinute && Math.random() < 0.05) {
		// Otherwise, if it's been over a minute since the last intensity change, there's a 5% chance to change intensity
		Intensity = CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]);
	}
	return { State, Intensity };
}

function VibratorModeStateUpdateRest(C, Arousal, TimeSinceLastChange, OldIntensity) {
	var ThreeMinutes = 3 * 60000;
	var NineMinutes = 9 * 60000;
	var State = VibratorModeState.ORGASM;
	var Intensity = OldIntensity;
	if (TimeSinceLastChange > ThreeMinutes && Math.random() < Math.pow((TimeSinceLastChange - ThreeMinutes) / NineMinutes, 2)) {
		// Rest between 3 and 12 minutes
		State = VibratorModeState.DEFAULT;
		Intensity = CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]);
	}
	return { State, Intensity };
}

function VibratorModePublish(C, Item, OldIntensity, Intensity) {
	var Direction = Intensity > OldIntensity ? "Increase" : "Decrease";
	var Dictionary = [
		{ Tag: "DestinationCharacterName", Text: C.Name, MemberNumber: C.MemberNumber },
		{ Tag: "AssetName", AssetName: Item.Asset.Name },
		{ Automatic: true },
	];
	if (Item.Property.ItemMemberNumber) Dictionary.push({ Tag: "ItemMemberNumber", MemberNumber: Item.Property.ItemMemberNumber });
	if (CurrentScreen == "ChatRoom") {
		ServerSend("ChatRoomChat", { Content: "Egg" + Direction + "To" + Intensity, Type: "Action", Dictionary });
		ChatRoomCharacterItemUpdate(C);
		ActivityChatRoomArousalSync(C);
	}
}
