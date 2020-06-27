"use strict";

function VibratorModeUpdate(Item, C) {
	if (!Item.Property || !Item.Property.Mode) {
		return;
	}
	CommonCallFunctionByName("VibratorModeUpdate" + Item.Property.Mode, Item, C);
}

function VibratorModePublish(C, OldIntensity, Intensity) {
	var Direction = Intensity > OldIntensity ? "Increase" : "Decrease";
	var Dictionary = [{ Tag: "DestinationCharacterName", Text: C.Name, MemberNumber: C.MemberNumber }];
	if (CurrentScreen == "ChatRoom") {
		ServerSend("ChatRoomChat", { Content: "Egg" + Direction + "To" + Intensity, Type: "Action", Dictionary });
		ChatRoomCharacterItemUpdate(C);
		ActivityChatRoomArousalSync(C);
	}
}

function VibratorModeUpdateRandom(Item, C) {
	var OldIntensity = Item.Property.Intensity;
	Object.assign(Item.Property, {
		Intensity: CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]),
		ChangeTime: Math.floor(CurrentTime + 60000 + Math.random() * 120000), // Next update 1 - 3 minutes from now
		Effect: ["Egged", "Vibrating"],
	});
	VibratorModePublish(C, OldIntensity, Item.Property.Intensity);
}

function VibratorModeUpdateEscalate(Item, C) {
	var OldIntensity = Item.Property.Intensity;
	var NewIntensity = (OldIntensity + 1) % 4;
	var TimeFactor = Math.pow((4 - NewIntensity), 2);
	var TimeToNextUpdate = (5000 + Math.random() * 5000) * TimeFactor;
	Object.assign(Item.Property, {
		Intensity: NewIntensity,
		ChangeTime: Math.floor(CurrentTime + TimeToNextUpdate),
		Effect: ["Egged", "Vibrating"],
	});
	VibratorModePublish(C, OldIntensity, NewIntensity);
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
	// TODO: Implement this mode
}

var VibratorModeState = {
	DEFAULT: "default",
	DENY: "deny",
	ORGASM: "orgasm",
	REST: "rest",
};

function VibratorModeUpdateStateBased(Item, C, TransitionsFromDefault) {
	var Arousal = C.ArousalSettings.Progress;
	var LastChange = Item.Property.LastChange || 0;
	var TimeSinceLastChange = CurrentTime - LastChange;
	var OldState = Item.Property.State || VibratorModeState.DEFAULT;
	var OldIntensity = Item.Property.Intensity;
	var NewState = OldState;
	var NewIntensity = OldIntensity;
	var ONE_MINUTE = 60000;
	var TWO_MINUTES = 120000;
	var THREE_MINUTES = 180000;
	var NINE_MINUTES = 540000;

	switch (OldState) {
		case VibratorModeState.DEFAULT:
			if (Arousal > 90) {
				// If arousal is high, decide whether to deny or orgasm
				NewState = CommonRandomItemFromList(VibratorModeState.DEFAULT, TransitionsFromDefault);
			}
			if (TimeSinceLastChange > ONE_MINUTE && Math.random() < 0.05) {
				// If it's been at least a minute since the last intensity change, there's a 5% chance to change intensity
				NewIntensity = CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]);
			}
			break;
		case VibratorModeState.DENY:
			if (Arousal > 95 && TimeSinceLastChange > TWO_MINUTES && Math.random() < 0.2) {
				// In deny mode, there's a small chance to change to rest mode after two minutes
				NewState = VibratorModeState.REST;
				NewIntensity = -1;
			} else if (Arousal > 95) {
				// If arousal is too high, change intensity back down to tease
				NewIntensity = 0;
			} else if (TimeSinceLastChange > TWO_MINUTES && Math.random() < 0.05) {
				// Otherwise, there's a 5% chance to change intensity if it's been more than two minutes since the last change
				NewIntensity = CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]);
			}
			break;
		case VibratorModeState.ORGASM:
			if (C.ArousalSettings.OrgasmStage > 0) {
				// If we're in orgasm mode and the player is either resisting or mid-orgasm, change back to either rest or default mode
				NewState = Math.random() < 0.75 ? VibratorModeState.REST : VibratorModeState.DEFAULT;
			} else if (TimeSinceLastChange > ONE_MINUTE && Math.random() < 0.05) {
				// Otherwise, if it's been over a minute since the last intensity change, there's a 5% chance to change intensity
				NewIntensity = CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]);
			}
			break;
		case VibratorModeState.REST:
			if (TimeSinceLastChange > THREE_MINUTES && Math.random() < Math.pow((TimeSinceLastChange - THREE_MINUTES) / NINE_MINUTES, 2)) {
				// Rest between 3 and 12 minutes
				NewState = VibratorModeState.DEFAULT;
				NewIntensity = CommonRandomItemFromList(OldIntensity, [0, 1, 2, 3]);
			}
			break;
		default:
			// Catch-all - this shouldn't happen, but if it does (e.g. via console), reset to default state
			NewState = VibratorModeState.DEFAULT;
			NewIntensity = CommonRandomItemFromList(-1, [0, 1, 2, 3]);
			break;
	}

	var IntensityChanged = NewIntensity !== OldIntensity;

	Object.assign(Item.Property, {
		State: NewState,
		Intensity: NewIntensity,
		ChangeTime: CurrentTime + 2000,
		LastChange: IntensityChanged ? CurrentTime : Item.Property.LastChange,
		Effect: NewIntensity === -1 ? ["Egged"] : ["Egged", "Vibrating"],
	});

	if (Item.Property.Intensity !== OldIntensity) {
		VibratorModePublish(C, OldIntensity, Item.Property.Intensity);
	}
}
