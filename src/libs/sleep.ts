/** 😴 */
export async function sleep(milli: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milli);
    });
}
