/*
    Variable assignment in Javascript - STRINGS
 */
const chalk = require('chalk');
const util = require('util');
const lodash = require('lodash');

console.log(chalk.whiteBright.bold.underline('\n\nARRAYS\n'));

let a = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
console.log(chalk.green(`a = ${util.inspect(a, {colors:true, depth:null})}`));

let stepNo = 1;

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', () => {
  if (stepNo === 1) {
    console.log(chalk.yellow(`\nWe want to change the 'name' of object with id = 1`));
  }

  if (stepNo === 2) {
    // Changing b
    let b = a.map((entry) => {
      if (entry.id === 1) {
        return { ...entry, name: 'Z' };
      }
      return entry;
    });
    console.log(chalk.yellow.bold(`\n
    let b = a.map((entry) => {
      if (entry.id === 1) {
        return { ...entry, name: 'Z' };
      }
      return entry;
    });
    \n`));
    console.log(chalk.blue(`b = ${util.inspect(b, {colors:true, depth:null})}`));
  }

  if (stepNo === 3) {
    console.log(chalk.green(`\n\na = ${util.inspect(a, {colors:true, depth:null})}`));
    console.log('\n');
    process.exit();
  }

  stepNo++;
});