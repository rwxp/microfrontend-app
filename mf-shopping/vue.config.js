const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // various other settings such as publicPath, etc
  // ...
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
  },
});
