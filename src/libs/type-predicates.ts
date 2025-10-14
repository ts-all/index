export function isStringAndLengthy(value: unknown): value is string {
    if (typeof value != 'string') { return false; }
    return value.length > 0;
}

export function isArrayAndLengthy<T>(value?: unknown): value is Array<T> {
    return Array.isArray(value) && value.length > 0;
}
