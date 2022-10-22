/**
 * Generate a random number between the `lower` and `upper`.
 */
export const random = (lower: number, upper: number) => {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
};
