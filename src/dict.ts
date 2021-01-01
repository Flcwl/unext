/**
 * Transform object into dict
 *
 * @param obj
 * @param keys
 */
export const dict = (obj = {}, keys = ['key', 'value']) => {
  const [key, value] = keys
  return Object.entries(obj).map((item) => {
    return {
      [key]: item[0],
      [value]: item[1]
    }
  })
}
