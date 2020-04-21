const path = require('path')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const withFonts = require('next-fonts')

module.exports = withPlugins([withOptimizedImages, withFonts, withCSS], {
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
})
