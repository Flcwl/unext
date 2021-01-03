import uniqBy from '../lib/uniqBy'

describe('Array: uniqBy method', () => {
  it('uniqBy method work with an string', function () {
    const objects = [{ a: 2 }, { a: 3 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 1 }, { a: 4 }]
    const received = uniqBy(objects, 'a')
    const expected = [{ a: 2 }, { a: 3 }, { a: 1 }, { a: 4 }]
    expect(received).toEqual(expected)
  })

  it('uniqBy method should treat `-0` as `0`', function () {
    const objects = [{ a: -0 }, { a: +0 }, { a: 0 }]
    const received = uniqBy(objects, 'a')
    const expected = [{ a: -0 }]
    expect(received).toEqual(expected)
  })

  it('uniqBy method should match `NaN`', function () {
    const objects = [{ a: NaN }, { a: NaN }]
    const received = uniqBy(objects, 'a')
    const expected = [{ a: NaN }]
    expect(received).toEqual(expected)
  })
})
