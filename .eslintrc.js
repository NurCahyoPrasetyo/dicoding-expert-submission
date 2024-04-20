module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    //! Delete this because confic with my eslint local config
    quotes: "off",
    indent: "off",
    "comma-dangle": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off",
    "no-useless-constructor": "off",
    "no-param-reassign": "off",
    //!
    "import/no-extraneous-dependencies": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "no-restricted-globals": 0,
    "linebreak-style": 0,
  },
};
