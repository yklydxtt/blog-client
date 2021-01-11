const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const PurifyCSSPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    //  css TreeShaking
    // new PurifyCSSPlugin({
    //   purifyOptions: {
    //     whitelist: [/^purify_/],
    //   },
    //   paths: glob.sync([
    //     // 要做 CSS Tree Shaking 的路径文件
    //     path.resolve(__dirname, '..', 'src/*.html'),
    //     path.resolve(__dirname, '..', 'src/*.js'),
    //     path.resolve(__dirname, '..', 'src/**/*.jsx'),
    //     path.resolve(__dirname, '..', 'src/*.ts'),
    //     path.resolve(__dirname, '..', 'src/*.tsx'),
    // ])
    // }),
  ],
});
