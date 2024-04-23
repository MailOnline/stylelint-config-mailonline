# `stylelint-config-mailonline`

[![NPM version](http://img.shields.io/npm/v/stylelint-config-mailonline.svg?style=flat-square)](https://www.npmjs.org/package/stylelint-config-mailonline)

MailOnline [stylelint](http://stylelint.io/) configuration.

## Usage

Add `stylelint-config-mailonline` as a development dependency:

```bash
npm install stylelint-config-mailonline --save-dev
```

Create stylelint configuration file (`.stylelintrc.js`) that extends `stylelint-config-mailonline`:

```js
module.exports = {
  "extends": "stylelint-config-mailonline",
  // additional config here
};
```

## Breaking changes

Any changes to this package that might cause code using it to not validate anymore, will be a semver-major change.
