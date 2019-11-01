const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/main.js',
  ],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: "dist/"
  },

  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: '/node-modules/'},
      {test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],

  devServer: {
    overlay: true
  }
};
