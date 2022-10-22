/**
 * Compute the mean of the arguments.
 */
export const mean = (...args: number[]) => {
  return args.reduce((acc, cur) => acc + cur, 0) / args.length;
};
