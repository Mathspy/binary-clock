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

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {now: moment()}
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

	render() {
		return (
			<div style={style}>
				<div style={{display: "flex", alignItems: "stretch"}}>
					{timeInBinary(this.state.now).map((column, i) =>
						<Column data={column} rightPad ={(i !== 1 && i !== 3) ? false : true} />
					)}
				</div>
			</div>
		);
	}
}