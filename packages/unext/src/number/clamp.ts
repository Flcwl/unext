import { invariant } from "../shared";

/**
 * Clamps a value to ensure it stays within the `min` and `max`.
 */
export function clamp(value: number, min: number, max: number) {
  invariant(min <= max, "clamp: max cannot be less than min");
  return Math.min(Math.max(value, min), max);
}
