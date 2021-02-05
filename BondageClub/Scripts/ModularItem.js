const ModularItemBase = "Base";
const ModularItemConfig = {};

function ModularItemRegister(asset, modules) {
	const config = ModularItemConfig[ModularItemKey(asset)] = {
		modules,
	};
	ModularItemCreateLoadFunction(asset, config);
}

function ModularItemCreateLoadFunction(asset, { modules }) {
	const functionPrefix = ModularItemPrefix(asset);
	const loadFuncName = `${functionPrefix}Load`;
	window[loadFuncName] = function () {
		if (!DialogFocusItem.Property) {
			const C = CharacterGetCurrent();
			const currentConfig = ModularItemParseCurrent(asset, modules);
			DialogFocusItem.Property = ModularItemMergeOptions(asset, modules, currentConfig);
			CharacterRefresh(C);
			ChatRoomCharacterItemUpdate(C, asset.Group.Name);
		}
		DialogExtendedMessage = DialogFindPlayer(`${functionPrefix}${ModularItemBase}`);
	};
}

function ModularItemCreateDrawFunction(asset, modules) {

}

function ModularItemCreateClickFunction(asset, modules) {

}

function ModularItemGetConfig(asset) {
	return ModularItemConfig[ModularItemKey(asset)];
}

function ModularItemKey(asset) {
	return `${asset.Group.Name}${asset.Name}`;
}

function ModularItemPrefix(asset) {
	return `Inventory${ModularItemKey(asset)}`;
}

function ModularItemParseCurrent(asset, modules) {
	const type = (DialogFocusItem.Property && DialogFocusItem.Property.Type) || ModularItemConstructType(modules);
	return modules.map(module => {
		const index = type.indexOf(module.Key);
		if (index !== -1) {
			const match = type.substring(index + module.Key.length).match(/^\d+/);
			if (match) {
				return Number(match[0]);
			}
		}
		console.warn(`[${asset.Group.Name}:${asset.Name}] Module ${module.Key} not found in type "${type}"`);
		return 0;
	});
}

function ModularItemMergeOptions(asset, modules, values) {
	const options = modules.map((module, i) => module.options[values[i] || 0]);
	return options.reduce((property, componentProperty) => {
		property.Difficulty += (componentProperty.Difficulty || 0);
		// TODO: Handle other properties
		return property;
	}, {
		Type: ModularItemConstructType(modules, values),
		Difficulty: asset.Difficulty,
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
