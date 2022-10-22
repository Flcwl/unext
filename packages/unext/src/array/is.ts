/**
 * Assert is an array
 */
export const isArray: <T>(arg: unknown) => arg is T[] = Array.isArray;

/**
 * Check is an array with length large than base.
 */
export const isArrayLargeBase = (o: unknown, base = 0): boolean => {
  return isArray(o) && o.length > base;
};

/**
 * Assert is an array and `array.length > 0`
 */
export const isArrayNonEmpty = <T>(arg: unknown): arg is T[] =>
  isArrayLargeBase(arg);
