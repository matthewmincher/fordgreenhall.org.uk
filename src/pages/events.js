import * as React from "react"
import Layout from "../components/layout/layout";

import * as Styles from "./events.module.scss"
import CalendarEventComponent from "../components/pages/events/calendarevent";
import ScrollToTop from "../components/layout/scrolltotop";
import {graphql} from "gatsby";
import {withTwoPassRendering} from "../helpers/withTwoPassRendering";

const CalendarEvent = withTwoPassRendering(CalendarEventComponent);

const EventsPage = ({data}) => {
    return (
        <Layout pageTitle="Events">
            <div className="constrainedContent">
                <div className={Styles.container}>
                    <h1>Events</h1>

                    <br/>

                    {data.allContentfulEvent.nodes.map((event) => (
                        <CalendarEvent key={event.id} {...event} />
                    ))}

                    <ScrollToTop/>

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
        allContentfulEvent(sort: {fields: [startDate], order: [ASC]}) {
            nodes {
                id
                title
                startDate
                endDate
                dateOverridePrefix
                dateOverrideDay
                dateOverrideMonth
                dateOverrideTime
                facebookUrl
                image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
                        }
                    }
                    description
                }
                content {
                    raw
                }
                isMini
            }
        }
    }
`

export default EventsPage
