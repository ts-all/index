export function truthify(obj: Record<string, any>, opt?: { zero?: boolean; array?: boolean }): void {
    for (const key in obj) {
        if (Reflect.has(obj, key)) {
            const ele = obj[key];
            if (ele === undefined || ele === null) {
                delete obj[key];
            }
            else if (typeof ele === 'object') {
                if (Array.isArray(ele)) {
                    if (opt?.array && ele.length === 0) {
                        delete obj[key];
                    } else {
                        ele.forEach(e => truthify(e, opt));
                    }
                } else {
                    truthify(ele, opt);
                }
            } else if (typeof ele === 'string' && !ele) {
                delete obj[key];
            } else if (typeof ele === 'number' && opt?.zero && ele === 0) {
                delete obj[key];
            }
        }
    }
}
