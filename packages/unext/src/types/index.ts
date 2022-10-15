export type Undefined = undefined | void;
export type Nullish = null | Undefined;

export type StringOrNumber = string | number

export type RecordKey = StringOrNumber | symbol;

export type Dict<T = any> = Record<string, T>;

export type AnyRecord<T extends RecordKey = string, R = any> = Record<T, R>;

export type AnyFunc<T = any> = (...args: T[]) => any;

