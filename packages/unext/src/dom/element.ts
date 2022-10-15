/**
 * Remove All Children from an element
 */
export const replaceChildren = (
  parentNode: HTMLElement,
  addedNodes: Element | Text
) => {
  while (parentNode.lastChild) {
    parentNode.removeChild(parentNode.lastChild);
  }
  parentNode.append(addedNodes);
};
