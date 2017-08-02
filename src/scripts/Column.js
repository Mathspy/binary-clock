import React from "react";

import Triangle from "./Triangle"

export default class Column extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				marginRight: (this.props.rightPad ? "20px" : "0")
			}}>
				{this.props.data.map(on => <Triangle on={on}/>)}
			</div>
		);
	}
}