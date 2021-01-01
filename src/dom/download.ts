/**
 * Download File
 *
 * @param link
 */
export const download = (link: string) => {
  const isChrome = navigator.userAgent.indexOf('Chrome') !== -1
  if (isChrome) {
    window.location.href = link
    return
  }

  const iframe = document.createElement('iframe')
  iframe.style.cssText = 'display:none; width=0; height=0'
  document.body.appendChild(iframe)
  iframe.src = link
}
