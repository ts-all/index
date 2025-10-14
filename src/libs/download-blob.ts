export function downloadBlob(blob: Blob, downloadName?: string): void {
    const downAnchor: HTMLAnchorElement = document.createElement('a');
    downAnchor.id = `ts-all-download-anchor-${Date.now()}`;
    downAnchor.download = downloadName ?? '';
    downAnchor.href = window.URL.createObjectURL(blob);
    downAnchor.click();
    downAnchor.remove();
    window.URL.revokeObjectURL(downAnchor.href);
}
