const _toString = Object.prototype.toString

 const toOwnString = (obj: unknown): string => {
  return _toString.call(obj)
}

export default toOwnString
