const _hasOwnProperty = Object.prototype.hasOwnProperty

const hasOwnProp = (obj: object, key: string) => {
  return _hasOwnProperty.call(obj, key)
}
export default hasOwnProp
