import { hasOwnProp } from "./has-own-prop";
import { normalizeArray } from "../array/normalize-array";

/**
 * Check if exist an value by deep key in nested object
 */
export const has = (obj: any, path: string[] | string): boolean => {
  const props = normalizeArray(path);
  let target = obj;

  for (let i = 0, len = props.length; i < len; ++i) {
    const key = props[i];
    if (!hasOwnProp(target, key)) {
      return false;
    }
    target = target[key];
  }
  return true;
};
