/**
 * An item is a pair of asset and its dynamic properties that define a worn asset.
 * @typedef {{Asset: object, Color: string, Difficulty: number, Property: object | undefined}} Item
 */

/**
 * An appearance array is an array of object defining each appearance item of a character in all of its details.
 * @typedef {Array.<Item>} AppearanceArray
 */

/**
 * An appearance bundle is an array of object defining each appearance item of a character. It's a minified version of
 * the normal appearance array
 * @typedef {Array.<{Group: string, Name: string, Difficulty: number | undefined, Color: string | undefined, Property:
 *     object | undefined}>} AppearanceBundle
 */

"use strict";
var ServerSocket = null;
var ServerURL = "http://localhost:4288";
var ServerBeep = {};
var ServerBeepAudio = new Audio();
var ServerIsConnected = false;
var ServerReconnectCount = 0;

// Regexes for lock combination numbers and passwords
const ServerCombinationNumberRegex = /^\d{4}$/;
const ServerPasswordRegex = /^[A-Z]{1,8}$/;
const ServerDefaultCombinationNumber = "0000";
const ServerDefaultPassword = "UNLOCK";
const ServerRemoveTimerToleranceMs = 5000;
const ServerLockProperties = [
	"LockedBy", "LockMemberNumber", "CombinationNumber", "RemoveItem", "ShowTimer",
	"MemberNumberListKeys", "Password", "Hint", "LockSet", "LockPickSeed",
];
const ServerTimerLockProperties = ["MemberNumberList", "RemoveTimer"];
const ServerAllLockProperties = ServerLockProperties
	.concat(["EnableRandomInput"])
	.concat(ServerTimerLockProperties);

/** Loads the server by attaching the socket events and their respective callbacks */
function ServerInit() {
	ServerSocket = io(ServerURL);
	ServerSocket.on("connect", ServerConnect);
	ServerSocket.on("reconnecting", ServerReconnecting);
	ServerSocket.on("event", function (data) { console.log(data); });
	ServerSocket.on("ServerMessage", function (data) { console.log(data); });
	ServerSocket.on("ServerInfo", function (data) { ServerInfo(data); });
	ServerSocket.on("CreationResponse", function (data) { CreationResponse(data); });
	ServerSocket.on("LoginResponse", function (data) { LoginResponse(data); });
	ServerSocket.on("disconnect", function (data) { ServerDisconnect(); });
	ServerSocket.on("ForceDisconnect", function (data) { ServerDisconnect(data, true); });
	ServerSocket.on("ChatRoomSearchResult", function (data) { ChatSearchResultResponse(data); });
	ServerSocket.on("ChatRoomSearchResponse", function (data) { ChatSearchResponse(data); });
	ServerSocket.on("ChatRoomCreateResponse", function (data) { ChatCreateResponse(data); });
	ServerSocket.on("ChatRoomUpdateResponse", function (data) { ChatAdminResponse(data); });
	ServerSocket.on("ChatRoomSync", function (data) { ChatRoomSync(data); });
	ServerSocket.on("ChatRoomSyncSingle", function (data) { ChatRoomSyncSingle(data); });
	ServerSocket.on("ChatRoomSyncExpression", function (data) { ChatRoomSyncExpression(data); });
	ServerSocket.on("ChatRoomSyncPose", function (data) { ChatRoomSyncPose(data); });
	ServerSocket.on("ChatRoomSyncArousal", function (data) { ChatRoomSyncArousal(data); });
	ServerSocket.on("ChatRoomSyncItem", function (data) { ChatRoomSyncItem(data); });
	ServerSocket.on("ChatRoomMessage", function (data) { ChatRoomMessage(data); });
	ServerSocket.on("ChatRoomAllowItem", function (data) { ChatRoomAllowItem(data); });
	ServerSocket.on("ChatRoomGameResponse", function (data) { ChatRoomGameResponse(data); });
	ServerSocket.on("PasswordResetResponse", function (data) { PasswordResetResponse(data); });
	ServerSocket.on("AccountQueryResult", function (data) { ServerAccountQueryResult(data); });
	ServerSocket.on("AccountBeep", function (data) { ServerAccountBeep(data); });
	ServerSocket.on("AccountOwnership", function (data) { ServerAccountOwnership(data); });
	ServerSocket.on("AccountLovership", function (data) { ServerAccountLovership(data); });
	ServerBeepAudio.src = "Audio/BeepAlarm.mp3";
}

/**
 * Sets the connection status of the server and updates the login page message
 * @param {boolean} connected - whether or not the websocket connection to the server has been established successfully
 * @param {string} errorMessage - the error message to display if not connected
 */
function ServerSetConnected(connected, errorMessage) {
	ServerIsConnected = connected;
	if (connected) {
		ServerReconnectCount = 0;
		LoginErrorMessage = "";
	} else {
		LoginErrorMessage = errorMessage || "";
		LoginSubmitted = false;
	}
	LoginUpdateMessage();
}

/**
 * Callback when receiving a "connect" event on the socket - this will be called on initial connection and on
 * successful reconnects.
 */
function ServerConnect() {
	//console.info("Server connection established");
	ServerSetConnected(true);
}

/**
 * Callback when receiving a "reconnecting" event on the socket - this is called when socket.io initiates a retry after
 * a failed connection attempt.
 */
