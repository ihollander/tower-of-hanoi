const path = require("path");

// generate index.html and create links to appropriate assets
const HtmlWebpackPlugin = require("html-webpack-plugin");

// cleans up build directory
const CleanWebpackPlugin = require("clean-webpack-plugin");

// TODO: css minification for production

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Document",
      template: "src/index.html"
    })
  ],
  output: {
    filename: "assets/[name].[contenthash].js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: "./public"
  }
};
