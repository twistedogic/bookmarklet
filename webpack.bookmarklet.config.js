const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { entry } = require("./src/entry");

const config = {
  mode: process.env.PROD ? "production" : "development",
  target: "web",
  entry,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: false,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader"
        }
      }
    ]
  },
  plugins: [new FriendlyErrorsWebpackPlugin()]
};

if (!process.env.PROD) {
  config.plugins.push(new HtmlWebpackPlugin());
}

module.exports = config;
