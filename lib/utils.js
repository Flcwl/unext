"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var padStart = function (str, length, pad) {
    var s = String(str);
    if (!s || s.length >= length) {
        return s;
    }
    return "" + Array(length + 1 - s.length).join(pad) + str;
};
var addZero = function (str, length) {
    if (length === void 0) { length = 2; }
    return padStart(str, length, '0');
};
var initList = function (length, fill) {
    if (fill === void 0) { fill = undefined; }
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr.push(fill);
    }
    return arr;
};
exports.default = {
    l: initList,
    z: addZero,
};
