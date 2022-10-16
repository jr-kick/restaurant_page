const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
      clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [

      {
        test: /\.(jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(html)$/i,
        loader: 'html-loader',
      }
      ],
     },
};