function ServerReconnecting() {
	ServerReconnectCount++;
	if (ServerReconnectCount >= 3) LoginErrorMessage = "ErrorUnableToConnect";
	LoginUpdateMessage();
}

/**
 * Callback used to parse received information related to the server
 * @param {{OnlinePlayers: number, Time: number}} data - Data object containing the server information
 * @returns {void} - Nothing
 */
function ServerInfo(data) {
	if (data.OnlinePlayers != null) CurrentOnlinePlayers = data.OnlinePlayers;
	if (data.Time != null) CurrentTime = data.Time;
}

/**
 * Callback used when we are disconnected from the server, try to enter the reconnection mode (relog screen) if the
 * user was logged in
 * @param {*} data - Error to log
 * @param {boolean} [close=false] - close the transport
 * @returns {void} - Nothing
 */
function ServerDisconnect(data, close = false) {
	if (!ServerIsConnected) return;
	console.warn("Server connection lost");
	const ShouldRelog = Player.Name != "";
	let msg = ShouldRelog ? "Disconnected" : "ErrorDisconnectedFromServer";
	if (data) {
		console.warn(data);
		msg = data;
	}
	ServerSetConnected(false, msg);
	if (close) {
		ServerSocket.disconnect();
		// If the error was duplicated login, we want to reconnect
		if (data === "ErrorDuplicatedLogin") {
			ServerInit();
		}
	}

	if (ShouldRelog) {
		if (CurrentScreen != "Relog") {

			// Exits out of the chat room or a sub screen of the chatroom, so we'll be able to get in again when we log back
			if (ServerPlayerIsInChatRoom()) {
				RelogChatLog = document.getElementById("TextAreaChatLog").cloneNode(true);
				RelogChatLog.id = "RelogChatLog";
				RelogChatLog.name = "RelogChatLog";
				ElementRemove("InputChat");
				ElementRemove("TextAreaChatLog");
				CurrentScreen = "ChatSearch";
				CurrentModule = "Online";
				CurrentCharacter = null;
			} else RelogChatLog = null;

			// Keeps the relog data
			RelogData = { Screen: CurrentScreen, Module: CurrentModule, Character: CurrentCharacter };
			CurrentCharacter = null;
			CommonSetScreen("Character", "Relog");

		}
	}
}

/**
 * Returns whether the player is currently in a chatroom or viewing a subscreen while in a chatroom
 * @returns {boolean} - True if in a chatroom 
 */
function ServerPlayerIsInChatRoom() {
	return (CurrentScreen == "ChatRoom")
		|| (CurrentScreen == "ChatAdmin")
		|| (CurrentScreen == "GameLARP")
		|| ((CurrentScreen == "Appearance") && (CharacterAppearanceReturnRoom == "ChatRoom"))
		|| ((CurrentScreen == "InformationSheet") && (InformationSheetPreviousScreen == "ChatRoom"))
		|| ((CurrentScreen == "Title") && (InformationSheetPreviousScreen == "ChatRoom"))
		|| ((CurrentScreen == "OnlineProfile") && (InformationSheetPreviousScreen == "ChatRoom"))
		|| ((CurrentScreen == "FriendList") && (InformationSheetPreviousScreen == "ChatRoom") && (FriendListReturn == null))
		|| ((CurrentScreen == "Preference") && (InformationSheetPreviousScreen == "ChatRoom"));
}

/** Sends a message with the given data to the server via socket.emit */
function ServerSend(Message, Data) {
	ServerSocket.emit(Message, Data);
}

/**
 * Syncs Money, owner name and lover name with the server
 * @returns {void} - Nothing
 */
function ServerPlayerSync() {
	var D = { Money: Player.Money, Owner: Player.Owner, Lover: Player.Lover };
	ServerSend("AccountUpdate", D);
	delete Player.Lover;
}

/**
 * Syncs the full player inventory to the server.
 * @returns {void} - Nothing
 */
function ServerPlayerInventorySync() {
	const Inv = {};
	for (let I = 0; I < Player.Inventory.length; I++) {
		if (Player.Inventory[I].Asset != null) {
			let G = Inv[Player.Inventory[I].Asset.Group.Name];
			if (G === undefined) {
				G = Inv[Player.Inventory[I].Asset.Group.Name] = [];
			}
			G.push(Player.Inventory[I].Asset.Name);
		}
	}
	ServerSend("AccountUpdate", { Inventory: Inv });
}

/**
 * Syncs player's blocked, limited and hidden items to the server
 * @returns {void} - Nothing
 */
function ServerPlayerBlockItemsSync() {
	ServerSend("AccountUpdate", {
		BlockItems: CommonPackItemArray(Player.BlockItems),
		LimitedItems: CommonPackItemArray(Player.LimitedItems),
		HiddenItems: Player.HiddenItems
	});
}

/**
 * Syncs the full player log array to the server.
 * @returns {void} - Nothing
 */
function ServerPlayerLogSync() {
	var D = {};
	D.Log = Log;
	ServerSend("AccountUpdate", D);
}

/**
 * Syncs the full player reputation array to the server.
 * @returns {void} - Nothing
 */
function ServerPlayerReputationSync() {
	var D = {};
	D.Reputation = Player.Reputation;
	ServerSend("AccountUpdate", D);
}

