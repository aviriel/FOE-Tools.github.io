import i18next from "i18next";
import Cookies from "js-cookie";

import common from "~/i18n/common.json";
import en from "~/i18n/en.json";
import fr from "~/i18n/fr.json";
import de from "~/i18n/de.json";

if (Cookies.get("lang") === undefined) {
  Cookies.set("lang", "en");
}

const languageList = ["common", "en", "fr", "de"];
const resources = { common: common, en: en, fr: fr, de: de };

i18next.init(
  {
    lng: Cookies.get("lang"),
    debug: false,
    whitelist: languageList,
    ns: ["common", "translation"],
    fallbackLng: languageList,
    fallbackNS: ["common"],
    resources: resources
  },
  function() {}
);

export { i18next };
