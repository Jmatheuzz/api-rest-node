module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: "off",
    "no-console": "off",
    "class-methods-use-this": "off",
    "import/newline-after-import": "off",
    "import/first": "off",
    "arrow-parens": "off",
    "no-param-reassign":""
  },
};
