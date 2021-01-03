/**
 * debounce optimization
 *
 * @param callback
 * @param timeout
 */
export const debounce = (callback: Function, timeout: number): Function => {
  let timer: undefined | number | NodeJS.Timeout = undefined

  return function debounced(...args: unknown[]) {
    if (timer) {
      clearTimeout(timer as number)
    }

    timer = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      callback.apply(null, args)
    }, timeout)
  }
}

export default debounce
