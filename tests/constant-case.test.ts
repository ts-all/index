import { describe, expect, test } from '@jest/globals';
import { constantCase } from '../src/libs/constant-case';

const testCases: Array<Array<string>> = [
    ['a', 'A'],
    ['A', 'A'],
    ['aa', 'AA'],
    ['aA', 'A_A'],
    ['constCase', 'CONST_CASE'],
    ['AconstCase', 'ACONST_CASE'],
    ['1constCase', '1CONST_CASE'],
    ['1ConstCase', '1_CONST_CASE'],
    ['const1Case', 'CONST1_CASE'],
    ['constCase1', 'CONST_CASE1'],
    ['const_Case', 'CONST_CASE'],
];

describe('constantCase', () => {
    for (const [input, output] of testCases) {
        test(`${input}->${output}`, () => {
            expect(constantCase(input)).toStrictEqual(output);
        });
    }

    test('empty string', () => {
        expect(constantCase('')).toStrictEqual('');
    });

    test('null', () => {
        expect(constantCase(null as unknown as string)).toStrictEqual('');
    });

    test('undefined', () => {
        expect(constantCase(undefined as unknown as string)).toStrictEqual('');
    });
});
