import moment from "moment"
import leftPad from "left-pad"

export default function(time) {
	if (moment.isMoment(time)) {
		let timeInBCD =  [time.hour(), time.minute(), time.second()].map(splitAndPad)
		timeInBCD[0][0] = timeInBCD[0][0].substring(2)
		timeInBCD[1][0] = timeInBCD[1][0].substring(1)
		timeInBCD[2][0] = timeInBCD[2][0].substring(1)
		return timeInBCD
	} else {
		throw new Error("Invalid time!")
	}
}

function splitAndPad(time) {
	return leftPad(time.toString(), 2, "0").split("").map(BCD)
}

function BCD(decimal) {
	return leftPad(parseInt(decimal).toString(2), 4, "0")
}