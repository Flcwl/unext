import { MAX_ARRAY_LENGTH } from "./constants"

/**
 * Invokes the iteratee `count` times, returning an array of the results of
 * each `iteratee(index)` and the index start with `0`.
 *
 * @param count number of iteratee
 * @param iteratee function of each iteratee
 */
 export const forCount = <T>(count: number, iteratee: (index: number) => T) => {
  if (count < 1) {
    return []
  }

  if (count > MAX_ARRAY_LENGTH) {
    count = MAX_ARRAY_LENGTH
  }

  const result = new Array<T>(count)

  for (let i = 0; i < count; ++i) {
    result[i] = iteratee(i)
  }

  return result
}
