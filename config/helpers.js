'use strict';

var path = require('path');
var _root = path.resolve(__dirname, '..');

/**
 * resolves any path in the project
 * starting from the root directory
 * @param  {string} args the path to a subfolder in the project
 * @return {string}      the absolute path for the folder, starting from the root directory
 */
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
