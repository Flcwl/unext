import { isNullish } from "../nullish";

/**
 * set document title for html
 */
export const setDocTitle = (docTitle?: string) => {
  if (isNullish(docTitle)) return;

  if (docTitle !== document.title) {
    document.title = docTitle;
  }
};
