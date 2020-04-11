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
        path: "./content/projects/*/index.md",
        typeName: "Project"
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-108088302-3"
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
  },
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
