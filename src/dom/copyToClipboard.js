/**
 * Copy to clipboard
 *
 * copy string into clipboard when string
 * copy dom.value into clipboard when dom
 *
 * @param {string | DOM} $textarea
 */
export const copyToClipboard = ($textarea) => {
  let destroyTextArea = null

  if (typeof $textarea === 'string') {
    if (navigator.clipboard) {
      return navigator.clipboard.writeText($textarea)
    }

    $textarea = createTextArea($textarea)

    destroyTextArea = () => {
      $textarea.remove()
      $textarea = null
    }
  }

  const isSupportCopy = !!document.execCommand || isSupported('copy')

  if (!isSupportCopy) {
    return Promise.reject(new DOMException('The document.execCommand browser is not supported ', 'NotSupportedError'))
  }

  let success
  const oldReadOnly = $textarea.readOnly

  if (isIOS()) {
    // iOS select
    const range = document.createRange()
    const selection = window.getSelection()
    const oldContentEditable = $textarea.contentEditable
    $textarea.contentEditable = true
    $textarea.readOnly = false

    range.selectNodeContents($textarea)
    // range.selectNode($textarea)
    selection.removeAllRanges()
    selection.addRange(range)
    $textarea.setSelectionRange(0, $textarea.value.length) // fix the incomplete replication of copy in iOS

    success = copyWrite()

    selection.removeAllRanges()
    $textarea.contentEditable = oldContentEditable
  } else {
    // not iOS
    $textarea.setAttribute('readonly', 'readonly') // prevent input popup
    $textarea.select()

    success = copyWrite()
  }

  $textarea.readOnly = oldReadOnly
  destroyTextArea && destroyTextArea()

  return success
    ? Promise.resolve()
    : Promise.reject(new DOMException('Failed to execute document.execCommand ', 'NotSupportedError'))
}

function copyWrite() {
  let success
  try {
    success = document.execCommand('copy')
  } catch (error) {
    success = false
  }

  return success
}

function createTextArea(content) {
  const $textarea = document.createElement('textarea')

  $textarea.id = 'copy-clipboard'
  $textarea.style.cssText = 'display:none; width=0; height=0'
  // $textarea.setAttribute('readonly', 'readonly')
  $textarea.value = content
  // $textarea.textContent = content
  document.body.appendChild($textarea)

  return $textarea
}

function isSupported(action) {
  const support = document.queryCommandSupported
  return !!support && support(action)
}

function isIOS() {
  return (
    /iPad|iPhone|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  )
}
