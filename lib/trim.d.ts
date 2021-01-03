declare type TrimType = 'left' | 'right';
declare const trim: (str: string, char: string, type?: TrimType) => string;
export default trim;
