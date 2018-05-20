import Utils from "~/scripts/utils";
import graphCanvas from "~/components/graph-canvas/index";

import { agesCost, gbsData } from "~/lib/foe-data/gbs";

const i18nPrefix = "components.gb_statistics.";

export default {
  name: "GbStatistics",
  data() {
    const defaultFromGraph = 1;
    const defaultToGraph = 80;

    const obj = {
      i18nPrefix: i18nPrefix,
      graphType: {
        cost_level: {
          title: this.$i18n.i18next.t(i18nPrefix + "graph.title_1"),
          xAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level"),
          yAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level_cost")
        },
        reward_level: {
          title: this.$i18n.i18next.t(i18nPrefix + "graph.title_2"),
          xAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level"),
          yAxesLabel: this.$i18n.i18next.t("utils.graph.gb_reward_1st_place")
        },
        reward_cost: {
          title: this.$i18n.i18next.t(i18nPrefix + "graph.title_3"),
          xAxesLabel: this.$i18n.i18next.t("utils.graph.gb_reward_1st_place"),
          yAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level_cost")
        },
        cost_reward: {
          title: this.$i18n.i18next.t(i18nPrefix + "graph.title_4"),
          xAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level_cost"),
          yAxesLabel: this.$i18n.i18next.t("utils.graph.gb_reward_1st_place")
        }
      },
      labels: [],
      datasets: [],
      options: {
        responsive: true,
        stacked: true,
        title: {
          display: true,
          text: ""
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
                labelString: ""
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: ""
              },
              ticks: {
                suggestedMin: defaultFromGraph,
                suggestedMax: defaultToGraph
              }
            }
          ]
        }
      },
      ageConfig: {
        Oracle: {
          name: this.$i18n.i18next.t("foe_data.age.Oracle"),
          color: "rgb(102,34,17)"
        },
        NoAge: {
          name: this.$i18n.i18next.t("foe_data.age.NoAge"),
          color: "rgb(102,34,17)"
        },
        BronzeAge: {
          name: this.$i18n.i18next.t("foe_data.age.BronzeAge"),
          color: "rgb(183,141,19)"
        },
        IronAge: {
          name: this.$i18n.i18next.t("foe_data.age.IronAge"),
          color: "rgb(152,68,32)"
        },
        EarlyMiddleAges: {
          name: this.$i18n.i18next.t("foe_data.age.EarlyMiddleAges"),
          color: "rgb(78,129,68)"
        },
        HighMiddleAges: {
          name: this.$i18n.i18next.t("foe_data.age.HighMiddleAges"),
          color: "rgb(47,142,142)"
        },
        LateMiddleAges: {
          name: this.$i18n.i18next.t("foe_data.age.LateMiddleAges"),
          color: "rgb(127,66,133)"
        },
        ColonialAge: {
          name: this.$i18n.i18next.t("foe_data.age.ColonialAge"),
          color: "rgb(206,100,4)"
        },
        IndustrialAge: {
          name: this.$i18n.i18next.t("foe_data.age.IndustrialAge"),
          color: "rgb(167,41,38)"
        },
        ProgressiveEra: {
          name: this.$i18n.i18next.t("foe_data.age.ProgressiveEra"),
          color: "rgb(182,137,91)"
        },
        ModernEra: {
          name: this.$i18n.i18next.t("foe_data.age.ModernEra"),
          color: "rgb(70,93,136)"
        },
        PostmodernEra: {
          name: this.$i18n.i18next.t("foe_data.age.PostmodernEra"),
          color: "rgb(141,146,146)"
        },
        ContemporaryEra: {
          name: this.$i18n.i18next.t("foe_data.age.ContemporaryEra"),
          color: "rgb(141,199,63)"
        },
        Tomorrow: {
          name: this.$i18n.i18next.t("foe_data.age.Tomorrow"),
          color: "rgb(123,137,137)"
        },
        TheFuture: {
          name: this.$i18n.i18next.t("foe_data.age.TheFuture"),
          color: "rgb(34,90,75)"
        },
        ArcticFuture: {
          name: this.$i18n.i18next.t("foe_data.age.ArcticFuture"),
          color: "rgb(67,66,66)"
        },
        OceanicFuture: {
          name: this.$i18n.i18next.t("foe_data.age.OceanicFuture"),
          color: "rgb(127,255,212)"
        }
      },
      statSelector: "cost_level",
      maxLevelGraph: Object.keys(gbsData)
        .map(k => gbsData[k])
        .map(item => item.levels.length)
        .reduce((a, b) => Math.max(a, b), -Infinity),
      maxAgeCost: agesCost.OceanicFuture,
      from: defaultFromGraph,
      to: defaultToGraph,
      errors: {
        from: false,
        to: false
      }
    };

    for (const gb in gbsData) {
      if (gbsData[gb].levels.length === obj.maxLevelGraph) {
        obj.maxAgeCost = agesCost[gbsData[gb].age];
      }
    }

    this.updateGraphData(obj);

    return obj;
  },
  computed: {
    lang() {
      return this.$store.state.locale;
    }
  },
  watch: {
    statSelector: {
      handler() {
        this.updateGraphData();
      },
      deep: true
    },
    lang() {
      Object.assign(this.$data, {
        graphType: {
          cost_level: {
            title: this.$i18n.i18next.t(i18nPrefix + "graph.title_1"),
            xAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level"),
            yAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level_cost")
          },
          reward_level: {
            title: this.$i18n.i18next.t(i18nPrefix + "graph.title_2"),
            xAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level"),
            yAxesLabel: this.$i18n.i18next.t("utils.graph.gb_reward_1st_place")
          },
          reward_cost: {
            title: this.$i18n.i18next.t(i18nPrefix + "graph.title_3"),
            xAxesLabel: this.$i18n.i18next.t("utils.graph.gb_reward_1st_place"),
            yAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level_cost")
          },
          cost_reward: {
            title: this.$i18n.i18next.t(i18nPrefix + "graph.title_4"),
            xAxesLabel: this.$i18n.i18next.t("utils.graph.gb_level_cost"),
            yAxesLabel: this.$i18n.i18next.t("utils.graph.gb_reward_1st_place")
          }
        },
        ageConfig: {
          Oracle: {
            name: this.$i18n.i18next.t("foe_data.age.Oracle"),
            color: "rgb(102,34,17)"
          },
          NoAge: {
            name: this.$i18n.i18next.t("foe_data.age.NoAge"),
            color: "rgb(102,34,17)"
          },
          BronzeAge: {
            name: this.$i18n.i18next.t("foe_data.age.BronzeAge"),
            color: "rgb(183,141,19)"
          },
          IronAge: {
            name: this.$i18n.i18next.t("foe_data.age.IronAge"),
            color: "rgb(152,68,32)"
          },
          EarlyMiddleAges: {
            name: this.$i18n.i18next.t("foe_data.age.EarlyMiddleAges"),
            color: "rgb(78,129,68)"
          },
          HighMiddleAges: {
            name: this.$i18n.i18next.t("foe_data.age.HighMiddleAges"),
            color: "rgb(47,142,142)"
          },
          LateMiddleAges: {
            name: this.$i18n.i18next.t("foe_data.age.LateMiddleAges"),
            color: "rgb(127,66,133)"
          },
          ColonialAge: {
            name: this.$i18n.i18next.t("foe_data.age.ColonialAge"),
            color: "rgb(206,100,4)"
          },
          IndustrialAge: {
            name: this.$i18n.i18next.t("foe_data.age.IndustrialAge"),
            color: "rgb(167,41,38)"
          },
          ProgressiveEra: {
            name: this.$i18n.i18next.t("foe_data.age.ProgressiveEra"),
            color: "rgb(182,137,91)"
          },
          ModernEra: {
            name: this.$i18n.i18next.t("foe_data.age.ModernEra"),
            color: "rgb(70,93,136)"
          },
          PostmodernEra: {
            name: this.$i18n.i18next.t("foe_data.age.PostmodernEra"),
            color: "rgb(141,146,146)"
          },
          ContemporaryEra: {
            name: this.$i18n.i18next.t("foe_data.age.ContemporaryEra"),
            color: "rgb(141,199,63)"
          },
          Tomorrow: {
            name: this.$i18n.i18next.t("foe_data.age.Tomorrow"),
            color: "rgb(123,137,137)"
          },
          TheFuture: {
            name: this.$i18n.i18next.t("foe_data.age.TheFuture"),
            color: "rgb(34,90,75)"
          },
          ArcticFuture: {
            name: this.$i18n.i18next.t("foe_data.age.ArcticFuture"),
            color: "rgb(67,66,66)"
          },
          OceanicFuture: {
            name: this.$i18n.i18next.t("foe_data.age.OceanicFuture"),
            color: "rgb(127,255,212)"
          }
        }
      });

      this.updateGraphData();
    },
    from(val, oldVal) {
      if (
        Utils.handlerForm(this, "from", val.length === 0 ? 0 : val, oldVal, [1, this.$data.to]) ===
        Utils.FormCheck.VALID
      ) {
        this.updateGraphData();
      }
    },
    to(val, oldVal) {
      if (
        Utils.handlerForm(this, "to", val.length === 0 ? 0 : val, oldVal, [
          this.$data.from,
          this.$data.maxLevelGraph
        ]) === Utils.FormCheck.VALID
      ) {
        if (this.$data.errors.from) {
          if (val >= this.$data.errors.from) {
            this.$data.errors.from = false;
            this.updateGraphData();
          }
        } else {
          this.updateGraphData();
        }
      }
    }
  },
  methods: {
    updateData(statSelector, graphType, ageConfig, maxAgeCost, from = this.$data.from, to = this.$data.to) {
      const data = {};
      const datasets = [];
      let suggestedMin = Infinity;
      let suggestedMax = -Infinity;

      // let labels = [];
      const labels = Array.from(new Array(to - from + 1), (x, i) => {
        if (statSelector !== "reward_cost" && statSelector !== "cost_reward") {
          return i + from;
        }
        if (statSelector !== "reward_cost") {
          return maxAgeCost[i].cost;
        } else {
          return maxAgeCost[i].reward[0];
        }
      });

      for (const elt in agesCost) {
        data[elt] = agesCost[elt].slice(from - 1, to + 1).map(x => {
          if (statSelector === "cost_level" || statSelector === "reward_cost") {
            suggestedMin = x.cost < suggestedMin ? x.cost : suggestedMin;
            suggestedMax = x.cost > suggestedMax ? x.cost : suggestedMax;
            return x.cost;
          } else {
            suggestedMin = x.reward[0] < suggestedMin ? x.reward[0] : suggestedMin;
            suggestedMax = x.reward[0] > suggestedMax ? x.reward[0] : suggestedMax;
            return x.reward[0];
          }
        });
      }

      for (const elt in agesCost) {
        datasets.push({
          hidden: true,
          label: ageConfig[elt].name,
          fill: false,
          lineTension: 0,
          backgroundColor: Utils.shadeRGBColor(ageConfig[elt].color, 0.5),
          borderColor: ageConfig[elt].color,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: Utils.shadeRGBColor(ageConfig[elt].color, -0.3),
          pointBackgroundColor: Utils.shadeRGBColor(ageConfig[elt].color, 0.3),
          pointBorderWidth: 3,
          pointHoverRadius: 4,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data[elt]
        });
      }

      if (datasets.length > 0) {
        datasets[0].hidden = false;
      }

      return {
        title: graphType[statSelector].title,
        xAxesLabel: graphType[statSelector].xAxesLabel,
        yAxesLabel: graphType[statSelector].yAxesLabel,
        suggestedMin: suggestedMin,
        suggestedMax: suggestedMax,
        labels,
        datasets
      };
    },
    updateGraphData(obj = this.$data) {
      const result = this.updateData(obj.statSelector, obj.graphType, obj.ageConfig, obj.maxAgeCost, obj.from, obj.to);

      obj.options.title.text = result.title;
      obj.options.scales.xAxes[0].scaleLabel.labelString = result.xAxesLabel;
      obj.options.scales.yAxes[0].scaleLabel.labelString = result.yAxesLabel;
      obj.options.scales.yAxes[0].ticks.suggestedMin = result.suggestedMin;
      obj.options.scales.yAxes[0].ticks.suggestedMax = result.suggestedMax;
      obj.labels = result.labels;
      obj.datasets = result.datasets;
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  components: {
    graphCanvas
  }
};
