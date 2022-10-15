import { clone } from "./clone";
import { hasOwnProp } from "./has-own-prop";
import { isObject } from "./is";

/**
 * Merge object deep
 */
export const merge = <T extends Object, E extends T>(
  source: T,
  override: E | null | undefined
): T => {
  if (!override) return source;
  if (!source) return clone(override);

  const target: any = source;

  for (const key in override) {
    if (hasOwnProp(override, key)) {
      if (isObject(override[key])) {
        if (isObject((source as any)[key])) {
          target[key] = merge((source as any)[key], override[key]);
        } else {
          target[key] = clone(override[key]);
        }
      } else if (Array.isArray(override[key])) {
        if (Array.isArray((source as any)[key])) {
          target[key] = merge((source as any)[key], override[key]);
        } else {
          target[key] = clone(override[key]);
        }
      } else {
        target[key] = override[key];
      }
    }
  }

  return target as T;
};
