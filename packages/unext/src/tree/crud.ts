import { StringOrNumber } from "../types";
import { BaseTreeNode } from "./types";

/**
 * Find the TreeNode in the Tree by the special `key`
 *
 * @param TreeData
 * @param targetKey
 * @returns The first node found
 */
export const findNodeById = <T extends BaseTreeNode>(
  treeData: T[],
  targetKey: StringOrNumber,
  options?: { idFieldName?: string; childrenFieldName?: string }
): null | T => {
  const { idFieldName = "id", childrenFieldName = "children" } = options || {};

  const { length } = treeData;
  for (let i = 0; i < length; ++i) {
    const node = treeData[i];

    if (targetKey === node[idFieldName]) {
      return node;
    }

    if (node[childrenFieldName]) {
      const foundNode = findNodeById(node[childrenFieldName], targetKey);

      if (foundNode) {
        return foundNode as T;
      }
    }
  }
  return null;
};

/**
 * Remove the TreeNode in the Tree by the special `key`
 */
export const deleteNodeById = <T extends BaseTreeNode>(
  treeData: T[],
  targetId: StringOrNumber,
  options?: { idFieldName?: string; childrenFieldName?: string }
) => {
  const { idFieldName = "id", childrenFieldName = "children" } = options || {};

  const { length } = treeData;

  for (let i = 0; i < length; ++i) {
    const node = treeData[i];

    if (targetId === node[idFieldName]) {
      return treeData.splice(i, 1);
    }

    if (node[childrenFieldName]) {
      deleteNodeById(node[childrenFieldName], targetId, options);
    }
  }
};

/**
 * Add the TreeNode into Found position in the Tree.
 *
 * @param position 0 means added node before the children, 1 means after
 */
export const addChildNodeById = <T extends BaseTreeNode>(
  treeData: T[],
  targetId: StringOrNumber,
  sourceNode: T,
  position: 0 | 1 = 1
) => {
  const { length } = treeData;
  for (let i = 0; i < length; ++i) {
    const node = treeData[i];

    if (targetId === node.id) {
      if (!node.children) {
        node.children = [];
      }

      if (position === 1) {
        node.children.push(sourceNode);
      } else {
        node.children = [sourceNode].concat(node.children as T[]);
      }
      return;
    }

    if (node.children) {
      addChildNodeById(node.children, targetId, sourceNode, position);
    }
  }
};

/**
 * Add the tree children for Found TreeNode in the Tree.
 */
export const addChildrenById = <T extends BaseTreeNode>(
  treeData: T[],
  targetId: StringOrNumber,
  children: T[]
) => {
  const { length } = treeData;
  for (let i = 0; i < length; ++i) {
    const node = treeData[i];

    if (targetId === node.id) {
      node.children = children;
    }

    if (node.children) {
      addChildrenById(node.children, targetId, children);
    }
  }
};

/**
 * insert TreeNode into the before of after of the Found TreeNode.
 *
 * @param position 0 means added node before the found TreeNode, 1 means after
 */
export const insertNodeById = <T extends BaseTreeNode>(
  treeData: T[],
  targetId: StringOrNumber,
  sourceNode: T,
  position: 0 | 1,
  options?: { idFieldName?: string; childrenFieldName?: string }
) => {
  const { idFieldName = "id", childrenFieldName = "children" } = options || {};

  const { length } = treeData;
  for (let i = 0; i < length; ++i) {
    const node = treeData[i];

    if (targetId === node[idFieldName]) {
      treeData.splice(i + position, 0, sourceNode);
      return;
    }

    if (node[childrenFieldName]) {
      insertNodeById(node[childrenFieldName], targetId, sourceNode, position);
    }
  }
};
