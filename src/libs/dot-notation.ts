/* eslint-disable @typescript-eslint/no-namespace,no-inner-declarations */
export namespace dotNotation {

    const propsBlackList: Set<string> = new Set(['__proto__', 'prototype', 'constructor']);

    function isObject(obj: unknown): boolean {
        if (typeof obj !== 'object') { return false; }
        if (Array.isArray(obj)) { return false; }
        return obj !== null;
    }

    function getPathSegments(path: string): Array<string> {
        const parts: Array<string> = path
            .split(/[.]|(?:\[(?<forArray>\d|\*)\])/u)
            .filter(item => Boolean(item));

        if (parts.some(i => propsBlackList.has(i))) {
            return [];
        }

        return parts;
    }

    function extractArrayValue(arr: Array<unknown>, key: string): Array<unknown> {
        return arr.map(item => {
            if (typeof item === 'undefined' || item === null) {
                return item;
            }
            return Array.isArray(item) ? extractArrayValue(item, key) : (item as Record<string, unknown>)[key];
        });
    }

    export function getPaths(obj: Record<string, unknown>, initPaths: Array<string> = new Array<string>()): Array<string> {
        if (!isObject(obj)) { return []; }

        let pathList: Array<string> = new Array<string>();

        for (const key in obj) {
            if (isObject(obj[key])) {
                initPaths.push(key);

                pathList = [...pathList, ...getPaths(obj[key] as Record<string, unknown>, initPaths)];

                initPaths.pop();
            } else {
                const keyPath: string = initPaths.length ? `${initPaths.join('.')}.${key}` : key;
                pathList.push(keyPath);
            }
        }

        return pathList;
    }

    export function get(obj: object, path: string): unknown {
        if (!isObject(obj) || typeof path !== 'string' || path.length < 1) {
            return undefined;
        }

        const segs: Array<string> = getPathSegments(path);

        if (!Array.isArray(segs) || segs.length < 1) {
            return undefined;
        }

        let currentValue: Record<string, unknown> = obj as Record<string, unknown>;

        for (const key of segs) {
            if (key == '*') {
                continue;
            }

            currentValue = (Array.isArray(currentValue) && !/^[0-9]+$/u.test(key) ? extractArrayValue(currentValue, key) : currentValue[key]) as Record<string, unknown>;

            if (typeof currentValue === 'undefined' || currentValue === null) {
                break;
            }
        }

        return currentValue;
    }

    export function set(obj: object, path: string, value: unknown): void {
        if (!isObject(obj) || typeof path !== 'string' || path.length < 1) {
            return;
        }

        const segs: Array<string> = getPathSegments(path);

        if (!Array.isArray(segs) || segs.length < 1) {
            return;
        }

        for (let i: number = 0; i < segs.length; i++) {
            const key: string = segs[i];

            if (i == segs.length - 1) {
                (obj as Record<string, unknown>)[key] = value;
                return;
            }

            if (key == '*' && Array.isArray(obj)) {
                const remaining: string = segs.slice(i + 1).join('.');

                for (const item of obj) {
                    set(item as object, remaining, value);
                }
                return;
            }

            if (typeof (obj as Record<string, unknown>)[key] === 'undefined') {
                (obj as Record<string, unknown>)[key] = {};
            }

            // eslint-disable-next-line no-param-reassign
            obj = (obj as Record<string, unknown>)[key] as object;
        }
    }

}
