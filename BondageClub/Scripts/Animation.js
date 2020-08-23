"use strict";
/**
 * Where animation data is stored. Animation data is only managed client side, nothing should be synced.
 * @constant
 * @type {object} - The animation data object.
 */
var AnimationPersistentStorage = {};

/**
 * Types of dynamic data that can be stored.
 * @constant
 * @enum
 */
var AnimationDataTypes = {
    Base: "",
    Canvas: "DynamicPlayerCanvas",
    PersistentData: "PersistentData",
    Rebuild: "Rebuild",
    RefreshTime: "RefreshTime",
    RefreshRate: "RefreshRate",
};

/**
 * Gets the dynamic data storage name for a given item on a given character. 
 * @param {Character} C - Character wearing the animated object
 * @param {AnimationDataTypes} Type - Type of data to query
 * @param {Asset} [Asset] - The animated object
 * @returns {string} - Contains the name of the persistent data key.
 */
function AnimationGetDynamicDataName(C, Type, Asset) { 
    return (Type ? Type + "__" : "") + C.AccountName + (Asset ? "__" + Asset.Group.Name + "__" + Asset.Name : "");
}

/**
 * Gets the persistent data  for a given item on a given character. This method should not be called explicitly, use the Data builder passed to the dynamic drawing functions.
 * @param {Character} C - Character wearing the animated object
 * @param {Asset} Asset - The animated object
 * @returns {object} - Contains the persistent data of the animated object, returns a new empty object if it was never initialized previously.
 */
function AnimationPersistentDataGet(C, Asset) { 
    const PersistentDataName = AnimationGetDynamicDataName(C, AnimationDataTypes.PersistentData, Asset);
    if (!AnimationPersistentStorage[PersistentDataName]) { 
        AnimationPersistentStorage[PersistentDataName] = {}
    }
    return AnimationPersistentStorage[PersistentDataName];
}

/**
 * Sets the maximum animation refresh rate for a given character.
 * @param {Character} C - Character wearing the dynamic object
 * @param {number} RequestedRate - The maximum refresh rate to request in ms
 * @returns {void} - Nothing
 */
function AnimationRequestRefreshRate(C, RequestedRate) { 
    const key = AnimationGetDynamicDataName(C, AnimationDataTypes.RefreshRate);
    let RefreshRate = AnimationPersistentStorage[key] != null ? AnimationPersistentStorage[key] : Infinity;
    if (RequestedRate < RefreshRate) { 
        AnimationPersistentStorage[key] = RequestedRate;
    }
}

/**
 * Marks a given character to be redrawn on the next animation refresh.
 * @param {Character} C - Character wearing the dynamic object
 * @returns {void} - Nothing
 */
function AnimationRequestDraw(C) { 
    AnimationPersistentStorage[AnimationGetDynamicDataName(C, AnimationDataTypes.Rebuild)] = true;
}

/**
 * Purges all dynamic asset data corresponding to a given character.
 * @param {Character} C - The character to delete the animation data of
 * @param {boolean} IncludeAll - TRUE if we should delete every animation data for the given character.
 * @returns {void} - Nothing
 */
function AnimationPurge(C, IncludeAll) { 
    const PossibleData = [];
    const PossibleCanvas = [];
    
    // Highlights the data to keep
    if (!IncludeAll) {
        C.Appearance.forEach((CA) => {
            PossibleData.push(AnimationGetDynamicDataName(C, AnimationDataTypes.PersistentData, CA.Asset));
            PossibleCanvas.push(AnimationGetDynamicDataName(C, AnimationDataTypes.Canvas, CA.Asset));
        });
    }
    
    // Checks if any character specific info is worth being kept
    if (IncludeAll || !C.Appearance.find(CA => CA.Asset.DynamicScriptDraw)) { 
        delete AnimationPersistentStorage[AnimationGetDynamicDataName(C, AnimationDataTypes.RefreshTime)];
        delete AnimationPersistentStorage[AnimationGetDynamicDataName(C, AnimationDataTypes.Rebuild)];
    }
    
    // Always delete the refresh rate for accurate requested rate.
    delete AnimationPersistentStorage[AnimationGetDynamicDataName(C, AnimationDataTypes.RefreshRate)];
    
    // Clear no longer needed data
    for (const key in AnimationPersistentStorage) { 
        const isCharDataKey = key.startsWith(AnimationDataTypes.PersistentData + "__" + C.AccountName + "__");
        if (isCharDataKey && !PossibleData.includes(key)) { 
            delete AnimationPersistentStorage[key];
        }
    }
    
    // Clear no longer needed cached canvases
    GLDrawImageCache.forEach((img, key) => {
        if (key.startsWith(AnimationDataTypes.Canvas + "__" + + C.AccountName + "__") && !PossibleCanvas.includes(key)) { 
            GLDrawImageCache.delete(key);
        }
    });
}