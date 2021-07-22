import * as React from "react";
import Footer from "./footer";

import "normalize.css"
import '../../css/global.scss';
import * as Styles from './layout.module.scss';
import Header from "./header";

const Layout = ({ pageTitle, children }) => {
	return (
		<main className={Styles.main}>
			<title>{pageTitle}</title>

			<Header />

			<div className={Styles.content}>
				{children}
			</div>

			<Footer />
		</main>
	)
}

export default Layout