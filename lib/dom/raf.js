"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _raf() {
    if (typeof window !== 'undefined') {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    }
}
const raf = (() => {
    return _raf() || ((callback, delay) => window.setTimeout(callback, delay || 17));
})();
exports.default = raf;
