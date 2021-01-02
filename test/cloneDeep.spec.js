import cloneDeep from '../lib/cloneDeep';

describe('cloneDeep', () => {
  it('should cloneDeep object with deep', function() {
    const obj = { 'a': [{ 'b': { 'c': 3 } }], d: { e: 4}, f: 5 };

    const expected = cloneDeep(obj)

    expect(expected).toEqual(obj)
    expect(expected.a).toEqual(obj.a)
    expect(expected.a[0].b).toEqual(obj.a[0].b)
  })
});
