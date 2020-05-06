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

// Spanking Toys Asset
var AssetSpankingToys = {
	Name: "SpankingToys", Wear: false, Activity: "SpankItem", Random: false, BuyGroup: "SpankingToys", IgnoreParentGroup: true,
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
			{ Name: "CollegeOutfit1", Value: -1, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Hide: ["ItemNeck"] },
			{ Name: "MaidOutfit1", Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidOutfit2", Value: -1, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
			{ Name: "StudentOutfit1", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Hide: ["ItemNeck", "ItemHidden"] },
			{ Name: "StudentOutfit2", HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemHiddenLeatherArmbinderStrap", "ItemHiddenLeatherArmbinderWrapStrap", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{
			    Name: "StudentOutfit3", Require: ["ClothLower", "ClothAccessory"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemHiddenLeatherArmbinderStrap", "ItemHiddenLeatherArmbinderWrapStrap"],
				Layer: [
					{ Name: "White", AllowColorize: false },
					{ Name: "Color", AllowColorize: true }
				]
			},
			{ Name: "BabydollDress1", HideItem: ["ClothLowerLatexSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "TeacherOutfit1", Hide: ["ItemNeck", "ItemHidden"], HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], ParentGroup: ["BodyLower"], AllowPose: ["Horse", "KneelingSpread", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero"] },
			{ Name: "ChineseDress1", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "ChineseDress2", Value: 60, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "TShirt1", Require: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "TennisShirt1", Require: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"], Hide: ["ItemHidden"] },
			{ Name: "Sweater1", Require: ["ClothLower"], HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "MistressTop", Value: -1, Require: ["ClothLower"], Hide: ["Bra"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "AdultBabyDress1", Value: 60, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Hide: ["ItemHidden"] },
			{ Name: "AdultBabyDress2", Value: 80, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "AdultBabyDress3", Value: 40, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "AdultBabyDress4", Value: 80, Left: 100, Top: 190, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "NurseUniform", Value: -1, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Robe1", Value: 30, HideItem: ["ClothLowerLatexSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Hide: ["ItemHidden"] },
			{ Name: "SuspenderTop1", Value: 50, Priority: 25, Expose: ["ItemNipples","ItemNipplesPiercings", "ItemBreast"], Hide: ["Panties", "ItemVulva", "ItemVulvaPiercings"] },
			{ Name: "LeatherCorsetTop1", Value: 60, Priority: 25, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
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
			{ Name: "SteampunkCorsetTop1", Value: 70, Priority: 25, HideItem: ["ClothLowerTennisSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"], Hide: ["ItemHidden"] },
			{ Name: "BondageDress1", Value: 90, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "BondageDress2", Value: 90, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "ShoulderlessTop", Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "Dress3", Value: 80, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "ComfyTop", Value: 60, Hide: ["ItemNipples", "ItemNipplesPiercings"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "WeddingDress1", Value: 150, Priority: 22, Hide: ["ClothLower", "BodyLower", "Panties", "Shoes", "ItemBoots"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemFeetLeatherAnkleCuffs", "ItemLegsLeatherLegCuffs", "ItemLegsWoodenHorse", "ItemLegsSpreaderMetal", "ItemLegsOrnateLegCuffs", "ItemFeetOrnateAnkleCuffs", "ItemDevicesSaddleStand", "ItemVulvaWandBelt"], AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "LegsClosed", "Kneel", "KneelingSpread"] },
			{ Name: "WeddingDress2", Value: 150, Priority: 22, Hide: ["ClothLower", "BodyLower", "Panties", "Shoes", "ItemBoots"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemFeetLeatherAnkleCuffs", "ItemLegsLeatherLegCuffs", "ItemLegsWoodenHorse", "ItemLegsSpreaderMetal", "ItemLegsOrnateLegCuffs", "ItemFeetOrnateAnkleCuffs", "ItemDevicesSaddleStand", "ItemVulvaWandBelt"], AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied", "LegsClosed", "Kneel", "KneelingSpread"] },
			{ Name: "BridesmaidDress1", Value: 100, Hide: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Gown1", Value: 70, Random: false, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Gown2Top", Value: 90, Random: false, BuyGroup: "Gown2", Left: 125, Top: 220, Require: ["ClothLower"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Gown3", Value: 70, Random: false, Left: 99, Top: 194, HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidApron1", Value: -1, Priority: 32, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "MaidApron2", Value: -1, Priority: 32, BuyGroup: "Maid", HideItem: ["ClothLowerLatexSkirt1", "ClothLowerLatexSkirt2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
			{ Name: "AdmiralTop", Value: 30, Hide: ["ItemNeck", "ItemHidden"], HideItem: ["ItemArmsLeatherCuffs", "ItemArmsOrnateCuffs", "ClothLowerLatexSkirt1", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerClothSkirt1", "ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing", "ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"], ParentGroup: ["BodyLower"], AllowPose: ["Horse", "KneelingSpread", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero"] },
			{ Name: "VirginKiller1", Value: 40, HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "ReverseBunnySuit", Value: 100, BuyGroup: "ReverseBunnySuit"}
		]
	},

	{
		Group: "ClothAccessory",
		Priority: 32,
		ParentGroup: "BodyUpper",
		Default: false,
		Random: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Asset: [
			{ Name: "StudentOutfit3Scarf", Left: 200, Top: 250, IgnoreParentGroup: true },
			{ Name: "StudentOutfit3Bow1", Left: 200, Top: 250, IgnoreParentGroup: true },
			{ Name: "StudentOutfit3Bow2", Left: 200, Top: 250, IgnoreParentGroup: true },
			{ Name: "StudentOutfit3Bow3", Left: 200, Top: 250, IgnoreParentGroup: true },
			{ 
				Name: "Bouquet", Value: 40, Left: 175, Top: 350, IgnoreParentGroup: true, Priority: 41, AllowPose: ["BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied"], BuyGroup: "Bouquet",
				Layer: [
					{ Name: "Base", AllowColorize: false },
					{ Name: "Flowers", AllowColorize: true }
				]
			},
			{ Name: "FrillyApron", Value: -1, BuyGroup: "Maid", Left: 135, Top: 179, AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Yoked", "Hogtied"] },
			{ Name: "BunnyCollarCuffs", Value: 10, Expose: ["ItemNipples", "ItemNipplesPiercings", "ItemBreast", "ItemTorso"] }
		]
	},
	{
		Group: "Necklace",
		Priority: 31,
		ParentGroup: "BodyUpper",
		Default: false,
		Random: false,
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
		Default: false,
		ParentGroup: "BodyLower",
		ParentColor: "Cloth",
		Clothing: true,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Horse", "KneelingSpread"],
		Color: ["Default", "#bbbbbb", "#808080", "#202020", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Left: 105,
		Top: 380,
		Asset: [
			{ Name: "Skirt1", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ 
				Name: "Skirt2", ParentItem: "StudentOutfit3", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"],
				Layer: [
					{ Name: "Color", AllowColorize: true },
					{ Name: "Stripe", AllowColorize: false }
				]
			},
			{ 
				Name: "Skirt3", ParentItem: "StudentOutfit3", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"],
				Layer: [
					{ Name: "Color", AllowColorize: true },
					{ Name: "Stripe", AllowColorize: false }
				]
			},
			{ Name: "TennisSkirt1", ParentItem: "TennisShirt1", Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Jeans1", Priority: 22, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks6", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Shorts1", Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Pajama1", Random: false, Priority: 25, HideItem: ["ItemButtAnalBeads2"] },
			{ Name: "MistressBottom", Value: -1, Hide: ["Panties"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "Waspie1", Value: 60, Priority: 26, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Waspie2", Value: 80, Priority: 26, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Waspie3", Value: 40, Priority: 26, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "LatexPants1", Value: 60, Priority: 21, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks1", "SocksSocks2", "SocksSocks3", "SocksSocks4", "SocksSocks5", "SocksSocks6", "SocksStockings2", "SocksStockings3", "VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "LatexSkirt1", Value: 40, Priority: 26, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "LatexSkirt2", Value: 60, Priority: 26, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "ClothSkirt1", Value: 40, Priority: 26, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Jeans2", Value: 20, Priority: 22, Hide: ["ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "SocksSocksFur", "SocksSocks6", "VibratingLatexPanties", "WandBelt", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "ChineseSkirt1", Value: 40, Priority: 26, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] },
			{ Name: "Gown2Skirt", Value: -1, Priority: 26, Random: false, BuyGroup: "Gown2", Left: 50, Top: 462, ParentItem: "Gown2Top", SetPose: ["LegsClosed"], Hide: ["ItemFeet"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds", "ItemLegsNylonRope", "ItemLegsHempRope", "ItemLegsLeatherBelt", "ItemLegsSturdyLeatherBelts", "ItemLegsDuctTape", "ItemLegsLeatherLegCuffs", "ItemLegsOrnateLegCuffs", "ItemLegsZipties", "ItemLegsChains", "ItemBootsThighHighLatexHeels"] },
			{ Name: "AdmiralSkirt", Value: 30, Priority: 26, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemDevicesStrapOnSmooth", "ItemDevicesStrapOnStuds"] }
		]
	},

	{
		Group: "SuitLower",
		Priority: 14,
		Default: false,
		ParentGroup: "BodyLower",
		Clothing: true,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Horse","KneelingSpread"],
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Left: 95,
		Top: 380,
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
		ParentGroup: "BodyUpper",
		Clothing: true,
		Underwear: true,
		AllowPose: ["Yoked", "Hogtied"],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Left: 150,
		Top: 200,
		Asset: [
			{ Name: "Bra1", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra2", Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra7", Priority: 20, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra8", Value: 15, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bra9", Value: 10, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "Bandeau1", Value: 25, Priority: 20, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
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
			{ Name: "BondageBra1", Value: 40, Priority: 20, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LatexBra1", Value: 30, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HarnessBra1", Value: 30, Priority: 20, BuyGroup: ["HarnessBra1"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HarnessBra2", Value: 40, Priority: 20, BuyGroup: ["HarnessBra2"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "CuteBikini1", Value: 40, Priority: 20, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "CorsetBikini1", Value: 40, Priority: 20, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "OuvertPerl1", Value: 40, Priority: 20, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"], HideItem: ["ItemNipplesPiercingsRoundPiercing", "ItemNipplesPiercingsWeightedPiercing"] },
			{ Name: "Sarashi1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "KittyBra1", Value: 30, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "FishnetBikini1", Value: 45, Priority: 20, Hide: ["Panties", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings"], HideItem: ["VibratingLatexPanties", "VibratingDildo", "InflatableVibeDildo", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp"] },
			{ Name: "SexyBeachBra1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "SexyBikiniBra1", Value: 25, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "StarHarnessBra", Value: 40, Priority: 20, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "HeartTop", Value: 35, Priority: 20, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "ChineseBra1", Value: 35, Hide: ["ItemNipples", "ItemNipplesPiercings"] },
			{ Name: "LatexCorset1", Value: 40, Priority: 20, BuyGroup: ["LatexCorset1"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"] },
			{ Name: "LeatherStrapBra1", Value: 15, Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"], BuyGroup: ["LeatherStrapBra1"] }
		]
	},

	{
		Group: "Panties",
		Priority: 19,
		ParentGroup: "BodyLower",
		ParentColor: "Bra",
		Clothing: true,
		Underwear: true,
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Left: 150,
		Top: 395,
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
			{ Name: "HarnessPanties1", Value: 35, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], AllowPose: ["LegsClosed", "Kneel"], BuyGroup: ["HarnessPanties1"] },
			{ Name: "HarnessPanties2", Value: 40, Left: 85, Top: 395, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread"], BuyGroup: ["HarnessPanties2"] },
			{ Name: "KittyPanties1", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "PearlPanties1", Value: 20, Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
			{ Name: "SunstripePanties1", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "SexyBeachPanties1", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "ChinesePanties1", Value: 25, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"] },
			{ Name: "LeatherStrapPanties1", Value: 20, HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup", "ItemVulvaPiercingsVibeHeartClitPiercing"], BuyGroup: ["LeatherStrapPanties1"] }
			
		]
	},

	{
		Group: "Socks",
		Priority: 20,
		ParentGroup: "BodyLower",
		ParentColor: "Bra",
		Clothing: true,
		Underwear: true,
		AllowPose: ["LegsClosed", "Kneel", "StraitDressOpen", "Hogtied"],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Left: 125,
		Top: 400,
		Asset: [
			"Socks0", "Socks1", "Socks2", "Socks3", "Socks4", "Socks5", "Stockings1", "Stockings2",
			{ Name: "Stockings3", Value: 10 },
			{ Name: "Stockings4", Value: 10 },
			{ Name: "Pantyhose1", Value: 10, Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo"] },
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
		ParentGroup: "BodyLower",
		Clothing: true,
		AllowPose: ["LegsClosed", "Kneel", "Hogtied"],
		Color: ["Default", "#bbbbbb", "#808080", "#202020", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Left: 125,
		Top: 500,
		Asset: [
			{ Name: "Shoes1", Height: 6 },
			{ Name: "Shoes2", Height: 6 },
			{ Name: "Shoes4", Height: 6 },
			{ Name: "Sneakers1", Height: 3 },
			{ Name: "Sneakers2", Height: 3 },
			{ Name: "Heels1", Height: 15 },
			{ Name: "Heels2", Height: 15 },
			{ Name: "Boots1", Height: 9 },
			{ Name: "MistressBoots", Value: -1, Height: 35, HideItem: ["SocksSocks4", "SocksSocks5"], Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]] },
			{ Name: "PonyBoots", Value: -1, Height: 35, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]] },
			{ Name: "Sandals", Value: 30, Priority: 22, Height: 3, HideItem: ["SocksSocks0", "SocksSocks1", "SocksSocks2", "SocksSocks3", "SocksSocks4", "SocksSocks5", "SocksSocks6", "SocksSocksFur"] },
			{ Name: "PawBoots", Value: 45, Height: 3 },
			{ Name: "WoollyBootsTall", Value: 60, Height: 9 },
			{ Name: "ThighHighLatexHeels", Value: 80, Height: 30, BuyGroup: "ThighHighLatexHeels", Alpha: [[75, 850, 140, 200], [290, 850, 140, 200]]}
		]
	},

	{
		Group: "Hat",
		Priority: 46,
		Default: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		AllowPose: ["Suspension"],
		Left: 125,
		Top: 0,
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
		Default: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		AllowPose: ["Suspension"],
		Left: 90,
		Top: 0,
		Asset: [
			"Ears1", "Ears2", "PonyEars1",
			{ Name: "Ribbons1", Priority: 4, BuyGroup: "Ribbons1" },
			{ Name: "Ribbons2", Value: -1, Priority: 4, BuyGroup: "Ribbons2" },
			{ Name: "Ribbons3", BuyGroup: "Ribbons3" },
			{ Name: "Ribbons4", BuyGroup: "Ribbons4" },
			{ Name: "GiantBow1", Priority: 4, BuyGroup: "GiantBow1" },
			{ Name: "BunnyEars1", Value: 10, BuyGroup: "BunnyEars1" },
			{ Name: "BunnyEars2", Value: 20, BuyGroup: "BunnyEars2" },
			{ Name: "PuppyEars1", Value: 20, Priority: 6, BuyGroup: "PuppyEars1" },
			{ Name: "SuccubusHorns", Value: 15, BuyGroup: "SuccubusHorns" },
			{ Name: "Horns", Value: 20, BuyGroup: "Horns" },
			{ Name: "Horns2", Value: 15, BuyGroup: "Horns2"},
			{ Name: "Horns3", Value: 15, BuyGroup: "Horns3" },
			{ Name: "HairFlower1", Value: 10, BuyGroup: "HairFlower1"},
			{ Name: "FoxEars1", Value: 15, BuyGroup: "FoxEars1" },
			{ Name: "BatWings", Value: 20, BuyGroup: "BatWings" },
			{ Name: "KittyMask1", Value: 25, Hide: ["HairFront", "Glasses", "HairAccessory2"], BuyGroup: "BatWings" },
			{ Name: "KittenEars1", Value: 20, BuyGroup: "KittenEars1" },
			{ Name: "KittenEars2", Value: 20, BuyGroup: "KittenEars2" },
			{ Name: "WolfEars1", Value: 20, BuyGroup: "WolfEars1" },
			{ Name: "WolfEars2", Value: 20, BuyGroup: "WolfEars2" },
			{ Name: "FoxEars2", Value: 20, BuyGroup: "FoxEars2" },
			{ Name: "FoxEars3", Value: 20, BuyGroup: "FoxEars3" },
			{ Name: "PuppyEars2", Value: 20, BuyGroup: "PuppyEars2"},
			{ Name: "RaccoonEars1", Value: 15, BuyGroup: "RaccoonEars1"},
			{ Name: "WeddingVeil1", Value: 30, Priority: 4, BuyGroup: "WeddingVeil1"},
			{ Name: "HairFeathers1", Value: 10, BuyGroup: "HairFeathers1"},
			{ Name: "MouseEars1", Value: 20, BuyGroup: "MouseEars1"},
			{ Name: "MouseEars2", Value: 20, BuyGroup: "MouseEars2"}
		]
	},
	
	{
		Group: "HairAccessory2",
		Priority: 47,
		Default: false,
		Clothing: true,
		Color: ["Default", "#202020", "#808080", "#bbbbbb", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		AllowPose: ["Suspension"],
		Left: 90,
		Top: 0,
		Asset: [
			"Ears1", "Ears2", "PonyEars1",
			{ Name: "Ribbons1", Priority: 4, BuyGroup: "Ribbons1" },
			{ Name: "Ribbons2", Value: -1, Priority: 4, BuyGroup: "Ribbons2" },
			{ Name: "Ribbons3", BuyGroup: "Ribbons3" },
			{ Name: "Ribbons4", BuyGroup: "Ribbons4" },
			{ Name: "GiantBow1", Priority: 4, BuyGroup: "GiantBow1" },
			{ Name: "BunnyEars1", Value: -1, BuyGroup: "BunnyEars1" },
			{ Name: "BunnyEars2", Value: -1, BuyGroup: "BunnyEars2" },
			{ Name: "PuppyEars1", Value: -1, Priority: 29, BuyGroup: "PuppyEars1" },
			{ Name: "SuccubusHorns", Value: -1, BuyGroup: "SuccubusHorns" },
			{ Name: "Horns", Value: -1, BuyGroup: "Horns" },
			{ Name: "Horns2", Value: -1, BuyGroup: "Horns2"},
			{ Name: "Horns3", Value: -1, BuyGroup: "Horns3" },
			{ Name: "HairFlower1", Value: -1, BuyGroup: "HairFlower1"},
			{ Name: "FoxEars1", Value: -1, BuyGroup: "FoxEars1" },
			{ Name: "BatWings", Value: -1, BuyGroup: "BatWings" },
			{ Name: "KittyMask1", Value: -1, Hide: ["HairFront", "Glasses", "HairAccessory1"], BuyGroup: "BatWings" },
			{ Name: "KittenEars1", Value: -1, BuyGroup: "KittenEars1" },
			{ Name: "KittenEars2", Value: -1, BuyGroup: "KittenEars2" },
			{ Name: "WolfEars1", Value: -1, BuyGroup: "WolfEars1" },
			{ Name: "WolfEars2", Value: -1, BuyGroup: "WolfEars2" },
			{ Name: "FoxEars2", Value: -1, BuyGroup: "FoxEars2" },
			{ Name: "FoxEars3", Value: -1, BuyGroup: "FoxEars3" },
			{ Name: "PuppyEars2", Value: -1, BuyGroup: "PuppyEars2"},
			{ Name: "RaccoonEars1", Value: -1, BuyGroup: "RaccoonEars1"},
			{ Name: "WeddingVeil1", Value: -1, Priority: 4, BuyGroup: "WeddingVeil1"},
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
		Default: false,
		Clothing: true,
		Underwear: true,
		Color: ["#303030", "#808080", "#e0e0e0", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Left: 180,
		Top: 125,
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
		Default: false,
		Clothing: true,
		Underwear: true,
		AllowPose: ["AllFours"],
		Color: ["Default", "#cccccc", "#aaaaaa", "#888888", "#666666", "#444444", "#222222", "#aa8080", "#80aa80", "#8080aa", "#aaaa80", "#80aaaa", "#aa80aa", "#cc3333", "#33cc33", "#3333cc", "#cccc33", "#33cccc", "#cc33cc"],
		Left: 0,
		Top: 150,
		Asset: [
			{ Name: "TailStrap", Value: 30 },
			{ Name: "HorseTailStrap", Value: 20 },
			{ Name: "HorseTailStrap1", Value: 30 },
			{ Name: "FoxTailsStrap", Value: 50, Priority: 2 },
			{ Name: "PuppyTailStrap", Value: 15 },
			{ Name: "SuccubusStrap", Value: 15 },
			{ Name: "SuccubusTailStrap", Value: 10 },
			{ Name: "RaccoonStrap", Value: 25 },
			{ Name: "RaccoonTailStrap", Value: 35, Priority: 2 },
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
			{ Name: "H0950", Zoom: 0.950, Visible: false },
			{ Name: "H0960", Zoom: 0.960, Visible: false },
			{ Name: "H0970", Zoom: 0.970, Visible: false },
			{ Name: "H0980", Zoom: 0.980, Visible: false },
			{ Name: "H0990", Zoom: 0.990, Visible: false },
			{ Name: "H1000", Zoom: 1.000, Visible: false },
			{ Name: "H0900", Zoom: 0.900, Visible: false },
			{ Name: "H0910", Zoom: 0.910, Visible: false },
			{ Name: "H0920", Zoom: 0.920, Visible: false },
			{ Name: "H0930", Zoom: 0.930, Visible: false },
			{ Name: "H0940", Zoom: 0.940, Visible: false }
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
		AllowNone: false,
		AllowColorize: false,
		ParentSize: "BodyUpper",
		ParentColor: "BodyUpper",
		AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread"],
		Color: ["White", "Asian", "Black"],
		Top: 462,
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
		AllowNone: false,
		Color: ["#6a3628", "#202020", "#dcc787", "#6c2132", "#999999", "#dddddd", "#e781b1", "#81e7b1", "#81b1e7", "#eeee99", "#ee9999", "#ee99ee"],
		AllowPose: ["Suspension", "Hogtied", "AllFours"],
		Left: 50,
		Top: 0,
		Asset: ["HairNone", "HairBack1", "HairBack2", "HairBack4", "HairBack10", "HairBack14", "HairBack15", "HairBack16", "HairBack17", "HairBack18", "HairBack19", "HairBack20", "HairBack5", "HairBack8", "HairBack11", "HairBack6", "HairBack21", "HairBack22",
		    { Name: "HairBack23", Priority: 39},
		    { Name: "HairBack24", Priority: 39}
		]
	},

	{
		Group: "HairFront",
		Priority: 44,
		AllowNone: false,
		ParentColor: "HairBack",
		Color: ["#6a3628", "#202020", "#dcc787", "#6c2132", "#999999", "#dddddd", "#e781b1", "#81e7b1", "#81b1e7", "#eeee99", "#ee9999", "#ee99ee"],
		Left: 150,
		Top: 50,
		Asset: ["HairFront1", "HairFront2", "HairFront3", "HairFront4", "HairFront5", "HairFront6", "HairFront7", "HairFront8", "HairFront9", "HairFront10", "HairFront11", "HairFront12", "HairFront13", "HairFront14"]
	},

	{
		Group: "Eyes",
		Priority: 9,
		AllowNone: false,
		Color: ["#6a3628", "#5e481e", "#666666", "#555588", "#558855", "#885555", "#202020", "#aa3333", "#33aa33", "#3333aa", "#aaaa33", "#33aaaa", "#aa33aa"],
		AllowExpression: ["Closed", "Dazed", "Shy", "Sad", "Horny", "Lewd", "VeryLewd", "Heart", "LewdHeart", "Dizzy", "Daydream", "WinkL", "WinkR", "Angry", "Surprised", "Scared"],
		Left: 200,
		Top: 145,
		FullAlpha: false,
		Blink: true,
		Asset: ["Eyes1", "Eyes2", "Eyes3", "Eyes4", "Eyes5", "Eyes6", "Eyes7", "Eyes8", "Eyes9", "Eyes10", "Eyes11"]
	},

	{
		Group: "Mouth",
		Priority: 10,
		AllowNone: false,
		Color: ["Default", "#803d26", "#aa5555", "#cc3333", "#55aa55", "#5555aa", "#55aaaa", "#aa55aa", "#aaaa55"],
		AllowExpression: ["Frown", "Sad", "Pained", "Angry", "HalfOpen", "Open", "Ahegao", "Moan", "TonguePinch", "LipBite", "Happy", "Devious", "Laughing", "Grin", "Smirk"],
		Left: 235,
		Top: 180,
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
		AllowNone: false,
		ParentGroup: "BodyUpper",
		Default: false,
		Color: ["Default", "#a6665b", "#803d26", "#d68777", "#9b4a2e", "#bb6655"],
		Left: 175,
		Top: 285,
		Asset: ["Nipples1", "Nipples2", "Nipples3"]
	},

	{
		Group: "Pussy",
		Priority: 12,
		AllowNone: false,
		Color: ["Default", "#6a3628", "#443330", "#222222"],
		Left: 225,
		Top: 500,
		FullAlpha: false,
		Asset: ["PussyLight1", "PussyLight2", "PussyLight3", "PussyDark1", "PussyDark2", "PussyDark3"]
	},

	// Facial Expression specific
	{
		Group: "Eyebrows",
		Priority: 9,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["Raised", "Lowered", "OneRaised", "Harsh", "Angry", "Soft"],
		Left: 200,
		Top: 120,
		Asset: ["Eyebrows1"]
	},

	{
		Group: "Blush",
		Priority: 8,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["Low", "Medium", "High", "VeryHigh", "Extreme", "ShortBreath"],
		Left: 190,
		Top: 100,
		Asset: ["Blush"]
	},

	{
		Group: "Fluids",
		Priority: 11,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["DroolLow", "DroolMedium", "DroolHigh", "DroolSides", "DroolMessy", "DroolTearsLow", "DroolTearsMedium", "DroolTearsHigh", "DroolTearsMessy", "DroolTearsSides", "TearsHigh", "TearsMedium", "TearsLow"],
		Left: 200,
		Top: 145,
		Asset: ["Fluids"]
	},

	{
		Group: "Emoticon",
		Priority: 49,
		AllowNone: false,
		AllowColorize: false,
		AllowCustomize: false,
		AllowExpression: ["Afk", "Sleep", "Hearts", "Tear", "Hearing", "Confusion", "Exclamation", "Annoyed", "Read"],
		Left: 250,
		Top: 0,
		Asset: ["Emoticon"]
	},

	// Item specific
	{
		Group: "ItemFeet",
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "Grope"],
		Priority: 27,
		ParentGroup: "BodyLower",
		Default: false,
		IsRestraint: true,
		Effect: ["Freeze", "Prone"],
		Color: ["Default"],
		Left: 125,
		Top: 725,
		Zone: [[100, 750, 300, 120]],
		Asset: [
			{ Name: "NylonRope", Value: 30, Time: 15, DefaultColor: "#909090", BuyGroup: ["NylonRope"], SetPose: ["LegsClosed"], Audio: "RopeLong" },
			{ Name: "HempRope", Value: 60, Difficulty: 3, Time: 15, DefaultColor: "#956B1C", BuyGroup: ["HempRope"], SetPose: ["LegsClosed"], Extended: true, AllowType: ["Mermaid", "Suspension"], Audio: "RopeLong", HideItem: ["ItemDevicesTeddyBear"] },
			{ Name: "LeatherBelt", Value: 25, Time: 10, RemoveTime: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "SturdyLeatherBelts", Value: 50, Time: 10, RemoveTime: 5, AllowLock: true, SetPose: ["LegsClosed"], BuyGroup: "SturdyLeatherBelts", Extended: true, AllowType: ["One", "Two", "Three", "Four"] },
			{ Name: "Irish8Cuffs", Value: 25, Time: 10, RemoveTime: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "DuctTape", Value: 50, Time: 15, Extended: true, RemoveTime: 10, BuyGroup: "DuctTape", HideItem: ["ItemBootsThighHighLatexHeels"], SetPose: ["LegsClosed"], AllowType: ["HalfFeet", "MostFeet", "CompleteFeet"] },
			{ Name: "LeatherAnkleCuffs", Value: 30, Difficulty: 2, Time: 10, Random: false, Effect: [], Priority: 24, AllowPose: ["LegsClosed"], Extended: true, AllowLock: true, AllowEffect: ["Freeze", "Prone"] },
			{ Name: "OrnateAnkleCuffs", Value: 90, Difficulty: 3, Time: 10, Random: false, Effect: [], Priority: 24, AllowPose: ["LegsClosed"], Extended: true, AllowLock: true, AllowEffect: ["Freeze", "Prone"],
			Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "SpreaderMetal", Value: 50, Difficulty: 3, Time: 10, Random: false, AllowLock: true, Effect: ["Freeze", "Prone"], SetPose: ["LegsOpen"], Block: ["ItemLegs"], Prerequisite: ["LegsOpen", "NotKneeling"], RemoveAtLogin: true },
			{ Name: "BallChain", Value: 40, Difficulty: 5, Time: 10, Effect: [], RemoveTime: 10, Random: false, AllowLock: true, AllowPose: ["LegsOpen", "LegsClosed"] },
			{ Name: "AnkleShackles", Value: 30, Difficulty: 6, Time: 10, RemoveTime: 5, Effect: ["Prone"], Random: false, AllowLock: true, AllowPose: ["LegsOpen", "LegsClosed"] },
			{ Name: "Zipties", Value: 20, Difficulty: 6, Time: 5, RemoveTime: 6, SetPose: ["LegsClosed"], BuyGroup: "Zipties" },
			{ Name: "Chains", Value: 90, Difficulty: 5, Time: 20, AllowLock: true, BuyGroup: "Chains", SetPose: ["LegsClosed"], Extended: true, AllowType: ["Strict", "Suspension"] },
			{ Name: "SpreaderDildoBar", Value: 60, Difficulty: 5, Time: 10, Random: false, Top: 400, AllowLock: true, Effect: ["Freeze", "Prone"], SetPose: ["LegsOpen"], Prerequisite: ["AccessVulva", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva"],
			Layer: [
				{ Name: "DildoBar", AllowColorize: true },
				{ Name: "Pussy", AllowColorize: false }
			], RemoveAtLogin: true },
			{ Name: "SpreaderVibratingDildoBar", Value: 70, Difficulty: 5, Time: 10, Random: false, Top: 400, AllowLock: true, Effect: ["Egged", "Freeze", "Prone"], SetPose: ["LegsOpen"], Prerequisite: ["AccessVulva", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
			Layer: [
				{ Name: "DildoBar", AllowColorize: true },
				{ Name: "Pussy", AllowColorize: false }
			], RemoveAtLogin: true },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemLegs",
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "Grope"],
		Priority: 25,
		ParentGroup: "BodyLower",
		Default: false,
		IsRestraint: true,
		Effect: ["Prone", "KneelFreeze"],
		Color: ["Default"],
		AllowPose: ["Kneel"],
		Left: 125,
		Top: 400,
		Zone: [[100, 580, 300, 170]],
		Asset: [
			{ Name: "NylonRope", Value: 30, Time: 10, DefaultColor: "#909090", BuyGroup: ["NylonRope"], SetPose: ["LegsClosed"], Audio: "RopeLong" },
			{ Name: "HempRope", Value: 60, Difficulty: 3, Time: 10, DefaultColor: "#956B1C", RemoveTime: 15, BuyGroup: ["HempRope"], SetPose: ["LegsClosed"], Extended: true, AllowType: ["Mermaid"], Audio: "RopeLong" },
			{ Name: "LeatherBelt", Value: 25, Time: 5, AllowLock: true, SetPose: ["LegsClosed"] },
			{ Name: "SturdyLeatherBelts", Value: 50, Time: 5, AllowLock: true, SetPose: ["LegsClosed"], BuyGroup: "SturdyLeatherBelts", Extended: true, AllowType: ["One", "Two", "Three", "Four"] },
			{ Name: "DuctTape", Value: 50, Time: 15, Extended: true, RemoveTime: 10, BuyGroup: "DuctTape", HideItem: ["ItemBootsThighHighLatexHeels", "ShoesThighHighLatexHeels"], SetPose: ["LegsClosed"], AllowType: ["HalfLegs", "MostLegs", "CompleteLegs"] },
			{ Name: "LeatherLegCuffs", Value: 30, Difficulty: 2, Time: 10, Random: false, Priority: 24, AllowPose: ["LegsClosed"], Extended: true, AllowLock: true, Effect: [], AllowEffect: ["Prone", "KneelFreeze"], AllowType: ["Closed"] },
			{ Name: "OrnateLegCuffs", Value: 90, Difficulty: 3, Time: 10, Random: false, Priority: 24, AllowPose: ["LegsClosed"], Extended: true, AllowLock: true, Effect: [], AllowEffect: ["Prone", "KneelFreeze"], AllowType: ["Closed"],
			Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{
				Name: "LegBinder", Value: 80, Difficulty: 15, Time: 30, DefaultColor: "#222222", Block: ["ItemFeet"], SetPose: ["LegsClosed"], Hide: ["Shoes", "Socks", "ClothLower"], HideItem: ["OrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetLeatherAnkleCuffs", "ItemFeetMermaidRopeTie","ItemBootsThighHighLatexHeels"], Effect: ["Prone"], RemoveTime: 20, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false },
				]
			},
			{
				Name: "HobbleSkirt", Value: 125, Difficulty: 15, Time: 30, DefaultColor: "#222222", Block: ["ItemPelvis", "ItemFeet", "ItemVulva", "ItemVulvaPiercings", "ItemButt"], SetPose: ["LegsClosed"], Hide: ["Shoes","Socks", "ClothLower"], HideItem: ["OrnateAnkleCuffs", "ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetLeatherAnkleCuffs", "ItemFeetMermaidRopeTie", "ItemBootsThighHighLatexHeels"], Effect: ["Prone"], RemoveTime: 20, AllowLock: true, Prerequisite: ["NotKneeling", "NotSuspended", "NotHogtied"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{
				Name: "WoodenHorse", Value: 200, Difficulty: 2, Time: 10, Random: false, Alpha: [[160, 720, 200, 240]], Priority: 34, SetPose: ["Horse"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Effect: ["Prone", "Freeze", "Mounted"], Block: ["ItemFeet", "ItemBoots"], Hide: ["Shoes", "Socks", "ItemBoots"], HideItem: ["ClothLowerPajama1", "ClothLowerShorts1", "ClothLowerJeans1", "ClothLowerJeans2", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerGown2Skirt", "ClothLowerLatexPants1", "ItemDevicesTeddyBear", "SuitLowerReverseBunnySuit"], Prerequisite: ["NotKneeling", "LegsOpen", "NotSuspended", "NotHogtied", "NotShackled"],
				Layer: [
					{ Name: "Frame", AllowColorize: true },
					{ Name: "Wood", AllowColorize: false }
				]
			},
			{ Name: "Zipties", Value: 20, Difficulty: 6, Time: 5, RemoveTime: 6, SetPose: ["LegsClosed"], BuyGroup: "Zipties" },	
			{ Name: "Chains", Value: 90, Difficulty: 5, Time: 20, RemoveTime: 15, AllowLock: true, BuyGroup: "Chains", SetPose: ["LegsClosed"], Extended: true, AllowType: ["Strict"] },
			{ Name: "FrogtieStraps", Value: 25, Time: 5, Random: false, AllowLock: true, SetPose: ["Kneel"] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemVulva",
		Category: "Item",
		Activity: ["MasturbateHand", "MasturbateFist", "MasturbateFoot", "MasturbateTongue", "Caress", "Slap", "Kiss", "Nibble"],
		Priority: 15,
		Default: false,
		Color: ["Default"],
		AllowPose: ["Kneel"],
		Left: 125,
		Top: 400,
		Zone: [[100, 500, 100, 80]],
		Asset: [
			{ Name: "VibratingEgg", Value: 25, Time: 5, Effect: ["Egged"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"], Visible: false },
			{ Name: "VibratingWand", Value: 60, Wear: false, Activity: "MasturbateItem", Bonus: [{ Type: "KidnapManipulation", Factor: 3 }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Visible: false },
			{ Name: "VibratorRemote", Value: 50, Effect: ["Remote"], Wear: false, BuyGroup: "VibratorRemote", Visible: false },
			{ Name: "VibratingLatexPanties", Value: 50, Time: 10, DefaultColor: "#60A0AF", Effect: ["Egged", "Chaste"], Block: ["ItemButt"], Prerequisite: ["AccessVulva", "CannotHaveWand"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowLock: true, AllowEffect: ["Egged", "Vibrating"] },
			{
				Name: "WandBelt", Value: 80, Time: 15, DefaultColor: "#BBAAAA", Priority: 24, Effect: ["Egged"], Block: ["ItemPelvis"], Prerequisite: ["CannotHaveWand"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowLock: true, AllowEffect: ["Egged", "Vibrating"], HideItem: ["ClothLowerPajama1", "ClothLowerMistressBottom"],
				Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Wand", AllowColorize: false }
				]
			},
			{ Name: "PenisDildo", Value: 20, Time: 10, Priority: 11, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], BuyGroup: "PenisDildo",
			Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{ Name: "VibratingDildo", Value: 60, Time: 10, Priority: 11, Effect: ["Egged"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
			Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{
				Name: "InflatableVibeDildo", Value: 100, Time: 10, Priority: 11, Effect: ["Egged"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
				Layer: [
					{ Name: "Dildo", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{
				Name: "ClitoralStimulator", Value: 70, Time: 10, DefaultColor: "#8a00d1", Priority: 11, Effect: ["Egged"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
				Layer: [
					{ Name: "Stimulator", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{ Name: "ClitSuctionCup", Value: 25, Time: 10, Priority: 11, Effect: [], Extended: true, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "TapeStrips", Value: 10, Time: 5, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "BenWaBalls", Value: 30, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }], Visible: false },
			{ Name: "HeavyWeightClamp", Value: 30, Time: 5, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "FullLatexSuitWand", Value: -1, Difficulty: 12, Time: 5, Priority: 34, IsRestraint: true, Block: ["ItemVulvaPiercings"], AllowLock: true, Effect: ["Egged", "Block", "Prone"], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "ClitAndDildoVibratorbelt", Value: 100, Time: 10, Priority: 11, Effect: ["Egged"], Hide: ["Panties"], Block: ["ItemPelvis"], AllowLock: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"],
			Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Crotch", AllowColorize: false }
				]
			},
			{
				Name: "HempRopeBelt", Value: 60, Time: 15, BuyGroup: ["HempRope"], Effect: ["Egged"], DefaultColor: "#956B1C", Block: ["ItemPelvis"], Prerequisite: ["CannotHaveWand"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }] , AllowEffect: ["Egged", "Vibrating"], HideItem: ["ClothLowerPajama1", "ClothLowerMistressBottom"],
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
		Category: "Item",
		Priority: 13,
		Default: false,
		Color: ["Default"],
		AllowPose: ["Kneel"],
		Left: 125,
		Top: 400,
		Zone: [[200, 500, 100, 80]],
		Asset: [
			{ Name: "StraightClitPiercing", Value: 15, Difficulty: 10, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "RoundClitPiercing", Value: 15, Difficulty: 10, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "WeightedClitPiercing", Value: 30, Difficulty: 10, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "BarbellClitPiercing", Value: 20, Difficulty: 10, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChastityClitPiercing", Value: 50, Difficulty: 50, Time: 20, Effect: ["Chaste"], Block: ["ItemVulva"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, RemoveTime: 20, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"] },
			{ Name: "ChastityClitShield", Value: 70, Difficulty: 50, Time: 30, Effect: ["Chaste"], Block: ["ItemVulva"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, RemoveTime: 30, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"] },
			{ Name: "HighSecurityVulvaShield", Value: 100, Difficulty: 99, Time: 60, Effect: ["Chaste"], Block: ["ItemVulva"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, RemoveTime: 200, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], HideItem: ["ItemButtAnalBeads2","ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo"] },
			{ Name: "JewelClitPiercing", Value: 20, Difficulty: 10, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "AdornedClitPiercing", Value: 20, Difficulty: 10, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ 	
				Name: "VibeHeartClitPiercing", Value: 35, Difficulty: 10, Time: 5, Effect: ["Egged"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"], BuyGroup: ["VibeHeart"], AllowLock: true,
				Layer: [
					{ Name: "Heart", AllowColorize: true },
					{ Name: "Ring", AllowColorize: false }
				]
			},
			{ Name: "BellClitPiercing", Value: 30, Difficulty: 10, Time: 5, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "TapedClitEgg", Value: 25, Time: 5, Effect: ["Egged"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemButt",
		Category: "Item",
		Activity: ["Kiss", "MasturbateHand", "MasturbateFist", "MasturbateTongue", "Spank", "Caress", "Grope"],
		Priority: 4,
		Default: false,
		Color: ["Default"],
		AllowPose: ["AllFours"],
		Left: 0,
		Top: 0,
		Zone: [[300, 500, 100, 80]],
		Asset: [
			{ Name: "BlackButtPlug", Value: 15, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], Visible: false },
			{ Name: "PenisPlug", Value: 20, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], Visible: false, BuyGroup: "PenisDildo" },
			{ Name: "TailButtPlug", Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HorsetailPlug", Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HorsetailPlug1", Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "PuppyTailPlug", Value: 25, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "PuppyTailPlug1", Value: 30, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "SuccubusButtPlug", Value: 25, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "SuccubusButtPlug2", Value: 25, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "FoxTails", Value: 60, Time: 10, Priority: 2, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "RaccoonButtPlug", Value: 40, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "RaccoonTailPlug", Value: 50, Time: 10, Priority: 2, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "AnalBeads", Value: 20, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], Visible: false },
			{ Name: "AnalBeads2", Value: 70, Time: 14, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], AllowType: ["Base", "_2in", "_3in", "_4in", "_5in"], Extended: true },
			{ Name: "ButtPump", Value: 35, Time: 10, Effect: [], Extended: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }], Visible: false },
			{ Name: "VibratingButtplug", Value: 60, Time: 10, Effect: ["Egged"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"], Visible: false },
			{ Name: "InflVibeButtPlug", Value: 90, Time: 10, Effect: ["Egged"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Egged", "Vibrating"], Visible: false },
			{ Name: "AnalHook", Value: 20, Time: 10, IsRestraint: true, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }], AllowEffect: ["Freeze", "Egged"], Extended: true, AllowType: ["Base", "Chain", "Hair"] },
			{ Name: "ButtPlugLock", Value: 75, Difficulty: 50, Time: 30, IsRestraint: true, Effect: ["Chaste"], Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], AllowLock: true, RemoveTime: 50, ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 10}, { Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], AllowEffect: ["Chaste", "Tethered", "Freeze", "ForceKneel"], Extended: true, AllowType: ["Base", "ChainShort", "ChainLong"] },
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
			{ Name: "VibratingDildoPlug", Value: 60, Time: 10, Prerequisite: ["AccessVulva", "AccessVulvaSuitZip"], BuyGroup: "VibratingDildo", Effect: ["Egged"] },
  		{ Name: "BunnyTailPlug1", Value: 1, Time: 10, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10}] },
			{ Name: "BunnyTailPlug2", Value: 1, Time: 10, Prerequisite: "AccessVulva", ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10}] },
			AssetSpankingToys
		]
	},
	
	{
		Group: "ItemPelvis",
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "Pinch", "MassageHands", "Grope"],
		Priority: 16,
		ParentGroup: "BodyLower",
		Default: false,
		Color: ["Default"],
		Left: 125,
		Top: 375,
		Zone: [[100, 420, 300, 80]],
		Asset: [
			{ Name: "StraponPanties", Value: -1, Time: 15, DefaultColor: "#505050", Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Prerequisite: "AccessVulva" },
			{ Name: "LeatherChastityBelt", Value: 30, Difficulty: 8, Time: 20, Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo"], Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 10, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "SleekLeatherChastityBelt", Value: 45, Difficulty: 11, Time: 20, Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 10, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "StuddedChastityBelt", Value: 60, Difficulty: 14, Time: 20, Effect: ["Chaste"], Block: ["ItemVulva", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 10, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AllowType: ["ClosedBack"], AllowBlock: ["ItemButt"] },
			{ Name: "MetalChastityBelt", Value: 100, Difficulty: 20, Time: 20, Effect: ["Chaste"], Block: ["ItemVulva", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 10, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AllowType: ["ClosedBack"], AllowBlock: ["ItemButt"] },
			{ Name: "PolishedChastityBelt", Value: 150, Difficulty: 30, Time: 20, Effect: ["Chaste"], Block: ["ItemVulva", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 10, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AllowType: ["ClosedBack"], AllowBlock: ["ItemButt"] },
			{
				Name: "OrnateChastityBelt", Value: 200, Difficulty: 50, Time: 20, Effect: ["Chaste"], Block: ["ItemVulva", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 10, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Extended: true, AllowType: ["ClosedBack"], AllowBlock: ["ItemButt"],
			Layer: [
					{ Name: "Belt", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "SteelChastityPanties", Value: 150, Difficulty: 50, Time: 50, Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], Hide: ["ItemVulva", "ItemVulvaPiercings"], Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 60, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "HarnessPanties1", Value: 35, Difficulty: 8, Time: 10, Priority: 19, Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 15, BuyGroup: ["HarnessPanties1"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], AllowPose: ["LegsClosed", "Kneel"] },
			{ Name: "HarnessPanties2", Value: 40, Difficulty: 9, Time: 10, Left: 85, Top: 395, Priority: 19, Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 15, BuyGroup: ["HarnessPanties2"], Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"], AllowPose: ["LegsClosed", "Kneel", "Horse", "KneelingSpread"] },
			{ Name: "LeatherStrapPanties1", Value: 20, Difficulty: 5, Time: 20, Left: 150, Top: 395, Effect: ["Chaste"], Block: ["ItemVulva", "ItemButt", "ItemVulvaPiercings"], HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo", "ItemVulvaPiercingsVibeHeartClitPiercing"], Prerequisite: "AccessVulva", AllowLock: true, RemoveTime: 10, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], BuyGroup: ["LeatherStrapPanties1"] },
			{
				Name: "LoveChastityBelt", Value: 250, Difficulty: 50, Time: 20, HideItem: ["ItemButtAnalBeads2", "ItemVulvaVibratingDildo", "ItemVulvaClitSuctionCup", "ItemVulvaInflatableVibeDildo", "ItemVulvaHeavyWeightClamp", "ItemVulvaPenisDildo"], Prerequisite: "AccessVulva", RemoveTime: 10, Extended: true,
				Effect: ["Lock"], OwnerOnly: true,
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
			{ Name: "LeatherCrop", Value: 20, Wear: false, Activity: "SpankItem", BuyGroup: "LeatherCrop", Bonus: [{ Type: "KidnapDomination", Factor: 3 }], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "LeatherWhip", Value: 40, Wear: false, Activity: "SpankItem", BuyGroup: "LeatherWhip", Bonus: [{ Type: "KidnapBruteForce", Factor: 3 }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemTorso",
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Caress", "MassageHands", "MassageFeet", "Rub"],
		Category: "Item",
		Priority: 17,
		Default: false,
		AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Yoked", "Hogtied", "AllFours"],
		Color: ["Default"],
		Left: 125,
		Top: 200,
		Zone: [[100, 340, 300, 80]],
		Asset: [
			{ Name: "NylonRopeHarness", Value: 30, Time: 20, DefaultColor: "#909090", BuyGroup: ["NylonRope"], Prerequisite: "AccessTorso", Extended: true, AllowType: ["Harness", "Diamond", "Star", "Waist"], Audio: "RopeLong" },
			{ Name: "HempRopeHarness", Value: 60, Difficulty: 3, Time: 20, DefaultColor: "#956B1C", Extended: true, Prerequisite: "AccessTorso", RemoveTime: 25, BuyGroup: ["HempRope"], AllowType: ["Harness", "Diamond", "Star", "Waist"], Audio: "RopeLong" },
			{ Name: "LeatherHarness", Value: 60, Difficulty: 50, Time: 15, Prerequisite: "AccessTorso", RemoveTime: 10, AllowLock: true },
			{ Name: "AdultBabyHarness", Value: 50, Difficulty: 3, Time: 15, DefaultColor: "#aaaaaa", Priority: 34, RemoveTime: 10, AllowLock: true, ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }] },
			{ Name: "HarnessBra1", Value: 30, Difficulty: 8, Time: 15, Priority: 20, Prerequisite: "AccessTorso", RemoveTime: 10, BuyGroup: ["HarnessBra1"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"], AllowLock: true },
			{ Name: "HarnessBra2", Value: 40, Difficulty: 8, Time: 15, Priority: 20, Prerequisite: "AccessTorso", RemoveTime: 10, BuyGroup: ["HarnessBra2"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"], AllowLock: true },
			{ Name: "Corset2", Value: 30, Difficulty: 8, Time: 15, Priority: 21, Prerequisite: "AccessTorso", RemoveTime: 10, BuyGroup: ["Corset2"], Hide: ["ItemNipples", "ItemNipplesPiercings"], AllowLock: true },
			{ Name: "Corset3", Value: 25, Difficulty: 8, Time: 15, Priority: 21, Prerequisite: "AccessTorso", RemoveTime: 10, BuyGroup: ["Corset3"], Hide: ["ItemNipples", "ItemNipplesPiercings"], AllowLock: true },
			{ Name: "Corset4", Value: 15, Difficulty: 8, Time: 15, Priority: 21, Prerequisite: "AccessTorso", RemoveTime: 10, BuyGroup: ["Corset4"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"], AllowLock: true },
			{ Name: "Corset5", Value: 20, Difficulty: 8, Time: 15, Priority: 21, Prerequisite: "AccessTorso", RemoveTime: 10, BuyGroup: ["Corset5"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"], AllowLock: true },
			{ Name: "LeatherBreastBinder", Value: 30, Difficulty: 50, Time: 15, Prerequisite: "AccessTorso", RemoveTime: 10, AllowLock: true },
			{ Name: "LatexCorset1", Value: 40, Difficulty: 8, Time: 15, Priority: 20, Prerequisite: "AccessTorso", RemoveTime: 10, BuyGroup: ["LatexCorset1"], Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"], AllowLock: true },
			{ Name: "LeatherStrapBra1", Value: 15, Difficulty: 5, Time: 15, Left: 150, Top: 200, Prerequisite: "AccessTorso", RemoveTime: 10, AllowLock: true, BuyGroup: ["LeatherStrapBra1"] },
			{ Name: "CrotchChain", Value: 40, Difficulty: 50, Time: 15, Prerequisite: "AccessTorso", RemoveTime: 10, AllowLock: true },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemNipples",
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "Lick", "Suck", "Nibble", "Pinch", "Caress"],
		Category: "Item",
		Priority: 22,
		Default: false,
		Color: ["Default"],
		AllowPose: ["AllFours"],
		Left: 150,
		Top: 200,
		Zone: [[100, 270, 100, 70]],
		Asset: [
			{ Name: "NippleClamp", Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "VibeNippleClamp", Value: 40, Time: 10, Effect: ["Egged"], Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "VibratorRemote", Value: 50, Effect: ["Remote"], Wear: false, BuyGroup: "VibratorRemote" },
			{ Name: "ChainClamp", Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ScrewClamps", Value: 35, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChainTassles", Value: 45, Time: 10, Hide: ["ItemNipplesPiercings"], Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "HeartPasties", Value: 20, Time: 10, DefaultColor: "#800000",  Hide: ["ItemNipplesPiercings"], Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "TapedVibeEggs", Value: 30, Time: 5, Effect: ["Egged"], Prerequisite: "AccessBreast", AllowEffect: ["Egged", "Vibrating"] },
			{ Name: "NippleSuctionCups", Value: 25, Time: 10, Effect: [],  Hide: ["ItemNipplesPiercings"], Extended: true, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "NippleTape" ,Value: 10, Time: 5, Hide: ["ItemNipplesPiercings"], Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "ChopStickNippleClamps", Value: 25, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "KittyPasties", Value: 20, Time: 10, DefaultColor: "#444444", Hide: ["ItemNipplesPiercings"], Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "Clothespins", Value: 15, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "NippleWeightClamps", Value: 35, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "BellClamps", Value: 20, Time: 10, Prerequisite: "AccessBreast", ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 10 }] },
			AssetSpankingToys
		]
	},
	
	{
		Group: "ItemNipplesPiercings",
		ParentGroup: "BodyUpper",
		Category: "Item",
		Priority: 13,
		Default: false,
		Color: ["Default"],
		AllowPose: ["AllFours"],
		Left: 150,
		Top: 200,
		Zone: [[200, 270, 100, 70]],
		Asset: [
			{ Name: "StraightPiercing", Value: 10, Difficulty: 10, Time: 15, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "RoundPiercing", Value: 30, Difficulty: 10, Time: 15, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], Extended: true, AllowType: ["Base", "Chain"] },
			{ Name: "WeightedPiercing", Value: 40, Difficulty: 10, Time: 10, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }], Extended: true, AllowType: ["Base", "Chain"] },
			{ Name: "NippleAccessory1", Value: 15, Difficulty: 10, Time: 5, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, },
			{ Name: "NippleAccessory2", Value: 15, Difficulty: 10, Time: 5, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, },
			{ Name: "NippleAccessory3", Value: 15, Difficulty: 10, Time: 5, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, },
			{ Name: "BarbellPiercing", Value: 20, Difficulty: 10, Time: 15, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "NippleChastityPiercing1", Value: 50, Difficulty: 50, Time: 30, Effect: ["BreastChaste"], Block: ["ItemNipples"], Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, RemoveTime: 30, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "NippleChastityPiercing2", Value: 50, Difficulty: 50, Time: 30, Effect: ["BreastChaste"], Block: ["ItemNipples"], Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, RemoveTime: 30, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ 
				Name: "VibeHeartPiercings", Value: 40, Difficulty: 10, Time: 10, Effect: ["Egged"], Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }], AllowEffect: ["Egged", "Vibrating"], BuyGroup: ["VibeHeart"], AllowLock: true,
				Layer: [
					{ Name: "Heart", AllowColorize: true },
					{ Name: "Ring", AllowColorize: false }
				]
			},
			{Name: "BellPiercing", Value: 30, Difficulty: 10, Time: 15, AllowLock: true, Prerequisite: ["AccessBreast", "AccessBreastSuitZip"], AllowLock: true, ExpressionTrigger: [{ Name: "Closed", Group: "Eyes", Timer: 5 }, { Name: "Angry", Group: "Eyebrows", Timer: 5 }] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemBreast",
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "Lick", "Tickle", "Slap", "Caress", "MasturbateHand", "Grope"],
		Category: "Item",
		Priority: 16,
		Default: false,
		Color: ["Default"],
		AllowPose: ["AllFours"],
		Left: 150,
		Top: 200,
		Zone: [[300, 270, 100, 70]],
		Asset: [
			{ Name: "MetalChastityBra", Value: 60, Difficulty: 50, Time: 15, Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], Hide: ["ItemNipples", "ItemNipplesPiercings"], Prerequisite: "AccessBreast", AllowLock: true, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "PolishedChastityBra", Value: 100, Difficulty: 50, Time: 15, Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], Hide: ["ItemNipples", "ItemNipplesPiercings"], Prerequisite: "AccessBreast", AllowLock: true, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "OrnateChastityBra", Value: 150, Difficulty: 50, Time: 15, Effect: ["BreastChaste"], Block: ["ItemNipples", "ItemNipplesPiercings"], Hide: ["ItemNipples", "ItemNipplesPiercings"], Prerequisite: "AccessBreast", AllowLock: true, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }],
			Layer: [
					{ Name: "Bra", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "LeatherCrop", Value: 20, Wear: false, Activity: "SpankItem", BuyGroup: "LeatherCrop", Bonus: [{ Type: "KidnapDomination", Factor: 3 }], ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "LeatherWhip", Value: 40, Wear: false, Activity: "SpankItem", BuyGroup: "LeatherWhip", Bonus: [{ Type: "KidnapBruteForce", Factor: 3 }], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 10 }, { Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			AssetSpankingToys
		]
	},

	{
		Group: "ItemArms",
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "Lick", "Nibble", "Tickle", "Spank", "Pinch", "Caress", "MassageHands", "Grope", "Cuddle"],
		Category: "Item",
		Priority: 31,
		Default: false,
		IsRestraint: true,
		Color: ["Default"],
		Left: 50,
		Top: 200,
		Zone: [[10, 200, 90, 200], [400, 200, 90, 200]],
		Asset: [
			{ Name: "NylonRope", Value: 30, Time: 15, DefaultColor: "#909090", SelfBondage: false, BuyGroup: ["NylonRope"], SetPose: ["BackBoxTie"], Effect: ["Block", "Prone"], Audio: "RopeLong" },
			{ Name: "HempRope", Value: 60, Difficulty: 3, Time: 20, DefaultColor: "#956B1C", Extended: true, SelfBondage: false, SetPose: ["BackBoxTie"], AllowType: ["Hogtied", "SuspensionHogtied", "AllFours", "WristTie", "WristElbowTie", "RopeCuffs", "WristElbowHarnessTie"], BuyGroup: ["HempRope"], Effect: ["Block", "Prone"], AllowEffect: ["Freeze", "Block", "Prone", "ForceKneel"], AllowBlock: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], HideItem: ["ItemDevicesTeddyBear"], RemoveItemOnRemove: [{ Name: "SuspensionHempRope", Group: "ItemHidden" }], Audio: "RopeLong" },
			{ Name: "MetalCuffs", Value: 40, Difficulty: 5, Time: 5, Priority: 29, SetPose: ["BackCuffs"], Effect: ["Block", "Prone", "Lock"] },
			{ Name: "SturdyLeatherBelts", Value: 50, Difficulty: 5, Time: 20, SelfBondage: false, AllowLock: true, SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], BuyGroup: "SturdyLeatherBelts", Extended: true, AllowType: ["One", "Two", "Three", "Four"] },
			{ Name: "LeatherArmbinder", Value: 80, Difficulty: 10, Time: 25, DefaultColor: "#404040", Extended: true, SelfBondage: false, SelfUnlock: false, Priority: 6, SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], Block: ["ItemHands"], RemoveTime: 10, AllowLock: true, RemoveItemOnRemove: [{ Name: "LeatherArmbinderStrap", Group: "ItemHidden" },{ Name: "LeatherArmbinderWrapStrap", Group: "ItemHidden"}] },
			{ Name: "ArmbinderJacket", Value: 100, Difficulty: 12, Time: 35, Priority: 33, SelfBondage: false, SelfUnlock: false, SetPose: ["BackElbowTouch", "Bolero"], Hide: ["Cloth"], Effect: ["Block", "Prone"], Block: ["ItemHands"], RemoveTime: 25, AllowLock: true },
			{ Name: "LeatherCuffs", Value: 100, Difficulty: 3, Time: 20, DefaultColor: "#404040", Priority: 29, Random: false, AllowPose: ["BackBoxTie", "BackElbowTouch"], Extended: true, AllowLock: true, AllowEffect: ["Block", "Prone"], AllowType: ["Wrist", "Elbow", "Both"] },
			{ Name: "OrnateCuffs", Value: 200, Difficulty: 4, Time: 20, Priority: 29, Random: false, AllowPose: ["BackBoxTie", "BackElbowTouch"], Extended: true, AllowLock: true, AllowEffect: ["Block", "Prone"], AllowType: ["Wrist", "Elbow", "Both"],
			Layer: [
					{ Name: "Cuffs", AllowColorize: true },
					{ Name: "Gems", AllowColorize: false }
				]
			},
			{ Name: "MittenChain1", Value: -1, Difficulty: 5, Time: 15, Random: false, SelfBondage: false, Block: ["ItemHands", "ItemTorso"], AllowLock: true },
			{ Name: "FourLimbsShackles", Value: -1, Time: 30, Enable: false, SetPose: ["BackBoxTie"], Effect: ["Block", "Prone", "Lock"] },
			{ Name: "Manacles", Value: 120, Difficulty: 16, Time: 30, Random: false, AllowLock: true, SelfBondage: false, SetPose: ["BackBoxTie", "Kneel"], Effect: ["Block", "Freeze", "Prone", "ForceKneel"], Prerequisite: ["NoItemFeet", "NotMounted", "NotSuspended", "NotHogtied", "NotKneelingSpread"], Block: ["ItemFeet"] },
			{ Name: "FullBodyShackles", Value: 150, Difficulty: 18, Random: false, AllowLock: true, AllowPose: ["LegsClosed", "Kneel"], Effect: ["Prone", "Shackled"], Prerequisite: ["NoItemFeet", "NotMounted", "NotSuspended", "NotHogtied", "NotKneelingSpread"], Block: ["ItemFeet"]},
			{ Name: "WristShackles", Value: 80, Difficulty: 6, Time: 20, Random: false, AllowPose: ["BackCuffs"], Extended: true, AllowLock: true, AllowEffect: ["Block", "Prone"], Effect: ["Prone"], AllowType: ["Behind"] },
			{ Name: "StraitLeotard", Value: 120, Difficulty: 13, Time: 35, DefaultColor: "#70C0C0", SelfBondage: false, SelfUnlock: false, SetPose: ["BackElbowTouch"], Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ItemButtAnalBeads2", "ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt", "ItemVulvaVibratingDildo", "ItemVulvaInflatableVibeDildo", "ItemVulvaClitSuctionCup"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"], Effect: ["Block", "Prone"], RemoveTime: 20, AllowLock: true },
			{ Name: "StraitJacket", Value: 150, Difficulty: 6, Time: 35, DefaultColor: "#A0A0A0", SelfBondage: false, SelfUnlock: false, Extended: true, SetPose: ["BackElbowTouch"], Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"], Effect: ["Block", "Prone"], RemoveTime: 20, AllowLock: true },	
			{ Name: "CollarCuffs", Value: 60, Difficulty: 9, Time: 35, SelfBondage: false, SelfUnlock: false, Extended: true, Prerequisite: "Collared", SetPose: ["BackBoxTie"], Block: ["ItemHands", "ItemNeck"], Effect: ["Block", "Prone"], RemoveTime: 20, AllowLock: true, Visible: false },
			{ Name: "LeatherStraitJacket", Value: 200, Difficulty: 7, Time: 45, SelfBondage: false, SelfUnlock: false, Extended: true, SetPose: ["BackElbowTouch"], Hide: ["Cloth", "ItemNipplesPiercings"], HideItem: ["ClothLowerSkirt1", "ClothLowerSkirt2", "ClothLowerSkirt3", "ClothLowerTennisSkirt1", "ClothLowerGown2Skirt"], Block: ["ItemNipples", "ItemNipplesPiercings", "ItemTorso", "ItemBreast", "ItemHands"], Effect: ["Block", "Prone"], RemoveTime: 30, AllowLock: true, AllowType: ["Normal", "Snug", "Tight"] },
			{ 
				Name: "Bolero", Value: 100, Difficulty: 11, Time: 35, Priority: 33, DefaultColor: "#E080A0", SelfBondage: false, SelfUnlock: false, SetPose: ["BackElbowTouch", "Bolero"], Block: ["ItemHands"], Effect: ["Block", "Prone"], RemoveTime: 20, AllowLock: true,
				Layer: [
					{ Name: "Leather", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{ Name: "DuctTape", Value: 50, Difficulty: 5, Time: 20, SelfBondage: false, Extended: true, SetPose: ["BackElbowTouch"], Hide: ["ItemNipplesPiercings"], Effect: ["Block", "Prone"], RemoveTime: 10, BuyGroup: "DuctTape", AllowBlock: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemNipples", "ItemNipplesPiercings"], AllowType: ["Bottom", "Top", "Full", "Complete"], ParentGroup: ["BodyLower"], AllowPose: ["Horse", "KneelingSpread"] },
			{ 
				Name: "BitchSuit", Value: 200, Difficulty: 15, Time: 40, DefaultColor: "#888888", Random: false, Extended: true, SelfBondage: false, SelfUnlock: false, RemoveTime: 30, AllowLock: true,
				SetPose: ["BackElbowTouch", "Kneel", "StraitDressOpen"],
				Hide: ["Cloth", "ClothLower", "Bra", "Panties", "BodyLower", "Shoes", "Socks", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "ItemFeet"],
				Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"],
				Effect: ["Block", "Prone", "ForceKneel"],
				Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"],
				AllowBlock: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulvaPiercings", "ItemButt"],
				AllowType: ["", "UnZip", "Latex"],
				Layer: [
				    { Name: "Latex", AllowColorize: true, AllowTypes: [""], HasType: false },
					{ Name: "UnZip", AllowColorize: true, AllowTypes: ["UnZip"], HasType: false }
				]
			},
			{ 
				Name: "BitchSuitExposed", Value: 175, Difficulty: 15, Time: 40, DefaultColor: "#888888", Random: false, SelfBondage: false, SelfUnlock: false, RemoveTime: 30, AllowLock: true,
				SetPose: ["BackElbowTouch", "Kneel", "StraitDressOpen"],
				Hide: ["Cloth", "ClothLower", "BodyLower", "Shoes", "Socks", "ItemBoots", "ItemLegs", "ItemFeet"],
				Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands"],
				Effect: ["Block", "Prone", "ForceKneel"],
				Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"]
			},
			{ Name: "CollarLeashHolding", Value: -1, Difficulty: 1, Time: 3, Random: false, SelfBondage: false, Priority: 36, RemoveTime: 3, Prerequisite: ["NotSuspended", "NotHogtied"] },
			{
			    Name: "StraitDress", Value: 200, Difficulty: 15, Time: 40, DefaultColor: "#4040C0", AllowPose: ["Kneel"], Random: false, SelfBondage: false, SelfUnlock: false, SetPose: ["BackElbowTouch", "LegsClosed"], Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "Suit", "SuitLower"], Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands", "ItemFeet", "ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemLegs", "ItemButt"], Effect: ["Block", "Prone"], HideItem: ["ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetMermaidRopeTie", "ItemFeetLeatherAnkleCuffs"], RemoveTime: 30, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{
			    Name: "StraitDressOpen", Value: 200, Difficulty: 15, Time: 40, DefaultColor: "#400000", AllowPose: ["Kneel"], Random: false, SelfBondage: false, SelfUnlock: false, SetPose: ["BackElbowTouch", "StraitDressOpen"], Hide: ["Cloth", "BodyLower", "Shoes", "ItemBoots", "ItemNipplesPiercings", "ItemLegs", "Suit"], Block: ["ItemPelvis", "ItemTorso", "ItemBreast", "ItemHands", "ItemFeet", "ItemNipples", "ItemNipplesPiercings", "ItemLegs"], Effect: ["Block", "Prone"], HideItem: ["ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetMermaidRopeTie", "ItemFeetLeatherAnkleCuffs"], RemoveTime: 30, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"],
				Layer: [
					{ Name: "Latex", AllowColorize: true },
					{ Name: "Belts", AllowColorize: false }
				]
			},
			{ Name: "Yoke", Value: 80, Difficulty: 10, Time: 20, SetPose: ["Yoked"], SelfBondage: false, Priority: 39, Effect: ["Block", "Prone"], AllowLock: true },
			{ Name: "Pillory", Value: -1, Difficulty: 12, Time: 20, Random: false, SetPose: ["Yoked"], SelfBondage: false, Priority: 44, Effect: ["Block", "Prone"], AllowLock: true },
			{
				Name: "FullLatexSuit", Value: 200, Difficulty: 15, Time: 40, DefaultColor: "#888888", Random: false, SelfBondage: false, RemoveTime: 30, AllowLock: true, Extended: true,
				SetPose: ["BackElbowTouch", "StraitDressOpen"],
				Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "Suit", "SuitLower"],
				Block: ["ItemBoots", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet"],
				Effect: ["Block", "Prone", "Freeze", "BlockKneel"],
				Prerequisite: ["NotSuspended", "NotKneeling", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotKneelingSpread", "NoFeetSpreader", "NotShackled", "CannotBeSuited"],
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
			{ Name: "Zipties", Value: 20, Difficulty: 6, SelfBondage: true, SetPose: ["BackElbowTouch"], Effect: ["Block", "Prone"], BuyGroup: "Zipties", RemoveTime: 6 },
			{ Name: "BoxTieArmbinder", Value: 140, Difficulty: 11, Time: 40, SelfBondage: false, SelfUnlock: false, SetPose: ["BackElbowTouch", "Bolero"], Block: ["ItemHands"], Effect: ["Block", "Prone"], RemoveTime: 30, AllowLock: true },
			{ 
				Name: "BondageBouquet", Value: 40, Difficulty: 3, Time: 15, Priority: 41, Effect: ["Prone"], AllowLock: true, Random: false, BuyGroup: "Bouquet",
				Layer: [
					{ Name: "Base", AllowColorize: false },
					{ Name: "Flowers", AllowColorize: true }
				]
			},
			{ Name: "Chains", Value: 90, Difficulty: 5, Time: 30, Extended: true, SelfBondage: false, AllowLock: true, SetPose: ["BackBoxTie"], AllowType: ["Hogtied", "SuspensionHogtied", "AllFours", "WristTie", "WristElbowTie", "ChainCuffs"], BuyGroup: "Chains", Effect: ["Block", "Prone"], AllowEffect: ["Freeze", "Block", "Prone", "ForceKneel"], AllowBlock: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], RemoveItemOnRemove: [{ Name: "SuspensionChains", Group: "ItemHidden" }] },
			{ Name: "ChainLeashHolding", Value: -1, Difficulty: 1, Time: 3, Random: false, SelfBondage: false, Priority: 36, RemoveTime: 3, Prerequisite: ["NotSuspended", "NotHogtied"] },
			{
			    Name: "PetCrawler", Value: 80, Difficulty: 10, Time: 20, Random: false, SetPose: ["AllFours"], SelfBondage: false, Priority: 39, Effect: ["Block", "Prone", "ForceKneel"], AllowLock: true,
	            Hide: ["ItemBoots", "Suit", "Panties", "Bra"], 
				HideItem: ["ItemButtRaccoonTailPlug", "TailStrapsRaccoonTailStrap", "ItemButtKittenTail1", "TailStrapsKittenTail1", "ItemNipplesPiercingsNippleChastityPiercing2", "ItemTorsoAdultBabyHarness", "ItemTorsoCorset2", "ItemTorsoCorset3", "ItemNipplesPiercingsNippleChastityPiercing1", "ItemNipplesChainTassles", "ItemNipplesHeartPasties", "ItemNipplesNippleTape", "ItemNipplesKittyPasties"],
				Block: ["ItemLegs", "ItemFeet"],
				Prerequisite: ["NoItemFeet", "NoItemLegs", "LegsOpen", "NotMounted", "NotHorse", "NotSuspended", "NotYoked", "NotKneelingSpread", "NoFeetSpreader", "StraitDressOpen" ] },
				{
					Name: "MermaidSuit", Value: 200, Difficulty: 15, Time: 40, DefaultColor: "#400000", Random: false, SelfBondage: false, RemoveTime: 30, AllowLock: true, Extended: true,
					SetPose: ["BackElbowTouch", "StraitDressOpen"],
					Hide: ["Socks", "BodyLower", "Cloth", "ClothLower", "Bra", "Shoes", "ItemBoots", "ItemLegs", "Suit", "SuitLower", "ItemPelvis", "ItemFeet", "Panties"],
					Block: ["ItemBoots", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet"],
					Effect: ["Block", "Prone", "Freeze", "BlockKneel"],
					HideItem: ["ItemFeetNylonRope", "ItemFeetHempRope", "ItemFeetLeatherBelt", "ItemFeetIrish8Cuffs", "ItemFeetDuctTape", "ItemFeetMermaidRopeTie", "ItemFeetLeatherAnkleCuffs"],
					Prerequisite: ["NotSuspended", "NotKneeling", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotKneelingSpread", "NoFeetSpreader", "NotShackled", "CannotBeSuited"],
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
		ParentGroup: "BodyUpper",
		Activity: ["Kiss", "PoliteKiss", "Lick", "Suck", "Nibble", "Spank", "Caress", "TakeCare"],
		Category: "Item",
		Priority: 35,
		Default: false,
		IsRestraint: true,
		Color: ["Default"],
		Zone: [[10, 400, 90, 200], [400, 400, 90, 200]],
		Asset: [
			{ Name: "PaddedMittens", Value: 40, Difficulty: 4, Time: 15, DefaultColor: "#bbbbbb", AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], Extended: true, AllowLock: true },
			{ Name: "PawMittens", Value: 50, Difficulty: 4, Time: 15, DefaultColor: "#bbbbbb", AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], Extended: true, AllowLock: true },
			{ Name: "LeatherMittens", Value: 60, Difficulty: 5, Time: 15, SetPose: ["TapedHands"], AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], RemoveTime: 5, AllowLock: true },
			{ Name: "PaddedLeatherMittens", Value: 70, Difficulty: 6, Time: 15, SetPose: ["TapedHands"], AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], RemoveTime: 5, AllowLock: true },
			{ Name: "PolishedMittens", Value: 80, Difficulty: 8, Time: 20, SelfBondage: false, AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Effect: ["Block", "Prone"], RemoveTime: 10, AllowLock: true  },
			{ Name: "DuctTape", Value: 50, Difficulty: 5, Time: 20, SelfBondage: false, SetPose: ["TapedHands"], AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"], Hide: ["Gloves"], Effect: ["Block", "Prone"], RemoveTime: 10, BuyGroup: "DuctTape" },
			{
				Name: "SpankingToys", Priority: 46, Wear: true,  IsRestraint: false, Extended: true, Random: false, BuyGroup: "SpankingToys", AllowType: ["Crop", "Flogger", "Cane", "HeartCrop", "Paddle", "WhipPaddle", "Whip", "CattleProd", "TennisRacket"], IgnoreParentGroup: true, AllowPose: ["BackBoxTie", "BackElbowTouch", "BackCuffs", "Yoked", "AllFours"],
				DynamicDescription: C => { return ((InventoryIsWorn(C, "SpankingToys", "ItemHands")) && (InventoryGet(C, "ItemHands").Property != null)) ? InventoryGet(C, "ItemHands").Property.Type : "Spanking Toy" },
				DynamicPreviewIcon: C => { return ((InventoryIsWorn(C, "SpankingToys", "ItemHands")) && (InventoryGet(C, "ItemHands").Property != null)) ? InventoryGet(C, "ItemHands").Property.Type : "Paddle" }
			}, {
				Name: "SpankingToysCrop", Value: 20, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysFlogger", Value: 40, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysCane", Value: 15, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysHeartCrop", Value: 30, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysPaddle", Value: 35, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysWhipPaddle", Value: 25, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysWhip", Value: 50, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysCattleProd", Value: 45, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}, {
				Name: "SpankingToysTennisRacket", Value: -1, PrerequisiteBuyGroups: ["SpankingToys"], Random: false,
				DynamicAllowInventoryAdd: () => { return false }
			}
		]
	},

	{
		Group: "ItemNeck",
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Caress", "MassageHands", "Choke"],
		Priority: 34,
		Default: false,
		Color: ["Default"],
		
		Left: 185,
		Top: 160,
		Zone: [[200, 200, 100, 70]],
		Asset: [
			{ Name: "LeatherCollar", Value: 20, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LeatherCollarBell", Value: 30, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LeatherCollarBow", Value: 25, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "SlaveCollar", Value: -1, Difficulty: 50, Time: 5, Priority: 34, Random: false, Effect: ["Lock"], OwnerOnly: true, Extended: true, Enable: false, AllowEffect: ["GagNormal"], AllowBlock: ["ItemMouth", "ItemMouth2", "ItemMouth3"], AllowType: ["SteelPosture", "LeatherPosture", "PetCollar", "HighCollar", "LeatherCollarBell", "LeatherCollarBow", "MaidCollar", "BatCollar", "HighSecurityCollar", "SpikeCollar", "BordelleCollar", "LeatherCorsetCollar", "StrictPostureCollar", "LatexPostureCollar", "HeartCollar", "NobleCorsetCollar", "OrnateCollar", "LoveLeatherCollar", "SlenderSteelCollar"]},
			{ Name: "ClubSlaveCollar", Value: -1, Difficulty: 50, Time: 5, Random: false, Effect: ["Lock"], Enable: false, ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ShockCollar", Value: 80, Difficulty: 50, Time: 15, Random: false, Extended: true, Effect: ["ReceiveShock"], BuyGroup: "ShockCollar", AllowLock: true, ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }] },
			{ Name: "ShockCollarRemote", Value: -1, Random: false, Wear: false, Effect: ["TriggerShock"], BuyGroup: "ShockCollar", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }, { Name: "Soft", Group: "Blush", Timer: 15 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
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
			{ Name: "LoveLeatherCollar", Value: 50, Difficulty: 50, Time: 5, LoverOnly: false, Random: false, AllowLock: true },
			{ Name: "StrictPostureCollar", Value: 60, Difficulty: 50, Time: 30, Priority: 38, RemoveTime: 40, AllowLock: true },
			{ Name: "NobleCorsetCollar", Value: 45, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "HeartCollar", Value: 50, Difficulty: 50, Time: 5, AllowLock: true },
			{ Name: "LatexPostureCollar", Value: 80, Difficulty: 50, Time: 20, IsRestraint: true, Priority: 38, Random: false, BuyGroup: ["LatexPostureCollar"], Block: ["ItemMouth"], Effect: ["GagNormal"], RemoveTime: 30, AllowLock: true },
			{ Name: "LeatherCorsetCollar", Value: 75, Difficulty: 50, Time: 20, IsRestraint: true, DefaultColor: "#404040", Random: false, Priority: 38, BuyGroup: ["LeatherCorsetCollar"], Block: ["ItemMouth"], Effect: ["GagNormal"], RemoveTime: 30, AllowLock: true },
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
		Category: "Item",
		Priority: 41,
		Default: false,
		Color: ["Default"],
		Left: 0,
		Top: 190,
		Zone: [[100, 200, 100, 70]],
		Asset: [
			{ Name: "CollarBell", Value: 5, Difficulty: 3, Time: 5, Random: false, Prerequisite: "Collared", AllowLock: true },
			{ Name: "CollarBow", Value: 5, Difficulty: 1, Time: 5, Random: false, Prerequisite: "Collared" },
			{ Name: "CollarShockUnit", Value: 80, Difficulty: 6, Time: 5, Random: false, Extended: true, Effect: ["ReceiveShock"], Prerequisite: "Collared", AllowLock: true, BuyGroup: "ShockCollar", ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ShockCollarRemote", Value: -1, Random: false, Wear: false, Effect: ["TriggerShock"], BuyGroup: "ShockCollar", ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }, { Name: "Soft", Group: "Blush", Timer: 15 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "CollarNameTag", Value: 50, Difficulty: 20, Time: 5, DefaultColor: "#aaa366", Random: false, IsRestraint: false, Prerequisite: "Collared", Extended: true, AllowLock: true, PropertyLocked: true, AllowType: ["Angel", "BadGirl", "BindMe", "Bitch", "Boobs", "Cupcake", "Devil", "Dom", "Free", "FuckMe", "GagMe", "Goddess", "GoodGirl", "HoldMe", "Jewel", "Love", "Maid", "Meat", "Miss", "Mummy", "Nice", "Needy", "Owned", "Precious", "Pudding", "Queen", "Slave", "Slut", "Sub", "Sweetie", "Taken", "Toy", "Useless", "UseMe", "Whore"] },
			{ Name: "CollarNameTagOval", Value: 50, Difficulty: 20, Time: 5, DefaultColor: "#aaa366", Random: false, IsRestraint: false, Prerequisite: "Collared", Extended: true, AllowLock: true, PropertyLocked: true, AllowType: ["Babe", "Bandit", "Bimbo", "Bratty", "Chair", "Chaste", "Crazy", "Cumslut", "Cutie", "Damsel", "Doll", "EdgeMe", "Evil", "ForSale", "Greedy", "Happy", "Horny", "Kinky", "Lady", "LockMe", "Nude", "Nurse", "Nympho", "Painslut", "Pillow", "Punish", "Robber", "Sad", "Switch", "Table", "Ticklish", "Undress", "Victim", "Violent", "Worm"] },
			{ Name: "CollarNameTagPet", Value: 50, Difficulty: 20, Time: 5, DefaultColor: "#aaa366", Random: false, IsRestraint: false, Prerequisite: "Collared", Extended: true, AllowLock: true, PropertyLocked: true, AllowType: ["Bunny", "Cat", "Dog", "Foxy", "Kitten", "Kitty", "Mochi", "Panda", "Pet", "PetMe", "Pixie", "Pony", "Puppy", "Racoon", "Sloth"] },
			{ Name: "CollarNameTagLover", Value: -1, Difficulty: 20, Time: 5, DefaultColor: "#aaa366", Random: false, IsRestraint: false, Prerequisite: "Collared", Extended: true, AllowLock: true, PropertyLocked: true, AllowType: ["Cookie", "Feather", "Lover", "Muffin"] },
			{ Name: "CollarNameTagLivestock", Value: 50, Difficulty: 20, Time: 5, Random: false, IsRestraint: false, Prerequisite: "Collared", Extended: true, AllowLock: true, PropertyLocked: true, AllowType: ["Animal", "BreedMe", "Cow", "Meat", "MilkMe", "Pig"] },
			{ Name: "CollarMoon", Value: 5, Difficulty: 3, Time: 5, Random: false, Prerequisite: "Collared", AllowLock: true },
			{ Name: "CollarSun", Value: 10, Difficulty: 3, Time: 5, Random: false, Prerequisite: "Collared", AllowLock: true },
			{ Name: "CollarLapis", Value: 10, Difficulty: 3, Time: 5, Random: false, Prerequisite: "Collared", AllowLock: true },
			{ Name: "CollarPentagram", Value: 10, Difficulty: 3, Time: 5, Random: false, Prerequisite: "Collared", AllowLock: true },
			{ Name: "CollarFlower", Value: 5, Difficulty: 1, Time: 5, Random: false, Prerequisite: "Collared", AllowLock: true },
			{ Name: "CollarRose", Value: 5, Difficulty: 1, Time: 5, Random: false, Prerequisite: "Collared", AllowLock: true }
		]
	},

	{
		Group: "ItemNeckRestraints",
		Category: "Item",
		Priority: 40,
		Default: false,
		IsRestraint: true,
		Color: ["Default"],
		Left: 0,
		Top: 190,
		Zone: [[300, 200, 100, 70]],
		Asset: [
			{ Name: "CollarChainLong", Value: 30, Difficulty: 6, Time: 5, Random: false, Prerequisite: ["Collared", "NotSuspended", "NotHogtied"], AllowLock: true, BuyGroup: "CollarChain", AllowPose: ["Kneel", "Horse", "KneelingSpread", "AllFours"], Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }], ParentGroup: ["BodyLower"] },
			{ Name: "CollarChainShort", Value: -1, Difficulty: 6, Time: 5, Random: false, Prerequisite: ["Collared", "AllFours", "NotSuspended", "NotHogtied", "NotMounted", "CanKneel"], AllowLock: true, AllowPose: ["AllFours"], BuyGroup: "CollarChain", SetPose: ["Kneel"], Effect: ["Freeze", "ForceKneel"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }, { Name: "Soft", Group: "Eyebrows", Timer: 5 }] },
			{ Name: "CollarLeash", Value: 20, Difficulty: 6, Time: 5, Random: false, Prerequisite: "Collared", AllowPose: ["AllFours"], AllowLock: true, ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "CollarLeashTaken", Value: -1, Difficulty: 6, Time: 5, Random: false, AllowPose: ["AllFours"], Prerequisite: "Collared", AllowLock: true, Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ChainLeash", Value: 25, Difficulty: 6, Time: 5, Random: false, AllowPose: ["AllFours"], Prerequisite: "Collared", AllowLock: true, ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "ChainLeashTaken", Value: -1, Difficulty: 6, Time: 5, AllowPose: ["AllFours"], Random: false, Prerequisite: "Collared", AllowLock: true, Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }] },
			{ Name: "CollarChainMedium", Value: -1, Difficulty: 6, Time: 5, Random: false, Prerequisite: ["Collared", "NotSuspended", "NotHogtied"], AllowLock: true, BuyGroup: "CollarChain", AllowPose:  ["AllFours","Kneel"], Effect: ["Tethered"], ExpressionTrigger: [{ Name: "Medium", Group: "Blush", Timer: 15 }], ParentGroup: ["BodyLower"] },
		]
	},

	{
		Group: "ItemMouth",
		Category: "Item",
		Activity: ["Kiss", "FrenchKiss", "PoliteKiss", "Lick", "Nibble", "Caress"],
		Priority: 35,
		Default: false,
		IsRestraint: true,
		Effect: ["GagNormal"],
		Color: ["Default"],
		Left: 150,
		Top: 0,
		Zone: [[100, 130, 100, 70]],
		Asset: [
			{ Name: "ClothGag", Value: 15, Difficulty: -4, Time: 10, DefaultColor: "#B0B0B0", Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowType: ["Small", "Cleave", "OTM", "OTN"], BuyGroup: "ClothGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{
				Name: "WiffleGag", Value: 30, Difficulty: 1, Time: 10, DefaultColor: "#FF6060", Effect: ["GagNormal"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, BuyGroup: "WiffleGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Value: 60, Difficulty: 4, Time: 20, DefaultColor: "#FF6060", Effect: ["GagMedium"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "HarnessBallGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Value: 80, Difficulty: 6, Time: 20, DefaultColor: "#404040", Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "HarnessPanelGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{
				Name: "RingGag", Value: 30, Time: 5, DefaultColor: "#404040", Effect: ["GagEasy"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, BuyGroup: "RingGag",  SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Value: 50, Difficulty: -2, Time: 10, Extended: true, RemoveTime: 5, BuyGroup: "DuctTape", Hide: ["Mouth"], Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy", "GagNormal"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "PacifierGag", Value: 10, Difficulty: -50, Time: 2, Random: false, Effect: ["GagVeryLight"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], BuyGroup: "PacifierGag", Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "HarnessPacifierGag", Value: 50, Difficulty: 2, Time: 20, Random: false, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], BuyGroup: "HarnessPacifierGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "DusterGag", Value: -1, Difficulty: 4, Time: 20, Priority: 42, Random: false, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "DusterGag", Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "HarnessPonyBits", Value: -1, Difficulty: 4, Time: 20, Random: false, Effect: ["GagNormal"], AllowLock: true, BuyGroup: "HarnessPonyBits", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "PumpGag", Value: 100, Time: 20, DefaultColor: "#404040", Effect: [], Random: false, Extended: true, AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], AllowEffect: ["GagLight", "GagEasy", "GagMedium", "GagVeryHeavy"], BuyGroup: "PumpGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "KittyGag", Value: 20, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", Effect: ["GagLight"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], BuyGroup: "KittyGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "KittenHarnessPanelGag", Value: 80, Difficulty: 6, Time: 20, Random: false, DefaultColor: "#A0A0A0", Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "KittenHarnessPanelGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "CarrotGag", Value: 40, Time: 15, Effect: ["GagMedium"], Random: false, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "CarrotGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "MuzzleGag", Value: 70, Difficulty: 6, Time: 20, DefaultColor: "#404040", AllowLock: true, Hide: ["Mouth"], BuyGroup: "MuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "RegularSleepingPill", Value: -1, Enable: false, Wear: false, Bonus: [{ Type: "KidnapSneakiness", Factor: 3 }] },
			{ Name: "PantiesMask", Value: 20, Time: 15, Effect: ["GagVeryLight"], Random: false, Hide: ["Mouth"], BuyGroup: "PantiesMask" },
			{
				Name: "PlugGag", Value: 100, Time: 20, Random: false, Extended: true, AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Effect: ["GagEasy"], AllowEffect: ["GagEasy", "GagHeavy"], AllowType: ["Open", "Plug"], BuyGroup: "PlugGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat",
				Layer: [
					{ Name: "Strap", AllowColorize: true },
					{ Name: "Tongue", AllowColorize: false },
					{ Name: "Close", AllowColorize: true, AllowTypes: ["Plug"] }
				]
			},
			{
				Name: "DildoGag", Value: 60, Difficulty: 4, Time: 20, Priority: 42, Random: false, DefaultColor: "#404040", Effect: ["GagMedium"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "DildoGag", Block: ["ItemMouth2", "ItemMouth3"], SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Value: 50, Difficulty: 6, Time: 10, Random: false, Effect: ["GagLight"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, BuyGroup: "BoneGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ 
				Name: "ChopstickGag", Value: 15, Difficulty: 2, Time: 10, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "ChopstickGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Chopsticks", AllowColorize: true },
					{ Name: "Tongue", AllowColorize: false }
				]
			},
			{
				Name: "BambooGag", Value: 30, Difficulty: 6, Time: 10, DefaultColor: "#A07858", Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "BambooGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Rod", AllowColorize: false },
					{ Name: "Rope", AllowColorize: true }
				]
			},
			{ Name: "HarnessBallGag1", Value: 75, Difficulty: 4, Time: 20, Effect: ["GagHeavy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "HarnessBallGag1", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "PumpkinGag", Value: 40, Difficulty: 1, Time: 10, Random: false, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "PumpkinGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{
				Name: "LipGag", Value: 40, Time: 5, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "LipGag",  SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Value: 45, Time: 5, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "SpiderGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "ClothStuffing", Value: 10, Difficulty: -20, Time: 5, Effect: ["GagLight"], Hide: ["Mouth"], BuyGroup: "ClothStuffing",
				Layer: [
					{ Name: "Cheeks", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			},
			{
				Name: "PantyStuffing", Value: 10, Difficulty: -20, Time: 5, DefaultColor: "#900000", Effect: ["GagLight"], Hide: ["Mouth"], BuyGroup: "PantyStuffing",
				Layer: [
					{ Name: "Lips", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: 40, Time: 2, Random: false, Effect: ["GagVeryLight"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }] },
			{ Name: "ScarfGag", Value: 15, Time: 10, Effect: ["GagLight"], Hide: ["Mouth"], BuyGroup: "ScarfGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "LewdGag", Value: 70, Time: 10, Random: false, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], SetPose: ["GagFlat"], Prerequisite: "GagFlat", BuyGroup: "LewdGag" },
			{ Name: "DeepthroatGag", Value: 55, Difficulty: 5, Time: 15, Random: false, DefaultColor: "#404040", Effect: ["GagHeavy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Raised", Group: "Eyebrows", Timer: 10 }], BuyGroup: "DeepthroatGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "LeatherCorsetCollar", Value: 75, Difficulty: 50, Time: 20, Random: false, DefaultColor: "#404040", Hide: ["Mouth"], BuyGroup: ["LeatherCorsetCollar"], Block: ["ItemNeck"], RemoveTime: 30, AllowLock: true, BuyGroup: "LeatherCorsetCollar", SetPose: ["GagCorset"], Prerequisite: "GagCorset" },
			{ Name: "LatexPostureCollar", Value: 80, Difficulty: 50, Time: 20, Random: false, Hide: ["Mouth"], BuyGroup: ["LatexPostureCollar"], Block: ["ItemNeck"], RemoveTime: 30, AllowLock: true, BuyGroup: "LatexPostureCollar", SetPose: ["GagCorset"], Prerequisite: "GagCorset" },
			{ Name: "BitGag", Value: 40, Difficulty: 4, Time: 20, Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, BuyGroup: "BitGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "XLBoneGag", Value: 60, Difficulty: 6, Time: 10, Random: false, Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, BuyGroup: "XLBoneGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "DogMuzzleExposed", Value: 50, Difficulty: 7, Time: 10, Random: false, Effect: ["GagNormal"], AllowLock: true, Hide: ["Mouth"], Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "FoxyHarnessPanelGag", Value: 40, Difficulty: 6, Time: 20, Random: false, Effect: ["GagNormal"], AllowLock: true, Hide: ["Mouth"], Block: ["ItemMouth2", "ItemMouth3"] },
			{ Name: "BallGag", Value: 40, Difficulty: 2, Time: 10, Effect: ["GagMedium"], AllowLock: true,  Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group:"Fluids", Timer: 30 }], BuyGroup: "BallGag", SetPose:["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: false},
					{ Name: "Ball", AllowColorize: true}
				]
			},
			{
				Name: "TongueStrapGag", Value: 35, Time: 15, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "TongueStrapGag",
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "BallGagMask", Value: 90, Difficulty: 6, Time: 30, Effect: ["GagMedium"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "BallGagMask", SetPose:["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HookGagMask", Value: 70, Difficulty: 6, Time: 30, Effect: ["GagEasy"], Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "HookGagMask",
				Layer: [
					{ Name: "Mouth", AllowColorize: false },
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "DildoPlugGag", Value: 100, Time: 20, Random: false, Extended: true, AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Soft", Group: "Eyebrows", Timer: 10 }], Effect: ["GagEasy"], AllowEffect: ["GagEasy", "GagVeryHeavy"], AllowType: ["Open", "Plug"], BuyGroup: "DildoPlugGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: true },
					{ Name: "Tongue", AllowColorize: false },
					{ Name: "Close", AllowColorize: true, AllowTypes: ["Plug"] }
				]
			},
			{ Name: "SteelMuzzleGag", Value: 80, Difficulty: 8, Time: 30, AllowLock: true, Hide: ["Mouth"], BuyGroup: "SteelMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "StitchedMuzzleGag", Value: 60, Difficulty: 5, Time: 15, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "StitchedMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "LatexBallMuzzleGag", Value: 65, Difficulty: 6, Time: 15, Effect: ["GagMedium"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "LatexBallMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{
				Name: "SockStuffing", Value: 10, Difficulty: -20, Time: 5, DefaultColor: "#FFFFFF", Effect: ["GagLight"], Hide: ["Mouth"], BuyGroup: "SockStuffing",
				Layer: [
					{ Name: "Lips", AllowColorize: false },
					{ Name: "Cloth", AllowColorize: true }
				]
			}
		]
	},

	{
		Group: "ItemMouth2",
		Category: "Item",
		Priority: 36,
		Default: false,
		IsRestraint: true,
		Effect: ["GagNormal"],
		Color: ["Default"],
		Left: 150,
		Top: 0,
		Zone: [[200, 130, 100, 70]],
		Asset: [
			{ Name: "ClothGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#B0B0B0", Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowType: ["Small", "Cleave", "OTM", "OTN"], Block: ["ItemMouth"], BuyGroup: "ClothGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{
				Name: "WiffleGag", Value: -1, Difficulty: 1, Time: 10, Random: false, DefaultColor: "#FF6060", Effect: ["GagNormal"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], BuyGroup: "WiffleGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Value: -1, Difficulty: 4, Time: 20, Random: false, DefaultColor: "#FF6060", Effect: ["GagMedium"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], BuyGroup: "HarnessBallGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Value: -1, Difficulty: 6, Time: 20, Random: false, DefaultColor: "#404040", Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], Block: ["ItemMouth"], BuyGroup: "HarnessPanelGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{
				Name: "RingGag", Value: -1, Time: 5, Random: false, DefaultColor: "#404040", Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], BuyGroup: "RingGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Value: -1, Difficulty: -2, Time: 10, Random: false, Extended: true, RemoveTime: 5, Hide: ["Mouth"], BuyGroup: "DuctTape", Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy", "GagNormal"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], Block: ["ItemMouth"], SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "HarnessPacifierGag", Value: -1, Difficulty: 2, Time: 20, Random: false, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth"], BuyGroup: "HarnessPacifierGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "DusterGag", Value: -1, Difficulty: 4, Time: 20, Random: false, Priority: 42, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "DusterGag", Block: ["ItemMouth", "ItemMouth3"] },
			{ Name: "HarnessPonyBits", Value: -1, Difficulty: 4, Time: 20, Random: false, Effect: ["GagNormal"], AllowLock: true, Block: ["ItemMouth"], BuyGroup: "HarnessPonyBits", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "KittyGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", Effect: ["GagLight"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth"], BuyGroup: "KittyGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "KittenHarnessPanelGag", Value: -1, Difficulty: 6, Time: 20, Random: false, DefaultColor: "#A0A0A0", Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], Block: ["ItemMouth"], BuyGroup: "KittenHarnessPanelGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "CarrotGag", Value: -1, Time: 15, Random: false, Effect: ["GagMedium"], Random: false, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], BuyGroup: "CarrotGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "MuzzleGag", Value: -1, Difficulty: 6, Time: 20, Random: false, DefaultColor: "#404040", AllowLock: true, Hide: ["Mouth"], Block: ["ItemMouth"], BuyGroup: "MuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "PantiesMask", Value: -1, Time: 15, Random: false, Effect: ["GagVeryLight"], Random: false, Hide: ["Mouth"], Block: ["ItemMouth"], BuyGroup: "PantiesMask" },
			{
				Name: "DildoGag", Value: 60, Difficulty: 4, Time: 20, Priority: 42, Random: false, DefaultColor: "#404040", Effect: ["GagMedium"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "DildoGag", Block: ["ItemMouth", "ItemMouth3"], SetPose: ["GagFlat"], Prerequisite: "GagFlat",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Value: -1, Difficulty: 6, Time: 10, Random: false, Effect: ["GagLight"], AllowLock: true, ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], BuyGroup: "BoneGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "HarnessBallGag1", Value: -1, Difficulty: 4, Time: 20, Random: false, Effect: ["GagHeavy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], BuyGroup: "HarnessBallGag1", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "PumpkinGag", Value: -1, Difficulty: 1, Time: 10, Random: false, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "PumpkinGag", Block: ["ItemMouth"], SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{
				Name: "LipGag", Value: -1, Time: 5, Random: false, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], BuyGroup: "LipGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Value: -1, Time: 5, Random: false, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth"], BuyGroup: "SpiderGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: -1, Time: 2, Random: false, Effect: ["GagVeryLight"], Hide: ["Mouth"], Block: ["ItemMouth"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }], BuyGroup: "ChloroformCloth", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "ScarfGag", Value: -1, Time: 10, Random: false, Effect: ["GagLight"], Hide: ["Mouth"], Block: ["ItemMouth"], BuyGroup: "ScarfGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "LewdGag", Value: -1, Time: 10, Random: false, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth"], BuyGroup: "LewdGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "LeatherCorsetCollar", Value: -1, Difficulty: 50, Time: 20, Random: false, DefaultColor: "#404040", Hide: ["Mouth"], BuyGroup: ["LeatherCorsetCollar"], Block: ["ItemNeck", "ItemMouth"], RemoveTime: 30, AllowLock: true, BuyGroup: "LeatherCorsetCollar", SetPose: ["GagCorset"], Prerequisite: "GagCorset" },
			{ Name: "LatexPostureCollar", Value: -1, Difficulty: 50, Time: 20, Random: false, Hide: ["Mouth"], BuyGroup: ["LatexPostureCollar"], Block: ["ItemNeck", "ItemMouth"], RemoveTime: 30, AllowLock: true, BuyGroup: "LatexPostureCollar", SetPose: ["GagCorset"], Prerequisite: "GagCorset" },
			{ Name: "BitGag", Value: -1, Difficulty: 4, Time: 20, Random: false, Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, Block: ["ItemMouth"], BuyGroup: "BitGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "XLBoneGag", Value: -1, Difficulty: 6, Time: 10, Random: false, Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, Block: ["ItemMouth"], BuyGroup: "XLBoneGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "BallGag", Value: -1, Difficulty: 2, Time: 10, Effect: ["GagMedium"], AllowLock: true, Block: ["ItemMouth"],  Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group:"Fluids", Timer: 30 }], BuyGroup: "BallGag", SetPose:["GagUnique"], Prerequisite: "GagUnique", Layer: [{ Name: "Strap", AllowColorize: false}, { Name: "Ball", AllowColorize: true}] },
			{ Name: "BallGagMask", Value: 90, Difficulty: 6, Time: 30, Effect: ["GagMedium"], AllowLock: true, Block: ["ItemMouth"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "BallGagMask", SetPose:["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "SteelMuzzleGag", Value: 80, Difficulty: 8, Time: 30, AllowLock: true, Block: ["ItemMouth"], Hide: ["Mouth"], BuyGroup: "SteelMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "StitchedMuzzleGag", Value: 60, Difficulty: 5, Time: 15, Effect: ["GagEasy"], AllowLock: true, Block: ["ItemMouth"], Hide: ["Mouth"], BuyGroup: "StitchedMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "LatexBallMuzzleGag", Value: 65, Difficulty: 6, Time: 15, Effect: ["GagMedium"], AllowLock: true, Block: ["ItemMouth"], Hide: ["Mouth"], BuyGroup: "LatexBallMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" }
		]
	},

	{
		Group: "ItemMouth3",
		Category: "Item",
		Priority: 37,
		Default: false,
		IsRestraint: true,
		Effect: ["GagNormal"],
		Color: ["Default"],
		Left: 150,
		Top: 0,
		Zone: [[300, 130, 100, 70]],
		Asset: [
			{ Name: "ClothGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#B0B0B0", Extended: true, Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowType: ["Small", "Cleave", "OTM", "OTN"], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "ClothGag" },
			{
				Name: "WiffleGag", Value: -1, Difficulty: 1, Time: 10, Random: false, DefaultColor: "#FF6060", Effect: ["GagNormal"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "WiffleGag",  SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{
				Name: "HarnessBallGag", Value: -1, Difficulty: 4, Time: 20, Random: false, DefaultColor: "#FF6060", Effect: ["GagMedium"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "HarnessBallGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Harness", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "HarnessPanelGag", Value: -1, Difficulty: 6, Time: 20, Random: false, DefaultColor: "#404040", Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "HarnessPanelGag" },
			{
				Name: "RingGag", Value: -1, Time: 5, Random: false, DefaultColor: "#404040", Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "RingGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "DuctTape", Value: -1, Difficulty: -2, Time: 10, Random: false, Extended: true, RemoveTime: 5, Hide: ["Mouth"], BuyGroup: "DuctTape", Effect: ["GagVeryLight"], AllowEffect: ["GagVeryLight", "GagLight", "GagEasy", "GagNormal"], AllowType: ["Small", "Crossed", "Full", "Double", "Cover"], Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "HarnessPacifierGag", Value: -1, Difficulty: 2, Time: 20, Random: false, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "HarnessPacifierGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "DusterGag", Value: -1, Difficulty: 4, Time: 20, Random: false, Priority: 42, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "DusterGag", Block: ["ItemMouth", "ItemMouth2"] },
			{ Name: "HarnessPonyBits", Value: -1, Difficulty: 4, Time: 20, Random: false, Effect: ["GagNormal"], AllowLock: true, Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "HarnessPonyBits", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "KittyGag", Value: -1, Difficulty: -4, Time: 10, Random: false, DefaultColor: "#A0A0A0", Effect: ["GagLight"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "KittyGag" },
			{ Name: "KittenHarnessPanelGag", Value: -1, Difficulty: 6, Time: 20, Random: false, DefaultColor: "#A0A0A0", Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "KittenHarnessPanelGag" },
			{ Name: "CarrotGag", Value: -1, Time: 15, Effect: ["GagMedium"], Random: false, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "CarrotGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "MuzzleGag", Value: -1, Difficulty: 6, Time: 20, Random: false, DefaultColor: "#404040", AllowLock: true, Hide: ["Mouth"], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "MuzzleGag" },
			{ Name: "PantiesMask", Value: 20, Time: 15, Effect: ["GagVeryLight"], Random: false, Hide: ["Mouth"], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "PantiesMask" },
			{
				Name: "DildoGag", Value: 60, Difficulty: 4, Time: 20, Priority: 42, Random: false, DefaultColor: "#404040", Effect: ["GagMedium"], AllowLock: true, Hide: ["Mouth"], BuyGroup: "DildoGag", Block: ["ItemMouth", "ItemMouth2"], SetPose: ["GagFlat"], Prerequisite: "GagFlat",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Dildo", AllowColorize: true }
				]
			},
			{ Name: "BoneGag", Value: -1, Difficulty: 6, Time: 10, Random: false, Effect: ["GagLight"], AllowLock: true, ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "BoneGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "HarnessBallGag1", Value: -1, Difficulty: 4, Time: 20, Random: false, Effect: ["GagHeavy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "HarnessBallGag1", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "PumpkinGag", Value: -1, Difficulty: 1, Time: 10, Random: false, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "PumpkinGag", Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "PumpkinGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{
				Name: "LipGag", Value: -1, Time: 5, Random: false, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "LipGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{
				Name: "SpiderGag", Value: -1, Time: 5, Random: false, Effect: ["GagEasy"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "SpiderGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Gag", AllowColorize: true }
				]
			},
			{ Name: "ChloroformCloth", Value: -1, Time: 2, Random: false, Effect: ["GagVeryLight"], Hide: ["Mouth"], Block: ["ItemMouth", "ItemMouth2"], ExpressionTrigger: [{ Name: "High", Group: "Blush", Timer: 20 }, { Name: "Soft", Group: "Eyebrows", Timer: 180 }, { Name: "Wink", Group: "Eyes", Timer: 180 }], BuyGroup: "ChloroformCloth", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "ScarfGag", Value: -1, Time: 10, Random: false, Effect: ["GagLight"], Hide: ["Mouth"], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "ScarfGag" },
			{ Name: "LewdGag", Value: -1, Time: 10, Random: false, Effect: ["GagLight"], AllowLock: true, Hide: ["Mouth"], ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }], Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "LewdGag" },
			{ Name: "LeatherCorsetCollar", Value: -1, Difficulty: 50, Time: 20, Random: false, DefaultColor: "#404040", Hide: ["Mouth"], BuyGroup: ["LeatherCorsetCollar"], Block: ["ItemNeck", "ItemMouth", "ItemMouth2"], RemoveTime: 30, AllowLock: true, BuyGroup: "LeatherCorsetCollar", SetPose: ["GagCorset"], Prerequisite: "GagCorset" },
			{ Name: "LatexPostureCollar", Value: -1, Difficulty: 50, Time: 20, Random: false, Hide: ["Mouth"], BuyGroup: ["LatexPostureCollar"], Block: ["ItemNeck", "ItemMouth", "ItemMouth2"], RemoveTime: 30, AllowLock: true, BuyGroup: "LatexPostureCollar", SetPose: ["GagCorset"], Prerequisite: "GagCorset" },
			{ Name: "BitGag", Value: -1, Difficulty: 4, Time: 20, Random: false, Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "BitGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "XLBoneGag", Value: -1, Difficulty: 6, Time: 10, Random: false, Effect: ["GagNormal"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], AllowLock: true, Block: ["ItemMouth", "ItemMouth2"], BuyGroup: "XLBoneGag", SetPose: ["GagUnique"], Prerequisite: "GagUnique" },
			{ Name: "BallGag", Value: -1, Difficulty: 2, Time: 10, Effect: ["GagMedium"], AllowLock: true, Block: ["ItemMouth", "ItemMouth2"],  Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group:"Fluids", Timer: 30 }], BuyGroup: "BallGag", SetPose:["GagUnique"], Prerequisite: "GagUnique", Layer: [{ Name: "Strap", AllowColorize: false}, { Name: "Ball", AllowColorize: true}] },
			{ Name: "BallGagMask", Value: 90, Difficulty: 6, Time: 30, Effect: ["GagMedium"], AllowLock: true, Block: ["ItemMouth", "ItemMouth2"], Hide: ["Mouth"], ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }], BuyGroup: "BallGagMask", SetPose:["GagUnique"], Prerequisite: "GagUnique",
				Layer: [
					{ Name: "Strap", AllowColorize: false },
					{ Name: "Ball", AllowColorize: true }
				]
			},
			{ Name: "SteelMuzzleGag", Value: 80, Difficulty: 8, Time: 30, AllowLock: true, Block: ["ItemMouth", "ItemMouth2"], Hide: ["Mouth"], BuyGroup: "SteelMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "StitchedMuzzleGag", Value: 60, Difficulty: 5, Time: 15, Effect: ["GagEasy"], AllowLock: true, Block: ["ItemMouth", "ItemMouth2"], Hide: ["Mouth"], BuyGroup: "StitchedMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" },
			{ Name: "LatexBallMuzzleGag", Value: 65, Difficulty: 6, Time: 15, Effect: ["GagMedium"], AllowLock: true, Block: ["ItemMouth", "ItemMouth2"], Hide: ["Mouth"], BuyGroup: "LatexBallMuzzleGag", SetPose: ["GagFlat"], Prerequisite: "GagFlat" }
		]
	},

	{
		Group: "ItemHead",
		Category: "Item",
		Activity: ["Kiss", "Slap", "Caress", "TakeCare", "Pet", "Pull", "Cuddle", "Rub"],
		Priority: 43,
		Default: false,
		IsRestraint: true,
		Color: ["Default"],
		Left: 150,
		Top: 20,
		Zone: [[175, 0, 150, 130]],
		Asset: [
			{ Name: "ClothBlindfold", Value: 15, Time: 5, DefaultColor: "#A0A0A0", Effect: ["BlindLight", "Prone"], Hide: ["Glasses"] },
			{ Name: "LeatherBlindfold", Value: 30, Time: 5, DefaultColor: "#404040", Effect: ["BlindNormal", "Prone"], Hide: ["Glasses"], AllowLock: true },
			{ Name: "LeatherHood", Value: 60, Difficulty: 50, Time: 15, DefaultColor: "#404040", Effect: ["BlindHeavy", "DeafLight", "Prone", "GagNormal"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3",, "Eyes", "HairAccessory1", "HairAccessory2"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"], AllowLock: true },
			{ Name: "LeatherHoodOpenEyes", Value: 40, Difficulty: 50, Time: 15, DefaultColor: "#404040", Effect: ["GagLight"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"], AllowLock: true },
			{ Name: "LeatherSlimMask", Value: 70, Difficulty: 50, Time: 15, DefaultColor: "#555555", Effect: ["BlindHeavy", "Prone", "GagLight"], Hide: ["Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Eyes"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars"], AllowLock: true, Prerequisite: ["NotHogtied"] },
			{ Name: "LeatherSlimMaskOpenMouth", Value: 70, Difficulty: 50, Time: 15, DefaultColor: "#555555", Effect: ["BlindHeavy", "Prone"], Hide: ["Glasses", "Eyes"], Block: ["ItemEars"], AllowLock: true, Prerequisite: ["NotHogtied"] },
			{ Name: "LeatherSlimMaskOpenEyes", Value: 70, Difficulty: 50, Time: 15, DefaultColor: "#555555", Effect: ["GagLight"], Hide: ["ItemMouth", "ItemMouth2", "ItemMouth3"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars"], AllowLock: true, Prerequisite: ["NotHogtied"] },
			{ Name: "StuddedBlindfold", Value: -1, Difficulty: 2, Time: 5, DefaultColor: "#FF4040", Effect: ["BlindNormal", "Prone"], Hide: ["Glasses"], AllowLock: true },
			{ Name: "KittyBlindfold", Value: 25, Time: 5, DefaultColor: "#A0A0A0", Effect: ["BlindLight", "Prone"], Hide: ["Glasses"], AllowLock: true },
			{ Name: "DuctTape", Value: 50, Time: 10, Extended: true, AllowEffect: ["BlindNormal", "Prone", "GagNormal"], AllowBlock: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars"], Hide: ["Glasses"], RemoveTime: 5, BuyGroup: "DuctTape", AllowType: ["Double", "Wrap", "Mummy"] },
			{ Name: "SmallBlindfold", Value: 40, Time: 5, DefaultColor: "#404040", Effect: ["BlindLight", "Prone"], Hide: ["Glasses"], AllowLock: true },
			{ Name: "LeatherHoodOpenMouth", Value: 50, Difficulty: 50, Time: 15, DefaultColor: "#404040", Effect: ["Prone", "BlindHeavy"], Block: ["ItemEars"], Hide: ["HairFront", "HairBack", "Glasses", "HairAccessory1", "HairAccessory2"], AllowLock: true },
			{ Name: "FullBlindfold", Value: 40, Difficulty: 6, Time: 5, Priority: 30, DefaultColor: "#353535", Effect: ["BlindHeavy", "Prone"], Hide: ["Glasses"], AllowLock: true },
			{ Name: "LeatherHoodSensDep", Value: 100, Difficulty: 50, Time: 15, DefaultColor: "#555555", Effect: ["BlindHeavy", "DeafHeavy", "Prone", "GagHeavy"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Eyes", "Hat", "HairAccessory1", "HairAccessory2"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"], AllowLock: true, Alpha: [[150, 50, 200, 50]], Prerequisite: ["NotHogtied"] },
			{ Name: "LatexHoodOpenHair", Value: 45, Difficulty: 50, Time: 15, DefaultColor: "#555555", Block: ["ItemEars"], Hide: ["HairFront", "HairBack", "Hat", "HairAccessory1", "HairAccessory2"], AllowLock: true, Alpha: [[150, 50, 200, 87]], Prerequisite: ["NotHogtied"] },
			{ Name: "LeatherHoodSealed", Value: 70, Difficulty: 50, Time: 15, DefaultColor: "#555555", Effect: ["BlindHeavy", "Prone", "GagLight"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Eyes", "Hat", "HairAccessory1", "HairAccessory2"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"], AllowLock: true, Alpha: [[150, 50, 200, 100]], Prerequisite: ["NotHogtied"] },
			{ Name: "PolishedSteelHood", Value: 85, Difficulty: 50, Time: 15, Effect: ["BlindHeavy", "DeafLight", "Prone", "GagHeavy"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "Eyes", "HairAccessory1", "HairAccessory2"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemNeck"], AllowLock: true },
			{ Name: "SackHood", Value: 20, Difficulty: 3, Time: 5, Effect: ["Prone", "BlindHeavy"], Block: ["ItemEars", "ItemMouth", "ItemMouth2", "ItemMouth3"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "Hat"] },
			{ Name: "LewdBlindfold", Value: 45, Time: 5, Priority: 30, Random: false, Effect: ["BlindLight", "Prone"], Hide: ["Glasses"], AllowLock: true, ExpressionTrigger: [{ Name: "Light", Group: "Blush", Timer: 5 }, { Name: "Closed", Group: "Eyes", Timer: 5 }] },
			{ Name: "LatexBlindfold", Value: 35, Time: 5, Effect: ["BlindNormal", "Prone"], Hide: ["Glasses"], AllowLock: true },
			{ Name: "DogHood", Value: 60, Difficulty: 50, Time: 15, DefaultColor: "#404040", Random: false, Effect: ["GagNormal"], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars"], AllowLock: true },
			{ Name: "FoxyMask", Value: 50, Difficulty: 2, Time: 15, Random: false, Effect: ["GagLight"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3"], AllowLock: true },
			{ Name: "SleepMask", Value: 5, Time: 5, Effect: ["BlindLight", "Prone"], Hide: ["Glasses"] },
			{ Name: "BlackoutLenses", Value: 60, Difficulty: 10, DefaultColor: "#333333", Random: false, Effect: ["BlindHeavy", "Prone"], Hide: ["Glasses", "Eyes"] }
		]
	},

	{
		Group: "ItemEars",
		Category: "Item",
		Activity: ["Kiss", "Lick", "Nibble", "Pinch", "Caress", "Whisper"],
		Priority: 1,
		Default: false,
		IsRestraint: true,
		Color: ["Default"],
		Left: 150,
		Top: 50,
		Zone: [[100, 0, 75, 130], [325, 0, 75, 130]],
		Asset: [
			{ Name: "LightDutyEarPlugs", Value: 15, Difficulty: 50, Time: 5, Visible: false, Effect: ["DeafLight"] },
			{ Name: "HeavyDutyEarPlugs", Value: 30, Difficulty: 50, Time: 5, Visible: false, Effect: ["DeafHeavy"] },
			{ Name: "HeadphoneEarPlugs", Value: 50, Difficulty: 50, Time: 5, Visible: false, Effect: [""], AllowEffect: ["DeafLight", "DeafHeavy"], Extended: true, AllowType: ["Off", "Light", "Heavy"] }
		]
	},

	{
		Group: "ItemMisc",
		Category: "Item",
		Priority: 47,
		Default: false,
		Color: ["Default"],
		Top: -250,
		Zone: [[10, 0, 90, 200]],
		Asset: [
			{ Name: "MetalPadlock", Value: 15, Time: 10, Wear: false, IsLock: true, Effect: [] },
			{ Name: "IntricatePadlock", Value: 50, Time: 30, Wear: false, IsLock: true, Effect: [] },
			{ Name: "TimerPadlock", Value: 80, Wear: false, RemoveTimer: 300, MaxTimer: 300, IsLock: true, Effect: [] },
			{ Name: "CombinationPadlock", Value: 100, Wear: false, IsLock: true, Random: false, Effect: [] },
			{ Name: "OwnerPadlock", Value: 60, Time: 10, Wear: false, IsLock: true, OwnerOnly: true, Effect: [] },
			{ Name: "OwnerTimerPadlock", Value: 100, Wear: false, RemoveTimer: 300, MaxTimer: 604800, IsLock: true, OwnerOnly: true, Effect: [] },
			{ Name: "LoversPadlock", Value: 60, Time: 10, Wear: false, IsLock: true, LoverOnly: true, Effect: [] },
			{ Name: "LoversTimerPadlock", Value: 100, Wear: false, RemoveTimer: 300, MaxTimer: 604800, IsLock: true, LoverOnly: true, Effect: [] },
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
		Category: "Item",
		Priority: 48,
		IsRestraint: true,
		ParentGroup: "BodyUpper",
		Default: false,
		Color: ["Default"],
		Left: 0,
		Top: -250,
		Zone: [[10, 600, 90, 400], [400, 600, 90, 400]],
		Asset: [
			{ Name: "WoodenBox", Value: 60, Difficulty: -2, Time: 15, RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], Effect: ["Prone", "Enclose", "BlindNormal", "GagLight", "Freeze"], RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied"] },
			{ Name: "SmallWoodenBox", Value: 40, Difficulty: -2, Time: 15, RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "BlindNormal", "GagLight", "Freeze"], RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"] },
			{ Name: "MilkCan", Value: -1, Difficulty: 1, Time: 15, RemoveAtLogin: true, Effect: ["BlindHeavy", "Prone", "Enclose", "GagHeavy", "Freeze"], SetPose: ["Kneel"], RemoveTime: 10 },
			{ Name: "WaterCell", Value: -1, Difficulty: 1, Time: 15, RemoveAtLogin: true, Effect: ["Prone", "Enclose", "GagMedium", "Freeze"], SetPose: ["Suspension", "LegsClosed"], Block: ["ItemFeet"], RemoveTime: 15 },
			{ Name: "Cage", Value: 120,  Difficulty: 4, Time: 15, RemoveAtLogin: true, Alpha: [[1, 80, 105, 900], [410, 80, 105, 900]], Effect: ["Prone", "Enclose", "Freeze"], RemoveTime: 10, AllowLock: true, Prerequisite: ["NotKneeling", "NotSuspended"] },
			{ Name: "LowCage", Value: 80, Difficulty: 4, Time: 15, RemoveAtLogin: true, Alpha: [[1, 80, 75, 900], [400, 80, 95, 900]], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "Freeze"], RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"] },
			{ Name: "SaddleStand", Value: 100, Difficulty: -2, Time: 10, RemoveAtLogin: true, Height: 30, AllowLock: true, SetPose: ["LegsOpen"], Prerequisite: ["LegsOpen", "AllFours", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotKneelingSpread", "NotShackled", "StraitDressOpen"], Block: ["ItemPelvis", "ItemLegs", "ItemFeet"], Effect: ["Prone", "Freeze", "Mounted"] },
			{ Name: "BurlapSack", Value: 35, Difficulty: 5, Time: 15, SelfBondage: false, Priority : 29, Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"], SetPose: ["Kneel", "BackElbowTouch"], Effect: ["ForceKneel", "Block", "Prone", "Freeze"], Hide: ["Cloth", "ClothLower", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "ItemArms", "ItemButt", "TailStraps", "Wings", "BodyLower", "Socks", "ItemHidden", "ItemNipplesPiercings"], RemoveTime: 6, Prerequisite: ["NotSuspended", "AllFours", "NotHogtied", "NotYoked", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"] },
			{ Name: "InflatableBodyBag", Value: 225, Difficulty: 1, Time: 30, Priority: 31, Extended: true, SelfBondage: false, SelfUnlock: false, Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"], SetPose: ["LegsClosed", "BackElbowTouch"], AllowPose: ["Kneel"], Effect: ["Block", "Prone", "Freeze"], Hide: ["Cloth", "Suit", "ClothLower", "SuitLower", "Shoes", "ItemBoots", "ItemLegs", "ItemFeet", "ItemArms", "ItemButt", "TailStraps", "Wings", "BodyLower", "Socks", "ItemNipplesPiercings"], AllowType: ["Light", "Inflated", "Bloated", "Max"], HideItem: ["ItemVulvaFullLatexSuitWand"], RemoveTime: 50, AllowLock: true, Prerequisite: ["NotSuspended", "AllFours", "NotHogtied", "NotYoked", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"] },
			{ Name: "BondageBench", Value: 250, Time: 10, RemoveAtLogin: false, Priority: 1, Extended: true, SetPose: ["LegsClosed"], Effect: ["Block", "Prone", "Freeze"], RemoveTime: 10, Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NotMounted", "NoFeetSpreader"] },
			{ Name: "TeddyBear", Value: 50, Difficulty: -10, Time: 5, RemoveAtLogin: true, Priority: 34, IsRestraint: false, Extended: true, Effect: [], AllowPose: ["TapedHands", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Bolero", "Horse", "StraitDressOpen", "Yoked"], AllowType: ["Bear", "Fox", "Kitty", "Pup", "Bunny", "Pony"] },
			{ Name: "OneBarPrison", Value: 75, Difficulty: 8, Time: 20, RemoveAtLogin: true, Priority: 16, AllowLock: true, SetPose: ["LegsOpen"], Prerequisite: ["AccessVulva", "AllFours", "LegsOpen", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling", "NotChaste", "StraitDressOpen"], Block: ["ItemPelvis", "ItemLegs", "ItemVulva", "ItemFeet"], Effect: ["Prone", "Freeze", "Mounted"],
				Layer: [
					{ Name: "Bar", AllowColorize: true },
					{ Name: "Pussy", AllowColorize: false }
				]
			},
			{ Name: "TheDisplayFrame", Value: 100, Difficulty: 50, Time: 10, RemoveAtLogin: true, AllowLock: true, SetPose: ["LegsClosed", "BackElbowTouch"], Prerequisite: ["DisplayFrame", "AllFours", "NotSuspended", "NotHogtied", "NotHorse", "NotKneeling"], Block: ["ItemArms", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNeckAccessories"], Effect: ["Prone", "Freeze", "Block", "Mounted"] },
			{ Name: "Sybian", Value: 80, Difficulty: 1, Time: 10, RemoveAtLogin: true, IsRestraint: false, Priority: 22, SetPose: ["KneelingSpread"], Prerequisite: ["AccessVulva", "NotKneeling", "AllFours", "LegsOpen", "NotSuspended", "NotHogtied", "NotShackled", "NotChaste", "StraitDressOpen", "NotHorse"], Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemPelvis", "ItemButt", "ItemVulva"], Effect: ["Egged", "Freeze"], Hide: ["Shoes", "Socks", "ItemBoots", "ItemFeet", "ItemLegs", "ItemVulva"], HideItem: ["ClothLowerPajama1", "ClothLowerShorts1", "ClothLowerJeans1", "ClothLowerJeans2", "ClothLowerWaspie1", "ClothLowerWaspie2", "ClothLowerWaspie3", "ClothLowerLatexPants1", "ItemDevicesTeddyBear", "SuitLowerReverseBunnySuit"] },
			{ Name: "StrapOnSmooth", Value: 25, Difficulty: 1, Time: 10, IsRestraint: false, Priority: 34 },
			{ Name: "StrapOnStuds", Value: 25, Difficulty: 1, Time: 10, IsRestraint: false, Priority: 34 },
			{ Name: "DisplayCase", Value: 60, Difficulty: -2, Time: 15, RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], Effect: ["Prone", "Enclose", "DeafLight", "GagLight", "Freeze"], RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended"] },
			{ Name: "SmallDisplayCase", Value: 40, Difficulty: -2, Time: 15, RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Enclose", "DeafLight", "GagLight", "Freeze"], RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader"] },
			{ Name: "WoodenBoxOpenHead", Value: 60, Difficulty: -2, Time: 15, AllowBlock: ["ItemHands"], SelfBondage: false, Extended: true, AllowPose: ["Yoked"], RemoveAtLogin: true, Alpha: [[1, 220, 70, 999], [420, 220, 80, 999]], Effect: ["Prone", "Freeze", "Block"], RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied"], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"], Hide: ["Wings"] },
			{ Name: "SmallWoodenBoxOpenHead", Value: 40, Difficulty: -2, Time: 15, AllowBlock: ["ItemHands"] , SelfBondage: false, Extended: true, AllowPose: ["Yoked"],  RemoveAtLogin: true, Alpha: [[1, 220, 70, 999], [420, 220, 80, 999]], SetPose: ["Kneel"], Effect: ["ForceKneel", "Prone", "Freeze", "Block"], RemoveTime: 10, AllowLock: true, Prerequisite: ["NotSuspended", "NotHogtied", "NotMounted", "NotKneelingSpread", "NoFeetSpreader", "NotYoked"], Block: ["ItemArms", "ItemBreast", "ItemButt", "ItemFeet", "ItemLegs", "ItemMisc", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "ItemBoots"], SetPose: ["Kneel"], Hide: ["Wings"]  },
			{ Name: "WoodenStocks", Value: 150, Difficulty: 50, Time: 10, RemoveAtLogin: true, AllowLock: true, SetPose: ["Yoked"], Effect: ["Prone", "Freeze", "Block", "Mounted"], Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NotKneelingSpread", "NoItemArms", "LegsOpen"], Block: ["ItemArms", "ItemFeet", "ItemLegs", "ItemBoots"]},
			{ Name: "Vacbed", Value: 200, Difficulty: 50, Time: 10, RemoveAtLogin: true, Alpha: [[1, 1, 70, 999], [420, 1, 80, 999]], SelfBondage: false, SetPose: ["Yoked"], Effect: ["Prone", "Freeze", "Block", "Mounted"], Prerequisite: ["NotKneeling", "AllFours", "NotSuspended", "NotHogtied", "NotKneelingSpread", "NoItemArms", "LegsOpen", "NoItemHands", "NoItemLegs", "NoHorse", "NoItemFeet"], Block: ["ItemArms", "ItemBoots", "ItemBreasts", "ItemButt", "ItemEars", "ItemFeet", "ItemHands", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNeckAccessories", "ItemNeckRestraints", "ItemNipples", "ItemNipplesPiercings", "ItemPelvis", "ItemTorso", "ItemVulva", "ItemVulvaPiercings", "DogHood", "ItemHead"], Hide: ["HairFront"]}
		]
	},
	
	{
		Group: "ItemAddon",
		Category: "Item",
		Priority: 49,
		IsRestraint: true,
		Default: false,
		Color: ["Default"],
		Left: 0,
		Top: -250,
		Zone: [[400, 0, 90, 200]],
		Asset: [
			{ Name: "BondageBenchStraps", Value: -1, Difficulty: 12, Time: 5, RemoveAtLogin: false, IsRestraint: true, Extended: true, Block: ["ItemDevices"], AllowType: ["Light", "Normal", "Heavy", "Full"], Hide: ["HairBack", "Wings", "TailStraps", "ItemButt"], SelfBondage: false, AllowLock: true, SetPose: ["LegsClosed"], Effect: ["Block", "Prone"] }
		]
	},

	{
		Group: "ItemBoots",
		Category: "Item",
		Activity: ["Kiss", "PoliteKiss", "Lick", "Suck", "Nibble", "Tickle", "Spank", "MassageHands", "MassageFeet", "TakeCare"],
		Priority: 23,
		ParentGroup: "BodyLower",
		Default: false,
		AllowPose: ["LegsClosed", "Kneel", "Hogtied"],
		IsRestraint: true,
		Color: ["Default"],
		Left: 125,
		Top: 500,
		Zone: [[100, 870, 300, 130]],
		Asset: [
			{ Name: "PonyBoots", Value: -1, Difficulty: 6, Time: 10, Height: 35, RemoveTime: 15, AllowLock: true, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]], Hide: ["Shoes"] },
			{ Name: "BalletHeels", Value: 75, Difficulty: 6, Time: 10, Height: 35, RemoveTime: 15, AllowLock: true, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]], Hide: ["Shoes"] },
			{ Name: "BalletWedges", Value: 50, Difficulty: 6, Time: 10, Height: 35, RemoveTime: 15, AllowLock: true, Alpha: [[75, 875, 140, 200],[290, 875, 140, 200]], Hide: ["Shoes"] },
			{ Name: "ToeCuffs", Value: 35, Difficulty: 4, Time: 10, RemoveTime: 5, Effect: ["Freeze", "Prone"], SetPose: ["LegsClosed"], AllowLock: true, Hide: ["Shoes"], Prerequisite: "ToeTied" },
			{ Name: "LeatherToeCuffs", Value: 50, Difficulty: 3, Time: 10, RemoveTime: 5, Effect: ["Freeze", "Prone"], SetPose: ["LegsClosed"], AllowLock: true, Hide: ["Shoes"], Prerequisite: "ToeTied" },
			{ Name: "ToeTie", Value: 15, Difficulty: 2, Time: 10, DefaultColor: "#605020", RemoveTime: 5, Effect: ["Freeze", "Prone"], SetPose: ["LegsClosed"], Hide: ["Shoes"], Prerequisite: "ToeTied" },
			{ Name: "ThighHighLatexHeels", Value: -1, Time: 10, Height: 30, RemoveTime: 15, BuyGroup: "ThighHighLatexHeels", AllowLock: true, Alpha: [[75, 850, 140, 200], [290, 850, 140, 200]], Hide: ["Shoes"] },
			{ Name: "LockingHeels", Value: 40, Difficulty: 6, Time: 10, Height: 15, RemoveTime: 15, AllowLock: true, Hide: ["Shoes"]}
		]
	},
	
	{
		Group: "ItemHidden",
		Category: "Item",
		Default: false,
		IsRestraint: true,
		Color: ["Default"],
		Asset: [
		    { Name: "LeatherArmbinderStrap", Value: -1,  Priority: 31, AllowType: ["Strap", "WrapStrap", "None"] },
			{ Name: "LeatherArmbinderWrapStrap", Value: -1, Priority: 31, AllowType: ["WrapStrap", "None"] },
			{ Name: "SuspensionHempRope", Value: -1, Priority: 31 },
			{ Name: "SuspensionChains", Value: -1, Priority: 31 }
		]
	}
	
];

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
		Name: "Hogtied",
		OverrideHeight: -575,
		Hide: ["BodyLower", "Hands", "ClothLower", "Wings", "TailStraps", "Gloves", "Panties", "Pussy", "ItemHands", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemLegs", "ItemFeet", "SuitLower"],
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
		Hide: ["BodyLower", "Hands", "ClothLower", "Wings", "TailStraps", "Gloves", "Panties", "Pussy", "ItemHands", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemLegs", "ItemFeet", "SuitLower"]
	},
	{
		Name: "AllFours",
		OverrideHeight: -560,
		Hide: ["ItemFeet", "ClothLower", "SuitLower", "Nipples", "Pussy", "BodyLower", "Wings", "ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemLegs", "ItemBoots", "Suit", "Panties", "Bra"],
		MovePosition: [{ Group: "TailStraps", X: 0, Y: -300 }, { Group: "ItemButt", X: 0, Y: -300 } ]
	}

];

// 3D Custom Girl based activities
var ActivityFemale3DCG = [
	{
		Name: "Kiss",
		MaxProgress: 50,
		TargetSelf: ["ItemHands", "ItemArms", "ItemBoots", "ItemBreast", "ItemNipples"],
		Prerequisite: ["UseMouth"]
	},
	{
		Name: "FrenchKiss",
		MaxProgress: 70,
		Prerequisite: ["UseMouth", "ZoneNaked"]
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
		Prerequisite: ["UseMouth", "ZoneNaked"]
	},
	{
		Name: "Suck",
		MaxProgress: 60,
		TargetSelf: ["ItemHands", "ItemArms", "ItemBoots", "ItemNipples"],
		Prerequisite: ["UseMouth", "ZoneNaked"]
	},
	{
		Name: "Nibble",
		MaxProgress: 40,
		TargetSelf: ["ItemMouth", "ItemHands", "ItemArms", "ItemBoots", "ItemNipples"],
		Prerequisite: ["UseMouth", "ZoneNaked"]
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
		Prerequisite: ["UseHands"]
	},
	{
		Name: "Caress",
		MaxProgress: 80,
		TargetSelf: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemNipples", "ItemLegs", "ItemFeet", "ItemBoots", "ItemArms", "ItemHands", "ItemButt", "ItemVulva", "ItemHead", "ItemNeck", "ItemMouth", "ItemEars"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "Pet",
		MaxProgress: 20,
		TargetSelf: ["ItemHead"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "Cuddle",
		MaxProgress: 30,
		Prerequisite: []
	},
	{
		Name: "Rub",
		MaxProgress: 60,
		Prerequisite: []
	},
	{
		Name: "TakeCare",
		MaxProgress: 10,
		TargetSelf: ["ItemBoots", "ItemHands", "ItemHead"],
		Prerequisite: ["UseHands", "ZoneNaked"]
	},
	{
		Name: "MassageHands",
		MaxProgress: 60,
		TargetSelf: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemLegs", "ItemFeet", "ItemBoots", "ItemArms", "ItemHands", "ItemButt", "ItemVulva", "ItemHead", "ItemNeck"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "MassageFeet",
		MaxProgress: 40,
		Prerequisite: ["UseFeet"]
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
		TargetSelf: ["ItemNipples", "ItemEars", "ItemArms", "ItemPelvis"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "Spank",
		MaxProgress: 40,
		TargetSelf: ["ItemButt", "ItemLegs", "ItemFeet", "ItemArms", "ItemHands", "ItemPelvis", "ItemTorso"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "SpankItem",
		MaxProgress: 70,
		Prerequisite: []
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
		TargetSelf: ["ItemHead"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "Choke",
		MaxProgress: 50,
		TargetSelf: ["ItemNeck"],
		Prerequisite: ["UseHands"]
	},
	{
		Name: "MasturbateTongue",
		MaxProgress: 100,
		Prerequisite: ["UseMouth", "ZoneNaked"]
	},
	{
		Name: "MasturbateHand",
		TargetSelf: ["ItemBreast", "ItemVulva", "ItemButt"],
		MaxProgress: 100,
		Prerequisite: ["UseHands", "ZoneNaked"]
	},
	{
		Name: "MasturbateFist",
		MaxProgress: 100,
		Prerequisite: ["UseHands", "ZoneNaked"]
	},
	{
		Name: "MasturbateFoot",
		MaxProgress: 100,
		Prerequisite: ["UseFeet", "ZoneNaked"]
	},
	{
		Name: "MasturbateItem",
		MaxProgress: 100,
		Prerequisite: ["ZoneNaked"]
	}
	
]
