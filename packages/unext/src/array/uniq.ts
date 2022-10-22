/**
 * Unique array by item
 */
export const uniq = <T>(array: T[]) => {
  return Array.from(new Set(array));
};
