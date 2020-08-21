"use strict";
/**
 * Where animation data is stored. Animation data is only managed client side, nothing should be synced.
 * @constant
 * @type {object} - The animation data object.
 */
var AnimationPersistentStorage = {};

/**
 * Gets the persistent data storage name for a given item on a given character. 
 * @param {Character} C - Character wearing the animated object
 * @param {Asset} Asset - The animated object
 * @returns {object} - Contains the persistent data of the animated object, if any.
 */
function AnimationPersistentDataGetName(C, Asset) { 
    return C.AccountName + "__" + Asset.Group.Name + "__" + Asset.Name;
}

/**
 * Gets the persistent data  for a given item on a given character. This method should not be called explicitly, use the Data builder passed to the dynamic drawing functions.
 * @param {Character} C - Character wearing the animated object
 * @param {Asset} Asset - The animated object
 * @returns {object} - Contains the persistent data of the animated object, returns a new empty object if it was never initialized previously.
 */
function AnimationPersistentDataGet(C, Asset) { 
    const PersistentDataName = AnimationPersistentDataGetName(C, Asset);
    if (!AnimationPersistentStorage[PersistentDataName]) { 
        AnimationPersistentStorage[PersistentDataName] = {}
    }
    return AnimationPersistentStorage[PersistentDataName];
}

/**
 * Purges undesired animation data corresponding to a given character.
 * @param {Character} C - The character to delete the animation data of
 * @param {boolean} IncludeAll - TRUE if we should delete every animation data for the given character.
 * @returns {void} - Nothing
 */
function AnimationPersistentDataPurge(C, IncludeAll) { 
    const PossiblePersistentData = IncludeAll ? [] : C.Appearance.map(CA => AnimationPersistentDataGetName(C, CA.Asset));
    for (const key in AnimationPersistentStorage) { 
        if (key.startsWith(C.AccountName + "__") && !PossiblePersistentData.includes(key)) { 
            delete AnimationPersistentStorage[key];
        }
    }
}


// animation hook played when a character is drawn