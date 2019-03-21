const webpack = require("webpack");
const path = require("path");

// /Users/johnlundgren/dev/reactJs/react-app-webpack/ClientApp
const APP_DIR = path.resolve(__dirname, "src");
// /Users/johnlundgren/dev/reactJs/react-app-webpack/public
const PUBLIC_DIR = path.resolve(__dirname, "public");

//Object with instructions for Webpack to know what to do.
const config = {
  entry: path.resolve(APP_DIR, "helloworld.js"), //Entry is what should be bundled.
  devServer: {
    contentBase: PUBLIC_DIR, //Webserver's base directory
    port: 9000, //Default port
    open: true //Open webserver by default.
  },
  output: {
    path: PUBLIC_DIR,
    filename: "bundle.js"
  }
};

module.exports = config;
