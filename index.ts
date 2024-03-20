#! /usr/bin/env node

import inquirer from "inquirer";


let answer = await inquirer.prompt([{ 
    message: "Enter first Number", type: "number", name: "firstnumber",
},
{
    message: "Enter second Number", type: "number", name: "secondnumber",
},
{
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
},]);

// conditonal statements

if (answer.operator === "Addition") {
    console.log("Your answer is",answer.firstnumber + answer.secondnumber);
    
} else if (answer.operator === "Subtraction") {
    console.log("Your answer is",answer.firstnumber - answer.secondnumber);
    
} else if (answer.operator === "Multiplication") {
    console.log("Your answer is",answer.firstnumber * answer.secondnumber);
    
} else if (answer.operator === "Division") {
    console.log("Your answer is",answer.firstnumber / answer.secondnumber);
    
} else {
    console.log("please select valid operator");
    
};