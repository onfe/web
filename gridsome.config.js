const addStyleResource = require("./src/plugins/style-resources.js");

module.exports = {
  siteName: "Onfe",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '**/post.md',
        baseDir: './content/posts/',
        typeName: 'Post',
        route: '/blog/p/:title'
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
};
