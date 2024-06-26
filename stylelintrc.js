module.exports = {
  "extends": "stylelint-config-standard",
  "overrides": [
    {
      "extends": "stylelint-config-standard-scss",
      "files": [
        "**/*.scss"
      ],
      "rules": {
        "scss/at-mixin-pattern": null,
        "scss/dollar-variable-pattern": null
      }
    }
  ],
  "rules": {
    "alpha-value-notation": "number", // using "number" here because "percentile" is not supported in rgba function and may break the code if used
    "keyframes-name-pattern": null,
    "no-invalid-position-at-import-rule": null,
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": [
          "composes"
        ]
      }
    ],
    "selector-id-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "local",
          "global"
        ]
      }
    ],
    "value-keyword-case": [
      "lower",
      {
        "camelCaseSvgKeywords": true
      }
    ]
  }
};
