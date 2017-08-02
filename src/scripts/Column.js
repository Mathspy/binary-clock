import React from "react";

import Triangle from "./Triangle"
import Pulse from "./Pulse"
import Vroom from "./Vroom"

let reference = {
	"Vroom": Vroom,
	"Traingle": Triangle,
	"Pulse": Pulse
}

export default class Column extends React.Component {
	constructor() {
		super();
	}

	render() {
		let Shape = reference[this.props.shape]

		return (
			<div style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				marginRight: (this.props.rightPad ? "20px" : "0")
			}}>
				{this.props.data.map(on => <Shape on={on}/>)}
			</div>
		);
	}
}