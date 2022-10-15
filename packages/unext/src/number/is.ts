/**
 * Assert is number
 */
export const isNumber = (arg: unknown): arg is number =>
  typeof arg === "number";

/**
 * Assert is positive number
 */
export const isPositive = (arg: unknown): arg is number =>
  typeof arg === "number" && Math.sign(arg) === 1;

/**
 * Assert is numeric
 */
export const isNumeric = (arg: unknown): arg is string | number =>
  !Number.isNaN(Number(arg));
