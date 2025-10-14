/* eslint-disable no-redeclare */
export async function selectFile(accept?: string): Promise<File | null>;
export async function selectFile(accept: string, multiple: true): Promise<Array<File> | null>;
export async function selectFile(accept?: string, multiple?: true): Promise<File | Array<File> | null> {
    if (!(document as Document | undefined)) { return null; }
    const fileSelector: HTMLInputElement = document.createElement('input');
    fileSelector.id = `ts-all-file-selector-${Date.now()}`;
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', multiple ? 'true' : 'false');
    fileSelector.setAttribute('accept', accept || '*');

    return new Promise<File | Array<File> | null>(resolve => {
        fileSelector.addEventListener('error', () => {
            resolve(null);
        });

        fileSelector.addEventListener('cancel', () => {
            resolve(null);
        });

        fileSelector.addEventListener('change', () => {
            if (fileSelector.files == null) {
                resolve(null);
                return;
            }
            const fileList: Array<File> = [...fileSelector.files];
            if (fileList.length < 1) {
                resolve(null);
                return;
            }
            if (multiple) {
                resolve(fileList);
            } else {
                resolve(fileList[0] || null);
            }
        });

        fileSelector.click();
    }).finally(() => {
        fileSelector.remove();
    });
}
