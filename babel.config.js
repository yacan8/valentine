module.exports = {
  presets: [
    ['@babel/env', {
      useBuiltIns: false
    }, '@babel/preset-react']
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-react-jsx',
    'react-hot-loader/babel'
  ]
};