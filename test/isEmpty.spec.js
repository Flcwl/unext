import isEmpty from '../lib/isEmpty'

describe('isEmpty', () => {
  it('return `true` when value is `null`', () => {
    expect(isEmpty(null)).toEqual(true)
  })

  it('return `true` when value is `true`', () => {
    expect(isEmpty(true)).toEqual(true)
  })

  it('return `true` when value is number', () => {
    expect(isEmpty(1)).toEqual(true)
  })

  it('return `true` when value is empty string', () => {
    expect(isEmpty('')).toEqual(true)
  })

  it('return `true` when value is empty `Map`', () => {
    expect(isEmpty(new Map())).toEqual(true)
  })

  it('return `true` when value is empty `Set`', () => {
    expect(isEmpty(new Set())).toEqual(true)
  })

  it('return `true` when value is empty object', () => {
    expect(isEmpty({})).toEqual(true)
  })

  it('return `true` when value is empty array', () => {
    expect(isEmpty([])).toEqual(true)
  })

  it('return `false` when value is not empty array', () => {
    expect(isEmpty([1, 2, 3])).toEqual(false)
  })

  it('return `false` when value is not empty string', () => {
    expect(isEmpty('abc')).toEqual(false)
  })

  it('return `false` when value is not empty object', () => {
    expect(isEmpty({ a: 1 })).toEqual(false)
  })
})
