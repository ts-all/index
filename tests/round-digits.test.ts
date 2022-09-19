import { describe, expect, test } from '@jest/globals';
import { roundDigits } from '../src/libs/round-digits';

describe('roundDigits', () => {
    test('roundDigits(12.636, 0.5)', () => {
        expect(roundDigits(12.636, 0.5)).toEqual(12.6);
    });

    test('roundDigits(12.636, 1)', () => {
        expect(roundDigits(12.636, 1)).toEqual(12.6);
    });

    test('roundDigits(12.636, 1.4)', () => {
        expect(roundDigits(12.636, 1.4)).toEqual(12.6);
    });

    test('roundDigits(12.636, 1.5)', () => {
        expect(roundDigits(12.636, 1.5)).toEqual(12.64);
    });

    test('roundDigits(12.636, 2)', () => {
        expect(roundDigits(12.636, 2)).toEqual(12.64);
    });

    test('roundDigits(12.636, 0)', () => {
        expect(roundDigits(12.636, 0)).toEqual(12.636);
    });

    test('roundDigits(12.636, -1)', () => {
        expect(roundDigits(12.636, -1)).toEqual(12.636);
    });

    test('roundDigits(12.636,  Number.NaN)', () => {
        expect(roundDigits(12.636, Number.NaN)).toEqual(12.636);
    });

    test('roundDigits(Number.NaN, 2)', () => {
        expect(roundDigits(Number.NaN, 2)).toEqual(Number.NaN);
    });

    test('roundDigits(Number.POSITIVE_INFINITY, 2', () => {
        expect(roundDigits(Number.POSITIVE_INFINITY, 2)).toEqual(Number.POSITIVE_INFINITY);
    });

    test('roundDigits(Number.NaN, Number.NaN', () => {
        expect(roundDigits(Number.NaN, Number.NaN)).toEqual(Number.NaN);
    });

    test('roundDigits(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY', () => {
        expect(roundDigits(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)).toEqual(Number.POSITIVE_INFINITY);
    });

    test('roundDigits(12.636, Number.POSITIVE_INFINITY)', () => {
        expect(roundDigits(12.636, Number.POSITIVE_INFINITY)).toEqual(12.636);
    });

    test('roundDigits(12.636, undefined)', () => {
        expect(roundDigits(12.636, undefined as unknown as number)).toBe(12.636);
    });

    test('roundDigits(undefined, -1)', () => {
        expect(roundDigits(undefined as unknown as number, -1)).toBe(undefined);
    });

    test('roundDigits(undefined, 0)', () => {
        expect(roundDigits(undefined as unknown as number, 0)).toBe(undefined);
    });

    test('roundDigits(undefined, 1)', () => {
        expect(roundDigits(undefined as unknown as number, 1)).toBe(undefined);
    });

    test('roundDigits(undefined, undefined)', () => {
        expect(roundDigits(undefined as unknown as number, undefined as unknown as number)).toBe(undefined);
    });
});
