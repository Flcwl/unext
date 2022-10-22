/**
 * Returns a function that is the composition of a list of functions,
 * each consuming the return value of the function that follows.
 */
export const compose = <T extends Function>(...args: T[]) => {
  const lastIndex = args.length - 1;

  return function(...args1: any[]) {
    let i = lastIndex;
    let result = args[i].apply(null, args1);

    while (i--) result = args[i].call(null, result);

    return result;
  };
}
