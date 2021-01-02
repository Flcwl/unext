"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
const get_1 = require("./get");
/**
 * Generate an object composed of keys transformed by key.
 *
 * @param {any[]} list
 * @param {string|Function} key
 * @returns {Object}
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 * groupBy(['one', 'two', 'three'], 'length')
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
exports.groupBy = (list, key) => {
    const iteratee = typeof key === 'function' ? key : (val) => get_1.get(val, key);
    return list.reduce((result, value) => {
        const type = iteratee(value);
        (result[type] = result[type] || []).push(value);
        return result;
    }, {});
};
// console.log(
//   groupBy(
//     [
//       { a: 1, b: 2 },
//       { a: 2, b: 3 },
//       { a: 1, d: 5 },
//     ],
//     'a'
//   )
// )
// // { '1': [ { a: 1, b: 2 }, { a: 1, d: 5 } ], '2': [ { a: 2, b: 3 } ] }
// console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
// // => { '4': [4.2], '6': [6.1, 6.3] }
// console.log(groupBy(['one', 'two', 'three'], 'length'))
// // => { '3': ['one', 'two'], '5': ['three'] }
