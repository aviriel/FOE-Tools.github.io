import { Enum } from "enumify";

class FormCheck extends Enum {}
FormCheck.initEnum(["VALID", "INVALID", "NO_CHANGE"]);

export default {
  /**
   * Enum of the different results of check
   */
  FormCheck,

  /**
   * Regex used to get duration. Groups:
   * - 2: years
   * - 4: months
   * - 6: days
   */
  regex_duration: /((\d+) years?)?\s*((\d+) months?)?\s*((\d+) days?)?/,

  /**
   * Convert a moment duration in string
   * @param duration {Duration} Duration to convert
   * @param i18next {i18next} Reference of i18next instance to translate in good locale
   */
  getFormatedDuration(duration, i18next) {
    let match = this.regex_duration.exec(
      duration.format("y [years] M [months] d [days]", 0, {
        useToLocaleString: false
      })
    );

    let result = "";
    let value;
    if (match[2] !== undefined) {
      value = parseInt(match[2]);
      if (value > 0) {
        result += i18next.t("utils.moment.year", { count: value });
      }
    }

    if (match[4] !== undefined) {
      value = parseInt(match[4]);
      if (value > 0) {
        result += result.length > 0 ? " " : "";
        result += i18next.t("utils.moment.month", { count: value });
      }
    }

    if (match[6] !== undefined) {
      value = parseInt(match[6]);
      if (value > 0) {
        result += result.length > 0 ? " " : "";
        result += i18next.t("utils.moment.day", { count: value });
      }
    }

    return result;
  },

  /**
   * Check if a value it's in range. Bound are include.
   *
   * @param value {number} Value to check
   * @param lowerBound {number} Lower bound
   * @param upperBound {number} Upper bound
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
   * ("<", "<=", ">", ">=", "==" or "===") or a number. The second is a number.
   * @param currentValue {number} The current value
   * @param comparator {Array} Array that contains two elements. The first is a string that corresponding to an operator
   * @param type {string} Type of the result value (must be 'int' or 'float')
   * @returns {object} Return an object that contains a "state" attribute for every cases (the type is {#FormCheck}),
   * and for VALID state, it return a "value" attribute.
   */
  checkFormNumeric(value, currentValue, comparator, type = "int") {
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

  /**
   * Split an array into sub-array
   * @param arrayList {Array} Array to split
   * @param chunck {number} Number of elements by sub-array
   * @param sameSize {boolean} True to fill the last sub-array with 'null' value to have the same size of others, False otherwise (default: False)
   * @returns {Array} Return an Array that contains @chunck sub-array
   */
  splitArray(arrayList, chunck, sameSize = false) {
    let result = [];

    for (let i = 0, j = arrayList.length; i < j; i += chunck) {
      result.push(arrayList.slice(i, i + chunck));
    }

    if (sameSize) {
      while (result[result.length - 1].length < chunck) {
        result[result.length - 1].push(null);
      }
    }

    return result;
  },

  /**
   * Get the date in a year
   * @returns {Date} Return current date plus one year
   */
  getDefaultCookieExpireTime() {
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date;
  },

  /**
   * Check if an form numeric element are valid.
   * @param ctx {object} Reference of the Vue context
   * @param key {string} Key of the element
   * @param value {number} Value to check
   * ("<", "<=", ">", ">=", "==" or "===") or a number. The second is a number.
   * @param currentValue {number} The current value
   * @param comparator {Array} Array that contains two elements. The first is a string that corresponding to an operator
   * @param saveCookie {boolean} Key used to save value in a cookie if valid
   * @param cookiePath {string} Path of the cookie
   * @param type {string} Type of the result value (must be 'int' or 'float')
   * @return {FormCheck} Return the state of the data ("VALID", "INVALID", "NO_CHANGE")
   */
  handlerForm(
    ctx,
    key,
    value,
    currentValue,
    comparator,
    saveCookie = false,
    cookiePath = "",
    type = "int"
  ) {
    let result = this.checkFormNumeric(value, currentValue, comparator, type);
    ctx.$data.errors[key] = result.state === FormCheck.INVALID;
    if (saveCookie && result.state === FormCheck.VALID) {
      ctx.$cookies.set(key, result.value, {
        path: cookiePath,
        expires: this.getDefaultCookieExpireTime()
      });
    }
    return result.state;
  },

  /**
   * Copyed here: https://stackoverflow.com/a/13542669
   * @param color {string} Color to shade/light with format: rga(red,green,blue)
   * @param {number} percent Percent to shade (between -1.0 (dark) and 1.0 (light))
   * @returns {string} Return shade color in same format that input
   */
  shadeRGBColor(color, percent) {
    const f = color.split(",");
    const t = percent < 0 ? 0 : 255;
    const p = percent < 0 ? percent * -1 : percent;
    const R = parseInt(f[0].slice(4), 10);
    const G = parseInt(f[1], 10);
    const B = parseInt(f[2], 10);
    return `rgb(${Math.round((t - R) * p) + R},${Math.round((t - G) * p) +
      G},${Math.round((t - B) * p) + B})`;
  }
};
