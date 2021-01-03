/**
 *  Check if Running at IOS
 *
 * @param _window
 * @ref https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
 */
const isIOS = (_window = window) => {
  const { navigator } = _window
  return (
    typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod/i.test(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && navigator.maxTouchPoints > 1))
  )
}

export default isIOS
