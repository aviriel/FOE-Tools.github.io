import foeGBData from "~/scripts/foe-gb-data";
import gbInvestment from "~/components/gb-investment/index";
import securePosition from "~/components/secure-position/index";

const i18nPrefix = "routes.gb_investment.";

export default {
  validate({ params }) {
    // Check if `params.gb` is an existing Great Building
    return Object.keys(foeGBData.gbs)
      .map(key => foeGBData.gbs[key])
      .some(gb => gb.key === params.gb);
  },
  head() {
    this.$store.commit("SET_HERO", {
      title: this.$t(i18nPrefix + "hero.title", {
        gb_key: "foe_data.gb." + this.$data.gb.key
      }),
      subtitle: "routes.gb_investment_gb_chooser.hero.subtitle"
    });

    return {
      title: this.$t(i18nPrefix + "title", {
        gb_key: "foe_data.gb." + this.$data.gb.key
      })
    };
  },
  asyncData({ params }) {
    return params.gb ? { gb: foeGBData.gbs[params.gb] } : {};
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "gb_investment");

    return {
      i18nPrefix: i18nPrefix,
      levelCost: 0
    };
  },
  components: {
    gbInvestment,
    securePosition
  }
};
