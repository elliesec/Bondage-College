const ExtendedArchetype = {
	MODULAR: "modular",
};

const AssetFemale3DCGExtended = {
	ItemArms: {
		HighSecurityStraitJacket: {
			Archetype: ExtendedArchetype.MODULAR,
			Config: {
				Modules: [
					{
						Name: "Crotch", Key: "c",
						Options: [
							{}, // c0 - No crotch panel
							{ // c1 - Crotch panel
								Difficulty: 1,
								Block: ["ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt"],
								Hide: ["ItemVulva", "ItemVulvaPiercings"],
								HideItem: ["ItemButtAnalBeads2"],
							},
						],
					},
					{
						Name: "Arms", Key: "a",
						Options: [
							{}, // a0 - Arms loose
							{ Difficulty: 2, SelfBondage: 8 }, // a1 - Arms in front
							{ Difficulty: 3, SelfBondage: 8 }, // a2 - Arms behind
						],
					},
					{
						Name: "Straps", Key: "s",
						Options: [
							{}, // s0 - No crotch straps
							{ // s1 - One crotch strap
								Difficulty: 1,
								Block: ["ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt"],
								Hide: ["ItemVulvaPiercings"],
								HideItem: ["ItemButtAnalBeads2"],
							},
							{ Difficulty: 2, Block: ["ItemPelvis"] }, // s2 - Two crotch straps
							{ // s3 - Three crotch straps
								Difficulty: 2,
								Block: ["ItemPelvis", "ItemVulva", "ItemVulvaPiercings", "ItemButt"],
								Hide: ["ItemVulvaPiercings"],
								HideItem: ["ItemButtAnalBeads2"],
							},
						],
					},
				],
			},
		}, // HighSecurityStraitJacket
	}, // ItemArms
};
