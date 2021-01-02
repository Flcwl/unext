
import set from '../lib/set';

describe('set', function () {

  it('set work with string', function () {

    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    expect(set(object, 'a.0.b.c', 4).a[0].b.c).toEqual(4);

    expect(set({ foo: { bar: 'baz' } }, 'foo.arr.0', 3)).toEqual({
      foo: {
        bar: 'baz',
        arr: {
          '0': 3
        }
      }
    });

    expect(set({ foo: { bar: 'baz' } }, 'foo.obj.key', 3)).toEqual({
      foo: {
        bar: 'baz',
        obj: { key: 3 }
      }
    });

    expect(set(null, 'foo.obj.key', 3)).toEqual(null);
  });
});
