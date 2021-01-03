/**
 * unique array of objects by specific key
 *
 * @generic T
 * @param {T[]} arr
 * @param {string} key
 */
const uniqBy = <T>(arr: T[], key: string): T[] => {
  const visited = new Set()

  return arr.filter((item) => {
    const value = item[key]
    if (visited.has(value)) return false

    visited.add(value)
    return true
  })
}

export default uniqBy
