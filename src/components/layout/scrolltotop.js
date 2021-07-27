import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ScrollToTop = () => {
	const scrollAction = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	return (
		<div style={{margin: "20px auto", width: "46px", cursor: "pointer"}} onClick={() => scrollAction()}>
			<StaticImage
				src="./../../images/layout/scrollup.png"
				alt="TODO"
				placeholder="none"
				layout="fixed"
				loading="eager"
			/>
		</div>
	)
}

export default ScrollToTop