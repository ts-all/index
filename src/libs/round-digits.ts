export function roundDigits(num: number, digits: number): number {
    if (!digits || digits <= 0) {
        return num;
    } else {
        digits = Math.round(digits);
        let factor: number = 1;
        for (let i: number = 0; i < digits; i++) {
            factor = factor * 10;
        }
        return Math.round(num * factor) / factor;
    }
}
