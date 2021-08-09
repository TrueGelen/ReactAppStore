const postcssPresetEnv = require('postcss-preset-env');
// css-mqpacker - https://github.com/hail2u/node-css-mqpacker
// cssnano - https://github.com/hail2u/node-css-mqpacker

module.exports = {
  plugins: [
    postcssPresetEnv(/* pluginOptions */),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}
