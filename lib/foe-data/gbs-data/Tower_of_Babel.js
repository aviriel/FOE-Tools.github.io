const ages = require("../ages");
const ageCost = require("../ages-cost/BronzeAge");

module.exports = {
  key: "Tower_of_Babel",
  age: ages.BronzeAge.key,
  levels: ageCost
};
