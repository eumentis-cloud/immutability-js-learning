/*
    Variable assignment in Javascript - STRINGS
 */
const chalk = require('chalk');
const util = require('util');

console.log(chalk.whiteBright.bold.underline('\n\nOBJECTS\n'));

let a = { x: { x1: 11, x2: 12 }, y: 2 };
console.log(chalk.green(`a = ${util.inspect(a, {colors:true, depth:null})}`));

// let b = { ...a };
let b = Object.assign({}, a);

let stepNo = 1;

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', () => {
  if (stepNo === 1) {
    console.log(chalk.yellow.bold(`\nlet b = { ...a };\nOR\nlet b = Object.assign({}, a);\n`));

    console.log(chalk.blue(`b = ${util.inspect(b, {colors:true, depth:null})}`));
  }

  if (stepNo === 2) {
    // Changing b
    b.x.x1 = 99;
    console.log(chalk.yellow.bold(`\nb.x.x1 = 99;\n`));
    console.log(chalk.blue(`b = ${util.inspect(b, {colors:true, depth:null})}`));
  }

  if (stepNo === 3) {
    console.log(chalk.green(`\n\na = ${util.inspect(a, {colors:true, depth:null})}`));
    console.log('\n');
    process.exit();
  }

  stepNo++;
});