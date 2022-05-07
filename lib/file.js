import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer';

export const fileExist = (filePath) => {
    return fs.existsSync(filePath);
};

export const checkAllfile = () => {
    fs.readdir('./', (err, files) => {
        if (err) throw err;
        selectedFiles(files);
    });
}

const selectedFiles = (filelist) => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'selection',
            message: 'Select folders you work for this ticket:',
            choices: filelist,
        }
    ]).then((answer) => {
        openAndWriteResult(answer.selection);
    });
};

const openAndWriteResult = (list) => {
    console.log("list", list);
    let resStart = `{"folders": [`;
    let resEnd = `]}`;
    let resMiddle = ``;
    for (const el of list) {
        resMiddle = resMiddle + `{
            "path": "${el}"
        },`;
    };


    let res = resStart + resMiddle + resEnd;

    fs.writeFileSync('modules.code-workspace', res, (err) => {
        if (err) throw err;
    });
}