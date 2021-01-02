const isIOS = () => {
  return (
    typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
  )
}

export default isIOS