/**
 * Syncs the full player skill array to the server.
 * @returns {void} - Nothing
 */
function ServerPlayerSkillSync() {
	var D = {};
	D.Skill = Player.Skill;
	ServerSend("AccountUpdate", D);
}

/**
 * Syncs player's relations and related info to the server.
 * @returns {void} - Nothing
 */
function ServerPlayerRelationsSync() {
	const D = {};
	D.FriendList = Player.FriendList;
	D.GhostList = Player.GhostList;
	D.WhiteList = Player.WhiteList;
	D.BlackList = Player.BlackList;
	Array.from(Player.FriendNames.keys()).forEach(k => {
		if (!Player.FriendList.includes(k) && !Player.SubmissivesList.has(k))
			Player.FriendNames.delete(k);
	})
	D.FriendNames = LZString.compressToUTF16(JSON.stringify(Array.from(Player.FriendNames)));
	D.SubmissivesList = LZString.compressToUTF16(JSON.stringify(Array.from(Player.SubmissivesList)));
	ServerSend("AccountUpdate", D);
}

/**
 * Prepares an appearance bundle so we can push it to the server. It minimizes it by keeping only the necessary
 * information. (Asset name, group name, color, properties and difficulty)
 * @param {AppearanceArray} Appearance - The appearance array to bundle
 * @returns {AppearanceBundle} - The appearance bundle created from the given appearance array
 */
function ServerAppearanceBundle(Appearance) {
	var Bundle = [];
	for (let A = 0; A < Appearance.length; A++) {
		var N = {};
		N.Group = Appearance[A].Asset.Group.Name;
		N.Name = Appearance[A].Asset.Name;
		if ((Appearance[A].Color != null) && (Appearance[A].Color != "Default")) N.Color = Appearance[A].Color;
		if ((Appearance[A].Difficulty != null) && (Appearance[A].Difficulty != 0)) N.Difficulty = Appearance[A].Difficulty;
		if (Appearance[A].Property != null) N.Property = Appearance[A].Property;
		Bundle.push(N);
	}
	return Bundle;
}

/**
 * Completely removes a lock from an item
 * @param {object} Property - The item to remove the lock from
 * @returns {void} - Nothing
 */
function ServerDeleteLock(Property) {
	let changed = false;
	if (Property) {
		ServerAllLockProperties.forEach(key => {
			if (Property[key] != null) {
				delete Property[key];
				changed = true;
			}
		});
		if (Array.isArray(Property.Effect)) {
			Property.Effect = Property.Effect.filter(E => {
				if (E === "Lock") {
					changed = true;
					return false;
				} else return true;
			});
		}
	}
	return changed;
}

/**
 * Loads the appearance assets from a server bundle that only contains the main info (no asset) and validates their
 * properties to prevent griefing and respecting permissions in multiplayer
 * @param {Character} C - Character for which to load the appearance
 * @param {string} AssetFamily - Family of assets used for the appearance array
 * @param {AppearanceBundle} Bundle - Bundled appearance
 * @param {number} SourceMemberNumber - Member number of the user who triggered the change
 * @returns {void} - Nothing
 */
function ServerAppearanceLoadFromBundle(C, AssetFamily, Bundle, SourceMemberNumber) {
	const appearanceDiffs = ServerBuildAppearanceDiff(AssetFamily, C.Appearance, Bundle);
	ServerAddRequiredAppearance(AssetFamily, appearanceDiffs);

	if (SourceMemberNumber == null) SourceMemberNumber = C.MemberNumber;
	const FromSelf = SourceMemberNumber === C.MemberNumber;
	const FromOwner = C.Ownership != null && (SourceMemberNumber === C.Ownership.MemberNumber || FromSelf);
	const LoverNumbers = CharacterGetLoversNumbers(C);
	const FromLoversOrOwner = LoverNumbers.includes(SourceMemberNumber) || FromOwner || FromSelf;
	const updateParams = { C, FromSelf, FromOwner, FromLoversOrOwner, SourceMemberNumber };

	return Object.keys(appearanceDiffs)
		.map(key => ServerResolveAppearanceDiff(appearanceDiffs[key][0], appearanceDiffs[key][1], updateParams))
		.filter(Boolean);
}

// TODO: JSDoc for all this stuff
function ServerBuildAppearanceDiff(assetFamily, appearance, bundle) {
	const diffMap = {};
	appearance.forEach((item) => {
		diffMap[item.Asset.Group.Name] = [item, null];
	});
	bundle.forEach((item) => {
		const appearanceItem = ServerBundledItemToAppearanceItem(assetFamily, item);
		if (appearanceItem) {
			const diff = diffMap[item.Group] = (diffMap[item.Group] || [null, null]);
			diff[1] = appearanceItem;
		}
	});
	return diffMap;
}

function ServerBundledItemToAppearanceItem(assetFamily, item) {
	if (!item || typeof item !== "object" || typeof item.Name !== "string" || typeof item.Group !==
	    "string") return null;

	const asset = AssetGet(assetFamily, item.Group, item.Name);
	if (!asset) return null;

	return {
		Asset: asset,
		Difficulty: parseInt(item.Difficulty == null ? 0 : item.Difficulty),
		Color: ServerParseColor(asset, item.Color, asset.Group.ColorSchema),
		Property: item.Property,
	};
}

