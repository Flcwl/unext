/**
 * Check if numeric
 *
 * @param n
 */
const isNumeric = (n: unknown) => {
  return !isNaN(parseFloat(n as string)) && isFinite(n as number)
}

export default isNumeric
