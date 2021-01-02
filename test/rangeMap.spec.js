import rangeMap from '../lib/rangeMap';

describe('rangeMap', () => {
  it('rangeMap array without callback', () => {
    const arr = [1, 2, 3, 4]
    expect(rangeMap(arr, 1, 2)).toEqual([2, 3])
  });

  it('rangeMap array with callback', () => {
    const arr = [1, 2, 3, 4]
    expect(rangeMap(arr, 1, 3, (v) => v * 2)).toEqual([4, 6, 8])
  });
})
