import * as React from "react";
import * as Styles from "./event.module.scss"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

import format from 'date-fns/format';
import {useEffect, useState} from "react";

const Event = ({title, description, startDate, endDate, date, image, children }) => {
	const event = {
		title: title,
		description: description,
		start: startDate,
		end: endDate
	}

	const hideFrom = endDate ? new Date(endDate.getTime() + 43200000) : null;
	const [isVisible, setIsVisible] = useState(!hideFrom || hideFrom >= Date.now());

	useEffect(() => {
		setIsVisible(!hideFrom || hideFrom >= Date.now());
	}, []);

	const dateString = startDate && endDate ? format(startDate, 'EEEE do MMMM h:mmaaa') + ' - ' + format(endDate, 'h:mmaaa') : date;

	return (
		isVisible ?
			<div className={Styles.container}>
				{image}
				<h2>{title}</h2>

				{children}

				<div className={Styles.date}>
					<span>{dateString}</span>
				</div>
			</div>
		: null
	)
}

export default Event