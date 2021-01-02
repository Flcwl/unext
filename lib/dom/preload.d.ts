export declare const preloadImage: (path: string) => Promise<unknown>;
export declare const preloadAllImages: (paths: string[]) => Promise<{
    images: any;
    length: any;
    error: any;
}>;
