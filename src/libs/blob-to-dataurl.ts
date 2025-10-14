export async function blobToDataUrl(blob: Blob): Promise<string | null> {
    return new Promise<string | null>(resolve => {
        const reader: FileReader = new FileReader();
        reader.onload = () => {
            const { result } = reader;
            if (typeof result == 'string') {
                resolve(result);
            } else {
                resolve(null);
            }
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
    });
}
