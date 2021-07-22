import * as React from "react";
import Header from "./header";
import Footer from "./footer";

import "normalize.css"
import '../../css/global.scss';
import * as Styles from './layout.module.scss';

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