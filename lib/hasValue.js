"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasValue = void 0;
/**
 * check an object is undefined or null
 *
 * @param {any} o
 */
exports.hasValue = (o) => {
    return typeof o !== 'undefined' && o !== null;
};
