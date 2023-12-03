import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./outside.module.scss"
import {StaticImage} from "gatsby-plugin-image";
import AttributedItem from "../components/global/attributeditem";

const kateScottAttribution = "© Kate Scott Photography 2015";

const OutsidePage = () => {
	return (
		<Layout pageTitle="Outside">
			<div className={`constrainedContent ${Styles.container}`}>
				<h1>Outside</h1>

				<AttributedItem attribution={kateScottAttribution} display="block">
					<StaticImage
						src="./../images/copy/outside/1.jpg"
						alt="The hall and gardens exterior shot"
						placeholder="none"
						layout="fullWidth"
						loading="eager"
					/>
				</AttributedItem>
				<div className={Styles.row}>
					<div className={Styles.col}>
						<AttributedItem attribution={kateScottAttribution} display="block">
							<StaticImage
								src="./../images/copy/outside/2.jpg"
								alt="Looking upwards outside the hall at a chimney stack"
								placeholder="none"
								layout="fullWidth"
								loading="eager"
							/>
						</AttributedItem>
					</div>
					<div className={Styles.col}>
						<AttributedItem attribution={kateScottAttribution} display="block">
							<StaticImage
								src="./../images/copy/outside/3.jpg"
								alt="Close up of the wooden exterior of the hall"
								placeholder="none"
								layout="fullWidth"
								loading="eager"
							/>
						</AttributedItem>
					</div>
				</div>
				<AttributedItem attribution={kateScottAttribution} display="block">
					<StaticImage
						src="./../images/copy/outside/4.jpg"
						alt="Close up of the wooden exterior of the hall"
						placeholder="none"
						layout="fullWidth"
						loading="eager"
					/>
				</AttributedItem>
			</div>
		</Layout>
	)
}

export default OutsidePage
