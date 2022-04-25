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

					<br />

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
						title="May Day"
						facebookUrl="https://fb.me/e/2aB450r3O"
						startDate={new Date(1651406400000)}
						endDate={new Date(1651415400000)}
						image={
							<StaticImage
								src="./../images/copy/events/may_day.jpg"
								alt="A view of the side of the hall, peering through green foliage and yellow flowers."
								placeholder="none"
								layout="fixed"
								width={200}
								loading="eager"
							/>
						}
						description={
							<div>
								<p>Explore The Hall on Staffordshire May Day with costumed interpreters..</p>
								<p>Listen to live period music from the Drumblebys. Discover weapons from the 17th century and try your hand at toys and games from 400 years ago.</p>
								<p><strong>Adults £4.50, children & concessions £3.50. Family £13.00.</strong></p>
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

					<CalendarEvent
						title="Summer Craft Fair"
						facebookUrl="https://fb.me/e/1Wq9uOVbp"
						startDate={new Date(1658052000000)}
						endDate={new Date(1658068200000)}
						image={
							<StaticImage
								src="./../images/copy/events/summer_craft_fair.jpg"
								alt="The exterior of the hall, with a foxglove in the foreground."
								placeholder="none"
								layout="fixed"
								width={200}
								loading="eager"
							/>
						}
						description={
							<div>
								<p>Pop down to our Summer Craft Fair and browse for that special something!</p>
								<p>Craft stalls inside and outside the Hall.</p>
								<br />
								<p>Email fordgreenhall.museum@gmail.com or call 01782 537696 for more info.</p>
							</div>
						}
					/>

					<CalendarEvent
						title="Pirate Day!"
						facebookUrl="https://fb.me/e/1IIGhsUUm"
						startDate={new Date(1658829600000)}
						endDate={new Date(1658845800000)}
						image={
							<StaticImage
								src="./../images/copy/events/pirate_day.jpg"
								alt="A dingy pirate flag with a skull and crossed rapiers"
								placeholder="none"
								layout="fixed"
								width={200}
								loading="eager"
							/>
						}
						description={
							<div>
								<p>Set sail for our Pirate day, come dressed as a Pirate.</p>
								<p>Meet a pirate and handle replica weapons and learn about life under the black flag.</p>
								<p><strong>Children's trail, craft activity.<br /> **** More info about activities to follow****</strong></p>
								<p>Adults £4.50, Children and concessions £3.50, Family £13.50</p>
							</div>
						}
					/>

					<CalendarEvent
						title="Teddy Bears Picnic"
						facebookUrl="https://fb.me/e/2rwpaXffO"
						startDate={new Date(1660039200000)}
						endDate={new Date(1660055400000)}
						image={
							<StaticImage
								src="./../images/copy/events/teddy_bears.jpg"
								alt="A group of teddy bear dolls sat together at a picnic table enjoying food and drinks"
								placeholder="none"
								layout="fixed"
								width={200}
								loading="eager"
							/>
						}
						description={
							<div>
								<p>Time for our Teddy Bears Picnic. Bring a Teddy bear, bring a picnic have a brew from our tea room.</p>
								<p>The Farm on wheels will be here with a selection of animals.</p>
								<p><strong>Childrens craft activity, Childrens trail.<br />*****More info and activities to follow******</strong></p>
							</div>
						}
					/>

					<CalendarEvent
						title="Vikings, Princesses, Knights, and Shieldmaidens"
						facebookUrl="https://fb.me/e/1UVlEsqXS"
						startDate={new Date(1660730400000)}
						endDate={new Date(1660746600000)}
						image={
							<StaticImage
								src="./../images/copy/events/vikings.jpg"
								alt="Several viking raiders stand in front of a tent equipped with roundshields"
								placeholder="none"
								layout="fixed"
								width={200}
								loading="eager"
							/>
						}
						description={
							<div>
								<p>Meet fearsome Vikings demonstrating battle techniques.</p>
								<p>Explore replica Medieval weapons and armour and learn what it was like to be a Knight.</p>
								<p><strong>Come dressed up. Craft activity and viking riddle trail. *****More info to follow****</strong></p>
							</div>
						}
					/>

					<CalendarEvent
						title="Christmas Frost Fair"
						facebookUrl="https://fb.me/e/1WXRct75h"
						startDate={new Date(1668942000000)}
						endDate={new Date(1668915000000)}
						image={
							<StaticImage
								src="./../images/copy/events/christmas_fair.jpg"
								alt="A festive Christmas stall laden with gifts and crafts inside the hall."
								placeholder="none"
								layout="fixed"
								width={300}
								loading="eager"
							/>
						}
						description={
							<div>
								<p>Browse craft stalls at our Christmas Frost Fair. Get that perfect handmade Christmas pressie!</p>
								<p>Outdoor and indoor stalls.</p>
								<br />
								<p>Email fordgreenhall.museum@gmail.com or call 01782 537696 for more info.</p>
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
