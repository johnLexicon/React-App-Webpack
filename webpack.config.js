const webpack = require("webpack");
const path = require("path");

// /Users/johnlundgren/dev/reactJs/react-app-webpack/ClientApp
const APP_DIR = path.resolve(__dirname, "ClientApp");
// /Users/johnlundgren/dev/reactJs/react-app-webpack/public
const PUBLIC_DIR = path.resolve(__dirname, "public");

//Object with instructions for Webpack to know what to do.
const config = {
  entry: path.resolve(APP_DIR, "Client.js"), //Entry is what should be bundled.
  devServer: {
    contentBase: PUBLIC_DIR, //Webserver's base directory
    port: 9000, //Default port
    open: true, //Open webserver by default.
    historyApiFallback: true
  },
  output: {
    path: PUBLIC_DIR,
    filename: "bundle.js"
  },
  devtool: "source-map", //Tells webpack to create a source map that our debug tools will use.
  module: {
    rules: [
      {
        test: /\.js?$/, // Apply Babel to all js files (Do not need then to specify jsx as file extension).
        loader: "babel-loader",
        exclude: /node-modules/, //Tell Babel not to include content from node-modules folder.
        options: {
          presets: [
            "react",
            "stage-2", // Stage 2 javascript features (which includes e.g promises)
            ["env", { targets: { browsers: ["last 2 versions"] } }] // The latest to browsers for compatibility.
          ]
        }
      }
    ]
  }
};

module.exports = config;
