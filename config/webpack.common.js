var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./helpers");

module.exports = {
  entry: {
    "polyfills": "./src/polyfills.ts",
    "vendor": "./src/vendor.ts",
    "app": "./src/main.ts"
  },

  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader", "angular2-template-loader", "angular-router-loader"]
      },
      {
        test: /\.js$/,
        include: helpers.root("public", "js"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["env", {
                "targets": {
                  "uglify": true
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              removeAttributeQuotes: false,
              caseSensitive: true,
              customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
              customAttrAssign: [ /\)?\]?=/ ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|wav|mp3)$/,
        use: [
                {
                  loader: "file-loader",
                  query: {
                    name: "assets/[name].[ext]" 
                      }
                    }
                  ]
        },
        {
          test: /\.css$/,
          exclude: helpers.root("src", "app"),
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
              loader: "css-loader",
              query: {
                sourceMap: true
              }
            }]
          })
        },
        {
          test: /\.css$/,
          include: helpers.root("src", "app"),
          loader: "raw-loader"
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: "url-loader",
            query: {
              limit: 10000,
              mimetype: "application/font-woff"
            }
          }]
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: "url-loader",
            query: {
              limit: 10000,
              mimetype: "application/font-woff"
            }
          }]
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: "url-loader",
            query: {
              limit: 10000,
              mimetype: "application/octet-stream"
            }
          }]
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: "url-loader",
            query: {
              limit: 10000,
              mimetype: "image/svg+xml"
            }
          }]
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file-loader"
        }
        ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["app", "vendor", "polyfills"]
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      chunksSortMode: "dependency"
    })
  ]
};
