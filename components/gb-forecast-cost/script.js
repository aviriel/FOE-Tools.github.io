import Utils from "~/scripts/utils";
import { gbsData } from "~/lib/foe-data/gbs";
import gbProcess from "~/scripts/foe-gb-investment";
import gbListSelect from "~/components/gb-list-select/index";
import graphCanvas from "~/components/graph-canvas/index";

import Vue from "vue";
import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import YesNo from "~/components/yes-no/index";

momentDurationFormatSetup(moment);

const i18nPrefix = "components.gb_forecast_cost.";
const urlPrefix = "gbfc_";
const defaultArcPercentage = 0;
const defaultFrom = 1;
const defaultTo = 10;
let oldInvestorPercentageCustom;
let oldMaxLevel = 0;
let oldFromInput = 0;

const queryKey = {
  gb: urlPrefix + "gb",
  from: urlPrefix + "f",
  to: urlPrefix + "t",
  investorPercentageGlobal: urlPrefix + "ipg",
  investorPercentageCustom: urlPrefix + "ipc_",
  cp: urlPrefix + "cp",
  fpBy24h: urlPrefix + "fp",
  alreadyInvested: urlPrefix + "ai"
};

const inputComparator = {
  from: { comparator: [">=", 1], type: "int" },
  to: { comparator: [">=", 1], type: "int" },
  investorPercentageGlobal: { comparator: [">=", 0], type: "float" },
  investorPercentageCustom: { comparator: [">=", 0], type: "float" },
  fpBy24h: { comparator: [">=", 0] },
  alreadyInvested: { comparator: [">=", 0] }
};

