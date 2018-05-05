import foeGBData from "~/scripts/foe-gb-data";
import Utils from "~/scripts/utils";

const i18nPrefix = "routes.gb_investment_gb_chooser.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "gb_investment");

    return {
      i18nPrefix: i18nPrefix,
      GBsByAge: Utils.splitArray(
        Object.keys(foeGBData.GBs_BY_AGE).map(key => foeGBData.GBs_BY_AGE[key]),
        2,
        true
      )
    };
  },
  mounted() {
    document.foeGBData = foeGBData;
  }
};
