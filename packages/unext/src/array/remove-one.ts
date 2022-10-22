import { AnyArray } from "../types";

/**
 * Remove item from an array
 */
export const removeOne = <T>(list: T[], removed: T) => {
  const index = list.findIndex((item) => item === removed);

  if (index !== -1) {
    list.splice(index, 1);
  }

  return list;
};
