const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  devtool: 'inline-source-map',
  output: { filename: 'bundle.js', publicPath: '' },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ { loader: 'babel-loader', options: { presets: ['env', 'react', 'stage-2'] } } ],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'react crypto example', template: './src/index.html' })
  ],
}
