'use strict';

const webpack = require('webpack');
const helpers = require('./helpers');

// import webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './assets/js/index.jsx',

  // resolve module to js or jsx extensions
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file?name=[path][name].[ext]&context=./assets',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file?name=[path][name].[ext]&context=./assets',
      },
      {
        test: /\.s(c|a)ss$/,
        include: helpers.root('assets'),
        loader: ExtractTextPlugin.extract(
          'style', 'css?sourceMap!sass?sourceMap'
        )
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    }),
    new ExtractTextPlugin('[name].[hash].css', {
      allChunks: true
    })
  ]
};
