import * as React from "react"
import Layout from "../components/layout/layout";


import * as Styles from "./links.module.scss"
import JustGivingBar from "../components/global/justgivingbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faLink, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import {StaticImage} from "gatsby-plugin-image";

const LinksPage = () => {
	return (
		<Layout pageTitle="Links">
			<div className="constrainedContent">
				<div className={Styles.container}>
					<div className={Styles.padded}>
						<h1>Links</h1>
					</div>

					<div className={Styles.justGiving}>
						<JustGivingBar />
					</div>

					<div className={Styles.padded}>
						<h2>Other websites</h2>

						<ul className={Styles.linksList}>
							<li><a href="https://www.stokemuseums.org.uk" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLink} /> <span>Stoke Museums</span>
							</a></li>
							<li><a href="https://www.visitstoke.co.uk/" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLink} /> <span>Visit Stoke</span>
							</a></li>
							<li><a href="https://www.tripadvisor.co.uk/Tourism-g186378-Stoke_on_Trent_Staffordshire_England-Vacations.html" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLink} /> <span>Stoke-on-Trent Trip Advisor</span>
							</a></li>
							<li><a href="https://en.wikipedia.org/wiki/Ford_Green_Hall" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLink} /> <span>Ford Green Hall - Wikipedia</span>
							</a></li>
							<li><a href="https://www.culture24.org.uk/wm000061" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLink} /> <span>Ford Green Hall - Culture24</span>
							</a></li>
							<li><a href="https://www.smallthorne-history.org.uk/" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLink} /> <span>Smallthorne History</span>
							</a></li>
						</ul>


						<h2>PDFs</h2>

						<ul className={Styles.linksList}>
							<li><a href={'/pdfs/Wedding Pack 2019.pdf'}>
								<FontAwesomeIcon icon={faFilePdf} /> <span>Wedding Pack</span>
							</a></li>
							<li><a href={'/pdfs/History of Smallthorne and Ford Green.pdf'}>
								<FontAwesomeIcon icon={faFilePdf} /> <span>History of Smallthorne and Ford Green</span>
							</a></li>
						</ul>
					</div>

					<div className={Styles.divider} />

					<div className={Styles.thirdparties}>
						<div>
							<a href="https://www.visitenglandassessmentservices.com/establishments/ford-green-hall/" target="_blank" rel="noreferrer">
								<StaticImage
									src="./../images/thirdparties/visit_england.png"
									width={98}
									placeholder="none"
									loading="eager"
									layout="fixed"
									alt="" />
							</a>
						</div>
						<div>
							<a href="https://www.tripadvisor.co.uk/Attraction_Review-g186378-d1647083-Reviews-Ford_Green_Hall-Stoke_on_Trent_Staffordshire_England.html" target="_blank" rel="noreferrer">
								<StaticImage
									src="./../images/thirdparties/tripadvisor.png"
									height={93}
									placeholder="none"
									loading="eager"
									layout="fixed"
									alt="" />
							</a>
						</div>
						<div>
							<a href="https://www.pegasusfireandsecurity.com/" target="_blank" rel="noreferrer">
								<StaticImage
									src="./../images/thirdparties/pegasus_security.png"
									alt="Pegasus Fire & Security"
									placeholder="none"
									layout="fixed"
									loading="eager"
								/>
							</a>
						</div>

					</div>


					<div className={Styles.divider} />


					<div className="constrainedContent">
						<div className={Styles.container}>
							<div className={Styles.photographers}>
								<a href="http://www.neilhulsephotography.co.uk" target="_blank" rel="noreferrer">
									<StaticImage
										src="./../images/copy/weddings/neilhulse.png"
										alt="A photo of a bride in a wedding dress. Neil Hulse photography."
										placeholder="none"
										layout="constrained"
									/>
								</a>
								<a href="http://www.katescottphotography.co.uk" target="_blank" rel="noreferrer">
									<StaticImage
										src="./../images/copy/weddings/katescott.png"
										alt="Kate Scott Photography"
										placeholder="none"
										layout="constrained"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default LinksPage
