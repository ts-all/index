import { describe, expect, test } from '@jest/globals';
import { crc16Arc, crc16Ccitt, crc16Modbus } from '../src';

const buffer: Buffer = Buffer.from('123456789', 'utf8');

describe('crc16', () => {
    test('crc16 arc', () => {
        expect(crc16Arc(buffer)).toEqual(0xBB3D);
    });

    test('crc16 modbus', () => {
        expect(crc16Modbus(buffer)).toEqual(0x4B37);
    });

    test('crc16 ccitt', () => {
        expect(crc16Ccitt(buffer)).toEqual(0x29B1);
    });
});
