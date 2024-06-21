import fs from 'fs';
import path from 'path';

const ROOT_PATH = process.cwd();

export function fetchComponentSource(componentPath: string): string {
  const fullPath = path.join(ROOT_PATH, componentPath);
  return fs.readFileSync(fullPath, 'utf-8');
}
