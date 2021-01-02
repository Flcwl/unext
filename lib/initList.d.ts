/**
 * Init an array with filler
 *
 * @generic T
 * @param {number} size
 * @param {(index: number) => T} fill
 * @returns {T[]}
 */
export declare const initList: <T>(size: number, fill: (index: number) => unknown) => T[];
