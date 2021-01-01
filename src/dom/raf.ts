function _raf () {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame
  }
}

export const raf = (() => {
  return _raf() || ((callback: Function, delay: number) => window.setTimeout(callback, delay || 17))
})()
