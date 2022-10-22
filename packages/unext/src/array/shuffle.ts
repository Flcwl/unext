import { random } from "../math/random";
import { swap } from "./swap";

/**
 * Random element's indexes in array.
 */
export const shuffle = <T>(arr: T[]) => {
  let len = arr.length;
  let lastIndex = len - 1;
  let randomIdx

  for (let i = 0; i < len; i++) {
    randomIdx = random(0, lastIndex);
    swap(arr, i, randomIdx);
  }

  return arr
}
