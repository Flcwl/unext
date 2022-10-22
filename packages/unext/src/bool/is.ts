/**
 * Assert is bool.
 */
export const isBoolean = (arg: unknown): arg is boolean  => {
  return arg === true || arg === false
}
