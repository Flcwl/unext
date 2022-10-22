import { isObjectLike } from "../object/is";

/* global window process */

export const isBrowser = () => {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

export const canUseDOM = (() => isBrowser())();

/**
 * Assert is a dom element
 */
export const isElement = (arg: unknown): arg is Element =>
  isObjectLike(arg) && arg.constructor !== Object && arg.nodeType === 1;

/**
 * Check if Running at IOS
 * @ref https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
 */
export const isIOS = (_window = window) => {
  const { navigator } = _window
  return (
    typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod/i.test(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && navigator.maxTouchPoints > 1))
  )
}
