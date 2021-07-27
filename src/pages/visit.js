import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./visit.module.scss"


const VisitPage = () => {
	return (
		<Layout pageTitle="Visit">
			<div className="constrainedContent">
				<div className={Styles.visitContainer}>
					<div className={Styles.mapContainer}>
						<iframe
							className={Styles.interactiveMap}
							title="Google Map"
							width="100%"
							height="346"
							frameBorder="0" style={{border: 0}}
							sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-JE4MTmBbOPyxQQeFoKgIKpojfKoZoic&q=Ford Green Hall, ST6 1NG&zoom=8"
							allowFullScreen>
						</iframe>
					</div>


					<div className={Styles.openingDetails}>
						<div className={Styles.openingDetailsLeft}>
							<p>Open Sunday – Thursday 1:00pm – 4:00pm</p>
							<p>Last admission to look round the Hall 3:30pm</p>
							<p>Shop and Tea Room: open to non-museum visitors</p>
							<p>A free car park is available on site</p>
						</div>
						<div className={Styles.openingDetailsCenter}>
							<iframe
								className={Styles.tripadvisorFrame}
								width="160px"
								height="97px"
								title="Tripadvisor"
								frameBorder="0" style={{border: 0}}
								sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
								src="/html/tripadvisor_visit_widget.html"></iframe>
						</div>
						<div className={Styles.openingDetailsRight}>
							<p><span className={Styles.emph}>£13.00</span> family admission (2 adults + 2 children)</p>
							<p><span className={Styles.emph}>£4.50</span> adult admission</p>
							<p><span className={Styles.emph}>£3.50</span> concessions</p>
							<p><span className={Styles.emph}>£3.50</span> children aged 5 and over <span className={Styles.emph}>Under 5s free.</span>
							</p>
						</div>
					</div>

					<div className={Styles.clear} />
				</div>
			</div>
		</Layout>
	)
}

export default VisitPage
