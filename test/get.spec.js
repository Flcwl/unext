import get from '../lib/get';

describe('get', () => {
  it('get work with string', () => {
    expect(get({ a: { b: 3 } }, 'a.b')).toEqual(3);
  });

  it('get work with string array', () => {
    expect(get({ a: { b: 3 } }, ['a', 'b'])).toEqual(3);
  });
})
