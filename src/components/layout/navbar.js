import * as React from "react";
import * as Styles from "./navbar.module.scss"
import { Link } from "gatsby";



class NavBar extends React.Component {
	constructor(props){
		super(props);

		this.onMoreButtonClicked = this.onMoreButtonClicked.bind(this);
		this.state = {
			secondaryVisible: false
		}
	}

	onMoreButtonClicked(e) {
		const secondaryVisible = !this.state.secondaryVisible;
		this.setState({ secondaryVisible })
	}

	render(){
		const moreButtonClassName = this.state.secondaryVisible ? Styles.expanded : undefined;
		const secondaryMenuClassName = this.state.secondaryVisible ? Styles.expanded : undefined;

		return (
			<div>
				<div className={Styles.main}>
					<Link to="/" activeClassName={Styles.active}>Home</Link>
					<Link to="/visit" activeClassName={Styles.active}>Visit</Link>
					<Link to="/history" className={Styles.overflow} activeClassName={Styles.active}>History</Link>
					<Link to="/inside" className={Styles.overflow} activeClassName={Styles.active}>Inside</Link>
					<Link to="/outside" className={Styles.overflow} activeClassName={Styles.active}>Outside</Link>
					<Link to="/virtual-tour" className={Styles.overflow} activeClassName={Styles.active}>Virtual Tour</Link>
					<Link to="/events" className={Styles.overflow} activeClassName={Styles.active}>Events</Link>
					<Link to="/weddings" className={Styles.overflow} activeClassName={Styles.active}>Weddings</Link>
					<Link to="/educational" className={Styles.overflow} activeClassName={Styles.active}>Educational</Link>
					<Link to="/links" className={Styles.overflow} activeClassName={Styles.active}>Links</Link>
					<Link to="/volunteers" className={Styles.overflow} activeClassName={Styles.active}>Volunteers</Link>
					<Link to="/contact" className={Styles.overflow} activeClassName={Styles.active}>Contact</Link>
					<a className={`${moreButtonClassName} ${Styles.more}`} onClick={this.onMoreButtonClicked}>More...</a>
				</div>
				<div className={`${secondaryMenuClassName} ${Styles.secondary}`}>
					<Link to="/history" activeClassName={Styles.active}>History</Link>
					<Link to="/inside" activeClassName={Styles.active}>Inside</Link>
					<Link to="/outside" activeClassName={Styles.active}>Outside</Link>
					<Link to="/virtual-tour" activeClassName={Styles.active}>Virtual Tour</Link>
					<Link to="/events" activeClassName={Styles.active}>Events</Link>
					<Link to="/weddings" activeClassName={Styles.active}>Weddings</Link>
					<Link to="/educational" activeClassName={Styles.active}>Educational</Link>
					<Link to="/links" activeClassName={Styles.active}>Links</Link>
					<Link to="/visit" activeClassName={Styles.active}>Volunteers</Link>
					<Link to="/contact" activeClassName={Styles.active}>Contact</Link>
				</div>
			</div>
		);
	}
}

export default NavBar