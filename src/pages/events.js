import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./events.module.scss"
import CovidMessage from "../components/global/covidmessage";
import Event from "../components/pages/events/event";
import CalendarEvent from "../components/pages/events/calendarevent";
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
						title="The Wisewoman in the 17th Century"
						facebookUrl="https://fb.me/e/24NXepnMG"
						endDate={new Date(1634475600000)}
						image={
							<StaticImage
								src="../images/copy/events/wise_women.jpg"
								alt="Framed portrait of an older Stuart woman wearing a black hat with lace trim"
								placeholder="none"
								layout="fixed"
								loading="eager"
								width={200}
							/>
						}
						description={
							<div>
								<p>A talk looking at the role of the Wisewoman in the Stuart age.</p>
								<p className={Styles.emph}>Tickets only. £9 per person.</p>
								<p>Available from the Hall fordgreenhall.museum@gmail.com<br />01782 537696.</p>
							</div>
						}
					/>

					<CalendarEvent
						title="Halloween Witch Hunt"
						facebookUrl="https://fb.me/e/2B4wu9vEO"
						endDate={new Date(1635694200000)}
						dateDayPart={
							<span style={{
								fontSize: "80%"
							}}>
								25th-28th, 31st
							</span>
						}
						dateMonthPart="October"
						dateTimePart="1:00pm - 3:30pm"
						image={
							<StaticImage
								src="../images/copy/events/halloween.jpg"
								alt="Wooden door with metal studs and trimmings. A Haunted House sign with a skull on it hangs from the knocker."
								placeholder="none"
								layout="fixed"
								loading="eager"
								width={200}
							/>
						}
						description={
							<div>
								<p>Search out 17th century Witches around the Hall in our trail.</p>
								<p className={Styles.emph}>See one of the most haunted houses in Stoke on Trent decorated for Halloween!</p>
								<p>Normal admission applies (Adults £4.50, Children and Concessions £3.50, Family ticket £13.00, under 5's free.)</p>
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
						For more information about any event, please telephone 01782 537696
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default EventsPage
