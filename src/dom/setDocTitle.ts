/**
 * set document title for html
 *
 * @param {string?} docTitle
 */
export const setDocTitle = (docTitle?: string) => {
  if (docTitle !== document.title) {
    document.title = docTitle
  }
}
