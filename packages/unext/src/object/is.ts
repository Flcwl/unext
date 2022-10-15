import { Dict } from "../types";

/**
 * Assert is an objectLike
 * TODO: Assert the return type
 */
export const isObjectLike = (arg: unknown): arg is any =>
  !!arg && typeof arg === "object";

/**
 * Assert is an object
 */
export const isObject = (arg: unknown): arg is Dict =>
  isObjectLike(arg) && arg.constructor === Object;
