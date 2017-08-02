import React from "react";

export default class Vroom extends React.Component {
	constructor(props) {
		super(props);
		// this.classes="pulse"
		// this.state = {animation: true}
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (this.props.on !== nextProps.on) {
	// 		this.startAnimation(250)
	// 	}
	// }
	// startAnimation(duration) {
	// 	this.setState({animation: true})
	// 	setTimeout(() => this.setState({animation: false}), duration);
	// }

	render() {
		let color;
		// if (this.props.on) {
		// 	color = "#421C52";
		// } else {
		// 	color = "#732C7B";
		// }

		// if (this.state.animation) {
		// 	this.classes = "pulse"
		// } else {
		// 	this.classes = ""
		// }

		return (
			<div className={(this.props.on ? "circle vroom" : "circle")}>
				<div className="front"></div>
				<div className="back"></div>
			</div>
		);
	}
}

/*
	{
		width: 150,
		height: 150,
		backgroundColor: color,
		// transitionDuration: "1s",
		// transitionProperty: "color"
		// transitionTimingFunction: "ease-in-out",
	}
*/