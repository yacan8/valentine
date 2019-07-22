const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDebug = process.env.NODE_ENV !== 'production';

const cssLoader = {
  loader: `css-loader`,
  options: {
    sourceMap: isDebug,
    modules: true,
    localIdentName: '[local]',
  }
}

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    config: {
      path: __dirname
    }
  }
}

const lessLoader = {
  loader: 'less-loader',
  options: {
    sourceMap: isDebug,
    javascriptEnabled: true  // 支持内联JavaScript
  }
}

const lessConfig = {
  module: {
    rules: []
  },
  plugins: [],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({ // 使用 OptimizeCssAssetsPlugin 对css进行压缩
      cssProcessor: require('cssnano'),   // css 压缩优化器
      cssProcessorOptions: { discardComments: { removeAll: true } } // 去除所有注释
    })]
  }
};

let loaders = [];
let plugins = [];

if (isDebug) {
  loaders = [{
    test: /\.less$/,
    use: ['style-loader', cssLoader, postcssLoader, lessLoader ]
  }, {
    test: /\.css$/,
    loader: ['style-loader', cssLoader, postcssLoader ]
  }]

} else {

  loaders = [{
    test: /\.less$/,
    use: [
        MiniCssExtractPlugin.loader, 
        cssLoader,
        postcssLoader,
        lessLoader
    ]
  }, {
    test: /\.css/,
    use: [
        MiniCssExtractPlugin.loader,
        cssLoader,
        postcssLoader]
    }]

  plugins = [new MiniCssExtractPlugin({
    filename: '[name].css',
    // chunkFilename: "[id].css"
  })]
}

lessConfig.module.rules = lessConfig.module.rules.concat(loaders);
lessConfig.plugins = lessConfig.plugins.concat(plugins);

module.exports = lessConfig;