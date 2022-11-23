export function trimSlash(url: string, position: 'start' | 'end' | 'both' = 'both', trimTimesLimit: number = 3): string {
    if (typeof url != 'string') { return url; }

    if (!url) { return url; }

    let trimmedUrl: string = url;

    let startCount: number = 0;
    let endCount: number = 0;

    if (position == 'start' || position == 'both') {
        while (trimmedUrl.startsWith('/')) {
            if (startCount >= trimTimesLimit) {
                break;
            }
            trimmedUrl = trimmedUrl.substring(1);
            startCount += 1;
        }
    }

    if (position == 'end' || position == 'both') {
        while (trimmedUrl.endsWith('/')) {
            if (endCount >= trimTimesLimit) {
                break;
            }
            trimmedUrl = trimmedUrl.substring(0, trimmedUrl.length - 1);
            endCount += 1;
        }
    }

    return trimmedUrl;
}
