module.exports = {
  transpileDependencies: [
    "vuetify"
  ],

  productionSourceMap: false,

  devServer: {
    compress: true
  }

  // pluginOptions: {
  //   prerenderSpa: {
  //     registry: undefined,
  //     renderRoutes: [
  //       '/'
  //     ],
  //     useRenderEvent: true,
  //     headless: true,
  //     onlyProduction: true
  //   }
  // }
}
