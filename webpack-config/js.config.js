const path = require('path');

const babelLoader = {
  test: /\.js$/,
  loader: 'babel-loader',
  include: [path.resolve(process.cwd(), 'src')]
};

const reactConfig = {
  module: {
    rules: [babelLoader]
  }
};

module.exports = reactConfig;