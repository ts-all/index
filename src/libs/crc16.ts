export interface Crc16Options {

    /** Polynomial, default: 0x8005 */
    polynomial?: number;

    /** Initial CRC value, default: 0x0000 */
    initialValue?: number;

    /** Reflect input bytes, default: false */
    reflectInput?: boolean;

    /** Reflect output CRC, default: false */
    reflectOutput?: boolean;

    /** XOR value applied to the final CRC, default: 0x0000 */
    xorOutput?: number;
}

/**
 * Reflect (reverse) the bit order of a value.
 * Reverses the specified number of bits, moving the least significant bit
 * to the most significant position and vice versa.
 * Used by CRC algorithms to handle reflected input bytes (RefIn)
 * and reflected output CRC values (RefOut).
 * For example:
 * reflect(0b00000101, 8) => 0b10100000
 * reflect(0x1234, 16) => 0x2C48
 * @param value - The value whose bits should be reversed.
 * @param bitCount - The number of bits to reverse.
 * @returns The bit-reversed value.
 */
export function reflect(value: number, bitCount: number): number {
    let input: number = value;
    let result: number = 0;

    for (let i: number = 0; i < bitCount; i++) {
        result = (result << 1) | (input & 1);
        input >>>= 1;
    }

    return result;
}

/**
 * Calculate CRC-16.
 * @returns CRC value between 0x0000 and 0xFFFF.
 * @see https://crccalc.com/?method=CRC-16
 */
export function crc16(bytes: Uint8Array, options: Crc16Options = {}): number {
    const { polynomial = 0x8005, initialValue = 0x0000, reflectInput = false, reflectOutput = false, xorOutput = 0x0000 } = options;

    let crc: number = initialValue & 0xFFFF;
    const poly: number = polynomial & 0xFFFF;

    for (const byte of bytes) {
        const value: number = reflectInput ? reflect(byte, 8) : byte;
        crc ^= value << 8;
        for (let bit: number = 0; bit < 8; bit++) {
            crc = (crc & 0x8000) ? ((crc << 1) ^ poly) : (crc << 1);
            crc &= 0xFFFF;
        }
    }

    if (reflectOutput) {
        crc = reflect(crc, 16);
    }

    return (crc ^ xorOutput) & 0xFFFF;
}

/**
 * CRC-16/ARC (CRC-16/IBM)
 *
 * Poly: 0x8005
 * Init: 0x0000
 * RefIn: true
 * RefOut: true
 * XorOut: 0x0000
 */
export function crc16Arc(bytes: Uint8Array): number {
    return crc16(bytes, { polynomial: 0x8005, initialValue: 0x0000, reflectInput: true, reflectOutput: true });
}

/**
 * CRC-16/MODBUS
 *
 * Poly: 0x8005
 * Init: 0xFFFF
 * RefIn: true
 * RefOut: true
 * XorOut: 0x0000
 */
export function crc16Modbus(bytes: Uint8Array): number {
    return crc16(bytes, { polynomial: 0x8005, initialValue: 0xFFFF, reflectInput: true, reflectOutput: true });
}

/**
 * CRC-16/CCITT-FALSE
 *
 * Poly: 0x1021
 * Init: 0xFFFF
 * RefIn: false
 * RefOut: false
 * XorOut: 0x0000
 */
export function crc16Ccitt(bytes: Uint8Array): number {
    return crc16(bytes, { polynomial: 0x1021, initialValue: 0xFFFF, reflectInput: false, reflectOutput: false });
}
