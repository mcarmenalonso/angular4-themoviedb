"use strict";
const webpack = require("webpack");

module.exports = function(gulp, plugins, options){
  return (done)=>{
    
    let myDevConfig = Object.create(options.config);
    
    const devCompiler = webpack(myDevConfig);
    devCompiler.run(function(err, stats) {
      if(err) throw new plugins.util.PluginError("b:dev", err);
      plugins.util.log("[b:dev]", stats.toString({
        colors: true
      }));
      done();
    });
  };
};



