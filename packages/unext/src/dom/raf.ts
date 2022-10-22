function _raf() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame
  }
}

export const raf = (() => {
  return _raf() || ((callback: Function, delay: number) => window.setTimeout(callback, delay || 17))
})()
