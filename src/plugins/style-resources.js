const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "../assets/scss/globals.scss")]
    });
}

module.exports = addStyleResource;
