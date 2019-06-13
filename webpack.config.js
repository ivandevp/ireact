const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'iReact Demo',
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
