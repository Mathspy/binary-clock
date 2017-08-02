import timeInBinary from "../timeInBinary"

import moment from "moment"

describe("timeInBinary", () => {
	test("throw if no-moment/nothing was passed", () => {
		expect(() => timeInBinary()).toThrow()
		expect(() => timeInBinary(moment())).not.toThrow()
	})

	test("if given time, returns correct output", () => {
		let its5 = moment("05:35:07", "HH:mm:ss")
		expect(timeInBinary(its5)).toEqual([[false, false], [false, true, false, true], [false, true, true], [false, true, false, true], [false, false, false], [false, true, true, true]])

		let timegoesfast = moment("23:59:59", "HH:mm:ss")
		expect(timeInBinary(timegoesfast)).toEqual([[true, false], [false, false, true, true], [true, false, true], [true, false, false, true], [true, false, true], [true, false, false, true]])

		let goodwork = moment("00:00:00", "HH:mm:ss")
		expect(timeInBinary(goodwork)).toEqual([[false, false], [false, false, false, false], [false, false, false], [false, false, false, false], [false, false, false], [false, false, false, false]])
	})
})

/*
To-do-list:
-timeInBinary:-
	>seprate hour/minute/second from time
	>recurrsively transform each of them into two arrays

*/