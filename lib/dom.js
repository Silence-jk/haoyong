const dom = {
  /**
    * selector to find dom
    * @param {String} selector
    * @param {String} parentNode
    * @return {DOM|Null}
    */
  $: function (selector, parentNode) {
    var dom
    parentNode = parentNode || document
    if (!selector) {
      return null
    }

    if (parentNode.querySelector) {
      dom = parentNode.querySelectorAll(selector).length === 1
        ? parentNode.querySelector(selector)
        : parentNode.querySelectorAll(selector)
    } else {
      return 'please quickly update your broswer to Chrome / Firefox'
    }
    return dom
  },

  /**
   * delete DOM node
   * @param {DOM} node
   * @return {DOM}
   */

  removeNode: function (node) {
    if (!node) {
      return null
    }
    return node.parentNode.removeChild(node)
  },

  /**
   * insert node after targte
   * @param {DOM} node
   * @param {DOM} target
   */
  insertAfter: function (node, target) {
    var dom = target.nextElementSibling
    if (!dom) {
      // if (target.parentNode.appendChild) {
      target.parentNode.appendChild(node)
      // }
      return
    }
    target.parentNode.insertBefore(node, dom)
  },

  /**
   * add className
   * @param {DOM} node
   * @param {String|Array} className
   */
  addClass: function (node, className) {
    if (!node || typeof node === 'string') {
      return null
    }

    if (Array.isArray(className)) {
      className.map((name) => {
        node.classList.add(name)
      })
      return
    }
    node = node.classList.add(className)
  },

  /**
   * remove className
   * @param {DOM} node
   * @param {String|Array} className
   */
  removeClass: function (node, className) {
    if (!node || typeof node === 'string') {
      return null
    }

    if (Array.isArray(className)) {
      className.map((name) => {
        node.classList.remove(name)
      })
      return
    }
    node = node.classList.remove(className)
  }
}

module.exports = dom
