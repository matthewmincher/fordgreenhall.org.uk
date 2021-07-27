import * as React from "react"
import Layout from "../components/layout/layout";
import {StaticImage} from "gatsby-plugin-image";

import * as Styles from "./inside.module.scss"
import {useState} from "react";
import Lightbox from "../components/pages/inside/lightbox";


import ImageLargeParlour from "../images/copy/inside/parlour_large.jpg"
import ImageLargeHall from "../images/copy/inside/hall_large.jpg"
import ImageLargeKitchen from "../images/copy/inside/kitchen_large.jpg"
import ImageLargeExhibition from "../images/copy/inside/exhibition_large.jpg"
import ImageLargeButtery from "../images/copy/inside/buttery_chamber_large.jpg"
import ImageLargeHallChamber from "../images/copy/inside/hall_chamber_large.jpg"
import ImageLargeParlourChamber from "../images/copy/inside/parlour_chamber_large.jpg"

const LargeImages = {
	parlour: {
		src: ImageLargeParlour,
		width: 267,
		height: 400,
		next: "hall",
		label: "Parlour"
	},
	hall: {
		src: ImageLargeHall,
		width: 600,
		height: 400,
		next: "kitchen",
		prev: "parlour",
		label: "Main Hall"
	},
	kitchen: {
		src: ImageLargeKitchen,
		width: 600,
		height: 400,
		next: "exhibition",
		prev: "hall",
		label: "Kitchen"
	},
	exhibition: {
		src: ImageLargeExhibition,
		width: 267,
		height: 400,
		prev: "kitchen",
		label: "Exhibition Room"
	},
	buttery: {
		src: ImageLargeButtery,
		width: 600,
		height: 400,
		label: "Buttery Chamber",
		next: "parlour_chamber"
	},
	parlour_chamber: {
		src: ImageLargeParlourChamber,
		width: 600,
		height: 400,
		label: "Parlour Chamber",
		next: "hall_chamber",
		prev: "buttery"
	},
	hall_chamber: {
		src: ImageLargeHallChamber,
		width: 600,
		height: 400,
		label: "Hall Chamber",
		prev: "parlour_chamber"
	}
}



