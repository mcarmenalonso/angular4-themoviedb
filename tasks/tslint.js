"use strict";

module.exports = function (gulp, plugins, options) {
  return ()=>{
    console.log(options.config);
    var results = gulp.src(
      [ 
        "src/**/*.ts",
        "!typings.d.ts"
      ]);
    return results
      .pipe(plugins.tslint({
          configuration: options.config
      }))
      .pipe(plugins.tslint.report(plugins.tslintStylish, {
        emitError: false,
        sort: true,
        bell: true
      }));
  };
};