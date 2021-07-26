import * as React from "react";
import * as Styles from "./attributeditem.module.scss"

const AttributedItem = ({ className, attribution, children }) => {
	return (
		<div className={`${className} ${Styles.itemContainer}`}>
			{children}

			<span className={Styles.attribution}>{attribution}</span>
		</div>
	)
}

export default AttributedItem