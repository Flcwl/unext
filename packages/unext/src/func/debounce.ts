import { AnyFunc } from "../types";

/**
 * Debounce func
 */
export const debounce = <T extends AnyFunc>(
  func?: T,
  options?: DebounceOptions
) => {
  const timeout = (options && options.timeout) || 150;

  let timer = 0;

  const cancel = () => {
    if (timer) {
      window.clearTimeout(timer);
      timer = 0;
    }
  };

  const debounceFn = (...args: any[]) => {
    if (timer) {
      cancel();
    }

    if (func) {
      timer = window.setTimeout(() => {
        func.apply(null, args);
        timer = 0;
      }, timeout);
    }
  };

  debounceFn.cancel = cancel;

  return debounceFn as T & { cancel: () => void };
};

interface DebounceOptions {
  /**
   * debounce timeout
   */
  timeout?: number;
}

export type DebounceReturn = ReturnType<typeof debounce>;
