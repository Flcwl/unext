const _hasOwnProperty = Object.prototype.hasOwnProperty

const hasOwnProp = (obj: object, key: string): boolean => {
  return _hasOwnProperty.call(obj, key)
}

export default hasOwnProp
