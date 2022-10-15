import { isObjectLike } from "../object/is";

/* global window process */

const _isBrowser = () => {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

export const isBrowser = (() => _isBrowser())();

/**
 * Assert is a dom element
 */
export const isElement = (arg: unknown): arg is Element =>
  isObjectLike(arg) && arg.constructor !== Object && arg.nodeType === 1;
