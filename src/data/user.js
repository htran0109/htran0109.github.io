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
			title: "Personal Site",
			description:
				`A simple and responsive web app to showcase projects, display contact information, and tell your story. Open 
                source for experienced developers to clone/fork and accessible for no-code users to update and host on their own`,
            
            // I recommend not exceeding four logos here, leads to a poor mobile UX
			logos: [
                "../react-icon.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/Eddie-OConnor/personal-site",
            linkText2: "Live",
			link2: "https://eddie-oconnor.com/"
		},

		{
			title: "PollyGlot",
			description:
				`PollyGlot translates any language into one of the top 12 most commonly spoken global languages. 
                It solves the language barrier problem when traveling or anytime you encounter an individual 
                who does not speak the same language(s) as you.`,
            logos: [
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png",
                "../openai-icon.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/Eddie-OConnor/PollyGlot",
            linkText2: "Live",
			link2: "https://polly-glot.netlify.app/"
		},
	],
};

export default INFO;
