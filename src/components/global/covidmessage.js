import * as React from "react";
import * as Styles from "./covidmessage.module.scss"

const CovidMessage = () => {
	return (
		<div className="constrainedContent">
			<div className={Styles.container}>
				<h1>Information</h1>

				<p>You no longer have to book to visit Ford Green Hall. Masks are no longer mandatory but are always appreciated. See you soon!</p>
				<p>We are happy to answer any questions regarding the history, contents and anything else and will keep in touch on Facebook, email fordgreenhall.museum@gmail.com, or call 01782 537696</p>
			</div>
		</div>
	)
}

export default CovidMessage