function ServerParseColor(asset, color, schema) {
	if (Array.isArray(color)) {
		if (color.length > asset.ColorableLayerCount) color = color.slice(0, asset.ColorableLayerCount);
		return color.map(c => ServerValidateColorAgainstSchema(c, schema));
	} else {
		return ServerValidateColorAgainstSchema(color, schema);
	}
}

function ServerAddRequiredAppearance(assetFamily, diffMap) {
	AssetGroup.forEach(group => {
		// If it's not in the appearance category or is allowed to empty, return
		if (group.Category !== "Appearance" || group.AllowNone) return;
		// If the current source already has an item in the group, return
		if (diffMap[group.Name] && diffMap[group.Name][0]) return;

		const diff = diffMap[group.Name] = diffMap[group.Name] || [null, null];

		if (group.MirrorGroup) {
			// If we need to mirror an item, see if it exists
			const itemToMirror = diffMap[group.MirrorGroup] && diffMap[group.MirrorGroup][0];
			if (itemToMirror) {
				const mirroredAsset = AssetGet(assetFamily, group.Name, itemToMirror.Asset.Name);
				// If there is an item to mirror, copy it and its color
				if (mirroredAsset) diff[0] = { Asset: mirroredAsset, Color: itemToMirror.Color };
			}
		}

		// If the item still hasn't been filled, use the first item from the group's asset list
		if (!diff[0]) {
			const asset = Asset.find(a => a.Group.Name === group.Name);
			diff[0] = { Asset: asset, Color: group.ColorSchema[0] };
		}
	});
}

function ServerResolveAppearanceDiff(previousItem, newItem, params) {
	let item;
	if (!previousItem) {
		item = ServerResolveAddDiff(newItem, params);
	} else if (!newItem) {
		item = ServerResolveRemoveDiff(previousItem, params);
	} else if (previousItem.Asset === newItem.Asset) {
		item = ServerResolveModifyDiff(previousItem, newItem, params);
	} else {
		item = ServerResolveSwapDiff(previousItem, newItem, params);
	}
	// If the diff has resolved to an item, sanitize its properties
	if (item) ServerSanitizeProperties(params.C, item);
	return item;
}

function ServerResolveAddDiff(newItem, params) {
	if (ServerCanAdd(newItem, params)) {
		const itemWithoutProperties = {
			Asset: newItem.Asset,
			Difficulty: newItem.Difficulty,
			Color: newItem.Color,
		};
		return ServerResolveModifyDiff(itemWithoutProperties, newItem, params);
	} else {
		return null;
	}
}

function ServerResolveRemoveDiff(previousItem, params) {
	const canRemove = ServerCanRemove(previousItem, params);
	return canRemove ? null : previousItem;
}

function ServerResolveSwapDiff(previousItem, newItem, params) {
	// First, attempt to remove the previous item
	const removalResult = ServerResolveRemoveDiff(previousItem, params);
	// If the result is not null, the removal was unsuccessful - return the previous item
	if (removalResult) return previousItem;
	// Next, attempt to add the new item
	const addResult = ServerResolveAddDiff(newItem, params);
	// If the result is null, the add was unsuccessful - return the previous item. Otherwise, return the added item
	return addResult || previousItem;
}

function ServerResolveModifyDiff(previousItem, newItem, params) {
	const { C, SourceMemberNumber } = params;
	const previousLock = InventoryGetLock(previousItem);
	const newLock = InventoryGetLock(newItem);
	const previousProperty = previousItem.Property || {};
	const newProperty = newItem.Property = newItem.Property || {};

	const lockSwapped = !!newLock && !!previousLock && newLock.Asset !== previousLock.Asset;
	const lockModified = !!newLock && !!previousLock && !lockSwapped;
	const lockRemoved = lockSwapped || (!newLock && !!previousLock);
	const lockAdded = lockSwapped || (!!newLock && !previousLock);

	const lockChangeInvalid = (lockRemoved && !ServerIsLockChangePermitted(previousLock, params)) ||
	                          (lockAdded && !ServerIsLockChangePermitted(newLock, params));
	let changeInvalid = false;

	if (lockChangeInvalid) {
		// If there was a lock previously, reapply the old lock
		if (previousLock) {
			console.warn(
				`Invalid removal of ${previousLock.Asset.Name} on member number ${C.MemberNumber} by member number ${SourceMemberNumber} blocked`);
			InventoryLock(C, newItem, previousLock, previousProperty.LockMemberNumber, false);
			ServerCopyLockProperties(previousProperty, newProperty, true);
		} else {
			// Otherwise, delete any lock
			console.warn(
				`Invalid addition of ${newLock.Asset.Name} to member number ${C.MemberNumber} by member number ${SourceMemberNumber} blocked`);
			ServerDeleteLock(newItem.Property);
		}
	} else if (lockModified) {
		// If the lock has been modified, then ensure lock properties don't change (except where they should be able to)
		const hasLockPermissions = ServerIsLockChangePermitted(previousLock, params);
		ServerCopyLockProperties(previousProperty, newProperty, hasLockPermissions);
	}

	if (!Object.keys(newProperty).length) delete newItem.Property;

	return newItem;
}

