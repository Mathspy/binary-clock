import timeInBinary from "../timeInBinary"

import moment from "moment"

describe("timeInBinary", () => {
	test("throw if no-moment/nothing was passed", () => {
		expect(() => timeInBinary()).toThrow()
		expect(() => timeInBinary(moment())).not.toThrow()
	})

	test("if given time, returns [hh, mm, ss]", () => {
		let its5 = moment("05:35:07", "HH:mm:ss")
		expect(timeInBinary(its5)).toEqual([["00", "0101"], ["011", "0101"], ["000", "0111"]])

		let timegoesfast = moment("23:59:59", "HH:mm:ss")
		expect(timeInBinary(timegoesfast)).toEqual([["10", "0011"], ["101", "1001"], ["101", "1001"]])

		let goodwork = moment("00:00:00", "HH:mm:ss")
		expect(timeInBinary(goodwork)).toEqual([["00", "0000"], ["000", "0000"], ["000", "0000"]])
	})
})

/*
To-do-list:
-timeInBinary:-
	>seprate hour/minute/second from time
	>recurrsively transform each of them into two arrays

*/