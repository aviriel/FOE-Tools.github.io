import i18next from "i18next";
import Cookies from "js-cookie";

import en from "~/i18n/en.json";
import fr from "~/i18n/fr.json";
import de from "~/i18n/de.json";

if (Cookies.get("lang") === undefined) {
  Cookies.set("lang", "en");
}

const whitelist = ["en", "fr", "de"];
const resources = { en: en, fr: fr, de: de };

i18next.init(
  {
    lng: Cookies.get("lang"),
    debug: true,
    whitelist: whitelist,
    fallbackLng: ["en", "fr", "de"],
    resources: resources
  },
  function() {}
);

export { i18next };
