import * as React from "react";
import * as Styles from "./attributeditem.module.scss"

const AttributedItem = ({ className, attribution, children, display = "inline-block" }) => {
	return (
		<div className={`${className} ${Styles.itemContainer}`} style={{display: display}}>
			{children}

			<span className={Styles.attribution}>{attribution}</span>
		</div>
	)
}

export default AttributedItem