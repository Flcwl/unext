"use strict";
/* global window process */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNode = exports.isBrowser = void 0;
const _isBrowser = () => {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
};
exports.isBrowser = (() => _isBrowser())();
const _isNode = () => {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
};
exports.isNode = (() => _isNode())();
