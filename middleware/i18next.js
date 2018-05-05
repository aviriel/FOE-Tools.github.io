import Utils from "~/scripts/utils";

export default function({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.defaultLocale;

  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return;
  }

  // Get locale from params
  let locale = params.lang || defaultLocale;

  if (store.supportedLocales.indexOf(locale) === -1) {
    return error({ message: "This page could not be found.", statusCode: 404 });
  }

  if (
    app.$cookies.get("locale") === null ||
    store.supportedLocales.indexOf(app.$cookies.get("locale")) === -1
  ) {
    app.$cookies.set("locale", app.defaultLocale, {
      path: "/",
      expires: Utils.getDefaultCookieExpireTime()
    });
  } else {
    locale = app.$cookies.get("locale");
  }

  // Set locale
  store.commit("SET_LANG", locale);
  app.i18n.i18next.changeLanguage(store.state.locale, (err, t) => {
    if (err) return console.error("something went wrong loading", err);
  });

  // If route is /<defaultLocale>/... -> redirect to /...
  if (
    locale === defaultLocale &&
    route.fullPath.indexOf("/" + defaultLocale) === 0
  ) {
    const toReplace = "^/" + defaultLocale;
    const re = new RegExp(toReplace);
    let result = route.fullPath.replace(re, "");
    result = result[0] !== "/" ? "/" + result : result;

    return redirect(result);
  }

  for (let elt of store.supportedLocales) {
    if (locale !== elt && route.fullPath.indexOf("/" + elt) === 0) {
      const toReplace = "^/" + elt;
      const re = new RegExp(toReplace);
      let result = route.fullPath.replace(re, "/" + locale);
      result = result[0] !== "/" ? "/" + result : result;

      return redirect(result);
    }
  }

  if (
    !(route.fullPath.indexOf("/" + locale) === 0) &&
    locale !== defaultLocale
  ) {
    return redirect("/" + locale + route.fullPath);
  }
}
