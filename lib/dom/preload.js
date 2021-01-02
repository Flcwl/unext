"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadAllImages = exports.preloadImage = void 0;
exports.preloadImage = (path) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = (img) => resolve(img);
    img.onerror = (err) => resolve(err);
    img.src = path;
});
exports.preloadAllImages = (paths) => Promise.all(paths.map(exports.preloadImage)).then((images) => Promise.resolve({
    images,
    length: images.length,
    error: images.filter((item) => item.type === 'error').length,
}));
