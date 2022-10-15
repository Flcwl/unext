import { isBrowser } from "./is"

/**
 * Creating an `div` as container in body.
 *
 * @param selector a classname startsWith `.`
 * @param doc document
 * @returns a DOM Element as container
 */
 export const createContainer = (selector: string, options: CreateContainerOptions) => {
  if (!isBrowser) return null

  const _doc = (options && options.doc) || document

  let rootElm = _doc.querySelector(selector)

  if (rootElm) return rootElm

  rootElm = _doc.createElement('div')
  rootElm.className = selector.slice(1)
  _doc.body.appendChild(rootElm)
  return rootElm
}

/**
 * Remove Element from document tree
 *
 * @param selector a classname startsWith `.`
 */
export const removeContainer = (selector: string, options?: RemoveContainerOptions) => {
  if (!isBrowser) return

  const _doc = (options && options.doc) || document
  const rootElm = _doc.querySelector(selector)

  if (rootElm && rootElm.parentNode) {
    rootElm.parentNode.removeChild(rootElm)
  }
}

interface CreateContainerOptions {
  doc?: Document
  // parent?: Element
  // tagName?: string
}

type RemoveContainerOptions = CreateContainerOptions
