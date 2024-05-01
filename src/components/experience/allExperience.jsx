import React from "react";
import Experience from "./experience";
import INFO from "../../data/user";

import "./styles/allExperience.css";

const AllExperiences = () => {
	return (
		<div className="all-experiences-container">

			{INFO.experience.map((item, index) => (
				<div className="all-experiences-experience" key={index}>
					<Experience
						logos={item.logos}
						title={item.title}
					/>
				</div>
			))}
		</div>
	);
};

export default AllExperiences;