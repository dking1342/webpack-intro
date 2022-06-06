const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode:"development",
  entry:{
    bundle:path.resolve(__dirname,"./src/index.ts")
  },
  resolve:{
    extensions:[".ts",".js"]
  },
  devtool:"source-map",
  devServer:{
    static:{
      directory: path.resolve(__dirname,"dist")
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
        test:/\.ts$/,
        use:"ts-loader",
        include:[path.resolve(__dirname,"src")]
      },
      {
        test:/\.css$/,
        use:[
          "style-loader",
          "css-loader",
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:"babel-loader",
          options:{
            presets:[
              "@babel/preset-env"
            ]
          }
        }
      },
      {
        test:/\.(png|jpg|jpeg|gif)$/i,
        type:"asset/resource"
      }
    ]
  },
  output:{
    filename:"[name][contenthash].js",
    path:path.resolve(__dirname,"dist"),
    clean:true,
    assetModuleFilename:"[name][ext]",
    // publicPath:"dist"
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"Webpack & Typscript",
      filename:"index.html",
      template:path.resolve(__dirname,"./src/template.html")
    })
  ]
}