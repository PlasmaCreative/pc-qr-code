const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const rootPath = path.resolve(__dirname, "./");
const srcPath = path.resolve(rootPath, "src");
const libPath = path.resolve(rootPath, "lib");

module.exports = {
  entry: srcPath + "/index.ts",
  output: {
    path: libPath,
    filename: "pc-qr-code.js",
    library: "PCQRCode",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new ESLintPlugin()],
  resolve: {
    extensions: [".ts", ".js"]
  }
};
