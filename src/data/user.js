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
			title: "Game Projects",
			description:
				`A game inspired by old gambling films that centers around cheating (using magic) in a casino-style card game. 
				Originally written in C# using the Unity engine, but working on porting it to Godot in the GDScript language.`,
            
            // I recommend not exceeding four logos here, leads to a poor mobile UX
			logos: [
                "../unity-icon.png",
				"../godot-icon.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
            ],
			linkText1: "Itch.io Link",
			link2: "https://htran0109.itch.io/card-game-testing"
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
};

export default INFO;
