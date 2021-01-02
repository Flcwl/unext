"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqBy = void 0;
/**
 * unique array of objects by specific key
 *
 * @generic T
 * @param {T[]} arr
 * @param {string} key
 */
exports.uniqBy = (arr, key) => {
    const visited = new Set();
    return arr.filter((item) => {
        const value = item[key];
        if (visited.has(value))
            return false;
        visited.add(value);
        return true;
    });
};