const InsidePage = () => {
	const [lightboxImage, setLightboxImage] = useState(null);

	const onThumbnailClicked = (imageKey) => {
		setLightboxImage(LargeImages[imageKey])
	};
	const onCloseAction = () => {
		setLightboxImage(null)
	}
	const onNextAction = (key) => {
		setLightboxImage(LargeImages[key])
	}
	const onPrevAction = (key) => {
		setLightboxImage(LargeImages[key])
	}

	return (
		<Layout pageTitle="Inside">
			<div className={`constrainedContent ${Styles.container}`}>
				<div className={Styles.padded}>
					<h1>Inside</h1>

					<h2>Ground Floor</h2>
					<p className={Styles.copy}><strong>The Hall</strong> was the most important room of the house. Originally much of the cooking would have been carried out over the hearth in this room, and the family would also have eaten their meals here.</p>
					<p className={Styles.copy}><strong>The Parlour</strong> was originally used as both principal bedroom and sitting-room. This arrangement was quite common in houses of the 16th and 17th centuries, when the parlour contained the best and most expensive items of furniture, including the best bed.</p>
					<p className={Styles.copy}><strong>The Kitchen</strong> is in the larger brick wing added to the house in the 1730's. By this time it had become fashionable to have a separate room devoted to the cooking and food preparation. The room is furnished mainly with articles from the 18th and 19th centuries.</p>
					<p className={Styles.copy}><strong>The Porch</strong> is a later addition, built c. 1630 - 50 when it was fashionable to add an imposing entrance to your house. It also gave added privacy and prevented draughts.</p>

				</div>
				<div className={Styles.planContainer}>
					<div className={`styledScrolling ${Styles.planScroller}`}>
						<div style={{position: "relative"}}>
							<StaticImage
								src="./../images/copy/inside/ground_floor.png"
								alt="TODO"
								placeholder="none"
								layout="fixed"
								loading="eager"
							/>

							<div className={Styles.thumb} style={{top: "270px", left: "395px"}} onClick={() => onThumbnailClicked("parlour")}>
								<StaticImage
									className={Styles.thumb}
									src="./../images/copy/inside/parlour_thumb.png"
									alt="TODO"
									placeholder="none"
									layout="fixed"
									loading="eager"

								/>
							</div>
							<div className={Styles.thumb} style={{top: "204px", left: "670px"}} onClick={() => onThumbnailClicked("hall")}>
								<StaticImage
									className={Styles.thumb}
									src="./../images/copy/inside/hall_thumb.png"
									alt="TODO"
									placeholder="none"
									layout="fixed"
									loading="eager"

								/>
							</div>
							<div className={Styles.thumb} style={{top: "186px", left: "926px"}} onClick={() => onThumbnailClicked("kitchen")}>
								<StaticImage
									className={Styles.thumb}
									src="./../images/copy/inside/kitchen_thumb.png"
									alt="TODO"
									placeholder="none"
									layout="fixed"
									loading="eager"

								/>
							</div>
							<div className={Styles.thumb} style={{top: "345px", left: "926px"}} onClick={() => onThumbnailClicked("exhibition")}>
								<StaticImage
									className={Styles.thumb}
									src="./../images/copy/inside/exhibition_thumb.png"
									alt="TODO"
									placeholder="none"
									layout="fixed"
									loading="eager"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className={Styles.padded}>
					<h2>Upstairs</h2>
					<p className={Styles.copy}><strong>The Hall Chamber</strong> was originally used as a bedroom, and at the time of Hugh Ford's death in 1712 it contained 3 beds. The household at Ford Green was often a large one, so that it was necessary to make maximum use of all available space.</p>
					<p className={Styles.copy}><strong>The Parlour Chamber</strong> is now used as a workroom for spinning and embroidery but in 1712 it was a bedroom containing 3 beds. A section of the wall has been cut away to show the original wattle and daub which was used as filling between the timbers.</p>
					<p className={Styles.copy}><strong>The Buttery Chamber</strong> is so called because of its position above what was once the buttery. Originally used as a bedroom, the simple bedstead is a copy of the type of beds which most of the household at Ford Green would have slept in.</p>
					<p className={Styles.copy}><strong>The Porch Chamber</strong> is now displayed as a study, but was also used at different periods as a dressing-room, and for storage.</p>
				</div>

				<div className={Styles.planContainer}>
					<div className={`styledScrolling ${Styles.planScroller}`}>
						<div style={{position: "relative"}}>
							<StaticImage
								src="./../images/copy/inside/first_floor.png"
								alt="TODO"
								placeholder="none"
								layout="fixed"
								loading="eager"
							/>

							<div className={Styles.thumb} style={{top: "10px", left: "90px"}} onClick={() => onThumbnailClicked("buttery")}>
								<StaticImage
									className={Styles.thumb}
									src="./../images/copy/inside/buttery_thumb.png"
									alt="TODO"
									placeholder="none"
									layout="fixed"
									loading="eager"

								/>
							</div>
							<div className={Styles.thumb} style={{top: "238px", left: "145px"}} onClick={() => onThumbnailClicked("parlour_chamber")}>
								<StaticImage
									className={Styles.thumb}
									src="./../images/copy/inside/parlour_chamber_thumb.png"
									alt="TODO"
									placeholder="none"
									layout="fixed"
									loading="eager"

								/>
							</div>
							<div className={Styles.thumb} style={{top: "158px", left: "433px"}} onClick={() => onThumbnailClicked("hall_chamber")}>
								<StaticImage
									className={Styles.thumb}
									src="./../images/copy/inside/hall_chamber_thumb.png"
									alt="TODO"
									placeholder="none"
									layout="fixed"
									loading="eager"

								/>
							</div>
						</div>
					</div>
				</div>
			</div>


			<Lightbox image={lightboxImage} onCloseAction={onCloseAction} onNextAction={onNextAction} onPrevAction={onPrevAction} />
		</Layout>
	)
}

export default InsidePage
