const { defaultCost, generateReward } = require("../utils");

module.exports = [
  { cost: 50, reward: generateReward(5) },
  { cost: 70, reward: generateReward(10) },
  { cost: 130, reward: generateReward(15) },
  { cost: 200, reward: generateReward(20) },
  { cost: 270, reward: generateReward(30) },
  { cost: 330, reward: generateReward(35) },
  { cost: 420, reward: generateReward(45) },
  { cost: 490, reward: generateReward(50) },
  { cost: 570, reward: generateReward(60) }
].concat(defaultCost);
