const ModularItemBase = "Base";
const ModularItemConfig = {};

const ModularItemChatSetting = {
	PER_OPTION: "perOption",
	PER_MODULE: "perModule",
};

function ModularItemRegister(asset, config) {
	const modularConfig = ModularItemCreateConfig(asset, config);
	ModularItemCreateLoadFunction(modularConfig);
	ModularItemCreateDrawFunction(modularConfig);
	ModularItemCreateClickFunction(modularConfig);
}

function ModularItemCreateLoadFunction(config) {
	const loadFunctionName = `${config.functionPrefix}Load`;
	window[loadFunctionName] = function () {
		if (!DialogFocusItem.Property) {
			const C = CharacterGetCurrent();
			const currentModuleValues = ModularItemParseCurrent(config);
			DialogFocusItem.Property = ModularItemMergeModuleValues(config, currentModuleValues);
			CharacterRefresh(C);
			ChatRoomCharacterItemUpdate(C, config.groupName);
		}
		DialogExtendedMessage = DialogFindPlayer(`${config.dialogSelectPrefix}${ModularItemBase}`);
	};
}

function ModularItemCreateDrawFunction(config) {
	const drawFunctionName = `${config.functionPrefix}Draw`;
	window[drawFunctionName] = function () {
		const currentModule = config.currentModule || ModularItemBase;
		const drawFunction = config.drawFunctions[currentModule];
		return drawFunction();
	};
}

function ModularItemCreateClickFunction(config) {
	const clickFunctionName = `${config.functionPrefix}Click`;
	window[clickFunctionName] = function () {
		const currentModule = config.currentModule || ModularItemBase;
		const clickFunction = config.clickFunctions[currentModule];
		return clickFunction();
	};
}

function ModularItemCreateConfig(asset, { Modules, ChatSetting }) {
	const key = ModularItemKey(asset);
	const config = ModularItemConfig[key] = {
		asset,
		chatSetting: ChatSetting || ModularItemChatSetting.PER_OPTION,
		assetName: asset.Name,
		groupName: asset.Group.Name,
		key,
		functionPrefix: `Inventory${key}`,
		dialogSelectPrefix: `${key}Select`,
		dialogModulePrefix: `${key}Module`,
		dialogTypePrefix: `${key}Type`,
		chatMessagePrefix: `${key}Set`,
		modules: Modules,
		currentModule: ModularItemBase,
		pages: {
			[ModularItemBase]: 0,
		},
	};
	config.drawFunctions = { [ModularItemBase]: ModularItemCreateDrawBaseFunction(config) };
	config.clickFunctions = { [ModularItemBase]: ModularItemCreateClickBaseFunction(config) };
	Modules.forEach(module => {
		config.pages[module.Name] = 0;
		config.drawFunctions[module.Name] = () => ModularItemDrawModule(module, config);
		config.clickFunctions[module.Name] = () => ModularItemClickModule(module, config);
	});
	return config;
}

function ModularItemCreateDrawBaseFunction(config) {
	return () => {
		const currentModuleValues = ModularItemParseCurrent(config);
		const buttonDefinitions = config.modules.map((module, i) => ([
			`${AssetGetInventoryPath(config.asset)}/${module.Key}${currentModuleValues[i]}.png`,
			`${config.dialogModulePrefix}${module.Name}`,
		]));
		return ModularItemDrawCommon(buttonDefinitions, config);
	};
}

function ModularItemMapOptionToButtonDefinition(option, i, module, { asset, dialogTypePrefix }) {
	const C = CharacterGetCurrent();
	const failLockCheck = DialogFocusItem.Property.LockedBy && !DialogCanUnlock(C, DialogFocusItem);
	const failSkillCheck = option.SelfBondage && C.ID === 0 && SkillGetLevelReal(C, "SelfBondage") < option.SelfBondage;
	const typeName = `${module.Key}${i}`;
	return [
		`${AssetGetInventoryPath(asset)}/${typeName}.png`,
		`${dialogTypePrefix}${typeName}`,
		(failLockCheck || failSkillCheck) ? "#ffc0cb" : "#fff",
	];
}

function ModularItemDrawCommon(buttonDefinitions, { asset }) {
	DrawAssetPreview(1387, 55, asset);
	DrawText(DialogExtendedMessage, 1500, 375, "#fff", "808080");

	buttonDefinitions.forEach((buttonDefinition, i) => {
		var x = 1200 + (i % 2 * 387);
		var y = 450 + (Math.floor(i / 2) * 300);
		DrawPreviewBox(x, y, buttonDefinition[0], "", { Background: buttonDefinition[2], Hover: true });
		DrawText(DialogFindPlayer(buttonDefinition[1]), x + 113, y - 20, "#fff", "#808080");
	});
}

function ModularItemDrawModule(module, config) {
	const buttonDefinitions = module.Options.map((option, i) => ModularItemMapOptionToButtonDefinition(option, i, module, config));
	ModularItemDrawCommon(buttonDefinitions, config);
}

