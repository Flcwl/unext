"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initList = void 0;
/**
 * Init an array with filler
 *
 * @generic T
 * @param {number} size
 * @param {(index: number) => T} fill
 * @returns {T[]}
 */
exports.initList = (size, fill) => {
    const arr = [];
    if (typeof fill === 'function') {
        for (let i = 0; i < size; ++i) {
            arr.push(fill(i));
        }
    }
    else {
        for (let i = 0; i < size; ++i) {
            arr.push(fill);
        }
    }
    return arr;
};
