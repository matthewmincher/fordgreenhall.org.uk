import * as React from "react"
import Layout from "../components/layout/layout";
import CovidMessage from "../components/global/covidmessage";
import Hero from "../components/pages/index/hero";

import * as Styles from "./index.module.scss"
import JustGivingBar from "../components/global/justgivingbar";

const IndexPage = ({location}) => {
  return (
    <Layout pageTitle="" contentBackgroundColor="black" isPrimaryPage={true} >
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
