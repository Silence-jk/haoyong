import Dom from '../lib/dom'

document.body.innerHTML = '<div id="wrap"><span class="p1"></span><p class="p">Hi!</p><p class="p">How</p><p class="p">are</p></div>'
const wrap = document.getElementById('wrap')
const span = document.querySelector('.p1')
const needInsertNode = document.createElement('div')
needInsertNode.setAttribute('id', 'new')

describe('test $', () => {
  it('when param is null', () => {
    expect(Dom.$()).toBeNull()
  })

  it('when selector is single, such as id', () => {
    expect(Dom.$('#wrap').nodeName.toLowerCase()).toBe('div')
  })

  it('when selector are many, such as class', () => {
    expect(Dom.$('.p').length).toBe(3)
  })

  it('when selector are many, such as tag', () => {
    expect(Dom.$('p').length).toBe(3)
  })

  it('when parentNode is exist', () => {
    expect(Dom.$('p', wrap).length).toBe(3)
  })

  it('when querySelector is no work', () => {
    wrap.querySelector = null
    expect(Dom.$('p', wrap)).toBe('please quickly update your broswer to Chrome / Firefox')
  })
})

describe('insertAfter', () => {
  it('insert after when target after is null', () => {
    Dom.insertAfter(needInsertNode, wrap)
    expect(wrap.nextElementSibling.id).toBe('new')
  })

  it('insert after when target after is exist', () => {
    Dom.insertAfter(needInsertNode, span)
    expect(span.nextElementSibling.nodeName.toLowerCase()).toBe('div')
  })
})

describe('removeNode', () => {
  const p1 = document.querySelector('.p1')
  const p2 = document.querySelector('.p2')
  it('remove p1', () => {
    expect(Dom.removeNode(p1).nodeName.toLowerCase()).toBe('span')
  })

  it('when node noexist', () => {
    expect(Dom.removeNode(p2)).toBeNull()
  })

  it('when param is null', () => {
    expect(Dom.removeNode()).toBeNull()
  })
})

describe('addClass', () => {
  it('when not have node', () => {
    expect(Dom.addClass('a')).toBeNull()
  })

  it('when className is string', () => {
    Dom.addClass(wrap, 'a')
    expect(wrap.classList.contains('a')).toBe(true)
  })

  it('when className is array', () => {
    Dom.addClass(wrap, ['b', 'c'])
    expect(wrap.classList.contains('b')).toBe(true)
    expect(wrap.classList.contains('c')).toBe(true)
  })
})

describe('removeClass', () => {
  it('when not have node', () => {
    expect(Dom.removeClass('a')).toBeNull()
  })

  it('when className is string', () => {
    Dom.removeClass(wrap, 'a')
    expect(wrap.classList.contains('a')).toBe(false)
  })

  it('when className is array', () => {
    Dom.removeClass(wrap, ['b', 'c'])
    expect(wrap.classList.contains('b')).toBe(false)
    expect(wrap.classList.contains('c')).toBe(false)
  })
})
