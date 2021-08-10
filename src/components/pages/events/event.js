import * as React from "react";
import * as Styles from "./event.module.scss"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

import { ics } from "calendar-link";
import format from 'date-fns/format';

const Event = ({title, description, startDate, endDate, date, image, children }) => {
	const event = {
		title: title,
		description: description,
		start: startDate,
		end: endDate
	}

	const dateString = startDate && endDate ? format(startDate, 'EEEE do MMMM h:mmaaa') + ' - ' + format(endDate, 'h:mmaaa') : date;

	return (
		<div className={Styles.container}>
			{image}
			<h2>{title}</h2>

			{children}

			<div className={Styles.date}>
				{startDate && endDate ?
					(<a download={`${title}.ics`} href={ics(event)}>{dateString} <FontAwesomeIcon icon={faCalendarAlt} /></a>)
					:
					(<span>{dateString}</span>)
				}
			</div>
		</div>
	)
}

export default Event