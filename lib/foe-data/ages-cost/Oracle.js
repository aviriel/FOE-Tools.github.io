const { defaultCost, generateReward } = require("../utils");

module.exports = [
  { cost: 20, reward: generateReward(5) },
  { cost: 40, reward: generateReward(10) },
  { cost: 60, reward: generateReward(15) },
  { cost: 130, reward: generateReward(20) },
  { cost: 210, reward: generateReward(30) },
  { cost: 290, reward: generateReward(35) },
  { cost: 370, reward: generateReward(45) },
  { cost: 460, reward: generateReward(50) },
  { cost: 550, reward: generateReward(60) }
].concat(defaultCost);
