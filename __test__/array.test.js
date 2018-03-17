import _Array from '../lib/array'

describe('remove item by index', () => {
  it('index 0 [1,2,3]', () => {
    expect(_Array.removeItemByIndex(0, [1, 2, 3])).toEqual([2, 3])
  })

  it('index 3 [1,2,3,4]', () => {
    expect(_Array.removeItemByIndex(3, [1, 2, 3, 4])).toEqual([1, 2, 3])
  })

  it('index < 0, [1,2,3,4]', () => {
    expect(_Array.removeItemByIndex(-2, [1, 2, 3, 4])).toEqual([1, 2, 4])
  })
  it('index 非数字 [1,2,3,4]', () => {
    expect(_Array.removeItemByIndex(null, [1, 2, 3, 4])).toBeUndefined()
  })

  it('index 超数组长度 [1,2,3,4]', () => {
    expect(_Array.removeItemByIndex(5, [1, 2, 3, 4])).toBeNull()
  })

  it('index 0, 非数组', () => {
    expect(_Array.removeItemByIndex(0, {})).toEqual({})
  })
})

describe('array dedupe', () => {
  it('array is null', () => {
    expect(_Array.dedupe()).toBeNull()
  })

  it('array is []', () => {
    expect(_Array.dedupe([])).toEqual([])
  })

  it('array is normal', () => {
    expect(_Array.dedupe([1, 2, 3, 2, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
  })

  it('array is not have Array.from', () => {
    Set = null
    expect(_Array.dedupe([1, 1, 2, 2, 3, 1, 3])).toEqual([1, 2, 3])
  })
})
