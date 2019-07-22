const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const jsConfig = require('./js.config');
const lessConfig = require('./less.config');

const config = merge(baseConfig, jsConfig, lessConfig);

module.exports = config;