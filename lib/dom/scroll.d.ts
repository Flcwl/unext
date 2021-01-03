interface ScrollOption {
    el?: Window | Element;
    currentTime?: number;
    increment?: number;
    duration?: number;
    start?: number;
    change?: number;
    ease?: (t: number, b: number, c: number, d: number) => number;
}
declare const Scroll: {
    /**
     * scroll to Y pos
     *
     * @param y scroll Pos
     * @param options default is `{}`
     */
    scrollTo(y: number, options?: ScrollOption): void;
    /**
     * scroll To Top
     * @param options
     */
    scrollToTop(options: ScrollOption): void;
};
export default Scroll;
export declare function currentYPosition(el?: Window | Element): number;
export declare function easeInOutQuad(t: number, b: number, c: number, d: number): number;
