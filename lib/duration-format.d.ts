declare type DurationType = 'seconds' | 'milliseconds';
interface DurationTime {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
interface Duration {
    $d: DurationTime;
    $t: number;
    format: (formatStr: string) => string;
}
export declare const duration: (t: unknown, type?: DurationType) => Duration;
export {};