function ServerIsLockChangePermitted(lock, { FromOwner, FromLoversOrOwner }) {
	if (!lock) return true;
	return !(
		(lock.Asset.LoverOnly && !FromLoversOrOwner) ||
		(lock.Asset.OwnerOnly && !FromOwner)
	);
}

function ServerCopyLockProperties(sourceProperty, targetProperty, hasLockPermissions) {
	let changed = false;
	ServerLockProperties.forEach((key) => {
		changed = changed || ServerCopyLockProperty(sourceProperty, targetProperty, key);
	});
	if (!hasLockPermissions) {
		changed = changed || ServerCopyLockProperty(sourceProperty, targetProperty, "EnableRandomInput");
		if (!targetProperty.EnableRandomInput) {
			ServerTimerLockProperties.forEach((key) => {
				changed = changed || ServerCopyLockProperty(sourceProperty, targetProperty, key);
			});
		}
	}
	return changed;
}

function ServerCopyLockProperty(sourceProperty, targetProperty, key) {
	if (sourceProperty[key] != null && !CommonDeepEqual(targetProperty[key], sourceProperty[key])) {
		targetProperty[key] = sourceProperty[key];
		return true;
	} else if (targetProperty[key] != null) {
		delete targetProperty[key];
		return true;
	}
	return false;
}

function ServerCanAdd(newItem, { C, FromSelf, FromOwner, FromLoversOrOwner, SourceMemberNumber }) {
	// If the update is coming from ourself, it's always permitted
	if (FromSelf) return true;

	const asset = newItem.Asset;

	// If changing cosplay items is blocked and we're adding a cosplay item, block it
	const blockBodyCosplay = C.OnlineSharedSettings && C.OnlineSharedSettings.BlockBodyCosplay;
	if (blockBodyCosplay && asset.Group.BodyCosplay) return false;

	// If the item is blocked/limited and the source doesn't have the correct permission, prevent it from being added
	const type = (newItem.Property && newItem.Property.Type) || null;
	const blockedOrLimited = ServerIsItemBlockedOrLimited(C, SourceMemberNumber, asset.Group.Name, asset.Name, type);
	if (blockedOrLimited && OnlineGameAllowBlockItems()) return false;

	// If the item is owner only or locked by an owner only lock, only the owner can add it
	if (InventoryOwnerOnlyItem(newItem)) return FromOwner;

	// If the item is lover only or locked by a lover only lock, only a lover/owner can add it
	if (InventoryLoverOnlyItem(newItem)) return FromLoversOrOwner;

	// Otherwise, the item can be added
	return true;
}

function ServerIsItemBlockedOrLimited(C, sourceMemberNumber, groupName, assetName, type) {
	if (C.MemberNumber === sourceMemberNumber) return false;
	if (InventoryIsPermissionBlocked(C, assetName, groupName, type)) return true;
	if (!InventoryIsPermissionLimited(C, assetName, groupName, type)) return false;
	if (C.IsLoverOfMemberNumber(sourceMemberNumber) || C.IsOwnedByMemberNumber(sourceMemberNumber)) return false;
	// If item permission is "Owner, Lover, whitelist & Dominants" or below, the source must be on their whitelist
	if (C.ItemPermission < 3 && C.WhiteList.includes(sourceMemberNumber)) return false;
	// Otherwise, the item is limited, and the source doesn't have permission
	return true;
}

function ServerCanRemove(previousItem, { C, FromSelf, FromOwner, FromLoversOrOwner }) {
	// If the update is coming from ourself, it's always permitted
	if (FromSelf) return true;

	const asset = previousItem.Asset;

	// If changing cosplay items is blocked and we're removing a cosplay item, block it
	const blockBodyCosplay = C.OnlineSharedSettings && C.OnlineSharedSettings.BlockBodyCosplay;
	if (blockBodyCosplay && asset.Group.BodyCosplay) return false;

	// If the item is owner only or locked by an owner only lock, only the owner can remove it
	if (InventoryOwnerOnlyItem(previousItem)) return FromOwner;

	// If the item is lover only or locked by a lover only lock, only a lover/owner can remove it
	if (InventoryLoverOnlyItem(previousItem)) return FromLoversOrOwner;

	// If the asset does not have the Enable flag, it can't be removed
	if (!asset.Enable) return false;

	// Otherwise, the item can be removed
	return true;
}

function ServerSanitizeProperties(C, item) {
	// If the character is an NPC, no validation is needed
	if (C.IsNpc()) return false;

	const property = item.Property;

	// If the item doesn't have a property, no validation is needed
	if (property == null) return false;

	// If the property is not an object, remove it and return
	if (typeof property !== "object") {
		console.warn("Removing invalid property:", property);
		delete item.Property;
		return true;
	}

	// Sanitize various properties
	let changed = ServerSanitizeEffects(C, item);
	changed = changed || ServerSanitizeBlocks(C, item);
	changed = changed || ServerSanitizeStringArray(property, "Hide");

	const asset = item.Asset;

	// If the property has a type, it needs to be in the asset's AllowType array
	const allowType = asset.AllowType || [];
	if (property.Type != null && !allowType.includes(property.Type)) {
		console.warn("Removing invalid type:", property.Type);
		delete property.Type;
		changed = true;
	}

	// Clamp item opacity within the allowed range
	if (property && typeof property.Opacity === "number") {
		if (property.Opacity > asset.MaxOpacity) {
			property.Opacity = asset.MaxOpacity;
			changed = true;
		}
		if (property.Opacity < asset.MinOpacity) {
			property.Opacity = asset.MinOpacity;
			changed = true;
		}
	}

	// Remove impossible combinations
	if (property.Type == null && property.Restrain == null) {
		["SetPose", "Difficulty", "SelfUnlock", "Hide"].forEach(P => {
			if (property[P] != null) {
				delete property[P];
				changed = true;
			}
		});
	}

	return changed;
}

