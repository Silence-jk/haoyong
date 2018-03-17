const path = require('path')

const config = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.js|\.jsx$/i,
      // 忽略处理该文件下匹配的文件
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }]
  },
  devtool: 'source-map',
  mode: 'production'
}

module.exports = config
