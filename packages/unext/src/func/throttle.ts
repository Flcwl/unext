import { AnyFunc } from "../types";

/**
 * throttle optimization
 */
export const throttle = <T extends AnyFunc>(
  callback: T,
  timeout: number
): T => {
  let timer: undefined | number | NodeJS.Timeout = undefined;

  return function (...args: any[]) {
    if (timer) return;

    timer = setTimeout(() => {
      timer = undefined;
      callback.apply(null, args);
    }, timeout);
  } as T;
};
