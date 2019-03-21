const webpack = require("webpack");
const path = require("path");

// /Users/johnlundgren/dev/reactJs/react-app-webpack/ClientApp
const APP_DIR = path.resolve(__dirname, "");
// /Users/johnlundgren/dev/reactJs/react-app-webpack/public
const BUILD_DIR = path.resolve(__dirname, "build");

//Object with instructions for Webpack to know what to do.
const config = {
  entry: path.resolve(APP_DIR, "helloworld.js"), //Entry is what should be bundled.
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  }
};

module.exports = config;
