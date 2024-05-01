import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {

    const codedDescription = (
        <span>
            The projects below are a sample of the work that I've done outside of work for the past several years. This represents
			the work that I'd like to release and share in the future. (I've hidden the ones that are on the backburner for now).
        </span>
    )

    const codedTitle = (
        <span>
            Projects & Research
        </span>
    )
    useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
                            {INFO.project.title !== "" ? INFO.project.title : codedTitle}
						</div>

						<div className="subtitle projects-subtitle">
                            {INFO.project.description !== "" ? INFO.project.description : codedDescription}
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
