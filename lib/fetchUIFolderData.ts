import fs from 'fs';
import path from 'path';

const ROOT_PATH = process.cwd();
export const REGISTRY_UI_PATH = path.join(ROOT_PATH, 'registry/ui');

export function fetchUIFolderData(folderPath = REGISTRY_UI_PATH) {
  const filesData: { fileName: string, fileData: string }[] = [];

  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const fileName = file;

    const filePath = path.join(folderPath, file);

    const fileData = fs.readFileSync(filePath, 'utf8');

    return filesData.push({
      fileName: fileName,
      fileData: fileData,
    });
  });

  return JSON.stringify(filesData);
}
