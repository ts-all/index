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

export function offRound(value: number, digits: number = 9): number {
    if (typeof value != 'number') { return value; }
    let fixedDigits: number = Math.floor(digits);
    if (typeof fixedDigits != 'number' || !Number.isInteger(fixedDigits) || fixedDigits < 0 || fixedDigits > 20) {
        fixedDigits = 9;
    }
    return roundDigits(value, fixedDigits) || value;
}

export function truncDigits(num: number, digits: number): number {
    if (typeof num !== 'number' || typeof digits !== 'number') {
        return num;
    }
    if (Number.isNaN(num) || !Number.isFinite(num) || Number.isNaN(digits) || !Number.isFinite(digits)) {
        return num;
    }
    if (digits <= 0) {
        return num;
    }
    const digitCount: number = Math.round(digits);
    const factor: number = 10 ** digitCount;
    return Math.trunc(num * factor) / factor;
}