function ModularItemCreateClickBaseFunction(config) {
	return () => {
		ModularItemClickCommon(
			() => DialogFocusItem = null,
			i => {
				const module = config.modules[i];
				if (module) ModularItemModuleTransition(module.Name, config);
			},
		);
	};
}

function ModularItemClickModule(module, config) {
	ModularItemClickCommon(
		() => ModularItemModuleTransition(ModularItemBase, config),
		i => {
			const selected = module.Options[i];
			if (selected) ModularItemSetType(module, i, config);
		},
	);
}

function ModularItemClickCommon(exitCallback, itemCallback) {
	// Exit button
	if (MouseIn(1885, 25, 90, 90)) {
		return exitCallback();
	}

	for (let i = 0; i < 4; i++) {
		var x = 1200 + (i % 2 * 387);
		var y = 450 + (Math.floor(i / 2) * 300);
		if (MouseIn(x, y, 225, 225)) {
			itemCallback(i);
		}
	}
}

function ModularItemModuleTransition(newModule, config) {
	config.currentModule = newModule;
	DialogExtendedMessage = DialogFindPlayer(config.dialogSelectPrefix + newModule);
}

function ModularItemKey(asset) {
	return `${asset.Group.Name}${asset.Name}`;
}

function ModularItemParseCurrent({ assetName, groupName, modules }) {
	const type = (DialogFocusItem.Property && DialogFocusItem.Property.Type) || ModularItemConstructType(modules);
	return modules.map(module => {
		const index = type.indexOf(module.Key);
		if (index !== -1) {
			const match = type.substring(index + module.Key.length).match(/^\d+/);
			if (match) {
				return Number(match[0]);
			}
		}
		console.warn(`[${groupName}:${assetName}] Module ${module.Key} not found in type "${type}"`);
		return 0;
	});
}

function ModularItemMergeModuleValues(config, moduleValues) {
	const options = config.modules.map((module, i) => module.Options[moduleValues[i] || 0]);
	return options.reduce((property, componentProperty) => {
		property.Difficulty += (componentProperty.Difficulty || 0);
		if (componentProperty.Block) ModularItemAddToArray(property.Block, componentProperty.Block);
		if (componentProperty.Hide) ModularItemAddToArray(property.Hide, componentProperty.Hide);
		if (componentProperty.HideItem) ModularItemAddToArray(property.HideItem, componentProperty.HideItem);
		return property;
	}, {
		Type: ModularItemConstructType(config.modules, moduleValues),
		Difficulty: config.asset.Difficulty,
		Block: config.asset.Block || [],
		Hide: config.asset.Hide || [],
		HideItem: config.asset.HideItem || [],
	});
}

function ModularItemConstructType(modules, values) {
	values = values || [];
	let type = "";
	modules.forEach((module, i) => {
		type += module.Key;
		type += (values[i] || 0);
	});
	return type;
}

function ModularItemSetType(module, index, config) {
	const C = CharacterGetCurrent();
	DialogFocusItem = InventoryGet(C, C.FocusGroup.Name);
	const option = module.Options[index];

	// Lock check - cannot change type if you can't unlock the item
	if (DialogFocusItem.Property.LockedBy && !DialogCanUnlock(C, DialogFocusItem)) {
		DialogExtendedMessage = DialogFindPlayer("CantChangeWhileLocked");
		return;
	}

	// Self bondage requirement check
	if (option.SelfBondage && C.ID === 0 && SkillGetLevelReal(C, "SelfBondage") < option.SelfBondage) {
		DialogExtendedMessage = DialogFindPlayer("RequireSelfBondage" + option.SelfBondage);
		return;
	}

	const currentModuleValues = ModularItemParseCurrent(config);
	const moduleIndex = config.modules.indexOf(module);
	let changed = false;
	const newModuleValues = currentModuleValues.map((value, i) => {
		if (i === moduleIndex && index !== value) {
			changed = true;
			return index;
		}
		return value;
	});

	if (changed) {
		Object.assign(DialogFocusItem.Property, ModularItemMergeModuleValues(config, newModuleValues));
		CharacterRefresh(C);
		ChatRoomCharacterItemUpdate(C, config.groupName);

		if (ServerPlayerIsInChatRoom()) {
			ModularItemChatRoomMessage(module, index, config);
		} else if (C.ID === 0) {
			DialogMenuButtonBuild(C);
		} else {
			C.CurrentDialog = DialogFind(C, config.key + DialogFocusItem.Property.Type, config.groupName);
		}
	}

	ModularItemModuleTransition(ModularItemBase, config);
}

function ModularItemChatRoomMessage(module, index, { chatSetting, chatMessagePrefix }) {
	const C = CharacterGetCurrent();
	let msg = chatMessagePrefix;
	switch (chatSetting) {
		case ModularItemChatSetting.PER_OPTION:
			msg += `${module.Key}${index}`;
			break;
		case ModularItemChatSetting.PER_MODULE:
			msg += module.Name;
			break;
	}
	var dictionary = [
		{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
		{ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
	];
	ChatRoomPublishCustomAction(msg, false, dictionary);
}

function ModularItemAddToArray(dest, src) {
	src.forEach(item => {
		if (!dest.includes(item)) dest.push(item);
	});
}
