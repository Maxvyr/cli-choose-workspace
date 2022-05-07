#!/usr/bin/env node

import { fileExist, checkAllfile } from './lib/file.js'
import { clear } from './lib/clear.js';
import chalk from 'chalk';
import figlet from 'figlet';


clear();

console.log(
    chalk.yellow(
        figlet.textSync('Choose Your Modules', { horizontalLayout: 'full' })
    )
);

if (fileExist('modules.code-workspace')) {
    checkAllfile();
} else {
    console.log(chalk.red('Code Workspaces not found!'));
    process.exit();
}