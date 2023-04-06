import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./events.module.scss"
import CalendarEvent from "../components/pages/events/calendarevent";
import ScrollToTop from "../components/layout/scrolltotop";
import {graphql} from "gatsby";

const EventsPage = ({ data }) => {
	return (
		<Layout pageTitle="Events">
			<div className="constrainedContent">
				<div className={Styles.container}>
					<h1>Events</h1>

					<br />

					{data.allMarkdownRemark.nodes.map(({ id, html, frontmatter }) => (
						<CalendarEvent
							{...frontmatter}
							key={id}>

							<div dangerouslySetInnerHTML={{ __html: html}} />
						</CalendarEvent>
					))}

					<ScrollToTop />

					<div className={Styles.moreInfo}>
						For more information about any event, please telephone.
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: {frontmatter: { published: {eq: true}}}
			sort: {fields: [frontmatter___startDate], order: ASC}
		) {
			nodes {
				html
				id
				frontmatter {
					title
					facebookUrl
					startDate
					endDate
					datePrefix
					dateDayPart
					dateMonthPart
					dateTimePart
					image {
						childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								placeholder: NONE
							)
						}
					}
					imageAlt,
					mini
				}
			}
		}
	}
`;

export default EventsPage
