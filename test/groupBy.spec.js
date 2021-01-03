import groupBy from '../lib/groupBy'

describe('groupBy', () => {
  it('groupBy work with function', () => {
    const received = groupBy([6.1, 4.2, 6.3], Math.floor)
    const expected = { 4: [4.2], 6: [6.1, 6.3] }
    expect(received).toEqual(expected)
  })

  it('groupBy work with string in string[]', () => {
    const received = groupBy(['one', 'two', 'three'], 'length')
    const expected = { 3: ['one', 'two'], 5: ['three'] }
    expect(received).toEqual(expected)
  })

  it('groupBy work with string in object[]', () => {
    const received = groupBy(
      [
        { a: 1, b: 2 },
        { a: 2, b: 3 },
        { a: 1, d: 5 },
      ],
      'a'
    )
    const expected = {
      1: [
        { a: 1, b: 2 },
        { a: 1, d: 5 },
      ],
      2: [{ a: 2, b: 3 }],
    }
    expect(received).toEqual(expected)
  })
})
