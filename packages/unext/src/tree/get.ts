import { BaseTreeNode } from "./types";
import { visitTree } from "./visit";

/**
 * Get all leaf nodes by TreeNode.
 */
export const getTreeNodeLeafs = <T extends BaseTreeNode>(treeNode: T) => {
  const leafNodes: T[] = [];

  const dig = (node: BaseTreeNode) => {
    if (node.children) {
      node.children.forEach((subNode) => {
        dig(subNode);
      });
    } else {
      leafNodes.push(node as T);
    }
  };

  dig(treeNode);

  return leafNodes;
};

/**
 * Get all ancestor nodes in tree.
 */
export const getTreeAncestors = <T extends BaseTreeNode>(tree: T[]) => {
  const nodes = [] as T[];

  visitTree(tree, (node) => {
    if (node.children) {
      nodes.push(node);
    }
  });

  return nodes;
};
