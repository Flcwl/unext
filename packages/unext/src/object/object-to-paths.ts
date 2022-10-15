import { isObject } from "./is"

/**
 * Transform object to paths
 */
 export const objectToPaths = <T extends Object>(props: T) => {
  const objectPaths = [] as any[]

  const dig = (obj: any, parents: (string | number)[]) => {
    if (Array.isArray(obj)) {
      obj.forEach((value, index) => {
        const paths = [...parents, index]
        dig(value, paths)
      })
    } else if (isObject(obj)) {
      Object.keys(obj).forEach((key) => {
        const value = obj[key]
        const paths = [...parents, key]
        dig(value, paths)
      })
    } else {
      const varItem = [...parents, obj] as any[]
      objectPaths.push(varItem)
    }
  }

  dig(props, [])
  return objectPaths
}
