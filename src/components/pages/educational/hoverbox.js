import * as React from "react";
import * as Styles from "./hoverbox.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HoverBox = ({children, overlayChildren }) => {

	return (
		<div className={Styles.container} >
			{children}

			<div className={Styles.overlay}>
				{overlayChildren}
			</div>

			<FontAwesomeIcon className={Styles.hint} icon={faSearch} inverse />
		</div>
	)
}

export default HoverBox