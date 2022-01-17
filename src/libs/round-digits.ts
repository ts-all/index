export function roundDigits(num: number, digits: number): number {
    if (typeof num !== 'number' || typeof digits !== 'number') {
        return num;
    }
    if (!digits || digits <= 0) {
        return num;
    }
    const digitsRound: number = Math.round(digits) || 0;
    const factor: number = 10 ** digitsRound;
    return Math.round(num * factor) / factor;
}
