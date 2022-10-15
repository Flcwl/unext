/**
 * Unique array by special key
 */
 export const uniqBy = <T extends Record<string, any>>(array: T[], keyName: string) => {
  const visitedSet = new Set<any>()

  return array.reduce((prev, cur) => {
    const key = cur[keyName]

    if (!visitedSet.has(key)) {
      visitedSet.add(key)
      prev.push(cur)
    }

    return prev
  }, [] as T[])
}
