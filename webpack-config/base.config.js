const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const isDebug = process.env.NODE_ENV !== 'production';
const host = 'localhost';
const port = 8080;

const releasePath = path.resolve(__dirname, '../dist');

const base = {
  entry: [path.join(process.cwd(), 'src/main')],
  mode: isDebug ? 'development' : 'production',
  output: {
    publicPath: '/',
    path: releasePath,
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  devServer: {
    hot: true,
    compress: false,
    historyApiFallback: true,
    open: true,
    host: host,
    port: port,
    disableHostCheck: true,
    stats: { colors: true },
    filename: '[name].chunk.js',
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  module: {
    rules: [{
      test: /\.(woff|woff2|ttf|eot|png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i, // 图片加载
      loader: 'url-loader',
      query: {
        limit: 10000
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(process.cwd(), './index.html')
    })
  ]
};

if (isDebug) {
  base.entry.unshift(`webpack-dev-server/client?http://${host}:${port}`, 'webpack/hot/dev-server');
  base.plugins.unshift(new webpack.HotModuleReplacementPlugin());
  base.devtool = 'source-map';
} else {
  base.plugins.push(new CleanWebpackPlugin(
    "*",
    {
      root: releasePath,                      //根目录
      verbose: true,        　　　　　　　　　　//开启在控制台输出信息
      dry: false        　　　　　　　　　　//启用删除文件
    }
  ))
}

module.exports = base;