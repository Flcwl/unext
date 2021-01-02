"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raf = void 0;
function _raf() {
    if (typeof window !== 'undefined') {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    }
}
exports.raf = (() => {
    return _raf() || ((callback, delay) => window.setTimeout(callback, delay || 17));
})();
