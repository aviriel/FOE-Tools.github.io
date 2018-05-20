const ages = require("../ages");
const ageCost = require("../ages-cost/ProgressiveEra");

module.exports = {
  key: "Alcatraz",
  age: ages.ProgressiveEra.key,
  levels: ageCost
};
