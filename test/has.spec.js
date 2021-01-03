import has from '../lib/has'

describe('has', () => {
  it('set work with string', () => {
    const obj = { a: [{ b: { c: 3 } }] }

    expect(has(obj, 'a.0.b.c')).toEqual(true)
    expect(has(obj, 'd')).toEqual(false)
    expect(has(obj, 'a.1')).toEqual(false)
  })
})
