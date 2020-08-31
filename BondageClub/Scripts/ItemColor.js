"use strict";

const ItemColorConfig = {
    buttonSpacing: 26,
    buttonSize: 65,
    headerButtonSize: 90,
    colorPickerButtonWidth: 65,
    colorDisplayWidth: 160,
};

const ItemColorMode = {
    COLOR_PICKER: "ColorPicker",
};

let ItemColorCurrentMode = null;
let ItemColorStateKey;
let ItemColorState;
let ItemColorPage;
let ItemColorLayerPages = {};
let ItemColorPickerIndices = [];
let ItemColorExitListeners = [];
let ItemColorBackup;

function ItemColorLoad(item) {
    ItemColorCurrentMode = null;
    ItemColorStateKey = null;
    ItemColorState = null;
    ItemColorPage = 0;
    ItemColorLayerPages = {};
    ItemColorPickerIndices = [];
    ItemColorExitListeners = [];
    ItemColorBackup = AppearanceItemStringify(item);
}

function ItemColorDraw(c, group, x, y, width, height) {
    const item = InventoryGet(c, group);
    if (!item) {
        return;
    }
    ItemColorStateBuild(item, x, y, width, height);

    const headerButtonSize = ItemColorConfig.headerButtonSize;
    DrawButton(ItemColorState.cancelButtonX, y, headerButtonSize, headerButtonSize, "", "#fff", "Icons/Cancel.png", TextGet("Cancel"));
    DrawButton(ItemColorState.saveButtonX, y, headerButtonSize, headerButtonSize, "", "#fff", "Icons/Accept.png", TextGet("Accept"));

    switch (ItemColorCurrentMode) {
        case ItemColorMode.COLOR_PICKER:
            return ItemColorDrawPicker(item, x, ItemColorState.contentY);
        default:
            return ItemColorDrawDefault(item, x, ItemColorState.contentY);
    }
}

function ItemColorDrawDefault(item, x, y) {
    const colorPickerButtonWidth = ItemColorConfig.colorPickerButtonWidth;
    const buttonSpacing = ItemColorConfig.buttonSpacing;
    const colorDisplayWidth = ItemColorConfig.colorDisplayWidth;
    const buttonHeight = ItemColorConfig.buttonSize;
    const colorPickerButtonX = ItemColorState.colorPickerButtonX;
    const colorDisplayButtonX = ItemColorState.colorDisplayButtonX;
    const groupButtonWidth = ItemColorState.groupButtonWidth;
    const pageStart = ItemColorPage * ItemColorState.pageSize;
    const layerGroups = ItemColorState.layerGroups.slice(pageStart, pageStart + ItemColorState.pageSize);
    const colors = ItemColorState.colors;

    layerGroups.forEach((layerGroup, i) => {
        const groupY = y + (i * (buttonHeight + buttonSpacing));
        if (layerGroup.layers.length === 1) {
            const layer = layerGroup.layers[0];
            const layerColor = colors[layer.ColorIndex];
            const buttonColor = layerColor.startsWith("#") ? layerColor : "#fff";
            DrawButton(x, groupY, groupButtonWidth, buttonHeight, layer.Name || item.Asset.Description, "#fff");
            DrawButton(colorDisplayButtonX, groupY, colorDisplayWidth, buttonHeight, layerColor, buttonColor);
            DrawButton(colorPickerButtonX, groupY, colorPickerButtonWidth, buttonHeight, "", "#fff", "Icons/Color.png");
        } else {
            let currentColors;
            let layerText;
            const layerPage = ItemColorLayerPages[layerGroup.name];
            if (layerPage === 0) {
                currentColors = layerGroup.layers.map(layer => colors[layer.ColorIndex]);
                layerText = layerGroup.name + ": All";
            } else {
                const layer = layerGroup.layers[layerPage - 1];
                currentColors = colors[layer.ColorIndex];
                layerText = layerGroup.name + ": " + layer.Name;
            }
            let buttonColorText = ItemColorGetColorButtonText(currentColors);
            const buttonColor = buttonColorText.startsWith("#") ? buttonColorText : "#fff";
            DrawBackNextButton(x, groupY, groupButtonWidth, buttonHeight, layerText, "#fff", null, () => "Previous", () => "Next");
            DrawButton(colorDisplayButtonX, groupY, colorDisplayWidth, buttonHeight, buttonColorText, buttonColor);
            DrawButton(colorPickerButtonX, groupY, colorPickerButtonWidth, buttonHeight, "", "#fff", "Icons/Color.png");
        }
    });
}

