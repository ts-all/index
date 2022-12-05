/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment */

function isPlainObject(input: any): input is Record<string, any> {
    return input && typeof input === 'object' && !Array.isArray(input);
}

function clone<T>(input: T): T {
    if (Array.isArray(input)) {
        const output: Array<any> = new Array<any>();
        for (const element of input) {
            output.push(clone(element));
        }
        return output as T;
    }
    if (isPlainObject(input)) {
        const output: Record<string, any> = {};
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                output[key] = clone(input[key]);
            }
        }
        return output as T;
    }
    return input;
}

function recursiveMergeFun(base: any, extend: any): any {
    if (!isPlainObject(base) || !isPlainObject(extend)) {
        return extend;
    }
    for (const key in extend) {
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') { continue; }
        base[key] = (isPlainObject(base[key]) && isPlainObject(extend[key]))
            ? recursiveMergeFun(base[key], extend[key])
            : extend[key];
    }
    return base;
}

function mergeFun(isClone: boolean, isRecursive: boolean, items: Array<any>): any {
    let result: Record<string, any> = items.shift();
    if (isClone || !isPlainObject(result)) {
        result = {};
    }

    for (const item of items) {
        if (!isPlainObject(item)) { continue; }

        for (const key in item) {
            if (key === '__proto__' || key === 'constructor' || key === 'prototype') { continue; }
            const value: any = isClone ? clone(item[key]) : item[key];
            result[key] = isRecursive ? recursiveMergeFun(result[key], value) : value;
        }
    }

    return result;
}

export function merge(isClone: boolean, ...items: Array<any>): any;
export function merge(...items: Array<any>): any;
export function merge(...items: Array<any>): any {
    return mergeFun(items[0] === true, false, items);
}

export function recursive(isClone: boolean, ...items: Array<any>): any;
export function recursive(...items: Array<any>): any;
export function recursive(...items: Array<any>): any {
    return mergeFun(items[0] === true, true, items);
}
