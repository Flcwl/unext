"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * throttle optimization
 *
 * @param callback
 * @param timeout
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const throttle = (callback, timeout) => {
    let timer = undefined;
    return function (...args) {
        if (timer)
            return;
        timer = setTimeout(() => {
            timer = undefined;
            // eslint-disable-next-line prefer-spread
            callback.apply(null, args);
        }, timeout);
    };
};
exports.default = throttle;
