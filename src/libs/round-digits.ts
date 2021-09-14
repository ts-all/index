export function roundDigits(num: number, digits: number): number {
    if (!digits || digits <= 0) {
        return num;
    }
    const digitsRound: number = Math.round(digits);
    let factor: number = 1;
    for (let i: number = 0; i < digitsRound; i++) {
        factor *= 10;
    }
    return Math.round(num * factor) / factor;
}
