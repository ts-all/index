export async function blobToDataUrl(blob: Blob): Promise<string | null> {
    return new Promise<string | null>(resolve => {
        const reader: FileReader = new FileReader();
        reader.onload = () => {
            const { result } = reader;
            resolve(typeof result == 'string' ? result : null);
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
    });
}
