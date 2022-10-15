import { Nullish } from "../types";

/**
 * Assert is Undefined
 */
export const isUndef = (arg: unknown): arg is undefined | void =>
  arg === undefined;

/**
 * Assert is Nullish
 */
export const isNullish = (arg: unknown): arg is Nullish =>
  arg === null || arg === undefined;
