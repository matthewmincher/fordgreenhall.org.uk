import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import Helmet from "react-helmet";

import "normalize.css"
import '../../css/global.scss';
import * as Styles from './layout.module.scss';
import {ThemeContextProvider} from "../../context/ThemeContext";

const Layout = ({ pageTitle, children, contentBackgroundColor, isPrimaryPage = false }) => {
	const style = typeof contentBackgroundColor !== "undefined" ? {backgroundColor: contentBackgroundColor} : {}

	const title = 'Ford Green Hall' + (pageTitle ? (' | ' + pageTitle) : '');
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<ThemeContextProvider>
				<main>
					<title>{pageTitle}</title>

					<Header isPrimaryPage={isPrimaryPage} />

					<div className={Styles.content} style={style}>
						{children}
					</div>
					<Footer />
				</main>
			</ThemeContextProvider>
		</>
	)
}

export default Layout