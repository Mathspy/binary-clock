import timeInBinary from "../timeInBinary"

import moment from "moment"

describe("timeInBinary", () => {
	test("throw if no-moment/nothing was passed", () => {
		expect(() => timeInBinary()).toThrow()
		expect(() => timeInBinary(moment())).not.toThrow()
	})

	test("if given time, returns [hh, mm, ss]", () => {
		let its5 = moment("05:35:07", "HH:mm:ss")
		expect(timeInBinary(its5)).toEqual([["0", "5"], ["3", "5"], ["0", "7"]])

		let timegoesfast = moment("23:59:59", "HH:mm:ss")
		expect(timeInBinary(timegoesfast)).toEqual([["2", "3"], ["5", "9"], ["5", "9"]])

		let goodwork = moment("00:00:00", "HH:mm:ss")
		expect(timeInBinary(goodwork)).toEqual([["0", "0"], ["0", "0"], ["0", "0"]])
	})
})

/*
To-do-list:
-timeInBinary:-
	>seprate hour/minute/second from time
	>recurrsively transform each of them into two arrays

*/