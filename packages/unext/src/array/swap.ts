/**
 * Swap two elements in array.
 */
export const swap = <T>(arr: T[], from: number, to: number) => {
  const temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;
}