function ServerSanitizeEffects(C, item) {
	const property = item.Property;
	let changed = ServerSanitizeStringArray(property, "Effect");
	changed = changed || ServerSanitizeLock(C, item);

	// If there is no Effect array, no further sanitization is needed
	if (!Array.isArray(property.Effect)) return changed;

	const allowEffect = item.Asset.AllowEffect || [];
	property.Effect = property.Effect.filter((effect) => {
		// The Lock effect is handled by ServerSanitizeLock
		if (effect === "Lock") return true;
		// All other effects must be included in the AllowEffect array to be permitted
		else if (!allowEffect.includes(effect)) {
			changed = true;
			return false;
		} else return true;
	});

	return changed;
}

function ServerSanitizeLock(C, item) {
	const asset = item.Asset;
	const property = item.Property;
	// If there is no lock effect present, strip out any lock-related properties
	if (!Array.isArray(property.Effect) || !property.Effect.includes("Lock")) return ServerDeleteLock(property);

	const lock = InventoryGetLock(item);

	// If there is no lock, or the asset does not permit locks, or
	if (
		!asset.AllowLock ||
		!lock ||
		property.AllowLock === false ||
		(asset.AllowLockType && !asset.AllowLockType.includes(property.Type))
	) {
		return ServerDeleteLock(property);
	}

	let changed = false;

	// Remove any invalid lock member number
	const lockNumber = property.LockMemberNumber;
	if (lockNumber != null && typeof lockNumber !== "number") {
		console.warn("Removing invalid lock member number:", lockNumber);
		delete property.LockMemberNumber;
		changed = true;
	}

	// The character's member number is always valid on a lock
	if (lockNumber !== C.MemberNumber) {
		const ownerNumber = C.Ownership && C.Ownership.MemberNumber;
		const hasOwner = typeof ownerNumber === "number";
		const lockedByOwner = hasOwner && lockNumber === ownerNumber;

		// Ensure the lock member number is valid on owner-only locks
		if (lock.Asset.OwnerOnly && !lockedByOwner) {
			console.warn(`Removing invalid owner-only lock with member number: ${lockNumber}`);
			return ServerDeleteLock(property);
		}

		const lockedByLover = C.GetLoversNumbers().includes(lockNumber);
		// Ensure the lock member number is valid on lover-only locks
		if (lock.Asset.LoverOnly && !lockedByOwner && !lockedByLover) {
			console.warn(`Removing invalid lover-only lock with member number: ${lockNumber}`);
			return ServerDeleteLock(property);
		}
	}

	// Sanitize combination lock number
	if (typeof property.CombinationNumber === "string") {
		if (!ServerCombinationNumberRegex.test(property.CombinationNumber)) {
			// If the combination is invalid, reset to 0000
			console.warn(
				`Invalid combination number: ${property.CombinationNumber}. Combination will be reset to ${ServerDefaultCombinationNumber}`,
			);
			property.CombinationNumber = ServerDefaultCombinationNumber;
			changed = true;
		}
	} else if (property.CombinationNumber != null) {
		delete property.CombinationNumber;
		changed = true;
	}

	// Sanitize lockpicking seed
	if (typeof property.LockPickSeed === "string") {
		const seed = CommonConvertStringToArray(Item.Property.LockPickSeed);
		if (!seed.length) {
			console.warn("Deleting invalid lockpicking seed: ", property.LockPickSeed);
			delete property.LockPickSeed;
			changed = true;
		} else {
			// Check that every number from 0 up to the seed length is included in the seed
			for (let i = 0; i < seed.length; i++) {
				if (!seed.includes(i)) {
					console.warn("Deleting invalid lockpicking seed: ", property.LockPickSeed);
					delete property.LockPickSeed;
					changed = true;
					break;
				}
			}
		}
	} else if (property.LockPickSeed != null) {
		delete property.LockPickSeed;
		changed = true;
	}

	// Sanitize lock password
	if (typeof property.Password === "string") {
		if (!ServerPasswordRegex.test(property.Password)) {
			// If the password is invalid, reset to "UNLOCK"
			console.warn(
				`Invalid password: ${property.Password}. Combination will be reset to ${ServerDefaultPassword}`,
			);
			property.Password = ServerDefaultPassword;
			changed = true;
		}
	} else if (property.Password != null) {
		delete property.Password;
		changed = true;
	}

	// Sanitize timer lock remove timers
	if (asset.RemoveTimer > 0 && typeof property.RemoveTimer === "number") {
		// Ensure the lock's remove timer doesn't exceed the maximum for that lock type
		if (property.RemoveTimer - ServerRemoveTimerToleranceMs > CurrentTime + lock.Asset.MaxTimer * 1000) {
			property.RemoveTimer = Math.round(CurrentTime + lock.Asset.RemoveTimer * 1000);
			changed = true;
		}
	} else if (property.RemoveTimer != null) {
		delete property.RemoveTimer;
		changed = true;
	}

	return changed;
}

