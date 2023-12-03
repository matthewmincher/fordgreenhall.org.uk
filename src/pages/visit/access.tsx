import * as React from "react"

import * as Styles from "./access.module.scss"
import Layout from "../../components/layout/layout";
import {StaticImage} from "gatsby-plugin-image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";

const AccessPage = () => {
    return (
        <Layout pageTitle="Access" isPrimaryPage={false}>
            <div className="constrainedContent">
                <div className={Styles.accessContainer}>
                    <h1>Access Information</h1>

                    <p className={Styles.padded}>Ford Green Hall is a 17th Century timber framed farmhouse with a small
                        period garden.</p>
                    <p className={Styles.padded}>We offer a warm welcome to all and are committed to making Ford Green
                        Hall accessible and inclusive for those with disabilities.</p>
                    <p className={Styles.padded}>The information below highlights our access policies.</p>

                    <h2>Arrival and parking</h2>

                    <ul>
                        <li>The Hall is situated on Ford Green Road (B5051) in between Norton and Smallthorne, next to
                            The Whitfield Valley nature reserve.
                        </li>
                        <li>The Hall shares the carpark with the nature reserve. There is a 2.1 metre height barrier, so
                            please call ahead if your vehicle exceeds this.
                        </li>
                        <li>The fire alarm is a continuous bell. Fire marshals will assist you in the unlikely event
                            that an evacuation is necessary. Please let us know if you may need extra help.
                        </li>
                        <li>Assistance dogs are welcome throughout the Hall and Garden.</li>
                        <li>
                            There are two entry points, the first is at the back gate with steps over the Hall’s flood
                            defences with a gentle path leading to the Halls rear onto a crazy paved area. Head across
                            this area and enter the Reception / tea room.
                        </li>
                    </ul>

                    <div className={Styles.imageRow}>
                        <StaticImage
                            placeholder="none"
                            loading="eager"
                            layout="constrained"
                            alt={"Photo showing the rear entry gate of the hall - a concrete path leading to some steps"}
                            src='./../../images/copy/visit/access/rear_entry.jpg'/>
                        <StaticImage
                            placeholder="none"
                            loading="eager"
                            layout="constrained"
                            alt={"Photo showing the rear path of the hall - it is cobbled and has steps with wooden guardrails"}
                            src='./../../images/copy/visit/access/rear_path.jpg'/>
                    </div>
                    <div className={Styles.imageCaption}>
                        Rear entrance leading over the flood defences down to the back of the Hall.
                    </div>

                    <ul>
                        <li>The Front Entrance is situated on the main road. Head for the barrier and turn right, follow
                            the hedge until you reach the front entrance.
                        </li>
                    </ul>
                    <div className={Styles.imageRow}>
                        <StaticImage
                            placeholder="none"
                            loading="eager"
                            layout="constrained"
                            alt={"Photo showing the sign at the front gate including opening hours information"}
                            src='./../../images/copy/visit/access/front_entry.jpg'/>
                        <StaticImage
                            placeholder="none"
                            loading="eager"
                            layout="constrained"
                            alt={"The front gate of the hall - a paved path sloping towards the hall"}
                            src='./../../images/copy/visit/access/front_gate.jpg'/>
                    </div>

                    <ul>
                        <li>Head down the path until you reach the top of a small flight of steps. If you prefer to
                            continue with no steps head for the rear of the Hall through the arch way turn right and
                            enter the Reception / tea room at the rear of the hall.
                        </li>
                    </ul>

                    <div className={Styles.imageRow}>
                        <StaticImage
                            placeholder="none"
                            loading="eager"
                            layout="constrained"
                            alt={"The front path to the hall, a gently sloping flagstone paved walkway under foliage"}
                            src='./../../images/copy/visit/access/front_approach.jpg'/>
                        <StaticImage
                            placeholder="none"
                            loading="eager"
                            layout="constrained"
                            alt={"Path from the from to the rear of the hall. A comparatively narrow flagstone paved path under a brick archway"}
                            src='./../../images/copy/visit/access/front_arch.jpg'/>
                    </div>

                    <div className={Styles.imageRow}>
                        <StaticImage
                            placeholder="none"
                            loading="eager"
                            layout="constrained"
                            alt={"Front entrance to the hall including outdoor seating and disabled toilet"}
                            src='./../../images/copy/visit/access/hall_entrance.jpg'/>
                    </div>

                    <h2>Inside the hall</h2>
                    <ul>
                        <li>The Reception and Tea room are in the same building and can get quite full on busy event
                            days, however there is outside seating if the weather is fine.
                        </li>
                        <li>Doorways in the Hall are wide enough for manual wheelchairs.</li>
                        <li>There is an accessible toilet just in the corridor from reception. This has a baby changing
                            unit and a bin for nappies and hazardous waste.
                        </li>
                        <li>Floors throughout are a mix of clay tiles, stone slabs and polished wooden floors.</li>
                        <li>There are no lifts at the Hall so access to the upper floor is via a Jacobean staircase with
                            two small flights that are carpeted. The rail is at a lower height than normal.
                        </li>
                        <li>The Hall has low lighting in some rooms with a mixture of LED, halogen and fluorescent bulbs
                            at present.
                        </li>
                        <li>A video tour of the house is playing on loop in the exhibition room for anyone to watch, but
                            is particularly useful for those who are unable to access the upper floor.
                        </li>
                        <li>At present the tea room serves hot and cold drinks and pre packed snacks.</li>
                        <li>For our blind and visually impaired customers guided visits and additional commentary can be
                            provided on request with sufficient notice
                        </li>
                    </ul>
                    <h2>Entry fees</h2>
                    <ul>
                        <li>Our admission policy admits the carer of a disabled visitor free of charge, while a
                            concessionary rate applies to the disabled visitor.
                        </li>
                    </ul>
                    <h2>Garden</h2>
                    <ul>
                        <li>Our garden is accessible without steps, but there are steps with handrails leading to our
                            viewing mound. Most of the garden has a gentle slope and is gravelled.
                        </li>
                        <li>Our Staff and volunteers want you to have a stress free and enjoyable visit. Please feel
                            free to contact us with any specific questions or access requirements.
                        </li>
                    </ul>

                    <div className={Styles.download}>
                        <a href={'/pdfs/Ford Green Hall access statement.pdf'}>
                            <FontAwesomeIcon icon={faFilePdf}/> <span>Download statement as PDF</span>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AccessPage
