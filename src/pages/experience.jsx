import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";

import "./styles/experience.css";

const Experience = () => {

    const codedDescription = (
        <span>
            I finished my education in 2021 as a graduate of UIUC and UCSD, where I got my M.S. and B.S. respectively. Since graduating (and while studying),
			I've worked as a software engineer at a number of companies both big and small. I'm quite proud of my work,
			so please feel free to ask me about the things that I've done!
        </span>
    )

    const codedTitle = (
        <span>
            Work Experience
        </span>
    )
    useEffect(() => {
		document.title = `Experience | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-container">
						<div className="title experience-title">
                            {INFO.project.title !== "" ? INFO.project.title : codedTitle}
						</div>

						<div className="subtitle experience-subtitle">
                            {INFO.project.description !== "" ? INFO.project.description : codedDescription}
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

export default Experience;
