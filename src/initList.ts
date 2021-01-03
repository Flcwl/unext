/**
 * Init an array with filler
 *
 * @generic T
 * @param {number} size
 * @param {(index: number) => T} fill
 * @returns {T[]}
 */
const initList = <T>(size: number, fill: (index: number) => T | unknown): T[] => {
  const arr = []

  if (typeof fill === 'function') {
    for (let i = 0; i < size; ++i) {
      arr.push(fill(i))
    }
  } else {
    for (let i = 0; i < size; ++i) {
      arr.push(fill)
    }
  }

  return arr
}

export default initList
