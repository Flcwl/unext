import { cloneTree } from "./clone";
import { BaseTreeNode } from "./types";

/**
 * Filter TreeNode deep by `children` key
 */
export const filterTreeNode = <T extends BaseTreeNode>(
  node: T,
  filterFunc: (...arg: any[]) => boolean
) => {
  if (!filterFunc(node)) return false;

  const dig = (node: BaseTreeNode) => {
    if (node.children) {
      node.children = node.children.filter((child) => {
        if (!filterFunc(child)) return false;

        dig(child);
        return true;
      });
    }
  };

  dig(node);
  return true;
};

/**
 * Filter Tree deep by `children` key
 */
export const filterTree = <T extends BaseTreeNode>(
  tree: T[],
  filterFunc: (...arg: any[]) => boolean
) => {
  return cloneTree(tree).filter((node) => filterTreeNode(node, filterFunc));
};
