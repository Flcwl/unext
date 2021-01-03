import set from '../lib/set'

describe('set', function () {
  it('set props work with string', function () {
    const test1 = { a: [{ b: { c: 3 } }] }
    set(test1, 'a.0.b.c', 4)
    expect(test1.a[0].b.c).toEqual(4)

    const test2 = { foo: { bar: 'baz' } }
    set(test2, 'foo.arr.0', 3)
    expect(test2).toEqual({
      foo: {
        bar: 'baz',
        arr: {
          0: 3,
        },
      },
    })

    const test3 = { foo: { bar: 'baz' } }
    set(test3, 'foo.obj.key', 3)
    expect(test3).toEqual({
      foo: {
        bar: 'baz',
        obj: { key: 3 },
      },
    })
  })

  it('set props work with array', function () {
    const test1 = { a: [{ b: { c: 3 } }] }
    set(test1, ['a', '0', 'b', 'c'], 4)
    expect(test1.a[0].b.c).toEqual(4)

    const test2 = { foo: { bar: 'baz' } }
    set(test2, ['foo', 'arr', '0'], 3)
    expect(test2).toEqual({
      foo: {
        bar: 'baz',
        arr: {
          0: 3,
        },
      },
    })

    const test3 = { foo: { bar: 'baz' } }
    set(test3, ['foo', 'obj', 'key'], 3)
    expect(test3).toEqual({
      foo: {
        bar: 'baz',
        obj: { key: 3 },
      },
    })
  })

  it('should work with object', function () {
    let error = null
    try {
      set(null, ['foo', 'obj', 'key'], 3)
    } catch (err) {
      error = toString(err)
    }
    expect(error !== null).toEqual(true)
  })
})
