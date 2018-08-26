const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  mode: process.env.PROD ? "production" : "development",
  target: "web",
  entry: {
    main: path.resolve(__dirname, "src", "site", "index.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
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
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: "eslint-loader"
        }
      },
      {
        test: /dist/,
        exclude: /node_modules/,
        use: {
          loader: "raw-loader"
        }
      }
    ]
  },
  plugins: [new FriendlyErrorsWebpackPlugin(), new HtmlWebpackPlugin()]
};
