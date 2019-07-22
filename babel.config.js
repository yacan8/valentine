module.exports = {
  presets: [
    ['@babel/env', {
      useBuiltIns: false
    }]
  ],
  plugins: [
    // ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }],
    '@babel/plugin-transform-runtime'
  ]
};