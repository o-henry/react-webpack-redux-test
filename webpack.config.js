const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
