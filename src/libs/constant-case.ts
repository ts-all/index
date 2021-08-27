export function constantCase(value: string): string {
    return value.split(/(?=[A-Z])/).join('_').toUpperCase();
}
