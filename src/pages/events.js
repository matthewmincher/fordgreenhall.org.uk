import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./events.module.scss"
import CovidMessage from "../components/global/covidmessage";
import CalendarEvent from "../components/pages/events/calendarevent";
import {StaticImage} from "gatsby-plugin-image";
import ScrollToTop from "../components/layout/scrolltotop";


const EventsPage = () => {
	return (
		<Layout pageTitle="Events">
			<div className="constrainedContent">
				<div className={Styles.container}>
					<h1>Events</h1>

					<div style={{maxWidth: "850px", marginLeft: "auto", marginRight: "auto", marginTop: "-10px", marginBottom: "10px"}}>
						<CovidMessage />
					</div>

					<CalendarEvent
						title={"Afternoon Knit and Natter Group"}
						datePrefix="Every"
						dateDayPart="Thursday"
						dateTimePart="1:00pm - 3:30pm"
						description={
							<div>
								<div style={{
									position: "absolute",
									bottom: "-60px",
									right: "-60px",
									zIndex: 0
								}}>
									<StaticImage
										src="./../images/copy/events/knitandnatter.png"
										alt="Basket with balls of yarn and knitting needles"
										placeholder="none"
										layout="fixed"

										width={200}
										loading="eager"/>
								</div>
								<div style={{
									position: "relative"
								}}>
									<p>Bring along your knitting to our group. Enjoy a cup of tea and a natter.</p>
									<p className={Styles.emph}>£2 per person, including refreshments</p>
								</div>
							</div>
						}
					/>

					<CalendarEvent
						title="King George commands and we obey!"
						facebookUrl="https://fb.me/e/1fcE8gNTs"
						startDate={new Date(1655632800000)}
						endDate={new Date(1655649000000)}
						image={
							<StaticImage
								src="./../images/copy/events/king_george_day.jpg"
								alt="The 95th Rifles at the Battle of the Pyrenees, 1813"
								placeholder="none"
								layout="fixed"
								width={300}
								loading="eager"
							/>
						}
						description={
							<div>
								<p>Meet a rifleman from the 95th regiment of foot, made famous by Bernard Cornwell's 'Sharpe' series.</p>
								<p>Learn about life in Wellington's army, and handle replica weapons from the Napoleonic wars.</p>
								<p>Normal admission price! <strong>Adults £4.50, children & concessions £3.50. Family £13.00</strong></p>
								<p className={Styles.emph} style={{clear: 'both'}}>The perfect treat for father's day on the anniversary weekend of the Battle of Waterloo!</p>
							</div>
						}
					/>


					<ScrollToTop />

					<div className={Styles.moreInfo}>
						For more information about any event, please telephone.
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default EventsPage
