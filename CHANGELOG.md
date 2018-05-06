# Changelog

This project uses [Semantic Versioning](https://semver.org/).

# 2.X

This version using [Nuxt.js](https://nuxtjs.org/) (Universal [Vue.js](https://vuejs.org/) Applications).

## 2.0.X

### 2.1.0 - 2018-05-06

- Fix issue in "Forecast cost GB" when "From" input is empty

- Update Tomorrow data, add level 26 to 70

  ​

### 2.0.1 - 2018-05-06

- Fix graph is show in "Forecast cost GB" when we estimate a single level
- Fix bad redirect in english in "GB Investment"
- Fix table overflow
- Fix bad i18n key for permalink in "About"

### 2.0.0 - 2018-05-05

- Migrate from [Marko](https://markojs.com/) to [Vue](https://vuejs.org/) ([Nuxt](https://nuxtjs.org/))
- Add tool: "GB Statistics"
- Add tool: "Forcast cost GB" and have permalink
- Add information message when an user visited a perma-link to signal that these changes will not be saved in cookies
- Add a cookie disclaimer message
- Add `noscript`  tag to notify users that the site needs JavaScript to work
- Add a switch for each place in GB Investment to add this place in promotion message or not
- Add GB: "The Blue Galaxy"
- Add permalink in "secure place" and "Château Frontenac Calculator"
- Add sub-route by path
- Add meta tags for SEO
- Improve promotion message in GB Investment, add button to automatically copy the message, prefix and suffix input
- Fix bad value for reward of level 52 of Oceanic Future
- Fix cookies expiration
- Fix infinity calculation in "Château Frontenac Calculator"
- Update GB data [#25](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/25)



# 1.X

This version using [Marko](https://markojs.com/).

## 1.5.X

### 1.5.1 - 2018-03-02

-   Fix cost and rewards of Oracle of Delphi [#24](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/24)

### 1.5.0 - 2018-02-22

- Add changelog page [#21](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/21)
- Add contributor page [#20](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/20)
- Add Chateau Frontenac Calculator [#15](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/15)
- Add support of Russian (by [aviriel](https://github.com/aviriel)) [#14](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/14)
- Add return on investment in secure-position tool [#12](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/12)

## 1.4.X

### 1.4.0 - 2018-02-05

-   Added support of German (by [Nlossae](https://github.com/Nlossae)) [#6](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/6)
-   Fix selected option in GB select list [#7](https://github.com/FOE-Tools/FOE-Tools.github.io/pull/7)

## 1.3.x

### 1.3.3 - 2018-01-22

- Fix reward

### 1.3.2 - 2018-01-07

- Fix English translation
- Update French translation

### 1.3.1 - 2018-01-06

- Fix permalink i18n key in about

### 1.3.0 - 2018-01-01

-   Added support of internationalization
-   Added support of English
-   Fix issue with secure position (bad checking for rest of cost of level)

## 1.2.x

### 1.2.2 - 2017-12-23

- Improve readability of secure-position

### 1.2.1 - 2017-12-23

- Updated home page

### 1.2.0 - 2017-12-23

- Added tool: Secure position (and integrating it to GB Investment)
- Added cookies for improve UX
- Imporved display of GB
- Correction of mistakes in texts
- Prevent bugs (GB Investment and Cookie)

## 1.1.x

### 1.1.0 - 2017-12-22

- Added a select to switch quickly between GB in GB-Investment
- Added indication for input data in GB-Investment
- Added buttons for running calculation if auto-mode not work
- Updated GB values for Future Era

## 1.0.x

### 1.0.1 - 2017-12-20

- Add focus on level input
- Add autocomplete to off (because it is useless here)
- Fix trouble with level input on GB-Investment (User can't delete last digit of level input)

### 1.0.0 - 2017-12-20

Initial version of the website.

- home
- about
- GB Investment
