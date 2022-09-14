import * as React from "react";
import * as Styles from "./temporarymessage.module.scss"

const TemporaryMessage = ({ children, className }) => {
	return (
		<div className={`${className} constrainedContent`}>
			<div className={Styles.container}>
				<div className={Styles.message}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default TemporaryMessage