// *** Item Value Guidelines ***
// First, check if there's a similar item and use that price.  If there isn't, use the real price in US dollars
// If it's an item that can only used once in real life (duct tape), raise the price a lot (you buy a great quantity of it)
// If it's an item with extended capabilities, raise the price
// If it's an item with multiple image layers, raise the price a little
// If it's a restraint that's impossible to remove, raise the price a little
// If the item doesn't have any image (butt plug), lower the price
// Bondage items should not go over 250$ - The love belt is that item right now
// Regular clothes should not go over 100$ - Dress2 is that item right now
// Empty value is a free item that everyone has from the start
// -1 value items cannot be bought, they must be acquired in-game in some other ways

// Sort order of asset properties:
// Name, Priority, Value, Difficulty, SelfBondage, Time, RemoveTime, Enable, Visible, Random, Wear, IsRestraint, AllowLock, OwnerOnly, LoverOnly, Left, Top, DefaultColor, BuyGroup, Prerequisite, Hide, HideItem, everything else

// Sort order of asset group properties:
// Group, ParentGroup, ParentSize, ParentColor, Category, Priority, Default, Clothing, Underwear, Random, IsRestraint, Blink, Left, Top, Color, FullAlpha, AllowNone, AllowColorize, AllowCustomize, AllowPose, SetPose, Effect, Zone, Activity

// Spanking Toys Asset
var AssetSpankingToys = {
	Name: "SpankingToys", Random: false, Wear: false, BuyGroup: "SpankingToys",
	DynamicAllowInventoryAdd: C => InventoryIsWorn(Player, "SpankingToys", "ItemHands") && InventorySpankingToysActivityAllowed(C),
	DynamicDescription: C => InventorySpankingToysGetDescription(C),
	DynamicExpressionTrigger: C => SpankingInventory.find(x => x.Name == InventorySpankingToysGetType(Player)).ExpressionTrigger,
	DynamicPreviewIcon: C => InventorySpankingToysGetType(Player),
	DynamicName: C => "SpankingToys" + InventorySpankingToysGetType(C),
	DynamicGroupName: "ItemHands",
	DynamicActivity: C => InventorySpankingToysGetActivity(C),
	ParentGroup: null,
	Effect: [],
	DialogSortOverride: DialogSortOrderEquipped

};

