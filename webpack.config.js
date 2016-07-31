'use strict';

// get the node environment to determine
// which webpack build config will be used
const ENV = process.env.NODE_ENV;

/**
 * get the appropiate webpack configuration
 * for the specified environment
 * @param  {string} env a string with the environment description (e.g: development or production)
 * @return {Object}     the parsed webpack configuration to use
 */
function getConfigForEnvironment(env) {
  const webpackConfig = `./config/webpack.${env}.js`;
  return require(webpackConfig);
};

// get the configuration for the current environment and export it
console.log("-------------------------------------------");
console.log("REACT QUICKSTART");
console.log("-------------------------------------------");
console.info('Environment:', ENV);

let config = getConfigForEnvironment(ENV);
module.exports = config;