function ItemColorDrawPicker(item, x, y) {

}

function ItemColorClick(c, group, x, y, width, height) {
    const item = InventoryGet(c, group);
    if (!item) {
        return;
    }
    ItemColorStateBuild(item, x, y, width, height);

    const buttonHeight = ItemColorConfig.buttonSize;
    const headerButtonSize = ItemColorConfig.headerButtonSize;
    const rowHeight = buttonHeight + ItemColorConfig.buttonSpacing;
    const pageStart = ItemColorPage * ItemColorState.pageSize;
    const layerGroups = ItemColorState.layerGroups.slice(pageStart, pageStart + ItemColorState.pageSize);
    const clickZoneHeight = layerGroups.length * (rowHeight);

    if (MouseIn(ItemColorState.cancelButtonX, y, headerButtonSize, headerButtonSize)) {
        ItemColorCancelClick(c, item);
    }

    if (MouseIn(ItemColorState.saveButtonX, y, headerButtonSize, headerButtonSize)) {
        ItemColorSaveClick();
    }

    if (!MouseIn(x, ItemColorState.contentY, width, clickZoneHeight)) {
        return;
    }

    const colorPickerButtonWidth = ItemColorConfig.colorPickerButtonWidth;
    const colorDisplayWidth = ItemColorConfig.colorDisplayWidth;
    const colorPickerButtonX = ItemColorState.colorPickerButtonX;
    const colorDisplayButtonX = ItemColorState.colorDisplayButtonX;
    const groupButtonWidth = ItemColorState.groupButtonWidth;
    const colors = ItemColorState.colors;

    layerGroups.some((layerGroup, i) => {
        if (MouseYIn(ItemColorState.contentY + i * rowHeight, buttonHeight)) {
            if (MouseXIn(colorPickerButtonX, colorPickerButtonWidth)) {
                // Color picker button
                ItemColorOpenPicker(layerGroup, colors);
            } else if (MouseXIn(colorDisplayButtonX, colorDisplayWidth)) {
                // Cycle through the color schema
                ItemColorNextColor(item, layerGroup, colors, c);
            } else if (layerGroup.layers.length > 1) {
                if (MouseXIn(x, groupButtonWidth / 2)) {
                    // Previous layer button
                    ItemColorPreviousLayer(layerGroup);
                } else if (MouseXIn(x + groupButtonWidth / 2, x + groupButtonWidth)) {
                    // Next layer button
                    ItemColorNextLayer(layerGroup);
                }
            }
            return true;
        }
    });
}

function ItemColorCancelClick(c, item) {
    switch (ItemColorCurrentMode) {
        case ItemColorMode.COLOR_PICKER:
            ElementRemove("InputColor");
            ItemColorCurrentMode = null;
            break;
        default:
            Object.assign(item, AppearanceItemParse(ItemColorBackup));
            CharacterLoadCanvas(c);
            ItemColorExitListeners.forEach(listener => listener());
            break;
    }
}

function ItemColorSaveClick() {
    switch (ItemColorCurrentMode) {
        case ItemColorMode.COLOR_PICKER:
            // TODO: Implement
            break;
        default:
            ItemColorExitListeners.forEach(listener => listener());
            break;
    }
}

function ItemColorGetColorIndices(layerGroup) {
    if (layerGroup.layers.length === 1) {
        return [layerGroup[0].ColorIndex];
    } else {
        const layerPage = ItemColorLayerPages[layerGroup.name];
        if (layerPage === 0) {
            return layerGroup.layers.map(layer => layer.ColorIndex);
        } else if (layerPage <= layerGroup.layers.length) {
            return [layerGroup.layers[layerPage - 1].ColorIndex];
        }
    }
    return [];
}

function ItemColorOpenPicker(layerGroup, colors) {
    ItemColorPickerIndices = ItemColorGetColorIndices(layerGroup);
    const groupColors = colors.filter((c, i) => ItemColorPickerIndices.includes(i));
    ElementCreateInput("InputColor", "text", ItemColorGetColorButtonText(groupColors), "7");
}

