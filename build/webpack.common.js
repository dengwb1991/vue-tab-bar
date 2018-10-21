const path = require('path');
const webpack = require('webpack');
const config = require('../config')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const vueLoaderConfig = require('./vue-loader.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  entry: {
    app: './index.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: [
      resolve('src'),
      resolve('node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        },
        include: [resolve('src'), resolve('index.js'), resolve('node_modules/webpack-dev-server/client')],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new webpack.optimize.UglifyJsPlugin({
    //     minimize: true,
    //     sourceMap: false,
    //     mangle: true,
    //     compress: {
    //         warnings: false,
    //     },
    // })
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    })
  ],
  output: {
    filename: '[name].bundle.min.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    library: 'VueTabBar',
    libraryTarget: 'umd'
  }
}