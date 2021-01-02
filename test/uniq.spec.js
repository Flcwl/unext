/**
 * unique array
 *
 * @generic T
 * @param {T[]} arr
 */
export const uniq = <T>(arr: T[]): T[]=> {
  return Array.from(new Set(arr))
}
