import { setAttrDataKey } from "./attribute"
import { replaceChildren } from "./element"
import { isBrowser } from "./is"

/**
 * Inject css style element into `document.body`.
 */
export const injectStyle = (css: string) => {
  if (!css || !isBrowser) return

  const cssText = document.createTextNode(css)

  const headElement = document.head || document.querySelector('head')
  const styleElement = document.createElement('style')

  styleElement.appendChild(cssText)
  headElement.appendChild(styleElement)

  return styleElement
}

/**
 * Replace CSS style in html.
 */
export const replaceCSS = (css: string, dataKey: string, dataValue = '') => {
  if (!css || !isBrowser) return

  const cssText = document.createTextNode(css)

  const headElement = document.head || document.querySelector('head')
  const attr = setAttrDataKey(dataKey)

  let styleElement = Array.from(headElement.children).find(
    (node) => node.tagName === 'STYLE' && node.hasAttribute(attr)
  ) as HTMLStyleElement | undefined

  if (!styleElement) {
    styleElement = document.createElement('style')

    styleElement.appendChild(cssText)
    headElement.appendChild(styleElement)

    styleElement.setAttribute(attr, dataValue)
  } else {
    replaceChildren(styleElement, cssText)

    if (styleElement.getAttribute(attr) !== dataValue) {
      styleElement.setAttribute(attr, dataValue)
    }
  }

  return styleElement
}
