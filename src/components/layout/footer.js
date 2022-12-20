import * as React from "react";
import * as Styles from "./footer.module.scss"
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import SnowflakeProvider from "../global/snowflakeprovider";
import ChristmasGarland from "../../images/layout/christmas_garland.png"
import ConditionalWrapper from "../global/conditionalwrapper";
import {ThemeContext} from "../../context/ThemeContext";

const Footer = () => {
	const {isChristmas} = React.useContext(ThemeContext);

	return (
		<footer style={{position: 'relative'}}>
			<ConditionalWrapper condition={isChristmas} wrapper={children => <SnowflakeProvider pixelsPerFlake={10000}>{children}</SnowflakeProvider>}>
				<div className={Styles.contact} style={{paddingBottom: '15px'}}>
					<div className={Styles.container}>
						<div className={Styles.address}>
							<FontAwesomeIcon icon={faMapMarkedAlt} />
							<div className={Styles.addressPosition}>
								<div className={Styles.addressLines}>
									<span>Ford Green Road, </span>
									<span>Smallthorne, </span>
									<span>Stoke-on-Trent, </span>
									<span>ST6 1NG</span>
								</div>
							</div>
						</div>
						<div className={Styles.phone}><FontAwesomeIcon icon={faPhone} /><span>01782 537696</span></div>

						<div className={Styles.email}><FontAwesomeIcon icon={faEnvelope} /><span>fordgreenhall.museum@gmail.com</span></div>
					</div>
				</div>
			</ConditionalWrapper>

			{isChristmas &&
				<div style={{
					backgroundImage: `url(${ChristmasGarland})`,
					backgroundSize: '200px 50px',
					backgroundRepeat: 'repeat-x',
					height: '50px',
					width: '100%',
					position: 'relative',
					top: '-20px'
				}} />
			}

			<div className={Styles.main}>
				<div className={Styles.container}>
					<div className={Styles.social}>
						<a
							href="https://www.facebook.com/fordgreenhall"
							target="_blank"
							rel="noreferrer">
							<StaticImage
								src="../../images/social/facebook_square.png"
								className={Styles.icon}
								placeholder="none"
								width={32}
								height={32}
								layout="fixed"
								loading="eager"
								alt="Find us on Facebook" />
							<span>Find us on Facebook</span>
						</a>
						<a
							href="https://twitter.com/fordgreenhall"
							target="_blank"
							rel="noreferrer">
							<StaticImage
								src="../../images/social/twitter_square.png"
								className={Styles.icon}
								placeholder="none"
								width={32}
								height={32}
								layout="fixed"
								loading="eager"
								alt="Follow us on Twitter" />
							<span>Follow us on Twitter</span>
						</a>
						<a
							href="https://www.youtube.com/channel/UCNgNqHYmtsuhSeWXDwJT8Mg"
							target="_blank"
							rel="noreferrer">
							<StaticImage
								src="../../images/social/youtube_square.png"
								className={Styles.icon}
								placeholder="none"
								width={32}
								height={32}
								layout="fixed"
								loading="eager"
								alt="Watch on Youtube" />
							<span>Watch on Youtube</span>
						</a>
						<a
							href="https://www.instagram.com/ford_green_hall_museum/"
							target="_blank"
							rel="noreferrer">
							<StaticImage
								src="../../images/social/instagram_square.png"
								className={Styles.icon}
								placeholder="none"
								width={32}
								height={32}
								layout="fixed"
								loading="eager"
								alt="See us on Instagram" />
							<span>See us on Instagram</span>
						</a>
					</div>

					<div className={Styles.thirdPartyContainer}>
						<div className={Styles.visitEngland}>
							<a href="https://www.visitenglandassessmentservices.com/establishments/ford-green-hall/"
							   target="_blank"
							   rel="noreferrer">
								<StaticImage
									src="../../images/thirdparties/visit_england.png"
									width={98}
									placeholder="none"
									loading="eager"
									layout="fixed"
									alt="" />
							</a>
						</div>
						<div className={Styles.hiddenGem}>
							<a href="https://www.visitenglandassessmentservices.com/establishments/ford-green-hall/"
							   target="_blank"
							   rel="noreferrer">
								<StaticImage
									src="../../images/thirdparties/hidden_gem_22.png"
									height={141}
									placeholder="none"
									loading="eager"
									layout="fixed"
									alt="" />
							</a>
						</div>
						<div className={Styles.tripAdvisor}>
							<a href="https://www.tripadvisor.co.uk/Attraction_Review-g186378-d1647083-Reviews-Ford_Green_Hall-Stoke_on_Trent_Staffordshire_England.html"
							   target="_blank"
							   rel="noreferrer">
								<StaticImage
									src="../../images/thirdparties/tripadvisor_footer.png"
									width={98}
									placeholder="none"
									loading="eager"
									layout="fixed"
									alt="" />
							</a>
						</div>
					</div>

					<StaticImage
						src="../../images/layout/heritage_culture_fund.png"
						width={306}
						height={59}
						placeholder="none"
						loading="eager"
						layout="fixed"
						alt="The National Lottery Heritage Fund | Historic England | Department for Digital, Culture, Media & Sport" />

					<div className={Styles.cookieCourtesy}>
						Ford Green Hall respects your privacy and does not use cookies on this website
					</div>
					<div className={Styles.footerRights}>
						Copyright © Ford Green Hall - All rights reserved
					</div>

				</div>
			</div>
		</footer>
	)
}

export default Footer