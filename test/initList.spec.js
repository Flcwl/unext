import initList from '../lib/initList'

describe('initList', () => {
  it('Initialize an list of the specified length', () => {
    const received = initList(3, () => ({}))
    const expected = [{}, {}, {}]
    expect(received).toEqual(expected)
    expect(expected[0] !== expected[1]).toEqual(true)
  })
})
