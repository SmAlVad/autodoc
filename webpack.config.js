const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/js/main.js',
  ],

  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'main.js',
    publicPath: "dist/js"
  },

  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: '/node-modules/'},
      {test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
    ]
  },

  devServer: {
    overlay: true
  }
};



