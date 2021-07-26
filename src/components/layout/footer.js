import * as React from "react";
import * as Styles from "./footer.module.scss"
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
	return (
		<footer>
			<div className={Styles.contact}>
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
							Find us on Facebook
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
							Follow us on Twitter
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
							Watch on Youtube
						</a>
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

					<div className={Styles.visitEngland}>
						<StaticImage
							src="../../images/thirdparties/visit_england.png"
							width={98}
							placeholder="none"
							loading="eager"
							layout="fixed"
							alt="" />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer