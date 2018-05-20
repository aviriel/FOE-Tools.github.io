import languageSelector from "~/components/language-selector";
import packageConfig from "~/package.json";

import Utils from "~/scripts/utils";

const i18nPrefix = "components.site_layout.";

export default {
  head() {
    return {
      link: [
        {
          hid: "icon_1",
          rel: "icon",
          type: "image/png",
          href: "/img/icons/favicon-16x16.png"
        }
      ],
      htmlAttrs: {
        lang: this.lang
      }
    };
  },
  data() {
    return {
      i18nPrefix: i18nPrefix,
      siteVersion: packageConfig.version,
      burgerMenuVisible: false,
      cookieDisclaimerUndisplayed:
        this.$cookies.get("cookieDisclaimerDisplayed") === undefined
          ? true
          : this.$cookies.get("cookieDisclaimerDisplayed") !== true,
      navbarLinks: {
        home: this.$store.state.routes.home,
        gb_investment: this.$store.state.routes.gb_investment,
        secure_position: this.$store.state.routes.secure_position,
        cf_calculator: this.$store.state.routes.cf_calculator,
        gb_statistics: this.$store.state.routes.gb_statistics,
        gb_forecast_cost: this.$store.state.routes.gb_forecast_cost
      },
      footerLinks: [
        this.$store.state.routes.about,
        this.$store.state.routes.contributors,
        this.$store.state.routes.changelog
      ]
    };
  },
  computed: {
    isPermalink() {
      return this.$store.state.isPermalink;
    },
    lang() {
      return this.$store.state.locale;
    }
  },
  watch: {
    lang(val) {
      this.$formatNumberLocale(val);
    }
  },
  mounted() {
    this.$formatNumberLocale(this.lang);

    // Get all "navbar-burger" elements
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      let self = this;

      // Add a click event on each of them
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener("click", function() {
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          self.$data.burgerMenuVisible = !self.$data.burgerMenuVisible;
        });
      });
    }
  },
  methods: {
    confirmInfoCookie() {
      this.$data.cookieUnread = false;
      this.$cookies.set("cookieDisclaimerDisplayed", true, {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    }
  },
  components: {
    languageSelector
  }
};
