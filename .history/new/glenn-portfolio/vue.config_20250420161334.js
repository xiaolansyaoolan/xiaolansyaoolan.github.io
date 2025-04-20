const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
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
        // 启用CSS模块化但排除.vue文件
        modules: {
          auto: (resourcePath) => !resourcePath.endsWith(".vue"),
        },
      },
    },
  },
});
