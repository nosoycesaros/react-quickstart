'use strict';

const webpack = require('webpack');
const helpers = require('./helpers');

// import webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=[path][name].[ext]?[hash]&context=/assets',
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
    }),
    new CopyWebpackPlugin([
      // Copy directory contents to {output}/to/directory/
      { from: 'assets/images', to: 'images' },
      { from: 'assets/fonts', to: 'fonts' }
    ])
  ]
};
