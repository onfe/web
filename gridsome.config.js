const addStyleResource = require("./src/plugins/style-resources.js");

module.exports = {
  siteName: "Onfe",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/posts/*/index.md",
        typeName: "Post"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        // resolveAbsolutePaths: true,
        path: "./content/projects/*/index.md",
        typeName: "Project"
      }
    }
  ],
  chainWebpack(config) {
    // Load global scss variables
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
  templates: {
    Post: "/blog/p/:title"
  }
};
