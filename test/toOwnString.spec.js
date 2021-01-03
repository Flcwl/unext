import toOwnString from '../lib/toOwnString';

describe('object: toOwnString', () => {
  it('toOwnString method work with Array', function() {
    const received = toOwnString([])
    const expected = '[object Array]';
    expect(received).toEqual(expected)
  });

  it('toOwnString method work with object', function() {
    const received = toOwnString({ a: 1 })
    const expected = '[object Object]';
    expect(received).toEqual(expected)
  });
});
