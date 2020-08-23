"use strict";

// Loads the item extension properties
function InventoryItemNeckShockCollarLoad() {
	InventoryItemNeckAccessoriesCollarShockUnitLoad();
}

// Draw the item extension screen
function InventoryItemNeckShockCollarDraw() {
	InventoryItemNeckAccessoriesCollarShockUnitDraw();
}

// Catches the item extension clicks
function InventoryItemNeckShockCollarClick() {
	InventoryItemNeckAccessoriesCollarShockUnitClick();
}

function AssetsItemNeckShockCollarBeforeDraw(data) {
	var persistentData = data.PersistentData();
	var overriddenData = { CA: data.CA, L: data.L };
	if (data.L === "_NoBlink" && persistentData.Blinking) {
		overriddenData.Color = "#2f0";
		overriddenData.L = "_Blink";
	}
	return overriddenData;
}

function AssetsItemNeckShockCollarScriptDraw(data) {
	var persistentData = data.PersistentData();
	if (typeof persistentData.ChangeTime !== "number") persistentData.ChangeTime = CommonTime() + 4000;
	if (typeof persistentData.Blinking !== "boolean") persistentData.Blinking = false;

	if (persistentData.ChangeTime < CommonTime()) {
		persistentData.Blinking = !persistentData.Blinking;
		var timeToNextRefresh = persistentData.Blinking ? 1000 : 4000;
		persistentData.ChangeTime = CommonTime() + timeToNextRefresh;
		AnimationRequestRefreshRate(data.C, 5000 - timeToNextRefresh);
		AnimationRequestDraw(data.C);
	}
}
