const ajax = {
  /**
   * @param {String} type get/post
   * @param {String} url
   * @param {String} data url ?后匹配的参数 ，可忽略
   * @param {Function} callback
   */
  getData: function (type, url, data, callback) {
    var xhr = new XMLHttpRequest()
    if (typeof data === 'function') {
      callback = data
      data = ''
    }
    // 监听请求状态
    xhr.onreadystatechange = () => {
      console.log('xhr after response', Object.assign(xhr))

      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          // 反序列化
          callback(JSON.parse(xhr.responseText), xhr)
        }
      } else {
        console.log(xhr.status)
      }
    }
    xhr.open(type, url + (type === 'get' ? `?${data}` : ''))  // 打开链接

    // 若是 post 请求，需设置请求头
    if (type === 'post') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    }
    xhr.send(type === 'get' ? null : data)  // 发送请求
  }
}

module.exports = ajax
