import toOwnString from '../lib/toOwnString';

describe('object: toOwnString', () => {
  it('toOwnString method work with Array', function() {
    const arr = [];
    const received = toOwnString(arr)
    const expected = '[object][array]';
    expect(received).toEqual(expected)
  });
});
