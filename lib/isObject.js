"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toOwnString_1 = require("./toOwnString");
const isObject = (o) => {
    return toOwnString_1.default(o) === '[object Object]';
};
exports.default = isObject;
