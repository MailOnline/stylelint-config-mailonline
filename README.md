# `stylelint-config-mailonline`

MailOnline [stylelint](http://stylelint.io/) configuration.

## Usage

Add `stylelint-config-mailonline` as a development dependency:

```bash
npm install stylelint-config-mailonline --save-dev
```

Create stylelint configuration file (`.stylelintrc`) that extends `stylelint-config-mailonline`:

```json
{
    "extends": "stylelint-config-mailonline"
}
```

## Breaking changes

Any changes to this package that might cause code using it to not validate anymore, will be a semver-major change.
