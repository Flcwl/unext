"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Remove item from an array
 *
 * @param list
 * @param removed
 */
const remove = (list, removed) => {
    const index = list.findIndex((item) => item === removed);
    if (index !== -1) {
        list.splice(index, 1);
    }
    return index;
};
exports.default = remove;
