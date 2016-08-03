'use strict';

const webpack      = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers      = require('./helpers');

// import webpack plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// force the ENV variable into 'production'
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    // include the ENV variable, so it can be used inside the
    // source file, for conditionally executing any code when
    // the script is running in the desired environment.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      // Don't beautify output (enable for neater output)
      beautify: false,

      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
        warnings: false,

        // Drop `console` statements
        drop_console: true
      },

      // Mangling specific options
      mangle: {
        // Don't mangle $
        except: ['$'],

        // Don't care about IE8
        screw_ie8 : true,
      }
    })
  ]
});
