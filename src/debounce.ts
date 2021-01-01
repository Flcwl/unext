/**
 * debounce optimization
 *
 * @param callback
 * @param timeout
 */
export const debounce = (callback: Function, timeout: number): Function => {
  let timer: undefined | number = undefined

  return function(...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      callback.apply(null, args)
    }, timeout)
  }
}
