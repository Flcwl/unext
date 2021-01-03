/**
 * throttle optimization
 *
 * @param callback
 * @param timeout
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const throttle = (callback: Function, timeout: number): Function => {
  let timer: undefined | number | NodeJS.Timeout = undefined

  return function(...args: unknown[]) {
    if (timer) return

    timer = setTimeout(() => {
      timer = undefined
      // eslint-disable-next-line prefer-spread
      callback.apply(null, args)
    }, timeout)
  }
}
export default throttle
