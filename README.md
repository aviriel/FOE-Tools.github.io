# FOE Tools

This repo is the [website](https://foe-tools.github.io/) of FOE Tools, a set of tools for [Forge Of Empire](https://forgeofempires.com).

## Install

Using npm:

```bash
npm install
```

Using yarn:

```
yarn
```

## Starting the server

Using npm:

```bash
npm start
```

Using yarn:

```
yarn start
```



## Build a static site
Build the project in production mode:

Using npm:

```bash
npm run build
```

Using yarn:

```
yarn run build
```



The generated static site will be placed in `dist/`.

*Note: if you're having trouble while testing the static site, removing the `dist/` and `.cache/` directories and rebuilding the project.*

## TODO

- [ ] Internationalization (preferably use [i18next](https://www.i18next.com/)) [#1](https://github.com/FOE-Tools/FOE-Tools.github.io/issues/1)
- [ ] Tests


And (obviously) make other tools.



## Contributing

Please, create a fork and an explicit branch. For exemple, if you fix something (ex: mail sending) create a branch like this: `git checkout -b fix/mail-sending`.



For commit message, follow [this recommendation](https://chris.beams.io/posts/git-commit/).



**PR are accepted on `dev` branch**. Master branch it is only for website GitHub static page (so, production).



## Changelog

See [CHANGELOG.md](https://github.com/FOE-Tools/FOE-Tools.github.io/blob/master/CHANGELOG.md)



## Code of Conduct

This project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/). By participating in this project you agree to abide by its terms.



## License

MIT
