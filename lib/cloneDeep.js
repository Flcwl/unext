"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const isArray = Array.isArray;
/**
 * deep clone
 * @param src
 */
const cloneDeep = (src) => {
    if (typeof src !== 'object' || src === null) {
        return src;
    }
    let target;
    if (isArray(src)) {
        target = src.map(cloneDeep);
    }
    else if (src instanceof Date) {
        target = new Date(src.getTime());
    }
    else if (env_1.isBrowser && src instanceof Node) {
        target = src.cloneNode(true);
    }
    else {
        const Ctor = Object.getPrototypeOf(src).constructor;
        target = new Ctor();
        const isPack = src instanceof String || src instanceof Boolean || src instanceof Number;
        if (!isPack) {
            for (const key in src) {
                target[key] = cloneDeep(src[key]);
            }
        }
    }
    return target;
};
exports.default = cloneDeep;
