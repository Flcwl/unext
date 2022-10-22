import { __DEV__ } from "../env";

export const invariant = (condition: any, format: string, ...args: any[]) => {
  if (__DEV__) {
    if (!condition) {
      let argIndex = 0;
      const message = `[LOG] ` + format.replace(/%s/g, () => args[argIndex++]);

      try {
        // To find the call stack of error.
        throw new Error(message);
      } catch (error) {
        // support for SSR.
        if (typeof console !== "undefined") {
          console.error(error);
        }
      }
    }
  }
};

const toString = Object.prototype.toString;

/**
 * Will return the object type for any structure
 */
export const getObjectType = (o: unknown): string =>
  toString.call(o).slice(8, -1);
