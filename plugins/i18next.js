import Utils from "~/scripts/utils";

import Vue from "vue";
import VueI18Next from "@panter/vue-i18next";

import { i18next, defaultLocale, supportedLocales } from "@/scripts/i18n";

Vue.use(VueI18Next);

export default ({ app, store, route }) => {
  if (
    app.$cookies.get("locale") === null ||
    supportedLocales.indexOf(app.$cookies.get("locale")) === -1
  ) {
    app.$cookies.set("locale", route.params.lang || defaultLocale, {
      path: "/",
      expires: Utils.getDefaultCookieExpireTime()
    });
  }

  i18next.changeLanguage(app.$cookies.get("locale"));
  i18next.language = app.$cookies.get("locale");

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18Next(i18next);
  app.defaultLocale = defaultLocale;
  store.supportedLocales = supportedLocales;

  app.i18n.path = link => {
    if (app.i18n.i18next.language === app.defaultLocale) {
      return `${link}`;
    }

    if (link === "/") {
      return `/${app.i18n.i18next.language}/`;
    }

    return `/${app.i18n.i18next.language}/${link}`;
  };
};
