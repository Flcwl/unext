export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>;

/**
 * Set ref into a React element.
 */
export function setRef<T>(ref: ReactRef<T> | null, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/**
 * Merges multiple refs into a single function ref.
 */
export const mergeRefs = <T>(...refs: (ReactRef<T> | null)[]) => {
  // Empty check
  if (refs.some((ref) => ref) === false) return null;

  return (value: T) => {
    refs.forEach((ref) => {
      setRef(ref, value);
    });
  };
};
