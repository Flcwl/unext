import rangeMap from '../lib/rangeMap';

describe('rangeMap', () => {
  it('rangeMap array without callback', () => {
    const expected = rangeMap([1, 2, 3, 4], 1, 3)
    expect(expected).toEqual([2, 3])
  });

  it('rangeMap array with callback', () => {
    const expected = rangeMap([1, 2, 3, 4], 1, 4, (v) => v * 2)
    expect(expected).toEqual([4, 6, 8])
  });
})
