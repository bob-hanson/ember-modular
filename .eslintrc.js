module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  globals: {
    server: true,
    'window': true,
    'document': true,
    'history': true,
    'FileReader': true,
    'FormData': true,
    'alert': true,
    'moment': true
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'generator-star-spacing': ["error", { "before": true, "after": true }],
    'no-control-regex': 'off',
    'vars-on-top': ['error'],
    'camelcase': ["error", { properties: "never" }],
    'one-var': ["error", { var: "always", let: "never", const: "never" }],
    'no-console': 0,
    "ember/use-ember-get-and-set": 0,
    "ember/no-observers": 0,
    "ember/routes-segments-snake-case": 0,
    "ember/order-in-routes": 0,
    "ember/order-in-models": 0,
    "ember/order-in-components": 0,
    "ember/use-brace-expansion": 2,
    "ember/no-attrs-in-components": 0,
    "ember/avoid-leaking-state-in-components": [1, ['array', 'of', 'ignored', 'properties']],
    "ember/avoid-leaking-state-in-ember-objects": [0, ['array', 'of', 'ignored', 'properties']],
  }
};
