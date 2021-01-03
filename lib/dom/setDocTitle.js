"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * set document title for html
 *
 * @param {string?} docTitle
 */
const setDocTitle = (docTitle) => {
    if (docTitle !== document.title) {
        document.title = docTitle;
    }
};
exports.default = setDocTitle;
