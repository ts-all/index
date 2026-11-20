import { describe, expect, test } from '@jest/globals';
import { isStringAndLengthy } from '../src';

describe('type predicts', () => {
    test('empty string', () => {
        expect(isStringAndLengthy('')).toEqual(false);
    });
});
