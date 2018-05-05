import Utils from "~/scripts/utils";

const i18nPrefix = "routes.contributors.";

export default {
  head() {
    this.$store.commit("SET_HERO", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle"
    });

    return {
      title: this.$t(i18nPrefix + "title")
    };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "contributors");

    return {
      i18nPrefix: i18nPrefix,
      url:
        "https://api.github.com/repos/FOE-Tools/FOE-Tools.github.io/contributors",
      contributors: []
    };
  },
  methods: {
    i18nExists(key, options) {
      return this.$i18n.i18next.exists(key, options || {});
    }
  },
  mounted() {
    let xhr = new XMLHttpRequest();
    let self = this;
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          self.$data.contributors = Utils.splitArray(
            JSON.parse(xhr.responseText),
            2,
            true
          );
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.open("GET", this.$data.url, true);
    xhr.onerror = function(e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }
};
