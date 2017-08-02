import React from "react";

// let style = {
// 	backgroundColor: "purple",
// 	width: "150px",
// 	height: "150px"
// }

export default class Dot extends React.Component {
	constructor(props) {
		super(props);
		if (this.props.on) {
			this.rotation = 0;
		} else {
			this.rotation = 180;
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.on !== nextProps.on) {
			this.rotation += 180
		}
	}

	render() {
		let color;
		if (this.props.on) {
			color = "#129793";
		} else {
			color = "#505050";
		}

		return (
			<div style={{
				width: 0,
				height: 0,
				borderLeft: "75px solid transparent",
				borderRight: "75px solid transparent",

				borderBottom: "129.88px solid " + color,
				transitionProperty: "transform border-bottom",
				transitionDuration: "1s",
				transitionTimingFunction: "ease-in-out",
				transform: `rotate(${this.rotation}deg)`
			}}></div>
		);
	}
}