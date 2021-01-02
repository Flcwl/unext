"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDocTitle = void 0;
/**
 * set document title for html
 *
 * @param {string?} docTitle
 */
exports.setDocTitle = (docTitle) => {
    if (docTitle !== document.title) {
        document.title = docTitle;
    }
};
