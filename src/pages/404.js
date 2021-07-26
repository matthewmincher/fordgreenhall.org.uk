import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout/layout";

import * as Styles from "./404.module.scss"

const NotFoundPage = () => {
	return (
		<Layout pageTitle="Page Not Found">
			<div className={`constrainedContent ${Styles.container}`}>
				<h1>Page Not Found</h1>

				<div className={Styles.subcontainer}>
					<p>Sorry, we could not find the page you are looking for. Please double check the address, or choose a page to visit above.</p>

					<a href="javascript:window.history.back();">&laquo; Go back</a>
					<Link to="/">&raquo; Go home</Link>
				</div>
			</div>
		</Layout>
	)
}

export default NotFoundPage
