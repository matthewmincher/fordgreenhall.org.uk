import React from "react";


const date = new Date(), month = date.getMonth(), day = date.getDate(),
	isChristmas = month === 11 && day >= 18 && day <= 31;

export const ThemeContext = React.createContext();
export class ThemeContextProvider extends React.Component {
	state = {
		isChristmas: isChristmas
	}

	render() {
		return (
			<ThemeContext.Provider value={this.state}>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}
}