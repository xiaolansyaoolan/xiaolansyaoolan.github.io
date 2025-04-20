const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: (resourcePath) => !resourcePath.endsWith(".vue"),
        },
        url: false,
      },
    },
    devServer: {
      static: {
        directory: "public",
        watch: true,
      },
    },
  },
});
