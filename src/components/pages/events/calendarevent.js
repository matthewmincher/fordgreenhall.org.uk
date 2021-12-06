import * as React from "react";
import * as Styles from "./calendarevent.module.scss"

import {useEffect, useState, useMemo} from "react";
import {StaticImage} from "gatsby-plugin-image";
import format from "date-fns/format";

export default function CalendarEvent({ title, image, description, facebookUrl, startDate, endDate, datePrefix, dateDayPart, dateMonthPart, dateTimePart }) {

	const hideFrom = useMemo(() => endDate ? new Date(endDate.getTime() + 43200000) : null, [endDate]);
	const [isVisible, setIsVisible] = useState(!hideFrom || hideFrom >= Date.now());

	useEffect(() => {
		setIsVisible(!hideFrom || hideFrom >= Date.now());
	}, [hideFrom]);

	if(!dateDayPart && (startDate || endDate)){
		dateDayPart = format(startDate ?? endDate, 'do');
	}
	if(!dateMonthPart && (startDate || endDate)){
		dateMonthPart = format(startDate ?? endDate, 'MMMM');
	}
	if(!dateTimePart && (startDate || endDate)){
		dateTimePart = format(startDate ?? endDate, 'h:mmaaa')

		if(startDate && endDate){
			dateTimePart += ' - ' + format(endDate, 'h:mmaaa');
		}
	}

	return (
		isVisible ?
		<div className={Styles.container}>
			<div className={Styles.left}>
				{datePrefix &&
					<div className={Styles.prefix}>{datePrefix}</div>
				}

				{dateDayPart &&
					<div className={Styles.day}>{dateDayPart}</div>
				}

				{dateMonthPart &&
					<div className={Styles.month}>{dateMonthPart}</div>
				}

				{dateTimePart &&
					<div className={Styles.time}>{dateTimePart}</div>
				}
			</div>
			<div className={Styles.right}>
				<div className={Styles.title}>
					{title}
				</div>
				{image &&
					<div className={Styles.image}>
						{image}
					</div>
				}

				<div className={Styles.description}>
					{description}
				</div>

				<div className={Styles.facebookSpacer} />

				{facebookUrl &&
					<a target="_blank" rel="noreferrer" href={facebookUrl} className={Styles.facebookLink} title="See this event on Facebook">
						<StaticImage
							src="../../../images/social/f_logo_RGB-Black_100.png"
							alt="Facebook logo"
							placeholder="none"
							layout="fixed"
							loading="eager"
							width={25}
						/>
					</a>
				}
			</div>
		</div> : null
	)
}
