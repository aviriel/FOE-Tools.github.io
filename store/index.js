import { defaultLocale } from "~/scripts/i18n";

import Vue from "vue";

const hero = {
  title: "components.site_layout.hero.title",
  subtitle: "components.site_layout.hero.slogan_html"
};

export const state = () => ({
  /**
   * Contains all no-dynamic routes
   */
  routes: {
    home: { key: "home", link: "/" },
    gb_investment: { key: "gb_investment", link: "gb-investment" },
    secure_position: { key: "secure_position", link: "secure-position" },
    cf_calculator: { key: "cf_calculator", link: "cf-calculator" },
    about: { key: "about", link: "about" },
    contributors: { key: "contributors", link: "contributors" },
    changelog: { key: "changelog", link: "changelog" },
    gb_statistics: { key: "gb_statistics", link: "gb-statistics" },
    gb_forecast_cost: { key: "gb_forecast_cost", link: "gb-forecast-cost" }
  },

  /**
   * Current locale used
   */
  locale: defaultLocale,

  /**
   * Current location
   */
  currentLocation: "",

  /**
   * Hero info
   */
  hero,

  /**
   * Array that contains URL query (for perma-link)
   */
  urlQuery: {},

  /**
   * Check if current location is permalink. True if permalink, False otherwise
   */
  isPermalink: false
});

export const mutations = {
  /**
   * Mutator of locale
   * @param state Reference of state
   * @param value New value
   */
  SET_LANG(state, value) {
    Vue.set(state, "locale", value);
  },

  /**
   * Mutator of hero
   * @param state Reference of state
   * @param value New value
   */
  SET_HERO(state, value) {
    Vue.set(state, "hero", value);
  },

  /**
   * Restore default value of hero
   * @param state
   */
  RESTORE_HERO(state) {
    Vue.set(state, "hero", hero);
  },

  /**
   * Mutator of currentLocation
   * @param state Reference of state
   * @param value New value
   */
  SET_CURRENT_LOCATION(state, value) {
    Vue.set(state, "currentLocation", value);
    Vue.set(state, "urlQuery", {});
    Vue.set(state, "isPermalink", false);
  },

  /**
   * Add a query parameter into urlQuery
   * @param state Reference of state
   * @param obj {object} Contains an elemenet 'key' and 'value'
   */
  ADD_URL_QUERY: ({ urlQuery }, obj) => {
    if (obj.key in urlQuery) {
      throw new Error(`"${obj.key}" already defined in state.urlQuery`);
    }
    Vue.set(urlQuery, obj.key, obj.value);
  },

  /**
   * Update a query parameter
   * @param state Reference of state
   * @param obj {object} Contains an elemenet 'key' and 'value'
   */
  UPDATE_URL_QUERY: ({ urlQuery }, obj) => {
    const key = obj.key;
    Vue.set(urlQuery, key, obj.value);
  },

  /**
   * Mutator of isPermalink
   * @param state Reference of state
   * @param value New value
   */
  IS_PERMALINK: (state, value) => {
    Vue.set(state, "isPermalink", value);
  }
};
