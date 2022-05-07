import { getCurrentDirectoryBase, fileExist } from './lib/file.js'
import { clear } from './lib/clear.js';
import chalk from 'chalk';
import figlet from 'figlet';


clear();

console.log(
    chalk.yellow(
        figlet.textSync('Choose Your Work Modules', { horizontalLayout: 'full' })
    )
);

if (fileExist('tengu-sensei.code-workspace')) {
    console.log(chalk.bgCyan('Start selection'));
} else {
    console.log(chalk.red('Code Workspaces not found!'));
    process.exit();
}