"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = void 0;
/**
 * Download File
 *
 * @param link
 */
exports.download = (link) => {
    const isChrome = navigator.userAgent.indexOf('Chrome') !== -1;
    if (isChrome) {
        window.location.href = link;
        return;
    }
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'display:none; width=0; height=0';
    document.body.appendChild(iframe);
    iframe.src = link;
};
