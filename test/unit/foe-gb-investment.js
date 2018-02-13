import { expect } from "chai";
import gbProcess from "../../src/services/foe-gb-investment";

describe("FOE GB Investment", () => {

  const investorPercentage = [90.0, 90.0, 90.0, 90.0, 90.0];

  const mockGB = [
    { cost: 970, reward: [110, 55, 20, 5, 0] }
  ];

  it("Get reward for GB with an investor percentage of " + 90 + ", level cost of " + mockGB[0].cost +
    " and reward " + JSON.stringify(mockGB[0].reward), () => {

    let expected = { cost: 970,
      investment: [
          { reward: 110, participation: 209, preparation: 552 },
          { reward: 55, participation: 105, preparation: 551 },
          { reward: 20, participation: 38, preparation: 580 },
          { reward: 5, participation: 10, preparation: 598 },
          { reward: 0, participation: 0, preparation: 608 }
        ],
      totalPreparations: 608,
      level: 1
    };

    let result = gbProcess.Submit(1, investorPercentage, mockGB);

    expect(result).to.deep.equal(expected);
  });

});
