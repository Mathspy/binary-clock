import { isDate, getSeconds, getMinutes, getHours } from "date-fns";
import leftPad from "left-pad";

/**
 * @name timeInBinary
 * @summary A function that takes a date and converts it an array of arrays of arrays of booleans representing the number's BCD (Binary Coded Decimal) value. [hours, minutes, seconds]
 * @function
 * @param {Date} date - A number to convert to BCD.
 * @returns {Boolean[][][]} The returned array [hours, minutes, seconds] BCD value arrays.
 * @throws {TypeError}
 * @example
 * timeInBinary(new Date("1970-01-01T12:34:56"));
 * // returns [
 * //   [[false, true], [false, false, true, false]],
 * //   [[false, true, true], [false, true, false, false]],
 * //   [[true, false, true], [false, true, true, false]],
 * // ]
 */
export default function timeInBinary(date) {
  if (isDate(date)) {
    return [
      numberToBCD(getHours(date), 6),
      numberToBCD(getMinutes(date), 7),
      numberToBCD(getSeconds(date), 7),
    ];
  } else {
    throw TypeError("Invalid Date");
  }
}

/**
 * @name numberToBCD
 * @summary A function that takes a number and converts it an array of arrays of booleans representing the number's BCD (Binary Coded Decimal) value.
 * @function
 * @param {Number} num - A number to convert to BCD.
 * @param {Number} [length] - Return a BCD with given length if BCD's length is smaller than it.
 * @returns {Boolean[][]} The returned array of arrays representing BCD values.
 * @example
 * numberToBCD(19, 6);
 * // returns [[false, true], [true, false, false, true]]
 */
export function numberToBCD(num, length) {
  return leftPad((((num / 10) << 4) + (num % 10)).toString(2), length, "0")
    .split("")
    .map(stringNum => Boolean(Number(stringNum)))
    .reduceRight(
      (accumulator, x) => {
        if (accumulator[0].length < 4) {
          accumulator[0] = [x, ...accumulator[0]];
        } else {
          accumulator = [[x], ...accumulator];
        }
        return accumulator;
      },
      [[]]
    );
}
