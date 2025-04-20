module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      css: {
        // 启用CSS模块化
        modules: {
          auto: () => true,
        },
      },
    },
  },
};
