const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const babelRules = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};

const styleLoaders = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
};

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  module: {
    rules: [babelRules, styleLoaders],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
  ],
};
