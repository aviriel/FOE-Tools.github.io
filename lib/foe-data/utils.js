/**
 * Rounds one number to the nearest integer multiple of another
 *
 * @param value {number} The number to round to the nearest integer multiple of another
 * @param factor {number} The number to whose multiples value will be rounded
 * @returns {number} Return the rounded value
 */
function mround(value, factor) {
  return Math.round(value / factor) * factor;
}

/**
 * Generate reward for all of the first 5 places
 *
 * @param firstRankReward {number} Reward of the first place
 * @returns {*[]} Return an array of number
 */
function generateReward(firstRankReward) {
  let result = [firstRankReward];

  result[result.length] = mround(result[result.length - 1] / 2, 5);
  result[result.length] = mround(result[result.length - 1] / 3, 5);
  result[result.length] = mround(result[result.length - 1] / 4, 5);
  result[result.length] = mround(result[result.length - 1] / 5, 5);

  return result;
}

/**
 * Default Ages GB cost (for no age and HMA)
 * @type {*[]} Return array of cost that contains an object with:
 * - cost {number}: level cost
 * - reward {Array}: Array of 5 integer value that represent the reward (in FP) of the first five places
 */
const defaultCost = [
  { cost: 650, reward: generateReward(65) },
  { cost: 667, reward: generateReward(75) },
  { cost: 683, reward: generateReward(85) },
  { cost: 700, reward: generateReward(95) },
  { cost: 718, reward: generateReward(100) },
  { cost: 736, reward: generateReward(110) },
  { cost: 754, reward: generateReward(120) },
  { cost: 773, reward: generateReward(130) },
  { cost: 792, reward: generateReward(140) },
  { cost: 812, reward: generateReward(150) },
  { cost: 833, reward: generateReward(155) },
  { cost: 853, reward: generateReward(165) },
  { cost: 875, reward: generateReward(175) },
  { cost: 897, reward: generateReward(185) },
  { cost: 919, reward: generateReward(195) },
  { cost: 942, reward: generateReward(205) },
  { cost: 965, reward: generateReward(215) },
  { cost: 990, reward: generateReward(225) },
  { cost: 1014, reward: generateReward(235) },
  { cost: 1040, reward: generateReward(245) },
  { cost: 1066, reward: generateReward(255) },
  { cost: 1092, reward: generateReward(265) },
  { cost: 1120, reward: generateReward(275) },
  { cost: 1147, reward: generateReward(285) },
  { cost: 1176, reward: generateReward(300) },
  { cost: 1206, reward: generateReward(310) },
  { cost: 1236, reward: generateReward(320) },
  { cost: 1267, reward: generateReward(330) },
  { cost: 1298, reward: generateReward(340) },
  { cost: 1331, reward: generateReward(350) },
  { cost: 1364, reward: generateReward(365) },
  { cost: 1398, reward: generateReward(375) },
  { cost: 1433, reward: generateReward(385) },
  { cost: 1469, reward: generateReward(395) },
  { cost: 1505, reward: generateReward(405) },
  { cost: 1543, reward: generateReward(420) },
  { cost: 1582, reward: generateReward(430) },
  { cost: 1621, reward: generateReward(440) },
  { cost: 1662, reward: generateReward(450) },
  { cost: 1703, reward: generateReward(465) },
  { cost: 1746, reward: generateReward(475) },
  { cost: 1789, reward: generateReward(495) },
  { cost: 1834, reward: generateReward(500) },
  { cost: 1880, reward: generateReward(510) },
  { cost: 1927, reward: generateReward(520) },
  { cost: 1975, reward: generateReward(535) },
  { cost: 2025, reward: generateReward(545) },
  { cost: 2075, reward: generateReward(555) },
  { cost: 2127, reward: generateReward(570) },
  { cost: 2180, reward: generateReward(580) },
  { cost: 2235, reward: generateReward(590) },
  { cost: 2290, reward: generateReward(605) },
  { cost: 2348, reward: generateReward(615) },
  { cost: 2406, reward: generateReward(630) },
  { cost: 2467, reward: generateReward(640) },
  { cost: 2528, reward: generateReward(650) },
  { cost: 2591, reward: generateReward(665) },
  { cost: 2656, reward: generateReward(675) },
  { cost: 2723, reward: generateReward(690) },
  { cost: 2791, reward: generateReward(700) },
  { cost: 2860, reward: generateReward(715) },
  { cost: 2932, reward: generateReward(725) },
  { cost: 3005, reward: generateReward(735) },
  { cost: 3080, reward: generateReward(750) },
  { cost: 3157, reward: generateReward(760) },
  { cost: 3236, reward: generateReward(775) },
  { cost: 3317, reward: generateReward(785) },
  { cost: 3400, reward: generateReward(800) },
  { cost: 3485, reward: generateReward(810) },
  { cost: 3572, reward: generateReward(825) },
  { cost: 3661, reward: generateReward(835) },
  { cost: 3753, reward: generateReward(850) },
  { cost: 3847, reward: generateReward(860) }
];

module.exports = {
  mround: mround,
  generateReward: generateReward,
  defaultCost: defaultCost
};
