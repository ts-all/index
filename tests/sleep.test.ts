import { describe, expect, test } from '@jest/globals';
import { sleep } from '../src/libs/sleep';

describe('sleep for 500 miliseconds', () => {
    test('time elapsed 500ms', async () => {
        const dateBefore: number = Date.now();
        await sleep(500);
        const dateAfter: number = Date.now();
        expect(dateAfter - dateBefore).toBeGreaterThanOrEqual(500);
    });
});
