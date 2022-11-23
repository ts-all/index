import { describe, expect, test } from '@jest/globals';
import { trimSlash } from '../src/libs/trim-slash';

describe('trimSlash', () => {
    test('trimSlash(/abc/)', () => {
        expect(trimSlash('/abc/')).toEqual('abc');
    });

    test('trimSlash(////abc////)', () => {
        expect(trimSlash('////abc////')).toEqual('/abc/');
    });

    test('trimSlash(/abc/, start)', () => {
        expect(trimSlash('/abc/', 'start')).toEqual('abc/');
    });

    test('trimSlash(/abc/, end)', () => {
        expect(trimSlash('/abc/', 'end')).toEqual('/abc');
    });

    test('trimSlash(undefined)', () => {
        expect(trimSlash(undefined as unknown as string)).toEqual(undefined);
    });

    test('trimSlash(null)', () => {
        expect(trimSlash(null as unknown as string)).toEqual(null);
    });

    test('trimSlash(object)', () => {
        const obj: unknown = { a: 1 };
        expect(trimSlash(obj as string)).toEqual(obj);
    });

    test('trimSlash("")', () => {
        expect(trimSlash('')).toEqual('');
    });
});
