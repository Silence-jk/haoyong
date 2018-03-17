const util = {
  /**
    * get value in querystring by name
    * @param {String} name
    * @param {String} querystring
    * @return {String|undefined}
    *
    * query('hello', '?hello=js') result is js
    *
    */
  query: function (name, querystring) {
    // 惰性匹配，量词后加 ? (\S+?)
    var regex = /\??\S+?=([^#&]*)#?\S*/
    return regex.exec(querystring)[1]
  },

  /**
   * let obj transform to url string
   * @param {Obj} data
   * @return {String}
   *
   * serialize({hello: 'js', hi: 'test'}) result is '?hello=js&hi=test'
   */
  serialize: function (data) {
    var url = '?'
    var arr = []
    if (!data) {
      return null
    }

    Object.keys(data).forEach(k => {
      arr.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    })

    url += arr.join('&')
    return url
  },
  /**
   * get absolute url in current page
   * @param {String} url
   * @return {String}
   *
   * getAbsoluteUrl('/jerojiang') => 'http://imweb.io/jerojiang'
  */
  getAbsoluteUrl: function (url) {
    if (!url) { return null }
    var a = document.createElement('a')
    a.setAttribute('href', url)
    return a.href
  },

  /**
   * stop bounce
   * @param {Func} callback
   * @param {Number} time
   */
  debounce: function (callback, time) {
    var timer
    time = time || 300

    return function () {
      // 没有 timmer 的时候就生成一个
      // 到时再触发 callback ，即调用一次
      // 以此达到减少调用次数的结果
      if (!timer) {
        timer = setTimeout(() => {
          callback()
          clearTimeout(timer)
          timer = null
        }, time)
      }
    }
  },
  /**
 * elminate space by position
 * @param {String} str
 * @param {String} position
 */
  trim: function (str, position) {
    switch (position) {
      case 'left':
        return str.replace(/(^\s*)/g, '')
      case 'right':
        return str.replace(/(\s*$)/g, '')
      case 'all':
      default:
        return str.replace(/\s+/g, '')
    }
  },
  /**
   * 格式化日期
   * @param {String} str
   * 20130211 -> ['20130211', '2013', '02', '11']
   */
  dateFormat: function (str) {
    var regex = /^(\d{4})((?:0|1)?\d)((?:0|1|2|3)?\d)$/g
    return regex.exec(str)
  },
  /**
   * 千分位分隔符
   * @param {Number} number
   * @returns
   * 11111 > 11,111
   */
  micrometer: function (number) {
    if (/^\d+$/g.test(number) === false) {
      return null
    }

    number = typeof number === 'string'
      ? number
      : '' + number
    // 去除首位为0并防止8禁止转换 0123 -> 83
    // number = Number(number) + ''
    var regex = /(?=((?!\b)\d{3})+$)/g
    number = number.replace(regex, ',')
    return number
  }
}

module.exports = util
