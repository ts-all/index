import { describe, expect, test } from '@jest/globals';
import { enumNumberEntries, enumStringEntries, getStringEnumKey } from '../src/libs/enums';

enum NumEnum {
    a = 1,
    b = 2,
}

enum StrEnum {
    k1 = 'v1',
    k2 = 'v2',
}

enum StrEnum2 {
    k1 = '1',
    k2 = '2',
}

describe('enums', () => {
    test('enumNumberEntries(NumEnum)', () => {
        expect(enumNumberEntries(NumEnum)).toEqual([['a', 1], ['b', 2]]);
    });

    test('enumNumberEntries(StrEnum)', () => {
        expect(enumNumberEntries(StrEnum)).toEqual([]);
    });

    test('enumNumberEntries(StrEnum2)', () => {
        expect(enumNumberEntries(StrEnum2)).toEqual([]);
    });

    test('enumStringEntries(StrEnum)', () => {
        expect(enumStringEntries(StrEnum)).toEqual([['k1', 'v1'], ['k2', 'v2']]);
    });

    test('enumStringEntries(StrEnum2)', () => {
        expect(enumStringEntries(StrEnum2)).toEqual([['k1', '1'], ['k2', '2']]);
    });

    test('enumStringEntries(NumEnum)', () => {
        expect(enumStringEntries(NumEnum)).toEqual([]);
    });

    test('getStringEnumKey', () => {
        expect(getStringEnumKey(StrEnum, 'v1')).toEqual('k1');
    });

    test('getStringEnumKey', () => {
        expect(getStringEnumKey(StrEnum, 'c1')).toEqual(null);
    });

    test('getStringEnumKey', () => {
        expect(getStringEnumKey(StrEnum, '')).toEqual(null);
    });
});
