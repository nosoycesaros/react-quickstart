'use strict';

const webpack = require('webpack');
const helpers = require('./helpers');

// import webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// import postCSS plugins
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');

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
          'style', 'css?sourceMap!postcss!sass?sourceMap'
        )
      }
    ]
  },

  plugins: [
    // copy root html file and inject the compiled
    // bundles into it
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      cache: true,
      favicon: './favicon.png'
    }),
    // extract the SASS files into a target file in the 'css' folder
    new ExtractTextPlugin('css/[name].[hash].css', {
      allChunks: true
    }),
    // copy static assets as they are into the destination folder
    new CopyWebpackPlugin([
      // Copy directory contents to {output}/to/directory/
      { from: 'assets/images', to: 'images' },
      { from: 'assets/fonts', to: 'fonts' }
    ])
  ],

  // load postcss plugins to be used by the loader
  postcss: function configPostCss() {
    return [
      autoprefixer({ browsers: ['last 4 versions'] }),
      cssnano,
    ];
  },
};
