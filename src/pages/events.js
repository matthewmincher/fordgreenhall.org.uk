import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./events.module.scss"
import CovidMessage from "../components/global/covidmessage";
import Event from "../components/pages/events/event";
import {StaticImage} from "gatsby-plugin-image";
import ScrollToTop from "../components/layout/scrolltotop";


const EventsPage = () => {
	return (
		<Layout pageTitle="Events">
			<div className="constrainedContent">
				<div style={{maxWidth: "850px", marginLeft: "auto", marginRight: "auto"}}>
					<CovidMessage />
				</div>

				<div className={Styles.container}>
					<h1>Events</h1>

					<Event
						title={"Thursday Afternoons\nKnit and Natter Group"}
						date="Every Thursday afternoon 1:00 - 3:30pm"
						image={<StaticImage
							className={Styles.image}
							src="./../images/copy/events/knitandnatter.png"
							alt="Basket with balls of yarn and knitting needles"
							placeholder="none"
							layout="fixed"
							loading="eager"/>}>
						<p>Bring along your knitting to our group. Enjoy a cup of tea and a natter.</p>
						<p className={Styles.emph}>£2 per person, including refreshments</p>
					</Event>

					<Event
						title="The Wisewoman in the 17th Century"
						description="A talk looking at the role of the Wisewoman in the Stuart age."
						date="Sunday 17th October - 2pm"
						endDate={new Date(1634479200000)}
						image={<StaticImage
							className={Styles.image}
							src="../images/copy/events/wise_women.jpg"
							alt="Framed portrait of an older Stuart woman wearing a black hat with lace trim"
							placeholder="none"
							layout="fixed"
							loading="eager"
							width={240}
						/>}>
						<p>A talk looking at the role of the Wisewoman in the Stuart age.</p>
						<p className={Styles.emph}>Tickets only £9.</p>
						<p>Available from the Hall fordgreenhall.museum@gmail.com<br />01782 537696.</p>
					</Event>


					<ScrollToTop />

					<div className={Styles.moreInfo}>
						For more information about any event, please telephone 01782 537696
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default EventsPage
