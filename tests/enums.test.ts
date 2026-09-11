import { describe, expect, test } from '@jest/globals';
import { enumNumberEntries, enumStringEntries } from '../src/libs/enums';

enum NumEnum {
    a = 1,
    b = 2,
}

enum StrEnum {
    k1 = 'v1',
    k2 = 'v2',
}

describe('enums', () => {
    test('enumNumberEntries(NumEnum)', () => {
        expect(enumNumberEntries(NumEnum)).toEqual([['a', 1], ['b', 2]]);
    });

    test('enumNumberEntries(StrEnum)', () => {
        expect(enumNumberEntries(StrEnum)).toEqual([]);
    });

    test('enumStringEntries(StrEnum)', () => {
        expect(enumStringEntries(StrEnum)).toEqual([['k1', 'v1'], ['k2', 'v2']]);
    });

    test('enumStringEntries(NumEnum)', () => {
        expect(enumStringEntries(NumEnum)).toEqual([]);
    });
});
