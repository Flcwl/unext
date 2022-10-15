import { normalizeArray } from "../array/normalize-array";
import { isNullish } from "../nullish";

/**
 * Get value by deep key in nested object
 *
 * @example
 * get({ a: { b: 3 } }, ['a', 'b']) // 3
 */
export const getNested = <T, E>(
  obj: E,
  paths: (string | number)[] | string | number
): T | undefined => {
  paths = normalizeArray(paths);
  const props = paths.map((p) => p + "").filter((p) => p !== "");

  let target: any = obj;
  let i = 0;
  const len = props.length;

  for (; i < len; ++i) {
    if (isNullish(target)) {
      break;
    }

    target = target[props[i]];
  }

  return i === len ? target : undefined;
};
