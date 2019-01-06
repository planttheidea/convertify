const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 3000;

const defaultConfig = require('./webpack.config');

module.exports = Object.assign({}, defaultConfig, {
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    inline: true,
    lazy: false,
    noInfo: false,
    port: PORT,
    quiet: false,
    stats: {
      colors: true,
      progress: true,
    },
  },

  entry: [path.resolve(__dirname, 'DEV_ONLY', 'App.js')],

  plugins: defaultConfig.plugins.concat([new HtmlWebpackPlugin()]),
});
