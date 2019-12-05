module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es6: true
  },
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error"
  },
  parserOptions: {
    ecmaVersion: 10
  },
  globals: {
    _: false,
    ActiveXObject: false
  }
};
