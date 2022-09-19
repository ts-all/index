import { getRandomNum } from './libs/get-random';
import { roundDigits } from './libs/round-digits';

const random: number = getRandomNum(99, 999);
console.info(`random value: ${random}`);

console.info(roundDigits(12.636, Number.NaN));
