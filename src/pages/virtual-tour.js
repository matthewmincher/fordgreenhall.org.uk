import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./virtual-tour.module.scss"


const VirtualTourPage = () => {
	return (
		<Layout pageTitle="Virtual Tour">
			<div className={`constrainedContent ${Styles.container}`}>
				<div className={Styles.tour}>
					<iframe src="https://my.matterport.com/show/?m=B26YABjJsUs" frameBorder="0" allowFullScreen="" title="Ford Green Hall - Virtual Tour" />
				</div>
			</div>
		</Layout>
	)
}

export default VirtualTourPage
