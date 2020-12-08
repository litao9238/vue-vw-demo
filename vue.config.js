
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  devServer: {
    port: 8077,
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            unitToConvert: "px",
            viewportWidth: 375,// vant 需要设置成375
            unitPrecision: 3,
            propList: [
              "*"
            ],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            // exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略掉依赖里的组件
          })
        ]
      }
    }
  }
}
