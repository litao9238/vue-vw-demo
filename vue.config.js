const pxtoviewport = require('postcss-px-to-viewport')
const pxtorem = require('postcss-pxtorem')
const writesvg = require('postcss-write-svg')
const viewportUnits = require('postcss-viewport-units')


// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development';
// 版本号
const webpackPluginVersion = require('./WebpackPluginVersion');

module.exports = {
  devServer: {
    port: 8077,
    disableHostCheck: true,
  },
  configureWebpack: (config) => {
    // 生产环境相关配置
    if (isProduction) {
      config.plugins.push(
        // 版本号
        new webpackPluginVersion(),
      )
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 转rem
          // pxtorem({
          //   rootValue: 37.5,
          //   propList: ['*']
          // }),
          viewportUnits({}),
          writesvg({
            utf8: false
          }),
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
