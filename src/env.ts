/* global window */

const _isBrowser = () => {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined'
}

export const isBrowser = (() => {
  return _isBrowser()
})()

const _isNode = () => {
  return typeof process !== 'undefined' && process.versions != null && process.versions.node != null
}

export const isNode = (() => {
  return _isNode()
})()
