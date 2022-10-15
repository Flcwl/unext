import { isUndef } from "../nullish"

/**
 * Merge default Prop
 */
 export const withDefaultProp = <T, P>(prop?: T, defaultProp?: P) => {
  return isUndef(prop) ? defaultProp : prop
}

/**
 * Merge defaultProps into props
 */
 export const withDefaultProps = <DP extends Record<string, any>, ECP extends Partial<DP>>(
  props: ECP | undefined,
  defaultProps?: DP
): Omit<ECP, keyof DP> & Required<Pick<ECP, keyof DP>> => {
  if (!defaultProps) return (props || {}) as any

  const mergedProps = { ...props }
  let propName

  for (propName in defaultProps) {
    if (mergedProps[propName] === undefined) {
      // @ts-ignore
      mergedProps[propName] = defaultProps[propName]
    }
  }

  return mergedProps as any
}


export type PropName = string | number | symbol

/**
 * Filtering props
 */
export const filterProps = <T extends Record<PropName, any>, R extends PropName[]>(
  props: T,
  omitProps: R
): Pick<T, Exclude<keyof T, R[number]>> => {
  return Object.keys(props)
    .filter((key) => !omitProps.includes(key))
    .reduce((filteredObj, key) => {
      filteredObj[key] = props[key]
      return filteredObj
    }, {} as any)
}
