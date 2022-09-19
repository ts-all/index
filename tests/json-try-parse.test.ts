import { describe, expect, test } from '@jest/globals';
import { jsonTryParse } from '../src/libs/json-try-parse';

describe('jsonTryParse', () => {
    test('{"a":1}', () => {
        expect(jsonTryParse('{"a":1}')).toStrictEqual({ a: 1 });
    });

    test('empty string', () => {
        expect(jsonTryParse('')).toStrictEqual(null);
    });

    test('null', () => {
        expect(jsonTryParse('null')).toStrictEqual(null);
    });

    test('undefined', () => {
        expect(jsonTryParse('undefined')).toStrictEqual(null);
    });

    test('"abc123"', () => {
        expect(jsonTryParse('"abc123"')).toStrictEqual('abc123');
    });

    test('123', () => {
        expect(jsonTryParse('123')).toStrictEqual(123);
    });

    test('true', () => {
        expect(jsonTryParse('true')).toStrictEqual(true);
    });
});
