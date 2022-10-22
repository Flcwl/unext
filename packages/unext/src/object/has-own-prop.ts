const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check if existed Property in obj.
 */
export const hasOwnProp = (obj: any, key: string): boolean =>
  hasOwnProperty.call(obj, key);
