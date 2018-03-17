import Util from '../lib/util'

describe('test query', () => {
  it('when have ?', () => {
    expect(Util.query('hello', '?hello=js')).toBe('js')
  })

  it('when not have ?', () => {
    expect(Util.query('hello', 'hello=js')).toBe('js')
  })

  it('when have many key=value', () => {
    expect(Util.query('hello', '?hello=js&name=silence')).toBe('js')
  })

  it('when have hash #', () => {
    expect(Util.query('hello', '?hello=js#123')).toBe('js')
  })

  it('when value is ""', () => {
    expect(Util.query('hello', '?hello=')).toBe('')
  })

  it('when value is "" 2', () => {
    expect(Util.query('hello', '?hello=&a=b')).toBe('')
  })
})

describe('test serialize', () => {
  it('params is obj', () => {
    expect(Util.serialize({ hello: 'js', hi: 'test' })).toBe('?hello=js&hi=test')
  })

  it('param is null', () => {
    expect(Util.serialize()).toBeNull()
  })
})

describe('getAbsoluteUrl', () => {
  it('getAbsoluteUrl', () => {
    // location.href = 'http://silence-jk.github.io'
    var a = Util.getAbsoluteUrl('/about')
    expect(a).toBe('/about')
  })

  it('url is null', () => {
    expect(Util.getAbsoluteUrl()).toBeNull()
  })
})

describe('debounce', () => {
  it('检测累加结果, 传time', (done) => {
    var total = 0
    const debounce = Util.debounce(() => {
      total += 1
      expect(total).toBe(1)
      done()
    }, 300)

    for (let i = 0; i < 10; i++) {
      debounce()
    }

    expect(total).toBe(0)
  })

  it('检测累加结果, 不传time', (done) => {
    var total = 0
    const debounce = Util.debounce(() => {
      total += 1
      expect(total).toBe(1)
      done()
    })

    for (let i = 0; i < 10; i++) {
      debounce()
    }

    expect(total).toBe(0)
  })
})

describe('trim', () => {
  it('position is default', () => {
    expect(Util.trim(' a b _ c ')).toBe('ab_c')
  })

  it('position is left', () => {
    expect(Util.trim(' a b _ c ', 'left')).toBe('a b _ c ')
  })

  it('position is right', () => {
    expect(Util.trim(' a b _ c ', 'right')).toBe(' a b _ c')
  })

  it('position is default', () => {
    expect(Util.trim(' a b _ c ', 'all')).toBe('ab_c')
  })
})

describe('test dateFormat', () => {
  it('data is normal', () => {
    expect(Util.dateFormat('20120211')).toContain('02')
    expect(Util.dateFormat('2012211')).toContain('2')
  })

  it('data is not normal', () => {
    expect(Util.dateFormat('20123211')).toBeNull()
    expect(Util.dateFormat('2012')).toBeNull()
  })
})

describe('test micrometer', () => {
  it('param is not number', () => {
    expect(Util.micrometer('123q')).toBeNull()
  })

  it('param is number', () => {
    expect(Util.micrometer(123)).toBe('123')
    expect(Util.micrometer(1234444)).toBe('1,234,444')
  })

  it('param is string', () => {
    expect(Util.micrometer('123')).toBe('123')
    expect(Util.micrometer('1234444')).toBe('1,234,444')
  })
})
