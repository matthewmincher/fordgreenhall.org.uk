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
						<p className={Styles.emph}>Tickets only. £9 per person.</p>
						<p>Available from the Hall fordgreenhall.museum@gmail.com<br />01782 537696.</p>
					</Event>

					<Event
						title="Halloween Witch Hunt"
						description="See one of the most haunted houses in Stoke on Trent decorated for Halloween!"
						date="25th-28th & 31st October - 13:00 - 15:30"
						endDate={new Date(1635694200000)}
						image={<StaticImage
							className={Styles.image}
							src="../images/copy/events/halloween.jpg"
							alt="Wooden door with metal studs and trimmings. A Haunted House sign with a skull on it hangs from the knocker."
							placeholder="none"
							layout="fixed"
							loading="eager"
							width={240}
						/>}>
						<p>Search out 17th century Witches around the Hall in our trail.</p>
						<p className={Styles.emph}>See one of the most haunted houses in Stoke on Trent decorated for Halloween!</p>
						<p>Normal admission applies (Adults £4.50, Children and Concessions £3.50, Family ticket £13.00, under 5's free.)</p>
					</Event>

					<Event
						title="Christmas Craft Fair"
						description="Browse craft stalls for that special Christmas gift inside our 17th century house!"
						date="Sunday 21st November - 11:00 - 15:00"
						startDate={new Date(1637492400000)}
						endDate={new Date(1637506800000)}
						image={<StaticImage
							className={Styles.image}
							src="../images/copy/events/christmas.jpg"
							alt="An exterior shot of the Hall seen through the branches of a bare tree. Snow covers the roof and grassy garden."
							placeholder="none"
							layout="fixed"
							loading="eager"
							width={240}
						/>}>
						<p>Browse craft stalls for that special Christmas gift inside our 17th century house!</p>
						<p className={Styles.emph}>FREE ADMISSION.</p>
						<p>***All stalls fully booked***</p>
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
