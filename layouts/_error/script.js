const i18nPrefix = "routes.error.";

function sCode(error) {
  return (error && error.statusCode) || 500;
}

export default {
  props: ["error"],
  head() {
    return {
      title: this.$i18n.i18next.t(i18nPrefix + sCode(this.error) + ".title")
    };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "error");

    return {
      i18nPrefix: i18nPrefix
    };
  },
  computed: {
    statusCode() {
      return sCode(this.error);
    },
    message() {
      const statusCode = sCode(this.error);

      if (
        this.$i18n.i18next.exists(i18nPrefix + statusCode.toString()) &&
        this.$i18n.i18next.exists(i18nPrefix + statusCode.toString() + ".message")
      ) {
        return this.$i18n.i18next.t(i18nPrefix + statusCode.toString() + ".message");
      } else {
        return this.error.message || "messages.client_error";
      }
    }
  }
};
