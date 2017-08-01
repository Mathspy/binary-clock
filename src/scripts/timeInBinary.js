import moment from "moment"

export default function(time) {
	if (moment.isMoment(time)) {

	} else {
		throw new Error("Invalid time!")
	}
}