import { uniq } from "./uniq";
/**
 * Create an array of unique items from all given arrays.
 */
export const union = (...args: any[]) => {
  return uniq(args.flat());
};
