import * as React from "react";
import * as Styles from "./hoverbox.module.scss"
import {useState} from "react";

const HoverBox = ({children, overlayChildren }) => {
	const [isActive, setIsActive] = useState(false);

	let containerClasses = Styles.container
	if(isActive){
		containerClasses += " " + Styles.active;
	}

	return (
		<div className={containerClasses} onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
			{children}

			<div className={Styles.overlay}>
				{overlayChildren}
			</div>
		</div>
	)
}

export default HoverBox