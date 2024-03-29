import { isNullish } from "../nullish";
import { getObjectType } from "./get-object-type";

export const clone = <T>(obj: T): T => {
  if (isNullish(obj)) return obj;

  const objType = getObjectType(obj);

  switch (objType) {
    case "Date":
      const objDate: Date = obj as any;
      const clonedDate = new Date();
      clonedDate.setTime(objDate.getTime());

      return clonedDate as any as T;

    case "Object":
      const copiedObject: any = {};

      for (const key in obj) {
        copiedObject[key] = clone(obj[key]);
      }
      return copiedObject as T;

    case "Array":
      const copiedArray = [];
      const objArray: Record<string, any>[] = obj as any;

      for (let i = 0; i < objArray.length; ++i) {
        copiedArray.push(clone(objArray[i]));
      }

      return copiedArray as any as T;
    default:
      // not need clone such as `BitInt`, `BitFloat`, 'RegExp'
      return obj;
  }
};
