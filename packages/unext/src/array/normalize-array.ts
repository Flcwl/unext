import { isFunc } from "../func"
import { isNullish } from "../nullish"
import { Nullish } from "../types"
import { isArray } from "./is"

/**
 * Normalize arg to an array.
 */
export const normalizeArray = <T>(arg: T | T[] | Nullish) => {
  if (isNullish(arg)) return []
  return isArray(arg) ? arg : [arg]
}
