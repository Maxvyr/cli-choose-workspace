import fs from 'fs'
import path from 'path'
import { selectedFiles } from './inquirer_local.js';

export const getCurrentDirectoryBase = () => {
    return path.basename(process.cwd());
};

export const fileExist = (filePath) => {
    return fs.existsSync(filePath);
};

export const checkAllfile = () => {
    fs.readdir('./', (err, files) => {
        selectedFiles(files);
    });
}