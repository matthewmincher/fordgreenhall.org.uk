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
						date="Every Thursday afternoon 1:00-3:30pm">
						<StaticImage
							className={Styles.image}
							src="./../images/copy/events/knitandnatter.png"
							alt="Basket with balls of yarn and knitting needles"
							placeholder="none"
							layout="fixed"
							loading="eager"
						/>

						<p>Bring along your knitting to our group. Enjoy a cup of tea and a natter.</p>
						<p className={Styles.emph}>£2 per person, including refreshments</p>
						<p className={`${Styles.emph} ${Styles.warning}`}>Cancelled</p>

					</Event>

					<Event
						title="Summer Craft Fair"
						date="Sunday 18th July 11:00am-3:30pm">
						<StaticImage
							className={Styles.image}
							src="./../images/copy/events/spring_craft_fair_2020.jpg"
							alt="Various craft goods and jewellery"
							placeholder="none"
							layout="fixed"
							loading="eager"
						/>

						<p>Browse craft stalls in the beautiful setting of Ford Green Hall. Free admission.</p>
						<p className={Styles.emph}>We retain the right to change the way we monitor admissions to be inline with government guidelines should Covid restrictions not be lifted.</p>
						<p>Online booking not available that day.</p>
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
