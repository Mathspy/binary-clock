import moment from "moment"
import leftPad from "left-pad"

export default function(time) {
	if (moment.isMoment(time)) {
		return [time.hour(), time.minute(), time.second()].map(BCD)
	} else {
		throw new Error("Invalid time!")
	}
}

function BCD(time) {
	return leftPad(time.toString(), 2, "0").split("")
}