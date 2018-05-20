const ages = require("../ages");
const ageCost = require("../ages-cost/Tomorrow");

module.exports = {
  key: "Voyager_V1",
  age: ages.Tomorrow.key,
  levels: ageCost
};
