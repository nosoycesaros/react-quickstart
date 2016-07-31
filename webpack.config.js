'use strict';

// get the node environment to determine
// which webpack build config will be used
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

/**
 * get the appropiate webpack configuration
 * for the specified environment
 * @param  {string} env a string with the environment description (e.g: development or production)
 * @return {Object}     the parsed webpack configuration to use
 */
function getConfigForEnvironment(env) {
  switch(env) {
    case 'production':
      return require('./config/webpack.production.js');
    case 'development':
    default:
      return require('./config/webpack.dev.js');
  }
};

// get the configuration for the current environment and export it
let config = getConfigForEnvironment(ENV);
module.exports = config;