export default {
  name: "GbForecastCost",
  props: {
    canPermalink: {
      type: Boolean,
      default: false
    }
  },
  data() {
    moment.locale(this.$store.state.locale);

    const data = {
      i18nPrefix: i18nPrefix,
      labels: [],
      datasets: [],
      options: {
        responsive: true,
        title: {
          display: true,
          text: this.$i18n.i18next.t(i18nPrefix + "graph.title", {
            gb: "foe_data.gb." + gbsData.Observatory.key
          })
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: this.$i18n.i18next.t(i18nPrefix + "graph.x_axes_label")
              },
              ticks: {
                suggestedMin: defaultFrom,
                suggestedMax: defaultTo
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: this.$i18n.i18next.t(i18nPrefix + "graph.y_axes_label")
              }
            }
          ]
        }
      },
      gb: gbsData.Observatory,
      maxLevel: gbsData.Observatory.levels.length,
      from: defaultFrom,
      to: defaultTo,
      investorPercentageGlobal: defaultArcPercentage,
      investorPercentageCustom: [
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage
      ],
      customPercentage: false,
      fpBy24h: 0,
      alreadyInvested: 0,
      estimatedTime: "",
      errors: {
        from: false,
        to: false,
        percentageValueGlobal: false,
        alreadyInvested: false,
        investorPercentageCustom_0: false,
        investorPercentageCustom_1: false,
        investorPercentageCustom_2: false,
        investorPercentageCustom_3: false,
        investorPercentageCustom_4: false
      },
      previsionResult: null,
      previsionDefault: gbProcess.SubmitRange(
        defaultFrom,
        defaultTo,
        [defaultArcPercentage, defaultArcPercentage, defaultArcPercentage, defaultArcPercentage, defaultArcPercentage],
        gbsData.Observatory.levels
      )
    };

    Object.assign(data, this.checkQuery(data));

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.gb,
      value: data.gb.key
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.from,
      value: data.from
    });
    this.$store.commit("ADD_URL_QUERY", { key: queryKey.to, value: data.to });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.investorPercentageGlobal,
      value: data.investorPercentageGlobal
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.cp,
      value: data.customPercentage ? 1 : 0
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.fpBy24h,
      value: data.fpBy24h
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.alreadyInvested,
      value: data.alreadyInvested
    });

    for (let i = 0; i < 5; i++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.investorPercentageCustom + (i + 1),
        value: data.investorPercentageCustom[i]
      });
    }

    oldInvestorPercentageCustom = JSON.parse(JSON.stringify(data.investorPercentageCustom));

    return data;
  },
  computed: {
    fromInput: {
      get() {
        return this.$data.from;
      },
      set(val) {
        this.checkFrom(val);
        oldFromInput = val;
      }
    },
    lang() {
      return this.$store.state.locale;
    },
    isPermalink() {
      return this.$store.state.isPermalink;
    },
    permaLink() {
      return {
        path: this.$i18n.path("gb-forecast-cost/"),
        query: this.$store.state.urlQuery
      };
    },
    maxCurrentLevel() {
      return Utils.inRange(this.$data.from, 1, this.$data.gb.levels.length)
        ? this.$data.gb.levels[this.$data.from].cost
        : oldMaxLevel;
    },
    duration() {
      if (this.$data.fpBy24h > 0) {
        let result = Math.ceil(
          (this.$data.previsionResult.global.totalPreparations - this.$data.alreadyInvested) / this.$data.fpBy24h
        );
        return result < 0 ? 0 : result;
      } else {
        return 0;
      }
    }
  },
  watch: {
    lang() {
      moment.locale(this.$store.state.locale);
      if (this.$data.fpBy24h > 0) {
        let duration = Math.ceil(this.$data.previsionResult.global.totalPreparations / this.$data.fpBy24h);
        this.$data.estimatedTime = Utils.getFormatedDuration(moment.duration(duration, "days"), this.$i18n.i18next);
      }

      this.updatePrevisionGraph();
    },
    gb(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.gb,
        value: val.key
      });
    },
    from(val, oldVal) {
      if (
        Utils.handlerForm(this, "from", val.length === 0 ? 1 : val, oldVal, [1, this.$data.to]) ===
        Utils.FormCheck.VALID
      ) {
        oldMaxLevel = val;
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.from,
          value: val
        });
        this.calculate();
      }
    },
    to(val, oldVal) {
      if (
        Utils.handlerForm(this, "to", val.length === 0 ? 0 : val, oldVal, [this.$data.from, this.$data.maxLevel]) ===
        Utils.FormCheck.VALID
      ) {
        if (this.$data.errors.from) {
          if (this.checkFrom(oldFromInput)) {
            this.$store.commit("UPDATE_URL_QUERY", {
              key: queryKey.to,
              value: val
            });
            this.$data.errors.from = false;
            this.calculate();
          }
        } else {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.to,
            value: val
          });
          this.calculate();
        }
      }
    },
    investorPercentageGlobal(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "investorPercentageGlobal",
          val.length === 0 ? 0 : val,
          oldVal,
          [">=", 0],
          false,
          "",
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageGlobal,
          value: val
        });
        this.calculate();
      }
      for (let index = 0; index < this.$data.investorPercentageCustom.length; index++) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageCustom + (index + 1),
          value: val
        });
        this.$data.investorPercentageCustom[index] = val;
      }
    },
    investorPercentageCustom(val) {
      let result = Utils.FormCheck.VALID;
      for (let index = 0; index < val.length; index++) {
        if (
          Utils.handlerForm(
            this,
            "investorPercentageCustom_" + index,
            val[index].length === 0 ? 0 : val[index],
            oldInvestorPercentageCustom[index],
            [">=", 0],
            false,
            "",
            "float"
          ) === Utils.FormCheck.INVALID
        ) {
          result = Utils.FormCheck.INVALID;
        }
      }
      if (result === Utils.FormCheck.VALID) {
        oldInvestorPercentageCustom = JSON.parse(JSON.stringify(val));
        for (let index = 0; index < val.length; index++) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.investorPercentageCustom + (index + 1),
            value: val[index]
          });
        }
        this.calculate();
      }
    },
    customPercentage(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.cp,
        value: val ? 1 : 0
      });
      for (let i = 0; i < 5; i++) {
        this.$data.investorPercentageCustom[i] = this.$data.investorPercentageGlobal;
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageCustom + (i + 1),
          value: this.$data.investorPercentageGlobal
        });
      }
    },
    fpBy24h(val) {
      if (val > 0 && this.$data.previsionResult !== null) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.fpBy24h,
          value: val
        });
        this.$data.duration = Math.ceil(
          (this.$data.previsionResult.global.totalPreparations - this.$data.alreadyInvested) / val
        );
        this.$data.estimatedTime = Utils.getFormatedDuration(
          moment.duration(this.$data.duration, "days"),
          this.$i18n.i18next
        );
      } else {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.fpBy24h,
          value: 0
        });
        this.$data.estimatedTime = "";
      }
    },
    alreadyInvested(val, oldVal) {
      if (
        Utils.handlerForm(this, "alreadyInvested", val.length === 0 ? 0 : val, oldVal, [0, this.maxCurrentLevel]) ===
        Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.alreadyInvested,
          value: val
        });
        this.$data.duration = Math.ceil(
          (this.$data.previsionResult.global.totalPreparations - this.$data.alreadyInvested) / this.$data.fpBy24h
        );
        this.$data.estimatedTime = Utils.getFormatedDuration(
          moment.duration(this.$data.duration, "days"),
          this.$i18n.i18next
        );
      }
    }
  },
  methods: {
    checkFrom(val) {
      if (val.length === 0) {
        Vue.set(this.$data.errors, "from", true);
        return false;
      }
      if (Utils.handlerForm(this, "from", val, this.$data.from, [1, this.$data.to]) === Utils.FormCheck.VALID) {
        Vue.set(this.$data.errors, "from", false);
        Vue.set(this.$data, "from", val);
        return true;
      }
      return false;
    },
    changeGb(key) {
      this.$data.gb = gbsData[key];
      this.$data.maxLevel = this.$data.gb.levels.length;
      this.$data.from = this.$data.from > this.$data.maxLevel ? 1 : this.$data.from;
      this.$data.to = this.$data.to > this.$data.maxLevel ? this.$data.maxLevel : this.$data.to;
      this.calculate();
    },
    updatePrevisionGraph() {
      const datasets = [];
      const labels = Array.from(new Array(this.$data.to - this.$data.from + 1), (x, i) => i + this.$data.from);

      const chartColors = {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)"
      };

      const defaultAlpha = 0.1;

      const chartColorsAlpha = {
        red: "rgba(255, 99, 132, " + defaultAlpha + ")",
        orange: "rgba(255, 159, 64, " + defaultAlpha + ")",
        yellow: "rgba(255, 205, 86, " + defaultAlpha + ")",
        green: "rgba(75, 192, 192, " + defaultAlpha + ")",
        blue: "rgba(54, 162, 235, " + defaultAlpha + ")",
        purple: "rgba(153, 102, 255, " + defaultAlpha + ")",
        grey: "rgba(201, 203, 207, " + defaultAlpha + ")"
      };

      let data = [
        {
          label: this.$t(i18nPrefix + "graph.label.default"),
          data: this.$data.previsionDefault.levels.map(x => x.cost),
          color: chartColors.orange,
          color_alpha: chartColorsAlpha.orange
        },
        {
          label: this.$t(i18nPrefix + "graph.label.default_preparation"),
          data: this.$data.previsionDefault.levels.map(x => x.totalPreparations),
          color: chartColors.blue,
          color_alpha: chartColorsAlpha.blue
        }
      ];

      if (
        this.$data.previsionResult !== null &&
        this.$data.previsionResult.global.totalPreparations !== this.$data.previsionDefault.global.totalPreparations
      ) {
        data.push({
          label: this.$t(i18nPrefix + "graph.label.custom_preparation"),
          data: this.$data.previsionResult.levels.map(x => x.totalPreparations),
          color: chartColors.purple,
          color_alpha: chartColorsAlpha.purple
        });
      }

      for (let elt of data) {
        datasets.push({
          label: elt.label,
          fill: "start",
          lineTension: 0,
          backgroundColor: elt.color_alpha,
          borderColor: elt.color,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: Utils.shadeRGBColor(elt.color, -0.3),
          pointBackgroundColor: Utils.shadeRGBColor(elt.color, 0.3),
          pointBorderWidth: 3,
          pointHoverRadius: 4,
          pointRadius: 1,
          pointHitRadius: 10,
          data: elt.data
        });
      }

      this.$data.datasets = datasets;
      this.$data.labels = labels;
      this.$data.options.title.text = this.$i18n.i18next.t(i18nPrefix + "graph.title", {
        gb: "foe_data.gb." + this.$data.gb.key
      });
      this.$data.options.scales.xAxes[0].scaleLabel.labelString = this.$i18n.i18next.t(
        i18nPrefix + "graph.x_axes_label"
      );
      this.$data.options.scales.xAxes[0].ticks.suggestedMin = this.$data.from;
      this.$data.options.scales.xAxes[0].ticks.suggestedMax = this.$data.to;
      this.$data.options.scales.yAxes[0].scaleLabel.labelString = this.$i18n.i18next.t(
        i18nPrefix + "graph.y_axes_label"
      );
    },
    calculate() {
      this.$data.previsionDefault = gbProcess.SubmitRange(
        this.$data.from,
        this.$data.to,
        [0, 0, 0, 0, 0],
        this.$data.gb.levels
      );

      this.$data.previsionResult = gbProcess.SubmitRange(
        this.$data.from,
        this.$data.to,
        this.$data.investorPercentageCustom,
        this.$data.gb.levels
      );

      if (this.$data.fpBy24h > 0) {
        let duration = Math.ceil(this.$data.previsionResult.global.totalPreparations / this.$data.fpBy24h);
        this.$data.estimatedTime = Utils.getFormatedDuration(moment.duration(duration, "days"), this.$i18n.i18next);
      }
      this.updatePrevisionGraph();
    },
    checkQuery(data) {
      let noCheck = ["from", "to", "investorPercentageCustom"];
      let result = {};
      let change = Utils.FormCheck.NO_CHANGE;
      let investorPercentageCustom = Array.apply(null, Array(5)).map(() => defaultArcPercentage);
      let tmp;
      let from = data.from;
      let to = data.to;
      let fromToChange = 0;
      let customPercentage = data.customPercentage;

      if (this.$route.query[queryKey.gb] && this.$route.query[queryKey.gb] in gbsData) {
        change = Utils.FormCheck.VALID;
        result.gb = gbsData[this.$route.query[queryKey.gb]];
      }

      for (let key in inputComparator) {
        if (!(key in noCheck)) {
          tmp = Utils.checkFormNumeric(
            this.$route.query[queryKey[key]],
            -1,
            inputComparator[key].comparator,
            inputComparator[key].type
          );
          if (tmp.state === Utils.FormCheck.VALID) {
            change = Utils.FormCheck.VALID;
            result[key] = tmp.value;
            if (key === "investorPercentageGlobal") {
              investorPercentageCustom = Array.apply(null, Array(5)).map(() => tmp.value);
            }
          }
        }
      }

      if (
        this.$route.query[queryKey.from] &&
        !isNaN(this.$route.query[queryKey.from]) &&
        parseFloat(this.$route.query[queryKey.from]) >= 1
      ) {
        fromToChange++;
        from = parseInt(this.$route.query[queryKey.from]);
      }

      if (
        this.$route.query[queryKey.to] &&
        !isNaN(this.$route.query[queryKey.to]) &&
        parseFloat(this.$route.query[queryKey.to]) >= 1
      ) {
        fromToChange++;
        from = parseInt(this.$route.query[queryKey.to]);
      }

      if (fromToChange > 0 && from <= to) {
        change = Utils.FormCheck.VALID;
        result.from = from;
        result.to = to;
      }

      if (
        this.$route.query[queryKey.cp] &&
        !isNaN(this.$route.query[queryKey.cp]) &&
        parseInt(this.$route.query[queryKey.cp]) >= 0
      ) {
        change = Utils.FormCheck.VALID;
        result.customPercentage = parseInt(this.$route.query[queryKey.cp]) === 1;
        customPercentage = result.customPercentage;
      }

      if (customPercentage) {
        for (let i = 0; i < 5; i++) {
          tmp = Utils.checkFormNumeric(
            this.$route.query[queryKey.investorPercentageCustom + (i + 1)],
            -1,
            inputComparator.investorPercentageCustom.comparator,
            inputComparator.investorPercentageCustom.type
          );
          if (tmp.state === Utils.FormCheck.VALID) {
            change = Utils.FormCheck.VALID;
            investorPercentageCustom[i] = tmp.value;
          }
        }
      }

      if (change === Utils.FormCheck.VALID) {
        this.$store.commit("IS_PERMALINK", true);
        result.investorPercentageCustom = investorPercentageCustom;
      }

      return result;
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  mounted() {
    this.calculate();
    this.updatePrevisionGraph();
  },
  components: {
    gbListSelect,
    graphCanvas,
    YesNo
  }
};
