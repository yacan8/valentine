module.exports = {
    plugins: () => {
      return [
        require('autoprefixer')({ // 添加内核前缀
          browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8']
        })
      ]
    }
  }