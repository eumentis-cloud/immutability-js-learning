/*
    Variable assignment in Javascript - STRINGS
 */
const chalk = require('chalk');

console.log(chalk.whiteBright.bold.underline('\n\nSTRINGS\n\n'));

let a = 'A';

let b = a;

console.log(chalk.white('Initial values: '));
console.log(chalk.green(`a = ${a}`));
console.log(chalk.blue(`b = ${b}`));

// Changing b
b = 'B';
console.log(chalk.yellow.bold(`\nSetting: b = 'B'`));

console.log('\nAfter updating b: ');
console.log(chalk.green(`a = ${a}`));
console.log(chalk.blue(`b = ${b}`));
console.log('\n');