/**
 * unique array
 *
 * @generic T
 * @param {T[]} arr
 */
const uniq = <T>(arr: T[]): T[]=> {
  return Array.from(new Set(arr))
}

export default uniq
