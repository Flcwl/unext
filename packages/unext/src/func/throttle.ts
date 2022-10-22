import { AnyFunc } from "../types";

/**
 * throttle optimization
 */
export const throttle = <T extends AnyFunc>(
  callback: T,
  options?: ThrottleOptions
): T => {
  const timeout = (options && options.timeout) || 150;

  let timer: undefined | number | NodeJS.Timeout = undefined;

  return function (...args: any[]) {
    if (timer) return;

    timer = setTimeout(() => {
      timer = undefined;
      callback.apply(null, args);
    }, timeout);
  } as T;
};

interface ThrottleOptions {
  /**
   * throttle timeout
   */
  timeout?: number;
}

export type ThrottleReturn = ReturnType<typeof throttle>;
