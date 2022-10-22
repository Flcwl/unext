/**
 * Diff an array and will return [intersection, diff, removed, added] elements.
 */
export const diffArray = <T>(originalArray: T[], newArray: T[]) => {
  const arraySet = new Set(originalArray);

  const commonArraySet = new Set<T>();

  newArray.forEach((item) => {
    if (arraySet.has(item)) {
      commonArraySet.add(item);
    }
  });

  const filterFunc = (item: T) => !commonArraySet.has(item);

  const removed = originalArray.filter(filterFunc);
  const added = newArray.filter(filterFunc);
  const diff = removed.concat(added);
  const common = Array.from(commonArraySet);

  return [common, diff, removed, added];
};

// diffArrayBy(arrA, arrB, comparator)
