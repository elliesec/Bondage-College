"use strict";

const InventoryItemMiscSafewordPadlockPasswordRegex = /^[A-Z]+$/;

// Loads the item extension properties
function InventoryItemMiscSafewordPadlockLoad() {
	const C = CharacterGetCurrent();

	if (DialogFocusSourceItem == null) return;

	if (DialogFocusSourceItem.Property == null) DialogFocusSourceItem.Property = {};
	const Property = DialogFocusSourceItem.Property;

	if (Property.Password == null) Property.Password = "PLEASE";
	if (Property.Hint == null) Property.Hint = "Say the magic word...";
	if (Property.LockSet == null) Property.LockSet = false;

	if (InventoryItemMiscSafewordPadlockIsSet()) {
		// Normal lock interface
		ElementCreateInput("Password", "text", "", "8");
		// the current code is shown for owners, lovers and the member whose number is on the padlock
		// It is also shown for the person who is bound by it
		if (C.ID == 0 ||
			Player.MemberNumber === Property.LockMemberNumber ||
			C.IsOwnedByPlayer() ||
			C.IsLoverOfPlayer()
		) {
			document.getElementById("Password").placeholder = Property.Password;
		}
	} else {
		// Set a password and hint
		ElementCreateInput("SetHint", "text", "", "140");
		ElementCreateInput("SetPassword", "text", "", "8");
		// the current code is shown for owners, lovers and the member whose number is on the padlock
		document.getElementById("SetPassword").placeholder = Property.Password;
		document.getElementById("SetHint").placeholder = Property.Hint;
	}
}

// Draw the extension screen
function InventoryItemMiscSafewordPadlockDraw() {
	if (!DialogFocusSourceItem) return;
	const Property = DialogFocusSourceItem.Property;

	DrawAssetPreview(1387, 225, DialogFocusItem.Asset);

	if (Property && Property.LockMemberNumber != null) {
		DrawText(
			DialogFindPlayer("LockMemberNumber") + " " + Property.LockMemberNumber.toString(),
			1500, 600, "white", "gray",
		);
	}

	if (InventoryItemMiscSafewordPadlockIsSet()) {
		// Normal lock interface
		if (Property.Hint) {
			DrawTextWrap("\"" + Property.Hint + "\"", 1000, 640, 1000, 120, null, null, 2);
		}
		MainCanvas.textAlign = "right";
		DrawText(DialogFindPlayer("PasswordPadlockOld"), 1350, 810, "white", "gray");
		ElementPosition("Password", 1643, 805, 550);
		MainCanvas.textAlign = "center";
		DrawButton(1360, 871, 250, 64, DialogFindPlayer("PasswordPadlockEnter"), "White", "");
		if (PreferenceMessage != "") DrawText(DialogFindPlayer(PreferenceMessage), 1500, 963, "Red", "Black");
	} else {
		ElementPosition("SetHint", 1643, 700, 550);
		ElementPosition("SetPassword", 1643, 770, 550);
		MainCanvas.textAlign = "left";
		DrawText(DialogFindPlayer("PasswordPadlockSetHint"), 1100, 703, "white", "gray");
		DrawText(DialogFindPlayer("PasswordPadlockSetPassword"), 1100, 773, "white", "gray");
		MainCanvas.textAlign = "center";
		DrawButton(1360, 871, 250, 64, DialogFindPlayer("PasswordPadlockChangePassword"), "White", "");
		if (PreferenceMessage != "") DrawText(DialogFindPlayer(PreferenceMessage), 1500, 963, "Red", "Black");
	}
}

function InventoryItemMiscSafewordPadlockUnlock(C, Item) {
	for (let A = 0; A < C.Appearance.length; A++) {
		if (C.Appearance[A].Asset.Group.Name == C.FocusGroup.Name) {
			C.Appearance[A] = Item;
			break;
		}
	}
	InventoryUnlock(C, C.FocusGroup.Name);
	ChatRoomPublishAction(C, Item, null, true, "ActionUnlock");
}

// Catches the item extension clicks
function InventoryItemMiscSafewordPadlockClick() {
	// Exits the screen
	if (MouseIn(1885, 25, 90, 90)) {
		return InventoryItemMiscSafewordPadlockExit();
	}

	if (!DialogFocusSourceItem) return;
	const Property = DialogFocusSourceItem.Property;

	const C = CharacterGetCurrent();

	if (InventoryItemMiscSafewordPadlockIsSet()) {
		// Opens the padlock
		if (MouseIn(1360, 871, 250, 64)) {
			if (ElementValue("Password").toUpperCase() == Property.Password) {
				InventoryItemMiscSafewordPadlockUnlock(C, DialogFocusSourceItem);
				InventoryItemMiscSafewordPadlockExit();
			}

			// Send fail message if online
			else if (CurrentScreen == "ChatRoom") {
				let Dictionary = [];
				Dictionary.push({ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber });
				Dictionary.push({ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber });
				Dictionary.push({ Tag: "FocusAssetGroup", AssetGroupName: C.FocusGroup.Name });
				Dictionary.push({ Tag: "Password", Text: ElementValue("Password") });
				ChatRoomPublishCustomAction("PasswordFail", true, Dictionary);
				InventoryItemMiscSafewordPadlockExit();
			} else { PreferenceMessage = "SafewordPadlockError"; }
		}

	} else {
		if (MouseIn(1360, 871, 250, 64)) {
			const pw = ElementValue("SetPassword").toUpperCase();
			const hint = ElementValue("SetHint");
			// We only accept code made of letters
			if (pw == "" || pw.match(InventoryItemMiscSafewordPadlockPasswordRegex)) {
				Property.LockSet = true;
				if (pw != "") {
					Property.Password = pw;
				}
				if (hint != "") {
					Property.Hint = hint;
				}
				for (let A = 0; A < C.Appearance.length; A++) {
					if (C.Appearance[A].Asset.Group.Name == C.FocusGroup.Name)
						C.Appearance[A] = DialogFocusSourceItem;
				}
				if (CurrentScreen == "ChatRoom") {
					let Dictionary = [];
					Dictionary.push({ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber });
					Dictionary.push({ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber });
					Dictionary.push({ Tag: "FocusAssetGroup", AssetGroupName: C.FocusGroup.Name });
					ChatRoomPublishCustomAction("PasswordChangeSuccess", true, Dictionary);
					InventoryItemMiscSafewordPadlockExit();
				} else {
					CharacterRefresh(C);
					InventoryItemMiscSafewordPadlockExit();
				}
			} else { PreferenceMessage = "SafewordPadlockErrorInput"; }
		}
	}
}

function InventoryItemMiscSafewordPadlockExit() {
	ElementRemove("Password");
	ElementRemove("SetPassword");
	ElementRemove("SetHint");
	PreferenceMessage = "";
	DialogFocusItem = null;
	if (DialogInventory != null) DialogMenuButtonBuild((Player.FocusGroup != null) ? Player : CurrentCharacter);
}

function InventoryItemMiscSafewordPadlockIsSet() {
	if (!DialogFocusSourceItem || !DialogFocusSourceItem.Property) {
		return false;
	} else if (DialogFocusSourceItem.Property.LockSet) {
		return true;
	} else {
		const { LockMemberNumber } = DialogFocusSourceItem.Property;
		return LockMemberNumber != null && LockMemberNumber !== Player.MemberNumber;
	}
}
