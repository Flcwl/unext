/**
 * Setting dom data attribute which means status.
 */
export const setAttrStatus = (bool?: boolean) => (bool ? "" : undefined);

/**
 * Setting dom aria attribute.
 */
export const setAttrAria = (bool?: boolean) => (bool ? true : undefined);

/**
 * Setting dom data-key attribute.
 */
export const setAttrDataKey = (key: string) =>
  key.startsWith("data-") ? key : `data-${key}`;
