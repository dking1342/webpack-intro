const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode:"development",
  entry:{
    bundle:path.resolve(__dirname, "src/main.js"),
  },
  output:{
    path: path.resolve(__dirname,"dist"),
    filename:"[name].[contenthash].js",
    assetModuleFilename:"[name][ext]",
    clean:true,
  },
  devtool:"source-map",
  devServer: {
    static:{
      directory: path.resolve(__dirname,"dist"),
    },
    port:3000,
    open:true,
    hot:true,
    compress:true,
    historyApiFallback:true,
  },
  module:{
    rules:[
      {
        test: /\.(css|scss)$/i,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:"babel-loader",
          options:{
            presets:["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        type:"asset/resource"
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"Posts App",
      filename:"index.html",
      template:path.resolve(__dirname,"src/template.html")
    })
  ]
}