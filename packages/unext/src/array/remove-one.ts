import { AnyArray } from "../types";

/**
 * Remove item from an array
 */
export const removeOne = <T>(list: T[], removed: T) => {
  const result = [...list];
  const index = result.findIndex((item) => item === removed);

  if (index !== -1) {
    result.splice(index, 1);
  }

  return result;
};
