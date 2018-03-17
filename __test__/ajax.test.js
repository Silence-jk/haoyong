import ajax from '../lib/ajax'
jest.mock('../lib/ajax')

describe('ajax', () => {
  it('mock ajax', (done) => {
    ajax('xxx', (data) => {
      data = JSON.parse(data)
      expect(data[0]['title']).toBe('我要进腾讯')
      expect(data[1]['title']).toBe('我要进IMWEB团队')
    })
    done()
  })
})
