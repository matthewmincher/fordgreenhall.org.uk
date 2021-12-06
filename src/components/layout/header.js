import * as React from "react";
import * as Styles from "./header.module.scss"
import {StaticImage} from "gatsby-plugin-image";
import NavBar from "./navbar";

import HeaderBoxImage from "../../images/layout/header_box.png"
import SnowflakeProvider from "../global/snowflakeprovider";

const Header = ({ isPrimaryPage }) => {
	return (
		<header className={Styles.main}>
			<SnowflakeProvider count={100}>
				<div className={Styles.logoContainer}>
					<div className={Styles.townContainer}>
						<div className={Styles.townType}>
							Stoke-on-Trent
						</div>
					</div>
					<div className={Styles.countyContainer}>
						<div className={Styles.countyType}>
							Staffordshire
						</div>
					</div>

					<div className={Styles.item}>
						<img
							src={HeaderBoxImage}
							width={49}
							height={49}
							alt="" />
					</div>
					<div className={Styles.logoType}>F<span>ORD</span> G<span>REEN</span> H<span>ALL</span></div>
					<div className={Styles.item}>
						<img
							src={HeaderBoxImage}
							width={49}
							height={49}
							alt="" />
					</div>
				</div>
				<div className={Styles.datesContainer}>
					<div className={Styles.datesType}>1624 - {new Date().getFullYear()}</div>
				</div>


				<div className={Styles.navBar}>
					<NavBar isPrimaryPage={isPrimaryPage} />
				</div>
			</SnowflakeProvider>
		</header>
	)
}

export default Header