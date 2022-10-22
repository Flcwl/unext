import { isUndef } from "../nullish";

/**
 * Returning an array of the results of each `iteratee(index)`
 * and the index start with `start` and end with `end`.
 */
export const mapRange = <T, R>(
  array: T[],
  iteratee?: (item: T, index: number, array: T[]) => R,
  start = 0,
  end?: number
) => {
  if (isUndef(end) || end >= array.length) end = array.length;
  if (start < 0) start = 0;

  if (start > end) return [];

  const result = [] as R[];

  for (let i = start; i < end; ++i) {
    const nextItem = iteratee ? iteratee(array[i], i, array) : array[i];
    result.push(nextItem as R);
  }

  return result;
};
