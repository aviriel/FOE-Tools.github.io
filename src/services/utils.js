import { Enum } from "./enumify";

class FormCheck extends Enum {}
FormCheck.initEnum(["VALID", "INVALID", "NO_CHANGE"]);

export default {
  /**
   * Enum of the different results of check
   */
  FormCheck: FormCheck,

  /**
   * Check if a value it's in range. Bound are include.
   *
   * @param value Value to check
   * @param lowerBound Lower bound
   * @param upperBound Upper bound
   * @returns {boolean} Return true if the value it's in range, false otherwise
   */
  inRange(value, lowerBound, upperBound) {
    if (lowerBound > upperBound) {
      return value >= upperBound && value <= lowerBound;
    }
    return value >= lowerBound && value <= upperBound;
  },

  /**
   * Check if an value is valid
   *
   * @param value {number} Value to check
   * @param comparator {Array} Array that contains two elements. The first is a string that corresponding to an operator
   * ("<", "<=", ">", ">=", "==" or "===") or a number. The second is a number.
   * @param currentValue {number} The current value
   * @param type {string} Type of the result value (must be 'int' or 'float')
   * @returns {object} Return an object that contains a "state" attribute for every cases (the type is {#FormCheck}),
   * and for VALID state, it return a "value" attribute.
   */
  checkFormNumeric(value, comparator, currentValue, type = "int") {
    let valid = false;

    if (!isNaN(value)) {
      let resultValue;
      switch (type.toLowerCase()) {
        case "int":
          resultValue = parseInt(value);
          break;
        case "float":
          resultValue = parseFloat(value);
          break;
        default:
          throw new Error(
            'Unexpected type for parameter "type" in checkFormNumeric.'
          );
      }

      if (comparator instanceof Array) {
        if (comparator.length !== 2) {
          throw new Error(
            'Unexpected size array for parameter "comparator" in checkFormNumeric. The comparator array must contain only two numbers.'
          );
        } else if (
          typeof comparator[0] === typeof comparator[1] &&
          typeof comparator[0] === "number"
        ) {
          valid = this.inRange(value, comparator[0], comparator[1]);
        } else if (
          typeof comparator[0] === "string" &&
          typeof comparator[1] === "number"
        ) {
          switch (comparator[0]) {
            case "<":
              valid = resultValue < comparator[1];
              break;
            case "<=":
              valid = resultValue <= comparator[1];
              break;
            case ">":
              valid = resultValue > comparator[1];
              break;
            case ">=":
              valid = resultValue >= comparator[1];
              break;
            case "==":
              valid = resultValue == comparator[1];
              break;
            case "===":
              valid = resultValue === comparator[1];
              break;
            default:
              throw new Error(
                'Unexpected value for parameter "comparator" in checkFormNumeric. Expected a string version of number comparator: "<", "<=", ">", ">=", "==" or "===".'
              );
          }
        } else {
          throw new Error(
            'Unexpected value for parameter "comparator" in checkFormNumeric. The comparator array must contain a number or a string for the fist element and a number for the second.'
          );
        }
      } else {
        throw new Error(
          'Unexpected type for parameter "comparator" in checkFormNumeric. Expect array, found ' +
            typeof comparator +
            "."
        );
      }

      if (valid) {
        if (resultValue !== currentValue) {
          return { state: FormCheck.VALID, value: resultValue };
        }
      }
    }

    if (!valid) {
      return { state: FormCheck.INVALID };
    }

    return { state: FormCheck.NO_CHANGE };
   },

   makeIterator(byLine) {
      let fn = function(arrayList, callback) {
         const BY_LINE = byLine;
         let i         = 0;
         let result    = [];

         for (let gb in arrayList) {
            result[i % BY_LINE] = arrayList[gb];
            if ((i % BY_LINE) === (BY_LINE - 1)) {
               callback(result);
               for (let j = 0; j < result.length; j++) { result[j] = null; }
            }
            i++;
         }

         if ((result[0] !== null) && (result[result.length - 1] === null)) {
            callback(result);
         }
      };
      return fn;
   }
};
