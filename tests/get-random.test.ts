import { describe, expect, test } from '@jest/globals';
import { getRandomNum } from '../src/libs/get-random';

describe('get-random 99-999', () => {
    const random: number = getRandomNum(99, 999);

    console.info(`random value: ${random}`);

    test('random bigger than min', () => {
        expect(random).toBeGreaterThanOrEqual(99);
    });

    test('random smaller than max', () => {
        expect(random).toBeLessThanOrEqual(999);
    });
});
