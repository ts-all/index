export function jsonTryParse<T>(...args: Parameters<typeof JSON.parse>): T | null {
    try {
        return JSON.parse(args[0], args[1]) as T;
    } catch {
        return null;
    }
}
