export default copyToClipboard;
/**
 * Copy to clipboard
 *
 * copy string into clipboard when string
 * copy dom.value into clipboard when dom
 *
 * @param {string | DOM} $textarea
 */
declare function copyToClipboard($textarea: string | any): Promise<void>;
