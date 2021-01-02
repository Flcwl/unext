/**
 * Range map to an array
 * @param arr
 * @param start
 * @param end
 * @param callback
 */
declare const rangeMap: <T>(arr: T[], start: number, end: number, callback: (value: T, index: number, array: T[]) => unknown[]) => [];
export default rangeMap;
