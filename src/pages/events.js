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
						title="Tudor and Stuart Day"
						description="Tudor and Stuart Day at Ford Green Hall. Meet various members of Tudor and Stuart society including a Cook, Wise woman, Soldier and surgeon. Children's trail and live music."
						startDate={new Date(1629021600000)}
						endDate={new Date(1629037800000)}
						image={<StaticImage
							className={Styles.image}
							src="../images/copy/events/tudor_and_stuart_day.jpg"
							alt="Black and white artwork depicting kitchen activities"
							placeholder="none"
							layout="fixed"
							loading="eager"
							width={240}
						/>}>
						<p>Tudor and Stuart Day at Ford Green Hall. Meet various members of Tudor and Stuart society including a Cook, Wise woman, Soldier and surgeon.</p>
						<p>Children's trail and live music.</p>
						<p className={Styles.emph}>Adults £4.50. Children & Concessions £3.50. Family £13.00. Under 5s free.</p>
						<p>Event subject to change in current climate.</p>
					</Event>

					<Event
						title="Mr Ford's Farm"
						description="Find out what life was like on a 17th century farm."
						startDate={new Date(1629626400000)}
						endDate={new Date(1629640800000)}
						image={<StaticImage
							className={Styles.image}
							src="../images/copy/events/mr_fords_farm.jpg"
							alt="A painting of two chickens"
							placeholder="none"
							layout="fixed"
							loading="eager"
							width={240}
						/>}>
						<p>Come and meet a selection of animals with the 'Farm on Wheels'.</p>
						<p>Find out what life was like on a 17th century farm. Look around the Hall and do our Childrens trail.</p>
						<p className={Styles.emph}>Adults £4.50. Children & Concessions £3.50. Under 5s free.</p>
					</Event>

					<Event
						title="Heritage Open Day - Food and Drink in the 17th Century"
						description="Find out what food and drink was consumed in Tudor and Stuart times."
						startDate={new Date(1631440800000)}
						endDate={new Date(1631455200000)}
						image={<StaticImage
							className={Styles.image}
							src="../images/copy/events/food_and_drink.jpg"
							alt="A selection of food and tools on a table"
							placeholder="none"
							layout="fixed"
							loading="eager"
							width={240}
						/>}>
						<p>Find out what food and drink was consumed in Tudor and Stuart times.</p>
						<p>Explore tableware of the rich and poor and how was food cooked in an age before gas and electricity.</p>
						<p className={Styles.emph}>Outdoor cookery (weather permitting).</p>
					</Event>

					<Event
						title="Heritage Open Day - Stand and Deliver!"
						description="Meet Royalist soldier turned highwayman, William Spragg."
						startDate={new Date(1632045600000)}
						endDate={new Date(1632060000000)}
						image={<StaticImage
							className={Styles.image}
							src="../images/copy/events/stand_and_deliver.jpg"
							alt="A highwayman with two sidearms"
							placeholder="none"
							layout="fixed"
							loading="eager"
							width={240}
						/>}>
						<p>Meet Royalist soldier turned highwayman, William Spragg as he recounts his exploits and shows you the 'tools of his trade'.</p>
						<p className={Styles.emph}>Living history displays. (Outdoor event, weather permitting)</p>
						<p>The Hall will be open to visitors to explore. <strong>Free Admission.</strong></p>
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
