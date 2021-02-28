"use strict";

// Regexes for lock combination numbers and passwords
const ValidationCombinationNumberRegex = /^\d{4}$/;
const ValidationPasswordRegex = /^[A-Z]{1,8}$/;
const ValidationDefaultCombinationNumber = "0000";
const ValidationDefaultPassword = "UNLOCK";
const ValidationRemoveTimerToleranceMs = 5000;
const ValidationLockProperties = [
	"LockedBy", "LockMemberNumber", "CombinationNumber", "RemoveItem", "ShowTimer",
	"MemberNumberListKeys", "Password", "Hint", "LockSet", "LockPickSeed",
];
const ValidationTimerLockProperties = ["MemberNumberList", "RemoveTimer"];
const ValidationAllLockProperties = ValidationLockProperties
	.concat(["EnableRandomInput"])
	.concat(ValidationTimerLockProperties);

function ValidationResolveAppearanceDiff(previousItem, newItem, params) {
	let result;
	if (!previousItem) {
		result = ValidationResolveAddDiff(newItem, params);
	} else if (!newItem) {
		result = ValidationResolveRemoveDiff(previousItem, params);
	} else if (previousItem.Asset === newItem.Asset) {
		result = ValidationResolveModifyDiff(previousItem, newItem, params);
	} else {
		result = ValidationResolveSwapDiff(previousItem, newItem, params);
	}
	let { item, valid } = result;
	// If the diff has resolved to an item, sanitize its properties
	if (item) valid = valid && !ValidationSanitizeProperties(params.C, result);
	return { item, valid };
}

function ValidationResolveAddDiff(newItem, params) {
	const canAdd = ValidationCanAddItem(newItem, params);
	if (!canAdd) {
		const { C, SourceMemberNumber } = params;
		console.warn(
			`Invalid addition of ${previousItem.Asset.Name} to member number ${C.MemberNumber} by ${SourceMemberNumber} blocked`);
		return { item: null, valid: false };
	}
	const itemWithoutProperties = {
		Asset: newItem.Asset,
		Difficulty: newItem.Difficulty,
		Color: newItem.Color,
	};
	return ValidationResolveModifyDiff(itemWithoutProperties, newItem, params);
}

function ValidationResolveRemoveDiff(previousItem, params, isSwap) {
	const canRemove = ValidationCanRemoveItem(previousItem, params, isSwap);
	if (!canRemove) {
		const { C, SourceMemberNumber } = params;
		console.warn(
			`Invalid removal of ${previousItem.Asset.Name} from member number ${C.MemberNumber} by ${SourceMemberNumber} blocked`);
	}
	return {
		item: canRemove ? null : previousItem,
		valid: canRemove,
	};
}

function ValidationResolveSwapDiff(previousItem, newItem, params) {
	// First, attempt to remove the previous item
	let result = ValidationResolveRemoveDiff(previousItem, params, true);
	// If the removal result was valid, attempt to add the new item
	if (result.valid) result = ValidationResolveAddDiff(newItem, params);
	// If the result is valid, return it
	if (result.valid) return result;
	// Otherwise, return the previous item and an invalid status
	else return { item: previousItem, valid: false };
}

