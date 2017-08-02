import React from "react";
import moment from "moment";

import timeInBinary from "./timeInBinary"
import Column from "./Column"

let style = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100vw",
	height: "100vh",
}

let buttonStyle = {
	margin: "10px",
	color: "black",
	textDecorationStyle: "dotted",
	fontFamily: "sans-serif",
	fontSize: "15px",
}

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {now: moment(), shape: "Vroom"}
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			now: moment()
		});
	}

	changeShape(newShape) {
		return () => this.setState({shape: newShape})
	}

	render() {
		return (
			<div>
				<div style={{position:"fixed", right:"0"}}>
					<a onClick={this.changeShape("Traingle")} style={buttonStyle} href="#">Traingly</a>
					<a onClick={this.changeShape("Vroom")} style={buttonStyle} href="#">Vroom</a>
					<a onClick={this.changeShape("Pulse")} style={buttonStyle} href="#">Pulse</a>
				</div>
				<div style={style}>
					<div style={{display: "flex", alignItems: "stretch"}}>
						{timeInBinary(this.state.now).map((column, i) =>
							<Column shape={this.state.shape} data={column} rightPad ={(i !== 1 && i !== 3) ? false : true} />
						)}
					</div>
				</div>
			</div>
		);
	}
}