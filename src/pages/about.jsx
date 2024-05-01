import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {

    const codedDescription = (
        <span>
            <p>
                I'm a software engineer with a few years of experience under my belt. While I really enjoy coding and the pursuit of
				solving big problems through simple solutions, I pride myself more on the ability to navigate the human side of the world.
				Creating projects that people are happy to interact and play with is a passion of mine, as is making software feel 
				natural to use and explore.
            </p>
            <p>
                Professionally, I've worn quite a few different hats. I have a fair amount of experience in both back-end and front-end,
				and a fair amount more in working to put it all together. My most recent work was with Pocket Gems, creating features
				for War Dragons, an epic PvP game developed for iOS and Android. Outside of professional work, I'm a gamer and game dev at 
				heart, and have been working on independent projects for the past decade, starting with my involvement with the Video
				Game Development Club at UC San Diego.
            </p>
        </span>
    )

    const codedTitle = (
        <span>
            About me
        </span>
    )

    useEffect(() => {
		document.title = `About | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title !== "" ? INFO.about.title : codedTitle}
                                </div>

								<div className="subtitle about-subtitle">
									{INFO.about.description !== "" ? INFO.about.description : codedDescription}
                                </div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="../about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
