const array = {
  /**
   * remove a ele in array by index
   * @param {Number} index
   * @param {Array} arr
   * @return {Array}
   *
   * removeItemByIndex(1, [1,2,3]) => [1, 3]
   */
  removeItemByIndex: function (index, arr) {
    if (!Array.isArray(arr)) {
      return {}
    }

    if (index > arr.length) {
      return null
    }

    if (typeof index !== 'number') {
      return undefined
    }

    if (index < 0) {
      arr.splice(arr.length + index, 1)
      return arr
    }

    arr.splice(index, 1)
    return arr
  },
  /**
   * dedupe array 数组去重
   * @param {Array} array
   * @returns {Array|Null}
   */
  dedupe: function (array, control) {
    var newArr = []
    if (!array) {
      return null
    }

    if (Array.from && Set) {
      return Array.from(new Set(array))
    }

    array.map(arr => {
      if (newArr.indexOf(arr) === -1) {
        newArr.push(arr)
      }
    })
    return newArr
  }
}

module.exports = array
