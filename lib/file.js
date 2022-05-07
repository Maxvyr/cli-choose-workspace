// const fs = require('fs');
// const path = require('path');
import fs from 'fs'
import path from 'path'

export const getCurrentDirectoryBase = () => {
    return path.basename(process.cwd());
};

export const fileExist = (filePath) => {
    return fs.existsSync(filePath);
};