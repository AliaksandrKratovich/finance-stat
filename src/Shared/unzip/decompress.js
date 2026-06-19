import * as zip from '@zip.js/zip.js';

export const decompress = async (
    file,
) => {
    const reader = new zip.ZipReader(
        new zip.BlobReader(file)
    );

    const entries = await reader.getEntries();

    await reader.close();

    return entries.find(entry => entry.filename === 'MyFinance.db');
};