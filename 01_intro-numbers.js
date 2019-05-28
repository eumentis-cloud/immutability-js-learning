/*
    Variable assignment in Javascript - NUMBERS
 */
const chalk = require('chalk');

console.log(chalk.whiteBright.bold.underline('\n\nNUMBERS\n\n'));

let a = 1;

let b = a;

console.log(chalk.white('Initial values: '));
console.log(chalk.green(`a = ${a}`));
console.log(chalk.blue(`b = ${b}`));

// Changing b
b = 2;

console.log(chalk.yellow.bold('\nSetting: b = 2'));

console.log('\nAfter updating b: ');
console.log(chalk.green(`a = ${a}`));
console.log(chalk.blue(`b = ${b}`));
console.log('\n');