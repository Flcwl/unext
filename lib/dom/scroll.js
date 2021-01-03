"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInOutQuad = exports.currentYPosition = void 0;
const raf_1 = require("./raf");
const genDefaultOptions = () => ({
    el: window,
    currentTime: 0,
    increment: 20,
    duration: 500,
    ease: easeInOutQuad,
});
const defaultOptions = genDefaultOptions();
const _animateScroll = (data) => {
    data.currentTime += data.increment;
    // calculate move
    const val = data.ease(data.currentTime, data.start, data.change, data.duration);
    data.el.scrollTo(0, val);
    const animateScroll = _animateScroll.bind(null, data);
    if (data.currentTime < data.duration) {
        raf_1.default.call(window, animateScroll);
    }
};
const Scroll = {
    /**
     * scroll to Y pos
     *
     * @param y scroll Pos
     * @param options default is `{}`
     */
    scrollTo(y, options = {}) {
        const start = currentYPosition(options.el) || 0;
        const data = Object.assign(defaultOptions, options, {
            start,
            change: y - start,
        });
        _animateScroll(data);
    },
    /**
     * scroll To Top
     * @param options
     */
    scrollToTop(options) {
        this.scrollTo(0, options);
    },
};
exports.default = Scroll;
function currentYPosition(el = window) {
    return (el === window ? Math.ceil(window.pageYOffset || window.scrollY) : el.scrollTop) || 0;
}
exports.currentYPosition = currentYPosition;
// easeInOut bezier curve
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}
exports.easeInOutQuad = easeInOutQuad;
