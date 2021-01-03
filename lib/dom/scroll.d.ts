declare const Scroll: {
    /**
     * 滚动到y的位置，动画方式： easeInOut
     *
     * @param {number} y 滚动位置
     * @param {object} [options={}] 可选参数 见上
     * @todo 扩展动画参数 easing | 滚动结束回调
     */
    animateScrollTo(y: any, options?: {}): void;
    /**
     * 滚动到浏览器顶部
     *
     * @param {object} options 可选参数 见上
     */
    scrollToTop(options: any): void;
};
export default Scroll;
export declare function currentYPosition(el?: any): any;
export declare function easeInOutQuad(t: any, b: any, c: any, d: any): any;
