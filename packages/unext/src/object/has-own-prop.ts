
const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwnProp = (obj: object, key: string): boolean => hasOwnProperty.call(obj, key)
