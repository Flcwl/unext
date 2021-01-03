function _raf() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame
  }
}

const raf = (() => {
  return _raf() || ((callback: Function, delay: number) => window.setTimeout(callback, delay || 17))
})()

export default raf
