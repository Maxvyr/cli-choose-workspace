import inquirer from 'inquirer';

export const selectedFiles = (filelist) => {
  return inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selection',
      message: 'Select folders you work for this ticket:',
      choices: filelist,
    }
  ]).then((answer) => {
    console.log("Answer", answer.selection);
  });
};