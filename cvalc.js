#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let z = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: chalk.bgWhite("please select one of the following operation"),
    choices: ["+", "-", "*", "/"],
});
let x = await inquirer.prompt([{
        name: "first",
        type: "input",
        message: chalk.red("please enter the firs number")
    }, {
        name: "second",
        type: "input",
        message: chalk.red("enter the second number")
    }]);
x.first = +x.first;
x.second = +x.second;
let res = 0;
if (z.operation == '+')
    res = x.first + x.second;
else if (z.operation == '/')
    res = x.first / x.second;
else if (z.operation === '*')
    res = x.first * x.second;
else if (z.operation === '-')
    res = x.first - x.second;
console.log(res);
