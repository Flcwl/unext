/**
 * Returning an array of the results of each `iteratee(index)`
 * and the index start with `start` and end with `end`.
 */
export const mapRange = <T, R>(
  array: T[],
  iteratee: (item: T, index: number) => R,
  end: number,
  start = 0
) => {
  if (start > end) return [];
  if (start < 0) start = 0;
  if (end >= array.length) end = array.length;

  const result = [] as R[];

  for (let i = start; i < end; ++i) {
    result[i] = iteratee(array[i], i);
  }

  return result;
};