function ItemColorNextColor(item, layerGroup, colors, c) {
    const colorIndicesToSet = ItemColorGetColorIndices(layerGroup);
    const groupColors = colors.filter((c, i) => colorIndicesToSet.includes(i));
    const colorText = ItemColorGetColorButtonText(groupColors);
    const schema = item.Asset.Group.ColorSchema;
    const nextIndex = (schema.indexOf(colorText) + 1) % schema.length;
    const nextColor = schema[nextIndex];
    const newColors = colors.slice();
    colorIndicesToSet.forEach(i => newColors[i] = nextColor);
    item.Color = newColors;
    CharacterLoadCanvas(c);
}

function ItemColorNextLayer(layerGroup) {
    const currentPage = ItemColorLayerPages[layerGroup.name];
    ItemColorLayerPages[layerGroup.name] = (currentPage + 1) % (layerGroup.layers.length + 1);
}

function ItemColorPreviousLayer(layerGroup) {
    const currentPage = ItemColorLayerPages[layerGroup.name];
    const totalPages = layerGroup.layers.length + 1;
    ItemColorLayerPages[layerGroup.name] = (currentPage + totalPages - 1) % totalPages;
}

function ItemColorStateBuild(item, x, y, width, height) {
    const itemKey = AppearanceItemStringify({item, x, y, width, height});
    if (ItemColorState && ItemColorStateKey === itemKey) {
        return;
    }

    ItemColorStateKey = itemKey;
    const groupMap = item.Asset.Layer
        .filter(layer => !layer.CopyLayerColor && layer.AllowColorize)
        .reduce((groupLookup, layer) => {
            const groupKey = layer.ColorGroup || layer.Name;
            (groupLookup[groupKey] || (groupLookup[groupKey] = [])).push(layer);
            return groupLookup;
        }, {});

    const layerGroups = Object.keys(groupMap)
        .map(key => {
            ItemColorLayerPages[key] = ItemColorLayerPages[key] || 0;
            return {
                name: key,
                layers: groupMap[key],
                colorIndex: ItemColorGroupMin(groupMap[key]),
            };
        })
        .sort((g1, g2) => g1.colorIndex = g2.colorIndex);

    let colors;
    if (Array.isArray(item.Color)) {
        colors = item.Color;
    } else {
        const colorStr = typeof item.Color === "string" ? item.Color : "Default";
        colors = [];
        for (let i = 0; i < item.Asset.ColorableLayerCount; i++) {
            colors.push(colorStr);
        }
    }

    const colorPickerButtonWidth = ItemColorConfig.colorPickerButtonWidth;
    const buttonSpacing = ItemColorConfig.buttonSpacing;
    const colorDisplayWidth = ItemColorConfig.colorDisplayWidth;
    const buttonHeight = ItemColorConfig.buttonSize;
    const headerButtonSize = ItemColorConfig.headerButtonSize;

    const cancelButtonX = x + width - 2 * headerButtonSize - buttonSpacing;
    const saveButtonX = x + width - headerButtonSize;
    const colorPickerButtonX = x + width - colorPickerButtonWidth;
    const colorDisplayButtonX = colorPickerButtonX - buttonSpacing - colorDisplayWidth;
    const contentY = y + ItemColorConfig.headerButtonSize + buttonSpacing;
    const groupButtonWidth = colorDisplayButtonX - buttonSpacing - x;
    const pageSize = Math.floor((height - headerButtonSize - buttonSpacing) / (buttonHeight + buttonSpacing));

    ItemColorState = {
        layerGroups,
        colors,
        cancelButtonX,
        saveButtonX,
        colorPickerButtonX,
        colorDisplayButtonX,
        contentY,
        groupButtonWidth,
        pageSize,
    };
}

function ItemColorGroupMin(layerGroup) {
    return layerGroup.reduce((min, layer) => Math.min(min, layer.ColorIndex), Infinity);
}

function ItemColorGetColorButtonText(color) {
    if (typeof color === "string") {
        return color;
    } else if (Array.isArray(color)) {
        const initialColor = color[0];
        return color.some(c => c !== initialColor) ? "Many" : initialColor;
    }
    return "Default";
}

function ItemColorOnExit(callback) {
    ItemColorExitListeners.push(callback);
}
