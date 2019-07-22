const babelLoader = {
    test: /\.js?$/,
    loader: 'babel-loader',
    include: [path.resolve(process.cwd(), 'src')]
}

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