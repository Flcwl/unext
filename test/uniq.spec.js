import uniq from '../lib/uniq';

describe('Array: uniq method', () => {
  it('uniq method return unique values of an unsorted array', function() {
    const arr = [1, 2, 3, 4, 1, 2, 2, 6, 6];
    const received = uniq(arr)
    const expected = [1, 2, 3, 4, 6];
    expect(received).toEqual(expected)
  });

  it('uniq method should treat `-0` as `0`', function() {
    const arr = [-0, 0];
    const received = uniq(arr)
    const expected = [0];
    expect(received).toEqual(expected)
  });

  it('uniq method should match `NaN`', function() {
    const arr = [NaN, NaN];
    const received = uniq(arr)
    const expected = [NaN];
    expect(received).toEqual(expected)
  });
});
