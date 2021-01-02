/**
 * Remove item from an array
 *
 * @param list
 * @param removed
 */
const remove = <T>(list: T[], removed: T): number => {
  const index = list.findIndex((item: T) => item === removed)
  if (index !== -1) {
    list.splice(index, 1)
  }
  return index
}

export default remove
