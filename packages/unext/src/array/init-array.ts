import { isFunc } from "../func";
import { forCount } from "./for-count";

/**
 * Init an array with filler.
 */
export const initArray = <T>(
  length: number,
  filler?: ((index: number) => T) | T
): T[] => {
  if (isFunc(filler)) {
    return forCount(length, filler);
  }

  return new Array(length).fill(filler);
};
