const ages = require("../ages");
const ageCost = require("../ages-cost/ArcticFuture");

module.exports = {
  key: "Seed_Vault",
  age: ages.ArcticFuture.key,
  levels: ageCost
};
