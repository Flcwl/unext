"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
/**
 * debounce optimization
 *
 * @param callback
 * @param timeout
 */
exports.debounce = (callback, timeout) => {
    let timer = undefined;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            // eslint-disable-next-line prefer-spread
            callback.apply(null, args);
        }, timeout);
    };
};
