import * as React from "react";
import * as Styles from "./header.module.scss"
import {StaticImage} from "gatsby-plugin-image";

const Header = () => {
	return (
		<header className={Styles.main}>
			<div className={Styles.logoContainer}>
				<div className={Styles.spacer} />
				<div className={Styles.item}>
					<StaticImage
						src="../../images/layout/header_box.png"
						width={49}
						height={49}
						placeholder="none"
						loading="eager"
						layout="fixed"
						alt="" />
				</div>
				<StaticImage
					className={Styles.logo}
					src="../../images/layout/header_logo.png"
					width={480}
					height={86}
					placeholder="none"
					loading="eager"
					layout="fixed"
					alt="" />
				<div className={Styles.item}>
					<StaticImage
						src="../../images/layout/header_box.png"
						width={49}
						height={49}
						placeholder="none"
						loading="eager"
						layout="fixed"
						alt="" />
				</div>
				<div className={Styles.spacer} />
			</div>
			<div className={Styles.datesContainer}>
				<StaticImage
					src="../../images/layout/header_dates.png"
					width={166}
					height={38}
					placeholder="none"
					loading="eager"
					layout="fixed"
					alt="1624 - 2019" />
			</div>

		</header>
	)
}

export default Header