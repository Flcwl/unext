/**
 * Merge objects deep but not union array
 *
 * @param target
 * @param objects
 * @example
 *
 * const hh = { hh: { gg: 33 } }
 * const t = { a: [hh, 4], c: { d: 1 } }
 * const s = { a: [2, hh], b: 2, c: { e: 2 }, f: { g: 2 } }
 * mergeDeep(t, s)
 * // => { a: [ 2, { hh: { gg: 33 } } ], c: { d: 1, e: 2 }, b: 2, f: { g: 2 } }
 */
declare const mergeDeep: (target: object | [], ...objects: object[]) => object | [];
export default mergeDeep;
