import isArrayLargeBase from '../lib/isArrayLargeBase';

describe('isArrayLargeBase', () => {
  it('return `true` when is not array', () => {
    expect(isArrayLargeBase({})).toEqual(false)
  });

  it('return `true` when is empty array', () => {
    expect(isArrayLargeBase([])).toEqual(false)
  });

  it('return `true` when is not empty array', () => {
    expect(isArrayLargeBase([1])).toEqual(true)
  });

  it('return `true` when is an array with length > $1', () => {
    expect(isArrayLargeBase([1, 2, 3], 3)).toEqual(false)
    expect(isArrayLargeBase([1, 2, 3], 2)).toEqual(true)
  });
})
