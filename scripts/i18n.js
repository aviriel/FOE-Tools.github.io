// Get locales (and common)
const common = require("../locales/common.json");
const en = require("../locales/en.json");
const fr = require("../locales/fr.json");
const de = require("../locales/de.json");
const ru = require("../locales/ru.json");

// Requires al packages
const i18next = require("i18next");
let numeral = require("numeral");

// Constant used
const defaultLocale = "en";
const supportedLocales = ["en", "fr", "de", "ru"];
const languageList = ["common"].concat(supportedLocales);
const resources = { common, en, fr, de, ru };

i18next.init({
  lng: defaultLocale,
  debug: false,
  whitelist: languageList,
  ns: ["common", "translation"],
  fallbackLng: languageList,
  fallbackNS: ["common"],
  resources,
  interpolation: {
    format: function(value, format, lng) {
      if (format === "number") {
        numeral.locale(lng);
        return numeral(value).format("0,0");
      }
      return value;
    }
  }
});

exports.i18next = i18next;
exports.defaultLocale = defaultLocale;
exports.supportedLocales = supportedLocales;
