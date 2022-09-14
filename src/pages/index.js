import * as React from "react"
import Layout from "../components/layout/layout";
import Hero from "../components/pages/index/hero";

import * as Styles from "./index.module.scss"
import JustGivingBar from "../components/global/justgivingbar";
import TemporaryMessage from "../components/global/temporarymessage";

const IndexPage = ({location}) => {
  return (
    <Layout pageTitle="" contentBackgroundColor="black" isPrimaryPage={true} >

		<TemporaryMessage className="elizabeth-ii">
			<p>
				As a mark of respect, Ford Green Hall will be closed on Monday the 19<sup>th</sup> of September to give our staff the opportunity to pay tribute to her majesty Queen Elizabeth II.
			</p>
		</TemporaryMessage>

		<div className={Styles.heroContainer}>
			<Hero skipAnimation={location?.state?.internal ?? false} />
		</div>


		<div className={Styles.justGiving}>
			<JustGivingBar />
		</div>

    </Layout>
  )
}

export default IndexPage
