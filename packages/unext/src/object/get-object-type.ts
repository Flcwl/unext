import { toString } from "./to-string";

/**
 * Will return the object type for any structure
 */
export const getObjectType = (o: unknown): string => toString.call(o).slice(8, -1)
