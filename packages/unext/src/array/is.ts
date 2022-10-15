/**
 * Assert is an array
 */
export const isArray: <T>(arg: unknown) => arg is T[] = Array.isArray;

/**
 * Assert is an array and `array.length > 0`
 */
export const isArrayNonEmpty = <T>(arg: unknown): arg is T[] =>
  isArray(arg) && arg.length > 0;
