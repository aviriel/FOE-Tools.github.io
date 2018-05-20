const ages = require("../ages");
const ageCost = require("../ages-cost/Tomorrow");

module.exports = {
  key: "Dynamic_Tower",
  age: ages.Tomorrow.key,
  levels: ageCost
};
