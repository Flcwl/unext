import { isFunc } from "./is";

/**
 * Run it and return when arg is func, otherwise return it.
 */
export const runIfFunc = <T, R>(
  valueOrFn: T | ((...fnArgs: R[]) => T),
  ...args: R[]
): T => {
  return isFunc(valueOrFn) ? valueOrFn.apply(null, args) : valueOrFn;
};
