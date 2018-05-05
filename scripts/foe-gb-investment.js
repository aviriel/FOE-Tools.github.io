/**
 * Calculate the cost to secure a place
 *
 * @param levelCost {number} Cost of the current level
 * @param participations {Array} Array of integer which contains all participant costs
 * @returns {number} Return the cost to secure a place
 */
function costSecureRank(levelCost, participations) {
  let acc = 0;
  let index = 0;
  let result;

  while (index < participations.length - 1) {
    acc += participations[index];
    index++;
  }

  result = levelCost - (acc + participations[participations.length - 1] * 2);

  return result < 0 ? 0 : result;
}

/**
 * Get all data from GB for a specific level
 *
 * @param gb {object} Pointer of Great Building
 * @param currentLevel {number} Current level
 * @param investorPercentage {Array} percentage of investors (Arc)
 * @returns {object}
 */
function getValues(gb, currentLevel, investorPercentage) {
  let obj = {};
  obj.cost = gb[currentLevel - 1].cost;
  obj.investment = [];

  let participation = [];
  for (let i = 0; i < gb[currentLevel - 1].reward.length; i++) {
    let investment = {};
    let factor = 1 + investorPercentage[i] / 100;
    investment.reward = gb[currentLevel - 1].reward[i];
    investment.participation = Math.ceil(investment.reward * factor);
    participation[participation.length] = investment.participation;
    investment.preparation = costSecureRank(obj.cost, participation);
    obj.investment[obj.investment.length] = investment;
  }

  obj.totalPreparations =
    obj.investment[obj.investment.length - 1].preparation === 0
      ? 0
      : obj.investment[obj.investment.length - 1].preparation +
        obj.investment[obj.investment.length - 1].participation;
  obj.level = currentLevel;

  return obj;
}

export default {
  /**
   * Get all data from GB for a specific level
   *
   * @param currentLevel {number} Current level
   * @param investorPercentage {Array} percentage of investors (Arc)
   * @param gb {object} Pointer of Great Building
   * @returns {object}
   */
  Submit(currentLevel, investorPercentage, gb) {
    if (currentLevel < 1 || currentLevel > gb.length) {
      // Triggering an error
      return;
    }

    return getValues(gb, currentLevel, investorPercentage);
  },

  /**
   * Get all data from GB for a range of levels
   *
   * @param from {number} From this level
   * @param to {number} To this level
   * @param investorPercentage {Array} percentage of investors (Arc)
   * @param gb {object} Pointer of Great Building
   * @returns {object}
   */
  SubmitRange(from, to, investorPercentage, gb) {
    if (from < 1 || from > gb.length || to < 1 || to > gb.length || from > to) {
      // Triggering an error
      return;
    }

    let result = {
      global: {
        cost: 0,
        totalPreparations: 0
      },
      levels: []
    };

    for (let i = from; i <= to; i++) {
      result.levels.push(this.Submit(i, investorPercentage, gb));
      result.global.cost += result.levels[result.levels.length - 1].cost;
      result.global.totalPreparations +=
        result.levels[result.levels.length - 1].totalPreparations;
    }

    return result;
  }
};
