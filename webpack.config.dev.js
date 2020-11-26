const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
  devtool: 'source-map',
});
