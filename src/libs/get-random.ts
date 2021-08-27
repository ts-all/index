/** 🎰 */
export function getRandomNum(min: number, max: number): number {
    let range: number = max - min;
    let rand: number = Math.random();
    return (min + Math.round(rand * range));
}
