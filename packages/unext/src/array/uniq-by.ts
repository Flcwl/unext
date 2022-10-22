/**
 * Unique array by special key
 */
export const uniqBy = <T extends Record<string, any>>(
  array: T[],
  keyName: string
) => {
  const visitedSet = new Set<any>();

  return array.reduce((prev, cur) => {
    let value = cur[keyName];
    value = value !== 0 ? value : 0; // -0 as 0

    if (!visitedSet.has(value)) {
      visitedSet.add(value);
      prev.push(cur);
    }

    return prev;
  }, [] as T[]);
};
