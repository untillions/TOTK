// Auto-generated armor data for TOTK Companion Armory view.
// Each entry in ARMOR_SETS is an array of 1-3 pieces (helm, chest, leg order)
// belonging to the same armor set.
//
// Each piece's "materials" field is an array of 4 upgrade steps (Base->1 star,
// 1->2 star, 2->3 star, 3->4 star/max). Each step is either null (no further
// upgrade / not upgradable) or an array of { "qty": <number>, "name": <string> }
// objects, so material quantities can be summed programmatically (e.g. by the
// Material Calculator) as well as formatted back into display text.
const ARMOR_SETS = [
	[
		{
			"id": "ancienthero1",
			"name": "Ancient Hero's Aspect",
			"img": "ancienthero1.png",
			"ability": "No Ability",
			"baseDef": 12,
			"starDef": [
				21,
				36,
				54,
				84
			],
			"materials": [
				[{ "qty": 9, "name": "Silver Bokoblin Horn" }, { "qty": 9, "name": "Hinox Guts" }, { "qty": 15, "name": "Zonaite" }],
				[{ "qty": 9, "name": "Silver Moblin Horn" }, { "qty": 9, "name": "Frox Guts" }, { "qty": 10, "name": "Large Zonaite" }],
				[{ "qty": 9, "name": "Silver Lizalfos Horn" }, { "qty": 9, "name": "Molduga Guts" }, { "qty": 15, "name": "Large Zonaite" }],
				[{ "qty": 9, "name": "Silver Lynel Saber Horn" }, { "qty": 9, "name": "Silver Lynel Mace Horn" }, { "qty": 9, "name": "Gleeok Guts" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "archaic2",
			"name": "Archaic Tunic",
			"img": "archaic2.png",
			"ability": "No Ability",
			"baseDef": 1,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "archaic3",
			"name": "Archaic Legwear",
			"img": "archaic3.png",
			"ability": "No Ability",
			"baseDef": 1,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "awakening1",
			"name": "Mask of Awakening",
			"img": "awakening1.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 15, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 20, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 30, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "awakening2",
			"name": "Tunic of Awakening",
			"img": "awakening2.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 15, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 20, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 30, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "awakening3",
			"name": "Trousers of Awakening",
			"img": "awakening3.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 15, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 20, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 30, "name": "Luminous Stone" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "barbarian1",
			"name": "Barbarian Helm",
			"img": "barbarian1.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Mighty Thistle" }],
				[{ "qty": 2, "name": "Lynel Saber Horn" }, { "qty": 2, "name": "Lynel Mace Horn" }, { "qty": 5, "name": "Razorshroom" }],
				[{ "qty": 3, "name": "Blue-Maned Lynel Saber Horn" }, { "qty": 3, "name": "Blue-Maned Lynel Mace Horn" }, { "qty": 3, "name": "Razorclaw Crab" }],
				[{ "qty": 3, "name": "White-Maned Lynel Saber Horn" }, { "qty": 3, "name": "White-Maned Lynel Mace Horn" }, { "qty": 3, "name": "Bladed Rhino Beetle" }]
			],
			"upgradable": true
		},
		{
			"id": "barbarian2",
			"name": "Barbarian Armor",
			"img": "barbarian2.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Mighty Thistle" }],
				[{ "qty": 2, "name": "Lynel Saber Horn" }, { "qty": 2, "name": "Lynel Mace Horn" }, { "qty": 5, "name": "Razorshroom" }],
				[{ "qty": 3, "name": "Blue-Maned Lynel Saber Horn" }, { "qty": 3, "name": "Blue-Maned Lynel Mace Horn" }, { "qty": 3, "name": "Razorclaw Crab" }],
				[{ "qty": 3, "name": "White-Maned Lynel Saber Horn" }, { "qty": 3, "name": "White-Maned Lynel Mace Horn" }, { "qty": 3, "name": "Bladed Rhino Beetle" }]
			],
			"upgradable": true
		},
		{
			"id": "barbarian3",
			"name": "Barbarian Leg Wraps",
			"img": "barbarian3.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Mighty Thistle" }],
				[{ "qty": 2, "name": "Lynel Saber Horn" }, { "qty": 2, "name": "Lynel Mace Horn" }, { "qty": 5, "name": "Razorshroom" }],
				[{ "qty": 3, "name": "Blue-Maned Lynel Saber Horn" }, { "qty": 3, "name": "Blue-Maned Lynel Mace Horn" }, { "qty": 3, "name": "Razorclaw Crab" }],
				[{ "qty": 3, "name": "White-Maned Lynel Saber Horn" }, { "qty": 3, "name": "White-Maned Lynel Mace Horn" }, { "qty": 3, "name": "Bladed Rhino Beetle" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "bokoblin",
			"name": "Bokoblin Mask",
			"img": "bokoblin.png",
			"ability": "Bokoblin Camouflage",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "boots1",
			"name": "Sand Boots",
			"img": "boots1.png",
			"ability": "Sand Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Hightail Lizard" }],
				[{ "qty": 20, "name": "Gibdo Bone" }, { "qty": 5, "name": "Swift Carrot" }],
				[{ "qty": 5, "name": "Gibdo Guts" }, { "qty": 10, "name": "Rushroom" }, { "qty": 5, "name": "Molduga Fin" }],
				[{ "qty": 5, "name": "Hearty Lizard" }, { "qty": 10, "name": "Swift Violet" }, { "qty": 5, "name": "Molduga Guts" }]
			],
			"upgradable": true
		},
		{
			"id": "boots2",
			"name": "Snow Boots",
			"img": "boots2.png",
			"ability": "Snow Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Hightail Lizard" }],
				[{ "qty": 5, "name": "Octorok Tentacle" }, { "qty": 5, "name": "Swift Carrot" }],
				[{ "qty": 5, "name": "Octo Balloon" }, { "qty": 20, "name": "Rushroom" }],
				[{ "qty": 2, "name": "Naydra's Sacle" }, { "qty": 20, "name": "Swift Violet" }]
			],
			"upgradable": true
		},
		{
			"id": "boots3",
			"name": "Archaic Warm Greaves",
			"img": "boots3.png",
			"ability": "Cold Resistance",
			"baseDef": 2,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "cecehat",
			"name": "Cece Hat",
			"img": "cecehat.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "champion",
			"name": "Champion's Leathers",
			"img": "champion.png",
			"ability": "No Ability",
			"baseDef": 5,
			"starDef": [
				8,
				14,
				22,
				32
			],
			"materials": [
				[{ "qty": 3, "name": "Silent Princess" }, { "qty": 2, "name": "Light Dragon's Scale" }],
				[{ "qty": 3, "name": "Silent Princess" }, { "qty": 2, "name": "Light Dragon Claw" }, { "qty": 10, "name": "Sundelions" }],
				[{ "qty": 5, "name": "Silent Princess" }, { "qty": 2, "name": "Light Dragon Fang" }, { "qty": 15, "name": "Sundelions" }],
				[{ "qty": 10, "name": "Silent Princess" }, { "qty": 2, "name": "Light Dragon Horn" }, { "qty": 20, "name": "Sundelions" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "charged1",
			"name": "Charged Headdress",
			"img": "charged1.png",
			"ability": "Stormy Weather Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Shock Fruit" }],
				[{ "qty": 5, "name": "Electric Lizal Horn" }, { "qty": 3, "name": "Thunderwing Butterfly" }],
				[{ "qty": 5, "name": "Shock Like Stone" }, { "qty": 5, "name": "Electric Darner" }, { "qty": 3, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Thunder Horn" }, { "qty": 10, "name": "Voltfin Trout" }, { "qty": 5, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		},
		{
			"id": "charged2",
			"name": "Charged Shirt",
			"img": "charged2.png",
			"ability": "Stormy Weather Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Shock Fruit" }],
				[{ "qty": 5, "name": "Electric Lizal Horn" }, { "qty": 3, "name": "Thunderwing Butterfly" }],
				[{ "qty": 5, "name": "Shock Like Stone" }, { "qty": 5, "name": "Electric Darner" }, { "qty": 3, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Thunder Horn" }, { "qty": 10, "name": "Voltfin Trout" }, { "qty": 5, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		},
		{
			"id": "charged3",
			"name": "Charged Trousers",
			"img": "charged3.png",
			"ability": "Stormy Weather Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Shock Fruit" }],
				[{ "qty": 5, "name": "Electric Lizal Horn" }, { "qty": 3, "name": "Thunderwing Butterfly" }],
				[{ "qty": 5, "name": "Shock Like Stone" }, { "qty": 5, "name": "Electric Darner" }, { "qty": 3, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Thunder Horn" }, { "qty": 10, "name": "Voltfin Trout" }, { "qty": 5, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "circlet1",
			"name": "Diamond Circlet",
			"img": "circlet1.png",
			"ability": "Attack Up",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 2, "name": "Diamond" }, { "qty": 3, "name": "Flint" }],
				[{ "qty": 3, "name": "Diamond" }, { "qty": 5, "name": "Flint" }],
				[{ "qty": 5, "name": "Diamond" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 8, "name": "Diamond" }, { "qty": 2, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "circlet2",
			"name": "Ruby Circlet",
			"img": "circlet2.png",
			"ability": "Cold Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 2, "name": "Ruby" }, { "qty": 3, "name": "Flint" }],
				[{ "qty": 4, "name": "Ruby" }, { "qty": 5, "name": "Flint" }],
				[{ "qty": 6, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Ruby" }, { "qty": 2, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "circlet3",
			"name": "Sapphire Circlet",
			"img": "circlet3.png",
			"ability": "Heat Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 2, "name": "Sapphire" }, { "qty": 3, "name": "Flint" }],
				[{ "qty": 4, "name": "Sapphire" }, { "qty": 5, "name": "Flint" }],
				[{ "qty": 6, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Sapphire" }, { "qty": 2, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "climbing1",
			"name": "Climber's Bandana",
			"img": "climbing1.png",
			"ability": "Climb Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Keese Wing" }, { "qty": 3, "name": "Rushroom" }],
				[{ "qty": 5, "name": "Electric Keese Wing" }, { "qty": 5, "name": "Hightail Lizard" }],
				[{ "qty": 8, "name": "Ice Keese Wing" }, { "qty": 10, "name": "Hot-Footed Frog" }],
				[{ "qty": 10, "name": "Fire Keese Wing" }, { "qty": 20, "name": "Swift Violet" }]
			],
			"upgradable": true
		},
		{
			"id": "climbing2",
			"name": "Climbing Gear",
			"img": "climbing2.png",
			"ability": "Climb Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Keese Wing" }, { "qty": 3, "name": "Rushroom" }],
				[{ "qty": 5, "name": "Electric Keese Wing" }, { "qty": 5, "name": "Hightail Lizard" }],
				[{ "qty": 8, "name": "Ice Keese Wing" }, { "qty": 10, "name": "Hot-Footed Frog" }],
				[{ "qty": 10, "name": "Fire Keese Wing" }, { "qty": 20, "name": "Swift Violet" }]
			],
			"upgradable": true
		},
		{
			"id": "climbing3",
			"name": "Climbing Boots",
			"img": "climbing3.png",
			"ability": "Climb Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Keese Wing" }, { "qty": 3, "name": "Rushroom" }],
				[{ "qty": 5, "name": "Electric Keese Wing" }, { "qty": 5, "name": "Hightail Lizard" }],
				[{ "qty": 8, "name": "Ice Keese Wing" }, { "qty": 10, "name": "Hot-Footed Frog" }],
				[{ "qty": 10, "name": "Fire Keese Wing" }, { "qty": 20, "name": "Swift Violet" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "dark1",
			"name": "Dark Hood",
			"img": "dark1.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "dark2",
			"name": "Dark Tunic",
			"img": "dark2.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "dark3",
			"name": "Dark Trousers",
			"img": "dark3.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "depths1",
			"name": "Hood of the Depths",
			"img": "depths1.png",
			"ability": "Gloom Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Deep Firefly" }],
				[{ "qty": 5, "name": "Dark Clump" }, { "qty": 3, "name": "Frox Fang" }],
				[{ "qty": 3, "name": "Frox Fingernail" }, { "qty": 3, "name": "Obsidian Frox Fang" }, { "qty": 20, "name": "Zonaite" }],
				[{ "qty": 5, "name": "Blue-White Frox Fang" }, { "qty": 10, "name": "Large Zonaite" }, { "qty": 3, "name": "Frox Guts" }]
			],
			"upgradable": true
		},
		{
			"id": "depths2",
			"name": "Tunic of the Depths",
			"img": "depths2.png",
			"ability": "Gloom Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Deep Firefly" }],
				[{ "qty": 5, "name": "Dark Clump" }, { "qty": 3, "name": "Frox Fang" }],
				[{ "qty": 3, "name": "Frox Fingernail" }, { "qty": 3, "name": "Obsidian Frox Fang" }, { "qty": 20, "name": "Zonaite" }],
				[{ "qty": 5, "name": "Blue-White Frox Fang" }, { "qty": 10, "name": "Large Zonaite" }, { "qty": 3, "name": "Frox Guts" }]
			],
			"upgradable": true
		},
		{
			"id": "depths3",
			"name": "Gaiters of the Depths",
			"img": "depths3.png",
			"ability": "Gloom Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Deep Firefly" }],
				[{ "qty": 5, "name": "Dark Clump" }, { "qty": 3, "name": "Frox Fang" }],
				[{ "qty": 3, "name": "Frox Fingernail" }, { "qty": 3, "name": "Obsidian Frox Fang" }, { "qty": 20, "name": "Zonaite" }],
				[{ "qty": 5, "name": "Blue-White Frox Fang" }, { "qty": 10, "name": "Large Zonaite" }, { "qty": 3, "name": "Frox Guts" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "desertvoe1",
			"name": "Desert Voe Headband",
			"img": "desertvoe1.png",
			"ability": "Heat Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "White Chuchu Jelly" }],
				[{ "qty": 5, "name": "White Chuchu Jelly" }, { "qty": 3, "name": "Cool Safflina" }],
				[{ "qty": 5, "name": "Ice Keese Wing" }, { "qty": 3, "name": "Ice-Breath Lizal Tail" }, { "qty": 5, "name": "Chillshroom" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Horn" }, { "qty": 10, "name": "Ice-Breath Lizalfos Tail" }, { "qty": 5, "name": "Sapphire" }]
			],
			"upgradable": true
		},
		{
			"id": "desertvoe2",
			"name": "Desert Voe Spaulder",
			"img": "desertvoe2.png",
			"ability": "Heat Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "White Chuchu Jelly" }],
				[{ "qty": 5, "name": "White Chuchu Jelly" }, { "qty": 3, "name": "Cool Safflina" }],
				[{ "qty": 5, "name": "Ice Keese Wing" }, { "qty": 3, "name": "Ice-Breath Lizal Tail" }, { "qty": 5, "name": "Chillshroom" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Horn" }, { "qty": 10, "name": "Ice-Breath Lizalfos Tail" }, { "qty": 5, "name": "Sapphire" }]
			],
			"upgradable": true
		},
		{
			"id": "desertvoe3",
			"name": "Desert Voe Trousers",
			"img": "desertvoe3.png",
			"ability": "Heat Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "White Chuchu Jelly" }],
				[{ "qty": 5, "name": "White Chuchu Jelly" }, { "qty": 3, "name": "Cool Safflina" }],
				[{ "qty": 5, "name": "Ice Keese Wing" }, { "qty": 3, "name": "Ice-Breath Lizal Tail" }, { "qty": 5, "name": "Chillshroom" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Horn" }, { "qty": 10, "name": "Ice-Breath Lizalfos Tail" }, { "qty": 5, "name": "Sapphire" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "earrings1",
			"name": "Amber Earrings",
			"img": "earrings1.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 10, "name": "Amber" }, { "qty": 5, "name": "Flint" }],
				[{ "qty": 20, "name": "Amber" }, { "qty": 10, "name": "Flint" }],
				[{ "qty": 35, "name": "Amber" }, { "qty": 15, "name": "Flint" }],
				[{ "qty": 60, "name": "Amber" }, { "qty": 25, "name": "Flint" }]
			],
			"upgradable": true
		},
		{
			"id": "earrings2",
			"name": "Opal Earrings",
			"img": "earrings2.png",
			"ability": "Swim Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 6, "name": "Opal" }, { "qty": 5, "name": "Flint" }],
				[{ "qty": 12, "name": "Opal" }, { "qty": 10, "name": "Flint" }],
				[{ "qty": 18, "name": "Opal" }, { "qty": 15, "name": "Flint" }],
				[{ "qty": 30, "name": "Opal" }, { "qty": 25, "name": "Flint" }]
			],
			"upgradable": true
		},
		{
			"id": "earrings3",
			"name": "Topaz Earrings",
			"img": "earrings3.png",
			"ability": "Shock Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				18
			],
			"materials": [
				[{ "qty": 2, "name": "Topaz" }, { "qty": 3, "name": "Flint" }],
				[{ "qty": 4, "name": "Topaz" }, { "qty": 5, "name": "Flint" }],
				[{ "qty": 6, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Topaz" }, { "qty": 2, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "ember1",
			"name": "Ember Headdress",
			"img": "ember1.png",
			"ability": "Hot Weather Attack Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Fire Fruit" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 5, "name": "Summerwing Butterfly" }],
				[{ "qty": 5, "name": "Fire Like Stone" }, { "qty": 7, "name": "Warm Darner" }, { "qty": 5, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Flame Horn" }, { "qty": 10, "name": "Sizzlefin Trout" }, { "qty": 10, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		},
		{
			"id": "ember2",
			"name": "Ember Shirt",
			"img": "ember2.png",
			"ability": "Hot Weather Attack Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Fire Fruit" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 5, "name": "Summerwing Butterfly" }],
				[{ "qty": 5, "name": "Fire Like Stone" }, { "qty": 7, "name": "Warm Darner" }, { "qty": 5, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Flame Horn" }, { "qty": 10, "name": "Sizzlefin Trout" }, { "qty": 10, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		},
		{
			"id": "ember3",
			"name": "Ember Trousers",
			"img": "ember3.png",
			"ability": "Hot Weather Attack Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Fire Fruit" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 5, "name": "Summerwing Butterfly" }],
				[{ "qty": 5, "name": "Fire Like Stone" }, { "qty": 7, "name": "Warm Darner" }, { "qty": 5, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Flame Horn" }, { "qty": 10, "name": "Sizzlefin Trout" }, { "qty": 10, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "evilspirit1",
			"name": "Evil Spirit Mask",
			"img": "evilspirit1.png",
			"ability": "Stealth Up",
			"baseDef": 4,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "evilspirit2",
			"name": "Evil Spirit Armor",
			"img": "evilspirit2.png",
			"ability": "Stealth Up",
			"baseDef": 4,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "evilspirit3",
			"name": "Evil Spirit Greaves",
			"img": "evilspirit3.png",
			"ability": "Stealth Up",
			"baseDef": 4,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "fiercedeity1",
			"name": "Fierce Deity Mask",
			"img": "fiercedeity1.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Hinox Toenail" }, { "qty": 1, "name": "Dinraal's Scale" }],
				[{ "qty": 5, "name": "Hinox Tooth" }, { "qty": 1, "name": "Dinraal's Claw" }],
				[{ "qty": 2, "name": "Hinox Guts" }, { "qty": 1, "name": "Shard of Dinraal's Fang" }],
				[{ "qty": 2, "name": "Lynel Guts" }, { "qty": 1, "name": "Dinraal's Horn" }]
			],
			"upgradable": true
		},
		{
			"id": "fiercedeity2",
			"name": "Fierce Deity Armor",
			"img": "fiercedeity2.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Hinox Toenail" }, { "qty": 1, "name": "Naydra's Scale" }],
				[{ "qty": 5, "name": "Hinox Tooth" }, { "qty": 1, "name": "Naydra's Claw" }],
				[{ "qty": 2, "name": "Hinox Guts" }, { "qty": 1, "name": "Shard of Naydra's Fang" }],
				[{ "qty": 2, "name": "Lynel Guts" }, { "qty": 1, "name": "Naydra's Horn" }]
			],
			"upgradable": true
		},
		{
			"id": "fiercedeity3",
			"name": "Fierce Deity Boots",
			"img": "fiercedeity3.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Hinox Toenail" }, { "qty": 1, "name": "Farosh's Scale" }],
				[{ "qty": 5, "name": "Hinox Tooth" }, { "qty": 1, "name": "Farosh's Claw" }],
				[{ "qty": 2, "name": "Hinox Guts" }, { "qty": 1, "name": "Shard of Farosh's Fang" }],
				[{ "qty": 2, "name": "Lynel Guts" }, { "qty": 1, "name": "Farosh's Horn" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "flamebreaker1",
			"name": "Flamebreaker Helm",
			"img": "flamebreaker1.png",
			"ability": "Flame Guard",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Moblin Horn" }],
				[{ "qty": 5, "name": "Moblin Fang" }, { "qty": 5, "name": "Fireproof Lizard" }],
				[{ "qty": 5, "name": "Blue Moblin Horn" }, { "qty": 3, "name": "Smotherwing Butterfly" }, { "qty": 15, "name": "Flint" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 10, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Ruby" }]
			],
			"upgradable": true
		},
		{
			"id": "flamebreaker2",
			"name": "Flamebreaker Armor",
			"img": "flamebreaker2.png",
			"ability": "Flame Guard",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Moblin Horn" }],
				[{ "qty": 5, "name": "Moblin Fang" }, { "qty": 5, "name": "Fireproof Lizard" }],
				[{ "qty": 5, "name": "Blue Moblin Horn" }, { "qty": 3, "name": "Smotherwing Butterfly" }, { "qty": 15, "name": "Flint" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 10, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Ruby" }]
			],
			"upgradable": true
		},
		{
			"id": "flamebreaker3",
			"name": "Flamebreaker Boots",
			"img": "flamebreaker3.png",
			"ability": "Flame Guard",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Moblin Horn" }],
				[{ "qty": 5, "name": "Moblin Fang" }, { "qty": 5, "name": "Fireproof Lizard" }],
				[{ "qty": 5, "name": "Blue Moblin Horn" }, { "qty": 3, "name": "Smotherwing Butterfly" }, { "qty": 15, "name": "Flint" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 10, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Ruby" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "froggy1",
			"name": "Froggy Hood",
			"img": "froggy1.png",
			"ability": "Slip Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Sticky Lizard" }],
				[{ "qty": 5, "name": "Sticky Lizard" }, { "qty": 5, "name": "Horriblin Horn" }],
				[{ "qty": 5, "name": "Blue Horriblin Horn" }, { "qty": 5, "name": "Sticky Frog" }],
				[{ "qty": 5, "name": "Black Horriblin Horn" }, { "qty": 10, "name": "Horriblin Guts" }, { "qty": 10, "name": "Opal" }]
			],
			"upgradable": true
		},
		{
			"id": "froggy2",
			"name": "Froggy Sleeve",
			"img": "froggy2.png",
			"ability": "Slip Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Sticky Lizard" }],
				[{ "qty": 5, "name": "Sticky Lizard" }, { "qty": 5, "name": "Horriblin Horn" }],
				[{ "qty": 5, "name": "Blue Horriblin Horn" }, { "qty": 5, "name": "Sticky Frog" }],
				[{ "qty": 5, "name": "Black Horriblin Horn" }, { "qty": 10, "name": "Horriblin Guts" }, { "qty": 10, "name": "Opal" }]
			],
			"upgradable": true
		},
		{
			"id": "froggy3",
			"name": "Froggy Leggings",
			"img": "froggy3.png",
			"ability": "Slip Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Sticky Lizard" }],
				[{ "qty": 5, "name": "Sticky Lizard" }, { "qty": 5, "name": "Horriblin Horn" }],
				[{ "qty": 5, "name": "Blue Horriblin Horn" }, { "qty": 5, "name": "Sticky Frog" }],
				[{ "qty": 5, "name": "Black Horriblin Horn" }, { "qty": 10, "name": "Horriblin Guts" }, { "qty": 10, "name": "Opal" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "frostbite1",
			"name": "Frostbite Headdress",
			"img": "frostbite1.png",
			"ability": "Cold Weather Attack Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Ice Fruit" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Horn" }, { "qty": 5, "name": "Winterwing Butterfly" }],
				[{ "qty": 5, "name": "Ice Like Stone" }, { "qty": 5, "name": "Cold Darner" }, { "qty": 5, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Frost Horn" }, { "qty": 10, "name": "Chillfin Trout" }, { "qty": 10, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		},
		{
			"id": "frostbite2",
			"name": "Frostbite Shirt",
			"img": "frostbite2.png",
			"ability": "Cold Weather Attack Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Ice Fruit" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Horn" }, { "qty": 5, "name": "Winterwing Butterfly" }],
				[{ "qty": 5, "name": "Ice Like Stone" }, { "qty": 5, "name": "Cold Darner" }, { "qty": 5, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Frost Horn" }, { "qty": 10, "name": "Chillfin Trout" }, { "qty": 10, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		},
		{
			"id": "frostbite3",
			"name": "Frostbite Trousers",
			"img": "frostbite3.png",
			"ability": "Cold Weather Attack Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Ice Fruit" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Horn" }, { "qty": 5, "name": "Winterwing Butterfly" }],
				[{ "qty": 5, "name": "Ice Like Stone" }, { "qty": 5, "name": "Cold Darner" }, { "qty": 5, "name": "Large Zonai Charge" }],
				[{ "qty": 5, "name": "Gleeok Frost Horn" }, { "qty": 10, "name": "Chillfin Trout" }, { "qty": 10, "name": "Large Zonai Charge" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "glide1",
			"name": "Glide Mask",
			"img": "glide1.png",
			"ability": "Skydive Mobility Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Keese Wing" }],
				[{ "qty": 6, "name": "Aerocuda Eyeball" }, { "qty": 5, "name": "Keese Wing" }],
				[{ "qty": 8, "name": "Aerocuda Eyeball" }, { "qty": 6, "name": "Aerocuda Wing" }],
				[{ "qty": 12, "name": "Gleeok Wing" }, { "qty": 10, "name": "Aerocuda Wing" }, { "qty": 8, "name": "Gibdo Wing" }]
			],
			"upgradable": true
		},
		{
			"id": "glide2",
			"name": "Glide Shirt",
			"img": "glide2.png",
			"ability": "Skydive Mobility Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Keese Wing" }],
				[{ "qty": 6, "name": "Aerocuda Eyeball" }, { "qty": 5, "name": "Keese Wing" }],
				[{ "qty": 8, "name": "Aerocuda Eyeball" }, { "qty": 6, "name": "Aerocuda Wing" }],
				[{ "qty": 12, "name": "Gleeok Wing" }, { "qty": 10, "name": "Aerocuda Wing" }, { "qty": 8, "name": "Gibdo Wing" }]
			],
			"upgradable": true
		},
		{
			"id": "glide3",
			"name": "Glide Tights",
			"img": "glide3.png",
			"ability": "Skydive Mobility Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Keese Wing" }],
				[{ "qty": 6, "name": "Aerocuda Eyeball" }, { "qty": 5, "name": "Keese Wing" }],
				[{ "qty": 8, "name": "Aerocuda Eyeball" }, { "qty": 6, "name": "Aerocuda Wing" }],
				[{ "qty": 12, "name": "Gleeok Wing" }, { "qty": 10, "name": "Aerocuda Wing" }, { "qty": 8, "name": "Gibdo Wing" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "hairband",
			"name": "Well-Worn Hair Band",
			"img": "hairband.png",
			"ability": "No Ability",
			"baseDef": 0,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "hero1",
			"name": "Cap of the Hero",
			"img": "hero1.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "hero2",
			"name": "Tunic of the Hero",
			"img": "hero2.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "hero3",
			"name": "Trousers of the Hero",
			"img": "hero3.png",
			"ability": "Attack Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Ruby" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "horriblin",
			"name": "Horriblin Mask",
			"img": "horriblin.png",
			"ability": "Horriblin Camouflage",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "hylian1",
			"name": "Hylian Hood",
			"img": "hylian1.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Bokoblin Horn" }],
				[{ "qty": 5, "name": "Blue Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Fang" }],
				[{ "qty": 5, "name": "Black Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Guts" }, { "qty": 20, "name": "Amber" }],
				[{ "qty": 5, "name": "Silver Bokoblin Horn" }, { "qty": 5, "name": "Bokoblin Guts" }, { "qty": 30, "name": "Amber" }]
			],
			"upgradable": true
		},
		{
			"id": "hylian2",
			"name": "Hylian Trousers",
			"img": "hylian2.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Bokoblin Horn" }],
				[{ "qty": 5, "name": "Blue Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Fang" }],
				[{ "qty": 5, "name": "Black Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Guts" }, { "qty": 20, "name": "Amber" }],
				[{ "qty": 5, "name": "Silver Bokoblin Horn" }, { "qty": 5, "name": "Bokoblin Guts" }, { "qty": 30, "name": "Amber" }]
			],
			"upgradable": true
		},
		{
			"id": "hylian3",
			"name": "Hylian Tunic",
			"img": "hylian3.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Bokoblin Horn" }],
				[{ "qty": 5, "name": "Blue Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Fang" }],
				[{ "qty": 5, "name": "Black Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Guts" }, { "qty": 20, "name": "Amber" }],
				[{ "qty": 5, "name": "Silver Bokoblin Horn" }, { "qty": 5, "name": "Bokoblin Guts" }, { "qty": 30, "name": "Amber" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "korok",
			"name": "Korok Mask",
			"img": "korok.png",
			"ability": "Korok Sensor",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "lightning",
			"name": "Lighning Helm",
			"img": "lightning.png",
			"ability": "Lightning Proof",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "lizalfos",
			"name": "Lizalfos Mask",
			"img": "lizalfos.png",
			"ability": "Lizalfos Camouflage",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "lobster",
			"name": "Lobster Shirt",
			"img": "lobster.png",
			"ability": "Heat Resistance",
			"baseDef": 1,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "lynel",
			"name": "Lynel Mask",
			"img": "lynel.png",
			"ability": "Lynel Camouflage",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "majoras",
			"name": "Majora's Mask",
			"img": "majoras.png",
			"ability": "No Ability",
			"baseDef": 1,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "memories",
			"name": "Tunic of Memories",
			"img": "memories.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 3, "name": "Silent Princess" }, { "qty": 1, "name": "Light Dragon's Scale" }],
				[{ "qty": 3, "name": "Silent Princess" }, { "qty": 1, "name": "Light Dragon's Talon" }, { "qty": 2, "name": "Farosh's Horn" }],
				[{ "qty": 5, "name": "Silent Princess" }, { "qty": 1, "name": "Shard of Light Dragon's Fang" }, { "qty": 2, "name": "Naydra's Horn" }],
				[{ "qty": 10, "name": "Silent Princess" }, { "qty": 1, "name": "Light Dragon's Horn" }, { "qty": 2, "name": "Dinraal's Horn" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "midnas",
			"name": "Midna's Helmet",
			"img": "midnas.png",
			"ability": "No Ability",
			"baseDef": 7,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "miners1",
			"name": "Miner's Mask",
			"img": "miners1.png",
			"ability": "Glow",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Brightbloom Seed" }],
				[{ "qty": 20, "name": "Brightbloom Seed" }, { "qty": 5, "name": "Bright Caps" }],
				[{ "qty": 15, "name": "Giant Brightbloom Seed" }, { "qty": 5, "name": "Glowing Cave Fish" }, { "qty": 10, "name": "Deep Firefly" }],
				[{ "qty": 20, "name": "Giant Brightbloom Seed" }, { "qty": 3, "name": "Diamond" }, { "qty": 10, "name": "Large Zonaite" }]
			],
			"upgradable": true
		},
		{
			"id": "miners2",
			"name": "Miner's Top",
			"img": "miners2.png",
			"ability": "Glow",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Brightbloom Seed" }],
				[{ "qty": 20, "name": "Brightbloom Seed" }, { "qty": 5, "name": "Bright Caps" }],
				[{ "qty": 15, "name": "Giant Brightbloom Seed" }, { "qty": 5, "name": "Glowing Cave Fish" }, { "qty": 10, "name": "Deep Firefly" }],
				[{ "qty": 20, "name": "Giant Brightbloom Seed" }, { "qty": 3, "name": "Diamond" }, { "qty": 10, "name": "Large Zonaite" }]
			],
			"upgradable": true
		},
		{
			"id": "miners3",
			"name": "Miner's Trousers",
			"img": "miners3.png",
			"ability": "Glow",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Brightbloom Seed" }],
				[{ "qty": 20, "name": "Brightbloom Seed" }, { "qty": 5, "name": "Bright Caps" }],
				[{ "qty": 15, "name": "Giant Brightbloom Seed" }, { "qty": 5, "name": "Glowing Cave Fish" }, { "qty": 10, "name": "Deep Firefly" }],
				[{ "qty": 20, "name": "Giant Brightbloom Seed" }, { "qty": 3, "name": "Diamond" }, { "qty": 10, "name": "Large Zonaite" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "moblin",
			"name": "Moblin Mask",
			"img": "moblin.png",
			"ability": "Moblin Camouflage",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "mystic1",
			"name": "Mystic Headpiece",
			"img": "mystic1.png",
			"ability": "Rupee Padding",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "mystic2",
			"name": "Mystic Robe",
			"img": "mystic2.png",
			"ability": "Rupee Padding",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "mystic3",
			"name": "Mystic Trousers",
			"img": "mystic3.png",
			"ability": "Rupee Padding",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "phantom1",
			"name": "Phantom Helm",
			"img": "phantom1.png",
			"ability": "Attack Up",
			"baseDef": 8,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "phantom2",
			"name": "Phantom Armor",
			"img": "phantom2.png",
			"ability": "Attack Up",
			"baseDef": 8,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "phantom3",
			"name": "Phantom Greaves",
			"img": "phantom3.png",
			"ability": "Attack Up",
			"baseDef": 8,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "radiant1",
			"name": "Radiant Mask",
			"img": "radiant1.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Luminous Stone" }, { "qty": 1, "name": "Bokoblin Guts" }],
				[{ "qty": 15, "name": "Luminous Stone" }, { "qty": 2, "name": "Moblin Guts" }],
				[{ "qty": 20, "name": "Luminous Stone" }, { "qty": 3, "name": "Horriblin Guts" }, { "qty": 10, "name": "Gibdo Bone" }],
				[{ "qty": 30, "name": "Luminous Stone" }, { "qty": 3, "name": "Lynel Guts" }, { "qty": 3, "name": "Molduga Jaw" }]
			],
			"upgradable": true
		},
		{
			"id": "radiant2",
			"name": "Radiant Shirt",
			"img": "radiant2.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Luminous Stone" }, { "qty": 1, "name": "Moblin Guts" }],
				[{ "qty": 15, "name": "Luminous Stone" }, { "qty": 2, "name": "Moblin Guts" }],
				[{ "qty": 20, "name": "Luminous Stone" }, { "qty": 3, "name": "Horriblin Guts" }, { "qty": 10, "name": "Gibdo Bone" }],
				[{ "qty": 30, "name": "Luminous Stone" }, { "qty": 3, "name": "Lynel Guts" }, { "qty": 3, "name": "Molduga Jaw" }]
			],
			"upgradable": true
		},
		{
			"id": "radiant3",
			"name": "Radiant Tights",
			"img": "radiant3.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Luminous Stone" }, { "qty": 1, "name": "Moblin Guts" }],
				[{ "qty": 15, "name": "Luminous Stone" }, { "qty": 2, "name": "Moblin Guts" }],
				[{ "qty": 20, "name": "Luminous Stone" }, { "qty": 3, "name": "Horriblin Guts" }, { "qty": 10, "name": "Gibdo Bone" }],
				[{ "qty": 30, "name": "Luminous Stone" }, { "qty": 3, "name": "Lynel Guts" }, { "qty": 3, "name": "Molduga Jaw" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "ravios",
			"name": "Ravio's Hood",
			"img": "ravios.png",
			"ability": "Sideways Climbing Speed Up",
			"baseDef": 2,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "royalguard1",
			"name": "Royal Guard Cap",
			"img": "royalguard1.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				6,
				10,
				15,
				24
			],
			"materials": [
				[{ "qty": 3, "name": "Boss Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Guts" }],
				[{ "qty": 3, "name": "Blue Boss Bokoblin Horn" }, { "qty": 3, "name": "Boss Bokoblin Fang" }],
				[{ "qty": 3, "name": "Black Boss Bokoblin Horn" }, { "qty": 3, "name": "Hinox Guts" }],
				[{ "qty": 3, "name": "Silver Boss Bokoblin Horn" }, { "qty": 3, "name": "Molduga Guts" }, { "qty": 3, "name": "Gleeok Guts" }]
			],
			"upgradable": true
		},
		{
			"id": "royalguard2",
			"name": "Royal Guard Uniform",
			"img": "royalguard2.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				6,
				10,
				15,
				24
			],
			"materials": [
				[{ "qty": 3, "name": "Boss Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Guts" }],
				[{ "qty": 3, "name": "Blue Boss Bokoblin Horn" }, { "qty": 3, "name": "Boss Bokoblin Fang" }],
				[{ "qty": 3, "name": "Black Boss Bokoblin Horn" }, { "qty": 3, "name": "Hinox Guts" }],
				[{ "qty": 3, "name": "Silver Boss Bokoblin Horn" }, { "qty": 3, "name": "Molduga Guts" }, { "qty": 3, "name": "Gleeok Guts" }]
			],
			"upgradable": true
		},
		{
			"id": "royalguard3",
			"name": "Royal Guard Boots",
			"img": "royalguard3.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				6,
				10,
				15,
				24
			],
			"materials": [
				[{ "qty": 3, "name": "Boss Bokoblin Horn" }, { "qty": 3, "name": "Bokoblin Guts" }],
				[{ "qty": 3, "name": "Blue Boss Bokoblin Horn" }, { "qty": 3, "name": "Boss Bokoblin Fang" }],
				[{ "qty": 3, "name": "Black Boss Bokoblin Horn" }, { "qty": 3, "name": "Hinox Guts" }],
				[{ "qty": 3, "name": "Silver Boss Bokoblin Horn" }, { "qty": 3, "name": "Molduga Guts" }, { "qty": 3, "name": "Gleeok Guts" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "rubber1",
			"name": "Rubber Helm",
			"img": "rubber1.png",
			"ability": "Shock Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Electric Lizalfos Horn" }, { "qty": 3, "name": "Yellow Chuchu Jelly" }],
				[{ "qty": 8, "name": "Yellow Chuchu Jelly" }, { "qty": 5, "name": "Voltfruit" }],
				[{ "qty": 5, "name": "Zapshroom" }, { "qty": 5, "name": "Electric Lizalfos Tail" }, { "qty": 8, "name": "Electric Safflina" }],
				[{ "qty": 5, "name": "Electric Lizalfos Horn" }, { "qty": 5, "name": "Topaz" }, { "qty": 8, "name": "Electric Lizalfos Tail" }]
			],
			"upgradable": true
		},
		{
			"id": "rubber2",
			"name": "Rubber Armor",
			"img": "rubber2.png",
			"ability": "Shock Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Electric Lizalfos Horn" }, { "qty": 3, "name": "Yellow Chuchu Jelly" }],
				[{ "qty": 8, "name": "Yellow Chuchu Jelly" }, { "qty": 5, "name": "Voltfruit" }],
				[{ "qty": 5, "name": "Zapshroom" }, { "qty": 5, "name": "Electric Lizalfos Tail" }, { "qty": 8, "name": "Electric Safflina" }],
				[{ "qty": 5, "name": "Electric Lizalfos Horn" }, { "qty": 5, "name": "Topaz" }, { "qty": 8, "name": "Electric Lizalfos Tail" }]
			],
			"upgradable": true
		},
		{
			"id": "rubber3",
			"name": "Rubber Tights",
			"img": "rubber3.png",
			"ability": "Shock Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Electric Lizalfos Horn" }, { "qty": 3, "name": "Yellow Chuchu Jelly" }],
				[{ "qty": 8, "name": "Yellow Chuchu Jelly" }, { "qty": 5, "name": "Voltfruit" }],
				[{ "qty": 5, "name": "Zapshroom" }, { "qty": 5, "name": "Electric Lizalfos Tail" }, { "qty": 8, "name": "Electric Safflina" }],
				[{ "qty": 5, "name": "Electric Lizalfos Horn" }, { "qty": 5, "name": "Topaz" }, { "qty": 8, "name": "Electric Lizalfos Tail" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "sheiks",
			"name": "Sheik's Mask",
			"img": "sheiks.png",
			"ability": "Stealth Up",
			"baseDef": 2,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Silent Princess" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 2, "name": "Silent Princess" }, { "qty": 2, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Silent Princess" }, { "qty": 3, "name": "Star Fragment" }],
				[{ "qty": 8, "name": "Silent Princess" }, { "qty": 4, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "sky1",
			"name": "Cap of the Sky",
			"img": "sky1.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "sky2",
			"name": "Tunic of the Sky",
			"img": "sky2.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "sky3",
			"name": "Trousers of the Sky",
			"img": "sky3.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Sapphire" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "snowquill1",
			"name": "Snowquill Headdress",
			"img": "snowquill1.png",
			"ability": "Cold Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Red Chuchu Jelly" }],
				[{ "qty": 5, "name": "Red Chuchu Jelly" }, { "qty": 3, "name": "Warm Safflina" }],
				[{ "qty": 5, "name": "Fire Keese Wing" }, { "qty": 3, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Sunshroom" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 10, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Ruby" }]
			],
			"upgradable": true
		},
		{
			"id": "snowquill2",
			"name": "Snowquill Tunic",
			"img": "snowquill2.png",
			"ability": "Cold Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Red Chuchu Jelly" }],
				[{ "qty": 5, "name": "Red Chuchu Jelly" }, { "qty": 3, "name": "Warm Safflina" }],
				[{ "qty": 5, "name": "Fire Keese Wing" }, { "qty": 3, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Sunshroom" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 10, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Ruby" }]
			],
			"upgradable": true
		},
		{
			"id": "snowquill3",
			"name": "Snowquill Trousers",
			"img": "snowquill3.png",
			"ability": "Cold Resistance",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Red Chuchu Jelly" }],
				[{ "qty": 5, "name": "Red Chuchu Jelly" }, { "qty": 3, "name": "Warm Safflina" }],
				[{ "qty": 5, "name": "Fire Keese Wing" }, { "qty": 3, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Sunshroom" }],
				[{ "qty": 5, "name": "Fire-Breath Lizalfos Horn" }, { "qty": 10, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 5, "name": "Ruby" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "soldiers1",
			"name": "Soldier's Helm",
			"img": "soldiers1.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 5, "name": "Chuchu Jelly" }, { "qty": 3, "name": "Bokoblin Guts" }],
				[{ "qty": 5, "name": "Keese Eyeball" }, { "qty": 3, "name": "Moblin Guts" }],
				[{ "qty": 3, "name": "Lizalfos Tail" }, { "qty": 3, "name": "Hinox Guts" }, { "qty": 30, "name": "Flint" }],
				[{ "qty": 5, "name": "Lynel Hoof" }, { "qty": 5, "name": "Lynel Guts" }, { "qty": 30, "name": "Amber" }]
			],
			"upgradable": true
		},
		{
			"id": "soldiers2",
			"name": "Soldier's Armor",
			"img": "soldiers2.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 5, "name": "Chuchu Jelly" }, { "qty": 3, "name": "Bokoblin Guts" }],
				[{ "qty": 5, "name": "Keese Eyeball" }, { "qty": 3, "name": "Moblin Guts" }],
				[{ "qty": 3, "name": "Lizalfos Tail" }, { "qty": 3, "name": "Hinox Guts" }, { "qty": 30, "name": "Flint" }],
				[{ "qty": 5, "name": "Lynel Hoof" }, { "qty": 5, "name": "Lynel Guts" }, { "qty": 30, "name": "Amber" }]
			],
			"upgradable": true
		},
		{
			"id": "soldiers3",
			"name": "Soldier's Greaves",
			"img": "soldiers3.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 5, "name": "Chuchu Jelly" }, { "qty": 3, "name": "Bokoblin Guts" }],
				[{ "qty": 5, "name": "Keese Eyeball" }, { "qty": 3, "name": "Moblin Guts" }],
				[{ "qty": 3, "name": "Lizalfos Tail" }, { "qty": 3, "name": "Hinox Guts" }, { "qty": 30, "name": "Flint" }],
				[{ "qty": 5, "name": "Lynel Hoof" }, { "qty": 5, "name": "Lynel Guts" }, { "qty": 30, "name": "Amber" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "stealth1",
			"name": "Stealth Mask",
			"img": "stealth1.png",
			"ability": "Stealth Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Blue Nightshade" }],
				[{ "qty": 5, "name": "Blue Nightshade" }, { "qty": 5, "name": "Sunset Firefly" }],
				[{ "qty": 8, "name": "Silent Shroom" }, { "qty": 5, "name": "Sneaky River Snail" }],
				[{ "qty": 10, "name": "Stealthfin Trout" }, { "qty": 5, "name": "Silent Princess" }, { "qty": 10, "name": "Sundelion" }]
			],
			"upgradable": true
		},
		{
			"id": "stealth2",
			"name": "Stealth Chest Guard",
			"img": "stealth2.png",
			"ability": "Stealth Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Blue Nightshade" }],
				[{ "qty": 5, "name": "Blue Nightshade" }, { "qty": 5, "name": "Sunset Firefly" }],
				[{ "qty": 8, "name": "Silent Shroom" }, { "qty": 5, "name": "Sneaky River Snail" }],
				[{ "qty": 10, "name": "Stealthfin Trout" }, { "qty": 5, "name": "Silent Princess" }, { "qty": 10, "name": "Sundelion" }]
			],
			"upgradable": true
		},
		{
			"id": "stealth3",
			"name": "Stealth Tights",
			"img": "stealth3.png",
			"ability": "Stealth Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 3, "name": "Blue Nightshade" }],
				[{ "qty": 5, "name": "Blue Nightshade" }, { "qty": 5, "name": "Sunset Firefly" }],
				[{ "qty": 8, "name": "Silent Shroom" }, { "qty": 5, "name": "Sneaky River Snail" }],
				[{ "qty": 10, "name": "Stealthfin Trout" }, { "qty": 5, "name": "Silent Princess" }, { "qty": 10, "name": "Sundelion" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "time1",
			"name": "Cap of Time",
			"img": "time1.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 20, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 30, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 40, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "time2",
			"name": "Tunic of Time",
			"img": "time2.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 20, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 30, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 40, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "time3",
			"name": "Trousers of Time",
			"img": "time3.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 10, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 20, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 30, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 40, "name": "Amber" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "tingles1",
			"name": "Tingle's Hood",
			"img": "tingles1.png",
			"ability": "No Ability",
			"baseDef": 2,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "tingles2",
			"name": "Tingle's Shirt",
			"img": "tingles2.png",
			"ability": "No Ability",
			"baseDef": 2,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		},
		{
			"id": "tingles3",
			"name": "Tingle's Tights",
			"img": "tingles3.png",
			"ability": "No Ability",
			"baseDef": 2,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "twilight1",
			"name": "Cap of Twilight",
			"img": "twilight1.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "twilight2",
			"name": "Tunic of Twilight",
			"img": "twilight2.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "twilight3",
			"name": "Trousers of Twilight",
			"img": "twilight3.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 1, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 4, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 6, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Topaz" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "vahmedoh",
			"name": "Vah Medoh Divine Helm",
			"img": "vahmedoh.png",
			"ability": "Cold Resistance",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 1, "name": "Sapphire" }, { "qty": 5, "name": "Zonaite" }],
				[{ "qty": 4, "name": "Sapphire" }, { "qty": 10, "name": "Zonaite" }],
				[{ "qty": 6, "name": "Sapphire" }, { "qty": 5, "name": "Large Zonaite" }, { "qty": 5, "name": "Dazzlefruit" }],
				[{ "qty": 10, "name": "Sapphire" }, { "qty": 10, "name": "Large Zonaite" }, { "qty": 10, "name": "Dazzlefruit" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "vahnaboris",
			"name": "Vah Naboris Divine Helm",
			"img": "vahnaboris.png",
			"ability": "Shock Resistance",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 1, "name": "Topaz" }, { "qty": 5, "name": "Zonaite" }],
				[{ "qty": 4, "name": "Topaz" }, { "qty": 10, "name": "Zonaite" }],
				[{ "qty": 6, "name": "Topaz" }, { "qty": 5, "name": "Large Zonaite" }, { "qty": 5, "name": "Dazzlefruit" }],
				[{ "qty": 10, "name": "Topaz" }, { "qty": 10, "name": "Large Zonaite" }, { "qty": 10, "name": "Dazzlefruit" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "vahrudania",
			"name": "Vah Rudania Divine Helm",
			"img": "vahrudania.png",
			"ability": "Flame Guard",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 1, "name": "Ruby" }, { "qty": 5, "name": "Zonaite" }],
				[{ "qty": 4, "name": "Ruby" }, { "qty": 10, "name": "Zonaite" }],
				[{ "qty": 6, "name": "Ruby" }, { "qty": 5, "name": "Large Zonaite" }, { "qty": 5, "name": "Dazzlefruit" }],
				[{ "qty": 10, "name": "Ruby" }, { "qty": 10, "name": "Large Zonaite" }, { "qty": 10, "name": "Dazzlefruit" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "vahruta",
			"name": "Vah Ruta Divine Helm",
			"img": "vahruta.png",
			"ability": "Swim Speed Up",
			"baseDef": 2,
			"starDef": [
				4,
				6,
				9,
				16
			],
			"materials": [
				[{ "qty": 5, "name": "Opal" }, { "qty": 5, "name": "Zonaite" }],
				[{ "qty": 10, "name": "Opal" }, { "qty": 10, "name": "Zonaite" }],
				[{ "qty": 15, "name": "Opal" }, { "qty": 5, "name": "Large Zonaite" }, { "qty": 5, "name": "Dazzlefruit" }],
				[{ "qty": 25, "name": "Opal" }, { "qty": 10, "name": "Large Zonaite" }, { "qty": 10, "name": "Dazzlefruit" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "wild1",
			"name": "Cap of the Wild",
			"img": "wild1.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 10, "name": "Acorn" }, { "qty": 2, "name": "Farosh's Scale" }],
				[{ "qty": 5, "name": "Courser Bee Honey" }, { "qty": 2, "name": "Farosh's Claw" }],
				[{ "qty": 3, "name": "Energetic Rhino Beetle" }, { "qty": 2, "name": "Farosh's Fang" }, { "qty": 5, "name": "Shard of Farosh's Spike" }],
				[{ "qty": 3, "name": "Star Fragment" }, { "qty": 2, "name": "Farosh's Horn" }, { "qty": 10, "name": "Shard of Farosh's Spike" }]
			],
			"upgradable": true
		},
		{
			"id": "wild2",
			"name": "Tunic of the Wild",
			"img": "wild2.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 10, "name": "Acorn" }, { "qty": 2, "name": "Naydra's Scale" }],
				[{ "qty": 5, "name": "Courser Bee Honey" }, { "qty": 2, "name": "Naydra's Claw" }],
				[{ "qty": 3, "name": "Energetic Rhino Beetle" }, { "qty": 2, "name": "Naydra's Fang" }, { "qty": 5, "name": "Shard of Naydra's Spike" }],
				[{ "qty": 3, "name": "Star Fragment" }, { "qty": 2, "name": "Farosh's Horn" }, { "qty": 10, "name": "Shard of Farosh's Spike" }]
			],
			"upgradable": true
		},
		{
			"id": "wild3",
			"name": "Trousers of the Wild",
			"img": "wild3.png",
			"ability": "No Ability",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 10, "name": "Acorn" }, { "qty": 2, "name": "Dinraal's Scale" }],
				[{ "qty": 5, "name": "Courser Bee Honey" }, { "qty": 2, "name": "Dinraal's Claw" }],
				[{ "qty": 3, "name": "Energetic Rhino Beetle" }, { "qty": 2, "name": "Dinraal's Fang" }, { "qty": 5, "name": "Shard of Dinraal's Spike" }],
				[{ "qty": 3, "name": "Star Fragment" }, { "qty": 2, "name": "Farosh's Horn" }, { "qty": 10, "name": "Shard of Farosh's Spike" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "wind1",
			"name": "Cap of the Wind",
			"img": "wind1.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 15, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 25, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "wind2",
			"name": "Tunic of the Wind",
			"img": "wind2.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 15, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 25, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		},
		{
			"id": "wind3",
			"name": "Trousers of the Wind",
			"img": "wind3.png",
			"ability": "No Ability",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 5, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 10, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 15, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }],
				[{ "qty": 25, "name": "Opal" }, { "qty": 1, "name": "Star Fragment" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "yiga1",
			"name": "Yiga Mask",
			"img": "yiga1.png",
			"ability": "Stealth Up",
			"baseDef": 1,
			"starDef": [
				3,
				5,
				7,
				12
			],
			"materials": [
				[{ "qty": 2, "name": "Octorok Eyeball" }],
				[{ "qty": 3, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 3, "name": "Puffshroom" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Tail" }, { "qty": 5, "name": "Keese Eyeball" }],
				[{ "qty": 5, "name": "Electric Lizalfos Tail" }, { "qty": 3, "name": "Black Hinox Horn" }, { "qty": 10, "name": "Mighty Bananas" }]
			],
			"upgradable": true
		},
		{
			"id": "yiga2",
			"name": "Yiga Armor",
			"img": "yiga2.png",
			"ability": "Stealth Up",
			"baseDef": 1,
			"starDef": [
				3,
				5,
				7,
				12
			],
			"materials": [
				[{ "qty": 2, "name": "Octorok Eyeball" }],
				[{ "qty": 3, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 3, "name": "Puffshroom" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Tail" }, { "qty": 5, "name": "Keese Eyeball" }],
				[{ "qty": 5, "name": "Electric Lizalfos Tail" }, { "qty": 3, "name": "Black Hinox Horn" }, { "qty": 10, "name": "Mighty Bananas" }]
			],
			"upgradable": true
		},
		{
			"id": "yiga3",
			"name": "Yiga Tights",
			"img": "yiga3.png",
			"ability": "Stealth Up",
			"baseDef": 1,
			"starDef": [
				3,
				5,
				7,
				12
			],
			"materials": [
				[{ "qty": 2, "name": "Octorok Eyeball" }],
				[{ "qty": 3, "name": "Fire-Breath Lizalfos Tail" }, { "qty": 3, "name": "Puffshroom" }],
				[{ "qty": 5, "name": "Ice-Breath Lizalfos Tail" }, { "qty": 5, "name": "Keese Eyeball" }],
				[{ "qty": 5, "name": "Electric Lizalfos Tail" }, { "qty": 3, "name": "Black Hinox Horn" }, { "qty": 10, "name": "Mighty Bananas" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "zants",
			"name": "Zant's Helmet",
			"img": "zants.png",
			"ability": "Unfreezable",
			"baseDef": 3,
			"starDef": [
				null,
				null,
				null,
				null
			],
			"materials": [
				null,
				null,
				null,
				null
			],
			"upgradable": false
		}
	],
	[
		{
			"id": "zonaite1",
			"name": "Zonaite Helm",
			"img": "zonaite1.png",
			"ability": "Energy Up",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 5, "name": "Soldier Construct Horn" }],
				[{ "qty": 5, "name": "Soldier Construct II Horn" }, { "qty": 5, "name": "Captain Construct I Horn" }, { "qty": 5, "name": "Zonaite" }],
				[{ "qty": 5, "name": "Soldier Construct III Horn" }, { "qty": 5, "name": "Captain Construct II Horn" }, { "qty": 5, "name": "Large Zonaite" }],
				[{ "qty": 5, "name": "Soldier Construct IV Horn" }, { "qty": 5, "name": "Captain Construct III Horn" }, { "qty": 10, "name": "Large Zonaite" }]
			],
			"upgradable": true
		},
		{
			"id": "zonaite2",
			"name": "Zonaite Waistguard",
			"img": "zonaite2.png",
			"ability": "Energy Up",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 5, "name": "Soldier Construct Horn" }],
				[{ "qty": 5, "name": "Soldier Construct II Horn" }, { "qty": 5, "name": "Captain Construct I Horn" }, { "qty": 5, "name": "Zonaite" }],
				[{ "qty": 5, "name": "Soldier Construct III Horn" }, { "qty": 5, "name": "Captain Construct II Horn" }, { "qty": 5, "name": "Large Zonaite" }],
				[{ "qty": 5, "name": "Soldier Construct IV Horn" }, { "qty": 5, "name": "Captain Construct III Horn" }, { "qty": 10, "name": "Large Zonaite" }]
			],
			"upgradable": true
		},
		{
			"id": "zonaite3",
			"name": "Zonaite Shin Guards",
			"img": "zonaite3.png",
			"ability": "Energy Up",
			"baseDef": 4,
			"starDef": [
				7,
				12,
				18,
				28
			],
			"materials": [
				[{ "qty": 5, "name": "Soldier Construct Horn" }],
				[{ "qty": 5, "name": "Soldier Construct II Horn" }, { "qty": 5, "name": "Captain Construct I Horn" }, { "qty": 5, "name": "Zonaite" }],
				[{ "qty": 5, "name": "Soldier Construct III Horn" }, { "qty": 5, "name": "Captain Construct II Horn" }, { "qty": 5, "name": "Large Zonaite" }],
				[{ "qty": 5, "name": "Soldier Construct IV Horn" }, { "qty": 5, "name": "Captain Construct III Horn" }, { "qty": 10, "name": "Large Zonaite" }]
			],
			"upgradable": true
		}
	],
	[
		{
			"id": "zora1",
			"name": "Zora Helm",
			"img": "zora1.png",
			"ability": "Swim Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Lizalfos Horn" }],
				[{ "qty": 5, "name": "Lizalfos Talon" }, { "qty": 5, "name": "Hyrule Bass" }],
				[{ "qty": 5, "name": "Blue Lizalfos Horn" }, { "qty": 3, "name": "Lizalfos Tail" }, { "qty": 3, "name": "Hearty Bass" }],
				[{ "qty": 5, "name": "Black Lizalfos Horn" }, { "qty": 5, "name": "Blue Lizalfos Tail" }, { "qty": 20, "name": "Opal" }]
			],
			"upgradable": true
		},
		{
			"id": "zora2",
			"name": "Zora Armor",
			"img": "zora2.png",
			"ability": "Swim Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Lizalfos Horn" }],
				[{ "qty": 5, "name": "Lizalfos Talon" }, { "qty": 5, "name": "Hyrule Bass" }],
				[{ "qty": 5, "name": "Blue Lizalfos Horn" }, { "qty": 3, "name": "Lizalfos Tail" }, { "qty": 3, "name": "Hearty Bass" }],
				[{ "qty": 5, "name": "Black Lizalfos Horn" }, { "qty": 5, "name": "Blue Lizalfos Tail" }, { "qty": 20, "name": "Opal" }]
			],
			"upgradable": true
		},
		{
			"id": "zora3",
			"name": "Zora Greaves",
			"img": "zora3.png",
			"ability": "Swim Speed Up",
			"baseDef": 3,
			"starDef": [
				5,
				8,
				12,
				20
			],
			"materials": [
				[{ "qty": 3, "name": "Lizalfos Horn" }],
				[{ "qty": 5, "name": "Lizalfos Talon" }, { "qty": 5, "name": "Hyrule Bass" }],
				[{ "qty": 5, "name": "Blue Lizalfos Horn" }, { "qty": 3, "name": "Lizalfos Tail" }, { "qty": 3, "name": "Hearty Bass" }],
				[{ "qty": 5, "name": "Black Lizalfos Horn" }, { "qty": 5, "name": "Blue Lizalfos Tail" }, { "qty": 20, "name": "Opal" }]
			],
			"upgradable": true
		}
	]
];

// ----------------------------------------------------------------------
// Helpers for working with the structured "materials" format above.
// ----------------------------------------------------------------------

// Turns a single upgrade step's material array (or null) into the
// "9x Silver Bokoblin Horn\n9x Hinox Guts" style text used on armor cards.
function formatMaterialsText(materialsStep) {
	if (!materialsStep) return '';
	return materialsStep.map(m => `${m.qty}x ${m.name}`).join('\n');
}

// Adds every material in a single upgrade step into a running totals map
// of { "Material Name": quantity }. Used by the Material Calculator to
// collate materials across many pieces/steps.
function addMaterialsToTotals(materialsStep, totals) {
	if (!materialsStep) return totals;
	materialsStep.forEach(m => {
		totals[m.name] = (totals[m.name] || 0) + m.qty;
	});
	return totals;
}
