import timeInBinary from "../timeInBinary"

import moment from "moment"

describe("timeInBinary", () => {
	test("throw if no-moment/nothing was passed", () => {
		expect(() => timeInBinary()).not.toThrow()
	})
})