/* global window process */

const _isBrowser = () => {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined'
}

export const isBrowser = (() => _isBrowser())()

const _isNode = () => {
  return typeof process !== 'undefined' && process.versions != null && process.versions.node != null
}

export const isNode = (() => _isNode())()
