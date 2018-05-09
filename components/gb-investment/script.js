import Utils from "~/scripts/utils";
import gbProcess from "~/scripts/foe-gb-investment";
import gbListSelect from "~/components/gb-list-select/index";
import securePosition from "~/components/secure-position/index";

const i18nPrefix = "components.gb_investment.";

let oldInvestorPercentageCustom;
const defaultArcPercentage = 90;

const urlPrefix = "gbi_";

const queryKey = {
  level: urlPrefix + "l",
  investorPercentageGlobal: urlPrefix + "ipg",
  investorPercentageCustom: urlPrefix + "p",
  placeFree: urlPrefix + "pFree",
  prefix: urlPrefix + "px",
  suffix: urlPrefix + "sx"
};

export default {
  name: "GbInvestment",
  props: {
    gb: {
      type: Object,
      required: true
    },
    canPermalink: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const data = {
      i18nPrefix,
      level: this.cookieValid("level")
        ? parseInt(this.$cookies.get("level"))
        : 10,
      maxLevel: this.$props.gb.levels.length,
      investorPercentageGlobal: this.cookieValid("investorPercentageGlobal")
        ? parseFloat(this.$cookies.get("investorPercentageGlobal"))
        : defaultArcPercentage,
      investorPercentageCustom: [
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage,
        defaultArcPercentage
      ],
      placeFree: [
        { state: true },
        { state: true },
        { state: true },
        { state: true },
        { state: true }
      ],
      prefix: this.$cookies.get("gbPrefix")
        ? this.$cookies.get("gbPrefix")
        : "",
      suffix: this.$cookies.get("gbSuffix")
        ? this.$cookies.get("gbSuffix")
        : "",
      result: null,
      errors: {
        level: false,
        percentageValueGlobal: false,
        investorPercentageCustom_0: false,
        investorPercentageCustom_1: false,
        investorPercentageCustom_2: false,
        investorPercentageCustom_3: false,
        investorPercentageCustom_4: false
      },
      promotion: [],
      childChange: false,
      query: this.GET_URL_QUERY
    };

    for (let i = 0; i < 5; i++) {
      if (this.cookieValid("investorPercentageCustom_" + i)) {
        data.investorPercentageCustom[i] = parseFloat(
          this.$cookies.get("investorPercentageCustom_" + i)
        );
      }
    }

    Object.assign(data, this.checkQuery(data.maxLevel));

    oldInvestorPercentageCustom = JSON.parse(
      JSON.stringify(data.investorPercentageCustom)
    );

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.level,
      value: data.level
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.investorPercentageGlobal,
      value: data.investorPercentageGlobal
    });

    for (let index = 0; index < data.investorPercentageCustom.length; index++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.investorPercentageCustom + (index + 1),
        value: data.investorPercentageCustom[index]
      });
    }

    for (let index = 0; index < data.placeFree.length; index++) {
      this.$store.commit("ADD_URL_QUERY", {
        key: queryKey.placeFree + (index + 1),
        value: data.placeFree[index].state ? 1 : 0
      });
    }

    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.prefix,
      value: data.prefix
    });
    this.$store.commit("ADD_URL_QUERY", {
      key: queryKey.suffix,
      value: data.suffix
    });

    return data;
  },
  computed: {
    isPermalink() {
      return this.$store.state.isPermalink;
    },
    lang() {
      return this.$store.state.locale;
    },
    permaLink() {
      return {
        path: this.$i18n.path("gb-investment/" + this.gb.key + "/"),
        query: this.$store.state.urlQuery
      };
    }
  },
  watch: {
    GET_URL_QUERY(val, oldVal) {
      this.$data.permalink.query = val;
    },
    level(val, oldVal) {
      if (
        Utils.handlerForm(
          this,
          "level",
          val.length === 0 ? 0 : val,
          oldVal,
          [1, this.$data.maxLevel],
          !this.isPermalink,
          $nuxt.$route.path
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.level,
          value: val
        });
        this.calculate();
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
          !this.isPermalink,
          $nuxt.$route.path,
          "float"
        ) === Utils.FormCheck.VALID
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageGlobal,
          value: val
        });
        this.calculate();
      }
      for (
        let index = 0;
        index < this.$data.investorPercentageCustom.length;
        index++
      ) {
        this.$store.commit("UPDATE_URL_QUERY", {
          key: queryKey.investorPercentageCustom + (index + 1),
          value: val
        });
        this.$data.investorPercentageCustom[index] = val;
      }
    },
    investorPercentageCustom(val, oldVal) {
      let result = Utils.FormCheck.VALID;
      let tmp;
      for (let index = 0; index < val.length; index++) {
        tmp = Utils.handlerForm(
          this,
          "investorPercentageCustom_" + index,
          val[index].length === 0 ? 0 : val[index],
          oldInvestorPercentageCustom[index],
          [">=", 0],
          !this.isPermalink,
          $nuxt.$route.path,
          "float"
        );
        if (tmp === Utils.FormCheck.INVALID) {
          result = Utils.FormCheck.INVALID;
        } else if (tmp === Utils.FormCheck.VALID) {
          this.$store.commit("UPDATE_URL_QUERY", {
            key: queryKey.investorPercentageCustom + (index + 1),
            value: val[index]
          });
        }
      }
      if (result === Utils.FormCheck.VALID) {
        oldInvestorPercentageCustom = JSON.parse(JSON.stringify(val));
        this.calculate();
      }
    },
    prefix(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.prefix,
        value: val
      });
      this.$cookies.set("gbPrefix", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.updatePromotionMessage();
    },
    suffix(val) {
      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.suffix,
        value: val
      });
      this.$cookies.set("gbSuffix", val, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.updatePromotionMessage();
    },
    result(val) {
      if (val !== null) {
        this.updatePromotionMessage();
      }
    },
    lang() {
      if (this.$data.result !== null) {
        this.updatePromotionMessage();
      }
    }
  },
  methods: {
    goTo(val) {
      window.location.href = this.$i18n.path(`gb-investment/${val}/`);
    },
    cookieValid(key) {
      return (
        this.$cookies.get(key) !== undefined && !isNaN(this.$cookies.get(key))
      );
    },
    calculate() {
      this.$data.result = gbProcess.Submit(
        this.$data.level,
        this.$data.investorPercentageCustom,
        this.$props.gb.levels
      );
      this.$emit("updateLevelCost", this.$data.result.cost);
    },
    getPromo(key) {
      return this.$data[key];
    },
    updatePromotionMessage() {
      this.$data.promotion = [
        this.getPromotionMessage(),
        this.getPromotionMessage(false),
        this.getPromotionMessage(true, true),
        this.getPromotionMessage(false, true)
      ];
    },
    getPromotionMessage(titleFirst = true, reverse = false) {
      let result = this.$data.prefix.length > 0 ? `${this.$data.prefix} ` : "";
      result += titleFirst ? this.$t("foe_data.gb." + this.$props.gb.key) : "";
      let array = reverse
        ? this.$data.result.investment.reduce((a, b) => [b, ...a], [])
        : this.$data.result.investment;

      let i = reverse ? 5 : 0;
      for (const place of array) {
        i -= reverse ? 1 : 0;
        if (place.participation > 0 && this.$data.placeFree[i].state) {
          result += titleFirst
            ? ` ${this.$t(i18nPrefix + "promotion.promo." + i, {
                investment: place.participation
              })}`
            : `${this.$t(i18nPrefix + "promotion.promo." + i, {
                investment: place.participation
              })} `;
        }
        i += reverse ? 0 : 1;
      }

      result += titleFirst ? "" : this.$t("foe_data.gb." + this.$props.gb.key);
      result += this.$data.suffix.length > 0 ? ` ${this.$data.suffix}` : "";

      return { message: result, active: false };
    },
    successCopy(index) {
      this.promotion[index].active = true;
      let self = this;
      setTimeout(function() {
        self.promotion[index].active = false;
      }, 3000);
    },
    isPlaceFree(index) {
      return this.$data.placeFree[index]
        ? this.$t("utils.Yes")
        : this.$t("utils.No");
    },
    changePlaceFree(i, value) {
      this.$data.placeFree[i].state = value;

      this.$store.commit("UPDATE_URL_QUERY", {
        key: queryKey.placeFree + (i + 1),
        value: value ? 1 : 0
      });

      this.$data.promotion = [
        this.getPromotionMessage(),
        this.getPromotionMessage(false),
        this.getPromotionMessage(true, true),
        this.getPromotionMessage(false, true)
      ];
    },
    submitGlobal() {
      const lChange = Utils.handlerForm(
        this,
        "level",
        this.$data.level,
        -1,
        [1, this.$data.maxLevel],
        !this.isPermalink,
        $nuxt.$route.path
      );
      const pChange = Utils.handlerForm(
        this,
        "level",
        this.$data.investorPercentageGlobal,
        -1,
        [">=", 0],
        !this.isPermalink,
        $nuxt.$route.path,
        "float"
      );

      if (pChange === Utils.FormCheck.VALID) {
        for (
          let index = 0;
          index < this.$data.investorPercentageCustom.length;
          index++
        ) {
          this.$data.investorPercentageCustom[
            index
          ] = this.$data.investorPercentageGlobal;
        }
      }

      if (
        lChange !== Utils.FormCheck.INVALID &&
        pChange !== Utils.FormCheck.INVALID &&
        !(lChange === pChange && lChange === Utils.FormCheck.NO_CHANGE)
      ) {
        this.calculate();
      }
    },
    submitCustom() {
      let change = Utils.FormCheck.NO_CHANGE;
      let listCheck = true;

      for (
        let index = 0;
        index < this.$data.investorPercentageCustom.length;
        index++
      ) {
        let result = Utils.handlerForm(
          this,
          "investorPercentageCustom_" + index,
          this.$data.investorPercentageCustom[index],
          -1,
          [">=", 0],
          !this.isPermalink,
          $nuxt.$route.path,
          "float"
        );
        if (result === Utils.FormCheck.INVALID) {
          listCheck = false;
          change = Utils.FormCheck.INVALID;
        } else if (result === Utils.FormCheck.VALID) {
          change = listCheck ? Utils.FormCheck.VALID : change;
        }
      }

      if (change !== Utils.FormCheck.INVALID) {
        this.calculate();
      }
    },

    /**
     * Check URL query and return query data
     * @param maxLevel Max level of the GB
     * @return {Object} Return an object with 'isPermalink' set to False if URI no contains query, otherwise it return
     * an object with corresponding values
     */
    checkQuery(maxLevel) {
      let result = {};
      let investorPercentageCustom = Array.apply(null, Array(5)).map(
        (x, i) => defaultArcPercentage
      );
      let placeFree = Array.apply(null, Array(5)).map((x, i) => {
        return { free: true };
      });
      let isPermalink = false;

      // Check level
      if (
        this.$route.query[queryKey.level] &&
        !isNaN(this.$route.query[queryKey.level]) &&
        Utils.inRange(parseInt(this.$route.query[queryKey.level]), 1, maxLevel)
      ) {
        isPermalink = true;
        result.level = parseInt(this.$route.query[queryKey.level]);
      }

      // Check global investors percentage
      if (
        this.$route.query[queryKey.investorPercentageGlobal] &&
        !isNaN(this.$route.query[queryKey.investorPercentageGlobal]) &&
        parseFloat(this.$route.query[queryKey.investorPercentageGlobal]) >= 0
      ) {
        isPermalink = true;
        result.investorPercentageGlobal = parseInt(
          this.$route.query[queryKey.investorPercentageGlobal]
        );
        investorPercentageCustom = Array.apply(null, Array(5)).map(
          (x, i) => result.investorPercentageGlobal
        );
      }

      //  Check percentage value for each investors
      for (let i = 0; i < 5; i++) {
        if (
          this.$route.query[queryKey.investorPercentageCustom + (i + 1)] &&
          !isNaN(
            this.$route.query[queryKey.investorPercentageCustom + (i + 1)]
          ) &&
          parseFloat(
            this.$route.query[queryKey.investorPercentageCustom + (i + 1)]
          ) >= 0
        ) {
          isPermalink = true;
          investorPercentageCustom[i] = parseFloat(
            this.$route.query[queryKey.investorPercentageCustom + (i + 1)]
          );
        }
      }

      //  Check free place for each investors
      for (let i = 0; i < 5; i++) {
        if (
          this.$route.query[queryKey.placeFree + (i + 1)] &&
          !isNaN(this.$route.query[queryKey.placeFree + (i + 1)]) &&
          parseInt(this.$route.query[queryKey.placeFree + (i + 1)]) >= 0
        ) {
          isPermalink = true;
          placeFree[i].state =
            parseInt(this.$route.query[queryKey.placeFree + (i + 1)]) === 1;
        }
      }

      if (this.$route.query[queryKey.prefix]) {
        isPermalink = true;
        result.prefix = this.$route.query[queryKey.prefix];
      }

      if (this.$route.query[queryKey.suffix]) {
        isPermalink = true;
        result.suffix = this.$route.query[queryKey.suffix];
      }

      if (isPermalink) {
        this.$store.commit("IS_PERMALINK", true);
        result.investorPercentageCustom = investorPercentageCustom;
        result.placeFree = placeFree;
      }

      return result;
    },
    haveError(input) {
      return this.$data.errors[input] ? "is-danger" : "";
    }
  },
  mounted() {
    this.calculate();
    // setTimeout(() => {
    //   this.calculate();
    // }, 100);
  },
  components: {
    gbListSelect,
    securePosition
  }
};
