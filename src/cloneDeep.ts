import { isBrowser } from './env'
const isArray = Array.isArray

/**
 * deep clone
 * @param src
 */
const cloneDeep = <T>(src: T): T => {
  if (typeof src !== 'object' || src === null) {
    return src
  }

  let target

  if (isArray(src)) {
    target = (src as unknown[]).map(cloneDeep)
  } else if (src instanceof Date) {
    target = new Date(src.getTime())
  } else if (isBrowser && src instanceof Node) {
    target = src.cloneNode(true)
  } else {
    const Ctor = Object.getPrototypeOf(src).constructor
    target = new Ctor()

    const isPack = src instanceof String || src instanceof Boolean || src instanceof Number
    if (!isPack) {
      for (const key in src) {
        target[key] = cloneDeep(src[key])
      }
    }
  }
  return target
}

export default cloneDeep
