module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error"
  },
  parser: "babel-eslint",
  parserOptions: {},
  globals: {}
};
