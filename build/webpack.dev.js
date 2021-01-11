const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
mode: "development",
devtool: "cheap-module-eval-soure-map",
devServer: {
  contentBase: path.join(__dirname, "../dist"),
  port: 3000,
  hot: true,
  proxy: {
    "/api": "http://localhost:8000",
  },
},
});
