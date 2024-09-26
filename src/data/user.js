const INFO = {
	main: {
		title: "Hung Tran's Website",
		name: "Hung Tran",
		email: "htran0109@gmail.com",
		logo: "../tabIcon.png",
	},

	socials: {
		github: "https://github.com/htran0109",
		linkedin: "https://www.linkedin.com/in/hung-tran6/",
	},

	homepage: {
		title: "",
		description: "",
	},

	about: {
		title: "",
		description: "",
	},

    contact: {
		title: "",
		description: "",
	},

    project: {
		title: "",
		description: "",
	},

	projects: [
		{
			title: "Kitty Maker",
			description:
				`A game that implements the sandbox-style of raising something like in games such as Princess Maker or Tamagotchis, but applied to the task of raising a (somewhat magical) cat. 
				Allows the player to build relationships with other cats, and plans to allow cat to embark on a simplistic RPG adventure minigame to uncover more about her past.`,
            
			logos: ["../godot-icon.png"
            ],
			linkText1: "Itch.io Link",
			link1: "https://htran0109.itch.io/kitty-maker"
		},
		{
			title: "Card Game Project",
			description:
				`A game inspired by old gambling films that centers around cheating (using magic) in a casino-style card game. 
				Originally written in C# using the Unity engine, but working on porting it to Godot in the GDScript language.`,
            
			logos: [
                "../unity-icon.png"
            ],
			linkText1: "Itch.io Link",
			link1: "https://htran0109.itch.io/card-game-testing"
		},

		{
			title: "An alternative paradigm to analyze proof-of-stake protocols",
			description:
				`Research done in collaboration with Professor Ling Ren at UIUC. An attempt to create better metrics
				with which to describe the security of Proof-of-Stake blockchain protocols.`,
            logos: [
				"../Illinois-icon.png"
            ],
			linkText1: "UIUC Library Link",
			link1: "https://www.ideals.illinois.edu/items/118425",
		},
	],

	experience: [
		{
			title: "Pocket Gems",
			logos: [
				"./pocket-gems-icon.png",
			]
		},
		{
			title: "American Express",
			logos: [
				"./amex-icon.png",
			]
		},
		{
			title: "Amazon",
			logos: [
				"./amazon-icon.png",
			]
		},
		{
			title: "MITRE",
			logos: [
				"./mitre-icon.png",
			]
		},
		{
			title: "University of Illinois",
			logos: [
				"./Illinois-icon.png",
			]
		},
		{
			title: "UC San Diego",
			logos: [
				"./san-diego-icon.png",
			]
		},

	],
};

export default INFO;
