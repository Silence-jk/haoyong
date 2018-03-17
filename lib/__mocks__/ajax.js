const fs = require('fs')
const path = require('path')
const ajax = (url, callback) => {
  setTimeout(() => {
    callback(fs.readFileSync(path.resolve(__dirname, '../../data.json')))
  }, 1000)
}

module.exports = ajax
