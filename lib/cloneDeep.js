"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDeep = void 0;
const isArray = Array.isArray;
const env_1 = require("./env");
/**
 * deep clone
 * @param src
 */
exports.cloneDeep = (src) => {
    if (typeof src !== 'object' || src === null) {
        return src;
    }
    let target;
    if (isArray(src)) {
        target = src.map(exports.cloneDeep);
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
                target[key] = exports.cloneDeep(src[key]);
            }
        }
    }
    return target;
};
