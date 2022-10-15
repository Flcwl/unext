import { AnyFunc } from "../types"

export const callAll = <T extends AnyFunc>(...funcs: (T | undefined)[]) => {
  return function mergedFunc(...args: any) {
    funcs.forEach((func) => {
      func && func(...args)
    })
  }
}
