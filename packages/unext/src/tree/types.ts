export interface BaseTreeNode extends Record<string, any> {
  children?: BaseTreeNode[];
}

export interface VisitTreeOptions {
  childrenKey?: string;
}

export interface BaseFlattedTreeNodeWithChildren<
  T extends BaseFlattedTreeNode<any>
> extends BaseFlattedTreeNode<any> {
  children: T[];
}

export interface BaseFlattedTreeNode<
  T extends BaseFlattedTreeNode<T, any>,
  R = any
> {
  parent?: BaseFlattedTreeNodeWithChildren<T>;
  children?: T[];
  depth: number;
  raw: R;
}
