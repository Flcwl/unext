/**
 * unique array of objects by specific key
 *
 * @generic T
 * @param {T[]} arr
 * @param {string} key
 */
declare const uniqBy: <T>(arr: T[], key: string) => T[];
export default uniqBy;
