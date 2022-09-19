export function roundDigits(num: number, digits: number): number {
    if (typeof num !== 'number' || typeof digits !== 'number') {
        return num;
    }
    if (Number.isNaN(num) || !Number.isFinite(num) || Number.isNaN(digits) || !Number.isFinite(digits)) {
        return num;
    }
    if (digits <= 0) {
        return num;
    }
    const digitsRound: number = Math.round(digits);
    const factor: number = 10 ** digitsRound;
    return Math.round(num * factor) / factor;
}
