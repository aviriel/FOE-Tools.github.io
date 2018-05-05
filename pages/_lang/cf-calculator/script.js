import cfCalculator from "~/components/cf-calculator/index";

const i18nPrefix = "routes.cf_calculator.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "cf_calculator");

    return {};
  },
  components: {
    cfCalculator
  }
};
