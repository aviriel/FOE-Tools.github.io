const ages = require("../ages");
const ageCost = require("../ages-cost/NoAge");

module.exports = {
  key: "Observatory",
  age: ages.NoAge.key,
  levels: ageCost
};
