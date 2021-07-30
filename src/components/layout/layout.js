import * as React from "react";
import Header from "./header";
import Footer from "./footer";

import "normalize.css"
import '../../css/global.scss';
import * as Styles from './layout.module.scss';

const Layout = ({ pageTitle, children, contentBackgroundColor, isPrimaryPage = false }) => {
	const style = typeof contentBackgroundColor !== "undefined" ? {backgroundColor: contentBackgroundColor} : {}

	return (
		<main>
			<title>{pageTitle}</title>

			<Header isPrimaryPage={isPrimaryPage} />

			<div className={Styles.content} style={style}>
				{children}
			</div>

			<Footer />
		</main>
	)
}

export default Layout