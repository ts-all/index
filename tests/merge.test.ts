import { describe, expect, test } from '@jest/globals';
import { merge } from '../src/libs/merge';

describe('merge', () => {
    test('simple merge', () => {
        expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    });

    test('simple clone', () => {
        expect(merge(true, { a: 1 })).toEqual({ a: 1 });
    });
});
