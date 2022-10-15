const toString = Object.prototype.toString;

/**
 * Assert is string
 */
export const isString = (arg: unknown): arg is string =>
  toString.call(arg) === "[object String]";
