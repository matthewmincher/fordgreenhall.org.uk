import * as React from "react"
import Layout from "../components/layout/layout";
import CovidMessage from "../components/global/covidmessage";
import Hero from "../components/pages/index/hero";

import * as Styles from "./index.module.scss"

const IndexPage = ({location}) => {
  return (
    <Layout pageTitle="Test" contentBackgroundColor="black">
		<CovidMessage />

		<div className={Styles.heroContainer}>
			<Hero skipAnimation={location?.state?.internal ?? false} />
		</div>
    </Layout>
  )
}

export default IndexPage
