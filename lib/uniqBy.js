"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * unique array of objects by specific key
 *
 * @generic T
 * @param {T[]} arr
 * @param {string} key
 */
const uniqBy = (arr, key) => {
    const visited = new Set();
    return arr.filter((item) => {
        const value = item[key];
        if (visited.has(value))
            return false;
        visited.add(value);
        return true;
    });
};
exports.default = uniqBy;
