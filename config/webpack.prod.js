var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

const ENV = process.env.NODE_ENV = process.env.ENV || "production";
const theMovieDBApiKey = process.env.theMovieDBApiKey = process.env.theMovieDBApiKey || "99b4c3070137e46945a47d68eb4d49f3";

module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",
  output: {
    path: helpers.root("dist/public"),
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    }),
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(ENV),
        theMovieDBApiKey: JSON.stringify(theMovieDBApiKey)
      }
    })
  ]
});