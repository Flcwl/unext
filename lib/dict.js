"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dict = void 0;
/**
 * Transform object into dict
 *
 * @param obj
 * @param keys
 */
exports.dict = (obj = {}, keys = ['key', 'value']) => {
    const [key, value] = keys;
    return Object.entries(obj).map((item) => {
        return {
            [key]: item[0],
            [value]: item[1]
        };
    });
};
