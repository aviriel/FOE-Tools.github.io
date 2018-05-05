## Contributing

Please, create a fork and an explicit branch name. For exemple, if you fix something (ex: mail sending) create a branch like this: `git checkout -b fix/mail-sending`.



For commit message, follow [this recommendation](https://chris.beams.io/posts/git-commit/).



**PR are accepted on `dev` branch**. Master branch it is only for website GitHub static page (so, production).



### Adding language

For adding language, create a json file in `locales/` where the name is a code of language.

In `locales/common.json` add the language in `lang` and `language_selector` name following this syntax: 

For `lang`:

```json
"code ISO 639-1 of language": { 
    "en": "Your language in english", 
    "original": "your language in your language"
}

Exemple:
"fr": { "en": "French", "original": "Français" }
```

For `language_selector`

```json
"code ISO 639-1 of language": "$t(common:lang.<code ISO 639-1 of language>.en) ($t(common:lang.<code ISO 639-1 of language>.original))"

Exemple:
"fr": "$t(common:lang.fr.en) ($t(common:lang.fr.original))"
```



Next, in `script/i18n.js` import the language and add it in **supportedLocales** and **resources**.

*Note: the code of language respect [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/code_list.php) standard.*

