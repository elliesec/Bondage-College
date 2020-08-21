// TODO: hook into the character canvas to draw things easily in before/after draw
// TODO: option to disable animations(?)

// THIS IS A DEMO

function AssetItemNeckAccessoriesCustomCollarTagAfterDraw(data) { 
    console.log('after draw');
}

function AssetItemNeckAccessoriesCustomCollarTagBeforeDraw(data) { 
    console.log('before draw');
    const OverridenData = { CA: data.CA};
    OverridenData.CA.Color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return OverridenData;
}

function AssetItemNeckAccessoriesCustomCollarTagScriptDraw(data) { 
    console.log('script draw');
    // every second, new color so trigger a refresh
    if (typeof data.PersistentData().LastTime != "number") data.PersistentData().LastTime = 0;
    if (data.PersistentData().LastTime + 1000 < CommonTime()) { 
        CharacterRefresh(data.C, false);
        data.PersistentData().LastTime = CommonTime();
    } 
}