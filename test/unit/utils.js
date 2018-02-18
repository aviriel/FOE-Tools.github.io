import { expect } from "chai";
import utils from "../../src/services/utils";

describe("Utils", () => {

  describe("inRange", () => {
    let expecteds = [
      {params: {input: 5, lowerBound:0, upperBound: 10}, expect: true},
      {params: {input: 12, lowerBound:0, upperBound: 10}, expect: false}
    ];

    for (let expected of expecteds) {
      it("Check if '" + expected.params.input + " in [" + expected.params.lowerBound + ";" + expected.params.upperBound +
        "] (expect " + (expected.expect ? 'true' : 'false') + ")", () => {
        let result = utils.inRange(expected.params.input, expected.params.lowerBound, expected.params.upperBound);
        expect(result).to.equal(expected.expect);
      });
    }
  });

  describe("checkFormNumeric", () => {
    let expecteds = [
      {params: {value: '10', comparator: ['<', 15], currentValue: 9}, expect: utils.FormCheck.VALID, expect_value: 10},
      {params: {value: '10.0', comparator: ['<', 15.0], currentValue: 9.0, type: 'float'}, expect: utils.FormCheck.VALID, expect_value: 10},
      {params: {value: '10', comparator: [5, 15], currentValue: 9}, expect: utils.FormCheck.VALID, expect_value: 10},
      {params: {value: '10', comparator: ['>=', 15], currentValue: 15}, expect: utils.FormCheck.INVALID},
      {params: {value: '10', comparator: ['<', 15], currentValue: 10}, expect: utils.FormCheck.NO_CHANGE},
    ];

    for (let expected of expecteds) {
      let result;
      if (expected.params.type !== undefined) {
        result = utils.checkFormNumeric(expected.params.value, expected.params.comparator, expected.params.currentValue, expected.params.type);
      } else {
        result = utils.checkFormNumeric(expected.params.value, expected.params.comparator, expected.params.currentValue);
      }

      it("For input '" + expected.params.value + "' with the comparator " + expected.params.comparator[0] + " " +
        expected.params.comparator[1] + " and the current value " + expected.params.currentValue + ", we expect " +
        expected.expect + " state", () => {
        expect(result.state).to.equal(expected.expect);
      });

      if (expected.expect === utils.FormCheck.VALID) {
        it("For input '" + expected.params.value + "' with the comparator " + expected.params.comparator[0] + " " +
          expected.params.comparator[1] + " and the current value " + expected.params.currentValue +
          ", checking the returned value (the number)", () => {
          expect(result.value).to.equal(expected.expect_value);
        });
      }
    }
  });

});
