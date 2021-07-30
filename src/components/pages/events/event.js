import * as React from "react";
import * as Styles from "./event.module.scss"

const Event = ({title, date, image, children }) => {

	return (
		<div className={Styles.container}>
			<h2>{title}</h2>

			{children}

			<div className={Styles.date}>{date}</div>
		</div>
	)
}

export default Event