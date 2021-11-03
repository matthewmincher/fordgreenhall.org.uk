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
						title="Christmas Craft Fair"
						facebookUrl="https://fb.me/e/2PNwFbmgv"
						startDate={new Date(1637492400000)}
						endDate={new Date(1637506800000)}
						image={
							<StaticImage
								src="../images/copy/events/christmas.jpg"
								alt="An exterior shot of the Hall seen through the branches of a bare tree. Snow covers the roof and grassy garden."
								placeholder="none"
								layout="fixed"
								loading="eager"
								width={200}
							/>
						}
						description={
							<div>
								<p>Browse craft stalls for that special Christmas gift inside our 17th century house!</p>
								<p className={Styles.emph}>FREE ADMISSION.</p>
								<p>***All stalls fully booked***</p>
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
