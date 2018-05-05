import gbStatistics from "~/components/gb-statistics/index";

const i18nPrefix = "routes.gb_statistics.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "gb_statistics");

    return {};
  },
  components: {
    gbStatistics
  }
};
