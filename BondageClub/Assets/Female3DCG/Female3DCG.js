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

// Spanking Toys Asset
var AssetSpankingToys = {
	Name: "SpankingToys", Random: false, Wear: false, BuyGroup: "SpankingToys", Activity: "SpankItem", IgnoreParentGroup: true,
	DynamicDescription: C => InventorySpankingToysGetDescription(C),
	DynamicPreviewIcon: C => InventorySpankingToysGetType(C),
	DynamicAllowInventoryAdd: () => InventoryIsWorn(Player, "SpankingToys", "ItemHands"),
	DynamicExpressionTrigger: C => SpankingInventory.find(x => x.Name == InventorySpankingToysGetType(C)).ExpressionTrigger
};

// 3D Custom Girl based assets
var AssetFemale3DCG = [

	// Appearance specific
	{
		Group: "Cloth",
		Priority: 30,
		ParentGroup: "BodyUpper",
		Clothing: true,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "AllFours"],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			{ Name: "CollegeOutfit1", Value: -1, Hide: ["ItemNeck"], HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidOutfit1", Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidOutfit2", Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
			{ Name: "StudentOutfit1", Hide: ["ItemNeck", "ItemHidden"], HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "StudentOutfit2", HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemHiddenLeatherArmbinderStrap", "ItemHiddenLeatherArmbinderWrapStrap", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{
			    Name: "StudentOutfit3", HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemHiddenLeatherArmbinderStrap", "ItemHiddenLeatherArmbinderWrapStrap"], Require: ["ClothLower", "ClothAccessory"],
				Layer: [
					{ Name: "White", AllowColorize: false },
					{ Name: "Color", AllowColorize: true }
				]
			},
			{ Name: "BabydollDress1", HideItem: ["ClothLowerLatexSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "TeacherOutfit1", Hide: ["ItemNeck", "ItemHidden"], HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], ParentGroup: ["BodyLower"], AllowPose: ["Horse", "KneelingSpread", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero"] },
			{ Name: "ChineseDress1", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "ChineseDress2", Value: 60, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "TShirt1", HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"], Require: ["ClothLower"] },
			{ Name: "TennisShirt1", Hide: ["ItemHidden"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"], Require: ["ClothLower"] },
			{ Name: "Sweater1", HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"], Require: ["ClothLower"] },
			{ Name: "MistressTop", Value: -1, Hide: ["Bra"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"], Require: ["ClothLower"] },
			{ Name: "AdultBabyDress1", Value: 60, Hide: ["ItemHidden"], HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "AdultBabyDress2", Value: 80, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "AdultBabyDress3", Value: 40, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "AdultBabyDress4", Value: 80, Left: 100, Top: 190, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "NurseUniform", Value: -1, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Robe1", Value: 30, Hide: ["ItemHidden"], HideItem: ["ClothLowerLatexSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "SuspenderTop1", Priority: 25, Value: 50, Hide: ["Panties", "ItemVulva", "ItemVulvaPiercings"], Expose: ["ItemNipples","ItemNipplesPiercings", "ItemBreast"] },
			{ Name: "LeatherCorsetTop1", Priority: 25, Value: 60, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{
				Name: "FlowerDress", Value: 50, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"],
				AllowPose: ["Suspension"],
				Layer: [
					{ Name: "Dress", AllowColorize: true },
					{ Name: "Flower", AllowColorize: false }
				]
			},
			{ Name: "Dress2", Value: 100, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "LaceBabydoll", Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "SleevelessTop", Value: 20, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{
				Name: "DressFur", Value: 70, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"],
				Layer: [
					{ Name: "Fabric", AllowColorize: true },
					{ Name: "Fur", AllowColorize: false }
				]
			},
			{ Name: "BodyTowel1", Value: 30, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "Yukata1", Value: 50, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "SteampunkCorsetTop1", Priority: 25, Value: 70, Hide: ["ItemHidden"], HideItem: ["ClothLowerTennisSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "BondageDress1", Value: 90, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "BondageDress2", Value: 90, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "ShoulderlessTop", Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "Dress3", Value: 80, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "ComfyTop", Value: 60, Hide: ["ItemNipples", "ItemNipplesPiercings"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "WeddingDress1", Priority: 22, Value: 150, Hide: ["ClothLower", "BodyLower", "Panties", "Shoes", "ItemBoots"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemFeetLeatherAnkleCuffs", "ItemLegsLeatherLegCuffs", "ItemLegsWoodenHorse", "ItemLegsSpreaderMetal", "ItemLegsOrnateLegCuffs", "ItemFeetOrnateAnkleCuffs", "ItemDevicesSaddleStand", "ItemVulvaWandBelt"], AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "LegsClosed", "Kneel", "KneelingSpread"] },
			{ Name: "WeddingDress2", Priority: 22, Value: 150, Hide: ["ClothLower", "BodyLower", "Panties", "Shoes", "ItemBoots"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemFeetLeatherAnkleCuffs", "ItemLegsLeatherLegCuffs", "ItemLegsWoodenHorse", "ItemLegsSpreaderMetal", "ItemLegsOrnateLegCuffs", "ItemFeetOrnateAnkleCuffs", "ItemDevicesSaddleStand", "ItemVulvaWandBelt"], AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "LegsClosed", "Kneel", "KneelingSpread"] },
			{ Name: "BridesmaidDress1", Value: 100, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Gown1", Value: 70, Random: false, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Gown2Top", Value: 90, Random: false, Left: 125, Top: 220, BuyGroup: "Gown2", HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Require: ["ClothLower"] },
			{ Name: "Gown3", Value: 70, Random: false, Left: 99, Top: 194, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidApron1", Priority: 32, Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidApron2", Priority: 32, Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
			{ Name: "AdmiralTop", Value: 30, Hide: ["ItemNeck", "ItemHidden"], HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], ParentGroup: ["BodyLower"], AllowPose: ["Horse", "KneelingSpread", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero"] },
			{ Name: "VirginKiller1", Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "ReverseBunnySuit", Value: 100, BuyGroup: "ReverseBunnySuit"}
		]
	},

	{
		Group: "ClothAccessory",
		Priority: 32,
		Random: false,
		ParentGroup: "BodyUpper",
		Default: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			{ Name: "StudentOutfit3Scarf", Left: 200, Top: 250, IgnoreParentGroup: true },
			{ Name: "StudentOutfit3Bow1", Left: 200, Top: 250, IgnoreParentGroup: true },
			{ Name: "StudentOutfit3Bow2", Left: 200, Top: 250, IgnoreParentGroup: true },
			{ Name: "StudentOutfit3Bow3", Left: 200, Top: 250, IgnoreParentGroup: true },
			{ 
				Name: "Bouquet", Priority: 41, Value: 40, Left: 175, Top: 350, BuyGroup: "Bouquet", IgnoreParentGroup: true, AllowPose: ["BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied"],
				Layer: [
					{ Name: "Base", AllowColorize: false },
					{ Name: "Flowers", AllowColorize: true }
				]
			},
			{ Name: "FrillyApron", Value: -1, Left: 135, Top: 179, BuyGroup: "Maid", AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied"] },
			{ Name: "BunnyCollarCuffs", Value: 10, Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast", "ItemTorso"] }
		]
	},
	{
		Group: "Necklace",
		Priority: 31,
		Random: false,
		ParentGroup: "BodyUpper",
		Default: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			 { Name: "Necklace1", Value: 40, Left: 148, Top: 70, IgnoreParentGroup: true},
			 { Name: "Necklace2", Left: 147, Top: 90, IgnoreParentGroup: true},
			 { Name: "Necklace3", Left: 147, Top: 110, IgnoreParentGroup: true},
			 { Name: "Necklace4", Value: 30, Left: 147, Top: 110, IgnoreParentGroup: true},
			 { Name: "IDCard", Value: 10, Left: 145, Top: 180, IgnoreParentGroup: true,
			   Layer: [
				{ Name: "String", AllowColorize: true},
				{ Name: "Card", AllowColorize: false}
			   ]
		
			},


		]
	},



	{
	    Group: "Suit",
		Priority: 14,
		ParentGroup: "BodyUpper",
		Clothing: true,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied"],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
		    {
			    Name: "Catsuit", Value: 100, BuyGroup: "Catsuit", Hide: ["ItemNipplesPiercings"], HideItem: ["ItemNipplesChopStickNippleClamps"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"],
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Zip", AllowColorize: false }
				]
			},
			{ Name: "SeamlessCatsuit", Value: -1, BuyGroup: "Catsuit", Hide: ["ItemNipplesPiercings"], HideItem: ["ItemNipplesChopStickNippleClamps"] },
			{ Name: "SeethroughSuit", Value: 100, BuyGroup: "SeethroughSuit", HideItem: ["ItemNipplesChopStickNippleClamps"] },
			{ Name: "SeethroughSuitZip", Value: -1, BuyGroup: "SeethroughSuit", HideItem: ["ItemNipplesChopStickNippleClamps"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"],
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Zip", AllowColorize: false }
				]
			},
			{ Name: "ReverseBunnySuit", Value: 100, BuyGroup: "ReverseBunnySuit"}
		]
	},

	{
		Group: "ClothLower",
		Priority: 26,
		Left: 105,
		Top: 380,
		Default: false,
		ParentGroup: "BodyLower",
		ParentColor: "Cloth",
		Clothing: true,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Horse", "KneelingSpread"],
		Color: ["Default", "#bbbbbb", "#808080", "#202020", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			{ Name: "Skirt1", HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ 
				Name: "Skirt2", HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], ParentItem: "StudentOutfit3", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
				Layer: [
					{ Name: "Color", AllowColorize: true },
					{ Name: "Stripe", AllowColorize: false }
				]
			},
			{ 
				Name: "Skirt3", HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], ParentItem: "StudentOutfit3", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
				Layer: [
					{ Name: "Color", AllowColorize: true },
					{ Name: "Stripe", AllowColorize: false }
				]
			},
			{ Name: "TennisSkirt1", HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], ParentItem: "TennisShirt1", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Jeans1", Priority: 22, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks6", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Shorts1", Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Pajama1", Priority: 25, Random: false, HideItem: ["ItemButtAnalBeads2"] },
			{ Name: "MistressBottom", Value: -1, Hide: ["Panties"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Waspie1", Priority: 26, Value: 60, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Waspie2", Priority: 26, Value: 80, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Waspie3", Priority: 26, Value: 40, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "LatexPants1", Priority: 21, Value: 60, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks1", "SocksSocks2", "SocksSocks3", "SocksSocks4", "SocksSocks5", "SocksSocks6", "SocksStockings2", "SocksStockings3", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "LatexSkirt1", Priority: 26, Value: 40, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "LatexSkirt2", Priority: 26, Value: 60, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "ClothSkirt1", Priority: 26, Value: 40, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Jeans2", Priority: 22, Value: 20, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks6", "VibratingLatexPanties", "WandBelt", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "ChineseSkirt1", Priority: 26, Value: 40, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "Gown2Skirt", Priority: 26, Value: -1, Random: false, Left: 50, Top: 462, BuyGroup: "Gown2", Hide: ["ItemFeet"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemLegsNylonRope", "ItemLegsHempRope", "ItemLegsLeatherBelt", "ItemLegsSturdyLeatherBelts", "ItemLegsDuctTape", "ItemLegsLeatherLegCuffs", "ItemLegsOrnateLegCuffs", "ItemLegsZipties", "ItemLegsChains", "ItemBootsThighHighLatexHeels"], ParentItem: "Gown2Top", SetPose: ["LegsClosed"] },
			{ Name: "AdmiralSkirt", Priority: 26, Value: 30, HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] }
		]
	},

	{
		Group: "SuitLower",
		Priority: 14,
		Left: 95,
		Top: 380,
		Default: false,
		ParentGroup: "BodyLower",
		Clothing: true,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Horse","KneelingSpread"],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
		{
			    Name: "Catsuit", Value: -1, BuyGroup: "Catsuit", Hide: ["ItemVulvaPiercings", "BodyLower"], HideItem: ["SocksPantyhose1"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Zip", AllowColorize: false }
				]
			},
		{ Name: "SeamlessCatsuit", Value: -1, BuyGroup: "Catsuit", Hide: ["ItemVulvaPiercings", "BodyLower"], HideItem: ["SocksPantyhose1"] },
		{ Name: "SeethroughSuit", Value: -1, BuyGroup: "SeethroughSuit", HideItem: ["SocksPantyhose1"] },
		{ Name: "SeethroughSuitZip", Value: -1, BuyGroup: "SeethroughSuit", HideItem: ["SocksPantyhose1"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
				Layer: [
					{ Name: "Base", AllowColorize: true },
					{ Name: "Zip", AllowColorize: false }
				]
			},
		{ Name: "ReverseBunnySuit", Value: -1, BuyGroup: "ReverseBunnySuit", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"]}
		]
	},

	{
		Group: "Bra",
		Priority: 21,
		Left: 150,
		Top: 200,
		ParentGroup: "BodyUpper",
		Clothing: true,
		Underwear: true,
		AllowPose: ["Yoked", "Hogtied"],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			{ Name: "Bra1", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra2", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra7", Priority: 20, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra8", Value: 15, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra9", Value: 10, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bandeau1", Priority: 20, Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bustier1", Value: 30, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset1", Value: 35, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset2", Value: 30, BuyGroup: ["Corset2"], Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset3", Value: 25, BuyGroup: ["Corset3"], Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset4", Value: 15, BuyGroup: ["Corset4"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Corset5", Value: 20, BuyGroup: ["Corset5"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Bikini1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikini1", Value: 50, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikini2", Value: 40, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikini3", Value: 45, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Swimsuit1", Value: 15, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "Swimsuit2", Value: 25, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "BunnySuit", Value: 30, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "FrameBra1", Value: 20, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "FrameBra2", Value: 15, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "BondageBra1", Priority: 20, Value: 40, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LatexBra1", Value: 30, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HarnessBra1", Priority: 20, Value: 30, BuyGroup: ["HarnessBra1"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HarnessBra2", Priority: 20, Value: 40, BuyGroup: ["HarnessBra2"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "CuteBikini1", Priority: 20, Value: 40, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "CorsetBikini1", Priority: 20, Value: 40, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "OuvertPerl1", Priority: 20, Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Sarashi1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "KittyBra1", Value: 30, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "FishnetBikini1", Priority: 20, Value: 45, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "SexyBeachBra1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikiniBra1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "StarHarnessBra", Priority: 20, Value: 40, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HeartTop", Priority: 20, Value: 35, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "ChineseBra1", Value: 35, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "LatexCorset1", Priority: 20, Value: 40, BuyGroup: ["LatexCorset1"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LeatherStrapBra1", Value: 15, BuyGroup: ["LeatherStrapBra1"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] }
		]
	},

	{
		Group: "Panties",
		Priority: 19,
		Left: 150,
		Top: 395,
		ParentGroup: "BodyLower",
		ParentColor: "Bra",
		Clothing: true,
		Underwear: true,
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			{ Name: "Panties1", HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties7", HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties8", HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties11", HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties12", Value: 10, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties13", Value: 10, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties14", Value: 10, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties15", Value: 10, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Bikini1", Value: 25, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Diapers1", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ 
				Name: "Diapers2", Value: 30, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"],
				Layer: [
					{ Name: "Diaper", AllowColorize: false },
					{ Name: "Cover", AllowColorize: true }
				]
			},
			{ Name: "Diapers3", Value: 30, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Panties16", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "MaidPanties1", Value: 25, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "LatexPanties1", Value: 30, Expose: ["ItemVulva", "ItemVulvaPiercings"] },
			{ Name: "WrapPanties1", Value: 25, Expose: ["ItemVulva", "ItemVulvaPiercings"] },
			{ Name: "CrotchPanties1", Value: 30, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "StringPanties1", Value: 15, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "StringPasty1", Value: 10, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "ZipPanties1", Value: 15, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "HarnessPanties1", Value: 35, BuyGroup: ["HarnessPanties1"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], AllowPose: ["LegsClosed", "Kneel"] },
			{ Name: "HarnessPanties2", Value: 40, Left: 85, Top: 395, BuyGroup: ["HarnessPanties2"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread"] },
			{ Name: "KittyPanties1", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "PearlPanties1", Value: 20, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "SunstripePanties1", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "SexyBeachPanties1", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "ChinesePanties1", Value: 25, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "LeatherStrapPanties1", Value: 20, BuyGroup: ["LeatherStrapPanties1"], HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] }
			
		]
	},

	{
		Group: "Socks",
		Priority: 20,
		Left: 125,
		Top: 400,
		ParentGroup: "BodyLower",
		ParentColor: "Bra",
		Clothing: true,
		Underwear: true,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Hogtied"],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			"Socks0", "Socks1", "Socks2", "Socks3", "Socks4", "Socks5", "Stockings1", "Stockings2",
			{ Name: "Stockings3", Value: 10 },
			{ Name: "Stockings4", Value: 10 },
			{ Name: "Pantyhose1", Value: 10, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo"], Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{
			    Name: "Socks6", Value: 25,
				Layer: [
					{ Name: "Sock", AllowColorize: true },
					{ Name: "Frill", AllowColorize: false }
				]
			},
			{
				Name: "SocksFur", Value: 40,
				Layer: [
					{ Name: "Fabric", AllowColorize: true },
					{ Name: "Fur", AllowColorize: false }
				]
			},
			{ Name: "SocksStriped1", Value: 10 },
			{ Name: "LatexSocks1", Value: 30 },
			{ Name: "FootlessSocks1", Value: 15 },
			{ Name: "ReverseBunnySuit", Value: 100, BuyGroup: "ReverseBunnySuit"}
		]
	},

	{
		Group: "Shoes",
		Priority: 23,
		Left: 125,
		Top: 500,
		ParentGroup: "BodyLower",
		Clothing: true,
		AllowPose: ["LegsClosed", "Kneel", "Hogtied"],
		Color: ["Default", "#bbbbbb", "#808080", "#202020", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			{ Name: "Shoes1", Height: 6 },
			{ Name: "Shoes2", Height: 6 },
			{ Name: "Shoes4", Height: 6 },
			{ Name: "Sneakers1", Height: 3 },
			{ Name: "Sneakers2", Height: 3 },
			{ Name: "Heels1", Height: 15 },
			{ Name: "Heels2", Height: 15 },
			{ Name: "Boots1", Height: 9 },
			{ Name: "MistressBoots", Value: -1, HideItem: ["SocksSocks4", "SocksSocks5"], Height: 35, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]] },
			{ Name: "PonyBoots", Value: -1, Height: 35, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]] },
			{ Name: "Sandals", Priority: 22, Value: 30, HideItem: ["SocksSocks0", "SocksSocks1", "SocksSocks2", "SocksSocks3", "SocksSocks4", "SocksSocks5", "SocksSocks6", "SocksSocksFur"], Height: 3 },
			{ Name: "PawBoots", Value: 45, Height: 3 },
			{ Name: "WoollyBootsTall", Value: 60, Height: 9 },
			{ Name: "ThighHighLatexHeels", Value: 80, BuyGroup: "ThighHighLatexHeels", Height: 30, Alpha: [[75, 850, 140, 200], [290, 850, 140, 200]]}
		]
	},

	{
		Group: "Hat",
		Priority: 46,
		Left: 125,
		Top: 0,
		Default: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		AllowPose: ["Suspension"],
		Asset: [
			"Band1", "Band2", "Beret1",
			{ Name: "MaidHairband1", Value: -1 },
			{ Name: "NurseCap", Value: -1 },
			{
				Name: "Santa1", Value: 20,
				Layer: [
					{ Name: "Fabric", AllowColorize: true },
					{ Name: "Fur", AllowColorize: false }
				]
			},
			{ Name: "CaptainHat1", Value: 25 },
			{ Name: "BunnySuccubus2", Value: 35 },
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
			{ Name: "Crown5", Value: 20 }
		]
	},

	{
		Group: "HairAccessory1",
		Priority: 45,
		Left: 90,
		Top: 0,
		Default: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		AllowPose: ["Suspension"],
		Asset: [
			"Ears1", "Ears2", "PonyEars1",
			{ Name: "Ribbons1", Priority: 4, BuyGroup: "Ribbons1" },
			{ Name: "Ribbons2", Priority: 4, Value: -1, BuyGroup: "Ribbons2" },
			{ Name: "Ribbons3", BuyGroup: "Ribbons3" },
			{ Name: "Ribbons4", BuyGroup: "Ribbons4" },
			{ Name: "GiantBow1", Priority: 4, BuyGroup: "GiantBow1" },
			{ Name: "BunnyEars1", Value: 10, BuyGroup: "BunnyEars1" },
			{ Name: "BunnyEars2", Value: 20, BuyGroup: "BunnyEars2" },
			{ Name: "PuppyEars1", Priority: 6, Value: 20, BuyGroup: "PuppyEars1" },
			{ Name: "SuccubusHorns", Value: 15, BuyGroup: "SuccubusHorns" },
			{ Name: "Horns", Value: 20, BuyGroup: "Horns" },
			{ Name: "Horns2", Value: 15, BuyGroup: "Horns2"},
			{ Name: "Horns3", Value: 15, BuyGroup: "Horns3" },
			{ Name: "HairFlower1", Value: 10, BuyGroup: "HairFlower1"},
			{ Name: "FoxEars1", Value: 15, BuyGroup: "FoxEars1" },
			{ Name: "BatWings", Value: 20, BuyGroup: "BatWings" },
			{ Name: "KittyMask1", Value: 25, BuyGroup: "BatWings", Hide: ["HairFront", "Glasses", "HairAccessory2"] },
			{ Name: "KittenEars1", Value: 20, BuyGroup: "KittenEars1" },
			{ Name: "KittenEars2", Value: 20, BuyGroup: "KittenEars2" },
			{ Name: "WolfEars1", Value: 20, BuyGroup: "WolfEars1" },
			{ Name: "WolfEars2", Value: 20, BuyGroup: "WolfEars2" },
			{ Name: "FoxEars2", Value: 20, BuyGroup: "FoxEars2" },
			{ Name: "FoxEars3", Value: 20, BuyGroup: "FoxEars3" },
			{ Name: "PuppyEars2", Value: 20, BuyGroup: "PuppyEars2"},
			{ Name: "RaccoonEars1", Value: 15, BuyGroup: "RaccoonEars1"},
			{ Name: "WeddingVeil1", Priority: 4, Value: 30, BuyGroup: "WeddingVeil1"},
			{ Name: "HairFeathers1", Value: 10, BuyGroup: "HairFeathers1"},
			{ Name: "MouseEars1", Value: 20, BuyGroup: "MouseEars1"},
			{ Name: "MouseEars2", Value: 20, BuyGroup: "MouseEars2"}
		]
	},
	
	{
		Group: "HairAccessory2",
		Priority: 47,
		Left: 90,
		Top: 0,
		Default: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		AllowPose: ["Suspension"],
		Asset: [
			"Ears1", "Ears2", "PonyEars1",
			{ Name: "Ribbons1", Priority: 4, BuyGroup: "Ribbons1" },
			{ Name: "Ribbons2", Priority: 4, Value: -1, BuyGroup: "Ribbons2" },
			{ Name: "Ribbons3", BuyGroup: "Ribbons3" },
			{ Name: "Ribbons4", BuyGroup: "Ribbons4" },
			{ Name: "GiantBow1", Priority: 4, BuyGroup: "GiantBow1" },
			{ Name: "BunnyEars1", Value: -1, BuyGroup: "BunnyEars1" },
			{ Name: "BunnyEars2", Value: -1, BuyGroup: "BunnyEars2" },
			{ Name: "PuppyEars1", Priority: 29, Value: -1, BuyGroup: "PuppyEars1" },
			{ Name: "SuccubusHorns", Value: -1, BuyGroup: "SuccubusHorns" },
			{ Name: "Horns", Value: -1, BuyGroup: "Horns" },
			{ Name: "Horns2", Value: -1, BuyGroup: "Horns2"},
			{ Name: "Horns3", Value: -1, BuyGroup: "Horns3" },
			{ Name: "HairFlower1", Value: -1, BuyGroup: "HairFlower1"},
			{ Name: "FoxEars1", Value: -1, BuyGroup: "FoxEars1" },
			{ Name: "BatWings", Value: -1, BuyGroup: "BatWings" },
			{ Name: "KittyMask1", Value: -1, BuyGroup: "BatWings", Hide: ["HairFront", "Glasses", "HairAccessory1"] },
			{ Name: "KittenEars1", Value: -1, BuyGroup: "KittenEars1" },
			{ Name: "KittenEars2", Value: -1, BuyGroup: "KittenEars2" },
			{ Name: "WolfEars1", Value: -1, BuyGroup: "WolfEars1" },
			{ Name: "WolfEars2", Value: -1, BuyGroup: "WolfEars2" },
			{ Name: "FoxEars2", Value: -1, BuyGroup: "FoxEars2" },
			{ Name: "FoxEars3", Value: -1, BuyGroup: "FoxEars3" },
			{ Name: "PuppyEars2", Value: -1, BuyGroup: "PuppyEars2"},
			{ Name: "RaccoonEars1", Value: -1, BuyGroup: "RaccoonEars1"},
			{ Name: "WeddingVeil1", Priority: 4, Value: -1, BuyGroup: "WeddingVeil1"},
			{ Name: "HairFeathers1", Value: -1, BuyGroup: "HairFeathers1"},
			{ Name: "MouseEars1", Value: 20, BuyGroup: "MouseEars1"},
			{ Name: "MouseEars2", Value: 20, BuyGroup: "MouseEars2"}
		]
	},

	{
		Group: "Gloves",
		Priority: 28,
		ParentGroup: "BodyUpper",
		ParentColor: "Bra",
		Clothing: true,
		Underwear: true,
		Default: false,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Yoked", "AllFours"],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			"Gloves1", "Gloves2",
			{ Name: "Gloves3", Value: 15, Left: 60, Top: 109 },
			{ Name: "MistressGloves", Value: -1 },
			{ Name: "FingerlessGloves", Value: 20 },
			{ 
				Name: "GlovesFur", Value: 30,
				Layer: [
					{ Name: "Fabric", AllowColorize: true },
					{ Name: "Fur", AllowColorize: false }
				]
			},
			{ Name: "Catsuit", Value: -1, BuyGroup: "Catsuit" },
			{ Name: "SeethroughSuit", Value: -1, BuyGroup: "SeethroughSuit" }
		]
	},

	{
		Group: "Glasses",
		Priority: 27,
		Left: 180,
		Top: 125,
		Default: false,
		Clothing: true,
		Underwear: true,
		Color: ["#303030", "#808080", "#e0e0e0", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			"Glasses1", "Glasses2", "Glasses3", "Glasses4", "Glasses5", "Glasses6",
			{ Name: "SunGlasses1", Value: 15 },
			{ Name: "SunGlasses2", Value: 15 },
			{ Name: "Mask1", Value: 20 },
			{ Name: "Mask2", Value: 20 },
			{ Name: "ButterflyMask1", Value: 30 },
			{ Name: "EyePatch1", Value: 10 },
			{ Name: "ShinobiMask", Value: 30, Left: 199, Top: 88 },
			{ Name: "FoxMask", Value: 30, Left: 150, Top: 20 }],
	},

	{
		Group: "TailStraps",
		Priority: 4,
		Left: 0,
		Top: 150,
		Default: false,
		Clothing: true,
		Underwear: true,
		AllowPose: ["AllFours"],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			{ Name: "TailStrap", Value: 30 },
			{ Name: "HorseTailStrap", Value: 20 },
			{ Name: "HorseTailStrap1", Value: 30 },
			{ Name: "FoxTailsStrap", Priority: 2, Value: 50 },
			{ Name: "PuppyTailStrap", Value: 15 },
			{ Name: "SuccubusStrap", Value: 15 },
			{ Name: "SuccubusTailStrap", Value: 10 },
			{ Name: "RaccoonStrap", Value: 25 },
			{ Name: "RaccoonTailStrap", Priority: 2, Value: 35 },
			{ Name: "PuppyTailStrap1", Value: 20 },
			{ Name: "KittenTailStrap1", Value: 20 },
			{ Name: "KittenTailStrap2", Value: 20 },
			{ Name: "FoxTailStrap1", Value: 20 },
			{ Name: "FoxTailStrap2", Value: 20 },
			{ Name: "WolfTailStrap1", Value: 20 },
			{ Name: "WolfTailStrap2", Value: 20 },
			{ Name: "WolfTailStrap3", Value: 20 },
			{ Name: "DemonPlug", Value: 30 },
			{ Name: "MouseTailStrap1", Value: 20 },
			{ Name: "MouseTailStrap2", Value: 20 }
		]
	},

	{
		Group: "Wings",
		Priority: 3,
		ParentColor: "Bra",
		Default: false,
		Clothing: true,
		Underwear: true,
		Color: ["Default"],
		Asset: [
			{ Name: "SuccubusFeather", Value: 35 },
			{ Name: "SuccubusWings", Value: 35 },
			{ Name: "AngelFeather", Value: 50 },
			{ Name: "DevilWings", Value: 25 },
			{ Name: "FallenAngelWings", Value: 50 },
			{ Name: "AngelWings", Value: 50 },
			{ Name: "BatWings", Value: 20 }
		]
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
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "StraitDressOpen", "Yoked", "Hogtied", "AllFours"],
		Color: ["White", "Asian", "Black"],
		Asset: ["Small", "Normal", "Large", "XLarge"]
	},

	{
		Group: "BodyLower",
		Priority: 9,
		Top: 462,
		AllowNone: false,
		AllowColorize: false,
		ParentSize: "BodyUpper",
		ParentColor: "BodyUpper",
		AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread"],
		Color: ["White", "Asian", "Black"],
		Asset: ["Small", "Normal", "Large", "XLarge"]
	},

	{
		Group: "Hands",
		Priority: 27,
		AllowNone: false,
		AllowColorize: false,
		ParentColor: "BodyUpper",
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "AllFours"],
		Color: ["White", "Asian", "Black"],
		Asset: ["Default"]
	},

	{
		Group: "HairBack",
		Priority: 5,
		Left: 50,
		Top: 0,
		AllowNone: false,
		Color: ["#6a3628", "#202020", "#dcc787", "#6c2132", "#999999", "#dddddd", "#e781b1", "#81e7b1", "#81b1e7", "#eeee99", "#ee9999", "#ee99ee"],
		AllowPose: ["Suspension", "Hogtied", "AllFours"],
		Asset: ["HairNone", "HairBack1", "HairBack2", "HairBack4", "HairBack10", "HairBack14", "HairBack15", "HairBack16", "HairBack17", "HairBack18", "HairBack19", "HairBack20", "HairBack5", "HairBack8", "HairBack11", "HairBack6", "HairBack21", "HairBack22",
		    { Name: "HairBack23", Priority: 39},
		    { Name: "HairBack24", Priority: 39}
		]
	},

	{
		Group: "HairFront",
		Priority: 44,
		Left: 150,
		Top: 50,
		AllowNone: false,
		ParentColor: "HairBack",
		Color: ["#6a3628", "#202020", "#dcc787", "#6c2132", "#999999", "#dddddd", "#e781b1", "#81e7b1", "#81b1e7", "#eeee99", "#ee9999", "#ee99ee"],
		Asset: ["HairFront1", "HairFront2", "HairFront3", "HairFront4", "HairFront5", "HairFront6", "HairFront7", "HairFront8", "HairFront9", "HairFront10", "HairFront11", "HairFront12", "HairFront13", "HairFront14"]
	},

	{
		Group: "Eyes",
		Priority: 9,
		Left: 200,
		Top: 145,
		AllowNone: false,
		Color: ["#6a3628", "#5e481e", "#666666", "#555588", "#558855", "#885555", "#202020", "#aa3333", "#33aa33", "#3333aa", "#aaaa33", "#33aaaa", "#aa33aa"],
		AllowExpression: ["Closed", "Dazed", "Shy", "Sad", "Horny", "Lewd", "VeryLewd", "Heart", "LewdHeart", "Dizzy", "Daydream", "WinkL", "WinkR", "Angry", "Surprised", "Scared"],
		FullAlpha: false,
		Blink: true,
		Asset: ["Eyes1", "Eyes2", "Eyes3", "Eyes4", "Eyes5", "Eyes6", "Eyes7", "Eyes8", "Eyes9", "Eyes10", "Eyes11"]
	},

	{
		Group: "Mouth",
		Priority: 10,
		Left: 235,
		Top: 180,
		AllowNone: false,
		Color: ["Default", "#803d26", "#aa5555", "#cc3333", "#55aa55", "#5555aa", "#55aaaa", "#aa55aa", "#aaaa55"],
		AllowExpression: ["Frown", "Sad", "Pained", "Angry", "HalfOpen", "Open", "Ahegao", "Moan", "TonguePinch", "LipBite", "Happy", "Devious", "Laughing", "Grin", "Smirk"],
		Asset: [
			{ Name: "Regular", 
			Layer: [
					{ Name: "Lips", AllowColorize: true },
					{ Name: "Inner", AllowColorize: false }
				]
			},
			{ Name: "Discreet" }
		]
	},

	{
		Group: "Nipples",
		Priority: 11,
		Left: 175,
		Top: 285,
		AllowNone: false,
		ParentGroup: "BodyUpper",
		Default: false,
		Color: ["Default", "#a6665b", "#803d26", "#d68777", "#9b4a2e", "#bb6655"],
		Asset: ["Nipples1", "Nipples2", "Nipples3"]
	},

	{
		Group: "Pussy",
		Priority: 12,
		Left: 225,
		Top: 500,
		AllowNone: false,
		Color: ["Default", "#6a3628", "#443330", "#222222"],
		FullAlpha: false,
		Asset: ["PussyLight1", "PussyLight2", "PussyLight3", "PussyDark1", "PussyDark2", "PussyDark3"]
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
		Priority: 49,
		Left: 250,
		Top: 0,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["Afk", "Sleep", "Hearts", "Tear", "Hearing", "Confusion", "Exclamation", "Annoyed", "Read"],
		Asset: ["Emoticon"]
	},

	// Item specific
	{
		Group: "ItemFeet",
		Priority: 27,
		IsRestraint: true,
		Left: 125,
		Top: 725,
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "Grope"],
		ParentGroup: "BodyLower",
		Default: false,
		Effect: ["Freeze", "Prone"],
		Color: ["Default"],
		Zone: [[100, 750, 300, 120]],
		Asset: [
			{ Name: "NylonRope", Value: 30, Time: 15, DefaultColor: "#909090", BuyGroup: ["NylonRope"], SetPose: ["LegsClosed"], Audio: "RopeLong" },
			{ Name: "HempRope", Value: 60, Difficulty: 3, Time: 15, DefaultColor: "#956B1C", BuyGroup: ["HempRope"], HideItem: ["ItemDevicesTeddyBear"], SetPose: ["LegsClosed"], Extended: true, AllowType: ["Mermaid", "Suspension"], Audio: "RopeLong" },
			{ Name: "LeatherBelt", Value: 25, Time: 10, RemoveTime: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "SturdyLeatherBelts", Value: 50, Time: 10, RemoveTime: 5, AllowLock: true, BuyGroup: "SturdyLeatherBelts", SetPose: ["LegsClosed"], Extended: true, AllowType: ["One", "Two", "Three", "Four"] },
			{ Name: "Irish8Cuffs", Value: 25, Time: 10, RemoveTime: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "DuctTape", Value: 50, Time: 15, RemoveTime: 10, BuyGroup: "DuctTape", HideItem: ["ItemBootsThighHighLatexHeels"], Extended: true, SetPose: ["LegsClosed"], AllowType: ["HalfFeet", "MostFeet", "CompleteFeet"] },
			{ Name: "LeatherAnkleCuffs", Priority: 24, Value: 30, Difficulty: 2, Time: 10, Random: false, AllowLock: true, Effect: [], AllowPose: ["LegsClosed"], Extended: true, AllowEffect: ["Freeze", "Prone"] },
			{ Name: "OrnateAnkleCuffs", Priority: 24, Value: 90, Difficulty: 3, Time: 10, Random: false, AllowLock: true, Effect: [], AllowPose: ["LegsClosed"], Extended: true, AllowEffect: ["Freeze", "Prone"],
			Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "SpreaderMetal", Value: 50, Difficulty: 3, Time: 10, Random: false, AllowLock: true, Prerequisite: ["LegsOpen", "NotKneeling"], Effect: ["Freeze", "Prone"], SetPose: ["LegsOpen"], Block: ["ItemLegs"], RemoveAtLogin: true },
			{ Name: "BallChain", Value: 40, Difficulty: 5, Time: 10, RemoveTime: 10, Random: false, AllowLock: true, Effect: [], AllowPose: ["LegsOpen", "LegsClosed"] },
			{ Name: "AnkleShackles", Value: 30, Difficulty: 6, Time: 10, RemoveTime: 5, Random: false, AllowLock: true, Effect: ["Prone"], AllowPose: ["LegsOpen", "LegsClosed"] },
			{ Name: "Zipties", Value: 20, Difficulty: 6, Time: 5, RemoveTime: 6, BuyGroup: "Zipties", SetPose: ["LegsClosed"] },
			{ Name: "Chains", Value: 90, Difficulty: 5, Time: 20, AllowLock: true, BuyGroup: "Chains", SetPose: ["LegsClosed"], Extended: true, AllowType: ["Strict", "Suspension"] },
			{ Name: "SpreaderDildoBar", Value: 60, Difficulty: 5, Time: 10, Random: false, AllowLock: true, Top: 400, Prerequisite: ["AccessVulva", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste"], Effect: ["Freeze", "Prone"], SetPose: ["LegsOpen"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva"],
			Layer: [
				{ Name: "DildoBar", AllowColorize: true },
				{ Name: "Pussy", AllowColorize: false }
			], RemoveAtLogin: true },
			{ Name: "SpreaderVibratingDildoBar", Value: 70, Difficulty: 5, Time: 10, Random: false, AllowLock: true, Top: 400, Prerequisite: ["AccessVulva", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste"], Effect: ["Egged", "Freeze", "Prone"], SetPose: ["LegsOpen"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
			Layer: [
				{ Name: "DildoBar", AllowColorize: true },
				{ Name: "Pussy", AllowColorize: false }
			], RemoveAtLogin: true },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemLegs",
		Priority: 25,
		IsRestraint: true,
		Left: 125,
		Top: 400,
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "Grope"],
		ParentGroup: "BodyLower",
		Default: false,
		Effect: ["Prone", "KneelFreeze"],
		Color: ["Default"],
		AllowPose: ["Kneel"],
		Zone: [[100, 580, 300, 170]],
		Asset: [
			{ Name: "NylonRope", Value: 30, Time: 10, DefaultColor: "#909090", BuyGroup: ["NylonRope"], SetPose: ["LegsClosed"], Audio: "RopeLong" },
			{ Name: "HempRope", Value: 60, Difficulty: 3, Time: 10, RemoveTime: 15, DefaultColor: "#956B1C", BuyGroup: ["HempRope"], SetPose: ["LegsClosed"], Extended: true, AllowType: ["Mermaid"], Audio: "RopeLong" },
			{ Name: "LeatherBelt", Value: 25, Time: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "SturdyLeatherBelts", Value: 50, Time: 5, AllowLock: true, BuyGroup: "SturdyLeatherBelts", SetPose: ["LegsClosed"], Extended: true, AllowType: ["One", "Two", "Three", "Four"] },
			{ Name: "DuctTape", Value: 50, Time: 15, RemoveTime: 10, BuyGroup: "DuctTape", HideItem: ["ItemBootsThighHighLatexHeels", "ShoesThighHighLatexHeels"], Extended: true, SetPose: ["LegsClosed"], AllowType: ["HalfLegs", "MostLegs", "CompleteLegs"] },
			{ Name: "LeatherLegCuffs", Priority: 24, Value: 30, Difficulty: 2, Time: 10, Random: false, AllowLock: true, AllowPose: ["LegsClosed"], Extended: true, Effect: [], AllowEffect: ["Prone", "KneelFreeze"], AllowType: ["Closed"] },
			{ Name: "OrnateLegCuffs", Priority: 24, Value: 90, Difficulty: 3, Time: 10, Random: false, AllowLock: true, AllowPose: ["LegsClosed"], Extended: true, Effect: [], AllowEffect: ["Prone", "KneelFreeze"], AllowType: ["Closed"],
			Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{
				Name: "LegBinder", Value: 80, Difficulty: 15, Time: 30, RemoveTime: 20, AllowLock: true, DefaultColor: "#222222", Prerequisite: ["NotSuspended", "NotHogtied"], Hide: ["Shoes", "Socks", "ClothLower"], HideItem: ["OrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetLeatherAnkleCuffs", "ItemFeetMermaidRopeTie","ItemBootsThighHighLatexHeels"], Block: ["ItemFeet"], SetPose: ["LegsClosed"], Effect: ["Prone"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false },
				]
			},
			{
				Name: "HobbleSkirt", Value: 125, Difficulty: 15, Time: 30, RemoveTime: 20, AllowLock: true, DefaultColor: "#222222", Prerequisite: ["NotKneeling", "NotSuspended", "NotHogtied"], Hide: ["Shoes","Socks", "ClothLower"], HideItem: ["OrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetLeatherAnkleCuffs", "ItemFeetMermaidRopeTie", "ItemBootsThighHighLatexHeels"], Block: ["ItemPelvis", "ItemFeet", "ItemVulva", "ItemVulvaPiercings", "ItemButt"], SetPose: ["LegsClosed"], Effect: ["Prone"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{
				Name: "WoodenHorse", Priority: 34, Value: 200, Difficulty: 2, Time: 10, Random: false, Prerequisite: ["NotKneeling", "LegsOpen", "NotSuspended", "NotHogtied", "NotShackled"], Hide: ["Shoes", "Socks", "ItemBoots"], HideItem: ["ClothLowerPajama1", "ClothLowerShorts1", "ClothLowerJeans1", "ClothLowerJeans2", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerGown2Skirt", "ClothLowerLatexPants1", "ItemDevicesTeddyBear", "SuitLowerReverseBunnySuit"], Alpha: [[160, 720, 200, 240]], SetPose: ["Horse"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Effect: ["Prone", "Freeze", "Mounted"], Block: ["ItemFeet", "ItemBoots"],
				Layer: [
					{ Name: "Frame", AllowColorize: true },
					{ Name: "Wood", AllowColorize: false }
				]
			},
			{ Name: "Zipties", Value: 20, Difficulty: 6, Time: 5, RemoveTime: 6, BuyGroup: "Zipties", SetPose: ["LegsClosed"] },	
			{ Name: "Chains", Value: 90, Difficulty: 5, Time: 20, RemoveTime: 15, AllowLock: true, BuyGroup: "Chains", SetPose: ["LegsClosed"], Extended: true, AllowType: ["Strict"] },
			{ Name: "FrogtieStraps", Value: 25, Time: 5, Random: false, AllowLock: true, SetPose: ["Kneel"] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemVulva",
		Priority: 15,
		Left: 125,
		Top: 400,
		Category: "Item",
		Activity: ["MasturbateHand", "MasturbateFist", "MasturbateFoot", "MasturbateTongue", "Caress", "Slap", "Kiss", "Nibble"],
		Default: false,
		Color: ["Default"],
		AllowPose: ["Kneel"],
		Zone: [[100, 500, 100, 80]],
		Asset: [
			{ Name: "VibratingEgg", Value: 25, Time: 5, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "VibratingWand", Value: 60, Visible: false, Wear: false, Activity: "MasturbateItem", Bonus: [{ Type: "KidnapManipulation", Factor: 3 }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "VibratorRemote", Value: 50, Visible: false, Wear: false, BuyGroup: "VibratorRemote", Effect: ["Remote"] },
			{ Name: "VibratingLatexPanties", Value: 50, Time: 10, AllowLock: true, DefaultColor: "#60A0AF", Prerequisite: ["AccessVulva", "CannotHaveWand"], Effect: ["Egged", "Chaste"], Block: ["ItemButt"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"] },
			{
				Name: "WandBelt", Priority: 24, Value: 80, Time: 15, AllowLock: true, DefaultColor: "#BBAAAA", Prerequisite: ["CannotHaveWand"], HideItem: ["ClothLowerPajama1", "ClothLowerMistressBottom"], Effect: ["Egged"], Block: ["ItemPelvis"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
				Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Wand", AllowColorize: false }
				]
			},
			{ Name: "PenisDildo", Priority: 11, Value: 20, Time: 10, BuyGroup: "PenisDildo", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }],
			Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{ Name: "VibratingDildo", Priority: 11, Value: 60, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
			Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{
				Name: "InflatableVibeDildo", Priority: 11, Value: 100, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
				Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{
				Name: "ClitoralStimulator", Priority: 11, Value: 70, Time: 10, DefaultColor: "#8a00d1", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
				Layer: [
					{ Name: "Stimulator", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{ Name: "ClitSuctionCup", Priority: 11, Value: 25, Time: 10, Prerequisite: "AccessVulva", Effect: [], Extended: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "TapeStrips", Value: 10, Time: 5, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "BenWaBalls", Value: 30, Time: 5, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "HeavyWeightClamp", Value: 30, Time: 5, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "FullLatexSuitWand", Priority: 34, Value: -1, Difficulty: 12, Time: 5, IsRestraint: true, AllowLock: true, Block: ["ItemVulvaPiercings"], Effect: ["Egged", "Block", "Prone"], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "ClitAndDildoVibratorbelt", Priority: 11, Value: 100, Time: 10, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Hide: ["Panties"], Effect: ["Egged"], Block: ["ItemPelvis"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
			Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Crotch", AllowColorize: false }
				]
			},
			{
				Name: "HempRopeBelt", Value: 60, Time: 15, DefaultColor: "#956B1C", BuyGroup: ["HempRope"], Prerequisite: ["CannotHaveWand"], HideItem: ["ClothLowerPajama1", "ClothLowerMistressBottom"], Effect: ["Egged"], Block: ["ItemPelvis"] , ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
				Layer: [
					{ Name: "Rope", AllowColorize: true },
					{ Name: "Wand", AllowColorize: false }
				]
			},
			AssetSpankingToys
		]
	},
	
	{
		Group: "ItemVulvaPiercings",
		Priority: 13,
		Left: 125,
		Top: 400,
		Category: "Item",
		Default: false,
		Color: ["Default"],
		AllowPose: ["Kneel"],
		Zone: [[200, 500, 100, 80]],
		Asset: [
			{ Name: "StraightClitPiercing", Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "RoundClitPiercing", Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "WeightedClitPiercing", Value: 30, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "BarbellClitPiercing", Value: 20, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChastityClitPiercing", Value: 50, Difficulty: 50, Time: 20, RemoveTime: 20, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"], Effect: ["Chaste"], Block: ["ItemVulva"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChastityClitShield", Value: 70, Difficulty: 50, Time: 30, RemoveTime: 30, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"], Effect: ["Chaste"], Block: ["ItemVulva"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "HighSecurityVulvaShield", Value: 100, Difficulty: 99, Time: 60, RemoveTime: 200, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"], Effect: ["Chaste"], Block: ["ItemVulva"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "JewelClitPiercing", Value: 20, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "AdornedClitPiercing", Value: 20, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ 	
				Name: "VibeHeartClitPiercing", Value: 35, Difficulty: 10, Time: 5, AllowLock: true, AllowLock: true, BuyGroup: ["VibeHeart"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
				Layer: [
					{ Name: "Heart", AllowColorize: true },
					{ Name: "Ring", AllowColorize: false }
				]
			},
			{ Name: "BellClitPiercing", Value: 30, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "TapedClitEgg", Value: 25, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemButt",
		Priority: 4,
		Left: 0,
		Top: 0,
		Category: "Item",
		Activity: ["Kiss", "MasturbateHand", "MasturbateFist", "MasturbateTongue", "Spank", "Caress", "Grope"],
		Default: false,
		Color: ["Default"],
		AllowPose: ["AllFours"],
		Zone: [[300, 500, 100, 80]],
		Asset: [
			{ Name: "BlackButtPlug", Value: 15, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "PenisPlug", Value: 20, Time: 10, Visible: false, BuyGroup: "PenisDildo", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "TailButtPlug", Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HorsetailPlug", Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HorsetailPlug1", Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "PuppyTailPlug", Value: 25, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "PuppyTailPlug1", Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "SuccubusButtPlug", Value: 25, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "SuccubusButtPlug2", Value: 25, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "FoxTails", Priority: 2, Value: 60, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "RaccoonButtPlug", Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "RaccoonTailPlug", Priority: 2, Value: 50, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "AnalBeads", Value: 20, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "AnalBeads2", Value: 70, Time: 14, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowType: ["Base", "_2in", "_3in", "_4in", "_5in"], Extended: true },
			{ Name: "ButtPump", Value: 35, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: [], Extended: true, ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "VibratingButtplug", Value: 60, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "InflVibeButtPlug", Value: 90, Time: 10, Visible: false, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "AnalHook", Value: 20, Time: 10, IsRestraint: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Freeze", "Egged"], Extended: true, AllowType: ["Base", "Chain", "Hair"] },
			{ Name: "ButtPlugLock", Value: 75, Difficulty: 50, Time: 30, RemoveTime: 50, IsRestraint: true, AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Chaste"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 10}, { Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], AllowEffect: ["Chaste", "Tethered", "Freeze", "ForceKneel"], Extended: true, AllowType: ["Base", "ChainShort", "ChainLong"] },
			{ Name: "KittenTail1", Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10}] },
			{ Name: "KittenTail2", Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "FoxTail1", Value: 50, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "FoxTail2", Value: 50, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "WolfTail1", Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "WolfTail2", Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "WolfTail3", Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "DemonPlug", Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "MouseTail1", Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "MouseTail2", Value: 35, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "VibratingDildoPlug", Value: 60, Time: 10, BuyGroup: "VibratingDildo", Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], Effect: ["Egged"] },
  		{ Name: "BunnyTailPlug1", Value: 1, Time: 10, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10}] },
			{ Name: "BunnyTailPlug2", Value: 1, Time: 10, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10}] },
			AssetSpankingToys
		]
	},
	
	{
		Group: "ItemPelvis",
		Priority: 16,
		Left: 125,
		Top: 375,
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "Pinch", "MassageHands", "Grope"],
		ParentGroup: "BodyLower",
		Default: false,
		Color: ["Default"],
		Zone: [[100, 420, 300, 80]],
		Asset: [
			{ Name: "StraponPanties", Value: -1, Time: 15, DefaultColor: "#505050", Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"] },
			{ Name: "LeatherChastityBelt", Value: 30, Difficulty: 8, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "SleekLeatherChastityBelt", Value: 45, Difficulty: 11, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "StuddedChastityBelt", Value: 60, Difficulty: 14, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AllowType: ["ClosedBack"], AllowBlock: ["ItemButt"] },
			{ Name: "MetalChastityBelt", Value: 100, Difficulty: 20, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AllowType: ["ClosedBack"], AllowBlock: ["ItemButt"] },
			{ Name: "PolishedChastityBelt", Value: 150, Difficulty: 30, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AllowType: ["ClosedBack"], AllowBlock: ["ItemButt"] },
			{
				Name: "OrnateChastityBelt", Value: 200, Difficulty: 50, Time: 20, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AllowType: ["ClosedBack"], AllowBlock: ["ItemButt"],
			Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "SteelChastityPanties", Value: 150, Difficulty: 50, Time: 50, RemoveTime: 60, AllowLock: true, Prerequisite: "AccessVulva", Hide: ["ItemVulva", "ItemVulvaPiercings"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "HarnessPanties1", Priority: 19, Value: 35, Difficulty: 8, Time: 10, RemoveTime: 15, AllowLock: true, BuyGroup: ["HarnessPanties1"], Prerequisite: "AccessVulva", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], AllowPose: ["LegsClosed", "Kneel"] },
			{ Name: "HarnessPanties2", Priority: 19, Value: 40, Difficulty: 9, Time: 10, RemoveTime: 15, AllowLock: true, Left: 85, Top: 395, BuyGroup: ["HarnessPanties2"], Prerequisite: "AccessVulva", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread"] },
			{ Name: "LeatherStrapPanties1", Value: 20, Difficulty: 5, Time: 20, RemoveTime: 10, AllowLock: true, Left: 150, Top: 395, BuyGroup: ["LeatherStrapPanties1"], Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{
				Name: "LoveChastityBelt", Value: 250, Difficulty: 50, Time: 20, RemoveTime: 10, OwnerOnly: true, Prerequisite: "AccessVulva", HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo"],
				Extended: true, Effect: ["Lock"],
				AllowEffect: ["Chaste", "Egged", "Vibrating"],
				AllowBlock: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"],
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
				Layer: [
					{ Name: "Open", AllowColorize: true, AllowTypes: ["", "Open"], HasType: false },
					{ Name: "Closed", AllowColorize: true, AllowTypes: ["Closed", "Vibe", "Shock"], HasType: false },
					{ Name: "Vibe", AllowColorize: false, AllowTypes: ["Vibe"], HasType: false, OverrideAllowPose: [] },
					{ Name: "Shock", AllowColorize: false, AllowTypes: ["Shock"], HasType: false, OverrideAllowPose: [] },
					{ Name: "Lock", AllowColorize: false, AllowTypes: ["", "Open", "Closed", "Vibe", "Shock"], HasType: false, OverrideAllowPose: [] },
					{ Name: "ShieldLock", AllowColorize: false, AllowTypes: ["Closed", "Vibe", "Shock"], HasType: false, OverrideAllowPose: [] },
				]
			},
			{ Name: "LeatherCrop", Value: 20, Wear: false, BuyGroup: "LeatherCrop", Activity: "SpankItem", Bonus: [{ Type: "KidnapDomination", Factor: 3 }], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "LeatherWhip", Value: 40, Wear: false, BuyGroup: "LeatherWhip", Activity: "SpankItem", Bonus: [{ Type: "KidnapBruteForce", Factor: 3 }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemTorso",
		Priority: 17,
		Left: 125,
		Top: 200,
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "MassageFeet", "Rub"],
		Category: "Item",
		Default: false,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Yoked", "Hogtied", "AllFours"],
		Color: ["Default"],
		Zone: [[100, 340, 300, 80]],
		Asset: [
			{ Name: "NylonRopeHarness", Value: 30, Time: 20, DefaultColor: "#909090", BuyGroup: ["NylonRope"], Prerequisite: "AccessTorso", Extended: true, AllowType: ["Harness", "Diamond", "Star", "Waist"], Audio: "RopeLong" },
			{ Name: "HempRopeHarness", Value: 60, Difficulty: 3, Time: 20, RemoveTime: 25, DefaultColor: "#956B1C", BuyGroup: ["HempRope"], Prerequisite: "AccessTorso", Extended: true, AllowType: ["Harness", "Diamond", "Star", "Waist"], Audio: "RopeLong" },
			{ Name: "LeatherHarness", Value: 60, Difficulty: 50, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessTorso" },
			{ Name: "AdultBabyHarness", Priority: 34, Value: 50, Difficulty: 3, Time: 15, RemoveTime: 10, AllowLock: true, DefaultColor: "#aaaaaa", ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HarnessBra1", Priority: 20, Value: 30, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: ["HarnessBra1"], Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HarnessBra2", Priority: 20, Value: 40, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: ["HarnessBra2"], Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Corset2", Priority: 21, Value: 30, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: ["Corset2"], Prerequisite: "AccessTorso", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset3", Priority: 21, Value: 25, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: ["Corset3"], Prerequisite: "AccessTorso", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Corset4", Priority: 21, Value: 15, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: ["Corset4"], Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "Corset5", Priority: 21, Value: 20, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: ["Corset5"], Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LeatherBreastBinder", Value: 30, Difficulty: 50, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessTorso" },
			{ Name: "LatexCorset1", Priority: 20, Value: 40, Difficulty: 8, Time: 15, RemoveTime: 10, AllowLock: true, BuyGroup: ["LatexCorset1"], Prerequisite: "AccessTorso", Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LeatherStrapBra1", Value: 15, Difficulty: 5, Time: 15, RemoveTime: 10, AllowLock: true, Left: 150, Top: 200, BuyGroup: ["LeatherStrapBra1"], Prerequisite: "AccessTorso" },
			{ Name: "CrotchChain", Value: 40, Difficulty: 50, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: "AccessTorso" },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemNipples",
		Priority: 22,
		Left: 150,
		Top: 200,
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "Lick", "Suck", "Nibble", "Pinch", "Caress"],
		Category: "Item",
		Default: false,
		Color: ["Default"],
		AllowPose: ["AllFours"],
		Zone: [[100, 270, 100, 70]],
		Asset: [
			{ Name: "NippleClamp", Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "VibeNippleClamp", Value: 40, Time: 10, Prerequisite: "AccessBreast", Effect: ["Egged"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "VibratorRemote", Value: 50, Wear: false, BuyGroup: "VibratorRemote", Effect: ["Remote"] },
			{ Name: "ChainClamp", Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ScrewClamps", Value: 35, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChainTassles", Value: 45, Time: 10, Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "HeartPasties", Value: 20, Time: 10, DefaultColor: "#800000",  Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "TapedVibeEggs", Value: 30, Time: 5, Prerequisite: "AccessBreast", Effect: ["Egged"], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "NippleSuctionCups", Value: 25, Time: 10, Prerequisite: "AccessBreast",  Hide: ["ItemNipplesPiercings"], Effect: [], Extended: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "NippleTape" ,Value: 10, Time: 5, Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChopStickNippleClamps", Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "KittyPasties", Value: 20, Time: 10, DefaultColor: "#444444", Prerequisite: "AccessBreast", Hide: ["ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "Clothespins", Value: 15, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "NippleWeightClamps", Value: 35, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "BellClamps", Value: 20, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 10 }] },
			AssetSpankingToys
		]
	},
	
	{
		Group: "ItemNipplesPiercings",
		Priority: 13,
		Left: 150,
		Top: 200,
		ParentGroup: "BodyUpper",
		Category: "Item",
		Default: false,
		Color: ["Default"],
		AllowPose: ["AllFours"],
		Zone: [[200, 270, 100, 70]],
		Asset: [
			{ Name: "StraightPiercing", Value: 10, Difficulty: 10, Time: 15, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "RoundPiercing", Value: 30, Difficulty: 10, Time: 15, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], Extended: true, AllowType: ["Base", "Chain"] },
			{ Name: "WeightedPiercing", Value: 40, Difficulty: 10, Time: 10, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], Extended: true, AllowType: ["Base", "Chain"] },
			{ Name: "NippleAccessory1", Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], },
			{ Name: "NippleAccessory2", Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], },
			{ Name: "NippleAccessory3", Value: 15, Difficulty: 10, Time: 5, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], },
			{ Name: "BarbellPiercing", Value: 20, Difficulty: 10, Time: 15, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "NippleChastityPiercing1", Value: 50, Difficulty: 50, Time: 30, RemoveTime: 30, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], Effect: ["BreastChaste"], Block: ["ItemNipples"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "NippleChastityPiercing2", Value: 50, Difficulty: 50, Time: 30, RemoveTime: 30, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], Effect: ["BreastChaste"], Block: ["ItemNipples"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ 
				Name: "VibeHeartPiercings", Value: 40, Difficulty: 10, Time: 10, AllowLock: true, AllowLock: true, BuyGroup: ["VibeHeart"], Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], Effect: ["Egged"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], AllowEffect: ["Egged", "Vibrating"],
				Layer: [
					{ Name: "Heart", AllowColorize: true },
					{ Name: "Ring", AllowColorize: false }
				]
			},
			{Name: "BellPiercing", Value: 30, Difficulty: 10, Time: 15, AllowLock: true, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemBreast",
		Priority: 16,
		Left: 150,
		Top: 200,
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "Lick", "Tickle", "Slap", "Caress", "MasturbateHand", "Grope"],
		Category: "Item",
		Default: false,
		Color: ["Default"],
		AllowPose: ["AllFours"],
		Zone: [[300, 270, 100, 70]],
		Asset: [
			{ Name: "MetalChastityBra", Value: 60, Difficulty: 50, Time: 15, AllowLock: true, Prerequisite: "AccessBreast", Hide: ["ItemNipples", "ItemNipplesPiercings"], Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "PolishedChastityBra", Value: 100, Difficulty: 50, Time: 15, AllowLock: true, Prerequisite: "AccessBreast", Hide: ["ItemNipples", "ItemNipplesPiercings"], Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "OrnateChastityBra", Value: 150, Difficulty: 50, Time: 15, AllowLock: true, Prerequisite: "AccessBreast", Hide: ["ItemNipples", "ItemNipplesPiercings"], Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }],
			Layer: [
					{ Name: "Bra", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "LeatherCrop", Value: 20, Wear: false, BuyGroup: "LeatherCrop", Activity: "SpankItem", Bonus: [{ Type: "KidnapDomination", Factor: 3 }], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "LeatherWhip", Value: 40, Wear: false, BuyGroup: "LeatherWhip", Activity: "SpankItem", Bonus: [{ Type: "KidnapBruteForce", Factor: 3 }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemArms",
		Priority: 31,
		IsRestraint: true,
		Left: 50,
		Top: 200,
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Pinch", "Caress", "MassageHands", "Grope", "Cuddle"],
		Category: "Item",
		Default: false,
		Color: ["Default"],
		Zone: [[10, 200, 90, 200], [400, 200, 90, 200]],
		Asset: [
			{ Name: "NylonRope", Value: 30, SelfBondage: 2, Time: 15, DefaultColor: "#909090", BuyGroup: ["NylonRope"], SetPose: ["BackBoxTie"], Effect: ["Block", "Prone"], Audio: "RopeLong" },
			{ Name: "HempRope", Value: 60, Difficulty: 3, SelfBondage: 2, Time: 20, DefaultColor: "#956B1C", BuyGroup: ["HempRope"], HideItem: ["ItemDevicesTeddyBear"], Extended: true, SetPose: ["BackBoxTie"], AllowType: ["Hogtied", "SuspensionHogtied", "AllFours", "WristTie", "WristElbowTie", "RopeCuffs", "WristElbowHarnessTie"], Effect: ["Block", "Prone"], AllowEffect: ["Freeze", "Block", "Prone", "ForceKneel"], AllowBlock: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], RemoveItemOnRemove: [{ Name: "SuspensionHempRope", Group: "ItemHidden" }], Audio: "RopeLong" },
			{ Name: "MetalCuffs", Priority: 29, Value: 40, Difficulty: 5, Time: 5, SetPose: ["BackCuffs"], Effect: ["Block", "Prone", "Lock"] },
			{ Name: "SturdyLeatherBelts", Value: 50, Difficulty: 5, SelfBondage: 4, Time: 20, AllowLock: true, BuyGroup: "SturdyLeatherBelts", SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Extended: true, AllowType: ["One", "Two", "Three", "Four"] },
			{ Name: "LeatherArmbinder", Priority: 6, Value: 80, Difficulty: 10, SelfBondage: 7, Time: 25, RemoveTime: 10, AllowLock: true, DefaultColor: "#404040", Extended: true, SelfUnlock: false, SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemHands"], RemoveItemOnRemove: [{ Name: "LeatherArmbinderStrap", Group: "ItemHidden" },{ Name: "LeatherArmbinderWrapStrap", Group: "ItemHidden"}] },
			{ Name: "ArmbinderJacket", Priority: 33, Value: 100, Difficulty: 12, SelfBondage: 8, Time: 35, RemoveTime: 25, AllowLock: true, Hide: ["Cloth"], SelfUnlock: false, SetPose: ["BackElbowTouch", "Bolero"], Effect: ["Block", "Prone"], Block: ["ItemHands"] },
			{ Name: "LeatherCuffs", Priority: 29, Value: 100, Difficulty: 3, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", AllowPose: ["BackBoxTie", "BackElbowTouch"], Extended: true, AllowEffect: ["Block", "Prone"], AllowType: ["Wrist", "Elbow", "Both"] },
			{ Name: "OrnateCuffs", Priority: 29, Value: 200, Difficulty: 4, Time: 20, Random: false, AllowLock: true, AllowPose: ["BackBoxTie", "BackElbowTouch"], Extended: true, AllowEffect: ["Block", "Prone"], AllowType: ["Wrist", "Elbow", "Both"],
			Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "MittenChain1", Value: -1, Difficulty: 5, SelfBondage: 5, Time: 15, Random: false, AllowLock: true, Block: ["ItemHands", "ItemTorso"] },
			{ Name: "FourLimbsShackles", Value: -1, Time: 30, Enable: false, SetPose: ["BackBoxTie"], Effect: ["Block", "Prone", "Lock"] },
			{ Name: "Manacles", Value: 120, Difficulty: 16, SelfBondage: 1, Time: 30, Random: false, AllowLock: true, Prerequisite: ["NoItemFeet", "NotMounted", "NotSuspended", "NotHogtied", "NotKneelingSpread"], SetPose: ["BackBoxTie", "Kneel"], Effect: ["Block", "Freeze", "Prone", "ForceKneel"], Block: ["ItemFeet"] },
			{ Name: "FullBodyShackles", Value: 150, Difficulty: 18, Random: false, AllowLock: true, Prerequisite: ["NoItemFeet", "NotMounted", "NotSuspended", "NotHogtied", "NotKneelingSpread"], AllowPose: ["LegsClosed", "Kneel"], Effect: ["Prone", "Shackled"], Block: ["ItemFeet"]},
			{ Name: "WristShackles", Value: 80, Difficulty: 6, Time: 20, Random: false, AllowLock: true, AllowPose: ["BackCuffs"], Extended: true, AllowEffect: ["Block", "Prone"], Effect: ["Prone"], AllowType: ["Behind"] },
			{ Name: "StraitLeotard", Value: 120, Difficulty: 13, SelfBondage: 7, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#70C0C0", Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ItemButtAnalBeads2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup"], SelfUnlock: false, SetPose: ["BackElbowTouch"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"], Effect: ["Block", "Prone"] },
			{ Name: "StraitJacket", Value: 150, Difficulty: 6, SelfBondage: 8, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#A0A0A0", Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt"], SelfUnlock: false, Extended: true, SetPose: ["BackElbowTouch"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"], Effect: ["Block", "Prone"] },	
			{ Name: "CollarCuffs", Value: 60, Difficulty: 9, SelfBondage: 3, Time: 35, RemoveTime: 20, Visible: false, AllowLock: true, Prerequisite: "Collared", SelfUnlock: false, Extended: true, SetPose: ["BackBoxTie"], Block: ["ItemHands", "ItemNeck"], Effect: ["Block", "Prone"] },
			{ Name: "LeatherStraitJacket", Value: 200, Difficulty: 7, SelfBondage: 8, Time: 45, RemoveTime: 30, AllowLock: true, Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt"], SelfUnlock: false, Extended: true, SetPose: ["BackElbowTouch"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"], Effect: ["Block", "Prone"], AllowType: ["Normal", "Snug", "Tight"] },
			{ 
				Name: "Bolero", Priority: 33, Value: 100, Difficulty: 11, SelfBondage: 7, Time: 35, RemoveTime: 20, AllowLock: true, DefaultColor: "#E080A0", SelfUnlock: false, SetPose: ["BackElbowTouch", "Bolero"], Block: ["ItemHands"], Effect: ["Block", "Prone"],
				Layer: [
					{ Name: "Leather", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{ Name: "DuctTape", Value: 50, Difficulty: 5, SelfBondage: 4, Time: 20, RemoveTime: 10, BuyGroup: "DuctTape", Hide: ["ItemNipplesPiercings"], Extended: true, SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], AllowBlock: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemNipples", "ItemNipplesPiercings"], AllowType: ["Bottom", "Top", "Full", "Complete"], ParentGroup: ["BodyLower"], AllowPose: ["Horse", "KneelingSpread"] },
			{ 
				Name: "BitchSuit", Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#888888", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "ClothLower", "Bra", "Panties", "BodyLower", "Shoes", "Socks", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "ItemFeet"],
				Extended: true,
				SelfUnlock: false,
				SetPose: ["BackElbowTouch", "Kneel", "StraitDressOpen"],
				Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"],
				Effect: ["Block", "Prone", "ForceKneel"],
				AllowBlock: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemButt"],
				AllowType: ["", "UnZip", "Latex"],
				Layer: [
				    { Name: "Latex", AllowColorize: true, AllowTypes: [""], HasType: false },
					{ Name: "UnZip", AllowColorize: true, AllowTypes: ["UnZip"], HasType: false }
				]
			},
			{ 
				Name: "BitchSuitExposed", Value: 175, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#888888", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"],
				Hide: ["Cloth", "ClothLower", "BodyLower", "Shoes", "Socks", "ItemBoots", "ItemLegs", "ItemFeet"],
				SelfUnlock: false,
				SetPose: ["BackElbowTouch", "Kneel", "StraitDressOpen"],
				Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"],
				Effect: ["Block", "Prone", "ForceKneel"]
			},
			{ Name: "CollarLeashHolding", Priority: 36, Value: -1, Difficulty: 1, Time: 3, RemoveTime: 3, Random: false, Prerequisite: ["NotSuspended", "NotHogtied"] },
			{
			    Name: "StraitDress", Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#4040C0", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "Suit", "SuitLower"], HideItem: ["ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetMermaidRopeTie", "ItemFeetLeatherAnkleCuffs"], AllowPose: ["Kneel"], SelfUnlock: false, SetPose: ["BackElbowTouch", "LegsClosed"], Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands", "ItemFeet", "ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemLegs", "ItemButt"], Effect: ["Block", "Prone"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{
			    Name: "StraitDressOpen", Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#400000", Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "BodyLower", "Shoes", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "Suit"], HideItem: ["ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetMermaidRopeTie", "ItemFeetLeatherAnkleCuffs"], AllowPose: ["Kneel"], SelfUnlock: false, SetPose: ["BackElbowTouch", "StraitDressOpen"], Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands", "ItemFeet", "ItemNipples", "ItemNipplesPiercings", "ItemLegs"], Effect: ["Block", "Prone"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{ Name: "Yoke", Priority: 39, Value: 80, Difficulty: 10, SelfBondage: 6, Time: 20, AllowLock: true, SetPose: ["Yoked"], Effect: ["Block", "Prone"] },
			{ Name: "Pillory", Priority: 44, Value: -1, Difficulty: 12, SelfBondage: 5, Time: 20, Random: false, AllowLock: true, SetPose: ["Yoked"], Effect: ["Block", "Prone"] },
			{
				Name: "FullLatexSuit", Value: 200, Difficulty: 15, SelfBondage: 8, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#888888", Prerequisite: ["NotSuspended", "NotKneeling", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotKneelingSpread", "NoFeetSpreader", "NotShackled", "CannotBeSuited"],
				Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "Suit", "SuitLower"],
				Extended: true,
				SetPose: ["BackElbowTouch", "StraitDressOpen"],
				Block: ["ItemBoots", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet"],
				Effect: ["Block", "Prone", "Freeze", "BlockKneel"],
				AllowEffect: ["Egged", "Vibrating"],
				AllowBlock: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemButt"],
				AllowType: ["", "Base", "UnZip", "Latex"],
				RemoveItemOnRemove: [ { Name: "FullLatexSuitWand", Group: "ItemVulva" } ],
				Layer: [
				    { Name: "Latex", AllowColorize: true, AllowTypes: ["", "Base"], HasType: false },
					{ Name: "UnZip", AllowColorize: true, AllowTypes: ["UnZip", "Base"], HasType: false },
					{ Name: "Base", AllowColorize: false, AllowTypes: ["", "Base", "UnZip", "Latex"], HasType: false }
				]
			},
			{ Name: "Zipties", Value: 20, Difficulty: 6, SelfBondage: 1, RemoveTime: 6, BuyGroup: "Zipties", SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"] },
			{ Name: "BoxTieArmbinder", Value: 140, Difficulty: 11, SelfBondage: 7, Time: 40, RemoveTime: 30, AllowLock: true, SelfUnlock: false, SetPose: ["BackElbowTouch", "Bolero"], Block: ["ItemHands"], Effect: ["Block", "Prone"] },
			{ 
				Name: "BondageBouquet", Priority: 41, Value: 40, Difficulty: 3, Time: 15, Random: false, AllowLock: true, BuyGroup: "Bouquet", Effect: ["Prone"],
				Layer: [
					{ Name: "Base", AllowColorize: false },
					{ Name: "Flowers", AllowColorize: true }
				]
			},
			{ Name: "Chains", Value: 90, Difficulty: 5, SelfBondage: 3, Time: 30, AllowLock: true, BuyGroup: "Chains", Extended: true, SetPose: ["BackBoxTie"], AllowType: ["Hogtied", "SuspensionHogtied", "AllFours", "WristTie", "WristElbowTie", "ChainCuffs"], Effect: ["Block", "Prone"], AllowEffect: ["Freeze", "Block", "Prone", "ForceKneel"], AllowBlock: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], RemoveItemOnRemove: [{ Name: "SuspensionChains", Group: "ItemHidden" }] },
			{ Name: "ChainLeashHolding", Priority: 36, Value: -1, Difficulty: 1, Time: 3, RemoveTime: 3, Random: false, Prerequisite: ["NotSuspended", "NotHogtied"] },
			{
			    Name: "PetCrawler", Priority: 39, Value: 80, Difficulty: 10, SelfBondage: 7, Time: 20, Random: false, AllowLock: true, Prerequisite: ["NoItemFeet", "NoItemLegs", "LegsOpen", "NotMounted", "NotHorse", "NotSuspended", "NotYoked", "NotKneelingSpread", "NoFeetSpreader", "StraitDressOpen" ], Hide: ["ItemBoots", "Suit", "Panties", "Bra"],
	            HideItem: ["ItemButtRaccoonTailPlug", "TailStrapsRaccoonTailStrap", "ItemButtKittenTail1", "TailStrapsKittenTail1", "ItemNipplesPiercingsNippleChastityPiercing2", "ItemTorsoAdultBabyHarness", "ItemTorsoCorset2", "ItemTorsoCorset3", "ItemNipplesPiercingsNippleChastityPiercing1", "ItemNipplesChainTassles", "ItemNipplesHeartPasties", "ItemNipplesNippleTape", "ItemNipplesKittyPasties"], 
				SetPose: ["AllFours"],
				Effect: ["Block", "Prone", "ForceKneel"],
				Block: ["ItemLegs", "ItemFeet"] },
				{
					Name: "MermaidSuit", Value: 200, Difficulty: 15, SelfBondage: 6, Time: 40, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#400000", Prerequisite: ["NotSuspended", "NotKneeling", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotKneelingSpread", "NoFeetSpreader", "NotShackled", "CannotBeSuited"],
					Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemLegs", "Suit", "SuitLower", "ItemPelvis", "ItemFeet", "Panties"],
					HideItem: ["ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetMermaidRopeTie", "ItemFeetLeatherAnkleCuffs"],
					Extended: true,
					SetPose: ["BackElbowTouch", "StraitDressOpen"],
					Block: ["ItemBoots", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet"],
					Effect: ["Block", "Prone", "Freeze", "BlockKneel"],
					AllowEffect: ["Egged", "Vibrating"],
					AllowBlock: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemButt"],
					AllowType: ["", "UnZip", "Latex"],
					Layer: [
						{ Name: "Latex", AllowColorize: true, AllowTypes: [""], HasType: false },
						{ Name: "UnZip", AllowColorize: true, AllowTypes: ["UnZip"], HasType: false }
					]
				},	
			AssetSpankingToys
		]
	},

	{
		Group: "ItemHands",
		Priority: 35,
		IsRestraint: true,
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "PoliteKiss", "Lick", "Suck", "Nibble", "Spank", "Caress", "TakeCare"],
		Category: "Item",
		Default: false,
		Color: ["Default"],
		Zone: [[10, 400, 90, 200], [400, 400, 90, 200]],
		Asset: [
			{ Name: "PaddedMittens", Value: 40, Difficulty: 4, SelfBondage: 2, Time: 15, AllowLock: true, DefaultColor: "#bbbbbb", AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], Extended: true },
			{ Name: "PawMittens", Value: 50, Difficulty: 4, SelfBondage: 1, Time: 15, AllowLock: true, DefaultColor: "#bbbbbb", AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], Extended: true },
			{ Name: "LeatherMittens", Value: 60, Difficulty: 5, SelfBondage: 4, Time: 15, RemoveTime: 5, AllowLock: true, SetPose: ["TapedHands"], AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"] },
			{ Name: "PaddedLeatherMittens", Value: 70, Difficulty: 6, SelfBondage: 5, Time: 15, RemoveTime: 5, AllowLock: true, SetPose: ["TapedHands"], AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"] },
			{ Name: "PolishedMittens", Value: 80, Difficulty: 8, SelfBondage: 6, Time: 20, RemoveTime: 10, AllowLock: true, AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"]  },
			{ Name: "DuctTape", Value: 50, Difficulty: 5, SelfBondage: 3, Time: 20, RemoveTime: 10, BuyGroup: "DuctTape", Hide: ["Gloves"], SetPose: ["TapedHands"], AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"] },
			{
				Name: "SpankingToys", Priority: 46, Random: false,  Wear: true, IsRestraint: false, BuyGroup: "SpankingToys", Extended: true, AllowType: ["Crop", "Flogger", "Cane", "HeartCrop", "Paddle", "WhipPaddle", "Whip", "CattleProd", "TennisRacket"], IgnoreParentGroup: true, AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"],
				DynamicDescription: C => { return ((InventoryIsWorn(C, "SpankingToys", "ItemHands")) && (InventoryGet(C, "ItemHands").Property != null)) ? InventoryGet(C, "ItemHands").Property.Type : "Spanking Toy" },
				DynamicPreviewIcon: C => { return ((InventoryIsWorn(C, "SpankingToys", "ItemHands")) && (InventoryGet(C, "ItemHands").Property != null)) ? InventoryGet(C, "ItemHands").Property.Type : "Paddle" }
			}, {
				Name: "SpankingToysCrop", Value: 20, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysFlogger", Value: 40, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysCane", Value: 15, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysHeartCrop", Value: 30, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysPaddle", Value: 35, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysWhipPaddle", Value: 25, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysWhip", Value: 50, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysCattleProd", Value: 45, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysTennisRacket", Value: -1, Random: false, PrerequisiteBuyGroups: ["SpankingToys"],
				DynamicAllowInventoryAdd: () => { return false }
			}
		]
	},

	{
		Group: "ItemNeck",
		Priority: 34,
		Left: 185,
		Top: 160,
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Caress", "MassageHands", "Choke"],
		
		Default: false,
		Color: ["Default"],
		Zone: [[200, 200, 100, 70]],
		Asset: [
			{ Name: "LeatherCollar", Value: 20, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LeatherCollarBell", Value: 30, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LeatherCollarBow", Value: 25, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "SlaveCollar", Priority: 34, Value: -1, Difficulty: 50, Time: 5, Enable: false, Random: false, OwnerOnly: true, Effect: ["Lock"], Extended: true, AllowEffect: ["GagNormal"], AllowBlock: ["ItemMouth", "ItemMouth2", "ItemMouth3"], AllowType: ["SteelPosture", "LeatherPosture", "PetCollar", "HighCollar", "LeatherCollarBell", "LeatherCollarBow", "MaidCollar", "BatCollar", "HighSecurityCollar", "SpikeCollar", "BordelleCollar", "LeatherCorsetCollar", "StrictPostureCollar", "LatexPostureCollar", "HeartCollar", "NobleCorsetCollar", "OrnateCollar", "LoveLeatherCollar", "SlenderSteelCollar"]},
			{ Name: "ClubSlaveCollar", Value: -1, Difficulty: 50, Time: 5, Enable: false, Random: false, Effect: ["Lock"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ShockCollar", Value: 80, Difficulty: 50, Time: 15, Random: false, AllowLock: true, BuyGroup: "ShockCollar", Extended: true, Effect: ["ReceiveShock"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "ShockCollarRemote", Value: -1, Random: false, Wear: false, BuyGroup: "ShockCollar", Effect: ["TriggerShock"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }, { Name: "Soft", Group: "Blush", Timer: 15 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "BatCollar", Value: 25, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "PostureCollar", Value: 40, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "SteelPostureCollar", Value: 60, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "DogCollar", Value: 20, Difficulty: 50, Time: 5, Random: false, AllowLock: true },
			{ Name: "SpikeCollar", Value: 40, Difficulty: 50, Time: 5, AllowLock: true },
			{
				Name: "HighCollar", Value: 50, Difficulty: 50, Time: 5, AllowLock: true,
				Layer: [
					{ Name: "Leather", AllowColorize: true },
					{ Name: "Rings", AllowColorize: false }
				]
			},
			{ Name: "LeatherChoker", Value: 10, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "PetCollar", Value: -1, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "MaidCollar", Value: 30, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "BordelleCollar", Value: 30, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LoveLeatherCollar", Value: 50, Difficulty: 50, Time: 5, Random: false, AllowLock: true, LoverOnly: false },
			{ Name: "StrictPostureCollar", Priority: 38, Value: 60, Difficulty: 50, Time: 30, RemoveTime: 40, AllowLock: true },
			{ Name: "NobleCorsetCollar", Value: 45, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "HeartCollar", Value: 50, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LatexPostureCollar", Priority: 38, Value: 80, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, IsRestraint: true, AllowLock: true, BuyGroup: ["LatexPostureCollar"], Block: ["ItemMouth"], Effect: ["GagNormal"] },
			{ Name: "LeatherCorsetCollar", Priority: 38, Value: 75, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, IsRestraint: true, AllowLock: true, DefaultColor: "#404040", BuyGroup: ["LeatherCorsetCollar"], Block: ["ItemMouth"], Effect: ["GagNormal"] },
			{ Name: "HighSecurityCollar", Value: 70, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "OrnateCollar", Value: 80, Difficulty: 50, Time: 5, AllowLock: true ,
			Layer: [
					{ Name: "Collar", AllowColorize: true },
					{ Name: "Gem", AllowColorize: false }
				]
			},
			{ Name: "SlenderSteelCollar", Value: 30, Difficulty: 50, Time: 5, AllowLock: true }
		]
	},

	{
		Group: "ItemNeckAccessories",
		Priority: 41,
		Left: 0,
		Top: 190,
		Category: "Item",
		Default: false,
		Color: ["Default"],
		Zone: [[100, 200, 100, 70]],
		Asset: [
			{ Name: "CollarBell", Value: 5, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarBow", Value: 5, Difficulty: 1, Time: 5, Random: false, Prerequisite: "Collared" },
			{ Name: "CollarShockUnit", Value: 80, Difficulty: 6, Time: 5, Random: false, AllowLock: true, BuyGroup: "ShockCollar", Prerequisite: "Collared", Extended: true, Effect: ["ReceiveShock"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ShockCollarRemote", Value: -1, Random: false, Wear: false, BuyGroup: "ShockCollar", Effect: ["TriggerShock"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }, { Name: "Soft", Group: "Blush", Timer: 15 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "CollarNameTag", Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, DefaultColor: "#aaa366", Prerequisite: "Collared", Extended: true, PropertyLocked: true, AllowType: ["Angel", "BadGirl", "BindMe", "Bitch", "Boobs", "Cupcake", "Devil", "Dom", "Free", "FuckMe", "GagMe", "Goddess", "GoodGirl", "HoldMe", "Jewel", "Love", "Maid", "Meat", "Miss", "Mummy", "Nice", "Needy", "Owned", "Precious", "Pudding", "Queen", "Slave", "Slut", "Sub", "Sweetie", "Taken", "Toy", "Useless", "UseMe", "Whore"] },
			{ Name: "CollarNameTagOval", Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, DefaultColor: "#aaa366", Prerequisite: "Collared", Extended: true, PropertyLocked: true, AllowType: ["Babe", "Bandit", "Bimbo", "Bratty", "Chair", "Chaste", "Crazy", "Cumslut", "Cutie", "Damsel", "Doll", "EdgeMe", "Evil", "ForSale", "Greedy", "Happy", "Horny", "Kinky", "Lady", "LockMe", "Nude", "Nurse", "Nympho", "Painslut", "Pillow", "Punish", "Robber", "Sad", "Switch", "Table", "Ticklish", "Undress", "Victim", "Violent", "Worm"] },
			{ Name: "CollarNameTagPet", Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, DefaultColor: "#aaa366", Prerequisite: "Collared", Extended: true, PropertyLocked: true, AllowType: ["Bunny", "Cat", "Dog", "Foxy", "Kitten", "Kitty", "Mochi", "Panda", "Pet", "PetMe", "Pixie", "Pony", "Puppy", "Racoon", "Sloth"] },
			{ Name: "CollarNameTagLover", Value: -1, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, DefaultColor: "#aaa366", Prerequisite: "Collared", Extended: true, PropertyLocked: true, AllowType: ["Cookie", "Feather", "Lover", "Muffin"] },
			{ Name: "CollarNameTagLivestock", Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, AllowLock: true, Prerequisite: "Collared", Extended: true, PropertyLocked: true, AllowType: ["Animal", "BreedMe", "Cow", "Meat", "MilkMe", "Pig"] },
			{ Name: "CollarMoon", Value: 5, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarSun", Value: 10, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarLapis", Value: 10, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarPentagram", Value: 10, Difficulty: 3, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarFlower", Value: 5, Difficulty: 1, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" },
			{ Name: "CollarRose", Value: 5, Difficulty: 1, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared" }
		]
	},

	{
		Group: "ItemNeckRestraints",
		Priority: 40,
		IsRestraint: true,
		Left: 0,
		Top: 190,
		Category: "Item",
		Default: false,
		Color: ["Default"],
		Zone: [[300, 200, 100, 70]],
		Asset: [
			{ Name: "CollarChainLong", Value: 30, Difficulty: 6, Time: 5, Random: false, AllowLock: true, BuyGroup: "CollarChain", Prerequisite: ["Collared", "NotSuspended", "NotHogtied"], AllowPose: ["Kneel", "Horse", "KneelingSpread", "AllFours"], Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }], ParentGroup: ["BodyLower"] },
			{ Name: "CollarChainShort", Value: -1, Difficulty: 6, Time: 5, Random: false, AllowLock: true, BuyGroup: "CollarChain", Prerequisite: ["Collared", "AllFours", "NotSuspended", "NotHogtied", "NotMounted", "CanKneel"], AllowPose: ["AllFours"], SetPose: ["Kneel"], Effect: ["Freeze", "ForceKneel"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "CollarLeash", Value: 20, Difficulty: 6, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared", AllowPose: ["AllFours"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "CollarLeashTaken", Value: -1, Difficulty: 6, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared", AllowPose: ["AllFours"], Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ChainLeash", Value: 25, Difficulty: 6, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared", AllowPose: ["AllFours"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ChainLeashTaken", Value: -1, Difficulty: 6, Time: 5, Random: false, AllowLock: true, Prerequisite: "Collared", AllowPose: ["AllFours"], Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "CollarChainMedium", Value: -1, Difficulty: 6, Time: 5, Random: false, AllowLock: true, BuyGroup: "CollarChain", Prerequisite: ["Collared", "NotSuspended", "NotHogtied"], AllowPose:  ["AllFours","Kneel"], Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }], ParentGroup: ["BodyLower"] },
		]
	},

	{
		Group: "ItemMouth",
		Priority: 35,
		IsRestraint: true,
		Left: 150,
		Top: 0,
		Category: "Item",
		Activity: ["Kiss", "FrenchKiss", "PoliteKiss", "Lick", "Nibble", "Caress"],
		Default: false,
		Effect: ["GagNormal"],
		Color: ["Default"],
		Zone: [[100, 130, 100, 70]],
		Asset: [
			{ Name: "ClothGag", Value: 15, Difficulty: -4, Time: 10, DefaultColor: "#B0B0B0", BuyGroup: "ClothGag", Prerequisite: "GagFlat", Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowType: ["Small", "Cleave", "OTM", "OTN"], SetPose: ["GagFlat"] },
			{
				Name: "WiffleGag", Value: 30, Difficulty: 1, Time: 10, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "WiffleGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Value: 60, Difficulty: 4, Time: 20, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "HarnessBallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Value: 80, Difficulty: 6, Time: 20, AllowLock: true, DefaultColor: "#404040", BuyGroup: "HarnessPanelGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagEasy"], SetPose: ["GagFlat"] },
			{
				Name: "RingGag", Value: 30, Time: 5, AllowLock: true, DefaultColor: "#404040", BuyGroup: "RingGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"],  ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Value: 50, Difficulty: -2, Time: 10, RemoveTime: 5, BuyGroup: "DuctTape", Prerequisite: "GagFlat", Hide: ["Mouth"], Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy", "GagNormal"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], SetPose: ["GagFlat"] },
			{ Name: "PacifierGag", Value: 10, Difficulty: -50, Time: 2, Random: false, BuyGroup: "PacifierGag", Hide: ["Mouth"], Effect: ["GagVeryLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "HarnessPacifierGag", Value: 50, Difficulty: 2, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPacifierGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], SetPose: ["GagUnique"] },
			{ Name: "DusterGag", Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "DusterGag", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "HarnessPonyBits", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPonyBits", Prerequisite: "GagUnique", Effect: ["GagNormal"], SetPose: ["GagUnique"] },
			{ Name: "PumpGag", Value: 100, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "PumpGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: [], Extended: true, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], AllowEffect: ["GagLight", "GagEasy", "GagMedium", "GagVeryHeavy"], SetPose: ["GagUnique"] },
			{ Name: "KittyGag", Value: 20, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", BuyGroup: "KittyGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], SetPose: ["GagFlat"] },
			{ Name: "KittenHarnessPanelGag", Value: 80, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#A0A0A0", BuyGroup: "KittenHarnessPanelGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagEasy"], SetPose: ["GagFlat"] },
			{ Name: "CarrotGag", Value: 40, Time: 15, Random: false, BuyGroup: "CarrotGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"] },
			{ Name: "MuzzleGag", Value: 70, Difficulty: 6, Time: 20, AllowLock: true, DefaultColor: "#404040", BuyGroup: "MuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"] },
			{ Name: "RegularSleepingPill", Value: -1, Enable: false, Wear: false, Bonus: [{ Type: "KidnapSneakiness", Factor: 3 }] },
			{ Name: "PantiesMask", Value: 20, Time: 15, Random: false, BuyGroup: "PantiesMask", Hide: ["Mouth"], Effect: ["GagVeryLight"] },
			{
				Name: "PlugGag", Value: 100, Time: 20, Random: false, AllowLock: true, BuyGroup: "PlugGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Extended: true, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Effect: ["GagEasy"], AllowEffect: ["GagEasy", "GagHeavy"], AllowType: ["Open", "Plug"], SetPose: ["GagFlat"],
				Layer: [
					{ Name: "Strap", AllowColorize: true },
					{ Name: "Tongue", AllowColorize: false },
					{ Name: "Close", AllowColorize: true, AllowTypes: ["Plug"] }
				]
			},
			{
				Name: "DildoGag", Priority: 42, Value: 60, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "DildoGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth2", "ItemMouth3"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Value: 50, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "BoneGag", Prerequisite: "GagUnique", Effect: ["GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"] },
			{ 
				Name: "ChopstickGag", Value: 15, Difficulty: 2, Time: 10, BuyGroup: "ChopstickGag", Prerequisite: "GagUnique", Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Chopsticks", AllowColorize: true },
					{ Name: "Tongue", AllowColorize: false }
				]
			},
			{
				Name: "BambooGag", Value: 30, Difficulty: 6, Time: 10, DefaultColor: "#A07858", BuyGroup: "BambooGag", Prerequisite: "GagUnique", Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Rod", AllowColorize: false },
					{ Name: "Rope", AllowColorize: true }
				]
			},
			{ Name: "HarnessBallGag1", Value: 75, Difficulty: 4, Time: 20, AllowLock: true, BuyGroup: "HarnessBallGag1", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagHeavy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"] },
			{ Name: "PumpkinGag", Value: 40, Difficulty: 1, Time: 10, Random: false, AllowLock: true, BuyGroup: "PumpkinGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"] },
			{
				Name: "LipGag", Value: 40, Time: 5, AllowLock: true, BuyGroup: "LipGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagLight"],  ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Value: 45, Time: 5, AllowLock: true, BuyGroup: "SpiderGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "ClothStuffing", Value: 10, Difficulty: -20, Time: 5, BuyGroup: "ClothStuffing", Hide: ["Mouth"], Effect: ["GagLight"],
				Layer: [
					{ Name: "Cheeks", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			},
			{
				Name: "PantyStuffing", Value: 10, Difficulty: -20, Time: 5, DefaultColor: "#900000", BuyGroup: "PantyStuffing", Hide: ["Mouth"], Effect: ["GagLight"],
				Layer: [
					{ Name: "Lips", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: 40, Time: 2, Random: false, Hide: ["Mouth"], Effect: ["GagVeryLight"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }] },
			{ Name: "ScarfGag", Value: 15, Time: 10, BuyGroup: "ScarfGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagLight"], SetPose: ["GagFlat"] },
			{ Name: "LewdGag", Value: 70, Time: 10, Random: false, AllowLock: true, BuyGroup: "LewdGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], SetPose: ["GagFlat"] },
			{ Name: "DeepthroatGag", Value: 55, Difficulty: 5, Time: 15, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "DeepthroatGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagHeavy"], ExpressionTrigger: [{ Name: "Raised", Group: "Eyebrows", Timer: 10 }], SetPose: ["GagUnique"] },
			{ Name: "LeatherCorsetCollar", Value: 75, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: ["LeatherCorsetCollar"], BuyGroup: "LeatherCorsetCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], Block: ["ItemNeck"], SetPose: ["GagCorset"] },
			{ Name: "LatexPostureCollar", Value: 80, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: ["LatexPostureCollar"], BuyGroup: "LatexPostureCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], Block: ["ItemNeck"], SetPose: ["GagCorset"] },
			{ Name: "BitGag", Value: 40, Difficulty: 4, Time: 20, AllowLock: true, BuyGroup: "BitGag", Prerequisite: "GagUnique", Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"] },
			{ Name: "XLBoneGag", Value: 60, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "XLBoneGag", Prerequisite: "GagUnique", Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose: ["GagUnique"] },
			{ Name: "DogMuzzleExposed", Value: 50, Difficulty: 7, Time: 10, Random: false, AllowLock: true, Hide: ["Mouth"], Effect: ["GagNormal"], Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "FoxyHarnessPanelGag", Value: 40, Difficulty: 6, Time: 20, Random: false, AllowLock: true, Hide: ["Mouth"], Effect: ["GagNormal"], Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "BallGag", Value: 40, Difficulty: 2, Time: 10, AllowLock: true, BuyGroup: "BallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group:"Fluids", Timer: 30 }], SetPose:["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: false},
					{ Name: "Ball", AllowColorize: true}
				]
			},
			{
				Name: "TongueStrapGag", Value: 35, Time: 15, AllowLock: true, BuyGroup: "TongueStrapGag", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "BallGagMask", Value: 90, Difficulty: 6, Time: 30, AllowLock: true, BuyGroup: "BallGagMask", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose:["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HookGagMask", Value: 70, Difficulty: 6, Time: 30, AllowLock: true, BuyGroup: "HookGagMask", Hide: ["Mouth"], Effect: ["GagEasy"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "DildoPlugGag", Value: 100, Time: 20, Random: false, AllowLock: true, BuyGroup: "DildoPlugGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Extended: true, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Effect: ["GagEasy"], AllowEffect: ["GagEasy", "GagVeryHeavy"], AllowType: ["Open", "Plug"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: true },
					{ Name: "Tongue", AllowColorize: false },
					{ Name: "Close", AllowColorize: true, AllowTypes: ["Plug"] }
				]
			},
			{ Name: "SteelMuzzleGag", Value: 80, Difficulty: 8, Time: 30, AllowLock: true, BuyGroup: "SteelMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], SetPose: ["GagFlat"] },
			{ Name: "StitchedMuzzleGag", Value: 60, Difficulty: 5, Time: 15, AllowLock: true, BuyGroup: "StitchedMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagEasy"], SetPose: ["GagFlat"] },
			{ Name: "LatexBallMuzzleGag", Value: 65, Difficulty: 6, Time: 15, AllowLock: true, BuyGroup: "LatexBallMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagMedium"], SetPose: ["GagFlat"] },
			{
				Name: "SockStuffing", Value: 10, Difficulty: -20, Time: 5, DefaultColor: "#FFFFFF", BuyGroup: "SockStuffing", Hide: ["Mouth"], Effect: ["GagLight"],
				Layer: [
					{ Name: "Lips", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			}
		]
	},

	{
		Group: "ItemMouth2",
		Priority: 36,
		IsRestraint: true,
		Left: 150,
		Top: 0,
		Category: "Item",
		Default: false,
		Effect: ["GagNormal"],
		Color: ["Default"],
		Zone: [[200, 130, 100, 70]],
		Asset: [
			{ Name: "ClothGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#B0B0B0", BuyGroup: "ClothGag", Prerequisite: "GagFlat", Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowType: ["Small", "Cleave", "OTM", "OTN"], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{
				Name: "WiffleGag", Value: -1, Difficulty: 1, Time: 10, Random: false, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "WiffleGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "HarnessBallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "HarnessPanelGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{
				Name: "RingGag", Value: -1, Time: 5, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "RingGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Value: -1, Difficulty: -2, Time: 10, RemoveTime: 5, Random: false, BuyGroup: "DuctTape", Prerequisite: "GagFlat", Hide: ["Mouth"], Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy", "GagNormal"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{ Name: "HarnessPacifierGag", Value: -1, Difficulty: 2, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPacifierGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth"], SetPose: ["GagUnique"] },
			{ Name: "DusterGag", Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "DusterGag", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth", "ItemMouth3"] },
			{ Name: "HarnessPonyBits", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPonyBits", Prerequisite: "GagUnique", Effect: ["GagNormal"], Block: ["ItemMouth"], SetPose: ["GagUnique"] },
			{ Name: "KittyGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", BuyGroup: "KittyGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{ Name: "KittenHarnessPanelGag", Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#A0A0A0", BuyGroup: "KittenHarnessPanelGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{ Name: "CarrotGag", Value: -1, Time: 15, Random: false, Random: false, BuyGroup: "CarrotGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"] },
			{ Name: "MuzzleGag", Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "MuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{ Name: "PantiesMask", Value: -1, Time: 15, Random: false, Random: false, BuyGroup: "PantiesMask", Hide: ["Mouth"], Effect: ["GagVeryLight"], Block: ["ItemMouth"] },
			{
				Name: "DildoGag", Priority: 42, Value: 60, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "DildoGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth", "ItemMouth3"], SetPose: ["GagFlat"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Value: -1, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "BoneGag", Prerequisite: "GagUnique", Effect: ["GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"] },
			{ Name: "HarnessBallGag1", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessBallGag1", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagHeavy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"] },
			{ Name: "PumpkinGag", Value: -1, Difficulty: 1, Time: 10, Random: false, AllowLock: true, BuyGroup: "PumpkinGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"] },
			{
				Name: "LipGag", Value: -1, Time: 5, Random: false, AllowLock: true, BuyGroup: "LipGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Value: -1, Time: 5, Random: false, AllowLock: true, BuyGroup: "SpiderGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: -1, Time: 2, Random: false, BuyGroup: "ChloroformCloth", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagVeryLight"], Block: ["ItemMouth"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }], SetPose: ["GagFlat"] },
			{ Name: "ScarfGag", Value: -1, Time: 10, Random: false, BuyGroup: "ScarfGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagLight"], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{ Name: "LewdGag", Value: -1, Time: 10, Random: false, AllowLock: true, BuyGroup: "LewdGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{ Name: "LeatherCorsetCollar", Value: -1, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: ["LeatherCorsetCollar"], BuyGroup: "LeatherCorsetCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], Block: ["ItemNeck", "ItemMouth"], SetPose: ["GagCorset"] },
			{ Name: "LatexPostureCollar", Value: -1, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: ["LatexPostureCollar"], BuyGroup: "LatexPostureCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], Block: ["ItemNeck", "ItemMouth"], SetPose: ["GagCorset"] },
			{ Name: "BitGag", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "BitGag", Prerequisite: "GagUnique", Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"] },
			{ Name: "XLBoneGag", Value: -1, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "XLBoneGag", Prerequisite: "GagUnique", Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], SetPose: ["GagUnique"] },
			{ Name: "BallGag", Value: -1, Difficulty: 2, Time: 10, AllowLock: true, BuyGroup: "BallGag", Prerequisite: "GagUnique",  Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group:"Fluids", Timer: 30 }], SetPose:["GagUnique"], Layer: [{ Name: "Strap", AllowColorize: false}, { Name: "Ball", AllowColorize: true}] },
			{ Name: "BallGagMask", Value: 90, Difficulty: 6, Time: 30, AllowLock: true, BuyGroup: "BallGagMask", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose:["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "SteelMuzzleGag", Value: 80, Difficulty: 8, Time: 30, AllowLock: true, BuyGroup: "SteelMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{ Name: "StitchedMuzzleGag", Value: 60, Difficulty: 5, Time: 15, AllowLock: true, BuyGroup: "StitchedMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth"], SetPose: ["GagFlat"] },
			{ Name: "LatexBallMuzzleGag", Value: 65, Difficulty: 6, Time: 15, AllowLock: true, BuyGroup: "LatexBallMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth"], SetPose: ["GagFlat"] }
		]
	},

	{
		Group: "ItemMouth3",
		Priority: 37,
		IsRestraint: true,
		Left: 150,
		Top: 0,
		Category: "Item",
		Default: false,
		Effect: ["GagNormal"],
		Color: ["Default"],
		Zone: [[300, 130, 100, 70]],
		Asset: [
			{ Name: "ClothGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#B0B0B0", BuyGroup: "ClothGag", Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowType: ["Small", "Cleave", "OTM", "OTN"], Block: ["ItemMouth", "ItemMouth2"] },
			{
				Name: "WiffleGag", Value: -1, Difficulty: 1, Time: 10, Random: false, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "WiffleGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],  Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#FF6060", BuyGroup: "HarnessBallGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "HarnessPanelGag", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth", "ItemMouth2"] },
			{
				Name: "RingGag", Value: -1, Time: 5, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "RingGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Value: -1, Difficulty: -2, Time: 10, RemoveTime: 5, Random: false, BuyGroup: "DuctTape", Hide: ["Mouth"], Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy", "GagNormal"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "HarnessPacifierGag", Value: -1, Difficulty: 2, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPacifierGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"] },
			{ Name: "DusterGag", Priority: 42, Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "DusterGag", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "HarnessPonyBits", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessPonyBits", Prerequisite: "GagUnique", Effect: ["GagNormal"], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"] },
			{ Name: "KittyGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", BuyGroup: "KittyGag", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "KittenHarnessPanelGag", Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#A0A0A0", BuyGroup: "KittenHarnessPanelGag", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "CarrotGag", Value: -1, Time: 15, Random: false, BuyGroup: "CarrotGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"] },
			{ Name: "MuzzleGag", Value: -1, Difficulty: 6, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "MuzzleGag", Hide: ["Mouth"], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "PantiesMask", Value: 20, Time: 15, Random: false, BuyGroup: "PantiesMask", Hide: ["Mouth"], Effect: ["GagVeryLight"], Block: ["ItemMouth", "ItemMouth2"] },
			{
				Name: "DildoGag", Priority: 42, Value: 60, Difficulty: 4, Time: 20, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: "DildoGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagFlat"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Value: -1, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "BoneGag", Prerequisite: "GagUnique", Effect: ["GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"] },
			{ Name: "HarnessBallGag1", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "HarnessBallGag1", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagHeavy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"] },
			{ Name: "PumpkinGag", Value: -1, Difficulty: 1, Time: 10, Random: false, AllowLock: true, BuyGroup: "PumpkinGag", BuyGroup: "PumpkinGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"] },
			{
				Name: "LipGag", Value: -1, Time: 5, Random: false, AllowLock: true, BuyGroup: "LipGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Value: -1, Time: 5, Random: false, AllowLock: true, BuyGroup: "SpiderGag", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"],
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: -1, Time: 2, Random: false, BuyGroup: "ChloroformCloth", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagVeryLight"], Block: ["ItemMouth", "ItemMouth2"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }], SetPose: ["GagFlat"] },
			{ Name: "ScarfGag", Value: -1, Time: 10, Random: false, BuyGroup: "ScarfGag", Hide: ["Mouth"], Effect: ["GagLight"], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "LewdGag", Value: -1, Time: 10, Random: false, AllowLock: true, BuyGroup: "LewdGag", Hide: ["Mouth"], Effect: ["GagLight"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "LeatherCorsetCollar", Value: -1, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, DefaultColor: "#404040", BuyGroup: ["LeatherCorsetCollar"], BuyGroup: "LeatherCorsetCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], Block: ["ItemNeck", "ItemMouth", "ItemMouth2"], SetPose: ["GagCorset"] },
			{ Name: "LatexPostureCollar", Value: -1, Difficulty: 50, Time: 20, RemoveTime: 30, Random: false, AllowLock: true, BuyGroup: ["LatexPostureCollar"], BuyGroup: "LatexPostureCollar", Prerequisite: "GagCorset", Hide: ["Mouth"], Block: ["ItemNeck", "ItemMouth", "ItemMouth2"], SetPose: ["GagCorset"] },
			{ Name: "BitGag", Value: -1, Difficulty: 4, Time: 20, Random: false, AllowLock: true, BuyGroup: "BitGag", Prerequisite: "GagUnique", Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"] },
			{ Name: "XLBoneGag", Value: -1, Difficulty: 6, Time: 10, Random: false, AllowLock: true, BuyGroup: "XLBoneGag", Prerequisite: "GagUnique", Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagUnique"] },
			{ Name: "BallGag", Value: -1, Difficulty: 2, Time: 10, AllowLock: true, BuyGroup: "BallGag", Prerequisite: "GagUnique",  Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth", "ItemMouth2"], ExpressionTrigger: [{ Name: "DroolSides", Group:"Fluids", Timer: 30 }], SetPose:["GagUnique"], Layer: [{ Name: "Strap", AllowColorize: false}, { Name: "Ball", AllowColorize: true}] },
			{ Name: "BallGagMask", Value: 90, Difficulty: 6, Time: 30, AllowLock: true, BuyGroup: "BallGagMask", Prerequisite: "GagUnique", Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth", "ItemMouth2"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], SetPose:["GagUnique"],
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "SteelMuzzleGag", Value: 80, Difficulty: 8, Time: 30, AllowLock: true, BuyGroup: "SteelMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagFlat"] },
			{ Name: "StitchedMuzzleGag", Value: 60, Difficulty: 5, Time: 15, AllowLock: true, BuyGroup: "StitchedMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagEasy"], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagFlat"] },
			{ Name: "LatexBallMuzzleGag", Value: 65, Difficulty: 6, Time: 15, AllowLock: true, BuyGroup: "LatexBallMuzzleGag", Prerequisite: "GagFlat", Hide: ["Mouth"], Effect: ["GagMedium"], Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagFlat"] }
		]
	},

	{
		Group: "ItemHead",
		Priority: 43,
		IsRestraint: true,
		Left: 150,
		Top: 20,
		Category: "Item",
		Activity: ["Kiss", "Slap", "Caress", "TakeCare", "Pet", "Pull", "Cuddle", "Rub"],
		Default: false,
		Color: ["Default"],
		Zone: [[175, 0, 150, 130]],
		Asset: [
			{ Name: "ClothBlindfold", Value: 15, Time: 5, DefaultColor: "#A0A0A0", Hide: ["Glasses"], Effect: ["BlindLight", "Prone"] },
			{ Name: "LeatherBlindfold", Value: 30, Time: 5, AllowLock: true, DefaultColor: "#404040", Hide: ["Glasses"], Effect: ["BlindNormal", "Prone"] },
			{ Name: "LeatherHood", Value: 60, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3",, "Eyes", "HairAccessory1", "HairAccessory2"], Effect: ["BlindHeavy", "DeafLight", "Prone", "GagNormal"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"] },
			{ Name: "LeatherHoodOpenEyes", Value: 40, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2"], Effect: ["GagLight"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"] },
			{ Name: "LeatherSlimMask", Value: 70, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Eyes"], Effect: ["BlindHeavy", "Prone", "GagLight"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars"] },
			{ Name: "LeatherSlimMaskOpenMouth", Value: 70, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["Glasses", "Eyes"], Effect: ["BlindHeavy", "Prone"], Block: ["ItemEars"] },
			{ Name: "LeatherSlimMaskOpenEyes", Value: 70, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["ItemMouth", "ItemMouth2", "ItemMouth3"], Effect: ["GagLight"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars"] },
			{ Name: "StuddedBlindfold", Value: -1, Difficulty: 2, Time: 5, AllowLock: true, DefaultColor: "#FF4040", Hide: ["Glasses"], Effect: ["BlindNormal", "Prone"] },
			{ Name: "KittyBlindfold", Value: 25, Time: 5, AllowLock: true, DefaultColor: "#A0A0A0", Hide: ["Glasses"], Effect: ["BlindLight", "Prone"] },
			{ Name: "DuctTape", Value: 50, Time: 10, RemoveTime: 5, BuyGroup: "DuctTape", Hide: ["Glasses"], Extended: true, AllowEffect: ["BlindNormal", "Prone", "GagNormal"], AllowBlock: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars"], AllowType: ["Double", "Wrap", "Mummy"] },
			{ Name: "SmallBlindfold", Value: 40, Time: 5, AllowLock: true, DefaultColor: "#404040", Hide: ["Glasses"], Effect: ["BlindLight", "Prone"] },
			{ Name: "LeatherHoodOpenMouth", Value: 50, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "HairAccessory1", "HairAccessory2"], Effect: ["Prone", "BlindHeavy"], Block: ["ItemEars"] },
			{ Name: "FullBlindfold", Priority: 30, Value: 40, Difficulty: 6, Time: 5, AllowLock: true, DefaultColor: "#353535", Hide: ["Glasses"], Effect: ["BlindHeavy", "Prone"] },
			{ Name: "LeatherHoodSensDep", Value: 100, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Eyes", "Hat", "HairAccessory1", "HairAccessory2"], Effect: ["BlindHeavy", "DeafHeavy", "Prone", "GagHeavy"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"], Alpha: [[150, 50, 200, 50]] },
			{ Name: "LatexHoodOpenHair", Value: 45, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["HairFront", "HairBack", "Hat", "HairAccessory1", "HairAccessory2"], Block: ["ItemEars"], Alpha: [[150, 50, 200, 87]] },
			{ Name: "LeatherHoodSealed", Value: 70, Difficulty: 50, Time: 15, AllowLock: true, DefaultColor: "#555555", Prerequisite: ["NotHogtied"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Eyes", "Hat", "HairAccessory1", "HairAccessory2"], Effect: ["BlindHeavy", "Prone", "GagLight"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"], Alpha: [[150, 50, 200, 100]] },
			{ Name: "PolishedSteelHood", Value: 85, Difficulty: 50, Time: 15, AllowLock: true, Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Eyes", "HairAccessory1", "HairAccessory2"], Effect: ["BlindHeavy", "DeafLight", "Prone", "GagHeavy"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"] },
			{ Name: "SackHood", Value: 20, Difficulty: 3, Time: 5, Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Hat"], Effect: ["Prone", "BlindHeavy"], Block: ["ItemEars", "ItemMouth", "ItemMouth2", "ItemMouth3"] },
			{ Name: "LewdBlindfold", Priority: 30, Value: 45, Time: 5, Random: false, AllowLock: true, Hide: ["Glasses"], Effect: ["BlindLight", "Prone"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "LatexBlindfold", Value: 35, Time: 5, AllowLock: true, Hide: ["Glasses"], Effect: ["BlindNormal", "Prone"] },
			{ Name: "DogHood", Value: 60, Difficulty: 50, Time: 15, Random: false, AllowLock: true, DefaultColor: "#404040", Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2"], Effect: ["GagNormal"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars"] },
			{ Name: "FoxyMask", Value: 50, Difficulty: 2, Time: 15, Random: false, AllowLock: true, Effect: ["GagLight"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3"] },
			{ Name: "SleepMask", Value: 5, Time: 5, Hide: ["Glasses"], Effect: ["BlindLight", "Prone"] },
			{ Name: "BlackoutLenses", Value: 60, Difficulty: 10, Random: false, DefaultColor: "#333333", Hide: ["Glasses", "Eyes"], Effect: ["BlindHeavy", "Prone"] }
		]
	},

	{
		Group: "ItemEars",
		Priority: 1,
		IsRestraint: true,
		Left: 150,
		Top: 50,
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Pinch", "Caress", "Whisper"],
		Default: false,
		Color: ["Default"],
		Zone: [[100, 0, 75, 130], [325, 0, 75, 130]],
		Asset: [
			{ Name: "LightDutyEarPlugs", Value: 15, Difficulty: 50, Time: 5, Visible: false, Effect: ["DeafLight"] },
			{ Name: "HeavyDutyEarPlugs", Value: 30, Difficulty: 50, Time: 5, Visible: false, Effect: ["DeafHeavy"] },
			{ Name: "HeadphoneEarPlugs", Value: 50, Difficulty: 50, Time: 5, Visible: false, Effect: [""], AllowEffect: ["DeafLight", "DeafHeavy"], Extended: true, AllowType: ["Off", "Light", "Heavy"] }
		]
	},

	{
		Group: "ItemMisc",
		Priority: 47,
		Top: -250,
		Category: "Item",
		Default: false,
		Color: ["Default"],
		Zone: [[10, 0, 90, 200]],
		Asset: [
			{ Name: "MetalPadlock", Value: 15, Time: 10, Wear: false, IsLock: true, Effect: [] },
			{ Name: "IntricatePadlock", Value: 50, Time: 30, Wear: false, IsLock: true, Effect: [] },
			{ Name: "TimerPadlock", Value: 80, Wear: false, RemoveTimer: 300, MaxTimer: 300, IsLock: true, Effect: [] },
			{ Name: "CombinationPadlock", Value: 100, Random: false, Wear: false, IsLock: true, Effect: [] },
			{ Name: "OwnerPadlock", Value: 60, Time: 10, Wear: false, OwnerOnly: true, IsLock: true, Effect: [] },
			{ Name: "OwnerTimerPadlock", Value: 100, Wear: false, OwnerOnly: true, RemoveTimer: 300, MaxTimer: 604800, IsLock: true, Effect: [] },
			{ Name: "LoversPadlock", Value: 60, Time: 10, Wear: false, LoverOnly: true, IsLock: true, Effect: [] },
			{ Name: "LoversTimerPadlock", Value: 100, Wear: false, LoverOnly: true, RemoveTimer: 300, MaxTimer: 604800, IsLock: true, Effect: [] },
			{ Name: "MistressPadlock", Value: -1, Time: 10, Wear: false, IsLock: true, Effect: [] },
			{ Name: "MistressTimerPadlock", Value: -1, Wear: false, RemoveTimer: 300, MaxTimer: 14400, IsLock: true, Effect:[] },
			{ Name: "MetalPadlockKey", Value: 10, Wear: false, Effect: ["Unlock-MetalPadlock"] },
			{ Name: "IntricatePadlockKey", Value: 30, Wear: false, Effect: ["Unlock-IntricatePadlock"] },
			{ Name: "OwnerPadlockKey", Value: 60, Wear: false, OwnerOnly: true, Effect: ["Unlock-OwnerPadlock", "Unlock-OwnerTimerPadlock"] },
			{ Name: "LoversPadlockKey", Value: 40, Wear: false, LoverOnly: true, Effect: ["Unlock-LoversPadlock", "Unlock-LoversTimerPadlock"] },
			{ Name: "MistressPadlockKey", Value: -1, Wear: false, Effect: ["Unlock-MistressPadlock", "Unlock-MistressTimerPadlock"] },
			{ Name: "MetalCuffsKey", Value: 20, Time: 5, Wear: false, Effect: ["Unlock-MetalCuffs"] },
			{ Name: "WoodenMaidTray", Value: -1, Enable: false },
			{ Name: "WoodenMaidTrayFull", Value: -1, Enable: false },
			{ Name: "WoodenPaddle", Value: -1, Enable: false }
		]
	},

	{
		Group: "ItemDevices",
		Priority: 48,
		IsRestraint: true,
		Left: 0,
		Top: -250,
		Category: "Item",
		ParentGroup: "BodyUpper",
		Default: false,
		Color: ["Default"],
		Zone: [[10, 600, 90, 400], [400, 600, 90, 400]],
		Asset: [
			{ Name: "WoodenBox", Value: 60, Difficulty: -2, SelfBondage: 5, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied"], RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], Effect: ["Prone", "Enclose", "BlindNormal", "GagLight", "Freeze"] },
			{ Name: "SmallWoodenBox", Value: 40, Difficulty: -2, SelfBondage: 5, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "BlindNormal", "GagLight", "Freeze"] },
			{ Name: "MilkCan", Value: -1, Difficulty: 1, Time: 15, RemoveTime: 10, RemoveAtLogin: true, Effect: ["BlindHeavy", "Prone", "Enclose", "GagHeavy", "Freeze"], SetPose: ["Kneel"] },
			{ Name: "WaterCell", Value: -1, Difficulty: 1, Time: 15, RemoveTime: 15, RemoveAtLogin: true, Effect: ["Prone", "Enclose", "GagMedium", "Freeze"], SetPose: ["Suspension", "LegsClosed"], Block: ["ItemFeet"] },
			{ Name: "Cage", Value: 120,  Difficulty: 4, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotKneeling", "NotSuspended"], RemoveAtLogin: true, Alpha: [[1, 80, 105, 900], [410, 80, 105, 900]], Effect: ["Prone", "Enclose", "Freeze"] },
			{ Name: "LowCage", Value: 80, Difficulty: 4, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], RemoveAtLogin: true, Alpha: [[1, 80, 75, 900], [400, 80, 95, 900]], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "Freeze"] },
			{ Name: "SaddleStand", Value: 100, Difficulty: -2, Time: 10, AllowLock: true, Prerequisite: ["LegsOpen", "AllFours", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotKneelingSpread", "NotShackled", "StraitDressOpen"], RemoveAtLogin: true, Height: 30, SetPose: ["LegsOpen"], Block: ["ItemPelvis", "ItemLegs", "ItemFeet"], Effect: ["Prone", "Freeze", "Mounted"] },
			{ Name: "BurlapSack", Priority : 29, Value: 35, Difficulty: 5, SelfBondage: 4, Time: 15, RemoveTime: 6, Prerequisite: ["NotSuspended", "AllFours", "NotHogtied", "NotYoked", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "ClothLower", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "ItemArms", "ItemButt", "TailStraps", "Wings", "BodyLower", "Socks", "ItemHidden", "ItemNipplesPiercings"], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"], SetPose: ["Kneel", "BackElbowTouch"], Effect: ["ForceKneel", "Block", "Prone", "Freeze"] },
			{ Name: "InflatableBodyBag", Priority: 31, Value: 225, Difficulty: 1, SelfBondage: 6, Time: 30, RemoveTime: 50, AllowLock: true, Prerequisite: ["NotSuspended", "AllFours", "NotHogtied", "NotYoked", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], Hide: ["Cloth", "Suit", "ClothLower", "SuitLower", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "ItemArms", "ItemButt", "TailStraps", "Wings", "BodyLower", "Socks", "ItemNipplesPiercings"], HideItem: ["ItemVulvaFullLatexSuitWand"], Extended: true, SelfUnlock: false, Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"], SetPose: ["LegsClosed", "BackElbowTouch"], AllowPose: ["Kneel"], Effect: ["Block", "Prone", "Freeze"], AllowType: ["Light", "Inflated", "Bloated", "Max"] },
			{ Name: "BondageBench", Priority: 1, Value: 250, SelfBondage: 4, Time: 10, RemoveTime: 10, Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NotMounted", "NoFeetSpreader"], RemoveAtLogin: false, Extended: true, SetPose: ["LegsClosed"], Effect: ["Block", "Prone", "Freeze"] },
			{ Name: "TeddyBear", Priority: 34, Value: 50, Difficulty: -10, Time: 5, IsRestraint: false, RemoveAtLogin: true, Extended: true, Effect: [], AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Horse", "StraitDressOpen", "Yoked"], AllowType: ["Bear", "Fox", "Kitty", "Pup", "Bunny", "Pony"] },
			{ Name: "OneBarPrison", Priority: 16, Value: 75, Difficulty: 8, SelfBondage: 2, Time: 20, AllowLock: true, Prerequisite: ["AccessVulva", "AllFours", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste", "StraitDressOpen"], RemoveAtLogin: true, SetPose: ["LegsOpen"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva", "ItemFeet"], Effect: ["Prone", "Freeze", "Mounted"],
				Layer: [
					{ Name: "Bar", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{ Name: "TheDisplayFrame", Value: 100, Difficulty: 50, SelfBondage: 5, Time: 10, AllowLock: true, Prerequisite: ["DisplayFrame", "AllFours", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling"], RemoveAtLogin: true, SetPose: ["LegsClosed", "BackElbowTouch"], Block: ["ItemArms", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNeckAccessories"], Effect: ["Prone", "Freeze", "Block", "Mounted"] },
			{ Name: "Sybian", Priority: 22, Value: 80, Difficulty: 1, Time: 10, IsRestraint: false, Prerequisite: ["AccessVulva", "NotKneeling", "AllFours", "LegsOpen", "NotSuspended", "NotHogtied", "NotShackled", "NotChaste", "StraitDressOpen", "NotHorse"], Hide: ["Shoes", "Socks", "ItemBoots", "ItemFeet", "ItemLegs", "ItemVulva"], HideItem: ["ClothLowerPajama1", "ClothLowerShorts1", "ClothLowerJeans1", "ClothLowerJeans2", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerLatexPants1", "ItemDevicesTeddyBear", "SuitLowerReverseBunnySuit"], RemoveAtLogin: true, SetPose: ["KneelingSpread"], Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemPelvis", "ItemButt", "ItemVulva"], Effect: ["Egged", "Freeze"] },
			{ Name: "StrapOnSmooth", Priority: 34, Value: 25, Difficulty: 1, Time: 10, IsRestraint: false },
			{ Name: "StrapOnStuds", Priority: 34, Value: 25, Difficulty: 1, Time: 10, IsRestraint: false },
			{ Name: "DisplayCase", Value: 60, Difficulty: -2, SelfBondage: 1, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended"], RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], Effect: ["Prone", "Enclose", "DeafLight", "GagLight", "Freeze"] },
			{ Name: "SmallDisplayCase", Value: 40, Difficulty: -2, SelfBondage: 1, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"], RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "DeafLight", "GagLight", "Freeze"] },
			{ Name: "WoodenBoxOpenHead", Value: 60, Difficulty: -2, SelfBondage: 3, Time: 15, RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied"], Hide: ["Wings"], AllowBlock: ["ItemHands"], Extended: true, AllowPose: ["Yoked"], RemoveAtLogin: true, Alpha: [[1, 220, 70, 999], [420, 220, 80, 999]], Effect: ["Prone", "Freeze", "Block"], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"] },
			{ Name: "SmallWoodenBoxOpenHead", Value: 40, Difficulty: -2, SelfBondage: 3, Time: 15 , RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotYoked"],  Hide: ["Wings"], AllowBlock: ["ItemHands"], Extended: true, AllowPose: ["Yoked"], RemoveAtLogin: true, Alpha: [[1, 220, 70, 999], [420, 220, 80, 999]], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Freeze", "Block"], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"], SetPose: ["Kneel"]  },
			{ Name: "WoodenStocks", Value: 150, Difficulty: 50, SelfBondage: 4, Time: 10, AllowLock: true, Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NotKneelingSpread", "NoItemArms", "LegsOpen"], RemoveAtLogin: true, SetPose: ["Yoked"], Effect: ["Prone", "Freeze", "Block", "Mounted"], Block: ["ItemArms", "ItemFeet", "ItemLegs", "ItemBoots"]},
			{ Name: "Vacbed", Value: 200, Difficulty: 50, SelfBondage: 3, Time: 10, Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NotKneelingSpread", "NoItemArms", "LegsOpen", "NoItemHands", "NoItemLegs", "NoHorse", "NoItemFeet"], Hide: ["HairFront"], RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], SetPose: ["Yoked"], Effect: ["Prone", "Freeze", "Block", "Mounted"], Block: ["ItemArms", "ItemBoots", "ItemBreasts", "ItemButt", "ItemEars", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNeckAccessories", "ItemNeckRestraints", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "DogHood", "ItemHead"]}
		]
	},
	
	{
		Group: "ItemAddon",
		Priority: 49,
		IsRestraint: true,
		Left: 0,
		Top: -250,
		Category: "Item",
		Default: false,
		Color: ["Default"],
		Zone: [[400, 0, 90, 200]],
		Asset: [
			{ Name: "BondageBenchStraps", Value: -1, Difficulty: 12, SelfBondage: 5, Time: 5, IsRestraint: true, AllowLock: true, Hide: ["HairBack", "Wings", "TailStraps", "ItemButt"], RemoveAtLogin: false, Extended: true, Block: ["ItemDevices"], AllowType: ["Light", "Normal", "Heavy", "Full"], SetPose: ["LegsClosed"], Effect: ["Block", "Prone"] }
		]
	},

	{
		Group: "ItemBoots",
		Priority: 23,
		IsRestraint: true,
		Left: 125,
		Top: 500,
		Category: "Item",
		Activity: ["Kiss", "PoliteKiss", "Lick", "Suck", "Nibble", "Tickle", "Spank", "MassageHands", "MassageFeet", "TakeCare"],
		ParentGroup: "BodyLower",
		Default: false,
		AllowPose: ["LegsClosed", "Kneel", "Hogtied"],
		Color: ["Default"],
		Zone: [[100, 870, 300, 130]],
		Asset: [
			{ Name: "PonyBoots", Value: -1, Difficulty: 6, Time: 10, RemoveTime: 15, AllowLock: true, Hide: ["Shoes"], Height: 35, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]] },
			{ Name: "BalletHeels", Value: 75, Difficulty: 6, Time: 10, RemoveTime: 15, AllowLock: true, Hide: ["Shoes"], Height: 35, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]] },
			{ Name: "BalletWedges", Value: 50, Difficulty: 6, Time: 10, RemoveTime: 15, AllowLock: true, Hide: ["Shoes"], Height: 35, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]] },
			{ Name: "ToeCuffs", Value: 35, Difficulty: 4, Time: 10, RemoveTime: 5, AllowLock: true, Prerequisite: "ToeTied", Hide: ["Shoes"], Effect: ["Freeze", "Prone"], SetPose: ["LegsClosed"] },
			{ Name: "LeatherToeCuffs", Value: 50, Difficulty: 3, Time: 10, RemoveTime: 5, AllowLock: true, Prerequisite: "ToeTied", Hide: ["Shoes"], Effect: ["Freeze", "Prone"], SetPose: ["LegsClosed"] },
			{ Name: "ToeTie", Value: 15, Difficulty: 2, Time: 10, RemoveTime: 5, DefaultColor: "#605020", Prerequisite: "ToeTied", Hide: ["Shoes"], Effect: ["Freeze", "Prone"], SetPose: ["LegsClosed"] },
			{ Name: "ThighHighLatexHeels", Value: -1, Time: 10, RemoveTime: 15, AllowLock: true, BuyGroup: "ThighHighLatexHeels", Hide: ["Shoes"], Height: 30, Alpha: [[75, 850, 140, 200], [290, 850, 140, 200]] },
			{ Name: "LockingHeels", Value: 40, Difficulty: 6, Time: 10, RemoveTime: 15, AllowLock: true, Hide: ["Shoes"], Height: 15}
		]
	},
	
	{
		Group: "ItemHidden",
		IsRestraint: true,
		Category: "Item",
		Default: false,
		Color: ["Default"],
		Asset: [
		    { Name: "LeatherArmbinderStrap", Priority: 31,  Value: -1, AllowType: ["Strap", "WrapStrap", "None"] },
			{ Name: "LeatherArmbinderWrapStrap", Priority: 31, Value: -1, AllowType: ["WrapStrap", "None"] },
			{ Name: "SuspensionHempRope", Priority: 31, Value: -1 },
			{ Name: "SuspensionChains", Priority: 31, Value: -1 }
		]
	}
	
];

// 3D Custom Girl based pose
var PoseFemale3DCG = [

	{
		Name: "Kneel",
		Hide: ["ItemFeet"],
		OverrideHeight: -250
	},
	{
		Name: "Horse",
		Hide: ["ItemFeet"],
		OverrideHeight: -75
	},
	{
		Name: "KneelingSpread",
		Hide: ["ItemFeet"],
		OverrideHeight: -250
	},
	{
		Name: "Yoked",
		Hide: ["Hands"]
	},
	{
		Name: "Hogtied",
		Hide: ["BodyLower", "Hands", "ClothLower", "Wings", "TailStraps", "Gloves", "Panties", "Pussy", "ItemHands", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemLegs", "ItemFeet", "SuitLower"],
		OverrideHeight: -575,
		MovePosition: [{ Group: "Socks", X: 0, Y: -400 }, { Group: "Shoes", X: 0, Y: -500 }, { Group: "ItemBoots", X: 0, Y: -500 }]
	},
	{
		Name: "Suspension",
		Hide: [],
		OverrideHeight: 150
	},
	{
		Name: "SuspensionHogtied",
		Hide: ["BodyLower", "Hands", "ClothLower", "Wings", "TailStraps", "Gloves", "Panties", "Pussy", "ItemHands", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemLegs", "ItemFeet", "SuitLower"],
		OverrideHeight: 0
	},
	{
		Name: "AllFours",
		Hide: ["ItemFeet", "ClothLower", "SuitLower", "Nipples", "Pussy", "BodyLower", "Wings", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemLegs", "ItemBoots", "Suit", "Panties", "Bra"],
		OverrideHeight: -560,
		MovePosition: [{ Group: "TailStraps", X: 0, Y: -300 }, { Group: "ItemButt", X: 0, Y: -300 } ]
	}

];

// 3D Custom Girl based activities
var ActivityFemale3DCG = [
	{
		Name: "Kiss",
		Prerequisite: ["UseMouth"],
		MaxProgress: 50,
		TargetSelf: ["ItemHands", "ItemArms", "ItemBoots", "ItemBreast", "ItemNipples"]
	},
	{
		Name: "FrenchKiss",
		Prerequisite: ["UseMouth", "ZoneNaked"],
		MaxProgress: 70
	},
	{
		Name: "PoliteKiss",
		Prerequisite: ["UseMouth"],
		MaxProgress: 30,
		TargetSelf: ["ItemHands", "ItemBoots"]
	},
	{
		Name: "Lick",
		Prerequisite: ["UseMouth", "ZoneNaked"],
		MaxProgress: 80,
		TargetSelf: ["ItemMouth", "ItemHands", "ItemArms", "ItemBoots", "ItemBreast", "ItemNipples"]
	},
	{
		Name: "Suck",
		Prerequisite: ["UseMouth", "ZoneNaked"],
		MaxProgress: 60,
		TargetSelf: ["ItemHands", "ItemArms", "ItemBoots", "ItemNipples"]
	},
	{
		Name: "Nibble",
		Prerequisite: ["UseMouth", "ZoneNaked"],
		MaxProgress: 40,
		TargetSelf: ["ItemMouth", "ItemHands", "ItemArms", "ItemBoots", "ItemNipples"]
	},
	{
		Name: "Whisper",
		Prerequisite: ["UseMouth"],
		MaxProgress: 20
	},
	{
		Name: "Tickle",
		Prerequisite: ["UseHands"],
		MaxProgress: 50,
		TargetSelf: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemNipples", "ItemLegs", "ItemFeet", "ItemBoots", "ItemArms", "ItemHands"]
	},
	{
		Name: "Caress",
		Prerequisite: ["UseHands"],
		MaxProgress: 80,
		TargetSelf: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemNipples", "ItemLegs", "ItemFeet", "ItemBoots", "ItemArms", "ItemHands", "ItemButt", "ItemVulva", "ItemHead", "ItemNeck", "ItemMouth", "ItemEars"]
	},
	{
		Name: "Pet",
		Prerequisite: ["UseHands"],
		MaxProgress: 20,
		TargetSelf: ["ItemHead"]
	},
	{
		Name: "Cuddle",
		Prerequisite: [],
		MaxProgress: 30
	},
	{
		Name: "Rub",
		Prerequisite: [],
		MaxProgress: 60
	},
	{
		Name: "TakeCare",
		Prerequisite: ["UseHands", "ZoneNaked"],
		MaxProgress: 10,
		TargetSelf: ["ItemBoots", "ItemHands", "ItemHead"]
	},
	{
		Name: "MassageHands",
		Prerequisite: ["UseHands"],
		MaxProgress: 60,
		TargetSelf: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemLegs", "ItemFeet", "ItemBoots", "ItemArms", "ItemHands", "ItemButt", "ItemVulva", "ItemHead", "ItemNeck"]
	},
	{
		Name: "MassageFeet",
		Prerequisite: ["UseFeet"],
		MaxProgress: 40
	},
	{
		Name: "Grope",
		Prerequisite: ["UseHands"],
		MaxProgress: 50,
		TargetSelf: ["ItemButt", "ItemBreast"]
	},
	{
		Name: "Pinch",
		Prerequisite: ["UseHands"],
		MaxProgress: 20,
		TargetSelf: ["ItemNipples", "ItemEars", "ItemArms", "ItemPelvis"]
	},
	{
		Name: "Spank",
		Prerequisite: ["UseHands"],
		MaxProgress: 40,
		TargetSelf: ["ItemButt", "ItemLegs", "ItemFeet", "ItemArms", "ItemHands", "ItemPelvis", "ItemTorso"]
	},
	{
		Name: "SpankItem",
		Prerequisite: [],
		MaxProgress: 70
	},
	{
		Name: "Slap",
		Prerequisite: ["UseHands"],
		MaxProgress: 30,
		TargetSelf: ["ItemBreast", "ItemHead"]
	},
	{
		Name: "Pull",
		Prerequisite: ["UseHands"],
		MaxProgress: 30,
		TargetSelf: ["ItemHead"]
	},
	{
		Name: "Choke",
		Prerequisite: ["UseHands"],
		MaxProgress: 50,
		TargetSelf: ["ItemNeck"]
	},
	{
		Name: "MasturbateTongue",
		Prerequisite: ["UseMouth", "ZoneNaked"],
		MaxProgress: 100
	},
	{
		Name: "MasturbateHand",
		Prerequisite: ["UseHands", "ZoneNaked"],
		TargetSelf: ["ItemBreast", "ItemVulva", "ItemButt"],
		MaxProgress: 100
	},
	{
		Name: "MasturbateFist",
		Prerequisite: ["UseHands", "ZoneNaked"],
		MaxProgress: 100
	},
	{
		Name: "MasturbateFoot",
		Prerequisite: ["UseFeet", "ZoneNaked"],
		MaxProgress: 100
	},
	{
		Name: "MasturbateItem",
		Prerequisite: ["ZoneNaked"],
		MaxProgress: 100
	}
	
]
