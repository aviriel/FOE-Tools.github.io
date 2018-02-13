import { expect } from "chai";
import data from "../../src/services/foe-gb-data";

describe("FOE Data", () => {

  it("generateReward", () => {

    let expected = { cost: 970, reward: [ 110, 55, 20, 5, 0 ] };

    let result = data.gbs.The_Arc.levels[9];

    expect(result).to.deep.equal(expected);
  });

});
