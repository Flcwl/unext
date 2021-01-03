"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trim = (str, char, type) => {
    if (!char) {
        return str.trim();
    }
    if (type == 'left') {
        return str.replace(new RegExp('^\\' + char + '+', 'g'), '');
    }
    else if (type == 'right') {
        return str.replace(new RegExp('\\' + char + '+$', 'g'), '');
    }
    return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
};
exports.default = trim;
