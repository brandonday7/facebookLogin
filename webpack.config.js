var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: ["webpack-dev-server/client?http://localhost:8080", "./src/index.jsx"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ["react"]
        },
        include: path.join(__dirname, "src")
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};