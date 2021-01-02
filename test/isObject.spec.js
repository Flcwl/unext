import isObject from '../lib/isObject';

describe('isObject', () => {
  it('return `true` when is an object', () => {
    expect(isObject({})).toEqual(true)
  });
})
