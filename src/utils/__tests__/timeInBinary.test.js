import timeInBinary, { numberToBCD } from "../timeInBinary";

describe("timeInBinary", () => {
  it("throw if no date  or nothing was passed", () => {
    expect(() => timeInBinary()).toThrow();
    expect(() => timeInBinary("test")).toThrow();
    expect(() => timeInBinary(123)).toThrow();
    expect(() => timeInBinary(new Date())).not.toThrow();
  });

  it("should return correct output, if given time", () => {
    let exactly5 = new Date("1970-01-01T05:00:00");
    expect(timeInBinary(exactly5)).toEqual([
      [[false, false], [false, true, false, true]],
      [[false, false, false], [false, false, false, false]],
      [[false, false, false], [false, false, false, false]],
    ]);

    let time123456 = new Date("1970-01-01T12:34:56");
    expect(timeInBinary(time123456)).toEqual([
      [[false, true], [false, false, true, false]],
      [[false, true, true], [false, true, false, false]],
      [[true, false, true], [false, true, true, false]],
    ]);

    let lastSecondOfDay = new Date("1970-01-01T23:59:59");
    expect(timeInBinary(lastSecondOfDay)).toEqual([
      [[true, false], [false, false, true, true]],
      [[true, false, true], [true, false, false, true]],
      [[true, false, true], [true, false, false, true]],
    ]);

    let unixEpoch = new Date("1970-01-01T00:00:00");
    expect(timeInBinary(unixEpoch)).toEqual([
      [[false, false], [false, false, false, false]],
      [[false, false, false], [false, false, false, false]],
      [[false, false, false], [false, false, false, false]],
    ]);
  });
});

describe("numberToBCD", () => {
  it("should return correctly padded arrays", () => {
    expect(numberToBCD(5, 7)).toEqual([
      [false, false, false],
      [false, true, false, true],
    ]);

    expect(numberToBCD(19, 6)).toEqual([
      [false, true],
      [true, false, false, true],
    ]);
  });

  it("should return only correct length otherwise", () => {
    expect(numberToBCD(5)).toEqual([[true, false, true]]);

    expect(numberToBCD(19)).toEqual([[true], [true, false, false, true]]);
  });
});
