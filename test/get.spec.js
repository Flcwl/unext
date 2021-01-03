import get from '../lib/get';

describe('get', () => {
  it('get method work with string', () => {
    expect(get({ a: { b: [{ c: 3 }] } }, 'a.b.0.c')).toEqual(3);
  });

  it('get method work with string array', () => {
    expect(get({ a: { b: [{ c: 3 }] } }, ['a', 'b', '0', 'c'])).toEqual(3);
  });
})
