import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/experience.css";

const Experience = (props) => {
	const { logos, title, } = props;

    function renderLogos() {
        if (Array.isArray(logos)){
            return logos.map((logo, index) => (
                <img key={index} src={logo} alt={`logo-${index}`} />
            ))
        } else {
            return <img src={logos} alt={`logo`} />
        }
    }

	return (
		<React.Fragment>
			<div className="experience">
				<div className="experience-container">
					<div className="experience-logos">{renderLogos()}</div>
					<div className="experience-title">{title}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
