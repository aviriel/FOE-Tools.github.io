import questData from "~/scripts/foe-quest-data";
import Utils from "~/scripts/utils";
import YesNo from "~/components/yes-no/index";

const i18nPrefix = "components.cf_calculator.";
const urlPrefix = "cfc_";

const queryKey = {
  yourAge: urlPrefix + "ya",
  yourCfBoost: urlPrefix + "ycfb",
  coins: urlPrefix + "c",
  supplies: urlPrefix + "s",
  goods: urlPrefix + "g",
  fpBy24h: urlPrefix + "fp",
  otherRq: urlPrefix + "orq",
  suppliesGathered: urlPrefix + "sp",
  secondRq: urlPrefix + "srq",
  cumulativeQuest: urlPrefix + "cq"
};

const inputComparator = {
  yourCfBoost: { comparator: [">=", 0] },
  coins: { comparator: [">=", 0] },
  supplies: { comparator: [">=", 0] },
  goods: { comparator: [">=", 0] },
  fpBy24h: { comparator: [">=", 0] },
  otherRq: { comparator: [">=", 0] },
  suppliesGathered: { comparator: [">=", 0] },
  cumulativeQuest: { comparator: [">=", 1] }
};

export default {
  name: "CfCalculator",
  head() {
    this.$store.commit("SET_HERO", {
      title: "routes.cf_calculator.hero.title",
      subtitle: "routes.cf_calculator.hero.subtitle"
    });

    return { title: this.$t("routes.cf_calculator.title") };
  },
  props: {
    canPermalink: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "cf_calculator");

    let data = {
      yourCfBoost: 0,
      coins: 0,
      supplies: 0,
      goods: 0,
      fpBy24h: 0,
      otherRq: 0,
      suppliesGathered: 0,
      cumulativeQuest: 0
    };

    for (let key in data) {
      if (this.$cookies.get(key) !== undefined) {
        let result = Utils.checkFormNumeric(
          this.$cookies.get(key),
          -1,
          inputComparator[key].comparator
        );
        if (result.state === Utils.FormCheck.VALID) {
          data[key] = result.value;
        }
      }
    }

    data.yourAge =
      this.$cookies.get("yourAge") === undefined ||
      !(this.$cookies.get("yourAge") in questData.ages)
        ? questData.ages.BronzeAge.key
        : this.$cookies.get("yourAge");
    data.secondRq =
      this.$cookies.get("secondRq") === undefined
        ? false
        : this.$cookies.get("secondRq") === true;

    Object.assign(data, this.checkQuery());

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourAge,
      value: data.yourAge
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.yourCfBoost,
      value: data.yourCfBoost
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.coins,
      value: data.coins
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.supplies,
      value: data.supplies
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.goods,
      value: data.goods
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.fpBy24h,
      value: data.fpBy24h
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.otherRq,
      value: data.otherRq
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.suppliesGathered,
      value: data.suppliesGathered
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.secondRq,
      value: data.secondRq ? 1 : 0
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.cumulativeQuest,
      value: data.cumulativeQuest
    });

    return {
      i18nPrefix: i18nPrefix,
      questData: questData,
      oneQuest: [
        questData.ages.BronzeAge.key,
        questData.ages.IronAge.key,
        questData.ages.EarlyMiddleAges.key,
        questData.ages.HighMiddleAges.key
      ],
      yourAge: data.yourAge,
      checkSecondQuest: false,
      yourCfBoost: data.yourCfBoost,
      coins: data.coins,
      supplies: data.supplies,
      goods: data.goods,
      fpBy24h: data.fpBy24h,
      otherRq: data.otherRq,
      secondRq: data.secondRq,
      suppliesGathered: data.suppliesGathered,
      infinityGenerator: false,
      cumulativeQuest: data.cumulativeQuest,
      result: {
        bp: 0,
        medals: 0,
        goods: 0,
        fp: 0,
        dailyUbq: 0,
        bonusUbq: 0,
        secondRqCompleted: 0,
        totalGoods: 0,
        totalFp: 0,
        totalRqCompleted: 0,
        coinSupplyReturn: []
      },
      errors: {
        yourAge: false,
        yourCfBoost: false,
        coins: false,
        supplies: false,
        goods: false,
        fpBy24h: false,
        otherRq: false,
        suppliesGathered: false,
        cumulativeQuest: false
      }
    };
  },
  computed: {
    isPermalink() {
      return this.$store.state.isPermalink;
    },
    permaLink() {
      return {
        path: this.$i18n.path("cf-calculator/"),
        query: this.$store.state.urlQuery
      };
    }
  },
  watch: {
    yourAge(val) {
      if (this.yourAge in questData.ages) {
        this.errors.yourAge = false;
        if (!this.isPermalink) {
          this.$cookies.set("yourAge", val, {
            path: $nuxt.$route.path,
            expires: Utils.getDefaultCookieExpireTime()
          });
        }
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourAge,
          value: val
        });
        if (this.oneQuest.indexOf(this.yourAge) > -1) {
          this.secondRq = false;
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.secondRq,
            value: 0
          });
          if (!this.isPermalink) {
            this.$cookies.set("secondRq", false, {
              path: $nuxt.$route.path,
              expires: Utils.getDefaultCookieExpireTime()
            });
          }
        }
        this.checkSecondQuest = this.oneQuest.indexOf(val) === -1;
        this.calculate();
      } else {
        this.errors.yourAge = true;
      }
    },
    secondRq(val) {
      if (!this.isPermalink) {
        this.$cookies.set("secondRq", val, {
          path: $nuxt.$route.path,
          expires: Utils.getDefaultCookieExpireTime()
        });
      }
      this.$data.suppliesGathered = val ? this.$data.suppliesGathered : 0;
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.secondRq,
        value: val ? 1 : 0
      });
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.suppliesGathered,
        value: val ? this.$data.suppliesGathered : 0
      });
      this.calculate();
    },
    yourCfBoost(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "yourCfBoost",
          val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.yourCfBoost.comparator,
          !this.isPermalink,
          "/"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.yourCfBoost,
          value: val
        });
        this.$data.infinityGenerator = false;
        this.calculate();
      }
    },
    coins(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "coins",
          val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.coins.comparator,
          !this.isPermalink,
          $nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.coins,
          value: val
        });
        this.calculate();
      }
    },
    supplies(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "supplies",
          val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.supplies.comparator,
          !this.isPermalink,
          $nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.supplies,
          value: val
        });
        this.calculate();
      }
    },
    goods(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "goods",
          val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.goods.comparator,
          !this.isPermalink,
          $nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.goods,
          value: val
        });
        this.calculate();
      }
    },
    fpBy24h(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "fpBy24h",
          val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.fpBy24h.comparator,
          !this.isPermalink,
          $nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.fpBy24h,
          value: val
        });
        this.calculate();
      }
    },
    otherRq(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "otherRq",
          val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.otherRq.comparator,
          !this.isPermalink,
          $nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.otherRq,
          value: val
        });
        this.calculate();
      }
    },
    suppliesGathered(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "suppliesGathered",
          val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.suppliesGathered.comparator,
          !this.isPermalink,
          $nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.suppliesGathered,
          value: val
        });
        this.calculate();
      }
    },
    cumulativeQuest(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "cumulativeQuest",
          val.length === 0 ? 0 : val,
          oldVal,
          inputComparator.cumulativeQuest.comparator,
          !this.isPermalink,
          $nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.cumulativeQuest,
          value: val
        });
        this.calculate();
      }
    }
  },
  mounted() {
    this.checkSecondQuest = this.oneQuest.indexOf(this.$data.yourAge) === -1;
    this.calculate();
  },
  methods: {
    /**
     * Calculate all the rewards and number of quests that can be accomplished.
     * Based on: https://docs.google.com/spreadsheets/d/13-mBxR4eumRXWPi6Ayq2D9OGZ9C55eMEb6xyHnLl_-g/edit#gid=2009380732
     */
    calculate() {
      let cf_boost = this.$data.yourCfBoost / 100;
      let age = this.$data.questData.ages[this.$data.yourAge];
      let coins_relation = Math.floor(this.$data.coins / age.cost.coins);
      let supplies_relation = Math.floor(
        this.$data.supplies / age.cost.supplies
      );

      this.$data.result.dailyUbq =
        coins_relation < supplies_relation ? coins_relation : supplies_relation;
      this.$data.result.bonusUbq = 0;
      this.$data.result.coinSupplyReturn = [];

      let nb_quest =
        Math.floor(
          (Math.floor(
            (this.$data.result.dailyUbq + this.$data.otherRq) * (2 / 14)
          ) *
            age.reward.small_coins *
            (1 + cf_boost) +
            Math.floor(
              (this.$data.result.dailyUbq + this.$data.otherRq) * (1 / 14)
            ) *
              age.reward.large_coins *
              (1 + cf_boost)) /
            age.cost.gather
        ) + Math.floor(this.$data.suppliesGathered / age.cost.gather);

      let plus_quest = this.$data.secondRq ? nb_quest : 0;
      let first_lap = true;
      let coin_return;
      let supply_return;
      let coin_return_by_cost;
      let supply_coin_return_by_cost;
      let supplies_return_by_gather;
      let min_between_coin_supplies;
      let final_nb_quest;
      let second_quest_Completed = nb_quest;

      do {
        if (first_lap) {
          first_lap = false;

          coin_return =
            Math.floor(
              (this.$data.result.dailyUbq + this.$data.otherRq + plus_quest) *
                (2 / 14)
            ) *
              age.reward.small_coins *
              (1 + cf_boost) +
            Math.floor(
              (this.$data.result.dailyUbq + this.$data.otherRq + plus_quest) *
                (1 / 14)
            ) *
              age.reward.large_coins *
              (1 + cf_boost);

          supply_return =
            Math.floor(
              (this.$data.result.dailyUbq + this.$data.otherRq + plus_quest) *
                (2 / 14)
            ) *
              age.reward.small_supplies *
              (1 + cf_boost) +
            Math.floor(
              (this.$data.result.dailyUbq + this.$data.otherRq + plus_quest) *
                (1 / 14)
            ) *
              age.reward.large_supplies *
              (1 + cf_boost);
        } else {
          coin_return =
            Math.floor(final_nb_quest * (1 / 14)) *
              age.reward.large_coins *
              (1 + cf_boost) +
            Math.floor(final_nb_quest * (2 / 14)) *
              age.reward.small_coins *
              (1 + cf_boost);

          supply_return =
            Math.floor(final_nb_quest * (1 / 14)) *
              age.reward.large_supplies *
              (1 + cf_boost) +
            Math.floor(final_nb_quest * (2 / 14)) *
              age.reward.small_supplies *
              (1 + cf_boost);
        }

        coin_return_by_cost = Math.floor(coin_return / age.cost.coins);
        supply_coin_return_by_cost = Math.floor(
          supply_return / age.cost.supplies
        );
        supplies_return_by_gather = Math.floor(supply_return / age.cost.gather);
        min_between_coin_supplies =
          coin_return_by_cost < supply_coin_return_by_cost
            ? coin_return_by_cost
            : supply_coin_return_by_cost;
        final_nb_quest = this.$data.secondRq
          ? supplies_return_by_gather + min_between_coin_supplies
          : min_between_coin_supplies;

        this.$data.result.bonusUbq += final_nb_quest;

        if (coin_return > 0 || supply_return > 0) {
          if (
            !this.$data.infinityGenerator &&
            this.$data.result.coinSupplyReturn.length > 0 &&
            this.$data.result.coinSupplyReturn[
              this.$data.result.coinSupplyReturn.length - 1
            ].coin <= coin_return
          ) {
            this.$data.infinityGenerator = true;
          }
          this.$data.result.coinSupplyReturn.push({
            coin: coin_return,
            supply: supply_return
          });
        }
        second_quest_Completed += supplies_return_by_gather;
      } while (
        (!this.$data.infinityGenerator &&
          (coin_return > 0 || supply_return > 0)) ||
        this.$data.cumulativeQuest > this.$data.result.coinSupplyReturn.length
      );

      if (this.$data.infinityGenerator && this.$data.cumulativeQuest === 0) {
        this.$data.cumulativeQuest =
          this.$data.result.coinSupplyReturn.length + 1;
      } else if (!this.$data.infinityGenerator) {
        this.$data.cumulativeQuest = 0;
      }

      this.$data.result.secondRqCompleted = this.$data.secondRq
        ? second_quest_Completed
        : 0;
      this.$data.result.totalRqCompleted =
        this.$data.result.dailyUbq +
        this.$data.result.bonusUbq +
        this.$data.otherRq +
        this.$data.result.secondRqCompleted;

      this.$data.result.bp = Math.floor(
        this.$data.result.totalRqCompleted * (1 / 14) * age.reward.blueprint
      );
      this.$data.result.medals =
        Math.floor(this.$data.result.totalRqCompleted * (1 / 14)) *
        Math.round(age.reward.medals * (1 + cf_boost));
      this.$data.result.goods =
        Math.floor(this.$data.result.totalRqCompleted * (5 / 14)) *
        Math.round(age.reward.goods * (1 + cf_boost));
      this.$data.result.fp =
        Math.floor(this.$data.result.totalRqCompleted * (1 / 14)) *
        age.reward.fp;

      this.$data.result.totalGoods = this.$data.result.goods + this.$data.goods;
      this.$data.result.totalFp = this.$data.result.fp + this.$data.fpBy24h;
    },
    submitCfCalculator() {
      let data = [
        "yourCfBoost",
        "coins",
        "supplies",
        "goods",
        "fpBy24h",
        "otherRq",
        "suppliesGathered"
      ];

      let change = Utils.FormCheck.NO_CHANGE;
      let listCheck = true;
      for (let key in data) {
        let result = Utils.handlerForm(
          this,
          key,
          this.$data[key],
          this.$data[key],
          [">=", 0],
          !this.isPermalink,
          $nuxt.$route.path
        );
        if (result.state === Utils.FormCheck.VALID) {
          change = listCheck ? Utils.FormCheck.VALID : change;
        } else if (result.state === Utils.FormCheck.INVALID) {
          listCheck = false;
          change = Utils.FormCheck.INVALID;
        }
      }

      if (
        change !== Utils.FormCheck.INVALID &&
        Utils.handlerForm(
          this,
          "cumulativeQuest",
          this.$data.cumulativeQuest,
          -1,
          [">=", 1],
          !this.isPermalink,
          $nuxt.$route.path
        ) !== Utils.FormCheck.INVALID
      ) {
        this.calculate();
      }
    },
    checkQuery() {
      let result = {};
      let change = Utils.FormCheck.NO_CHANGE;
      let tmp;

      for (let key in inputComparator) {
        tmp = Utils.checkFormNumeric(
          this.$route.query[queryKey[key]],
          -1,
          inputComparator[key].comparator
        );
        if (tmp.state === Utils.FormCheck.VALID) {
          change = Utils.FormCheck.VALID;
          result[key] = tmp.value;
        }
      }

      if (
        this.$route.query[queryKey.yourAge] &&
        this.$route.query[queryKey.yourAge] in questData.ages
      ) {
        change = Utils.FormCheck.VALID;
        result["yourAge"] = this.$route.query[queryKey.yourAge];
      }

      if (
        this.$route.query[queryKey.secondRq] &&
        !isNaN(this.$route.query[queryKey.secondRq]) &&
        parseInt(this.$route.query[queryKey.secondRq]) >= 0
      ) {
        change = Utils.FormCheck.VALID;
        result["secondRq"] =
          parseInt(this.$route.query[queryKey.secondRq]) === 1;
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.commit("IS_PERMALINK", true);
      }

      return result;
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  components: {
    YesNo
  }
};
