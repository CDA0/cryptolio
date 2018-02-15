module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-semipretty",
    "plugin:react/recommended",
    "plugin:jest/recommended"
  ],
  rules: {
    "import/no-duplicates": "never"
  }
}
