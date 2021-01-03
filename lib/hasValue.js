"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _isNaN = Number.isNaN;
/**
 * check an object is undefined or null
 *
 * @param {any} o
 */
const hasValue = (o) => {
    return typeof o !== 'undefined' && o !== null && !_isNaN(o);
};
exports.default = hasValue;
