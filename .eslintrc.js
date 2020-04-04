module.exports = {
  parser: "vue-eslint-parser",
  extends: ["plugin:gridsome/recommended"],
  plugins: [
    "gridsome",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
}
