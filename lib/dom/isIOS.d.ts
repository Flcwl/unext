/**
 *  Check if Running at IOS
 *
 * @param _window
 * @ref https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
 */
declare const isIOS: (_window?: Window & typeof globalThis) => boolean;
export default isIOS;
