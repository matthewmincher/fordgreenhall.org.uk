import * as React from "react";
import * as Styles from "./hero.module.scss"
import {StaticImage} from "gatsby-plugin-image";
import {useEffect, useState} from "react";

const Hero = ({ skipAnimation }) => {
	const [isShown, setIsShown] = useState(false)
	const [isDone, setIsDone] = useState(false);



	useEffect(() => {
		if(!skipAnimation){
			setTimeout(() => {
				setIsShown(true);

				setTimeout(() => {
					setIsDone(true)
				}, 3000)
			}, 3000);
		} else {
			setIsShown(true);
			setIsDone(true);
		}
	}, [skipAnimation])

	const containerClasses = isShown ? Styles.active + (isDone ? " " + Styles.done : "") : ""

	return (
		<div className="constrainedContent">
			<div className={`${Styles.container} ${containerClasses}`}>
				<StaticImage
					src="../../../images/copy/index/interior_large.jpg"
					placeholder="none"
					loading="eager"
					layout="fullWidth"
					alt="" />

				<div className={Styles.text}>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 600 100"
						preserveAspectRatio="xMinYMin meet">
						<foreignObject width="100%" height="100%" xmlns="http://www.w3.org/1999/xhtml">
							<div xmlns="http://www.w3.org/1999/xhtml">
								<h1>Where History Comes Alive</h1>
							</div>
						</foreignObject>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Hero