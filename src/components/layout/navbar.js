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
					<div className={Styles.column}>
						<Link to="/" state={{ internal: true }} partiallyActive={false} activeClassName={Styles.active}>Home</Link>
						<Link to="/visit" partiallyActive={true} activeClassName={Styles.active}>Visit</Link>
						<Link to="/history" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>History</Link>
						<Link to="/inside" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Inside</Link>
						<Link to="/outside" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Outside</Link>
						<Link to="/virtual-tour" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Virtual Tour</Link>
						<a className={`${moreButtonClassName} ${Styles.more}`} onClick={this.onMoreButtonClicked}>More...</a>
					</div>
					<div className={Styles.column}>
						<Link to="/events" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Events</Link>
						<Link to="/weddings" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Weddings</Link>
						<Link to="/educational" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Educational</Link>
						<Link to="/links" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Links</Link>
						<Link to="/volunteers" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Volunteers</Link>
						<Link to="/contact" partiallyActive={true} className={Styles.overflow} activeClassName={Styles.active}>Contact</Link>
					</div>
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
					<Link to="/volunteers" activeClassName={Styles.active}>Volunteers</Link>
					<Link to="/contact" activeClassName={Styles.active}>Contact</Link>
				</div>
			</div>
		);
	}
}

export default NavBar