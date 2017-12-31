import i18next from "i18next";

import en from "~/i18n/en.json";
import fr from "~/i18n/fr.json";
const whitelist = ["en", "fr"];
const resources = { en: en, fr: fr };

i18next.init(
  {
    lng: "fr",
    debug: true,
    whitelist: whitelist,
    fallbackLng: "en",
    resources: resources
  },
  function() {}
);

export { i18next };
