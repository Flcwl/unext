import cloneDeep from '../lib/cloneDeep'

describe('cloneDeep', () => {
  const obj = { a: [{ b: { c: 3 } }], d: { e: 4 }, f: 5 }
  const expected = cloneDeep(obj)

  it('should cloneDeep object with deep', function () {
    expect(expected).toEqual(obj)
    expect(expected.a).toEqual(obj.a)
    expect(expected.a[0].b).toEqual(obj.a[0].b)
  })

  it('should change reference when clone nested object', () => {
    expect(expected !== obj).toEqual(true)
    expect(expected.a !== obj.a).toEqual(true)
    expect(expected.a[0].b !== obj.a[0].b).toEqual(true)
  })
})
