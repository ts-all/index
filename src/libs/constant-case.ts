export function constantCase(value: string): string {
    return value.split(/(?=[A-Z])/u).join('_').toUpperCase();
}
