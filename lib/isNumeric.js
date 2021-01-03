"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if numeric
 *
 * @param n
 */
const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
exports.default = isNumeric;