function ServerSanitizeBlocks(C, item) {
	const property = item.Property;
	let changed = ServerSanitizeStringArray(property, "Block");

	// If there is no Block array, no further sanitization is needed
	if (!Array.isArray(property.Block)) return changed;

	const allowBlock = item.Asset.AllowBlock || [];
	// Any Block entry must be included in the AllowBlock list to be permitted
	property.Block = property.Block.filter((block) => {
		if (!allowBlock.includes(block)) {
			changed = true;
			return false;
		} else return true;
	});
	return changed;
}

function ServerSanitizeStringArray(property, key) {
	const value = property[key];
	let changed = false;
	if (Array.isArray(value)) {
		value.filter(str => {
			if (typeof str !== "string") {
				console.warn(`Filtering out invalid ${key}:`, str);
				changed = true;
				return false;
			} else {
				return true;
			}
		});
	} else if (value != null) {
		console.warn(`Removing invalid ${key} array:`, value);
		delete property[key];
		changed = true;
	}
	return changed;
}

/**
 * Validates and returns a color against a color schema
 * @param {string} Color - The color to validate
 * @param {string[]} Schema - The color schema to validate against (a list of accepted Color values)
 * @returns {string} - The color if it is a valid hex color string or part of the color schema, or the default color
 *     from the color schema otherwise
 */
function ServerValidateColorAgainstSchema(Color, Schema) {
	var HexCodeRegex = /^#(?:[0-9a-f]{3}){1,2}$/i;
	if (typeof Color === 'string' && (Schema.includes(Color) || HexCodeRegex.test(Color))) return Color;
	return Schema[0];
}

/**
 * Syncs the player appearance with the server
 * @returns {void} - Nothing
 */
function ServerPlayerAppearanceSync() {

	// Creates a big parameter string of every appearance items and sends it to the server
	if (Player.AccountName != "") {
		var D = {};
		D.AssetFamily = Player.AssetFamily;
		D.Appearance = ServerAppearanceBundle(Player.Appearance);
		ServerSend("AccountUpdate", D);
	}

}

/**
 * Syncs all the private room characters with the server
 * @returns {void} - Nothing
 */
function ServerPrivateCharacterSync() {
	if (PrivateVendor != null) {
		var D = {};
		D.PrivateCharacter = [];
		for (let ID = 1; ID < PrivateCharacter.length; ID++) {
			var C = {
				Name: PrivateCharacter[ID].Name,
				Love: PrivateCharacter[ID].Love,
				Title: PrivateCharacter[ID].Title,
				Trait: PrivateCharacter[ID].Trait,
				Cage: PrivateCharacter[ID].Cage,
				Owner: PrivateCharacter[ID].Owner,
				Lover: PrivateCharacter[ID].Lover,
				AssetFamily: PrivateCharacter[ID].AssetFamily,
				Appearance: ServerAppearanceBundle(PrivateCharacter[ID].Appearance),
				AppearanceFull: ServerAppearanceBundle(PrivateCharacter[ID].AppearanceFull),
				ArousalSettings: PrivateCharacter[ID].ArousalSettings,
				Event: PrivateCharacter[ID].Event
			};
			D.PrivateCharacter.push(C);
		}
		ServerSend("AccountUpdate", D);
	}
}

/**
 * Callback used to parse received information related to a query made by the player such as viewing their online
 * friends or current email status
 * @param {object} data - Data object containing the query data
 * @returns {void} - Nothing
 */
function ServerAccountQueryResult(data) {
	if ((data != null) && (typeof data === "object") && !Array.isArray(data) && (data.Query != null) && (typeof data.Query === "string") && (data.Result != null)) {
		if (data.Query == "OnlineFriends") FriendListLoadFriendList(data.Result);
		if (data.Query == "EmailStatus" && data.Result && document.getElementById("InputEmailOld"))
			document.getElementById("InputEmailOld").placeholder = TextGet("UpdateEmailLinked");
		if (data.Query == "EmailStatus" && !data.Result && document.getElementById("InputEmailNew"))
			document.getElementById("InputEmailNew").placeholder = TextGet("UpdateEmailEmpty");
		if (data.Query == "EmailUpdate") ElementValue("InputEmailNew", TextGet(data.Result ? "UpdateEmailSuccess" : "UpdateEmailFailure"));
	}
}

/**
 * Callback used to parse received information related to ta beep from another account
 * @param {object} data - Data object containing the beep object which contain at the very least a name and a member
 *     number
 * @returns {void} - Nothing
 */
