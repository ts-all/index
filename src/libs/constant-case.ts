export function constantCase(value: string): string {
    if (typeof value != 'string') {
        return '';
    }
    if (value.length <= 1) {
        return value.toUpperCase();
    }
    return value.replace(/_/ug, '').split(/(?=[A-Z])/u).join('_').toUpperCase();
}
