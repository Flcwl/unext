"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInOutQuad = exports.currentYPosition = void 0;
const raf_1 = require("./raf");
// options可设置参数如下
const genDefaultOptions = () => ({
    el: window,
    currentTime: 0,
    increment: 20,
    duration: 500,
});
const _animateScroll = (data) => {
    data.currentTime += data.increment;
    const val = easeInOutQuad(data.currentTime, data.start, data.change, data.duration); // 计算每次移动的数值
    data.el.scrollTo(0, val);
    const animateScroll = _animateScroll.bind(null, data);
    if (data.currentTime < data.duration) {
        raf_1.default.call(window, animateScroll);
    }
};
// 滚动条滚动动画
const Scroll = {
    /**
     * 滚动到y的位置，动画方式： easeInOut
     *
     * @param {number} y 滚动位置
     * @param {object} [options={}] 可选参数 见上
     * @todo 扩展动画参数 easing | 滚动结束回调
     */
    animateScrollTo(y, options = {}) {
        const start = currentYPosition(options.el) || 0;
        const defaultOpt = genDefaultOptions();
        const data = Object.assign(defaultOpt, options, {
            start,
            change: y - start,
        });
        _animateScroll(data);
    },
    /**
     * 滚动到浏览器顶部
     *
     * @param {object} options 可选参数 见上
     */
    scrollToTop(options) {
        this.animateScrollTo(0, options);
    },
};
exports.default = Scroll;
function currentYPosition(el = window) {
    return (el === window ? Math.ceil(window.pageYOffset || window.scrollY) : el.scrollTop) || 0;
}
exports.currentYPosition = currentYPosition;
// 计算动画 easeInOut 末位置
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}
exports.easeInOutQuad = easeInOutQuad;