function ServerAccountBeep(data) {
	if ((data != null) && (typeof data === "object") && !Array.isArray(data) && (data.MemberNumber != null) && (typeof data.MemberNumber === "number") && (data.MemberName != null) && (typeof data.MemberName === "string")) {
		if (!data.BeepType || data.BeepType == "") {
			if (typeof data.Message === "string") {
				data.Message = data.Message.substr(0, 1000);
			} else {
				delete data.Message;
			}
			ServerBeep.MemberNumber = data.MemberNumber;
			ServerBeep.MemberName = data.MemberName;
			ServerBeep.ChatRoomName = data.ChatRoomName;
			ServerBeep.Timer = CurrentTime + 10000;
			if (Player.AudioSettings && Player.AudioSettings.PlayBeeps) {
				ServerBeepAudio.volume = Player.AudioSettings.Volume;
				ServerBeepAudio.play();
			}
			ServerBeep.Message = `${DialogFindPlayer("BeepFrom")} ${ServerBeep.MemberName} (${ServerBeep.MemberNumber})`;
			if (ServerBeep.ChatRoomName != null)
				ServerBeep.Message = ServerBeep.Message + " " + DialogFindPlayer("InRoom") + " \"" + ServerBeep.ChatRoomName + "\" " + (data.ChatRoomSpace === "Asylum" ? DialogFindPlayer("InAsylum") : '');
			if (data.Message) {
				ServerBeep.Message += `; ${DialogFindPlayer("BeepWithMessage")}`
			}
			FriendListBeepLog.push({
				MemberNumber: data.MemberNumber,
				MemberName: data.MemberName,
				ChatRoomName: data.ChatRoomName,
				ChatRoomSpace: data.ChatRoomSpace,
				Sent: false,
				Time: new Date(),
				Message: data.Message
			});
			if (CurrentScreen == "FriendList") ServerSend("AccountQuery", { Query: "OnlineFriends" });
			if (Player.NotificationSettings.Beeps && !document.hasFocus()) NotificationsIncrement("Beep");
		} else if (data.BeepType == "Leash" && ChatRoomLeashPlayer == data.MemberNumber && data.ChatRoomName) {
			if (Player.OnlineSharedSettings && Player.OnlineSharedSettings.AllowPlayerLeashing != false && ( CurrentScreen != "ChatRoom" || !ChatRoomData || (CurrentScreen == "ChatRoom" && ChatRoomData.Name != data.ChatRoomName))) {
				if (ChatRoomCanBeLeashedBy(data.MemberNumber, Player)) {
					ChatRoomJoinLeash = data.ChatRoomName
					
					DialogLeave()
					ChatRoomClearAllElements();
					if (CurrentScreen == "ChatRoom") {
						ServerSend("ChatRoomLeave", "");
						CommonSetScreen("Online", "ChatSearch");
					}
					else ChatRoomStart("", "", "MainHall", "IntroductionDark", BackgroundsTagList) //CommonSetScreen("Room", "ChatSearch")
				} else {
					ChatRoomLeashPlayer = null
				}
			}
		}
	}
}



/** Draws the last beep sent by the server if the timer is still valid, used during the drawing process */
function ServerDrawBeep() {
	if ((ServerBeep.Timer != null) && (ServerBeep.Timer > CurrentTime)) {
		DrawButton((CurrentScreen == "ChatRoom") ? 0 : 500, 0, 1000, 50, ServerBeep.Message, "Pink", "");
		if (document.hasFocus()) NotificationsReset("Beep");
	}
}

/**
 * Callback used to parse received information related to the player ownership data
 * @param {object} data - Data object containing the Owner name and Ownership object
 * @returns {void} - Nothing
 */
function ServerAccountOwnership(data) {

	// If we get a result for a specific member number, we show that option in the online dialog
	if ((data != null) && (typeof data === "object") && !Array.isArray(data) && (data.MemberNumber != null) && (typeof data.MemberNumber === "number") && (data.Result != null) && (typeof data.Result === "string"))
		if ((CurrentCharacter != null) && (CurrentCharacter.MemberNumber == data.MemberNumber))
			ChatRoomOwnershipOption = data.Result;

	// If we must update the character ownership data
	if ((data != null) && (typeof data === "object") && !Array.isArray(data) && (data.Owner != null) && (typeof data.Owner === "string") && (data.Ownership != null) && (typeof data.Ownership === "object")) {
		Player.Owner = data.Owner;
		Player.Ownership = data.Ownership;
		LoginValidCollar();
	}

	// If we must clear the character ownership data
	if ((data != null) && (typeof data === "object") && !Array.isArray(data) && (data.ClearOwnership != null) && (typeof data.ClearOwnership === "boolean") && (data.ClearOwnership == true)) {
		Player.Owner = "";
		Player.Ownership = null;
		LogDelete("ReleasedCollar", "OwnerRule");
		LoginValidCollar();
	}

}

/**
 * Callback used to parse received information related to the player lovership data
 * @param {object} data - Data object containing the Lovership array
 * @returns {void} - Nothing
 */
function ServerAccountLovership(data) {

	// If we get a result for a specific member number, we show that option in the online dialog
	if ((data != null) && (typeof data === "object") && !Array.isArray(data) && (data.MemberNumber != null) && (typeof data.MemberNumber === "number") && (data.Result != null) && (typeof data.Result === "string"))
		if ((CurrentCharacter != null) && (CurrentCharacter.MemberNumber == data.MemberNumber))
			ChatRoomLovershipOption = data.Result;

	// If we must update the character lovership data
	if ((data != null) && (typeof data === "object") && !Array.isArray(data) && (data.Lovership != null) && (typeof data.Lovership === "object")) {
		Player.Lovership = data.Lovership;
		LoginLoversItems();
	}
}
