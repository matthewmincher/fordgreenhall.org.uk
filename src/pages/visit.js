import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./visit.module.scss"
import {withPrefix} from "gatsby";
import CovidMessage from "../components/global/covidmessage";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TemporaryMessage from "../components/global/temporarymessage";



const VisitPage = () => {
	return (
		<Layout pageTitle="Visit" isPrimaryPage={true}>
			<div className="constrainedContent">
				<div className={Styles.visitContainer}>
					<h1>Visit Us</h1>

					<TemporaryMessage className="elizabeth-ii">
						<p>
							As a mark of respect, Ford Green Hall will be closed on Monday the 19<sup>th</sup> of September to give our staff the opportunity to pay tribute to her majesty Queen Elizabeth II.
						</p>
					</TemporaryMessage>

					<div className={Styles.interactiveMapContainer}>
						<Loader
							className={Styles.interactiveMapLoader}
							type="TailSpin"
							color="#B5B5A0"
							height={100}
							width={100}
						/>
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
							<h2>Visiting</h2>
							<p>Open Sunday – Thursday 1:00pm – 4:00pm</p>
							<p>Last admission to look round the Hall 3:30pm</p>
						</div>
						<div className={Styles.openingDetailsRight}>
							<h2>Facilities</h2>
							<p>Shop and Tea Room: open to non-museum visitors</p>
							<p>A free car park is available on site</p>
							<p>Ramp access is situated at the front of the Hall, accessed from the main road.</p>
						</div>
					</div>
					<div className={Styles.openingPrices}>
						<div className={Styles.priceContainer}>
							<table className={Styles.priceTable}>
								<thead>
								<tr>
									<th><h2 style={{margin: 0}}>Admissions</h2></th>
									<th className={Styles.priceColumn}>Price</th>
									<th> </th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td className={Styles.annotationColumn}>
										Family
										<div className={Styles.sub}>
											2 adults + 2 children
										</div>
									</td>
									<td className={Styles.priceColumn}>£13.00</td>
									<td className={Styles.emptyColumn}/>
								</tr>
								<tr>
									<td className={Styles.annotationColumn}>Adult</td>
									<td className={Styles.priceColumn}>£4.50</td>
									<td className={Styles.emptyColumn}/>
								</tr>
								<tr>
									<td className={Styles.annotationColumn}>
										Concessions

										<div className={Styles.sub}>
											Adults aged 60 or over
										</div>
									</td>
									<td className={Styles.priceColumn}>£3.50</td>
									<td className={Styles.emptyColumn}/>
								</tr>
								<tr>
									<td className={`${Styles.roundBl} ${Styles.annotationColumn}`}>
										Children
										<div className={Styles.sub}>
											Age 5 - 16. Under 5s free.
										</div>
									</td>
									<td className={Styles.priceColumn}>£3.50</td>
									<td className={`${Styles.roundBr} ${Styles.emptyColumn}`}/>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td className={Styles.priceColumn}/>
									<td>&nbsp;</td>
								</tr>
								</tbody>

							</table>
						</div>
					</div>

					<div className={Styles.clear} />

					<div className={Styles.tripadvisorContainer}>
						<iframe
							className={Styles.tripadvisorFrame}
							width="160px"
							height="97px"
							title="Tripadvisor"
							frameBorder="0" style={{border: 0}}
							sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
							src={withPrefix("/html/tripadvisor_visit_widget.html")} />
					</div>

				</div>
			</div>
		</Layout>
	)
}

export default VisitPage
