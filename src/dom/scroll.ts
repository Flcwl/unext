import raf from './raf'

interface ScrollOption {
  el?: Window | Element
  currentTime?: number
  increment?: number
  duration?: number
  start?: number
  change?: number
  ease?: (t: number, b: number, c: number, d: number) => number
}

const genDefaultOptions = (): ScrollOption => ({
  el: window,
  currentTime: 0,
  increment: 20, // time increment
  duration: 500, // animation duration
  ease: easeInOutQuad,
})

const defaultOptions = genDefaultOptions()

const _animateScroll = (data: ScrollOption) => {
  data.currentTime += data.increment
  // calculate move
  const val = data.ease(data.currentTime, data.start, data.change, data.duration)
  data.el.scrollTo(0, val)
  const animateScroll = _animateScroll.bind(null, data)
  if (data.currentTime < data.duration) {
    raf.call(window, animateScroll)
  }
}

const Scroll = {
  /**
   * scroll to Y pos
   *
   * @param y scroll Pos
   * @param options default is `{}`
   */
  scrollTo(y: number, options: ScrollOption = {}) {
    const start = currentYPosition(options.el) || 0
    const data = Object.assign(defaultOptions, options, {
      start, // scroll's start
      change: y - start,
    })

    _animateScroll(data)
  },

  /**
   * scroll To Top
   * @param options
   */
  scrollToTop(options: ScrollOption) {
    this.scrollTo(0, options)
  },
}

export default Scroll

export function currentYPosition(el: Window | Element = window) {
  return (el === window ? Math.ceil(window.pageYOffset || window.scrollY) : (el as Element).scrollTop) || 0
}

// easeInOut bezier curve
export function easeInOutQuad(t: number, b: number, c: number, d: number) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}
