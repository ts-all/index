export type EnumBase = Record<string, number | string>;

export function enumNumberEntries(enumObj: EnumBase): Array<[string, number]> {
    return Object.values(enumObj).filter((i): i is number => typeof i == 'number').map(i => [enumObj[i] as string, i]);
}

export function enumStringEntries(enumObj: EnumBase): Array<[string, string]> {
    return Object.entries(enumObj).filter((i): i is [string, string] => i[0] != 'NaN' && Number.isNaN(Number(i[0])) && typeof i[1] == 'string' && i[1].length > 0).map(([key, value]) => [key, value]);
}
