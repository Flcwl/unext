/**
 * A Promise to delay timeout.
 */
export const delay = (timeout: number) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(undefined), timeout);
    } catch (err) {
      reject(err);
    }
  })
}
