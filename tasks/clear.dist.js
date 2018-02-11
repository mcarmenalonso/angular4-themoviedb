"use strict";
const del = require('del');

module.exports = function (gulp, plugins, options) {
  return ()=>{
    return del([
      'dist/**/*'
    ], { force: true });
  };
};