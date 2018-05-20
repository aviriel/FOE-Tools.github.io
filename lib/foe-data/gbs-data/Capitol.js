const ages = require("../ages");
const ageCost = require("../ages-cost/IndustrialAge");

module.exports = {
  key: "Capitol",
  age: ages.IndustrialAge.key,
  levels: ageCost
};
