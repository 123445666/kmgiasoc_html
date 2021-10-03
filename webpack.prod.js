const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: false,
    minimizer: [
      // https://webpack.js.org/plugins/terser-webpack-plugin/
      new TerserWebpackPlugin({
        parallel: true,
      }),
      // https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
      new CssMinimizerPlugin(),
    ],
  },
});
