export interface BaseTreeNode extends Record<string, any> {
  children?: BaseTreeNode[]
}

export interface VisitTreeOptions {
  childrenKey?: string
}


/**
 * 递归遍历 tree 型结构数据，以 `children` 作为节点孩子
 *
 * 对于 visit 函数：
 *  depth 以 0 打头表示最外层，可以结合数组下标 0 开头方便记忆
 *  parent 将为 null ，如果当前 node 是最外层节点
 */
 export const visitTree = <T extends BaseTreeNode>(
  tree: T[],
  visit?: (node: T, depth: number, parent: T | null) => void,
  options?: VisitTreeOptions
) => {
  if (!visit) return

  const dig = (depth: number, node: T, parent: T | null) => {
    visit(node, depth, parent)

    if (node.children) {
      const childDepth = depth + 1

      node.children.forEach((child: any) => {
        dig(childDepth, child, node)
      })
    }
  }

  tree.forEach((node) => {
    dig(0, node, null)
  })
}