function ValidationResolveModifyDiff(previousItem, newItem, params) {
	const { C, SourceMemberNumber } = params;
	const previousLock = InventoryGetLock(previousItem);
	const newLock = InventoryGetLock(newItem);
	const previousProperty = previousItem.Property || {};
	const newProperty = newItem.Property = newItem.Property || {};

	const lockSwapped = !!newLock && !!previousLock && newLock.Asset.Name !== previousLock.Asset.Name;
	const lockModified = !!newLock && !!previousLock && !lockSwapped;
	const lockRemoved = lockSwapped || (!newLock && !!previousLock);
	const lockAdded = lockSwapped || (!!newLock && !previousLock);

	const lockChangeInvalid = (lockRemoved && !ValidationIsLockChangePermitted(previousLock, params)) ||
	                          (lockAdded && !ValidationIsLockChangePermitted(newLock, params));
	let valid = true;

	if (lockChangeInvalid) {
		// If there was a lock previously, reapply the old lock
		if (previousLock) {
			console.warn(
				`Invalid removal of ${previousLock.Asset.Name} on member number ${C.MemberNumber} by member number ${SourceMemberNumber} blocked`);
			InventoryLock(C, newItem, previousLock, previousProperty.LockMemberNumber, false);
			ValidationCopyLockProperties(previousProperty, newProperty, true);
			valid = false;
		} else {
			// Otherwise, delete any lock
			console.warn(
				`Invalid addition of ${newLock.Asset.Name} to member number ${C.MemberNumber} by member number ${SourceMemberNumber} blocked`);
			valid = valid && !ValidationDeleteLock(newItem.Property);
		}
	} else if (lockModified) {
		// If the lock has been modified, then ensure lock properties don't change (except where they should be able to)
		const hasLockPermissions = ValidationIsLockChangePermitted(previousLock, params);
		valid = valid && !ValidationCopyLockProperties(previousProperty, newProperty, hasLockPermissions);
	}

	if (!Object.keys(newProperty).length) delete newItem.Property;

	return { item: newItem, valid };
}

function ValidationIsLockChangePermitted(lock, { FromOwner, FromLoversOrOwner }) {
	if (!lock) return true;
	return !(
		(lock.Asset.LoverOnly && !FromLoversOrOwner) ||
		(lock.Asset.OwnerOnly && !FromOwner)
	);
}

function ValidationCopyLockProperties(sourceProperty, targetProperty, hasLockPermissions) {
	let changed = false;
	ValidationLockProperties.forEach((key) => {
		changed = changed || ValidationCopyLockProperty(sourceProperty, targetProperty, key);
	});
	if (!hasLockPermissions) {
		changed = changed || ValidationCopyLockProperty(sourceProperty, targetProperty, "EnableRandomInput");
		if (!targetProperty.EnableRandomInput) {
			ValidationTimerLockProperties.forEach((key) => {
				changed = changed || ValidationCopyLockProperty(sourceProperty, targetProperty, key);
			});
		}
	}
	return changed;
}

function ValidationCopyLockProperty(sourceProperty, targetProperty, key) {
	if (sourceProperty[key] != null && !CommonDeepEqual(targetProperty[key], sourceProperty[key])) {
		targetProperty[key] = sourceProperty[key];
		return true;
	}
	return false;
}

function ValidationCanAddItem(newItem, { C, FromSelf, FromOwner, FromLoversOrOwner, SourceMemberNumber }) {
	// If the update is coming from ourself, it's always permitted
	if (FromSelf) return true;

	const asset = newItem.Asset;

	// If changing cosplay items is blocked and we're adding a cosplay item, block it
	const blockBodyCosplay = C.OnlineSharedSettings && C.OnlineSharedSettings.BlockBodyCosplay;
	if (blockBodyCosplay && asset.Group.BodyCosplay) return false;

	// If the item is blocked/limited and the source doesn't have the correct permission, prevent it from being added
	const type = (newItem.Property && newItem.Property.Type) || null;
	const blockedOrLimited = ValidationIsItemBlockedOrLimited(
		C, SourceMemberNumber, asset.Group.Name, asset.Name, type);
	if (blockedOrLimited && OnlineGameAllowBlockItems()) return false;

	// If the item is owner only or locked by an owner only lock, only the owner can add it
	if (InventoryOwnerOnlyItem(newItem)) return FromOwner;

	// If the item is lover only or locked by a lover only lock, only a lover/owner can add it
	if (InventoryLoverOnlyItem(newItem)) return FromLoversOrOwner;

	// Otherwise, the item can be added
	return true;
}

function ValidationIsItemBlockedOrLimited(C, sourceMemberNumber, groupName, assetName, type) {
	if (C.MemberNumber === sourceMemberNumber) return false;
	if (InventoryIsPermissionBlocked(C, assetName, groupName, type)) return true;
	if (!InventoryIsPermissionLimited(C, assetName, groupName, type)) return false;
	if (C.IsLoverOfMemberNumber(sourceMemberNumber) || C.IsOwnedByMemberNumber(sourceMemberNumber)) return false;
	// If item permission is "Owner, Lover, whitelist & Dominants" or below, the source must be on their whitelist
	if (C.ItemPermission < 3 && C.WhiteList.includes(sourceMemberNumber)) return false;
	// Otherwise, the item is limited, and the source doesn't have permission
	return true;
}

