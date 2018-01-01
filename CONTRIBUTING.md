## Contributing

Please, create a fork and an explicit branch name. For exemple, if you fix something (ex: mail sending) create a branch like this: `git checkout -b fix/mail-sending`.



For commit message, follow [this recommendation](https://chris.beams.io/posts/git-commit/).



**PR are accepted on `dev` branch**. Master branch it is only for website GitHub static page (so, production).



### Adding language

For adding language, create a json file in `i18n/` where the name is a code of language.

Next, in `src/services/i18next.js` add your langue in whitelist.

*Note: the code of language respect [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/code_list.php) standard.*