// 3D Custom Girl based assets
var AssetFemale3DCG = [

	// Appearance specific
	{
		Group: "Cloth",
		ParentGroup: "BodyUpper",
		Priority: 30,
		Clothing: true,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "AllFours", "OverTheHead"],
		Asset: [
			{ Name: "CollegeOutfit1", Value: -1, Hide: ["ItemNeck"], HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "MaidOutfit1", Fetish: ["Lingerie"], Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "MaidOutfit2", Fetish: ["Lingerie"], Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"], Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
			{ Name: "StudentOutfit1", Hide: ["ItemNeck", "ItemHidden"], HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "StudentOutfit2", HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemHiddenLeatherArmbinderStrap", "ItemHiddenLeatherArmbinderWrapStrap", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{
				Name: "StudentOutfit3", HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemHiddenLeatherArmbinderStrap", "ItemHiddenLeatherArmbinderWrapStrap", "ItemNipplesLactationPump"], Layer: [
					{ Name: "White", AllowColorize: true, ColorGroup: "TestGroup" },
					{ Name: "Color", AllowColorize: true, ColorGroup: "TestGroup" }
				],
				Require: ["ClothLower", "ClothAccessory"]
			},
			{ Name: "BabydollDress1", Fetish: ["ABDL"], HideItem: ["ClothLowerLatexSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "TeacherOutfit1", Hide: ["ItemNeck", "ItemHidden"], HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"], AllowPose: ["Horse", "KneelingSpread", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero"] },
			{ Name: "ChineseDress1", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "ChineseDress2", Value: 60, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "TShirt1", HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"], Require: ["ClothLower"] },
			{ Name: "TennisShirt1", Hide: ["ItemHidden"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"], Require: ["ClothLower"] },
			{ Name: "Sweater1", HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"], Require: ["ClothLower"] },
			{ Name: "MistressTop", Fetish: ["Leather"], Value: -1, Hide: ["Bra"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"], Require: ["ClothLower"] },
			{ Name: "AdultBabyDress1", Fetish: ["ABDL"], Value: 60, Hide: ["ItemHidden"], HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "AdultBabyDress2", Fetish: ["ABDL"], Value: 80, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "AdultBabyDress3", Fetish: ["ABDL"], Value: 40, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "AdultBabyDress4", Fetish: ["ABDL"], Value: 80, Left: 100, Top: 190, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "NurseUniform", Value: -1, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "Robe1", Value: 30, Hide: ["ItemHidden"], HideItem: ["ClothLowerLatexSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "SuspenderTop1", Fetish: ["Lingerie"], Priority: 25, Value: 50, Hide: ["Panties", "ItemVulva", "ItemVulvaPiercings"], Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
			{ Name: "LeatherCorsetTop1", Fetish: ["Leather"], Priority: 25, Value: 60, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"] },
			{
				Name: "FlowerDress", Value: 50, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"],
				AllowPose: ["Suspension"],
				Layer: [
					{ Name: "Dress", AllowColorize: true },
					{ Name: "Flower", AllowColorize: false }
				]
			},
			{ Name: "Dress2", Value: 100, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "LaceBabydoll", Fetish: ["Lingerie"], Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"] },
			{ Name: "SleevelessTop", Fetish: ["Lingerie"], Value: 20, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"] },
			{
				Name: "DressFur", Value: 70, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"],
				Layer: [
					{ Name: "Fabric", AllowColorize: true },
					{ Name: "Fur", AllowColorize: false }
				]
			},
			{ Name: "BodyTowel1", Value: 30, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"] },
			{ Name: "Yukata1", Value: 50, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "SteampunkCorsetTop1", Fetish: ["Leather"], Priority: 25, Value: 70, Hide: ["ItemHidden"], HideItem: ["ClothLowerTennisSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"] },
			{ Name: "BondageDress1", Value: 90, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "BondageDress2", Value: 90, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "ShoulderlessTop", Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"] },
			{ Name: "Dress3", Value: 80, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "ComfyTop", Value: 60, Hide: ["ItemNipples", "ItemNipplesPiercings"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "WeddingDress1", Fetish: ["Lingerie"], Priority: 22, Value: 150, Hide: ["ClothLower", "BodyLower", "Panties", "Shoes", "ItemBoots"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemFeetLeatherAnkleCuffs", "ItemLegsLeatherLegCuffs", "ItemLegsWoodenHorse", "ItemFeetSpreaderMetal", "ItemFeetSpreaderDildoBar", "ItemFeetSpreaderVibratingDildoBar", "ItemLegsOrnateLegCuffs", "ItemFeetOrnateAnkleCuffs", "ItemDevicesSaddleStand", "ItemVulvaWandBelt", "ItemFeetAnkleShackles", "ItemFeetIrish8Cuffs", "ItemFeetBallChain", "ItemNipplesLactationPump"], AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "LegsClosed", "Kneel", "KneelingSpread"] },
			{ Name: "WeddingDress2", Fetish: ["Lingerie"], Priority: 22, Value: 150, Hide: ["ClothLower", "BodyLower", "Panties", "Shoes", "ItemBoots"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemFeetLeatherAnkleCuffs", "ItemLegsLeatherLegCuffs", "ItemLegsWoodenHorse", "ItemFeetSpreaderMetal", "ItemFeetSpreaderDildoBar", "ItemFeetSpreaderVibratingDildoBar", "ItemLegsOrnateLegCuffs", "ItemNipplesLactationPump", "ItemFeetOrnateAnkleCuffs", "ItemDevicesSaddleStand", "ItemVulvaWandBelt", "ItemFeetAnkleShackles", "ItemFeetIrish8Cuffs", "ItemFeetBallChain"], AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "LegsClosed", "Kneel", "KneelingSpread"] },
			{ Name: "BridesmaidDress1", Fetish: ["Lingerie"], Value: 100, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemNipplesLactationPump"] },
			{ Name: "Gown1", Value: 70, Random: false, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Gown2Top", Value: 90, Random: false, Left: 125, Top: 220, BuyGroup: "Gown2", HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesLactationPump", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Require: ["ClothLower"] },
			{ Name: "Gown3", Value: 70, Random: false, Left: 99, Top: 194, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesLactationPump", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidApron1", Fetish: ["Lingerie"], Priority: 32, Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidApron2", Fetish: ["Lingerie"], Priority: 32, Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
			{ Name: "AdmiralTop", Value: 30, Hide: ["ItemNeck", "ItemHidden"], HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], AllowPose: ["Horse", "KneelingSpread", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero"] },
			{ Name: "VirginKiller1", Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"] },
			{ Name: "ReverseBunnySuit", Fetish: ["Nylon", "Pet"], Value: 100, BuyGroup: "ReverseBunnySuit", Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast", "ItemTorso"] },
			{ Name: "LeatherCropTop", Fetish: ["Leather"], Value: 60, Hide: ["ItemNipples", "ItemNipplesPiercings"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{
				Name: "CorsetShirt", Fetish: ["Lingerie"], Priority: 25, Value: 60, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"],
				Layer: [
					{ Name: "Shirt", AllowColorize: true },
					{ Name: "Corset", AllowColorize: false }
				]
			},
		],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "ClothAccessory",
		Priority: 32,
		Default: false,
		Clothing: true,
		Random: false,
		Asset: [
			{ Name: "StudentOutfit3Scarf", Priority: 34, Left: 200, Top: 250 },
			{ Name: "StudentOutfit3Bow1", Priority: 34, Left: 200, Top: 250 },
			{ Name: "StudentOutfit3Bow2", Priority: 34, Left: 200, Top: 250 },
			{ Name: "StudentOutfit3Bow3", Priority: 34, Left: 200, Top: 250 },
			{
				Name: "Bouquet", Priority: 41, Value: 40, Left: 175, Top: 350, BuyGroup: "Bouquet", AllowPose: ["BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "OverTheHead"],
				Layer: [
					{ Name: "Base", AllowColorize: false },
					{ Name: "Flowers", AllowColorize: true }
				]
			},
			{ Name: "FrillyApron", Fetish: ["Lingerie"], ParentGroup: "BodyUpper", Value: -1, Left: 135, Top: 179, BuyGroup: "Maid", AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "OverTheHead"] },
			{ Name: "BunnyCollarCuffs", Fetish: ["Pet"], ParentGroup: "BodyUpper", Value: 10, Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast", "ItemTorso"], AllowPose: ["AllFours", "TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "OverTheHead"] }
		],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Necklace",
		ParentGroup: "BodyUpper",
		Priority: 31,
		Default: false,
		Clothing: true,
		Random: false,
		Asset: [
			{ Name: "Necklace1", Value: 40, Left: 148, Top: 70, ParentGroup: null },
			{ Name: "Necklace2", Left: 147, Top: 90, ParentGroup: null },
			{ Name: "Necklace3", Left: 147, Top: 110, ParentGroup: null },
			{ Name: "Necklace4", Value: 30, Left: 147, Top: 110, ParentGroup: null },
			{
				Name: "NecklaceLock", Fetish: ["Metal"], Value: 40, Left: 155, Top: 152, Priority: 29, ParentGroup: null,
				Layer: [
					{ Name: "Chain", AllowColorize: true },
					{ Name: "Lock", AllowColorize: false }
				]
			},
			{
				Name: "NecklaceKey", Fetish: ["Metal"], Value: 40, Left: 153, Top: 152, Priority: 29, ParentGroup: null,
				Layer: [
					{ Name: "Chain", AllowColorize: true },
					{ Name: "Key", AllowColorize: false }
				]
			},
			{
				Name: "IDCard", Value: 10, Left: 145, Top: 180, ParentGroup: null,
				Layer: [
					{ Name: "String", AllowColorize: true },
					{ Name: "Card", AllowColorize: false }
				]

			},
		{ Name: "BlackHeart", Value: 40, Left: 148, Top: 70, ParentGroup: null }
		],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Suit",
		ParentGroup: "BodyUpper",
		Priority: 14,
		Clothing: true,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "OverTheHead"],
		Asset: [
			{
				Name: "Catsuit", Fetish: ["Nylon"], Value: 100, BuyGroup: "Catsuit", Hide: ["ItemNipplesPiercings"], HideItem: ["ItemNipplesChopStickNippleClamps"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"],
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Zip", AllowColorize: false }
				]
			},
			{ Name: "SeamlessCatsuit", Fetish: ["Nylon"], Value: -1, BuyGroup: "Catsuit", Hide: ["ItemNipplesPiercings"], HideItem: ["ItemNipplesChopStickNippleClamps"] },
			{ Name: "SeethroughSuit", Fetish: ["Nylon"], Value: 100, BuyGroup: "SeethroughSuit", HideItem: ["ItemNipplesChopStickNippleClamps"] },
			{
				Name: "SeethroughSuitZip", Fetish: ["Nylon"], Value: -1, BuyGroup: "SeethroughSuit", HideItem: ["ItemNipplesChopStickNippleClamps"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"],
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Zip", AllowColorize: false }
				]
			},
			{ Name: "ReverseBunnySuit", Fetish: ["Nylon", "Pet"], Value: 100, BuyGroup: "ReverseBunnySuit" }
		],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "ClothLower",
		ParentGroup: "BodyLower",
		ParentColor: "Cloth",
		Priority: 26,
		Default: false,
		Clothing: true,
		Left: 105,
		Top: 380,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Horse", "KneelingSpread", "Spread"],
		Asset: [
			{ Name: "Skirt1", HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{
				Name: "Skirt2", HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], Layer: [
					{ Name: "Color", AllowColorize: true },
					{ Name: "Stripe", AllowColorize: false }
				],
				ParentItem: "StudentOutfit3"
			},
			{
				Name: "Skirt3", HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], Layer: [
					{ Name: "Color", AllowColorize: true },
					{ Name: "Stripe", AllowColorize: false }
				],
				ParentItem: "StudentOutfit3"
			},
			{ Name: "TennisSkirt1", HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], ParentItem: "TennisShirt1" },
			{ Name: "Jeans1", Priority: 22, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks6", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "Shorts1", Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "Pajama1", Priority: 25, Random: false, HideItem: ["ItemButtAnalBeads2"] },
			{ Name: "MistressBottom", Fetish: ["Leather"], Value: -1, Hide: ["Panties"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Waspie1", Fetish: ["Leather"], Value: 60, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Waspie2", Fetish: ["Leather"], Value: 80, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Waspie3", Fetish: ["Leather"], Value: 40, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "LatexPants1", Fetish: ["Latex"], Priority: 21, Value: 60, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks1", "SocksSocks2", "SocksSocks3", "SocksSocks4", "SocksSocks5", "SocksSocks6", "SocksStockings2", "SocksStockings3", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "LatexSkirt1", Fetish: ["Latex"], Value: 40, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "LatexSkirt2", Fetish: ["Latex"], Value: 60, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "ClothSkirt1", Value: 40, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Jeans2", Priority: 22, Value: 20, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks6", "VibratingLatexPanties", "WandBelt", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "ChineseSkirt1", Value: 40, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Gown2Skirt", Value: -1, Random: false, Left: 50, Top: 462, BuyGroup: "Gown2", Hide: ["ItemFeet"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemLegsNylonRope", "ItemLegsHempRope", "ItemLegsLeatherBelt", "ItemLegsSturdyLeatherBelts", "ItemLegsDuctTape", "ItemLegsLeatherLegCuffs", "ItemLegsOrnateLegCuffs", "ItemLegsZipties", "ItemLegsChains", "ItemBootsThighHighLatexHeels"], SetPose: ["LegsClosed"], ParentItem: "Gown2Top" },
			{ Name: "AdmiralSkirt", Value: 30, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "JeanSkirt", Value: 30, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "PencilSkirt", Fetish: ["Latex"], Value: 60, Left: 105, Top: 380, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemLegsNylonRope", "ItemLegsHempRope", "ItemLegsLeatherBelt", "ItemLegsSturdyLeatherBelts", "ItemLegsDuctTape", "ItemLegsLeatherLegCuffs", "ItemLegsOrnateLegCuffs", "ItemLegsZipties", "ItemLegsChains", "ItemFeetSpreaderMetal", "ItemFeetSpreaderDildoBar", "ItemFeetSpreaderVibratingDildoBar"], SetPose: ["LegsClosed"] },
		],
		Color: ["Default", "#bbbbbb", "#808080", "#202020", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "SuitLower",
		ParentGroup: "BodyLower",
		Priority: 14,
		Default: false,
		Clothing: true,
		Left: 95,
		Top: 380,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Horse", "KneelingSpread", "Spread"],
		Asset: [
			{
				Name: "Catsuit", Fetish: ["Nylon"], Value: -1, BuyGroup: "Catsuit", Hide: ["ItemVulvaPiercings", "BodyLower"], HideItem: ["SocksPantyhose1"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Zip", AllowColorize: false }
				]
			},
			{ Name: "SeamlessCatsuit", Fetish: ["Nylon"], Value: -1, BuyGroup: "Catsuit", Hide: ["ItemVulvaPiercings", "BodyLower"], HideItem: ["SocksPantyhose1"] },
			{ Name: "SeethroughSuit", Fetish: ["Nylon"], Value: -1, BuyGroup: "SeethroughSuit", HideItem: ["SocksPantyhose1"] },
			{
				Name: "SeethroughSuitZip", Fetish: ["Nylon"], Value: -1, BuyGroup: "SeethroughSuit", HideItem: ["SocksPantyhose1"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Zip", AllowColorize: false }
				]
			},
			{ Name: "ReverseBunnySuit", Fetish: ["Nylon", "Pet"], Value: -1, BuyGroup: "ReverseBunnySuit", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] }
		],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Bra",
		ParentGroup: "BodyUpper",
		Priority: 21,
		Clothing: true,
		Underwear: true,
		Left: 150,
		Top: 200,
		AllowPose: ["Yoked", "Hogtied"],
		Asset: [
			{ Name: "Bra1", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra2", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra7", Priority: 20, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra8", Value: 15, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra9", Value: 10, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bandeau1", Fetish: ["Lingerie"], Priority: 20, Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bustier1", Fetish: ["Lingerie"], Value: 30, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset1", Fetish: ["Lingerie"], Priority: 22, Value: 35, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset2", Fetish: ["Lingerie"], Priority: 22, Value: 30, BuyGroup: "Corset2", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset3", Fetish: ["Lingerie"], Priority: 22, Value: 25, BuyGroup: "Corset3", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset4", Fetish: ["Lingerie"], Priority: 22, Value: 15, BuyGroup: "Corset4", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Corset5", Fetish: ["Lingerie"], Priority: 22, Value: 20, BuyGroup: "Corset5", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Bikini1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikini1", Value: 50, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikini2", Value: 40, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikini3", Value: 45, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Swimsuit1", Value: 15, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemVulva"] },
			{ Name: "Swimsuit2", Value: 25, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemVulva"] },
			{ Name: "BunnySuit", Fetish: ["Nylon", "Pet"], Value: 30, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemVulva"] },
			{ Name: "FrameBra1", Value: 20, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "FrameBra2", Value: 15, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "BondageBra1", Fetish: ["Leather"], Priority: 20, Value: 40, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LatexBra1", Fetish: ["Lingerie", "Latex"], Value: 30, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HarnessBra1", Fetish: ["Leather"], Priority: 20, Value: 30, BuyGroup: "HarnessBra1", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HarnessBra2", Fetish: ["Leather"], Priority: 20, Value: 40, BuyGroup: "HarnessBra2", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "CuteBikini1", Fetish: ["Lingerie"], Priority: 20, Value: 40, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "CorsetBikini1", Fetish: ["Lingerie"], Priority: 20, Value: 40, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemVulva"] },
			{ Name: "OuvertPerl1", Fetish: ["Lingerie"], Priority: 20, Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemNipplesLactationPump"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Sarashi1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "KittyBra1", Fetish: ["Pet"], Value: 30, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "FishnetBikini1", Priority: 20, Value: 45, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemVulva"] },
			{ Name: "SexyBeachBra1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikiniBra1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "StarHarnessBra", Fetish: ["Leather"], Priority: 20, Value: 40, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HeartTop", Fetish: ["Lingerie"], Priority: 20, Value: 35, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "ChineseBra1", Fetish: ["Lingerie"], Value: 35, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "LatexCorset1", Fetish: ["Lingerie", "Latex"], Priority: 21, Value: 40, BuyGroup: "LatexCorset1", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LeatherStrapBra1", Fetish: ["Leather"], Value: 15, BuyGroup: "LeatherStrapBra1", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Swimsuit3", Value: 35, DefaultColor: "#E53771", Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemVulva"] },
		],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Panties",
		ParentGroup: "BodyLower",
		ParentColor: "Bra",
		Priority: 19,
		Clothing: true,
		Underwear: true,
		Left: 150,
		Top: 395,
		Asset: [
			{ Name: "Panties1", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties7", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties8", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties11", Fetish: ["Lingerie"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties12", Fetish: ["Lingerie"], Value: 10, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties13", Fetish: ["Lingerie"], Value: 10, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties14", Fetish: ["Lingerie"], Value: 10, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties15", Fetish: ["Lingerie"], Value: 10, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Bikini1", Value: 25, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Diapers1", Fetish: ["ABDL"], Value: 20, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{
				Name: "Diapers2", Fetish: ["ABDL"], Value: 30, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"],
				Layer: [
					{ Name: "Diaper", AllowColorize: false },
					{ Name: "Cover", AllowColorize: true }
				]
			},
			{ Name: "Diapers3", Fetish: ["ABDL"], Value: 30, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties16", Fetish: ["Lingerie"], Value: 20, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "MaidPanties1", Fetish: ["Lingerie"], Value: 25, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "LatexPanties1", Fetish: ["Latex"], Value: 30, Expose: ["ItemVulva", "ItemVulvaPiercings"] },
			{ Name: "WrapPanties1", Value: 25, Expose: ["ItemVulva", "ItemVulvaPiercings"] },
			{ Name: "CrotchPanties1", Value: 30, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "StringPanties1", Value: 15, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "StringPasty1", Value: 10, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "ZipPanties1", Value: 15, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "HarnessPanties1", Fetish: ["Leather"], Value: 35, BuyGroup: "HarnessPanties1", AllowPose: ["LegsClosed", "Kneel"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "HarnessPanties2", Fetish: ["Leather"], Value: 40, Left: 85, Top: 395, BuyGroup: "HarnessPanties2", AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread", "Spread"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "KittyPanties1", Fetish: ["Pet"], Value: 20, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "PearlPanties1", Fetish: ["Lingerie"], Value: 20, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "SunstripePanties1", Value: 20, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "SexyBeachPanties1", Value: 20, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "ChinesePanties1", Value: 25, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "LeatherStrapPanties1", Fetish: ["Leather"], Value: 20, BuyGroup: "LeatherStrapPanties1", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] }

		],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Socks",
		ParentGroup: "BodyLower",
		ParentColor: "Bra",
		Priority: 20,
		Clothing: true,
		Underwear: true,
		Left: 125,
		Top: 400,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Hogtied", "Spread"],
		Asset: [
			"Socks0", "Socks1", "Socks2", "Socks3", "Socks4", "Socks5",
			{ Name: "Stockings1", Fetish: ["Nylon"] },
			{ Name: "Stockings2", Fetish: ["Nylon"] },
			{ Name: "Stockings3", Fetish: ["Nylon"], Value: 10 },
			{ Name: "Stockings4", Fetish: ["Nylon"], Value: 10 },
			{ Name: "Pantyhose1", Fetish: ["Nylon"], Value: 10, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo"], BuyGroup: "Pantyhose", Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{
				Name: "Socks6", Fetish: ["Nylon"], Value: 25,
				Layer: [
					{ Name: "Sock", AllowColorize: true },
					{ Name: "Frill", AllowColorize: false }
				]
			},
			{
				Name: "SocksFur", Fetish: ["Nylon"], Value: 40,
				Layer: [
					{ Name: "Fabric", AllowColorize: true },
					{ Name: "Fur", AllowColorize: false }
				]
			},
			{ Name: "SocksStriped1", Value: 10 },
			{ Name: "LatexSocks1", Fetish: ["Latex"], Value: 30 },
			{ Name: "FootlessSocks1", Value: 15 },
			{ Name: "ReverseBunnySuit", Fetish: ["Nylon", "Pet"], Priority: 22, Value: 100, BuyGroup: "ReverseBunnySuit" },
			{ Name: "LeatherSocks1", Fetish: ["Leather"], Value: 20 },
			{ Name: "Pantyhose2", Fetish: ["Nylon"], Value: 10 }
		],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Shoes",
		ParentGroup: "BodyLower",
		Priority: 23,
		Clothing: true,
		Left: 115,
		Top: 500,
		AllowPose: ["LegsClosed", "Kneel", "Hogtied", "Spread"],
		Asset: [
			{ Name: "Shoes1", Height: 6 },
			{ Name: "Shoes2", Height: 6 },
			{ Name: "Shoes4", Height: 6 },
			{ Name: "Sneakers1", Height: 3 },
			{ Name: "Sneakers2", Height: 3 },
			{ Name: "Heels1", Height: 15 },
			{ Name: "Heels2", Height: 15 },
			{ Name: "Boots1", Height: 9 },
			{ Name: "MistressBoots", Fetish: ["Leather"], Value: -1, HideItem: ["SocksSocks4", "SocksSocks5"], Alpha: [[75, 875, 140, 200], [290, 875, 140, 200]], Height: 35 },
			{ Name: "PonyBoots", Fetish: ["Pony"], Value: -1, Alpha: [[75, 875, 140, 200], [290, 875, 140, 200]], Height: 35 },
			{ Name: "Sandals", Priority: 22, Value: 30, HideItem: ["SocksSocks0", "SocksSocks1", "SocksSocks2", "SocksSocks3", "SocksSocks4", "SocksSocks5", "SocksSocks6", "SocksSocksFur"], Height: 3 },
			{ Name: "PawBoots", Fetish: ["Pet"], Value: 45, Height: 3 },
			{ Name: "WoollyBootsTall", Fetish: ["Pet"], Value: 60, Height: 9 },
			{ Name: "ThighHighLatexHeels", Fetish: ["Latex"], Value: 80, BuyGroup: "ThighHighLatexHeels", Alpha: [[75, 850, 140, 200], [290, 850, 140, 200]], Height: 30 },
			{ Name: "Heels3", Height: 15, Value: 30 }
		],
		Color: ["Default", "#bbbbbb", "#808080", "#202020", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Hat",
		Priority: 54,
		Default: false,
		Clothing: true,
		Left: 125,
		Top: 0,
		AllowPose: ["Suspension"],
		Asset: [
			"Band1", "Band2", "Beret1",
			{ Name: "MaidHairband1", Fetish: ["Lingerie"], Value: -1 },
			{ Name: "NurseCap", Value: -1 },
			{
				Name: "Santa1", Value: 20,
				Layer: [
					{ Name: "Fabric", AllowColorize: true },
					{ Name: "Fur", AllowColorize: false }
				]
			},
			{ Name: "CaptainHat1", Value: 25 },
			{ Name: "BunnySuccubus2", Fetish: ["Pet"], Value: 35 },
			{ Name: "WitchHat1", Value: 40 },
			{ Name: "PirateBandana1", Value: 15 },
			{ Name: "PoliceWomanHat", Value: 40 },
			{ Name: "HeadTowel1", Value: 15, Hide: ["HairFront", "HairBack"] },
			{ Name: "CollegeDunce", Value: -1 },
			{ Name: "Tiara1", Value: 40 },
			{
				Name: "Bonnet1", Value: 20,
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Lace", AllowColorize: false }
				]
			},
			{ Name: "Bonnet2", Value: 20 },
			{ Name: "Crown1", Value: 20 },
			{ Name: "Crown2", Value: 20 },
			{ Name: "Crown3", Value: 20 },
			{ Name: "Crown4", Value: 20 },
			{ Name: "Crown5", Value: 20 },
			{ Name: "SmallHat1", Value: 30 },
			{ Name: "Veil1", Fetish: ["Lingerie"], Value: 40 },
			{ Name: "Veil2", Fetish: ["Lingerie"], Value: 40 },
			{ Name: "BakerBoyHat", Value: 40, }
		],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "HairAccessory1",
		Priority: 53,
		Default: false,
		Clothing: true,
		Left: 90,
		Top: 0,
		AllowPose: ["Suspension"],
		Asset: [
			{ Name: "Ears1", Fetish: ["Pet"], BodyCosplay: true },
			{ Name: "Ears2", Fetish: ["Pet"], BodyCosplay: true },
			{ Name: "PonyEars1", Fetish: ["Pony"], BodyCosplay: true },
			{ Name: "Ribbons1", Priority: 4, BuyGroup: "Ribbons1" },
			{ Name: "Ribbons2", Priority: 4, Value: -1, BuyGroup: "Ribbons2" },
			{ Name: "Ribbons3", BuyGroup: "Ribbons3" },
			{ Name: "Ribbons4", BuyGroup: "Ribbons4" },
			{ Name: "GiantBow1", Priority: 4, BuyGroup: "GiantBow1" },
			{ Name: "BunnyEars1", Fetish: ["Pet"], Value: 10, BuyGroup: "BunnyEars1", BodyCosplay: true },
			{ Name: "BunnyEars2", Fetish: ["Pet"], Value: 20, BuyGroup: "BunnyEars2", BodyCosplay: true },
			{ Name: "PuppyEars1", Fetish: ["Pet"], Priority: 6, Value: 20, BuyGroup: "PuppyEars1", BodyCosplay: true },
			{ Name: "SuccubusHorns", Fetish: ["Pet"], Value: 15, BuyGroup: "SuccubusHorns", BodyCosplay: true },
			{ Name: "Horns", Fetish: ["Pet"], Value: 20, BuyGroup: "Horns", BodyCosplay: true },
			{ Name: "Horns2", Fetish: ["Pet"], Value: 15, BuyGroup: "Horns2", BodyCosplay: true },
			{ Name: "Horns3", Fetish: ["Pet"], Value: 15, BuyGroup: "Horns3", BodyCosplay: true },
			{ Name: "HairFlower1", Value: 10, BuyGroup: "HairFlower1" },
			{ Name: "FoxEars1", Fetish: ["Pet"], Fetish: ["Pet"], Value: 15, BuyGroup: "FoxEars1", BodyCosplay: true },
			{ Name: "BatWings", Fetish: ["Pet"], Value: 20, BuyGroup: "BatWings", BodyCosplay: true },
			{ Name: "KittenEars1", Fetish: ["Pet"], Value: 20, BuyGroup: "KittenEars1", BodyCosplay: true },
			{ Name: "KittenEars2", Fetish: ["Pet"], Value: 20, BuyGroup: "KittenEars2", BodyCosplay: true },
			{ Name: "WolfEars1", Fetish: ["Pet"], Value: 20, BuyGroup: "WolfEars1", BodyCosplay: true },
			{ Name: "WolfEars2", Fetish: ["Pet"], Value: 20, BuyGroup: "WolfEars2", BodyCosplay: true },
			{ Name: "FoxEars2", Fetish: ["Pet"], Value: 20, BuyGroup: "FoxEars2", BodyCosplay: true },
			{ Name: "FoxEars3", Fetish: ["Pet"], Value: 20, BuyGroup: "FoxEars3", BodyCosplay: true },
			{ Name: "PuppyEars2", Fetish: ["Pet"], Value: 20, BuyGroup: "PuppyEars2", BodyCosplay: true },
			{ Name: "RaccoonEars1", Fetish: ["Pet"], Value: 15, BuyGroup: "RaccoonEars1", BodyCosplay: true },
			{ Name: "WeddingVeil1", Priority: 4, Value: 30, BuyGroup: "WeddingVeil1" },
			{ Name: "HairFeathers1", Value: 10, BuyGroup: "HairFeathers1" },
			{ Name: "MouseEars1", Fetish: ["Pet"], Value: 20, BuyGroup: "MouseEars1", BodyCosplay: true },
			{ Name: "MouseEars2", Fetish: ["Pet"], Value: 20, BuyGroup: "MouseEars2", BodyCosplay: true },
			{ Name: "ElfEars", Value: 20, BuyGroup: "ElfEars", BodyCosplay: true, InheritColor: "BodyUpper" }
		],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "HairAccessory2",
		Priority: 55,
		Default: false,
		Clothing: true,
		Left: 90,
		Top: 0,
		AllowPose: ["Suspension"],
		Asset: [
			{ Name: "Ears1", Fetish: ["Pet"], BodyCosplay: true },
			{ Name: "Ears2", Fetish: ["Pet"], BodyCosplay: true },
			{ Name: "PonyEars1", Fetish: ["Pony"], BodyCosplay: true },
			{ Name: "Ribbons1", Priority: 4, BuyGroup: "Ribbons1" },
			{ Name: "Ribbons2", Priority: 4, Value: -1, BuyGroup: "Ribbons2" },
			{ Name: "Ribbons3", BuyGroup: "Ribbons3" },
			{ Name: "Ribbons4", BuyGroup: "Ribbons4" },
			{ Name: "GiantBow1", Priority: 4, BuyGroup: "GiantBow1" },
			{ Name: "BunnyEars1", Fetish: ["Pet"], Value: -1, BuyGroup: "BunnyEars1", BodyCosplay: true },
			{ Name: "BunnyEars2", Fetish: ["Pet"], Value: -1, BuyGroup: "BunnyEars2", BodyCosplay: true },
			{ Name: "PuppyEars1", Fetish: ["Pet"], Priority: 29, Value: -1, BuyGroup: "PuppyEars1", BodyCosplay: true },
			{ Name: "SuccubusHorns", Fetish: ["Pet"], Value: -1, BuyGroup: "SuccubusHorns", BodyCosplay: true },
			{ Name: "Horns", Fetish: ["Pet"], Value: -1, BuyGroup: "Horns", BodyCosplay: true },
			{ Name: "Horns2", Fetish: ["Pet"], Value: -1, BuyGroup: "Horns2", BodyCosplay: true },
			{ Name: "Horns3", Fetish: ["Pet"], Value: -1, BuyGroup: "Horns3", BodyCosplay: true },
			{ Name: "HairFlower1", Value: -1, BuyGroup: "HairFlower1" },
			{ Name: "FoxEars1", Fetish: ["Pet"], Value: -1, BuyGroup: "FoxEars1", BodyCosplay: true },
			{ Name: "BatWings", Fetish: ["Pet"], Value: -1, BuyGroup: "BatWings", BodyCosplay: true },
			{ Name: "KittenEars1", Fetish: ["Pet"], Value: -1, BuyGroup: "KittenEars1", BodyCosplay: true },
			{ Name: "KittenEars2", Fetish: ["Pet"], Value: -1, BuyGroup: "KittenEars2", BodyCosplay: true },
			{ Name: "WolfEars1", Fetish: ["Pet"], Value: -1, BuyGroup: "WolfEars1", BodyCosplay: true },
			{ Name: "WolfEars2", Fetish: ["Pet"], Value: -1, BuyGroup: "WolfEars2", BodyCosplay: true },
			{ Name: "FoxEars2", Fetish: ["Pet"], Value: -1, BuyGroup: "FoxEars2", BodyCosplay: true },
			{ Name: "FoxEars3", Fetish: ["Pet"], Value: -1, BuyGroup: "FoxEars3", BodyCosplay: true },
			{ Name: "PuppyEars2", Fetish: ["Pet"], Value: -1, BuyGroup: "PuppyEars2", BodyCosplay: true },
			{ Name: "RaccoonEars1", Fetish: ["Pet"], Value: -1, BuyGroup: "RaccoonEars1", BodyCosplay: true },
			{ Name: "WeddingVeil1", Priority: 4, Value: -1, BuyGroup: "WeddingVeil1" },
			{ Name: "HairFeathers1", Value: -1, BuyGroup: "HairFeathers1" },
			{ Name: "MouseEars1", Fetish: ["Pet"], Value: 20, BuyGroup: "MouseEars1", BodyCosplay: true },
			{ Name: "MouseEars2", Fetish: ["Pet"], Value: 20, BuyGroup: "MouseEars2", BodyCosplay: true },
			{ Name: "ElfEars", Value: 20, BuyGroup: "ElfEars", BodyCosplay: true, InheritColor: "BodyUpper" }
		],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Gloves",
		ParentGroup: "BodyUpper",
		ParentColor: "Bra",
		Priority: 28,
		Default: false,
		Clothing: true,
		Underwear: true,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Yoked", "AllFours", "OverTheHead"],
		Asset: [
			"Gloves1", "Gloves2",
			{ Name: "Gloves3", Value: 15, Left: 60, Top: 109 },
			{ Name: "MistressGloves", Fetish: ["Leather"], Value: -1 },
			{ Name: "FingerlessGloves", Value: 20 },
			{
				Name: "GlovesFur", Value: 30,
				Layer: [
					{ Name: "Fabric", AllowColorize: true },
					{ Name: "Fur", AllowColorize: false }
				]
			},
			{ Name: "Catsuit", Fetish: ["Nylon"], Value: -1, BuyGroup: "Catsuit" },
			{ Name: "SeethroughSuit", Fetish: ["Nylon"], Value: -1, BuyGroup: "SeethroughSuit" }
		],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Glasses",
		Priority: 27,
		Default: false,
		Clothing: true,
		Underwear: true,
		Left: 180,
		Top: 125,
		Asset: [
			"Glasses1", "Glasses2", "Glasses3", "Glasses4", "Glasses5", "Glasses6",
			{ Name: "SunGlasses1", Value: 15 },
			{ Name: "SunGlasses2", Value: 15 },
			{ Name: "EyePatch1", Value: 10, Priority: 29 }],
		Color: ["#303030", "#808080", "#e0e0e0", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
	},

	{
		Group: "Mask",
		Priority: 53,
		Default: false,
		Clothing: true,
		Underwear: true,
		Left: 180,
		Top: 125,
		Asset: [
			{ Name: "VenetianMask", Priority: 49, Fetish: ["Lingerie"], HideItem: ["ItemNoseNoseRing"] },
			{ Name: "DominoMask", Priority: 49, Fetish: ["Lingerie"], HideItem: ["ItemNoseNoseRing"] },
			{ Name: "ButterflyMask", Fetish: ["Lingerie"], Priority: 49, Value: 30, HideItem: ["ItemNoseNoseRing"] },
			{ Name: "ShinobiMask", Fetish: ["Nylon"], Value: 30, Left: 199, Top: 88, Priority: 49, HideItem: ["ItemNoseNoseRing"] },
			{ Name: "FoxMask", Fetish: ["Pet"], Priority: 49, Value: 30, Left: 150, Top: 20, HideItem: ["ItemNoseNoseRing"] },
			{ Name: "BunnyMask1", Fetish: ["Pet"], Value: 40, Left: 150, Top: 20, HideItem: ["ItemNoseNoseRing", "HairAccessory1Ears1", "HairAccessory2Ears1", "HairAccessory1PonyEars1", "HairAccessory2PonyEars1", "HairAccessory1FoxEars1", "HairAccessory2FoxEars1", "HairAccessory1FoxEars3", "HairAccessory2FoxEars3", "HairAccessory1RaccoonEars1", "HairAccessory2RaccoonEars1", "HatVeil1", "HatVeil2", "HatCaptainHat1", "HatPoliceWomanHat"], Hide: ["Glasses"] },
			{ Name: "BunnyMask2", Fetish: ["Pet"], Value: 40, Left: 150, Top: 20, HideItem: ["ItemNoseNoseRing", "HairAccessory1Ears1", "HairAccessory2Ears1", "HairAccessory1PonyEars1", "HairAccessory2PonyEars1", "HairAccessory1FoxEars1", "HairAccessory2FoxEars1", "HairAccessory1FoxEars3", "HairAccessory2FoxEars3", "HairAccessory1RaccoonEars1", "HairAccessory2RaccoonEars1", "HatVeil1", "HatVeil2", "HatCaptainHat1", "HatPoliceWomanHat"], Hide: ["Glasses"] },
			{ Name: "BunnyMask3", Fetish: ["Pet"], Value: 40, Left: 150, Top: 20, HideItem: ["ItemNoseNoseRing", "HairAccessory1Ears1", "HairAccessory2Ears1", "HairAccessory1PonyEars1", "HairAccessory2PonyEars1", "HairAccessory1FoxEars1", "HairAccessory2FoxEars1", "HairAccessory1FoxEars3", "HairAccessory2FoxEars3", "HairAccessory1RaccoonEars1", "HairAccessory2RaccoonEars1", "HatVeil1", "HatVeil2", "HatCaptainHat1", "HatPoliceWomanHat"], Hide: ["Glasses"] },
			{ Name: "KittyMask1", Fetish: ["Pet"], Value: 30, Left: 150, Top: 20, HideItem: ["ItemNoseNoseRing", "HatVeil1", "HatVeil2"], Hide: ["Glasses"] },
			{ Name: "KittyMask2", Fetish: ["Pet"], Value: 30, Left: 150, Top: 20, HideItem: ["ItemNoseNoseRing", "HatVeil1", "HatVeil2"], Hide: ["Glasses"] },
			{ Name: "KittyMask3", Fetish: ["Pet"], Value: 25, Left: 140, Top: 50, Hide: ["HairFront", "Glasses", "HairAccessory1", "HairAccessory2"] },
			{ Name: "LaceMask1", Fetish: ["Lingerie"], Value: 25, Left: 150, Top: 20, HideItem: ["ItemNoseNoseRing", "HatVeil1", "HatVeil2"], Hide: ["Glasses"] },
			{ Name: "LaceMask2", Fetish: ["Lingerie"], Value: 25, Left: 150, Top: 20, HideItem: ["ItemNoseNoseRing", "HatVeil1", "HatVeil2"], Hide: ["Glasses"] }],
		Color: ["Default", "#303030", "#808080", "#e0e0e0", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
	},

	{
		Group: "TailStraps",
		Priority: 4,
		Default: false,
		Clothing: true,
		Underwear: true,
		BodyCosplay: true,
		Left: 0,
		Top: 150,
		AllowPose: ["AllFours"],
		Asset: [
			{ Name: "TailStrap", Fetish: ["Pet"], Value: 30 },
			{ Name: "HorseTailStrap", Fetish: ["Pony"], Value: 20 },
			{ Name: "HorseTailStrap1", Fetish: ["Pony"], Value: 30 },
			{ Name: "FoxTailsStrap", Fetish: ["Pet"], Priority: 2, Value: 50 },
			{ Name: "PuppyTailStrap", Fetish: ["Pet"], Value: 15 },
			{ Name: "SuccubusTailStrap", Fetish: ["Pet"], Value: 10 },
			{ Name: "SuccubusHeartTailStrap", Fetish: ["Pet"], Value: 15 },
			{ Name: "RaccoonStrap", Fetish: ["Pet"], Value: 25 },
			{ Name: "RaccoonTailStrap", Fetish: ["Pet"], Priority: 2, Value: 35 },
			{ Name: "PuppyTailStrap1", Fetish: ["Pet"], Value: 20 },
			{ Name: "KittenTailStrap1", Fetish: ["Pet"], Value: 20 },
			{ Name: "KittenTailStrap2", Fetish: ["Pet"], Value: 20 },
			{ Name: "FoxTailStrap1", Fetish: ["Pet"], Value: 20 },
			{ Name: "FoxTailStrap2", Fetish: ["Pet"], Value: 20 },
			{ Name: "WolfTailStrap1", Fetish: ["Pet"], Value: 20 },
			{ Name: "WolfTailStrap2", Fetish: ["Pet"], Value: 20 },
			{ Name: "WolfTailStrap3", Fetish: ["Pet"], Value: 20 },
			{ Name: "DemonPlug", Fetish: ["Pet"], Value: 30 },
			{ Name: "MouseTailStrap1", Fetish: ["Pet"], Value: 20 },
			{ Name: "MouseTailStrap2", Fetish: ["Pet"], Value: 20 }
		],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"]
	},

	{
		Group: "Wings",
		ParentColor: "Bra",
		Priority: 3,
		Default: false,
		Clothing: true,
		Underwear: true,
		BodyCosplay: true,
		Asset: [
			{ Name: "SuccubusFeather", Value: 35 },
			{ Name: "SuccubusWings", Value: 35 },
			{ Name: "AngelFeather", Value: 50 },
			{ Name: "DevilWings", Value: 25 },
			{ Name: "FallenAngelWings", Value: 50 },
			{ Name: "AngelWings", Value: 50 },
			{ Name: "BatWings", Value: 20 },
			{ Name: "FairyWings", Value: 50 },
		],
		Color: ["Default"]
	},

	{
		Group: "Height",
		AllowNone: false,
		AllowColorize: false,
		Asset: [
			{ Name: "H0950", Visible: false, Zoom: 0.950 },
			{ Name: "H0960", Visible: false, Zoom: 0.960 },
			{ Name: "H0970", Visible: false, Zoom: 0.970 },
			{ Name: "H0980", Visible: false, Zoom: 0.980 },
			{ Name: "H0990", Visible: false, Zoom: 0.990 },
			{ Name: "H1000", Visible: false, Zoom: 1.000 },
			{ Name: "H0900", Visible: false, Zoom: 0.900 },
			{ Name: "H0910", Visible: false, Zoom: 0.910 },
			{ Name: "H0920", Visible: false, Zoom: 0.920 },
			{ Name: "H0930", Visible: false, Zoom: 0.930 },
			{ Name: "H0940", Visible: false, Zoom: 0.940 }
		]
	},

	{
		Group: "BodyUpper",
		Priority: 7,
		AllowNone: false,
		AllowColorize: false,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "StraitDressOpen", "Yoked", "Hogtied", "AllFours", "OverTheHead"],
		Asset: ["Small", "Normal", "Large", "XLarge"],
		Color: ["White", "Asian", "Black"]
	},

	{
		Group: "BodyLower",
		ParentSize: "BodyUpper",
		ParentColor: "BodyUpper",
		Priority: 9,
		Top: 462,
		AllowNone: false,
		AllowColorize: false,
		AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread", "Spread"],
		Asset: ["Small", "Normal", "Large", "XLarge"],
		Color: ["Default", "White", "Asian", "Black"],
		InheritColor: "BodyUpper"
	},

	{
		Group: "HairBack",
		Priority: 5,
		Left: 50,
		Top: 0,
		AllowNone: false,
		AllowPose: ["Suspension", "Hogtied", "AllFours"],
		Asset: ["HairNone", "HairBack1", "HairBack2", "HairBack4", "HairBack10", "HairBack14", "HairBack15", "HairBack16", "HairBack17", "HairBack18", "HairBack19", "HairBack20", "HairBack5", "HairBack8", "HairBack11", "HairBack6", "HairBack21", "HairBack22",
			{ Name: "HairBack23", Priority: 39 },
			{ Name: "HairBack24", Priority: 39 }
		],
		Color: ["#6a3628", "#202020", "#dcc787", "#6c2132", "#999999", "#dddddd", "#e781b1", "#81e7b1", "#81b1e7", "#eeee99", "#ee9999", "#ee99ee"]
	},

	{
		Group: "HairFront",
		ParentColor: "HairBack",
		Priority: 52,
		Left: 150,
		Top: 50,
		AllowNone: false,
		Asset: ["HairFront1", "HairFront1b", "HairFront2", "HairFront2b", "HairFront3", "HairFront3b", "HairFront4", "HairFront4b", "HairFront5", "HairFront5b", "HairFront6", "HairFront6b", "HairFront7", "HairFront7b", "HairFront8", "HairFront8b", "HairFront9", "HairFront9b", "HairFront10", "HairFront10b", "HairFront11", "HairFront11b", "HairFront12", "HairFront12b", "HairFront13", "HairFront13b", "HairFront14", "HairFront14b"],
		Color: ["#6a3628", "#202020", "#dcc787", "#6c2132", "#999999", "#dddddd", "#e781b1", "#81e7b1", "#81b1e7", "#eeee99", "#ee9999", "#ee99ee"]
	},

	{
		Group: "Eyes",
		Priority: 9,
		Left: 200,
		Top: 145,
		Blink: true,
		FullAlpha: false,
		AllowNone: false,
		AllowExpression: ["Closed", "Dazed", "Shy", "Sad", "Horny", "Lewd", "VeryLewd", "Heart", "HeartPink", "LewdHeart", "LewdHeartPink", "Dizzy", "Daydream", "Angry", "Surprised", "Scared"],
		MirrorGroup: "Eyes2",
		Asset: ["Eyes1", "Eyes2", "Eyes3", "Eyes4", "Eyes5", "Eyes6", "Eyes7", "Eyes8", "Eyes9", "Eyes10", "Eyes11", "Eyes12"],
		Color: ["Default", "#6a3628", "#5e481e", "#666666", "#555588", "#558855", "#885555", "#202020", "#aa3333", "#33aa33", "#3333aa", "#aaaa33", "#33aaaa", "#aa33aa"]
	},

	{
		Group: "Eyes2",
		Priority: 9,
		Left: 250,
		Top: 145,
		Blink: true,
		FullAlpha: false,
		AllowNone: false,
		AllowExpression: ["Closed", "Dazed", "Shy", "Sad", "Horny", "Lewd", "VeryLewd", "Heart", "HeartPink", "LewdHeart", "LewdHeartPink", "Dizzy", "Daydream", "Angry", "Surprised", "Scared"],
		MirrorGroup: "Eyes",
		Asset: [{ Name: "Eyes1", ParentItem: "Eyes1" }, { Name: "Eyes2", ParentItem: "Eyes2" }, { Name: "Eyes3", ParentItem: "Eyes3" }, { Name: "Eyes4", ParentItem: "Eyes4" }, { Name: "Eyes5", ParentItem: "Eyes5" }, { Name: "Eyes6", ParentItem: "Eyes6" }, { Name: "Eyes7", ParentItem: "Eyes7" }, { Name: "Eyes8", ParentItem: "Eyes8" }, { Name: "Eyes9", ParentItem: "Eyes9" }, { Name: "Eyes10", ParentItem: "Eyes10" }, { Name: "Eyes11", ParentItem: "Eyes11" }, { Name: "Eyes12", ParentItem: "Eyes12" }],
		Color: ["Default", "#6a3628", "#5e481e", "#666666", "#555588", "#558855", "#885555", "#202020", "#aa3333", "#33aa33", "#3333aa", "#aaaa33", "#33aaaa", "#aa33aa"]
	},

	{
		Group: "Mouth",
		Priority: 10,
		Left: 235,
		Top: 180,
		AllowNone: false,
		AllowExpression: ["Frown", "Sad", "Pained", "Angry", "HalfOpen", "Open", "Ahegao", "Moan", "TonguePinch", "LipBite", "Happy", "Devious", "Laughing", "Grin", "Smirk"],
		Asset: [
			{
				Name: "Regular",
				Layer: [
					{ Name: "Lips", AllowColorize: true },
					{ Name: "Inner", AllowColorize: false }
				]
			},
			{ Name: "Discreet" }
		],
		Color: ["Default", "#803d26", "#aa5555", "#cc3333", "#55aa55", "#5555aa", "#55aaaa", "#aa55aa", "#aaaa55"]
	},

	{
		Group: "Nipples",
		ParentGroup: "BodyUpper",
		Priority: 11,
		Default: false,
		Left: 175,
		Top: 285,
		AllowNone: false,
		Asset: ["Nipples1", "Nipples2", "Nipples3"],
		Color: ["Default", "#a6665b", "#803d26", "#d68777", "#9b4a2e", "#bb6655"]
	},

	{
		Group: "Pussy",
		Priority: 12,
		Left: 225,
		Top: 500,
		FullAlpha: false,
		AllowNone: false,
		Asset: ["PussyLight1", "PussyLight2", "PussyLight3", "PussyDark1", "PussyDark2", "PussyDark3"],
		Color: ["Default", "#6a3628", "#443330", "#222222"]
	},

	{
		Group: "Head",
		ParentColor: "BodyUpper",
		Priority: 7,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		Asset: ["Default"],
		InheritColor: "BodyUpper"
	},

	{
		Group: "Hands",
		ParentColor: "BodyUpper",
		Priority: 27,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "AllFours"],
		Asset: ["Default"],
		InheritColor: "BodyUpper"
	},

	// Facial Expression specific
	{
		Group: "Eyebrows",
		Priority: 9,
		Left: 200,
		Top: 120,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["Raised", "Lowered", "OneRaised", "Harsh", "Angry", "Soft"],
		Asset: ["Eyebrows1"]
	},

	{
		Group: "Blush",
		Priority: 8,
		Left: 190,
		Top: 100,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["Low", "Medium", "High", "VeryHigh", "Extreme", "ShortBreath"],
		Asset: ["Blush"]
	},

	{
		Group: "Fluids",
		Priority: 11,
		Left: 200,
		Top: 145,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["DroolLow", "DroolMedium", "DroolHigh", "DroolSides", "DroolMessy", "DroolTearsLow", "DroolTearsMedium", "DroolTearsHigh", "DroolTearsMessy", "DroolTearsSides", "TearsHigh", "TearsMedium", "TearsLow"],
		Asset: ["Fluids"]
	},

	{
		Group: "Emoticon",
		Priority: 60,
		Left: 250,
		Top: 0,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["Afk", "Sleep", "Hearts", "Tear", "Hearing", "Confusion", "Exclamation", "Annoyed", "Read", "RaisedHand", "Spectator", "ThumbsDown", "ThumbsUp", "Wardrobe"],
		Asset: ["Emoticon"]
	},

	// Item specific
	{
		Group: "ItemFeet",
		ParentGroup: "BodyLower",
		Category: "Item",
		Priority: 27,
		Default: false,
		IsRestraint: true,
		Left: 125,
		Top: 725,
		Effect: ["Freeze", "Prone"],
		Zone: [[100, 750, 300, 120]],
		Activity: ["Bite", "Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "Grope", "SpankItem", "TickleItem", "RubItem", "RollItem", "MasturbateItem", "PourItem", "ShockItem"],
		Asset: [
			{ Name: "NylonRope", Fetish: ["Rope", "Nylon"], Value: 30, Time: 15, DefaultColor: "#909090", BuyGroup: "NylonRope", SetPose: ["LegsClosed"], Audio: "RopeLong" },
			{ Name: "HempRope", Fetish: ["Rope"], Value: 60, Difficulty: 3, Time: 15, DefaultColor: "#956B1C", BuyGroup: "HempRope", HideItem: ["ItemDevicesTeddyBear"], SetPose: ["LegsClosed"], AllowType: ["Mermaid", "Suspension", "FullBinding", "Diamond", "Link"], Audio: "RopeLong", Extended: true },
			{ Name: "LeatherBelt", Fetish: ["Leather"], Value: 25, Time: 10, RemoveTime: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "SturdyLeatherBelts", Fetish: ["Leather"], Value: 50, Time: 10, RemoveTime: 5, AllowLock: true, BuyGroup: "SturdyLeatherBelts", SetPose: ["LegsClosed"], AllowType: ["Two", "Three"], Extended: true },
			{ Name: "Irish8Cuffs", Fetish: ["Metal"], Value: 25, Time: 10, RemoveTime: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "DuctTape", Fetish: ["Tape"], Value: 50, Time: 15, RemoveTime: 10, BuyGroup: "DuctTape", HideItem: ["ItemBootsThighHighLatexHeels"], SetPose: ["LegsClosed"], AllowType: ["HalfFeet", "MostFeet", "CompleteFeet"], Extended: true },
			{ Name: "LeatherAnkleCuffs", Fetish: ["Leather"], Priority: 24, Value: 30, Difficulty: 2, Time: 10, Random: false, AllowLock: true, AllowPose: ["LegsClosed", "Spread"], Effect: ["CuffedFeet"], AllowEffect: ["Freeze", "Prone"], Extended: true },
			{
				Name: "OrnateAnkleCuffs", Fetish: ["Metal"], Priority: 24, Value: 90, Difficulty: 3, Time: 10, Random: false, AllowLock: true, AllowPose: ["LegsClosed", "Spread"], Effect: ["CuffedFeet"], AllowEffect: ["Freeze", "Prone"], Extended: true,
				Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "SpreaderMetal", Fetish: ["Metal"], Value: 50, Difficulty: 3, Time: 10, Random: false, AllowLock: true, Prerequisite: ["LegsOpen", "NotKneeling"], SetPose: ["LegsOpen"], Effect: ["Freeze", "Prone"], Block: ["ItemLegs"], RemoveAtLogin: true },
			{ Name: "BallChain", Fetish: ["Metal"], Value: 40, Difficulty: 5, Time: 10, RemoveTime: 10, Random: false, AllowLock: true, AllowPose: ["LegsClosed"], Effect: ["Slow"] },
			{ Name: "AnkleShackles", Fetish: ["Metal"], Value: 30, Difficulty: 6, Time: 10, RemoveTime: 5, Random: false, AllowLock: true, AllowPose: ["LegsClosed"], Effect: ["Prone","Slow"] },
			{ Name: "Zipties", Value: 20, Difficulty: 6, Time: 5, RemoveTime: 6, BuyGroup: "Zipties", SetPose: ["LegsClosed"], Extended: true, AllowType: ["ZipFeetLight", "ZipFeetMedium", "ZipFeetFull"] },
			{ Name: "Chains", Fetish: ["Metal"], Value: 90, Difficulty: 5, Time: 20, AllowLock: true, BuyGroup: "Chains", SetPose: ["LegsClosed"], AllowType: ["Strict", "Suspension"], Extended: true },
			{
				Name: "SpreaderDildoBar", Fetish: ["Metal", "Leather"], Priority: 25, Value: 60, Difficulty: 5, Time: 10, Random: false, AllowLock: true, Top: 400, Prerequisite: ["AccessVulva", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste"], SetPose: ["LegsOpen"], Effect: ["FillVulva", "Freeze", "Prone"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva"],
				Layer: [
					{ Name: "DildoBar", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				], RemoveAtLogin: true
			},
			{
				Name: "SpreaderVibratingDildoBar", Fetish: ["Metal", "Leather"], Priority: 25, Value: 70, Difficulty: 5, Time: 10, Random: false, AllowLock: true, Top: 400, Prerequisite: ["AccessVulva", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste"], SetPose: ["LegsOpen"], Effect: ["FillVulva", "Egged", "Freeze", "Prone"], AllowEffect: ["Egged", "Vibrating"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
				Layer: [
					{ Name: "DildoBar", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				], RemoveAtLogin: true, ArousalZone: "ItemVulva"
			},
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemLegs",
		ParentGroup: "BodyLower",
		Category: "Item",
		Priority: 25,
		Default: false,
		IsRestraint: true,
		Left: 125,
		Top: 400,
		AllowPose: ["Kneel"],
		Effect: ["Prone", "KneelFreeze"],
		Zone: [[100, 580, 300, 170]],
		Activity: ["Bite", "Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "Grope", "SpankItem", "TickleItem", "RubItem", "RollItem", "MasturbateItem", "PourItem", "ShockItem"],
		Asset: [
			{ Name: "NylonRope", Fetish: ["Rope", "Nylon"], Value: 30, Time: 10, DefaultColor: "#909090", BuyGroup: "NylonRope", SetPose: ["LegsClosed"], Audio: "RopeLong" },
			{ Name: "HempRope", Fetish: ["Rope"], Value: 60, Difficulty: 3, Time: 10, RemoveTime: 15, DefaultColor: "#956B1C", BuyGroup: "HempRope", SetPose: ["LegsClosed"], AllowBlock: ["ItemFeet"], AllowEffect: ["ForceKneel"], AllowType: ["Mermaid", "FullBinding", "Frogtie", "Link", "Crossed"], Audio: "RopeLong", Extended: true },
			{ Name: "LeatherBelt", Fetish: ["Leather"], Value: 25, Time: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "SturdyLeatherBelts", Fetish: ["Leather"], Value: 50, Time: 5, AllowLock: true, BuyGroup: "SturdyLeatherBelts", SetPose: ["LegsClosed"], AllowType: ["Two"], Extended: true },
			{ Name: "DuctTape", Fetish: ["Tape"], Value: 50, Time: 15, RemoveTime: 10, BuyGroup: "DuctTape", HideItem: ["ItemBootsThighHighLatexHeels", "ShoesThighHighLatexHeels"], SetPose: ["LegsClosed"], AllowType: ["HalfLegs", "MostLegs", "CompleteLegs"], Extended: true },
			{ Name: "LeatherLegCuffs", Fetish: ["Leather"], Priority: 24, Value: 30, Difficulty: 2, Time: 10, Random: false, AllowLock: true, AllowPose: ["LegsClosed"], Effect: [], AllowEffect: ["Prone", "KneelFreeze"], AllowType: ["Closed"], Extended: true },
			{
				Name: "OrnateLegCuffs", Fetish: ["Metal"], Priority: 24, Value: 90, Difficulty: 3, Time: 10, Random: false, AllowLock: true, AllowPose: ["LegsClosed"], Effect: [], AllowEffect: ["Prone", "KneelFreeze"], AllowType: ["Closed"], Extended: true,
				Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{
				Name: "LegBinder", Fetish: ["Latex"], Value: 80, Difficulty: 15, Time: 30, RemoveTime: 20, AllowLock: true, DefaultColor: "#222222", Prerequisite: ["NotSuspended", "NotHogtied"], Hide: ["Shoes", "Socks", "ClothLower"], HideItem: ["ItemFeetOrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetLeatherAnkleCuffs", "ItemBootsThighHighLatexHeels"], SetPose: ["LegsClosed"], Effect: ["Prone"], Block: ["ItemFeet"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false },
				]
			},
			{
				Name: "HobbleSkirt", Fetish: ["Latex"], Value: 125, Difficulty: 15, Time: 30, RemoveTime: 20, AllowLock: true, DefaultColor: "#222222", Prerequisite: ["NotSuspended", "NotHogtied"], Hide: ["Shoes", "Socks", "ClothLower"], HideItem: ["ItemFeetOrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetLeatherAnkleCuffs", "ItemBootsThighHighLatexHeels"], SetPose: ["LegsClosed"], Effect: ["Prone"], Block: ["ItemPelvis", "ItemFeet", "ItemVulva", "ItemVulvaPiercings", "ItemButt"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{ Name: "SeamlessLegBinder", Value: 80, Difficulty: 15, Time: 30, RemoveTime: 20, AllowLock: true, DefaultColor: "#222222", Prerequisite: ["NotSuspended", "NotHogtied"], Hide: ["Shoes"], HideItem: ["ItemFeetOrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetLeatherAnkleCuffs", "ItemBootsThighHighLatexHeels", "ClothLowerPajama1", "SocksSocks6", "SocksSocksFur"], SetPose: ["LegsClosed"], Effect: ["Prone"], Block: ["ItemFeet"] },
			{ Name: "SeamlessHobbleSkirt", Value: 125, Difficulty: 15, Time: 30, RemoveTime: 20, AllowLock: true, DefaultColor: "#222222", Prerequisite: ["NotSuspended", "NotHogtied"], Hide: ["Shoes"], HideItem: ["ItemFeetOrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetLeatherAnkleCuffs", "ItemBootsThighHighLatexHeels", "ClothLowerPajama1", "ClothLowerShorts1", "ClothLowerJeans1", "ClothLowerJeans2", "ClothLowerLatexPants1", "ClothLowerMistressBottom", "ClothLowerPencilSkirt", "SocksSocks6", "SocksSocksFur"], SetPose: ["LegsClosed"], Effect: ["Prone"], Block: ["ItemPelvis", "ItemFeet", "ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{
				Name: "WoodenHorse", Priority: 34, Value: 200, Difficulty: 2, Time: 10, Random: false, Prerequisite: ["NotKneeling", "LegsOpen", "NotSuspended", "NotHogtied", "NotShackled"], Hide: ["Shoes", "Socks", "ItemBoots"], HideItem: ["ClothLowerPajama1", "ClothLowerShorts1", "ClothLowerJeans1", "ClothLowerJeans2", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerGown2Skirt", "ClothLowerLatexPants1", "ItemDevicesTeddyBear", "SuitLowerReverseBunnySuit"], SetPose: ["Horse"], Effect: ["Prone", "Freeze", "Mounted"], Alpha: [[160, 720, 200, 240]], Block: ["ItemFeet", "ItemBoots"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Closed", Group: "Eyes", Timer: 5 }],
				Layer: [
					{ Name: "Frame", AllowColorize: true },
					{ Name: "Wood", AllowColorize: false }
				]
			},
			{ Name: "Zipties", Value: 20, Difficulty: 6, Time: 5, RemoveTime: 6, BuyGroup: "Zipties", SetPose: ["LegsClosed"], Extended: true, AllowType: ["ZipLegMedium", "ZipLegFull", "ZipFrogtie"] },
			{ Name: "Chains", Fetish: ["Metal"], Value: 90, Difficulty: 5, Time: 20, RemoveTime: 15, AllowLock: true, BuyGroup: "Chains", SetPose: ["LegsClosed"], AllowType: ["Strict"], Extended: true },
			{ Name: "FrogtieStraps", Fetish: ["Leather"], Value: 25, Time: 5, Random: false, AllowLock: true, Prerequisite: ["NotSuspended", "CanKneel"], SetPose: ["Kneel"], Effect: ["ForceKneel"] },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemVulva",
		Category: "Item",
		Priority: 15,
		Default: false,
		Left: 125,
		Top: 400,
		AllowPose: ["Kneel"],
		Zone: [[100, 500, 100, 80]],
		Activity: ["MasturbateHand", "MasturbateFist", "MasturbateFoot", "MasturbateTongue", "Caress", "Slap", "Kiss", "Lick", "Nibble", "SpankItem", "TickleItem", "RubItem", "ShockItem", "MasturbateItem", "PenetrateSlow", "PenetrateFast"],
		Asset: [
			{ Name: "VibratingEgg", Value: 25, Time: 5, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "VibratingWand", Value: 60, Visible: false, Wear: false, Activity: "MasturbateItem", Bonus: [{ Factor: 3, Type: "KidnapManipulation" }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "VibratorRemote", Value: 50, Visible: false, Wear: false, BuyGroup: "VibratorRemote", Prerequisite: ["RemotesAllowed"], Effect: ["Remote"] },
			{ Name: "VibratingLatexPanties", Fetish: ["Latex"], Value: 50, Time: 10, AllowLock: true, DefaultColor: "#60A0AF", Prerequisite: ["AccessVulva", "CannotHaveWand"], Effect: ["Egged", "Chaste"], AllowEffect: ["Egged", "Vibrating"], Block: ["ItemButt"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{
				Name: "WandBelt", Priority: 24, Value: 80, Time: 15, AllowLock: true, DefaultColor: "#BBAAAA", Prerequisite: ["CannotHaveWand"], HideItem: ["ClothLowerPajama1", "ClothLowerMistressBottom"], Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"], Block: ["ItemPelvis"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
				Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Wand", AllowColorize: false }
				]
			},
			{
				Name: "PenisDildo", Priority: 11, Value: 20, Time: 10, BuyGroup: "PenisDildo", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["FillVulva"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
				Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{
				Name: "ShockDildo", Fetish: ["Masochism"], Priority: 11, Value: 70, Time: 10, Extended: true, AlwaysExtend: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["FillVulva"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], Activity: "ShockItem",
				Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{
				Name: "VibratingDildo", Priority: 11, Value: 60, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged", "FillVulva"], AllowEffect: ["Egged", "Vibrating", "FillVulva"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
				Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{
				Name: "InflatableVibeDildo", Priority: 11, Value: 100, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged", "FillVulva"], AllowEffect: ["Egged", "Vibrating", "FillVulva"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
				Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{
				Name: "ClitoralStimulator", Priority: 11, Value: 70, Time: 10, DefaultColor: "#8a00d1", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
				Layer: [
					{ Name: "Stimulator", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{ Name: "ClitSuctionCup", Priority: 11, Value: 25, Time: 10, Prerequisite: "AccessVulva", Effect: [], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], Extended: true },
			{ Name: "TapeStrips", Fetish: ["Tape"], Value: 10, Time: 5, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "BenWaBalls", Fetish: ["Metal"], Value: 30, Time: 5, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "HeavyWeightClamp", Fetish: ["Metal", "Masochism"], Value: 30, Time: 5, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "FullLatexSuitWand", Fetish: ["Latex"], Priority: 34, Value: -1, Difficulty: 12, Time: 5, IsRestraint: true, AllowLock: true, Effect: ["Egged", "Block", "Prone"], AllowEffect: ["Egged", "Vibrating"], Block: ["ItemVulvaPiercings"] },
			{
				Name: "ClitAndDildoVibratorbelt", Fetish: ["Leather"], Priority: 11, Value: 100, Time: 10, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Hide: ["Panties"], Effect: ["Egged", "FillVulva"], AllowEffect: ["Egged", "Vibrating", "FillVulva"], Block: ["ItemPelvis"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
				Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Crotch", AllowColorize: false }
				]
			},
			{
				Name: "HempRopeBelt", Fetish: ["Rope"], Value: 60, Time: 24, DefaultColor: "#956B1C", BuyGroup: "HempRope", Prerequisite: ["CannotHaveWand"], HideItem: ["ClothLowerPajama1", "ClothLowerMistressBottom"], Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"], Block: ["ItemPelvis"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
				Layer: [
					{ Name: "Rope", AllowColorize: true },
					{ Name: "Wand", AllowColorize: false }
				]
			},
			{
				Name: "WiredEgg", ParentGroup: "BodyLower", Value: 30, Time: 5, Prerequisite: "AccessVulva", AllowPose: ["LegsClosed"], Effect: ["Egged"],
				Layer: [
					{ Name: "Remote", AllowColorize: true },
					{ Name: "Strap", AllowColorize: false }
				]
			},
			{ Name: "LoversVibrator", Value: 75, Time: 5, LoverOnly: true, DefaultColor: "#790c0c", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating", "Edged"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowRemoveExclusive: true, CharacterRestricted: true},
			{ Name: "LoversVibratorRemote", Value: 75, Wear: false, LoverOnly: true, BuyGroup: "LoversVibratorRemote", Prerequisite: ["RemotesAllowed"], Effect: ["Remote"] },
			{ Name: "DoubleEndDildo", Value: 15, Time: 10, Effect: ["FillVulva"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 20 }], AllowActivity: ["Penetrate"] },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemVulvaPiercings",
		Category: "Item",
		Priority: 13,
		Default: false,
		Left: 125,
		Top: 400,
		AllowPose: ["Kneel"],
		Zone: [[200, 500, 100, 80]],
		Asset: [
			{ Name: "StraightClitPiercing", Fetish: ["Metal"], Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "RoundClitPiercing", Fetish: ["Metal"], Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "WeightedClitPiercing", Fetish: ["Metal", "Masochism"], Value: 30, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "BarbellClitPiercing", Fetish: ["Metal"], Value: 20, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChastityClitPiercing", Fetish: ["Metal"], Value: 50, Difficulty: 50, Time: 20, RemoveTime: 20, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"], Effect: ["Chaste"], Block: ["ItemVulva"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChastityClitShield", Fetish: ["Metal"], Value: 70, Difficulty: 50, Time: 30, RemoveTime: 30, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"], Effect: ["Chaste"], Block: ["ItemVulva"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "HighSecurityVulvaShield", Fetish: ["Metal"], Value: 100, Difficulty: 99, Time: 60, RemoveTime: 200, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"], Effect: ["Chaste"], Block: ["ItemVulva"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "JewelClitPiercing", Fetish: ["Metal"], Value: 20, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "AdornedClitPiercing", Fetish: ["Metal"], Value: 20, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{
				Name: "VibeHeartClitPiercing", Value: 35, Difficulty: 10, Time: 5, AllowLock: true, BuyGroup: "VibeHeart", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], ArousalZone: "ItemVulva",
				Layer: [
					{ Name: "Heart", AllowColorize: true },
					{ Name: "Ring", AllowColorize: false }
				]
			},
			{ Name: "BellClitPiercing", Fetish: ["Metal"], Value: 30, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "TapedClitEgg", Fetish: ["Tape"], Value: 25, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"], ArousalZone: "ItemVulva", ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] }
		],
		Color: ["Default"]
	},

	{
		Group: "ItemButt",
		Category: "Item",
		Priority: 4,
		Default: false,
		Left: 0,
		Top: 0,
		AllowPose: ["AllFours"],
		Effect: ["IsPlugged"],
		Zone: [[300, 500, 100, 80]],
		Activity: ["Bite", "Kiss", "MasturbateHand", "MasturbateFist", "MasturbateTongue", "Spank", "Caress", "Grope", "SpankItem", "TickleItem", "RubItem", "RollItem", "MasturbateItem", "PourItem", "ShockItem", "PenetrateSlow", "PenetrateFast"],
		Asset: [
			{ Name: "BlackButtPlug", Value: 15, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "PenisPlug", Value: 20, Time: 10, Visible: false, BuyGroup: "PenisDildo", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "TailButtPlug", Fetish: ["Pet"], Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HorsetailPlug", Fetish: ["Pony"], Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HorsetailPlug1", Fetish: ["Pony"], Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "PuppyTailPlug", Fetish: ["Pet"], Value: 25, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "PuppyTailPlug1", Fetish: ["Pet"], Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "SuccubusButtPlug", Fetish: ["Pet"], Value: 15, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "SuccubusHeartButtPlug", Fetish: ["Pet"], Value: 25, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "FoxTails", Fetish: ["Pet"], Priority: 2, Value: 60, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "RaccoonButtPlug", Fetish: ["Pet"], Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "RaccoonTailPlug", Fetish: ["Pet"], Priority: 2, Value: 50, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "AnalBeads", Value: 20, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "AnalBeads2", Fetish: ["Metal"],  Value: 70, Time: 14, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowType: ["Base", "_2in", "_3in", "_4in", "_5in"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], Extended: true, Activity: "MasturbateItem" },
			{ Name: "ButtPump", Value: 35, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], Extended: true },
			{ Name: "VibratingButtplug", Value: 60, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["IsPlugged", "Egged"], AllowEffect: ["IsPlugged", "Egged", "Vibrating"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }] },
			{ Name: "InflVibeButtPlug", Value: 90, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["IsPlugged", "Egged"], AllowEffect: ["IsPlugged", "Egged", "Vibrating"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }] },
			{ Name: "AnalHook", Fetish: ["Metal"], Value: 20, Time: 10, IsRestraint: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowEffect: ["IsPlugged", "Freeze", "Egged"], AllowType: ["Base", "Chain", "Hair"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], Extended: true },
			{ Name: "ButtPlugLock", Fetish: ["Metal"], Value: 75, Difficulty: 50, Time: 30, RemoveTime: 50, IsRestraint: true, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowEffect: ["IsPlugged", "Tethered", "Freeze", "ForceKneel", "IsChained"], AllowType: ["Base", "ChainShort", "ChainLong"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 10 }, { Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], Extended: true },
			{ Name: "KittenTail1", Fetish: ["Pet"], Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "KittenTail2", Fetish: ["Pet"], Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "FoxTail1", Fetish: ["Pet"], Value: 50, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "FoxTail2", Fetish: ["Pet"], Value: 50, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "WolfTail1", Fetish: ["Pet"], Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "WolfTail2", Fetish: ["Pet"], Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "WolfTail3", Fetish: ["Pet"], Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "DemonPlug", Fetish: ["Pet"], Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "MouseTail1", Fetish: ["Pet"], Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "MouseTail2", Fetish: ["Pet"], Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "VibratingDildoPlug", Value: 60, Time: 10, Visible: false, BuyGroup: "VibratingDildo", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["IsPlugged", "Egged"] },
			{ Name: "BunnyTailPlug1", Fetish: ["Pet"], Value: 1, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "BunnyTailPlug2", Fetish: ["Pet"], Value: 1, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "BunnyTailVibePlug", Fetish: ["Pet"], Effect: ["IsPlugged", "Egged"], Value: 75, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Time: 10, ExpressionTrigger: [{ Group: "Blush", Name: "Low", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"], Visible: false },
			{ Name: "EggVibePlugXXL", Effect: ["IsPlugged", "Egged"], Value: 90, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Time: 10, ExpressionTrigger: [{ Group: "Blush", Name: "High", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"], Visible: false },
			{ Name: "ShockPlug", Fetish: ["Masochism"], Value: 60, Time: 10, Visible: false, Extended: true, AlwaysExtend: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], Activity: "ShockItem" },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemPelvis",
		ParentGroup: "BodyLower",
		Category: "Item",
		Priority: 16,
		Default: false,
		Left: 125,
		Top: 375,
		Zone: [[100, 420, 300, 80]],
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "Pinch", "MassageHands", "Grope", "SpankItem", "TickleItem", "RubItem", "RollItem", "MasturbateItem", "PourItem", "ShockItem"],
		Asset: [
			{ Name: "StraponPanties", Fetish: ["Latex"], Value: -1, Time: 15, DefaultColor: "#505050", Prerequisite: "AccessVulva", AllowActivity: ["Penetrate"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"] },
			{ Name: "LeatherChastityBelt", Fetish: ["Leather"], Value: 30, Difficulty: 8, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "SleekLeatherChastityBelt", Fetish: ["Leather"], Value: 45, Difficulty: 11, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "StuddedChastityBelt", Fetish: ["Leather", "Metal"], Value: 60, Difficulty: 14, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], AllowBlock: ["ItemButt"], AllowType: ["ClosedBack"], Block: ["ItemVulva", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true },
			{ Name: "MetalChastityBelt", Fetish: ["Metal"], Value: 100, Difficulty: 20, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], AllowBlock: ["ItemButt"], AllowType: ["ClosedBack"], Block: ["ItemVulva", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true },
			{ Name: "PolishedChastityBelt", Fetish: ["Metal"], Value: 150, Difficulty: 30, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], AllowBlock: ["ItemButt"], AllowType: ["ClosedBack"], Block: ["ItemVulva", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true },
			{
				Name: "OrnateChastityBelt", Fetish: ["Metal"], Value: 200, Difficulty: 50, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], AllowBlock: ["ItemButt"], AllowType: ["ClosedBack"], Block: ["ItemVulva", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true,
				Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "SteelChastityPanties", Fetish: ["Metal"], Value: 150, Difficulty: 50, Time: 50, RemoveTime: 60, AllowLock: true, Prerequisite: "AccessVulva", Hide: ["ItemVulva", "ItemVulvaPiercings"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "HarnessPanties1", Fetish: ["Leather"], Priority: 19, Value: 35, Difficulty: 8, Time: 10, RemoveTime: 15, AllowLock: true, BuyGroup: "HarnessPanties1", Prerequisite: "AccessVulva", AllowPose: ["LegsClosed", "Kneel"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "HarnessPanties2", Fetish: ["Leather"], Priority: 19, Value: 40, Difficulty: 9, Time: 10, RemoveTime: 15, AllowLock: true, Left: 85, Top: 395, BuyGroup: "HarnessPanties2", Prerequisite: "AccessVulva", AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread", "Spread"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "LeatherStrapPanties1", Fetish: ["Leather"], Value: 20, Difficulty: 5, Time: 20, RemoveTime: 10, AllowLock: true, Left: 150, Top: 395, BuyGroup: "LeatherStrapPanties1", Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{
				Name: "LoveChastityBelt", Fetish: ["Metal"], Value: 250, Difficulty: 50, Time: 20, RemoveTime: 10, OwnerOnly: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaShockDildo"],
				Effect: ["Lock"], AllowBlock: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ArousalZone: "ItemVulva",
				AllowEffect: ["Chaste", "Egged", "Vibrating"],
				AllowType: ["Open", "Closed", "Vibe", "Shock"],
				DynamicExpressionTrigger: C => {
					if (InventoryItemPelvisLoveChastityBeltLastAction == "Open") {
						return [{ Name: "Low", Group: "Blush", Timer: 10 }];
					} else if (InventoryItemPelvisLoveChastityBeltLastAction == "Closed") {
						return [{ Name: "Medium", Group: "Blush", Timer: 10 }];
					} else if (InventoryItemPelvisLoveChastityBeltLastAction == "Vibe") {
						return [{ Name: "Medium", Group: "Blush", Timer: 10 }];
					} else if (InventoryItemPelvisLoveChastityBeltLastAction == "Shock") {
						return [{ Name: "Medium", Group: "Blush", Timer: 10 }];
					} else if (InventoryItemPelvisLoveChastityBeltLastAction == "ShockTriggered") {
						var belt = InventoryGet(CharacterGetCurrent(), "ItemPelvis");
						var intensity = belt && belt.Property && belt.Property.Intensity;
						if (intensity == 0) {
							return [{ Name: "Low", Group: "Blush", Timer: 10 }];
						} else if (intensity == 1) {
							return [{ Name: "Medium", Group: "Blush", Timer: 10 }];
						} else if (intensity == 2) {
							return [{ Name: "High", Group: "Blush", Timer: 10 }];
						} else {
							return null;
						}
					} else {
						return null;
					}
				},
				Extended: true,
				Layer: [
					{ Name: "Open", AllowColorize: true, AllowTypes: ["", "Open"], HasType: false },
					{ Name: "Closed", AllowColorize: true, AllowTypes: ["Closed", "Vibe", "Shock"], HasType: false },
					{ Name: "Vibe", AllowColorize: false, AllowTypes: ["Vibe"], HasType: false, OverrideAllowPose: [] },
					{ Name: "Shock", AllowColorize: false, AllowTypes: ["Shock"], HasType: false, OverrideAllowPose: [] },
					{ Name: "Lock", AllowColorize: false, AllowTypes: ["", "Open", "Closed", "Vibe", "Shock"], HasType: false, OverrideAllowPose: [] },
					{ Name: "ShieldLock", AllowColorize: false, AllowTypes: ["Closed", "Vibe", "Shock"], HasType: false, OverrideAllowPose: [] },
				]
			},
			{ Name: "LeatherCrop", Value: 20, Wear: false, BuyGroup: "LeatherCrop", Activity: "SpankItem", Bonus: [{ Factor: 3, Type: "KidnapDomination" }], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "LeatherWhip", Value: 40, Wear: false, BuyGroup: "LeatherWhip", Activity: "SpankItem", Bonus: [{ Factor: 3, Type: "KidnapBruteForce" }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "HempRope", Fetish: ["Rope"], Value: 60, Difficulty: 3, Time: 20, RemoveTime: 25, DefaultColor: "#956B1C", BuyGroup: "HempRope", Prerequisite: "AccessTorso", AllowType: ["SwissSeat", "KikkouHip"], Audio: "RopeLong", AllowPose: ["KneelingSpread", "Horse", "LegsClosed", "Kneel"], Extended: true },
			{ Name: "DiaperHarness", Fetish: ["Leather", "ABDL"], Priority: 20, Value: 65, Difficulty: 50, Time: 25, RemoveTime: 30, AllowLock: true, Left: 150, Top: 395, Hide: ["ItemVulva", "ItemVulvaPiercings"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "PelvisChainLeash", Priority: 27, Fetish: ["Metal"], Value: 40, Difficulty: 5, Time: 20, RemoveTime: 25, AllowLock: true },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemTorso",
		ParentGroup: "BodyUpper",
		Category: "Item",
		Priority: 17,
		Default: false,
		Left: 125,
		Top: 200,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Yoked", "Hogtied", "AllFours"],
		Zone: [[100, 340, 300, 80]],
		Activity: ["Bite", "Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "MassageFeet", "Rub", "SpankItem", "TickleItem", "RubItem", "RollItem", "PourItem", "ShockItem"],
		Asset: [
			{ Name: "NylonRopeHarness", Fetish: ["Rope", "Nylon"], Value: 30, Time: 20, DefaultColor: "#909090", BuyGroup: "NylonRope", Prerequisite: "AccessTorso", AllowType: ["Harness", "Diamond", "Star", "Waist"], AllowPose: ["OverTheHead"], Audio: "RopeLong", Extended: true },
			{ Name: "HempRopeHarness", Fetish: ["Rope"], Value: 60, Difficulty: 3, Time: 20, RemoveTime: 25, DefaultColor: "#956B1C", BuyGroup: "HempRope", Prerequisite: "AccessTorso", AllowType: ["Harness", "Diamond", "Star", "Waist"], AllowPose: ["OverTheHead"], Audio: "RopeLong", Extended: true },
			{ Name: "LeatherHarness", Fetish: ["Leather"], Value: 60, Difficulty: 50, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessTorso", AllowPose: ["OverTheHead"] },
			{ Name: "AdultBabyHarness", Fetish: ["Leather", "ABDL"], Priority: 33, Value: 50, Difficulty: 3, Time: 15, RemoveTime: 10, HideItem: ["ItemNipplesLactationPump"], AllowLock: true, DefaultColor: "#aaaaaa", ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HarnessBra1", Fetish: ["Leather"], Priority: 20, Value: 30, Difficulty: 8, Time: 15, RemoveTime: 10, HideItem: ["ItemNipplesLactationPump"], AllowLock: true, BuyGroup: "HarnessBra1", Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HarnessBra2", Fetish: ["Leather"], Priority: 20, Value: 40, Difficulty: 8, Time: 15, RemoveTime: 10, HideItem: ["ItemNipplesLactationPump"], AllowLock: true, BuyGroup: "HarnessBra2", Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Corset2", Fetish: ["Lingerie"], Priority: 22, Value: 30, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: "Corset2", Prerequisite: "AccessTorso", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset3", Fetish: ["Lingerie"], Priority: 22, Value: 25, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: "Corset3", Prerequisite: "AccessTorso", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset4", Fetish: ["Lingerie"], Priority: 22, Value: 15, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: "Corset4", Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Corset5", Fetish: ["Lingerie"], Priority: 22, Value: 20, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: "Corset5", Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LeatherBreastBinder", Fetish: ["Leather"], Value: 30, Difficulty: 50, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessTorso" },
			{ Name: "LatexCorset1", Fetish: ["Lingerie", "Latex"], Priority: 21, Value: 40, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: "LatexCorset1", Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LeatherStrapBra1", Fetish: ["Leather"], Value: 15, Difficulty: 5, Time: 15, RemoveTime: 10, AllowLock: true, Left: 150, Top: 200, BuyGroup: "LeatherStrapBra1", Prerequisite: "AccessTorso" },
			{ Name: "CrotchChain", Fetish: ["Metal"], Value: 40, Difficulty: 50, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessTorso" },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemNipples",
		ParentGroup: "BodyUpper",
		Category: "Item",
		Priority: 22,
		Default: false,
		Left: 150,
		Top: 200,
		AllowPose: ["AllFours"],
		Zone: [[100, 270, 100, 70]],
		Activity: ["Bite", "Kiss", "Lick", "Suck", "Nibble", "Pinch", "Caress", "SpankItem", "Pull", "TickleItem", "RubItem", "RollItem", "MasturbateItem", "PourItem", "ShockItem"],
		Asset: [
			{ Name: "NippleClamp", Fetish: ["Metal", "Masochism"], Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "VibeNippleClamp", Fetish: ["Metal", "Masochism"], Value: 40, Time: 10, Prerequisite: "AccessBreast", Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "VibratorRemote", Value: 50, Wear: false, BuyGroup: "VibratorRemote", Prerequisite: ["RemotesAllowed"], Effect: ["Remote"] },
			{ Name: "ChainClamp", Fetish: ["Metal", "Masochism"], Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ScrewClamps", Fetish: ["Metal", "Masochism"], Value: 35, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChainTassles", Value: 45, Time: 10, Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "HeartPasties", Value: 20, Time: 10, DefaultColor: "#800000", Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "TapedVibeEggs", Fetish: ["Tape"], Value: 30, Time: 5, Prerequisite: "AccessBreast", Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "NippleSuctionCups", Value: 25, Time: 10, Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], Effect: [], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], Extended: true },
			{ Name: "NippleTape", Fetish: ["Tape"], Value: 10, Time: 5, Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChopStickNippleClamps", Fetish: ["Rope", "Masochism"], Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "KittyPasties", Value: 20, Time: 10, DefaultColor: "#444444", Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "Clothespins", Fetish: ["Masochism"], Value: 15, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "NippleWeightClamps", Fetish: ["Metal", "Masochism"], Value: 35, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "BellClamps", Fetish: ["Metal", "Masochism"], Value: 20, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "LactationPump", Fetish: ["Pet"], Value: 130, Top: 0, Priority: 38, Left: 0, Time: 10, Prerequisite: ["AccessBreast", "CannotBeSuited"], AllowPose: ["Kneel", "Hogtied", "SuspensionHogtied", "KneelingSpread"], Block: ["ItemNipplesPiercings", "ItemBreast"], Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], Extended: true, AlwaysExtend: true },
			{ Name: "ShockClamps", Fetish: ["Metal", "Masochism"], Value: 60, Time: 10, Extended: true, AlwaysExtend: true, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 10 }], Activity: "ShockItem" },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemNipplesPiercings",
		ParentGroup: "BodyUpper",
		Category: "Item",
		Priority: 13,
		Default: false,
		Left: 150,
		Top: 200,
		AllowPose: ["AllFours"],
		Zone: [[200, 270, 100, 70]],
		Asset: [
			{ Name: "StraightPiercing", Fetish: ["Metal"], Value: 10, Difficulty: 10, Time: 15, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "RoundPiercing", Fetish: ["Metal"], Value: 30, Difficulty: 10, Time: 15, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowType: ["Base", "Chain"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], Extended: true },
			{ Name: "WeightedPiercing", Fetish: ["Metal"], Value: 40, Difficulty: 10, Time: 10, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowType: ["Base", "Chain"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], Extended: true },
			{ Name: "NippleAccessory1", Fetish: ["Metal"], Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"] },
			{ Name: "NippleAccessory2", Fetish: ["Metal"], Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"] },
			{ Name: "NippleAccessory3", Fetish: ["Metal"], Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"] },
			{ Name: "BarbellPiercing", Fetish: ["Metal"], Value: 20, Difficulty: 10, Time: 15, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "NippleChastityPiercing1", Fetish: ["Metal"], Value: 50, Difficulty: 50, Time: 30, RemoveTime: 30, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], Effect: ["BreastChaste"], Block: ["ItemNipples"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "NippleChastityPiercing2", Fetish: ["Metal"], Value: 50, Difficulty: 50, Time: 30, RemoveTime: 30, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], Effect: ["BreastChaste"], Block: ["ItemNipples"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{
				Name: "VibeHeartPiercings", Value: 40, Difficulty: 10, Time: 10, AllowLock: true, BuyGroup: "VibeHeart", Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }],
				Layer: [
					{ Name: "Heart", AllowColorize: true },
					{ Name: "Ring", AllowColorize: false }
				]
			},
			{ Name: "BellPiercing", Fetish: ["Metal"], Value: 30, Difficulty: 10, Time: 15, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] }
		],
		Color: ["Default"]
	},

	{
		Group: "ItemBreast",
		ParentGroup: "BodyUpper",
		Category: "Item",
		Priority: 16,
		Default: false,
		Left: 150,
		Top: 200,
		AllowPose: ["AllFours"],
		Zone: [[300, 270, 100, 70]],
		Activity: ["Bite", "Kiss", "Lick", "Tickle", "Slap", "Caress", "MasturbateHand", "Grope", "SpankItem", "TickleItem", "RubItem", "RollItem", "MasturbateItem", "PourItem", "ShockItem"],
		Asset: [
			{ Name: "MetalChastityBra", Fetish: ["Metal"], Value: 60, Difficulty: 50, Time: 15, AllowLock: true, Prerequisite: "AccessBreast", Hide: ["ItemNipples", "ItemNipplesPiercings"], Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "PolishedChastityBra", Fetish: ["Metal"], Value: 100, Difficulty: 50, Time: 15, AllowLock: true, Prerequisite: "AccessBreast", Hide: ["ItemNipples", "ItemNipplesPiercings"], Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{
				Name: "OrnateChastityBra", Fetish: ["Metal"], Value: 150, Difficulty: 50, Time: 15, AllowLock: true, Prerequisite: "AccessBreast", Hide: ["ItemNipples", "ItemNipplesPiercings"], Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }],
				Layer: [
					{ Name: "Bra", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "LeatherCrop", Value: 20, Wear: false, BuyGroup: "LeatherCrop", Activity: "SpankItem", Bonus: [{ Factor: 3, Type: "KidnapDomination" }], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "LeatherWhip", Value: 40, Wear: false, BuyGroup: "LeatherWhip", Activity: "SpankItem", Bonus: [{ Factor: 3, Type: "KidnapBruteForce" }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemArms",
		ParentGroup: "BodyUpper",
		Category: "Item",
		Priority: 31,
		Default: false,
		IsRestraint: true,
		Left: 50,
		Top: 200,
		Zone: [[10, 200, 90, 200], [400, 200, 90, 200]],
		Activity: ["Bite", "Kiss", "Lick", "Nibble", "Tickle", "Spank", "Pinch", "Caress", "MassageHands", "Grope", "Cuddle", "SpankItem", "TickleItem", "RubItem", "RollItem", "PourItem", "ShockItem"],
		Asset: [
			{ Name: "NylonRope", Fetish: ["Rope", "Nylon"], Value: 30, SelfBondage: 2, Time: 15, DefaultColor: "#909090", BuyGroup: "NylonRope", SetPose: ["BackBoxTie"], Effect: ["Block", "Prone"], Audio: "RopeLong" },
			{ Name: "HempRope", Fetish: ["Rope"], Value: 60, Difficulty: 3, SelfBondage: 2, Time: 20, DefaultColor: "#956B1C", BuyGroup: "HempRope", SetPose: ["BackBoxTie"], Effect: ["Block", "Prone"], AllowBlock: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], AllowEffect: ["Freeze", "Block", "Prone", "ForceKneel"], AllowType: ["Hogtied", "SuspensionHogtied", "AllFours", "WristTie", "WristElbowTie", "RopeCuffs", "WristElbowHarnessTie", "KneelingHogtie", "TightBoxtie", "SimpleHogtie", "CrossedBoxtie"], Audio: "RopeLong", Extended: true, RemoveItemOnRemove: [{ Name: "SuspensionHempRope", Group: "ItemHidden" }] },
			{ Name: "MetalCuffs", Fetish: ["Metal"], Priority: 29, Value: 40, Difficulty: 5, Time: 5, SetPose: ["BackCuffs"], Effect: ["Block", "Prone", "Lock"] },
			{ Name: "SturdyLeatherBelts", Fetish: ["Leather"], Value: 50, Difficulty: 5, SelfBondage: 4, Time: 20, AllowLock: true, BuyGroup: "SturdyLeatherBelts", SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], AllowType: ["Two", "Three"], Extended: true, SelfUnlock: false },
			{ Name: "LeatherArmbinder", Fetish: ["Leather"], Priority: 6, Value: 80, Difficulty: 10, SelfBondage: 7, Time: 25, RemoveTime: 10, AllowLock: true, DefaultColor: "#404040", SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemHands"], Extended: true, RemoveItemOnRemove: [{ Name: "LeatherArmbinderStrap", Group: "ItemHidden" }, { Name: "LeatherArmbinderWrapStrap", Group: "ItemHidden" }], SelfUnlock: false },
			{ Name: "ArmbinderJacket", Fetish: ["Leather"], Priority: 33, Value: 100, Difficulty: 12, SelfBondage: 8, Time: 35, RemoveTime: 25, AllowLock: true, Hide: ["Cloth"], SetPose: ["BackElbowTouch", "Bolero"], Effect: ["Block", "Prone"], Block: ["ItemHands"], SelfUnlock: false },
			{ Name: "LeatherCuffs", Fetish: ["Leather"], Priority: 29, Value: 100, Left: 0, Top: 0, Difficulty: 3, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", AllowPose: ["BackBoxTie", "BackElbowTouch", "OverTheHead"], Effect: ["CuffedArms"], AllowEffect: ["Block", "Prone"], AllowType: ["Wrist", "Elbow", "Both"], Extended: true },
			{
				Name: "OrnateCuffs", Fetish: ["Metal"], Priority: 29, Value: 200, Left: 0, Top: 0, Difficulty: 4, Time: 20, Random: false, AllowLock: true, AllowPose: ["BackBoxTie", "BackElbowTouch", "OverTheHead"], Effect: ["CuffedArms"], AllowEffect: ["Block", "Prone"], AllowType: ["Wrist", "Elbow", "Both"], Extended: true,
				Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "MittenChain1", Fetish: ["Metal"], Priority: 33, Value: -1, Difficulty: 5, SelfBondage: 5, Time: 15, Random: false, AllowLock: true, Block: ["ItemHands", "ItemTorso"] },
			{ Name: "FourLimbsShackles", Fetish: ["Metal"], Value: -1, Time: 30, Enable: false, SetPose: ["BackBoxTie"], Effect: ["Block", "Prone", "Lock"] },
			{ Name: "Manacles", Fetish: ["Metal"], Value: 120, Difficulty: 16, SelfBondage: 1, Time: 30, Random: false, AllowLock: true, Prerequisite: ["NoItemFeet", "NotMounted", "NotSuspended", "NotHogtied", "NotKneelingSpread"], SetPose: ["BackBoxTie", "Kneel"], Effect: ["Block", "Freeze", "Prone", "ForceKneel"], Block: ["ItemFeet"] },
			{ Name: "FullBodyShackles", Fetish: ["Metal"], Value: 150, Difficulty: 18, Random: false, AllowLock: true, Prerequisite: ["NoItemFeet", "NotMounted", "NotSuspended", "NotHogtied", "NotKneelingSpread"], AllowPose: ["LegsClosed", "Kneel"], Effect: ["Prone", "Shackled"], Block: ["ItemFeet"] },
			{ Name: "WristShackles", Fetish: ["Metal"], Value: 80, Difficulty: 6, Time: 20, Random: false, AllowLock: true, AllowPose: ["BackCuffs"], Effect: ["Prone"], AllowEffect: ["Block", "Prone"], AllowType: ["Behind"], Extended: true },
			{ Name: "StraitLeotard", Fetish: ["Latex"], Value: 120, Priority: 23, Difficulty: 13, SelfBondage: 7, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#70C0C0", Hide: ["Cloth", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemNipplesLactationPump"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"], SelfUnlock: false },
			{ Name: "StraitJacket", Fetish: ["Leather"], Value: 150, Difficulty: 6, SelfBondage: 8, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#A0A0A0", Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerClothSkirt1", "ClothLowerChineseSkirt1", "ClothLowerAdmiralSkirt", "ClothLowerJeanSkirt", "ClothLowerPencilSkirt"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"], Extended: true, SelfUnlock: false },
			{ Name: "CollarCuffs", Fetish: ["Leather"], Value: 60, Difficulty: 9, SelfBondage: 3, Time: 35, RemoveTime: 20, Visible: false, Random: false, AllowLock: true, Prerequisite: "Collared", SetPose: ["BackBoxTie"], Effect: ["Block", "Prone"], Block: ["ItemHands", "ItemNeck"], Extended: true, SelfUnlock: false },
			{ Name: "LeatherStraitJacket", Fetish: ["Leather"], Value: 200, Difficulty: 7, SelfBondage: 8, Time: 45, RemoveTime: 30, AllowLock: true, Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerClothSkirt1", "ClothLowerChineseSkirt1", "ClothLowerAdmiralSkirt", "ClothLowerJeanSkirt", "ClothLowerPencilSkirt", "ItemNipplesLactationPump"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], AllowType: ["Normal", "Snug", "Tight"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"], Extended: true, SelfUnlock: false },
			{
				Name: "Bolero", Fetish: ["Leather"], Priority: 33, Value: 100, Difficulty: 11, SelfBondage: 7, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#E080A0", SetPose: ["BackElbowTouch", "Bolero"], Effect: ["Block", "Prone"], Block: ["ItemHands"], Layer: [
					{ Name: "Leather", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				],
				SelfUnlock: false
			},
			{ Name: "DuctTape", Fetish: ["Tape"], Value: 50, Difficulty: 5, SelfBondage: 4, Time: 20, RemoveTime: 10, BuyGroup: "DuctTape", Hide: ["ItemNipplesPiercings"], HideItem: ["ItemNipplesLactationPump"], AllowPose: ["Horse", "KneelingSpread"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], AllowBlock: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemNipples", "ItemNipplesPiercings"], AllowType: ["Bottom", "Top", "Full", "Complete"], Extended: true },
			{
				Name: "BitchSuit", Fetish: ["Latex", "Pet"], Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#888888", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "ClothLower", "Bra", "Panties", "BodyLower", "Shoes", "Socks", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "ItemFeet"],
				SetPose: ["BackElbowTouch", "Kneel", "LegsClosed", "StraitDressOpen"],
				Effect: ["Block", "Prone", "ForceKneel"],
				HideItem: ["ItemNipplesLactationPump"],
				AllowBlock: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemButt"],
				AllowType: ["", "UnZip", "Latex"],
				Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"],
				Extended: true,
				Layer: [
					{ Name: "Latex", AllowColorize: true, AllowTypes: [""], HasType: false },
					{ Name: "UnZip", AllowColorize: true, AllowTypes: ["UnZip"], HasType: false }
				],
				SelfUnlock: false
			},
			{
				Name: "BitchSuitExposed", Fetish: ["Latex", "Pet"], Value: 175, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#888888", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"],
				Hide: ["Cloth", "ClothLower", "BodyLower", "Shoes", "Socks", "ItemBoots", "ItemLegs", "ItemFeet"],
				SetPose: ["BackElbowTouch", "Kneel", "LegsClosed", "StraitDressOpen"],
				Effect: ["Block", "Prone", "ForceKneel"],
				Block: ["ItemPelvis", "ItemTorso", "ItemHands"],
				SelfUnlock: false
			},
			{ Name: "CollarLeashHolding", Fetish: ["Sadism"], Priority: 36, Value: -1, Difficulty: 1, Time: 3, RemoveTime: 3, Random: false, Prerequisite: ["NotSuspended", "NotHogtied"] },
			{
			    Name: "StraitDress", Fetish: ["Latex"], Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: "StraitDress", DefaultColor: "#4040C0", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "Suit", "SuitLower"], HideItem: ["ItemFeetOrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetLeatherAnkleCuffs", "ItemNipplesLactationPump"], AllowPose: ["Kneel"], SetPose: ["BackElbowTouch", "LegsClosed"], Effect: ["Block", "Prone"], Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands", "ItemFeet", "ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemLegs", "ItemButt"], Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				],
				SelfUnlock: false
			},
			{
			    Name: "StraitDressOpen", Fetish: ["Latex"], Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: "StraitDress", DefaultColor: "#400000", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "BodyLower", "Shoes", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "Suit"], HideItem: ["ItemFeetOrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetLeatherAnkleCuffs", "ItemNipplesLactationPump"], AllowPose: ["Kneel"], SetPose: ["BackElbowTouch", "LegsClosed", "StraitDressOpen"], Effect: ["Block", "Prone"], Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands", "ItemFeet", "ItemNipples", "ItemNipplesPiercings", "ItemLegs"], Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				],
				SelfUnlock: false
			},
			{ Name: "SeamlessStraitDress", Fetish: ["Latex"], Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: "SeamlessStraitDress", DefaultColor: "#4040C0", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "Suit", "SuitLower"], HideItem: ["ItemFeetOrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetLeatherAnkleCuffs", "ItemNipplesLactationPump"], AllowPose: ["Kneel"], SetPose: ["BackElbowTouch", "LegsClosed"], Effect: ["Block", "Prone"], Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands", "ItemFeet", "ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemLegs", "ItemButt"], SelfUnlock: false },
			{ Name: "SeamlessStraitDressOpen", Fetish: ["Latex"], Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: "SeamlessStraitDress", DefaultColor: "#400000", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "BodyLower", "Shoes", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "Suit"], HideItem: ["ItemFeetOrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetLeatherAnkleCuffs", "ItemNipplesLactationPump"], AllowPose: ["Kneel"], SetPose: ["BackElbowTouch", "LegsClosed", "StraitDressOpen"], Effect: ["Block", "Prone"], Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands", "ItemFeet", "ItemNipples", "ItemNipplesPiercings", "ItemLegs"], SelfUnlock: false },
			{ Name: "Yoke", Fetish: ["Metal", "Leather"], Priority: 39, Value: 80, Difficulty: 10, SelfBondage: 6, Time: 20, AllowLock: true, SetPose: ["Yoked"], Effect: ["Block", "Prone"] },
			{ Name: "Pillory", Fetish: ["Metal"], Priority: 46, Value: -1, Difficulty: 12, SelfBondage: 5, Time: 20, Random: false, AllowLock: true, Prerequisite: ["NotMasked"], SetPose: ["Yoked"], Effect: ["Block", "Prone"] },
			{
				Name: "FullLatexSuit", Fetish: ["Leather", "Latex"], Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#888888", Prerequisite: ["NotSuspended", "NotKneeling", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotShackled", "CannotBeSuited"],
				Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "Suit", "SuitLower"],
				HideItem: ["ItemNipplesLactationPump"],
				SetPose: ["BackElbowTouch", "LegsClosed", "StraitDressOpen"],
				Effect: ["Block", "Prone", "Freeze", "BlockKneel"],
				AllowBlock: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemButt"],
				AllowEffect: ["Egged", "Vibrating"],
				AllowType: ["", "Base", "UnZip", "Latex"],
				Block: ["ItemBoots", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet"],
				Extended: true,
				Layer: [
					{ Name: "Latex", AllowColorize: true, AllowTypes: ["", "Base"], HasType: false },
					{ Name: "UnZip", AllowColorize: true, AllowTypes: ["UnZip", "Base"], HasType: false },
					{ Name: "Base", AllowColorize: false, AllowTypes: ["", "Base", "UnZip", "Latex"], HasType: false }
				],
				RemoveItemOnRemove: [{ Name: "FullLatexSuitWand", Group: "ItemVulva" }]
			},
			{ Name: "Zipties", Value: 20, Difficulty: 6, SelfBondage: 1, RemoveTime: 6, BuyGroup: "Zipties", SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], AllowType: ["ZipMedium", "ZipFull", "ZipElbowWrist", "ZipWristLight", "ZipWristMedium", "ZipWristFull", "ZipWrist", "ZipHogtied", "ZipAllFours", "ZipKneelingHogtie"], Extended: true },
			{ Name: "BoxTieArmbinder", Fetish: ["Latex"], Value: 140, Difficulty: 11, SelfBondage: 7, Time: 40, RemoveTime: 30, AllowLock: true, SetPose: ["BackElbowTouch", "Bolero"], Effect: ["Block", "Prone"], Block: ["ItemHands"], SelfUnlock: false },
			{
				Name: "BondageBouquet", Fetish: ["Metal"], Priority: 41, Value: 40, Difficulty: 3, Time: 15, Random: false, AllowLock: true, BuyGroup: "Bouquet", Effect: ["Prone"],
				Layer: [
					{ Name: "Base", AllowColorize: false },
					{ Name: "Flowers", AllowColorize: true }
				]
			},
			{ Name: "Chains", Fetish: ["Metal"], Value: 90, Difficulty: 5, SelfBondage: 3, Time: 30, AllowLock: true, BuyGroup: "Chains", SetPose: ["BackBoxTie"], Effect: ["Block", "Prone"], AllowBlock: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], AllowEffect: ["Freeze", "Block", "Prone", "ForceKneel"], AllowType: ["Hogtied", "SuspensionHogtied", "AllFours", "WristTie", "WristElbowTie", "ChainCuffs", "WristElbowHarnessTie", "KneelingHogtie"], Extended: true, RemoveItemOnRemove: [{ Name: "SuspensionChains", Group: "ItemHidden" }] },
			{ Name: "ChainLeashHolding", Fetish: ["Sadism"], Priority: 36, Value: -1, Difficulty: 1, Time: 3, RemoveTime: 3, Random: false, Prerequisite: ["NotSuspended", "NotHogtied"] },
			{
				Name: "PetCrawler", Priority: 36, Value: 80, Difficulty: 10, SelfBondage: 7, Time: 20, Random: false, AllowLock: true, Prerequisite: ["NoItemFeet", "NoItemLegs", "LegsOpen", "NotMounted", "NotHorse", "NotSuspended", "NotYoked", "NotKneelingSpread", "NoFeetSpreader", "StraitDressOpen"], Hide: ["ItemBoots", "Suit", "Panties", "Bra"],
				HideItem: ["ItemButtRaccoonTailPlug", "TailStrapsRaccoonTailStrap", "ItemButtKittenTail1", "TailStrapsKittenTail1", "ItemNipplesPiercingsNippleChastityPiercing2", "ItemTorsoAdultBabyHarness", "ItemTorsoCorset2", "ItemTorsoCorset3", "ItemNipplesPiercingsNippleChastityPiercing1", "ItemNipplesChainTassles", "ItemNipplesHeartPasties", "ItemNipplesNippleTape", "ItemNipplesKittyPasties"],
				SetPose: ["AllFours"],
				Effect: ["Block", "Prone", "ForceKneel"],
				Block: ["ItemLegs", "ItemFeet", "ItemDevices"]
			},
			{
				Name: "MermaidSuit", Fetish: ["Latex", "Pet"], Value: 200, Difficulty: 15, SelfBondage: 6, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#400000", Prerequisite: ["NotSuspended", "NotKneeling", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotShackled", "CannotBeSuited"],
				Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemLegs", "Suit", "SuitLower", "ItemPelvis", "ItemFeet", "Panties"],
				HideItem: ["ItemNipplesLactationPump"],
				SetPose: ["BackElbowTouch", "LegsClosed", "StraitDressOpen"],
				Effect: ["Block", "Prone", "Freeze", "BlockKneel"],
				AllowBlock: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemButt"],
				AllowEffect: ["Egged", "Vibrating"],
				AllowType: ["", "UnZip", "Latex"],
				Block: ["ItemBoots", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet"],
				Extended: true,
				Layer: [
					{ Name: "Latex", AllowColorize: true, AllowTypes: [""], HasType: false },
					{ Name: "UnZip", AllowColorize: true, AllowTypes: ["UnZip"], HasType: false }
				]
			},
			{
				Name: "Web", Fetish: ["Tape"], Priority: 35, Value: 150, Difficulty: 4, SelfBondage: 2, Time: 20, RemoveTime: 30, Random: false, Left: 0, Top: 0,
				Prerequisite: ["NotKneelingSpread", "NotMounted"],
				Hide: ["Cloth", "ClothLower", "Shoes"], HideItem: ["ItemNipplesLactationPump"],
				AllowPose: ["Kneel", "Hogtied", "Suspension"],
				SetPose: ["LegsOpen", "BackElbowTouch"],
				Effect: ["Block", "Freeze", "Prone"],
				AllowBlock: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemDevices"],
				AllowType: ["Wrapped", "Cocooned", "Hogtied", "Suspended", "KneelingSuspended", "SuspensionHogtied"],
				Block: ["ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"],
				Extended: true,
			},
			{
				Name: "LatexArmbinder", Fetish: ["Latex"], Priority: 6, Value: 60, Difficulty: 10, SelfBondage: 7, Time: 25, RemoveTime: 10, AllowLock: true, SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemHands"], SelfUnlock: false,
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Straps", AllowColorize: false }
				]
			},
			{ Name: "SeamlessLatexArmbinder", Fetish: ["Latex"], Priority: 6, Value: 60, Difficulty: 10, SelfBondage: 7, Time: 25, RemoveTime: 10, AllowLock: true, SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemHands"], SelfUnlock: false },
			{
				Name: "FullBodyLeatherHarness", Fetish: ["Leather"], Priority: 29, Value: 60, Difficulty: 14, SelfBondage: 6, Time: 20, RemoveTime: 15, AllowLock: true, SetPose: ["BackElbowTouch", "LegsClosed"], AllowPose: ["Kneel"], Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotShackled"], Effect: ["Block", "Prone"], SelfUnlock: false,
				HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerClothSkirt1", "ClothLowerChineseSkirt1", "ClothLowerGown2Skirt", "ClothLowerAdmiralSkirt", "ClothLowerJeanSkirt", "ClothLowerPencilSkirt", "ClothLowerPajama1"]
			},
			{ Name: "UnderBedBondageCuffs", Fetish: ["Leather"], Value: -1, Difficulty: 9, SelfBondage: 3, Random: false, IsRestraint: true, SetPose: ["Yoked"], Prerequisite: ["OnBed", "LegsOpen"], Effect: ["Block", "Prone", "Freeze", "BlockKneel"], Block: ["ItemDevices", "ItemLegs", "ItemFeet", "ItemBoots"], AllowLock: true, BuyGroup: "Bed", Left: 0, Top: -250 },
			{ Name: "TightJacket", Fetish: ["Leather"], DefaultColor: "#FFFFFF", Value: 150, Difficulty: 6, SelfBondage: 8, Time: 35, RemoveTime: 20, AllowLock: true, Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerClothSkirt1", "ClothLowerChineseSkirt1", "ClothLowerAdmiralSkirt", "ClothLowerJeanSkirt", "ClothLowerPencilSkirt"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"], BuyGroup: "TightJacket", SelfUnlock: false, Extended: true, AllowType: ["PulledStraps", "LiningStraps", "ExtraPadding", "PulledLining", "PulledPadding", "PaddedLining", "FullJacket"] },
			{ Name: "LatexSleevelessLeotard", Fetish: ["Latex"], Value: 120, Priority: 23, Difficulty: 14, SelfBondage: 7, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#d986a2", Hide: ["Cloth", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"], AllowType: ["Polished"], Extended: true, SelfUnlock: false, Layer: [
					{ Name: "Latex", AllowColorize: true, AllowTypes: ["", "Polished"], HasType: false },
					{ Name: "Highlights", AllowColorize: false, AllowTypes: ["", "Polished"] }
				]
			},
			{
				Name: "LatexBoxtieLeotard", Fetish: ["Latex"], Value: 120, Priority: 23, Difficulty: 14, SelfBondage: 7, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#185d97", BuyGroup: "LatexSleevelessLeotard", Hide: ["Cloth", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"], AllowType: ["Polished"], Extended: true, SelfUnlock: false, Layer: [
					{ Name: "Latex", AllowColorize: true, AllowTypes: ["", "Polished"], HasType: false },
					{ Name: "Highlights", AllowColorize: false, AllowTypes: ["", "Polished"] }
				]
			},
			{
				Name: "LatexButterflyLeotard", Fetish: ["Latex"], Value: 150, Priority: 23, Difficulty: 14, SelfBondage: 7, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#580505", Hide: ["Cloth", "Bra", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"], AllowType: ["Polished"], Extended: true, SelfUnlock: false, Layer: [
					{ Name: "Latex", AllowColorize: true, AllowTypes: ["", "Polished"], HasType: false },
					{ Name: "Highlights", AllowColorize: false, AllowTypes: ["", "Polished"] }
				]
			},
			{
				Name: "PrisonLockdownSuit", Value: 125, Difficulty: 7, SelfBondage: 7, Time: 50, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: "PrisonLockdownSuit", DefaultColor: "#ab5207", Hide: ["ItemNeck", "BodyLower", "Cloth", "ClothLower", "Shoes", "Socks", "ItemLegs", "ItemFeet", "ItemPelvis", "ItemBoots", "SuitLower", "Panties", "ItemVulva", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2"], SetPose: ["LegsClosed", "BackElbowTouch"], Prerequisite: ["NotSuspended", "NotKneeling", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotShackled"], Effect: ["Block", "Prone", "BlockKneel", "Slow", "BlockKneel"], AllowEffect: ["Freeze"], AllowType: ["Ankles", "Thighs", "Full"], Block: ["ItemBreast", "ItemNipplePiercings", "ItemNipples", "ItemTorso", "ItemPelvis", "ItemHands", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemLegs", "ItemFeet", "ItemBoots"], Extended: true, SelfUnlock: false, Layer: [
					{ Name: "Suit", AllowTypes: ["", "Ankles", "Thighs", "Full"] },
					{ Name: "Belts", AllowColorize: false, AllowTypes: ["", "Ankles", "Thighs", "Full"] }
				]
			},
			{ Name: "LeatherArmSplints", Value: 65, Fetish: ["Leather"], Difficulty: 7, SelfBondage: 7, Time: 15, RemoveTime: 10, Visible: false, AllowLock: true, SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], SelfUnlock: false },
			{ Name: "TightJacketCrotch", Fetish: ["Leather"], DefaultColor: "#FFFFFF", Value: 150, Difficulty: 6, SelfBondage: 8, Time: 35, RemoveTime: 20, AllowLock: true, Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerClothSkirt1", "ClothLowerChineseSkirt1", "ClothLowerAdmiralSkirt", "ClothLowerJeanSkirt", "ClothLowerPencilSkirt"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands", "ItemVulva", "ItemButt", "ItemVulvsPiercings"], BuyGroup: "TightJacket", SelfUnlock: false, Extended: true, AllowType: ["PulledStraps", "LiningStraps", "ExtraPadding", "PulledLining", "PulledPadding", "PaddedLining", "FullJacket"] },
			{ Name: "HighSecurityStraitJacket", Value: 220, Priority: 25, Difficulty: 4, SelfBondage: 2, Time: 45, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#333", Hide: ["Cloth", "ItemNipplesPiercings"], SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"],
				AllowBlock: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis"],
				AllowType: ["c0a0s0", "c0a0s1", "c0a0s2", "c0a0s3", "c0a1s0", "c0a1s1", "c0a1s2", "c0a1s3", "c0a2s0", "c0a2s1", "c0a2s2", "c0a2s3", "c1a0s0", "c1a0s1", "c1a0s2", "c1a0s3", "c1a1s0", "c1a1s1", "c1a1s2", "c1a1s3", "c1a2s0", "c1a2s1", "c1a2s2", "c1a2s3"],
				Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"],
				Extended: true,
				Layer: [
					{ Name: "Crotch", ParentGroup: null, AllowTypes: ["c1a0s0", "c1a0s1", "c1a0s2", "c1a0s3", "c1a1s0", "c1a1s1", "c1a1s2", "c1a1s3", "c1a2s0", "c1a2s1", "c1a2s2", "c1a2s3"], HasType: false },
					{ Name: "JacketLoose", CopyLayerColor: "Crotch", ParentGroup: null, AllowTypes: ["c0a0s0", "c0a0s1", "c0a0s2", "c0a0s3", "c1a0s0", "c1a0s1", "c1a0s2", "c1a0s3"], HasType: false},
					{ Name: "JacketFront", CopyLayerColor: "Crotch", AllowTypes: ["c0a1s0", "c0a1s1", "c0a1s2", "c0a1s3", "c1a1s0", "c1a1s1", "c1a1s2", "c1a1s3"], HasType: false },
					{ Name: "JacketBack", CopyLayerColor: "Crotch", AllowTypes: ["c0a2s0", "c0a2s1", "c0a2s2", "c0a2s3", "c1a2s0", "c1a2s1", "c1a2s2", "c1a2s3"], HasType: false },
					{ Name: "StrapsLoose", ColorGroup: "Straps", AllowTypes: ["c0a0s0", "c0a0s1", "c0a0s2", "c0a0s3", "c1a0s0", "c1a0s1", "c1a0s2", "c1a0s3"], HasType: false},
					{ Name: "StrapsFront", CopyLayerColor: "StrapsLoose", AllowTypes: ["c0a1s0", "c0a1s1", "c0a1s2", "c0a1s3", "c1a1s0", "c1a1s1", "c1a1s2", "c1a1s3"], HasType: false },
					{ Name: "StrapsBack", CopyLayerColor: "StrapsLoose", AllowTypes: ["c0a2s0", "c0a2s1", "c0a2s2", "c0a2s3", "c1a2s0", "c1a2s1", "c1a2s2", "c1a2s3"], HasType: false },
					{ Name: "CrotchStrapsSingle", ColorGroup: "Straps", ParentGroup: null, AllowTypes: ["c0a0s1", "c0a1s1", "c0a2s1", "c1a0s1", "c1a1s1", "c1a2s1"], HasType: false },
					{ Name: "CrotchStrapsDouble", CopyLayerColor: "CrotchStrapsSingle", ParentGroup: null, AllowTypes: ["c0a0s2", "c0a1s2", "c0a2s2", "c1a0s2", "c1a1s2", "c1a2s2"], HasType: false },
					{ Name: "CrotchStrapsTriple", CopyLayerColor: "CrotchStrapsSingle", ParentGroup: null, AllowTypes: ["c0a0s3", "c0a1s3", "c0a2s3", "c1a0s3", "c1a1s3", "c1a2s3"], HasType: false },
				],
				SelfUnlock: false
			},
			{ Name: "PantyhoseBody", Fetish: ["Nylon"], Value: 75, Priority: 15, Difficulty: 3, SelfBondage: 4, Time: 30, RemoveTime: 20, Random: false, BuyGroup: "PantyhoseBody", AllowPose: ["Kneel"], SetPose: ["BackElbowTouch", "LegsClosed"], Effect: ["Block", "Prone"], 
			  Prerequisite: ["NotHogtied", "NotMounted", "NoFeetSpreader"], Hide: ["Cloth", "ClothLower", "Suit", "SuitLower"],
			  Block: ["ItemHands", "ItemVulva", "ItemButt", "ItemVulvaPiercings", "ItemNipplesPiercings"] },
			{ Name: "PantyhoseBodyOpen", Fetish: ["Nylon"], Value: 75, Priority: 15, Difficulty: 3, SelfBondage: 4, Time: 30, RemoveTime: 20, Random: false, BuyGroup: "PantyhoseBody", AllowPose: ["Kneel"], SetPose: ["BackElbowTouch", "LegsClosed"], Effect: ["Block", "Prone"], 
			  Prerequisite: ["NotHogtied", "NotMounted", "NoFeetSpreader"], Hide: ["Cloth", "ClothLower", "Suit", "SuitLower"], Block: ["ItemHands",  "ItemNipplesPiercings"] },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemHands",
		ParentGroup: "BodyUpper",
		Category: "Item",
		Priority: 35,
		Default: false,
		IsRestraint: true,
		Zone: [[10, 400, 90, 200], [400, 400, 90, 200]],
		Activity: ["Bite", "Kiss", "PoliteKiss", "Lick", "Suck", "Nibble", "Spank", "Caress", "TakeCare"],
		Asset: [
			{ Name: "PaddedMittens", Fetish: ["ABDL"], Value: 40, Difficulty: 4, SelfBondage: 2, Time: 15, AllowLock: true, DefaultColor: "#bbbbbb", AllowPose: ["OverTheHead", "BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], Extended: true },
			{ Name: "PawMittens", Fetish: ["ABDL", "Pet"], Value: 50, Difficulty: 4, SelfBondage: 1, Time: 15, AllowLock: true, DefaultColor: "#bbbbbb", AllowPose: ["OverTheHead", "BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], Extended: true },
			{ Name: "LeatherMittens", Fetish: ["Leather"], Value: 60, Difficulty: 5, SelfBondage: 4, Time: 15, RemoveTime: 5, AllowLock: true, AllowPose: ["OverTheHead", "BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], SetPose: ["TapedHands"], Effect: ["Block", "Prone"] },
			{ Name: "PaddedLeatherMittens", Fetish: ["Leather"], Value: 70, Difficulty: 6, SelfBondage: 5, Time: 15, RemoveTime: 5, AllowLock: true, AllowPose: ["OverTheHead", "BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], SetPose: ["TapedHands"], Effect: ["Block", "Prone"] },
			{ Name: "PolishedMittens", Fetish: ["Metal"], Value: 80, Difficulty: 8, SelfBondage: 6, Time: 20, RemoveTime: 10, AllowLock: true, AllowPose: ["OverTheHead", "BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"] },
			{ Name: "DuctTape", Fetish: ["Tape"], Value: 50, Difficulty: 5, SelfBondage: 3, Time: 20, RemoveTime: 10, BuyGroup: "DuctTape", Hide: ["Gloves"], AllowPose: ["OverTheHead", "BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], SetPose: ["TapedHands"], Effect: ["Block", "Prone"] },
			{
				Name: "SpankingToys", Fetish: ["Sadism"], Priority: 46, Random: false, Wear: true, IsRestraint: false, BuyGroup: "SpankingToys", AllowPose: ["OverTheHead", "BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], AllowType: ["Crop", "Flogger", "Cane", "HeartCrop", "Paddle", "WhipPaddle", "Whip", "CattleProd", "TennisRacket", "Feather", "FeatherDuster", "IceCube", "WartenbergWheel", "VibratingWand", "SmallVibratingWand", "CandleWax", "LargeDildo", "PetToy", "Vibrator", "Belt", "Hairbrush", "SmallDildo", "ElectricToothbrush", "Toothbrush"], DynamicPreviewIcon: C => InventorySpankingToysGetType(C),
				Extended: true,
				ParentGroup: null
			}, {
				Name: "SpankingToysCrop", Value: 20, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysFlogger", Value: 40, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysCane", Value: 15, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysHeartCrop", Value: 30, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysPaddle", Value: 35, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysWhipPaddle", Value: 25, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysWhip", Value: 50, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysCattleProd", Value: 45, Random: false, Activity: "ShockItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysTennisRacket", Value: -1, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysFeather", Value: 2, Random: false, Activity: "TickleItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysFeatherDuster", Value: 4, Random: false, Activity: "TickleItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysIceCube", Value: 3, Random: false, Activity: "RubItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysWartenbergWheel", Value: 10, Random: false, Activity: "RollItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysVibratingWand", Value: 40, Random: false, Activity: "MasturbateItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysSmallVibratingWand", Value: 20, Random: false, Activity: "MasturbateItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysCandleWax", Value: 10, Random: false, Activity: "PourItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysLargeDildo", Value: 30, Random: false, Activity: "RubItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysPetToy", Value: 5, Random: false, Activity: "TickleItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysVibrator", Value: 45, Random: false, Activity: "MasturbateItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysBelt", Value: 10, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysHairbrush", Value: 5, Random: false, Activity: "SpankItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysSmallDildo", Value: 20, Random: false, Activity: "RubItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysElectricToothbrush", Value: 20, Random: false, Activity: "TickleItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			}, {
				Name: "SpankingToysToothbrush", Value: 10, Random: false, Activity: "TickleItem", DynamicAllowInventoryAdd: () => { return false },
				PrerequisiteBuyGroups: ["SpankingToys"]
			},
			{ Name: "HoofMittens", Fetish: ["Pony"], Value: -1, Difficulty: 5, SelfBondage: 4, Time: 15, RemoveTime: 5, AllowLock: true, AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours", "OverTheHead"], SetPose: ["TapedHands"], Effect: ["Block", "Prone"] },
		],
		Color: ["Default"]
	},

	{
		Group: "ItemNeck",
		Category: "Item",
		Priority: 34,
		Default: false,
		Left: 185,
		Top: 160,
		Zone: [[200, 200, 100, 70]],
		RemoveItemOnRemove: [{ Group: "ItemNeckAccessories", Name: "" }, { Group: "ItemNeckRestraints", Name: "" }],
		Activity: ["Bite", "Kiss", "Lick", "Nibble", "Caress", "MassageHands", "Choke", "TickleItem", "RubItem", "RollItem"],
		Asset: [
			{ Name: "LeatherCollar", Fetish: ["Leather"], Value: 20, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LeatherCollarBell", Fetish: ["Leather"], Value: 30, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LeatherCollarBow", Fetish: ["Leather"], Value: 25, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "SlaveCollar", Value: -1, Difficulty: 50, Time: 5, Enable: false, Random: false, OwnerOnly: true, Effect: ["Lock"], AllowBlock: ["ItemMouth", "ItemMouth2", "ItemMouth3"], AllowEffect: ["GagNormal"], AllowType: ["SteelPosture", "LeatherPosture", "PetCollar", "HighCollar", "LeatherCollarBell", "LeatherCollarBow", "MaidCollar", "BatCollar", "HighSecurityCollar", "SpikeCollar", "BordelleCollar", "LeatherCorsetCollar", "StrictPostureCollar", "LatexPostureCollar", "HeartCollar", "NobleCorsetCollar", "OrnateCollar", "LoveLeatherCollar", "SlenderSteelCollar", "HeartLinkChoker", "NeckRope"], Extended: true },
			{ Name: "ClubSlaveCollar", Value: -1, Difficulty: 50, Time: 5, Enable: false, Random: false, Effect: ["Lock"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ShockCollar", Fetish: ["Leather", "Masochism"], Value: 80, Difficulty: 50, Time: 15, Random: false, AllowLock: true, BuyGroup: "ShockCollar", Effect: ["ReceiveShock"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AlwaysExtend: true, Activity: "ShockItem" },
			{ Name: "ShockCollarRemote", Value: -1, Random: false, Wear: false, BuyGroup: "ShockCollar", Activity: "ShockItem", Effect: ["TriggerShock"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }, { Name: "Soft", Group: "Blush", Timer: 15 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "BatCollar", Fetish: ["Leather"], Value: 25, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "PostureCollar", Fetish: ["Leather"], Value: 40, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "SteelPostureCollar", Fetish: ["Metal"], Value: 60, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "DogCollar", Fetish: ["Leather", "Pet"], Value: 20, Difficulty: 50, Time: 5, Random: false, AllowLock: true },
			{ Name: "SpikeCollar", Fetish: ["Leather", "Metal", "Pet"], Value: 40, Difficulty: 50, Time: 5, AllowLock: true },
			{
				Name: "HighCollar", Fetish: ["Leather", "Metal"], Value: 50, Difficulty: 50, Time: 5, AllowLock: true,
				Layer: [
					{ Name: "Leather", AllowColorize: true },
					{ Name: "Rings", AllowColorize: false }
				]
			},
			{ Name: "LeatherChoker", Fetish: ["Leather"], Value: 10, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "PetCollar", Fetish: ["Leather", "Pet"], Value: -1, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "MaidCollar", Fetish: ["Lingerie"], Value: 30, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "BordelleCollar", Fetish: ["Leather"], Value: 30, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LoveLeatherCollar", Fetish: ["Leather"], Value: 50, Difficulty: 50, Time: 5, Random: false, AllowLock: true, LoverOnly: false },
			{ Name: "StrictPostureCollar", Fetish: ["Leather"], Priority: 38, Value: 60, Difficulty: 50, Time: 30, RemoveTime: 40, AllowLock: true },
			{ Name: "NobleCorsetCollar", Fetish: ["Leather"], Value: 45, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "HeartCollar", Fetish: ["Leather"], Value: 50, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LatexPostureCollar", Fetish: ["Latex"], Priority: 38, Value: 80, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, IsRestraint: true, AllowLock: true, BuyGroup: "LatexPostureCollar", Effect: ["GagNormal"], },
			{ Name: "LeatherCorsetCollar", Fetish: ["Leather"], Priority: 38, Value: 75, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, IsRestraint: true, AllowLock: true, DefaultColor: "#404040", BuyGroup: "LeatherCorsetCollar", Effect: ["GagNormal"], },
			{ Name: "HighSecurityCollar", Fetish: ["Metal"], Value: 70, Difficulty: 50, Time: 5, AllowLock: true },
			{
				Name: "OrnateCollar", Fetish: ["Metal"], Value: 80, Difficulty: 50, Time: 5, AllowLock: true,
				Layer: [
					{ Name: "Collar", AllowColorize: true },
					{ Name: "Gem", AllowColorize: false }
				]
			},
			{ Name: "SlenderSteelCollar", Fetish: ["Metal"], Value: 30, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "HeartLinkChoker", Fetish: ["Leather"], Value: 15, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "NeckRope", Fetish: ["Rope"], Value: 60, Difficulty: 50, Time: 5, AllowLock: false, BuyGroup: "HempRope", DefaultColor: "#956B1C", ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 3 }, { Name: "Soft", Group: "Eyebrows", Timer: 3 }] },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemNeckAccessories",
		Category: "Item",
		Priority: 41,
		Default: false,
		Left: 0,
		Top: 190,
		Zone: [[100, 200, 100, 70]],
		Asset: [
			{ Name: "CollarBell", Fetish: ["Metal", "Pet"], Value: 5, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarBow", Fetish: ["Lingerie"], Value: 5, Difficulty: 1, Time: 5, Random: false, Prerequisite: "Collared" },
			{ Name: "CollarShockUnit", Fetish: ["Masochism"], Value: 80, Difficulty: 6, Time: 5, Random: false, AllowLock: true, BuyGroup: "ShockCollar", Prerequisite: "Collared", Effect: ["ReceiveShock"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }], Extended: true, AlwaysExtend: true, Activity: "ShockItem" },
			{ Name: "ShockCollarRemote", Value: -1, Random: false, Wear: false, BuyGroup: "ShockCollar", Activity: "ShockItem", Effect: ["TriggerShock"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }, { Name: "Soft", Group: "Blush", Timer: 15 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "CollarNameTag", Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, DefaultColor: "#aaa366", Prerequisite: "Collared", AllowType: ["Angel", "BadGirl", "BindMe", "Bitch", "Boobs", "Cupcake", "Devil", "Dom", "Free", "FuckMe", "GagMe", "Goddess", "GoodGirl", "HoldMe", "Jewel", "Love", "Maid", "Meat", "Miss", "Mummy", "Nice", "Needy", "Owned", "Precious", "Pudding", "Queen", "Slave", "Slut", "Sub", "Sweetie", "Taken", "Toy", "Useless", "UseMe", "Whore"], Extended: true },
			{ Name: "CollarNameTagOval", Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, DefaultColor: "#aaa366", Prerequisite: "Collared", AllowType: ["Babe", "Bandit", "Bimbo", "Bratty", "Chair", "Chaste", "Crazy", "Cumslut", "Cutie", "Damsel", "Doll", "EdgeMe", "Evil", "ForSale", "Greedy", "Happy", "Horny", "Kinky", "Lady", "LockMe", "Nude", "Nurse", "Nympho", "Painslut", "Pillow", "Punish", "Robber", "Sad", "Switch", "Table", "Ticklish", "Undress", "Victim", "Violent", "Worm"], Extended: true },
			{ Name: "CollarNameTagPet", Fetish: ["Pet"], Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, DefaultColor: "#aaa366", Prerequisite: "Collared", AllowType: ["Bunny", "Cat", "Dog", "Foxy", "Kitten", "Kitty", "Mochi", "Panda", "Pet", "PetMe", "Pixie", "Pony", "Puppy", "Racoon", "Sloth"], Extended: true },
			{ Name: "CollarNameTagLover", Value: -1, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, DefaultColor: "#aaa366", Prerequisite: "Collared", AllowType: ["Cookie", "Feather", "Lover", "Muffin"], Extended: true },
			{ Name: "CollarNameTagLivestock", Fetish: ["Pet"], Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, Prerequisite: "Collared", AllowType: ["Animal", "BreedMe", "Cow", "Meat", "MilkMe", "Pig"], Extended: true },
			{ Name: "CollarMoon", Value: 5, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarSun", Value: 10, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarLapis", Value: 10, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarPentagram", Value: 10, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarFlower", Value: 5, Difficulty: 1, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarRose", Value: 5, Difficulty: 1, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarCowBell", Fetish: ["Pet"], Fetish: ["Leather"], Value: 15, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarPupBone", Fetish: ["Pet"], Value: 25, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" }
		],
		Color: ["Default"]
	},

	{
		Group: "ItemNeckRestraints",
		Category: "Item",
		Priority: 40,
		Default: false,
		IsRestraint: true,
		Left: 0,
		Top: 190,
		Zone: [[300, 200, 100, 70]],
		Asset: [
			{ Name: "CollarChainLong", Fetish: ["Metal"], Value: 30, Difficulty: 6, Time: 5, Random: false, AllowLock: true, BuyGroup: "CollarChain", Prerequisite: ["Collared", "NotSuspended"], AllowPose: ["Kneel", "Horse", "KneelingSpread", "AllFours"], Effect: ["Tethered", "IsChained"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "CollarChainShort", Fetish: ["Metal"], Value: -1, Difficulty: 6, Time: 5, Random: false, AllowLock: true, BuyGroup: "CollarChain", Prerequisite: ["Collared", "AllFours", "NotSuspended", "NotMounted", "CanKneel"], AllowPose: ["AllFours"], SetPose: ["Kneel"], Effect: ["Freeze", "ForceKneel", "IsChained"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "CollarLeash", Fetish: ["Leather"], Value: 20, Difficulty: 6, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared", AllowPose: ["AllFours"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "CollarLeashTaken", Fetish: ["Leather"], Value: -1, Difficulty: 6, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared", AllowPose: ["AllFours"], Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ChainLeash", Fetish: ["Leather"], Value: 25, Difficulty: 6, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared", AllowPose: ["AllFours"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ChainLeashTaken", Fetish: ["Leather"], Value: -1, Difficulty: 6, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared", AllowPose: ["AllFours"], Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "CollarChainMedium", Fetish: ["Metal"], Value: -1, Difficulty: 6, Time: 5, Random: false, AllowLock: true, BuyGroup: "CollarChain", Prerequisite: ["Collared", "NotSuspended"], AllowPose: ["AllFours", "Kneel"], Effect: ["Tethered", "IsChained"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] }
		],
		Color: ["Default"]
	},

	{
		Group: "ItemMouth",
		Category: "Item",
		Priority: 35,
		Default: false,
		IsRestraint: true,
		Left: 150,
		Top: 0,
		Effect: ["BlockMouth", "GagNormal"],
		Zone: [[100, 130, 100, 70]],
		Activity: ["Bite", "Kiss", "FrenchKiss", "PoliteKiss", "Lick", "Nibble", "Caress", "HandGag", "TickleItem", "RubItem", "RollItem", "PenetrateSlow", "PenetrateFast"],
		Asset: [
			{ Name: "ClothGag", Value: 15, Difficulty: -4, Time: 10, DefaultColor: "#B0B0B0", BuyGroup: "ClothGag", Prerequisite: "GagFlat", SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagVeryLight"], AllowEffect: ["BlockMouth", "GagVeryLight", "GagLight", "GagEasy"], AllowType: ["Small", "Cleave", "OTM", "OTN"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Extended: true },
			{
				Name: "WiffleGag", Fetish: ["Leather"], Value: 30, Difficulty: 1, Time: 10, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "WiffleGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Fetish: ["Leather"], Value: 60, Difficulty: 4, Time: 20, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "HarnessBallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Fetish: ["Leather"], Value: 80, Difficulty: 6, Time: 20, AllowLock: true, DefaultColor: "#404040", BuyGroup: "HarnessPanelGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagEasy"] },
			{
				Name: "RingGag", Fetish: ["Leather", "Metal"], Value: 30, Time: 5, AllowLock: true, DefaultColor: "#404040", BuyGroup: "RingGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagEasy", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Fetish: ["Tape"], Value: 50, Difficulty: -2, Time: 10, RemoveTime: 5, BuyGroup: "DuctTape", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagVeryLight"], AllowEffect: ["BlockMouth", "GagVeryLight", "GagLight", "GagEasy", "GagNormal", "GagMedium"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], Extended: true },
			{ Name: "PacifierGag", Fetish: ["ABDL", "Leather"], Value: 10, Difficulty: -50, Time: 2, Random: false, BuyGroup: "PacifierGag", Hide: ["Mouth"], Effect: ["BlockMouth", "GagVeryLight"], Block: ["ItemMouth2", "ItemMouth3"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "HarnessPacifierGag", Fetish: ["ABDL", "Leather"], Value: 50, Difficulty: 2, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPacifierGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "DusterGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "DusterGag", Hide: ["Mouth"], Effect: ["BlockMouth", "GagEasy"], Block: ["ItemMouth2", "ItemMouth3"] },
			{
				Name: "CupholderGag", Fetish: ["Leather"], Priority: 42, Value: 30, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "CupholderGag", Hide: ["Mouth"], AllowType: ["Cup"], Extended: true, AlwaysExtend: true, AlwaysInteract: true, Effect: ["BlockMouth", "GagEasy"], Block: ["ItemMouth2", "ItemMouth3"],
				Layer: [
					{ Name: "Gag", AllowColorize: true, HasType: false, AllowTypes: ["", "Cup"] },
					{ Name: "Holder", AllowColorize: false, HasType: false, AllowTypes: ["", "Cup"] },
					{ Name: "Cup", AllowColorize: false, HasType: false, AllowTypes: ["Cup"] }
				]
			},
			{ Name: "HarnessPonyBits", Fetish: ["Leather", "Pony"], Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPonyBits", Prerequisite: "GagUnique", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagNormal"] },
			{ Name: "PumpGag", Fetish: ["Leather"], Value: 100, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "PumpGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth"], AllowEffect: ["BlockMouth", "GagLight", "GagEasy", "GagMedium", "GagVeryHeavy"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true },
			{ Name: "KittyGag", Fetish: ["Pet"], Value: 20, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", BuyGroup: "KittyGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "KittenHarnessPanelGag", Fetish: ["Leather", "Pet"], Value: 80, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#A0A0A0", BuyGroup: "KittenHarnessPanelGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagEasy"] },
			{ Name: "CarrotGag", Fetish: ["Leather", "Pony"], Value: 40, Difficulty: 3, Time: 15, Random: false, AllowLock: true, BuyGroup: "CarrotGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "MuzzleGag", Fetish: ["Leather"], Value: 70, Difficulty: 6, Time: 20, AllowLock: true, DefaultColor: "#404040", BuyGroup: "MuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"] },
			{ Name: "RegularSleepingPill", Value: -1, Enable: false, Wear: false, Bonus: [{ Factor: 3, Type: "KidnapSneakiness" }] },
			{ Name: "PantiesMask", Fetish: ["Lingerie"], Value: 20, Time: 15, Random: false, BuyGroup: "PantiesMask", Hide: ["Mouth"], Effect: ["BlockMouth", "GagVeryLight"], HideItem: ["ItemNoseNoseRing"] },
			{
				Name: "PlugGag", Fetish: ["Leather"], Value: 100, Time: 20, Random: false, AllowLock: true, BuyGroup: "PlugGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["GagMedium"], AllowEffect: ["BlockMouth", "GagMedium", "GagTotal", "OpenMouth"], AllowType: ["Open", "Plug"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true,
				Layer: [
					{ Name: "Strap", AllowColorize: true, HasType: false },
					{ Name: "Tongue", AllowColorize: false, HasType: false },
					{ Name: "Close", AllowColorize: true, AllowTypes: ["Plug"] }
				]
			},
			{
				Name: "DildoGag", Fetish: ["Leather"], Priority: 42, Value: 60, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "DildoGag", Prerequisite: "GagUnique", AllowActivity: ["Penetrate"], Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], Block: ["ItemMouth2", "ItemMouth3"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Fetish: ["Leather"], Value: 50, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "BoneGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{
				Name: "ChopstickGag", Fetish: ["Rope"], Value: 15, Difficulty: 2, Time: 10, BuyGroup: "ChopstickGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Chopsticks", AllowColorize: true },
					{ Name: "Tongue", AllowColorize: false }
				]
			},
			{
				Name: "BambooGag", Fetish: ["Rope"], Value: 30, Difficulty: 6, Time: 10, DefaultColor: "#A07858", BuyGroup: "BambooGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Rod", AllowColorize: false },
					{ Name: "Rope", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag1", Fetish: ["Leather"], Value: 75, Difficulty: 4, Time: 20, AllowLock: true, BuyGroup: "HarnessBallGag1", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagHeavy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "PumpkinGag", Fetish: ["Leather"], Value: 40, Difficulty: 1, Time: 10, Random: false, AllowLock: true, BuyGroup: "PumpkinGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{
				Name: "LipGag", Fetish: ["Leather"], Value: 40, Time: 5, AllowLock: true, BuyGroup: "LipGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagLight", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Fetish: ["Leather", "Metal"], Value: 45, Time: 5, AllowLock: true, BuyGroup: "SpiderGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagEasy", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "ClothStuffing", Value: 10, Difficulty: -20, Time: 5, BuyGroup: "ClothStuffing", Hide: ["Mouth"], Effect: ["BlockMouth", "GagLight"],
				Layer: [
					{ Name: "Cheeks", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			},
			{
				Name: "PantyStuffing", Fetish: ["Lingerie"], Value: 10, Difficulty: -20, Time: 5, DefaultColor: "#900000", BuyGroup: "PantyStuffing", Hide: ["Mouth"], Effect: ["BlockMouth", "GagLight"],
				Layer: [
					{ Name: "Lips", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: 40, Time: 2, Random: false, Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Effect: ["BlockMouth", "GagVeryLight"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }] },
			{ Name: "ScarfGag", Value: 15, Time: 10, BuyGroup: "ScarfGag", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagLight"] },
			{ Name: "LewdGag", Value: 70, Time: 10, Random: false, AllowLock: true, BuyGroup: "LewdGag", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "DeepthroatGag", Fetish: ["Leather"], Value: 55, Difficulty: 5, Time: 15, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "DeepthroatGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagHeavy"], ExpressionTrigger: [{ Name: "Raised", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "LeatherCorsetCollar", Fetish: ["Leather"], Value: 75, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "LeatherCorsetCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], SetPose: ["GagCorset"], Block: ["ItemNeck"] },
			{ Name: "LatexPostureCollar", Fetish: ["Latex"], Value: 80, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: "LatexPostureCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], SetPose: ["GagCorset"], Block: ["ItemNeck"] },
			{ Name: "BitGag", Fetish: ["Leather", "Pony"], Value: 40, Difficulty: 4, Time: 20, AllowLock: true, BuyGroup: "BitGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "XLBoneGag", Fetish: ["Leather", "Pet"], Value: 60, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "XLBoneGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "DogMuzzleExposed", Fetish: ["Leather", "Pet"], Value: 50, Difficulty: 7, Time: 10, Random: false, AllowLock: true, Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "FoxyHarnessPanelGag", Fetish: ["Leather", "Pet"], Value: 40, Difficulty: 6, Time: 20, Random: false, AllowLock: true, Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Block: ["ItemMouth2", "ItemMouth3"] },
			{
				Name: "BallGag", Fetish: ["Leather"], Value: 40, Difficulty: 2, Time: 10, AllowLock: true, BuyGroup: "BallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "TongueStrapGag", Fetish: ["Leather", "Metal"], Value: 35, Time: 15, AllowLock: true, BuyGroup: "TongueStrapGag", Hide: ["Mouth"], Effect: ["GagEasy", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "BallGagMask", Fetish: ["Leather"], Value: 90, Difficulty: 6, Time: 30, AllowLock: true, BuyGroup: "BallGagMask", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HookGagMask", Fetish: ["Leather"], Value: 70, Difficulty: 6, Time: 30, AllowLock: true, BuyGroup: "HookGagMask", Hide: ["Mouth"], Effect: ["GagEasy", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "DildoPlugGag", Fetish: ["Leather"], Value: 100, Time: 20, Random: false, AllowLock: true, BuyGroup: "DildoPlugGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagEasy"], AllowEffect: ["BlockMouth", "GagEasy", "GagTotal2", "OpenMouth"], AllowType: ["Plug"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true,
				Layer: [
					{ Name: "Strap", AllowColorize: true, HasType: false, },
					{ Name: "Tongue", AllowColorize: false, HasType: false },
					{ Name: "Close", AllowColorize: true, AllowTypes: ["Plug"] }
				]
			},
			{ Name: "SteelMuzzleGag", Fetish: ["Metal"], Value: 80, Difficulty: 8, Time: 30, AllowLock: true, BuyGroup: "SteelMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"] },
			{ Name: "StitchedMuzzleGag", Fetish: ["Leather"], Value: 60, Difficulty: 5, Time: 15, AllowLock: true, BuyGroup: "StitchedMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagEasy"] },
			{ Name: "LatexBallMuzzleGag", Fetish: ["Latex"], Value: 65, Difficulty: 6, Time: 15, AllowLock: true, BuyGroup: "LatexBallMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagMedium"] },
			{
				Name: "SockStuffing", Value: 10, Difficulty: -20, Time: 5, DefaultColor: "#FFFFFF", BuyGroup: "SockStuffing", Hide: ["Mouth"], Effect: ["BlockMouth", "GagLight"],
				Layer: [
					{ Name: "Lips", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			},
			{ Name: "GasMaskGag", Fetish: ["Leather"], Priority: 42, Value: 40, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "GasMaskGag", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Effect: ["BlockMouth", "GagEasy"], Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "WebGag", Fetish: ["Tape"], Value: 30, Difficulty: 3, Time: 5, RemoveTime: 10, BuyGroup: "WebGag", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagEasy"] },
			{ Name: "RopeGag", Fetish: ["Rope"], Value: 60, Difficulty: 3, Time: 20, RemoveTime: 10, BuyGroup: "HempRope", Prerequisite: "GagUnique", DefaultColor: "#956B1C", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"] },
			{ Name: "MilkBottle", Fetish: ["ABDL"], Priority: 42, Value: 30, Difficulty: -50, Time: 1, Random: false, AllowLock: false, Left: 199, Top: 0, BuyGroup: "MilkBottle", Prerequisite: "GagUnique", Effect: ["GagVeryLight"], Block: ["ItemMouth2", "ItemMouth3"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], ParentGroup: null, Extended: true, AllowType: ["Rest", "Raised", "Chug"] },
			{
				Name: "MedicalMask", Value: 25, Time: 10, Random: false, BuyGroup: "MedicalMask", Hide: ["Mouth"], Effect: ["BlockMouth"], HideItem: ["ItemNoseNoseRing"],
				Layer: [
					{ Name: "Inner", AllowColorize: false },
					{ Name: "Outer", AllowColorize: true }
				]
			},
			{ Name: "RegressedMilk", Fetish: ["ABDL"], Value: -1, Time: 10, IsRestraint: false,Random: false, Visible: false, BuyGroup: "RegressedMilk", Block: [], Effect: ["RegressedTalk"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }]},
			{
				Name: "PrisonLockdownGag", Value: -1, Difficulty: 5, Time: 20, AllowLock: true, BuyGroup: "PrisonLockdownSuit", Prerequisite: "GagFlat", DefaultColor: "#8c4309", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"],
				Layer: [
					{ Name: "Mask" },
					{ Name: "Straps", AllowColorize: false, }
				]
			},
			{ Name: "ShoeGag", Fetish: ["Leather"], Priority: 42, Value: 30, Difficulty: 4, Time: 20, Random: false, BuyGroup: "ShoeGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagMedium"], Block: ["ItemMouth2", "ItemMouth3"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 25 }, { Name: "Daydream", Group: "Eyes", Timer: 10 }] },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemMouth2",
		Category: "Item",
		Priority: 36,
		Default: false,
		IsRestraint: true,
		Left: 150,
		Top: 0,
		Block: ["ItemMouth"],
		Effect: ["BlockMouth", "GagNormal"],
		Zone: [[200, 130, 100, 70]],
		Asset: [
			{ Name: "ClothGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#B0B0B0", BuyGroup: "ClothGag", Prerequisite: "GagFlat", SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy"], AllowType: ["Small", "Cleave", "OTM", "OTN"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Extended: true },
			{
				Name: "WiffleGag", Fetish: ["Leather"], Value: -1, Difficulty: 1, Time: 10, Random: false, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "WiffleGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Fetish: ["Leather"], Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "HarnessBallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Fetish: ["Leather"], Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "HarnessPanelGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagEasy"] },
			{
				Name: "RingGag", Value: -1, Time: 5, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "RingGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Fetish: ["Tape"], Value: -1, Difficulty: -2, Time: 10, RemoveTime: 5, Random: false, BuyGroup: "DuctTape", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagVeryLight"], AllowEffect: ["BlockMouth", "GagVeryLight", "GagLight", "GagEasy", "GagNormal", "GagMedium"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], Extended: true },
			{ Name: "HarnessPacifierGag", Fetish: ["Leather", "ABDL"], Value: -1, Difficulty: 2, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPacifierGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "DusterGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "DusterGag", Hide: ["Mouth"], Effect: ["BlockMouth", "GagEasy"], Block: ["ItemMouth", "ItemMouth3"] },
			{
				Name: "CupholderGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "CupholderGag", Hide: ["Mouth"], AllowType: ["Cup"], Extended: true, AlwaysExtend: true, AlwaysInteract: true, Effect: ["BlockMouth", "GagEasy"], Block: ["ItemMouth", "ItemMouth3"],
				Layer: [
					{ Name: "Gag", AllowColorize: true, HasType: false, AllowTypes: ["", "Cup"] },
					{ Name: "Holder", AllowColorize: false, HasType: false, AllowTypes: ["", "Cup"] },
					{ Name: "Cup", AllowColorize: false, HasType: false, AllowTypes: ["Cup"] }
				]
			},
			{ Name: "HarnessPonyBits", Fetish: ["Leather", "Pony"], Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPonyBits", Prerequisite: "GagUnique", SetPose: ["GagUnique"] },
			{ Name: "KittyGag", Fetish: ["Pet"], Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", BuyGroup: "KittyGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "KittenHarnessPanelGag", Fetish: ["Leather", "Pet"], Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#A0A0A0", BuyGroup: "KittenHarnessPanelGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagEasy"] },
			{ Name: "CarrotGag", Fetish: ["Leather", "Pony"], Value: -1, Difficulty: 3, Time: 15, Random: false, AllowLock: true, BuyGroup: "CarrotGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "MuzzleGag", Fetish: ["Leather"], Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "MuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"] },
			{ Name: "PantiesMask", Fetish: ["Lingerie"], Value: -1, Time: 15, Random: false, BuyGroup: "PantiesMask", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Effect: ["BlockMouth", "GagVeryLight"] },
			{
				Name: "DildoGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "DildoGag", Prerequisite: "GagFlat", AllowActivity: ["Penetrate"], Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagMedium"], Block: ["ItemMouth", "ItemMouth3"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Fetish: ["Leather", "Pet"], Value: -1, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "BoneGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{
				Name: "HarnessBallGag1", Fetish: ["Leather"], Value: -1, Difficulty: 4, Time: 20, AllowLock: true, BuyGroup: "HarnessBallGag1", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagHeavy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "PumpkinGag", Fetish: ["Leather"], Value: -1, Difficulty: 1, Time: 10, Random: false, AllowLock: true, BuyGroup: "PumpkinGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{
				Name: "LipGag", Fetish: ["Leather"], Value: -1, Time: 5, Random: false, AllowLock: true, BuyGroup: "LipGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagLight", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Fetish: ["Leather", "Metal"], Value: -1, Time: 5, Random: false, AllowLock: true, BuyGroup: "SpiderGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagEasy", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: -1, Time: 2, Random: false, BuyGroup: "ChloroformCloth", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagVeryLight"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }] },
			{ Name: "ScarfGag", Value: -1, Time: 10, Random: false, BuyGroup: "ScarfGag", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagLight"] },
			{ Name: "LewdGag", Value: -1, Time: 10, Random: false, AllowLock: true, BuyGroup: "LewdGag", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "LeatherCorsetCollar", Fetish: ["Leather"], Value: -1, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "LeatherCorsetCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], SetPose: ["GagCorset"], Block: ["ItemNeck", "ItemMouth"] },
			{ Name: "LatexPostureCollar", Fetish: ["Latex"], Value: -1, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: "LatexPostureCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], SetPose: ["GagCorset"], Block: ["ItemNeck", "ItemMouth"] },
			{ Name: "BitGag", Fetish: ["Leather", "Pony"], Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "BitGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "XLBoneGag", Fetish: ["Leather", "Pet"], Value: -1, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "XLBoneGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "BallGag", Fetish: ["Leather"], Value: -1, Difficulty: 2, Time: 10, AllowLock: true, BuyGroup: "BallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Layer: [{ Name: "Strap", AllowColorize: false }, { Name: "Ball", AllowColorize: true }] },
			{
				Name: "BallGagMask", Fetish: ["Leather"], Value: -1, Difficulty: 6, Time: 30, AllowLock: true, BuyGroup: "BallGagMask", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "SteelMuzzleGag", Fetish: ["Leather", "Metal"], Value: -1, Difficulty: 8, Time: 30, AllowLock: true, BuyGroup: "SteelMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"] },
			{ Name: "StitchedMuzzleGag", Fetish: ["Leather"], Value: -1, Difficulty: 5, Time: 15, AllowLock: true, BuyGroup: "StitchedMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagEasy"] },
			{ Name: "LatexBallMuzzleGag", Fetish: ["Latex"], Value: -1, Difficulty: 6, Time: 15, AllowLock: true, BuyGroup: "LatexBallMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagMedium"] },
			{ Name: "GasMaskGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "GasMaskGag", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Effect: ["BlockMouth", "GagEasy"], Prerequisite: "GagFlat", SetPose: ["GagFlat"], Block: ["ItemMouth", "ItemMouth3"] },
			{ Name: "WebGag", Fetish: ["Tape"], Value: -1, Difficulty: 3, Time: 5, RemoveTime: 10, BuyGroup: "WebGag", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagLight"] },
			{ Name: "RopeGag", Fetish: ["Rope"], Value: -1, Difficulty: 3, Time: 20, RemoveTime: 10, Prerequisite: "GagUnique", DefaultColor: "#956B1C", BuyGroup: "HempRope", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"] },
			{
				Name: "MedicalMask", Value: -1, Time: 10, Random: false, BuyGroup: "MedicalMask", Hide: ["Mouth"], Effect: ["BlockMouth"], HideItem: ["ItemNoseNoseRing"],
				Layer: [
					{ Name: "Inner", AllowColorize: false },
					{ Name: "Outer", AllowColorize: true }
				]
			},
			{ Name: "RegressedMilk", Fetish: ["ABDL"], Value: -1, Time: 10, IsRestraint: false,Random: false, Visible: false, BuyGroup: "RegressedMilk", Block: [], Effect: ["RegressedTalk"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }]},
			{
				Name: "PrisonLockdownGag", Value: -1, Difficulty: 5, Time: 20, AllowLock: true, BuyGroup: "PrisonLockdownSuit", Prerequisite: "GagFlat", DefaultColor: "#8c4309", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"],
				Layer: [
					{ Name: "Mask" },
					{ Name: "Straps", AllowColorize: false, }
				]
			},
		{ Name: "ShoeGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, BuyGroup: "ShoeGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagMedium"], Block: ["ItemMouth", "ItemMouth3"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 25 }, { Name: "Daydream", Group: "Eyes", Timer: 10 }] },
	],
		Color: ["Default"]
	},

	{
		Group: "ItemMouth3",
		Category: "Item",
		Priority: 37,
		Default: false,
		IsRestraint: true,
		Left: 150,
		Top: 0,
		Block: ["ItemMouth", "ItemMouth2"],
		Effect: ["BlockMouth", "GagNormal"],
		Zone: [[300, 130, 100, 70]],
		Asset: [
			{ Name: "ClothGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#B0B0B0", BuyGroup: "ClothGag", Effect: ["BlockMouth", "GagVeryLight"], AllowEffect: ["BlockMouth", "GagVeryLight", "GagLight", "GagEasy"], AllowType: ["Small", "Cleave", "OTM", "OTN"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Extended: true },
			{
				Name: "WiffleGag", Fetish: ["Leather"], Value: -1, Difficulty: 1, Time: 10, Random: false, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "WiffleGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Fetish: ["Leather"], Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "HarnessBallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Fetish: ["Leather"], Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "HarnessPanelGag", Hide: ["Mouth"], Effect: ["BlockMouth", "GagEasy"] },
			{
				Name: "RingGag", Fetish: ["Leather", "Metal"], Value: -1, Time: 5, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "RingGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Fetish: ["Tape"], Value: -1, Difficulty: -2, Time: 10, RemoveTime: 5, Random: false, BuyGroup: "DuctTape", Hide: ["Mouth"], Effect: ["BlockMouth", "GagVeryLight"], AllowEffect: ["BlockMouth", "GagVeryLight", "GagLight", "GagEasy", "GagNormal", "GagMedium"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], Extended: true },
			{ Name: "HarnessPacifierGag", Fetish: ["Leather", "ABDL"], Value: -1, Difficulty: 2, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPacifierGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "DusterGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "DusterGag", Hide: ["Mouth"], Effect: ["BlockMouth", "GagEasy"] },
			{
				Name: "CupholderGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "CupholderGag", Hide: ["Mouth"], AllowType: ["Cup"], Extended: true, AlwaysExtend: true, AlwaysInteract: true, Effect: ["BlockMouth", "GagEasy"],
				Layer: [
					{ Name: "Gag", AllowColorize: true, HasType: false, AllowTypes: ["", "Cup"] },
					{ Name: "Holder", AllowColorize: false, HasType: false, AllowTypes: ["", "Cup"] },
					{ Name: "Cup", AllowColorize: false, HasType: false, AllowTypes: ["Cup"] }
				]
			},
			{ Name: "HarnessPonyBits", Fetish: ["Leather", "Pony"], Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPonyBits", Prerequisite: "GagUnique", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagNormal"] },
			{ Name: "KittyGag", Fetish: ["Pet"], Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", BuyGroup: "KittyGag", Hide: ["Mouth"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "KittenHarnessPanelGag", Fetish: ["Leather", "Pet"], Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#A0A0A0", BuyGroup: "KittenHarnessPanelGag", Hide: ["Mouth"], Effect: ["BlockMouth", "GagEasy"] },
			{ Name: "CarrotGag", Fetish: ["Leather", "Pony"], Value: -1, Difficulty: 3, Time: 15, Random: false, AllowLock: true, BuyGroup: "CarrotGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "MuzzleGag", Fetish: ["Leather"], Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "MuzzleGag", Hide: ["Mouth"] },
			{ Name: "PantiesMask", Fetish: ["Lingerie"], Value: -1, Time: 15, Random: false, BuyGroup: "PantiesMask", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Effect: ["BlockMouth", "GagVeryLight"] },
			{
				Name: "DildoGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "DildoGag", Prerequisite: "GagFlat", AllowActivity: ["Penetrate"], Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagMedium"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Fetish: ["Leather", "Pet"], Value: -1, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "BoneGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{
				Name: "HarnessBallGag1", Value: -1, Difficulty: 4, Time: 20, AllowLock: true, BuyGroup: "HarnessBallGag1", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagHeavy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "PumpkinGag", Fetish: ["Leather"], Value: -1, Difficulty: 1, Time: 10, Random: false, AllowLock: true, BuyGroup: "PumpkinGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{
				Name: "LipGag", Fetish: ["Leather"], Value: -1, Time: 5, Random: false, AllowLock: true, BuyGroup: "LipGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagLight", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Fetish: ["Leather", "Metal"], Value: -1, Time: 5, Random: false, AllowLock: true, BuyGroup: "SpiderGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["GagEasy", "OpenMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: -1, Time: 2, Random: false, BuyGroup: "ChloroformCloth", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagVeryLight"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }] },
			{ Name: "ScarfGag", Value: -1, Time: 10, Random: false, BuyGroup: "ScarfGag", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Effect: ["BlockMouth", "GagLight"] },
			{ Name: "LewdGag", Value: -1, Time: 10, Random: false, AllowLock: true, BuyGroup: "LewdGag", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Effect: ["BlockMouth", "GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "LeatherCorsetCollar", Fetish: ["Leather"], Value: -1, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "LeatherCorsetCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], SetPose: ["GagCorset"], Block: ["ItemNeck", "ItemMouth", "ItemMouth2"] },
			{ Name: "LatexPostureCollar", Fetish: ["Latex"], Value: -1, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: "LatexPostureCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], SetPose: ["GagCorset"], Block: ["ItemNeck", "ItemMouth", "ItemMouth2"] },
			{ Name: "BitGag", Fetish: ["Leather", "Pony"], Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "BitGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "XLBoneGag", Fetish: ["Leather", "Pet"], Value: -1, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "XLBoneGag", Prerequisite: "GagUnique", SetPose: ["GagUnique"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }] },
			{ Name: "BallGag", Fetish: ["Leather"], Value: -1, Difficulty: 2, Time: 10, AllowLock: true, BuyGroup: "BallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Layer: [{ Name: "Strap", AllowColorize: false }, { Name: "Ball", AllowColorize: true }] },
			{
				Name: "BallGagMask", Fetish: ["Leather"], Value: -1, Difficulty: 6, Time: 30, AllowLock: true, BuyGroup: "BallGagMask", Prerequisite: "GagUnique", Hide: ["Mouth"], SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "SteelMuzzleGag", Fetish: ["Metal"], Value: -1, Difficulty: 8, Time: 30, AllowLock: true, BuyGroup: "SteelMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"] },
			{ Name: "StitchedMuzzleGag", Fetish: ["Leather"], Value: -1, Difficulty: 5, Time: 15, AllowLock: true, BuyGroup: "StitchedMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagEasy"] },
			{ Name: "LatexBallMuzzleGag", Fetish: ["Latex"], Value: -1, Difficulty: 6, Time: 15, AllowLock: true, BuyGroup: "LatexBallMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagMedium"] },
			{ Name: "GasMaskGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "GasMaskGag", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], Effect: ["BlockMouth", "GagEasy"], Prerequisite: "GagFlat", SetPose: ["GagFlat"], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "WebGag", Fetish: ["Tape"], Value: -1, Difficulty: 3, Time: 5, RemoveTime: 10, BuyGroup: "WebGag", Prerequisite: "GagFlat", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagLight"] },
			{ Name: "RopeGag", Fetish: ["Rope"], Value: -1, Difficulty: 3, Time: 20, RemoveTime: 10, Prerequisite: "GagUnique", DefaultColor: "#956B1C", BuyGroup: "HempRope", SetPose: ["GagUnique"], Effect: ["BlockMouth", "GagLight"] },
			{
				Name: "MedicalMask", Value: -1, Time: 10, Random: false, BuyGroup: "MedicalMask", Hide: ["Mouth"], Effect: ["BlockMouth"], HideItem: ["ItemNoseNoseRing"],
				Layer: [
					{ Name: "Inner", AllowColorize: false },
					{ Name: "Outer", AllowColorize: true }
				]
			},
			{ Name: "RegressedMilk", Fetish: ["ABDL"], Value: -1, Time: 10, IsRestraint: false,Random: false, Visible: false, BuyGroup: "RegressedMilk", Block: [], Effect: ["RegressedTalk"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }]},
			{
				Name: "PrisonLockdownGag", Value: -1, Difficulty: 5, Time: 20, AllowLock: true, BuyGroup: "PrisonLockdownSuit", Prerequisite: "GagFlat", DefaultColor: "#8c4309", Hide: ["Mouth"], HideItem: ["ItemNoseNoseRing"], SetPose: ["GagFlat"],
				Layer: [
					{ Name: "Mask" },
					{ Name: "Straps", AllowColorize: false, }
				]
			},
			{ Name: "ShoeGag", Fetish: ["Leather"], Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, BuyGroup: "ShoeGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"], Effect: ["BlockMouth", "GagMedium"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 25 }, { Name: "Daydream", Group: "Eyes", Timer: 10 }] },
		],
		Color: ["Default"]
	},

	{
		Group: "ItemHead",
		Category: "Item",
		Priority: 44,
		Default: false,
		IsRestraint: true,
		Left: 150,
		Top: 20,
		Zone: [[175, 0, 150, 65]],
		Block: ["ItemNose"],
		Activity: ["Bite", "Kiss", "Slap", "Caress", "TakeCare", "Pet", "Pull", "Rub", "TickleItem", "RubItem"],
		Asset: [
			{ Name: "ClothBlindfold", Value: 15, Time: 5, DefaultColor: "#A0A0A0", Hide: ["Glasses"], Effect: ["BlindLight", "Prone"] },
			{ Name: "LeatherBlindfold", Fetish: ["Leather"], Value: 30, Time: 5, AllowLock: true, DefaultColor: "#404040", Hide: ["Glasses"], Effect: ["BlindNormal", "Prone"] },
			{ Name: "LeatherSlimMask", Fetish: ["Leather"], Value: 70, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3"], Effect: ["BlindHeavy", "Prone", "GagLight", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNose"] },
			{ Name: "LeatherSlimMaskOpenMouth", Fetish: ["Leather"], Value: 70, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["Glasses"], Effect: ["BlindHeavy", "Prone"], Block: ["ItemEars", "ItemNose"] },
			{ Name: "LeatherSlimMaskOpenEyes", Fetish: ["Leather"], Value: 70, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["ItemMouth", "ItemMouth2", "ItemMouth3"], Effect: ["GagLight", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNose"] },
			{ Name: "StuddedBlindfold", Fetish: ["Leather", "Metal"], Value: -1, Difficulty: 2, Time: 5, AllowLock: true, DefaultColor: "#FF4040", Hide: ["Glasses"], Effect: ["BlindNormal", "Prone"] },
			{ Name: "KittyBlindfold", Fetish: ["Pet"], Value: 25, Time: 5, AllowLock: true, DefaultColor: "#A0A0A0", Hide: ["Glasses"], Effect: ["BlindLight", "Prone"] },
			{ Name: "DuctTape", Fetish: ["Tape"], Value: 50, Time: 10, RemoveTime: 5, BuyGroup: "DuctTape", Hide: ["Glasses"], AllowBlock: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemHood", "ItemNose"], AllowEffect: ["BlindNormal", "Prone", "GagNormal", "BlockMouth"], AllowType: ["Double", "Wrap", "Mummy"], Effect: ["BlindNormal", "Prone"], Extended: true },
			{ Name: "SmallBlindfold", Fetish: ["Leather"], Value: 40, Time: 5, AllowLock: true, DefaultColor: "#404040", Hide: ["Glasses"], Effect: ["BlindLight", "Prone"] },
			{ Name: "FullBlindfold", Fetish: ["Latex"], Priority: 30, Value: 40, Difficulty: 6, Time: 5, AllowLock: true, DefaultColor: "#353535", Hide: ["Glasses"], Effect: ["BlindHeavy", "Prone"] },
			{ Name: "LewdBlindfold", Priority: 30, Value: 45, Time: 5, Random: false, AllowLock: true, Hide: ["Glasses", "Mask"], Effect: ["BlindLight", "Prone"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "LatexBlindfold", Fetish: ["Latex"], Value: 35, Time: 5, AllowLock: true, Hide: ["Glasses", "Mask"], Effect: ["BlindNormal", "Prone"] },
			{ Name: "FrilledSleepMask", Fetish: ["Lingerie"], Value: 5, Time: 5, Hide: ["Glasses", "Mask"], Effect: ["BlindLight", "Prone"] },
			{ Name: "BlackoutLenses", Value: 60, Difficulty: 10, Random: false, DefaultColor: "#333333", OverrideBlinking: true, Hide: ["Glasses", "Eyes", "Eyes2", "Mask"], Block: [], Effect: ["BlindHeavy", "Prone"] },
			{ Name: "WebBlindfold", Fetish: ["Tape"], Value: 50, Difficulty: 5, Time: 10, RemoveTime: 20, Random: false, Hide: ["Glasses", "Mask"], AllowBlock: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemHood", "ItemNose"], AllowEffect: ["BlindHeavy", "GagNormal", "BlockMouth"], AllowType: ["Cocoon"], Effect: ["BlindLight", "Prone"], Extended: true },
			{ Name: "RopeBlindfold", Fetish: ["Rope"], Value: 60, Time: 15, DefaultColor: "#956B1C", BuyGroup: "HempRope", Hide: ["Glasses", "Mask"], Effect: ["BlindLight", "Prone"] },
			{ Name: "SleepMask", Value: 5, Time: 5, Hide: ["Glasses", "Mask"], Effect: ["BlindLight", "Prone"] },
			{ Name: "PrisonLockdownBlindfold", Priority: 34, Value: -1, Time: 5, BuyGroup: "PrisonLockdownSuit", DefaultColor: "#77511f", Hide: ["Glasses"], Effect: ["BlindNormal", "Prone"] },
			{ Name: "Pantyhose", Value: 10, Time: 5, Hide: ["Glasses", "Mask", "HairFront", "HairBack", "HairAccessory1", "HairAccessory2"], BuyGroup: "Pantyhose", Effect: ["BlindLight", "Prone"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemNose"] },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemNose",
		Category: "Item",
		Priority: 33,
		Default: false,
		IsRestraint: true,
		Left: 150,
		Top: 20,
		Zone: [[175, 65, 150, 65]],
		Activity: ["Lick", "Choke", "Nibble", "Bite", "Kiss", "Pinch", "Caress", "Pet", "Pull", "Cuddle", "Rub", "TickleItem", "RubItem"],
		Asset: [
			{
				Name: "NoseHook", Fetish: ["Metal"], Priority: 26, Value: 25, Difficulty: 20, Time: 15, Random: false, AllowLock: true, Layer: [
					{ Name: "Band", AllowColorize: true },
					{ Name: "Hook", AllowColorize: false },
				]
			},
			{ Name: "NoseRing", Priority: 43, Fetish: ["Metal"], Value: 25, Difficulty: 50, Time: 15, Random: false, AllowLock: true, Left: 50, AllowEffect: ["Tethered", "Freeze", "ForceKneel", "IsChained"], AllowType: ["Base", "ChainShort", "ChainLong", "Leash"], AllowPose: ["Kneel"], Extended: true },
			{ Name: "DuctTape", Fetish: ["Tape"], Value: 50, BuyGroup: "DuctTape", Difficulty: 2, Time: 10, RemoveTime: 5},
			{ Name: "NosePlugs", Value: 20, Difficulty: 3, Time: 5, RemoveTime: 5},
			AssetSpankingToys
		],
	},
	{
		Group: "ItemHood",
		Category: "Item",
		Priority: 45,
		Default: false,
		IsRestraint: true,
		Block: ["ItemHead", "ItemNose", "ItemEars"],
		Left: 150,
		Top: 20,
		Zone: [[325, 0, 75, 130]],
		Asset: [
			{ Name: "LeatherHoodSealed", Fetish: ["Leather"], Value: 70, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied", "CanUseAlphaHood"], Hide: ["Head", "HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Hat", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["BlindHeavy", "Prone", "GagLight", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck", "ItemHead", "ItemNose"] },
			{ Name: "PolishedSteelHood", Fetish: ["Metal"], Value: 85, Difficulty: 50, Time: 15, AllowLock: true, Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Mask"], HideItem: ["HatBand1", "HatBand2", "HatTiara1"], Effect: ["BlindHeavy", "DeafLight", "Prone", "GagHeavy", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemNeck", "ItemHead", "ItemNose", "ItemEars"] },
			{ Name: "InflatedBallHood", Fetish: ["Latex"], Value: 65, Difficulty: 50, Time: 15, AllowLock: true, Prerequisite: ["GagUnique"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "ItemHat", "Mask"], Effect: ["BlindHeavy", "DeafLight", "Prone", "BlockMouth"], AllowEffect: ["GagLight", "GagEasy", "GagMedium", "GagVeryHeavy", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemNeck", "ItemHead", "ItemNose", "ItemEars"], Extended: true },
			{
				Name: "OldGasMask", Fetish: ["Leather"], Value: 85, Difficulty: 25, Time: 10, Random: false, AllowLock: true, Prerequisite: ["GasMask"], DefaultColor: "#313131", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemNeck", "ItemHead", "ItemNose", "ItemEars"], Extended: true, RemoveItemOnRemove: [{ Group: "ItemHoodAddon", Name: "" }], Layer: [
					{ Name: "Mask", AllowColorize: true },
					{ Name: "Light", AllowColorize: false }
				]
			},
			{ Name: "SackHood", Fetish: ["Rope"], Value: 20, Difficulty: 3, Time: 5, Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Hat", "Mask"], Effect: ["Prone", "BlindHeavy", "BlockMouth"], Block: ["ItemEars", "ItemMouth", "ItemMouth2", "ItemMouth3", "ItemHead", "ItemNose"] },
			{ Name: "LeatherHoodSensDep", Fetish: ["Leather"], Value: 100, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied", "CanUseAlphaHood"], Hide: ["Head", "HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Hat", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["BlindHeavy", "DeafHeavy", "Prone", "GagHeavy", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck", "ItemHead", "ItemNose"] },
			{ Name: "LatexHoodOpenHair", Fetish: ["Latex"], Value: 45, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied", "CanUseAlphaHood"], Hide: ["HairFront", "HairBack", "Hat", "HairAccessory1", "HairAccessory2", "Mask"], Alpha: [[150, 50, 200, 87]], Block: ["ItemEars", "ItemHead", "ItemNose"] },
			{ Name: "LeatherHood", Fetish: ["Leather"], Value: 60, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["BlindHeavy", "DeafLight", "Prone", "GagNormal", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck", "ItemHead", "ItemNose"] },
			{ Name: "LeatherHoodOpenEyes", Fetish: ["Leather"], Value: 40, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2"], Effect: ["GagLight", "BlockMouth"], Block: ["ItemHead", "ItemNose", "ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"] },
			{ Name: "GasMask", Fetish: ["Leather"], Value: 50, Difficulty: 25, Time: 10, Random: false, AllowLock: true, DefaultColor: "#585858", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck", "ItemHead", "ItemNose"] },
			{ Name: "DogHood", Fetish: ["Leather", "Pet"], Value: 60, Difficulty: 50, Time: 15, Random: false, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["GagNormal", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemHead", "ItemNose"] },
			{ Name: "FoxyMask", Fetish: ["Pet"], Value: 50, Difficulty: 2, Time: 15, Random: false, AllowLock: true, Effect: ["GagLight", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemHead", "ItemNose"] },
			{ Name: "PonyHood", Fetish: ["Pony"], Value: -1, Difficulty: 50, Time: 15, Random: false, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["BlindHeavy", "DeafLight", "Prone", "GagNormal", "BlockMouth"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck", "ItemHead", "ItemNose"] },
			{ Name: "LeatherHoodOpenMouth", Fetish: ["Leather"], Value: 50, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["Prone", "BlindHeavy"], Block: ["ItemEars", "ItemHead", "ItemNose"] },
			{ Name: "CanvasHood", Value: 50, Difficulty: 20, Time: 15, AllowLock: true, DefaultColor: "#a5a095", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Mask"], Effect: ["Prone", "BlindHeavy", "GagHeavy", "BlockMouth", "DeafLight"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNose", "ItemHead"] },
			{ Name: "Pantyhose", Value: 10, Time: 5, Hide: ["Glasses", "Mask", "HairFront", "HairBack", "HairAccessory1", "HairAccessory2"], BuyGroup: "Pantyhose", Effect: ["BlindLight", "Prone"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemNose", "ItemHead"] }
		],
	},

	{
		Group: "ItemEars",
		Category: "Item",
		Priority: 1,
		Default: false,
		IsRestraint: true,
		Left: 150,
		Top: 50,
		Zone: [[100, 0, 75, 130]],
		Activity: ["Kiss", "Lick", "Nibble", "Pinch", "Caress", "Whisper", "TickleItem", "RubItem", "RollItem"],
		Asset: [
			{ Name: "LightDutyEarPlugs", Value: 15, Difficulty: 50, Time: 5, Visible: false, Effect: ["DeafLight"] },
			{ Name: "HeavyDutyEarPlugs", Value: 30, Difficulty: 50, Time: 5, Visible: false, Effect: ["DeafHeavy"] },
			{ Name: "HeadphoneEarPlugs", Value: 50, Difficulty: 50, Time: 5, Visible: false, Effect: [""], AllowEffect: ["DeafLight", "DeafHeavy"], AllowType: ["Off", "Light", "Heavy"], Extended: true },
			{ Name: "BluetoothEarbuds", Value: 50, Difficulty: 50, Time: 5, Visible: false, Effect: [""], AllowEffect: ["DeafLight", "DeafHeavy"], AllowType: ["Off", "Light", "Heavy"], Extended: true, AlwaysExtend: true },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemMisc",
		Category: "Item",
		Priority: 48,
		Default: false,
		Top: -250,
		Zone: [[10, 0, 90, 200]],
		Asset: [
			{ Name: "MetalPadlock", Value: 15, Time: 10, Wear: false, Effect: [], IsLock: true },
			{ Name: "IntricatePadlock", Value: 50, Time: 30, Wear: false, Effect: [], IsLock: true },
			{ Name: "TimerPadlock", Value: 80, Wear: false, Effect: [], IsLock: true, MaxTimer: 300, RemoveTimer: 300 },
			{ Name: "CombinationPadlock", Value: 100, Random: false, Wear: false, Effect: [], IsLock: true },
			{ Name: "OwnerPadlock", Value: 60, Time: 10, Wear: false, OwnerOnly: true, Effect: [], IsLock: true },
			{ Name: "OwnerTimerPadlock", Value: 100, Wear: false, OwnerOnly: true, Effect: [], IsLock: true, MaxTimer: 604800, RemoveTimer: 300 },
			{ Name: "LoversPadlock", Value: 60, Time: 10, Wear: false, LoverOnly: true, Effect: [], IsLock: true },
			{ Name: "LoversTimerPadlock", Value: 100, Wear: false, LoverOnly: true, Effect: [], IsLock: true, MaxTimer: 604800, RemoveTimer: 300 },
			{ Name: "MistressPadlock", Value: -1, Time: 10, Wear: false, Effect: [], IsLock: true },
			{ Name: "MistressTimerPadlock", Value: -1, Wear: false, Effect: [], IsLock: true, MaxTimer: 14400, RemoveTimer: 300 },
			{ Name: "ExclusivePadlock", Value: 50, Time: 10, Wear: false, Effect: [], IsLock: true },
			{ Name: "MetalPadlockKey", Value: 10, Wear: false, Effect: ["Unlock-MetalPadlock"] },
			{ Name: "IntricatePadlockKey", Value: 30, Wear: false, Effect: ["Unlock-IntricatePadlock"] },
			{ Name: "OwnerPadlockKey", Value: 60, Wear: false, OwnerOnly: true, Effect: ["Unlock-OwnerPadlock", "Unlock-OwnerTimerPadlock"] },
			{ Name: "LoversPadlockKey", Value: 40, Wear: false, LoverOnly: true, Effect: ["Unlock-LoversPadlock", "Unlock-LoversTimerPadlock"] },
			{ Name: "MistressPadlockKey", Value: -1, Wear: false, Effect: ["Unlock-MistressPadlock", "Unlock-MistressTimerPadlock"] },
			{ Name: "MetalCuffsKey", Value: 20, Time: 5, Wear: false, Effect: ["Unlock-MetalCuffs"] },
			{ Name: "WoodenMaidTray", Value: -1, Enable: false },
			{ Name: "WoodenMaidTrayFull", Value: -1, Enable: false },
			{ Name: "WoodenPaddle", Value: -1, Enable: false }
		],
		Color: ["Default"]
	},

	{
		Group: "ItemDevices",
		Category: "Item",
		Priority: 56,
		Default: false,
		IsRestraint: true,
		Left: 0,
		Top: -250,
		Zone: [[10, 600, 90, 400], [400, 600, 90, 400]],
		Asset: [
			{ Name: "WoodenBox", Value: 60, Difficulty: -2, SelfBondage: 5, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied"], Effect: ["Prone", "Enclose", "BlindNormal", "GagLight", "Freeze"], Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], RemoveAtLogin: true },
			{ Name: "SmallWoodenBox", Value: 40, Difficulty: -2, SelfBondage: 5, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "CanKneel"], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "BlindNormal", "GagLight", "Freeze"], Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], RemoveAtLogin: true },
			{ Name: "MilkCan", Fetish: ["Metal"], Value: -1, Difficulty: 1, Time: 15, RemoveTime: 10, SetPose: ["Kneel"], Effect: ["BlindHeavy", "Prone", "Enclose", "GagHeavy", "Freeze"], RemoveAtLogin: true },
			{ Name: "WaterCell", Fetish: ["Metal"], Value: -1, Difficulty: 1, Time: 15, RemoveTime: 15, SetPose: ["Suspension", "LegsClosed"], Effect: ["Prone", "Enclose", "GagMedium", "Freeze"], Block: ["ItemFeet"], RemoveAtLogin: true },
			{ Name: "Cage", Fetish: ["Metal"], Value: 120, Difficulty: 4, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotKneeling", "NotSuspended"], Effect: ["Prone", "Enclose", "Freeze"], Alpha: [[1, 80, 105, 900], [410, 80, 105, 900]], RemoveAtLogin: true },
			{ Name: "LowCage", Fetish: ["Metal"], Value: 80, Difficulty: 4, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "Freeze"], Alpha: [[1, 80, 75, 900], [400, 80, 100, 900]], RemoveAtLogin: true },
			{ Name: "SaddleStand", Fetish: ["Metal"], Priority: 39, Value: 100, Difficulty: -2, Time: 10, AllowLock: true, Prerequisite: ["LegsOpen", "AllFours", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotKneelingSpread", "NotShackled", "StraitDressOpen"], SetPose: ["LegsOpen"], Effect: ["Prone", "Freeze", "Mounted"], Block: ["ItemPelvis", "ItemLegs", "ItemFeet"], Height: 30, RemoveAtLogin: true },
			{ Name: "BurlapSack", Priority: 39, Value: 35, Difficulty: 5, SelfBondage: 4, Time: 15, RemoveTime: 6, Prerequisite: ["NotSuspended", "AllFours", "NotHogtied", "NotYoked", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "ClothLower", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "ItemArms", "ItemButt", "TailStraps", "Wings", "BodyLower", "Socks", "ItemHidden", "ItemNipplesPiercings", "ItemTorso"], SetPose: ["Kneel", "BackElbowTouch"], Effect: ["ForceKneel", "Block", "Prone", "Freeze"], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"] },
			{ Name: "InflatableBodyBag", Fetish: ["Latex"], Priority: 31, Value: 225, Difficulty: 1, SelfBondage: 6, Time: 30, RemoveTime: 50, AllowLock: true, Prerequisite: ["NotSuspended", "AllFours", "NotHogtied", "NotYoked", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "Suit", "ClothLower", "SuitLower", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "ItemArms", "ItemButt", "TailStraps", "Wings", "BodyLower", "Socks", "ItemNipplesPiercings"], HideItem: ["ItemVulvaFullLatexSuitWand", "ItemNipplesLactationPump"], AllowPose: ["Kneel"], SetPose: ["LegsClosed", "BackElbowTouch"], Effect: ["Block", "Prone", "Freeze"], AllowType: ["Light", "Inflated", "Bloated", "Max"], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"], Extended: true, SelfUnlock: false },
			{ Name: "BondageBench", Fetish: ["Leather"], Priority: 1, Value: 250, SelfBondage: 4, Time: 10, RemoveTime: 10, Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NoFeetSpreader"], SetPose: ["LegsClosed"], Effect: ["Block", "Prone", "Freeze", "Mounted"], Extended: true, RemoveAtLogin: true },
			{ Name: "TeddyBear", Fetish: ["ABDL"], Priority: 34, Value: 50, Difficulty: -10, Time: 5, IsRestraint: false, AllowPose: ["AllFours", "Hogtied", "TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Horse", "StraitDressOpen", "Yoked"], Effect: [], AllowType: ["Bear", "Fox", "Kitty", "Pup", "Bunny", "Pony"], Extended: true, RemoveAtLogin: true },
			{
				Name: "OneBarPrison", Fetish: ["Metal"], Priority: 16, Value: 75, Difficulty: 8, SelfBondage: 2, Time: 20, AllowLock: true, Prerequisite: ["AccessVulva", "AllFours", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste", "StraitDressOpen"], SetPose: ["LegsOpen"], Effect: ["FillVulva", "Prone", "Freeze", "Mounted"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva", "ItemFeet"], Layer: [
					{ Name: "Bar", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				],
				RemoveAtLogin: true
			},
			{ Name: "TheDisplayFrame", Fetish: ["Metal"], Value: 100, Difficulty: 50, SelfBondage: 5, Time: 10, AllowLock: true, Prerequisite: ["DisplayFrame", "AllFours", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotMasked"], SetPose: ["LegsClosed", "BackElbowTouch"], Effect: ["Prone", "Freeze", "Block", "Mounted"], Block: ["ItemArms", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNeckAccessories"], RemoveAtLogin: true },
			{ Name: "Sybian", Priority: 22, Value: 80, Difficulty: 1, Time: 10, IsRestraint: false, Prerequisite: ["AccessVulva", "AllFours", "LegsOpen", "NotSuspended", "NotHogtied", "NotShackled", "NotChaste", "StraitDressOpen", "NotHorse"], Hide: ["Shoes", "Socks", "ItemBoots", "ItemFeet", "ItemLegs", "ItemVulva"], HideItem: ["ClothLowerPajama1", "ClothLowerShorts1", "ClothLowerJeans1", "ClothLowerJeans2", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerLatexPants1", "ItemDevicesTeddyBear", "SuitLowerReverseBunnySuit"], SetPose: ["KneelingSpread"], Effect: ["FillVulva", "Egged", "Freeze", "Mounted"], Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemPelvis", "ItemButt", "ItemVulva"], RemoveAtLogin: true, ArousalZone: "ItemVulva" },
			{ Name: "StrapOnSmooth", Fetish: ["Leather"], Priority: 34, Value: 25, Difficulty: 1, Time: 10, IsRestraint: false, AllowActivity: ["Penetrate"] },
			{ Name: "StrapOnStuds", Fetish: ["Leather"], Priority: 34, Value: 25, Difficulty: 1, Time: 10, IsRestraint: false, AllowActivity: ["Penetrate"] },
			{ Name: "DisplayCase", Fetish: ["Metal"], Value: 60, Difficulty: -2, SelfBondage: 1, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended"], Effect: ["Prone", "Enclose", "DeafLight", "GagLight", "Freeze"], Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], RemoveAtLogin: true },
			{ Name: "SmallDisplayCase", Fetish: ["Metal"], Value: 40, Difficulty: -2, SelfBondage: 1, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "DeafLight", "GagLight", "Freeze"], Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], RemoveAtLogin: true },
			{ Name: "WoodenBoxOpenHead", Value: 60, Difficulty: -2, SelfBondage: 3, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotYoked"], Hide: ["Wings"], Effect: ["Prone", "Freeze", "Block"], AllowBlock: ["ItemHands"], Alpha: [[1, 220, 70, 999], [420, 220, 80, 999]], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots", "ItemHands"], RemoveAtLogin: true },
			{ Name: "SmallWoodenBoxOpenHead", Value: 40, Difficulty: -2, SelfBondage: 3, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "CanKneel", "NotYoked"], Hide: ["Wings"], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Freeze", "Block"], AllowBlock: ["ItemHands"], Alpha: [[1, 220, 70, 999], [420, 220, 80, 999]], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots", "ItemHands"], RemoveAtLogin: true },
			{ Name: "WoodenStocks", Value: 150, Difficulty: 50, SelfBondage: 4, Time: 10, AllowLock: true, Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NotKneelingSpread", "NoItemArms", "LegsOpen"], SetPose: ["Yoked"], Effect: ["Prone", "Freeze", "Block", "Mounted"], Block: ["ItemArms", "ItemFeet", "ItemLegs", "ItemBoots"], RemoveAtLogin: true },
			{ Name: "Vacbed", Fetish: ["Latex"], ParentGroup: "BodyUpper", Value: 200, Difficulty: 50, Priority:36, SelfBondage: 3, Time: 10, Prerequisite: ["CannotUseWithAlphaHood", "NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NotKneelingSpread", "NoItemArms", "LegsOpen", "NoItemHands", "NoItemLegs", "NoHorse", "NoItemFeet"], Hide: ["ItemNeckAccessories", "ItemNeckRestraints", "HairBack"], SetPose: ["Yoked"], Effect: ["Prone", "Freeze", "Block", "Mounted"], Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], Block: ["ItemArms", "ItemBoots", "ItemBreast", "ItemButt", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemAddon", "ItemNeck", "ItemNeckAccessories", "ItemNeckRestraints", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings"], RemoveAtLogin: true },
			{ Name: "Crib", Fetish: ["ABDL"], Priority: 1, Value: 100, Difficulty: 0, SelfBondage: 1, Time: 15, RemoveTime: 10, IsRestraint: true, AllowLock: true, Left: -30, Top: -235, Effect: ["Freeze"], RemoveAtLogin: true, Prerequisite: ["AllFours", "NotSuspended", "NotHogtied", "NoFeetSpreader"], HideItem: ["ShoesMistressBoots", "ShoesPonyBoots", "ThighHighLatexHeels", "Shoes", "ItemBootsPonyBoots", "ItemBootsBalletHeels", "ItemBootsBalletWedges", "ItemBootsThighHighLatexHeels"], Extended: true, AllowType: ["Open", "Closed", "Stuffed"] },
			{ Name: "Bed", Value: 100, Priority: 1, Difficulty: -20, SelfBondage: 0, Time: 5, RemoveTime: 5, Effect: ["Freeze", "Mounted"], Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NoFeetSpreader"], HideItem: ["ShoesMistressBoots", "ShoesPonyBoots", "ShoesThighHighLatexHeels", "ItemBootsPonyBoots", "ItemBootsBalletHeels", "ItemBootsBalletWedges", "ItemBootsThighHighLatexHeels"], BuyGroup: "Bed", RemoveItemOnRemove: [{ Name: "Covers", Group: "ItemAddon" }] },
			{
				Name: "X-Cross", Priority: 1, Value: 200, Left: 0, Top: -50, Difficulty: 9, SelfBondage: 1, Time: 15, Prerequisite: ["CuffedArms", "CuffedFeet", "AllFours", "NotSuspended", "NotHogtied", "LegsOpen", "NotKneeling"], SetPose: ["OverTheHead", "Spread"], Hide: ["ItemBoots"], HideItem: ["PencilSkirt", "Gown2Skirt", "ShoesMistressBoots", "ShoesPonyBoots", "ShoesThighHighLatexHeels"], Effect: ["Prone", "Freeze", "Block", "Mounted"], Block: ["ItemArms", "ItemFeet", "ItemLegs", "ItemBoots"], Layer: [
					{ Name: "Cross", AllowColorize: false },
					{ Name: "Padding", AllowColorize: true }
				],
				RemoveAtLogin: true
			},
			{
				Name: "ChangingTable", Fetish: ["ABDL"], Priority: 1, Value: 100, Difficulty: 0, SelfBondage: 1, Time: 15, RemoveTime: 10, IsRestraint: true, AllowLock: false, Left: -30, Top: -235, Effect: ["Freeze"], RemoveAtLogin: true, HideItem: ["ShoesMistressBoots", "ShoesPonyBoots", "ThighHighLatexHeels", "ItemBootsPonyBoots", "ItemBootsBalletHeels", "ItemBootsBalletWedges", "ItemBootsThighHighLatexHeels"], Prerequisite: ["NotSuspended", "NotHogtied"], Layer: [
					{ Name: "Frame", AllowColorize: false },
					{ Name: "Table", AllowColorize: true }
				]
			},
			{ Name: "Locker", Value: 50, Difficulty: -2, SelfBondage: 5, Time: 15, RemoveTime: 10, Top: 0, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied"], Effect: ["Prone", "Enclose", "BlindLight", "Freeze"], Alpha: [[1, 1, 125, 999],[360, 1, 140, 999]], Extended: true, RemoveAtLogin: true, AllowType:["Seethrough", "Opaque"] },
			{ Name: "SmallLocker", Value: 40, Difficulty: -2, SelfBondage: 5, Time: 15, RemoveTime: 10, Top: 0, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "CanKneel"], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "BlindLight", "Freeze"], Alpha: [[1, 1, 125, 999], [360, 1, 140, 999]], Extended: true, RemoveAtLogin: true, AllowType: ["Seethrough", "Opaque"] },
			{ Name: "VentlessLocker", Value: 50, Difficulty: -2, SelfBondage: 5, Time: 15, RemoveTime: 10, Top: 0, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied"], Effect: ["Prone", "Enclose", "BlindHeavy", "GagLight", "Freeze"], Alpha: [[1, 1, 125, 999],[360, 1, 140, 999]], Extended: true, RemoveAtLogin: true, AllowType:["Seethrough", "Opaque"] },
			{ Name: "SmallVentlessLocker", Value: 40, Difficulty: -2, SelfBondage: 5, Time: 15, RemoveTime: 10, Top: 0, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "CanKneel"], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "BlindHeavy", "GagLight", "Freeze"], Alpha: [[1, 1, 125, 999], [360, 1, 140, 999]], Extended: true, RemoveAtLogin: true, AllowType: ["Seethrough", "Opaque"] },
			{
				Name: "ConcealingCloak", Value: 75, Difficulty: 0, Top: 0, SelfBondage: 5, Time: 7, AllowLock: true, Prerequisite: ["NotSuspended", "AllFours", "Notkneeling", "NotHogtied", "NotYoked", "NotMounted", "NotKneelingSpread"], Hide: [ "Suit", "ItemArms", "ItemButt", "TailStraps", "Wings", "ItemNipplesPiercings"], HideItem: ["ItemVulvaFullLatexSuitWand"], Effect: ["Prone"], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemHands", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings"], Layer: [
					{ Name: "Front", Priority: 48, AllowColorize: true },
					{ Name: "Back", Priority: 3, AllowColorize: true},
					{ Name: "Strap", Priority: 52, AllowColorize: false}
				]
			}
		],
		Color: ["Default"]
	},
	{
		Group: "ItemHoodAddon",
		Category: "Item",
		Priority: 46,
		Default: false,
		IsRestraint: true,
		Left: 0,
		Top: -250,
		Zone: [[400, 100, 90, 100]],
		Asset: [
			{ Name: "OldGasMaskLenses", Priority: 46, Value: -1, Difficulty: 12, SelfBondage: 5, Time: 5, AllowLock: true, Effect: ["BlindHeavy"] },
			{ Name: "OldGasMaskTube1", Effect: ["GagEasy"], Priority: 45, Value: -1, Difficulty: 12, SelfBondage: 5, Time: 5, AllowLock: true },
			{ Name: "OldGasMaskTube2", Effect: ["GagEasy"], Priority: 45, Value: -1, Difficulty: 12, SelfBondage: 5, Time: 5, AllowLock: true },
			{ Name: "OldGasMaskRebreather", Priority: 45, Value: -1, Difficulty: 12, SelfBondage: 5, Time: 5, AllowLock: true, Effect: ["GagNormal"] },
			{
				Name: "OldGasMaskLensesTube1", Value: -1, Difficulty: 12, SelfBondage: 5, Time: 10, AllowLock: true, Effect: ["BlindHeavy", "GagEasy"], Layer: [
					{ Name: "Lenses", Priority: 46 },
					{ Name: "Tube1", Priority: 45 },
				]
			},
			{
				Name: "OldGasMaskLensesTube2", Value: -1, Difficulty: 12, SelfBondage: 5, Time: 10, AllowLock: true, Effect: ["BlindHeavy", "GagEasy"], Layer: [
					{ Name: "Lenses", Priority: 46 },
					{ Name: "Tube2", Priority: 45 },
				]
			},
			{
				Name: "OldGasMaskLensesRebreather", Value: -1, Difficulty: 12, SelfBondage: 5, Time: 10, AllowLock: true, Effect: ["BlindHeavy", "GagNormal"], Layer: [
					{ Name: "Lenses", Priority: 46 },
					{ Name: "Rebreather", Priority: 45 },
				]
			},
		],
		Color: ["Default"]
	},
	{
		Group: "ItemAddon",
		Category: "Item",
		Priority: 51,
		Default: false,
		IsRestraint: true,
		Left: 0,
		Top: -250,
		Zone: [[400, 0, 90, 100]],
		Asset: [
			{ Name: "BondageBenchStraps", Value: -1, Difficulty: 12, SelfBondage: 5, Time: 5, IsRestraint: true, AllowLock: true, Hide: ["HairBack", "Wings", "TailStraps", "ItemButt"], SetPose: ["LegsClosed"], Effect: ["Block", "Prone"], AllowType: ["Light", "Normal", "Heavy", "Full"], Block: ["ItemDevices"], SelfUnlock: false, Extended: true, RemoveAtLogin: true },
			{ Name: "Covers", Value: -1, Difficulty: 1, SelfBondage: 0, Prerequisite: "OnBed", BuyGroup: "Bed" },
			{ Name: "BedRopes", Fetish: ["Rope"], Value: -1, Difficulty: 6, SelfBondage: 3, DefaultColor: "#956B1C", Block: ["ItemDevices"], Hide: ["TailStraps"], Prerequisite: "OnBed", BuyGroup: "Bed" },
			{ Name: "BedStraps",Fetish: ["Leather"], Value: -1, Difficulty: 6, SelfBondage: 2, Block: ["ItemDevices"], Hide: ["TailStraps"], AllowLock: true, Prerequisite: "OnBed", BuyGroup: "Bed" },
			{ Name: "BedTape", Fetish: ["Tape"], Value: -1, Difficulty: 6, SelfBondage: 2, Block: ["ItemDevices"], Hide: ["TailStraps"], Prerequisite: "OnBed", BuyGroup: "Bed" },
			{ Name: "BedChains", Fetish: ["Metal"], Value: -1, Difficulty: 6, SelfBondage: 4, Block: ["ItemDevices"], Hide: ["TailStraps"], AllowLock: true, Prerequisite: "OnBed", BuyGroup: "Bed" }
		],
		Color: ["Default"]
	},

	{
		Group: "ItemBoots",
		ParentGroup: "BodyLower",
		Category: "Item",
		Priority: 23,
		Default: false,
		IsRestraint: true,
		Left: 125,
		Top: 500,
		Hide: ["Shoes"],
		AllowPose: ["LegsClosed", "Kneel", "Hogtied"],
		Zone: [[100, 870, 300, 130]],
		Activity: ["Bite", "Kiss", "PoliteKiss", "Lick", "Suck", "Nibble", "Tickle", "Spank", "MassageHands", "MassageFeet", "TakeCare", "SpankItem", "TickleItem", "RubItem", "RollItem", "PourItem", "ShockItem"],
		Asset: [
			{ Name: "PonyBoots", Fetish: ["Leather", "Pony"], Value: -1, Difficulty: 6, Time: 10, RemoveTime: 15, AllowLock: true, Alpha: [[75, 875, 140, 200], [290, 875, 140, 200]], Height: 35 },
			{ Name: "BalletHeels", Fetish: ["Leather"], Value: 75, Difficulty: 6, Time: 10, RemoveTime: 15, AllowLock: true, Alpha: [[75, 875, 140, 200], [290, 875, 140, 200]], Height: 35 },
			{ Name: "BalletWedges", Fetish: ["Leather"], Value: 50, Difficulty: 6, Time: 10, RemoveTime: 15, AllowLock: true, Alpha: [[75, 875, 140, 200], [290, 875, 140, 200]], Height: 35 },
			{ Name: "ToeCuffs", Fetish: ["Metal"], Value: 35, Difficulty: 4, Time: 10, RemoveTime: 5, AllowLock: true, Prerequisite: "ToeTied", SetPose: ["LegsClosed"], Effect: ["Freeze", "Prone"] },
			{ Name: "LeatherToeCuffs", Fetish: ["Leather"], Value: 50, Difficulty: 3, Time: 10, RemoveTime: 5, AllowLock: true, Prerequisite: "ToeTied", SetPose: ["LegsClosed"], Effect: ["Freeze", "Prone"] },
			{ Name: "ToeTie", Fetish: ["Rope"], Value: 15, Difficulty: 2, Time: 10, RemoveTime: 5, DefaultColor: "#956B1C", Prerequisite: "ToeTied", SetPose: ["LegsClosed"], Effect: ["Freeze", "Prone"] },
			{ Name: "ThighHighLatexHeels", Fetish: ["Latex"], Value: -1, Time: 10, RemoveTime: 15, AllowLock: true, BuyGroup: "ThighHighLatexHeels", Alpha: [[75, 850, 140, 200], [290, 850, 140, 200]], Height: 30 },
			{ Name: "LockingHeels", Value: 20, Difficulty: 6, Time: 10, RemoveTime: 15, AllowLock: true, Height: 15 },
			{ Name: "LockingHeels2", Value: 25, Difficulty: 7, Time: 10, RemoveTime: 15, AllowLock: true, Height: 15 },
			{ Name: "LockingShoes1", Value: 15, Difficulty: 3, Time: 5, RemoveTime: 8, AllowLock: true, Height: 6 },
			{ Name: "LockingShoes2", Value: 20, Difficulty: 4, Time: 5, RemoveTime: 8, AllowLock: true, Height: 6 },
			{
				Name: "LockingBoots1", Value: 30, Difficulty: 6, Time: 7, RemoveTime: 14, AllowLock: true, Height: 9,
				Layer: [
					{ Name: "Boots", AllowColorize: true },
					{ Name: "Straps", AllowColorize: false }
				]
			},
			{
				Name: "LeatherFootMitts1", Fetish: ["Leather"], Value: 35, Difficulty: 4, Time: 6, RemoveTime: 7, AllowLock: true, Hide: ["Shoes", "Socks"],
				Layer: [
					{ Name: "Mitts", AllowColorize: true },
					{ Name: "Straps", AllowColorize: false }
				]
			},
			{ Name: "ToeTape", Fetish: ["Tape"], Extended: true, Value: 50, BuyGroup: "DuctTape", Difficulty: 2, Time: 10, RemoveTime: 5, Prerequisite: "ToeTied", SetPose: ["LegsClosed"], AllowType: ["Full"] },
			{ Name: "Zipties", Value: 20, Difficulty: 6, Time: 5, RemoveTime: 6, BuyGroup: "Zipties", Prerequisite: "ToeTied", SetPose: ["LegsClosed"], Effect: ["Freeze", "Prone"] },
			AssetSpankingToys
		],
		Color: ["Default"]
	},

	{
		Group: "ItemHidden",
		Category: "Item",
		Default: false,
		IsRestraint: true,
		Asset: [
			{ Name: "LeatherArmbinderStrap", Priority: 31, Value: -1, AllowType: ["Strap", "WrapStrap", "None"] },
			{ Name: "LeatherArmbinderWrapStrap", Priority: 31, Value: -1, AllowType: ["WrapStrap", "None"] },
			{ Name: "SuspensionHempRope", Priority: 31, Value: -1 },
			{ Name: "SuspensionChains", Priority: 31, Value: -1 }
		],
		Color: ["Default"]
	}

];

/* eslint-disable */
// 3D Custom Girl based pose
var PoseFemale3DCG = [

	{
		Name: "Kneel",
		OverrideHeight: -250,
		Hide: ["ItemFeet"]
	},
	{
		Name: "Horse",
		OverrideHeight: -75,
		Hide: ["ItemFeet"]
	},
	{
		Name: "KneelingSpread",
		OverrideHeight: -250,
		Hide: ["ItemFeet"]
	},
	{
		Name: "Yoked",
		Hide: ["Hands"]
	},
	{
		Name: "OverTheHead",
		OverrideHeight: -25,
		Hide: ["Hands"],
		MovePosition: [{ Group: "Pussy", X: 0, Y: -5 }, { Group: "ItemVulva", X: 0, Y: -5 }, { Group: "ItemButt", X: 0, Y: -5 }, { Group: "TailStraps", X: 0, Y: -5 }, { Group: "ItemVulvaPiercings", X: 0, Y: -5 }]
	},
	{
		Name: "Hogtied",
		OverrideHeight: -575,
		Hide: ["BodyLower", "Head", "Hands", "ClothLower", "Wings", "TailStraps", "Gloves", "Panties", "Pussy", "ItemHands", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemLegs", "ItemFeet", "SuitLower"],
		MovePosition: [{ Group: "Socks", X: 0, Y: -400 }, { Group: "Shoes", X: 0, Y: -500 }, { Group: "ItemBoots", X: 0, Y: -500 }]
	},
	{
		Name: "Suspension",
		OverrideHeight: 150,
		Hide: []
	},
	{
		Name: "SuspensionHogtied",
		OverrideHeight: 0,
		Hide: ["BodyLower", "Hands", "ClothLower", "Wings", "TailStraps", "Gloves", "Panties", "Pussy", "ItemHands", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemLegs", "ItemFeet", "SuitLower", "ItemDevices"]
	},
	{
		Name: "AllFours",
		OverrideHeight: -560,
		Hide: ["ItemFeet", "ClothLower", "SuitLower", "Nipples", "Pussy", "BodyLower", "Head", "Wings", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemLegs", "ItemBoots", "Suit", "Panties", "Bra", "Socks", "Shoes"],
		MovePosition: [{ Group: "TailStraps", X: 0, Y: -300 }, { Group: "ItemButt", X: 0, Y: -300 }]
	}

];

// 3D Custom Girl based activities
var ActivityFemale3DCG = [
	{
		Name: "Kiss",
		MaxProgress: 50,
		TargetSelf: ["ItemHands", "ItemArms", "ItemBoots", "ItemBreast", "ItemNipples"],
		Prerequisite: ["ZoneAccessible", "UseMouth"]
	},
	{
		Name: "FrenchKiss",
		MaxProgress: 70,
		Prerequisite: ["ZoneAccessible", "UseTongue", "ZoneNaked", "TargetCanUseTongue"]
	},
	{
		Name: "PoliteKiss",
		MaxProgress: 30,
		TargetSelf: ["ItemHands", "ItemBoots"],
		Prerequisite: ["UseMouth"]
	},
	{
		Name: "Lick",
		MaxProgress: 80,
		TargetSelf: ["ItemMouth", "ItemHands", "ItemArms", "ItemBoots", "ItemBreast", "ItemNipples"],
		Prerequisite: ["ZoneAccessible", "UseTongue", "ZoneNaked"]
	},
	{
		Name: "Suck",
		MaxProgress: 60,
		TargetSelf: ["ItemHands", "ItemArms", "ItemBoots", "ItemNipples"],
		Prerequisite: ["ZoneAccessible", "UseMouth", "ZoneNaked"]
	},
	{
		Name: "Nibble",
		MaxProgress: 40,
		TargetSelf: ["ItemMouth", "ItemHands", "ItemArms", "ItemBoots", "ItemNipples"],
		Prerequisite: ["ZoneAccessible", "UseMouth", "ZoneNaked"]
	},
	{
		Name: "Bite",
		MaxProgress: 40,
		TargetSelf: ["ItemMouth", "ItemHands", "ItemArms", "ItemBoots", "ItemLegs", "ItemFeet"],
		Prerequisite: ["ZoneAccessible", "UseMouth", "ZoneNaked"]
	},
	{
		Name: "Whisper",
		MaxProgress: 20,
		Prerequisite: ["UseMouth"]
	},
	{
		Name: "Tickle",
		MaxProgress: 50,
		TargetSelf: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemNipples", "ItemLegs", "ItemFeet", "ItemBoots", "ItemArms", "ItemHands"],
		Prerequisite: ["ZoneAccessible", "UseHands"]
	},
	{
		Name: "Caress",
		MaxProgress: 80,
		TargetSelf: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemNipples", "ItemLegs", "ItemFeet", "ItemBoots", "ItemArms", "ItemHands", "ItemButt", "ItemVulva", "ItemHead", "ItemNeck", "ItemMouth", "ItemEars", "ItemNose"],
		Prerequisite: ["ZoneAccessible", "UseHands"]
	},
	{
		Name: "Pet",
		MaxProgress: 20,
		TargetSelf: ["ItemHead", "ItemNose"],
		Prerequisite: ["UseArms"]
	},
	{
		Name: "Cuddle",
		MaxProgress: 30,
		Prerequisite: []
	},
	{
		Name: "Rub",
		MaxProgress: 60,
		TargetSelf: ["ItemNose"],
		Prerequisite: []
	},
	{
		Name: "TakeCare",
		MaxProgress: 10,
		TargetSelf: ["ItemBoots", "ItemHands", "ItemHead"],
		Prerequisite: ["ZoneAccessible", "UseHands", "ZoneNaked"]
	},
	{
		Name: "MassageHands",
		MaxProgress: 60,
		TargetSelf: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemLegs", "ItemFeet", "ItemBoots", "ItemArms", "ItemHands", "ItemButt", "ItemVulva", "ItemHead", "ItemNeck"],
		Prerequisite: ["ZoneAccessible", "UseHands"]
	},
	{
		Name: "MassageFeet",
		MaxProgress: 40,
		Prerequisite: ["ZoneAccessible", "UseFeet"]
	},
	{
		Name: "Grope",
		MaxProgress: 50,
		TargetSelf: ["ItemButt", "ItemBreast"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "Pinch",
		MaxProgress: 20,
		TargetSelf: ["ItemNipples", "ItemEars", "ItemArms", "ItemPelvis", "ItemNose"],
		Prerequisite: ["ZoneAccessible", "UseHands"]
	},
	{
		Name: "Spank",
		MaxProgress: 40,
		TargetSelf: ["ItemButt", "ItemLegs", "ItemFeet", "ItemArms", "ItemHands", "ItemPelvis", "ItemTorso"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "Slap",
		MaxProgress: 30,
		TargetSelf: ["ItemBreast", "ItemHead"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "Pull",
		MaxProgress: 30,
		TargetSelf: ["ItemHead", "ItemNose", "ItemNipples"],
		Prerequisite: ["ZoneAccessible", "UseHands"]
	},
	{
		Name: "Choke",
		MaxProgress: 50,
		TargetSelf: ["ItemNeck", "ItemNose"],
		Prerequisite: ["ZoneAccessible", "UseHands"]
	},
	{
		Name: "HandGag",
		MaxProgress: 40,
		TargetSelf: ["ItemMouth"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "MasturbateTongue",
		MaxProgress: 100,
		Prerequisite: ["ZoneAccessible", "UseTongue", "ZoneNaked"]
	},
	{
		Name: "MasturbateHand",
		TargetSelf: ["ItemBreast", "ItemVulva", "ItemButt"],
		MaxProgress: 100,
		Prerequisite: ["ZoneAccessible", "UseHands", "ZoneNaked"]
	},
	{
		Name: "MasturbateFist",
		MaxProgress: 100,
		Prerequisite: ["ZoneAccessible", "VulvaEmpty", "UseHands", "ZoneNaked"]
	},
	{
		Name: "MasturbateFoot",
		MaxProgress: 100,
		Prerequisite: ["ZoneAccessible", "UseFeet", "ZoneNaked"]
	},
	{
		Name: "MasturbateItem",
		MaxProgress: 100,
		Prerequisite: ["ZoneNaked"]
	},
	{
		Name: "PenetrateSlow",
		MaxProgress: 80,
		Prerequisite: ["ZoneAccessible", "TargetMouthOpen", "VulvaEmpty", "WearingPenetrationItem", "ZoneNaked"]
	},
	{
		Name: "PenetrateFast",
		MaxProgress: 100,
		Prerequisite: ["ZoneAccessible", "TargetMouthOpen", "VulvaEmpty", "WearingPenetrationItem", "ZoneNaked"]
	},
	{
		Name: "SpankItem",
		MaxProgress: 70,
		Prerequisite: []
	},
	{
		Name: "TickleItem",
		MaxProgress: 50,
		Prerequisite: []
	},
	{
		Name: "RubItem",
		MaxProgress: 60,
		Prerequisite: []
	},
	{
		Name: "RollItem",
		MaxProgress: 30,
		Prerequisite: []
	},
	{
		Name: "PourItem",
		MaxProgress: 40,
		Prerequisite: []
	},
	{
		Name: "ShockItem",
		MaxProgress: 50,
		Prerequisite: []
	}
];

// 3D Custom Girl based fetishes
var FetishFemale3DCG = [
	{
		Name: "Bondage",
		GetFactor: function (C) { return C.IsRestrained() ? (PreferenceGetFetishFactor(C, "Bondage") - 2) : 0 }
	},
	{
		Name: "Gagged",
		GetFactor: function (C) { return !C.CanTalk() ? (PreferenceGetFetishFactor(C, "Gagged") - 2) : 0 }
	},
	{
		Name: "Blindness",
		GetFactor: function (C) { return C.IsBlind() ? (PreferenceGetFetishFactor(C, "Blindness") - 2) : 0 }
	},
	{
		Name: "Deafness",
		GetFactor: function (C) { return C.IsDeaf() ? (PreferenceGetFetishFactor(C, "Deafness") - 2) : 0 }
	},
	{
		Name: "Chastity",
		GetFactor: function (C) { return C.IsChaste() ? (PreferenceGetFetishFactor(C, "Chastity") - 2) : 0 }
	},
	{
		Name: "Exhibitionist",
		GetFactor: function (C) { return C.IsNaked() ? (PreferenceGetFetishFactor(C, "Exhibitionist") - 2) : 0 }
	},
	{
		Name: "Masochism",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Masochism") }
	},
	{
		Name: "Sadism",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Sadism") }
	},
	{
		Name: "Rope",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Rope") }
	},
	{
		Name: "Latex",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Latex") }
	},
	{
		Name: "Leather",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Leather") }
	},
	{
		Name: "Metal",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Metal") }
	},
	{
		Name: "Tape",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Tape") }
	},
	{
		Name: "Nylon",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Nylon") }
	},
	{
		Name: "Lingerie",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Lingerie") }
	},
	{
		Name: "Pet",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Pet") }
	},
	{
		Name: "Pony",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "Pony") }
	},
	{
		Name: "ABDL",
		GetFactor: function (C) { return ActivityFetishItemFactor(C, "ABDL") }
	}
];
/* eslint-enable */