function ValidationCanRemoveItem(previousItem, { C, FromSelf, FromOwner, FromLoversOrOwner }, isSwap) {
	const asset = previousItem.Asset;

	// If we're not swapping, and the asset group can't be empty, always block removal
	if (!asset.Group.AllowNone && !isSwap) return false;

	// If the update is coming from ourself, it's always permitted
	if (FromSelf) return true;

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

function ValidationSanitizeProperties(C, item) {
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
	let changed = ValidationSanitizeEffects(C, item);
	changed = changed || ValidationSanitizeBlocks(C, item);
	changed = changed || ValidationSanitizeStringArray(property, "Hide");

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

function ValidationSanitizeEffects(C, item) {
	const property = item.Property;
	let changed = ValidationSanitizeStringArray(property, "Effect");
	changed = changed || ValidationSanitizeLock(C, item);

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

function ValidationSanitizeLock(C, item) {
	const asset = item.Asset;
	const property = item.Property;
	// If there is no lock effect present, strip out any lock-related properties
	if (!Array.isArray(property.Effect) || !property.Effect.includes("Lock")) return ValidationDeleteLock(property);

	const lock = InventoryGetLock(item);

	// If there is no lock, or the asset does not permit locks, or
	if (
		!asset.AllowLock ||
		!lock ||
		property.AllowLock === false ||
		(asset.AllowLockType && !asset.AllowLockType.includes(property.Type))
	) {
		return ValidationDeleteLock(property);
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
			return ValidationDeleteLock(property);
		}

		const lockedByLover = C.GetLoversNumbers().includes(lockNumber);
		// Ensure the lock member number is valid on lover-only locks
		if (lock.Asset.LoverOnly && !lockedByOwner && !lockedByLover) {
			console.warn(`Removing invalid lover-only lock with member number: ${lockNumber}`);
			return ValidationDeleteLock(property);
		}
	}

	// Sanitize combination lock number
	if (typeof property.CombinationNumber === "string") {
		if (!ValidationCombinationNumberRegex.test(property.CombinationNumber)) {
			// If the combination is invalid, reset to 0000
			console.warn(
				`Invalid combination number: ${property.CombinationNumber}. Combination will be reset to ${ValidationDefaultCombinationNumber}`,
			);
			property.CombinationNumber = ValidationDefaultCombinationNumber;
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
		if (!ValidationPasswordRegex.test(property.Password)) {
			// If the password is invalid, reset to "UNLOCK"
			console.warn(
				`Invalid password: ${property.Password}. Combination will be reset to ${ValidationDefaultPassword}`,
			);
			property.Password = ValidationDefaultPassword;
			changed = true;
		}
	} else if (property.Password != null) {
		delete property.Password;
		changed = true;
	}

	// Sanitize timer lock remove timers
	if (asset.RemoveTimer > 0 && typeof property.RemoveTimer === "number") {
		// Ensure the lock's remove timer doesn't exceed the maximum for that lock type
		if (property.RemoveTimer - ValidationRemoveTimerToleranceMs > CurrentTime + lock.Asset.MaxTimer * 1000) {
			property.RemoveTimer = Math.round(CurrentTime + lock.Asset.RemoveTimer * 1000);
			changed = true;
		}
	} else if (property.RemoveTimer != null) {
		delete property.RemoveTimer;
		changed = true;
	}

	return changed;
}

function ValidationSanitizeBlocks(C, item) {
	const property = item.Property;
	let changed = ValidationSanitizeStringArray(property, "Block");

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

function ValidationSanitizeStringArray(property, key) {
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
 * Completely removes a lock from an item
 * @param {object} Property - The item to remove the lock from
 * @returns {void} - Nothing
 */
function ValidationDeleteLock(Property) {
	let changed = false;
	if (Property) {
		ValidationAllLockProperties.forEach(key => {
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
