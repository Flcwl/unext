/**
 * Assert is function
 */
export const isFunc = <T extends Function = Function>(arg: any): arg is T =>
  typeof arg === "function";
