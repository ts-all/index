// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonTryParse<T>(text: string, reviver?: (key: any, value: any) => any): T | null {
    try {
        return JSON.parse(text, reviver) as T;
    } catch {
        return null;
    }
}
