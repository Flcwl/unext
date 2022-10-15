import { BaseTreeNode } from "./types"

const copy = <T>(node: T) => ({ ...node })

/**
 * clone TreeNode deep by `children` key.
 */
export const cloneTreeNode = <T extends BaseTreeNode>(node: T) => {
  const nextTreeNode = copy(node)
  const dig = (node: BaseTreeNode) => {
    if (node.children) {
      node.children = node.children.map((child) => dig(copy(child)))
    }
    return node
  }
  dig(nextTreeNode)
  return nextTreeNode
}

/**
 * clone Tree deep by `children` key.
 */
export const cloneTree = <T extends BaseTreeNode>(tree: T[]) => tree.map((node) => cloneTreeNode(node))
