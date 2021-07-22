import * as React from "react";
import * as Styles from "./footer.module.scss"
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
	return (
		<footer className={Styles.main}>
			<div className="constrainedContent">
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
			</div>
		</footer>
	)
}

export default Footer