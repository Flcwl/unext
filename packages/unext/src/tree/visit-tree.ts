import { getChildrenField } from "./shared";
import { BaseTreeNode } from "./types";

/**
 * Visit Tree deep by `children` key based on pre-order traversal.
 */
export const visitTree = <T extends BaseTreeNode>(
  tree: T[],
  visit?: (node: T, depth: number, parent: T | null) => void,
  options?: VisitTreeOptions
) => {
  if (!visit) return;
  const childrenFieldName =
    (options && options.childrenFieldName) || getChildrenField;

  const dig = (node: T, depth: number, parent: T | null) => {
    visit(node, depth, parent);

    const children = childrenFieldName(node);

    if (children) {
      const childDepth = depth + 1;

      children.forEach((child: any) => {
        dig(child, childDepth, node);
      });
    }
  };

  tree.forEach((node) => {
    dig(node, 0, null);
  });
};

export interface VisitTreeOptions {
  childrenFieldName?: (node: BaseTreeNode) => BaseTreeNode[];
}
