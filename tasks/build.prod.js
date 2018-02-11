"use strict";
const webpack = require("webpack");

module.exports = function(gulp, plugins, options){
  return (done)=>{
    webpack(options.config, function(err, stats) {
      if(err) throw new plugins.util.PluginError("b:prod", err);
      plugins.util.log("[b:prod]", stats.toString({
        colors: true
      }));
      done();
    });  
  };
};
