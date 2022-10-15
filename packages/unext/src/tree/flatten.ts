import { AnyRecord, Nullish } from "../types"
import { getChildrenField } from "./shared"
import { BaseFlattedTreeNode, BaseFlattedTreeNodeWithChildren, BaseTreeNode } from "./types"

/**
 * Flattened tree data structure based on pre-order traversal.
 */
export const flattenTree = <T extends AnyRecord>(
  tree : T[],
  transform: (node: BaseFlattedTreeNode<any, T>, indexes: number[]) => any,
  options?: FlattenTreeOptions
) => {
  const flattedTree: BaseFlattedTreeNode<any>[] = []
  const childrenFieldName = (options && options.childrenFieldName) || getChildrenField

  const dig = (
    depth: number,
    node: BaseTreeNode,
    parent: BaseFlattedTreeNodeWithChildren<any>,
    pathIndexes: number[]
  ) => {
    const children = childrenFieldName(node)

    let flattedNode: BaseFlattedTreeNode<any> = {
      raw: node,
      depth,
      parent,
    }

    flattedNode = transform ? transform(flattedNode, pathIndexes) : flattedNode

    flattedTree.push(flattedNode)

    if (children) {
      const childDepth = depth + 1

      flattedNode.children = children.map((child: any, index: number) => {
        return dig(
          childDepth,
          child,
          flattedNode as BaseFlattedTreeNodeWithChildren<any>,
          pathIndexes.concat(index)
        )
      })
    }

    return flattedNode
  }

  // @ts-ignore
  const treeRoot: FlattenTreeNodeRoot<BaseFlattedTreeNode<any>> = getTreeRoot()
  // @ts-ignore
  // depth start with zero.
  treeRoot.children = tree.map((node, index) => dig(0, node, treeRoot, [index]))

  return flattedTree
}

/**
 * Create as ROOT_HOST
 * With it you can find top TreeNode sibling quickly.
 */
 const getTreeRoot = () => {
  return {
    depth: -1,
  }
}

/**
 * Check is Tree Root
 */
 export const isTreeRoot = <T extends { depth?: number }>(
  node: T | Nullish
): node is Nullish => {
  return !node || node.depth === -1
}


export interface FlattenTreeOptions {
  childrenFieldName?: (node: BaseTreeNode) => BaseTreeNode[]
}

export interface FlattenTreeNodeRoot<T> {
  depth: number
  children: T[]
}
