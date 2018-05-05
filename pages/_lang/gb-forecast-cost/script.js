import gbForecastCost from "~/components/gb-forecast-cost/index";

const i18nPrefix = "routes.gb_forecast_cost.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "gb_forecast_cost");

    return {};
  },
  components: {
    gbForecastCost
  }
};
