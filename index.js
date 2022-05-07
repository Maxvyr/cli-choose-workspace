#!/usr/bin/env node

import { getCurrentDirectoryBase, fileExist, checkAllfile } from './lib/file.js'
import { clear } from './lib/clear.js';
import chalk from 'chalk';
import figlet from 'figlet';
import { selectedFiles } from './lib/inquirer_local.js';


clear();

console.log(
    chalk.yellow(
        figlet.textSync('Choose Your Modules', { horizontalLayout: 'full' })
    )
);

if (fileExist('tengu-sensei.code-workspace')) {
    checkAllfile();
} else {
    console.log(chalk.red('Code Workspaces not found!'));
    process.exit();
}