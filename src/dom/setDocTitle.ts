/**
 * set document title for html
 *
 * @param {string?} docTitle
 */
const setDocTitle = (docTitle?: string) => {
  if (docTitle !== document.title) {
    document.title = docTitle
  }
}

export default setDocTitle
