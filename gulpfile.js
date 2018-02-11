const gulp = require("gulp");

const plugins = require("gulp-load-plugins")();

const path = require("path");

const runSequence = require('run-sequence');

const config = {
  projectDir: __dirname,
  configDir: path.join(__dirname, "config"),
  taskDir: path.join(__dirname, "tasks"),
  srcDir: path.join(__dirname, "src"),
  tsLintSrcConf: path.join(__dirname, "tslint.json")
};

function tasks(task, options) {
    return require( path.join(config.taskDir, task) )(gulp, plugins, options);
}

function getWebpackConfig(configEnv){
    return require( path.join(config.configDir, configEnv) );
}

gulp.task("build:dev", (done)=>
  runSequence(
    'lint',
    'c:dist',
    'b:dev',
    done
));

gulp.task("build:prod", (done)=>
runSequence(
  'lint',
  'c:dist',
  'b:prod',
  done
));

// Linting typescript files with tslint
gulp.task("lint", tasks("tslint", { config: path.join(__dirname, "tslint.json") } ));

// Clear dist folder
gulp.task('c:dist', tasks('clear.dist'));

// Build dev bundle using webpack dev configurations
gulp.task("b:dev", tasks('build.dev', { config: getWebpackConfig('webpack.dev') }));

// Build dev bundle using webpack prod configurations
gulp.task("b:prod", tasks('build.prod', { config: getWebpackConfig('webpack.prod') }));

// Watch
gulp.task("lint:w", () => {
  gulp.watch("src/**/*.ts", ["lint"]);
});