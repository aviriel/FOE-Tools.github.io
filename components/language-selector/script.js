import Utils from "~/scripts/utils";

export default {
  name: "LanguageSelector",
  data() {
    return {
      currentLang: this.$cookies.get("locale")
    };
  },
  watch: {
    currentLang(lang) {
      this.$cookies.set("locale", lang, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.$store.commit("SET_LANG", lang);
      window.location.reload();
    }
  }
};
