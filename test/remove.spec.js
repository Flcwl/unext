import remove from '../lib/remove';

describe('remove', () => {
  it('remove an item in array', () => {
    const a = {}
    const arr = [1, 2, a]
    expect(remove(arr, 1)).toEqual(0)
    expect(arr).toEqual([2, a]) // deepEqual
  });

  it('should return `-1` remove an item not in array', () => {
    const a = {}
    const arr = [1, 2, a]
    expect(remove(arr, 3)).toEqual(-1)
    expect(arr).toEqual([1, 2, a]) // deepEqual
  });
})
