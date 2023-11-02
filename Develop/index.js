// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const { error } = require("console");
// const { generateKey } = require("crypto");
const genMardow = require('./utils/generateMarkdown')
// ref this code
const {unlink} = require('node:fs');

// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message:'What is the Project Name?',
    name:'nam'
},
{
    type:'input',
    message:'Please write a breife description of the project',
    name: 'des'
},
{
    type:'input',
    message:'What was your motivation?',
    name: 'mot'
},
{
    type:'input',
    message:'Why did you build this project?',
    name: 'res'
},
{
    type:'input',
    message:'What problem does it solve?',
    name:'sol'
},
{
    type:'input',
    message:'What did you learn?',
    name: 'les'
},
{
    type:'input',
    message:'Please provide instructions for installation',
    name: 'install'
},
{
    type:'input',
    message:'Please provide instructions and examples for use?',
    name: 'instruct'
},
{
    type:'input',
    message:'List your collaborators (example: Sichoun N. Lee, https://github.com/DDXP3)',
    name:'proNam'
},
{
    type:'input',
    message:'Please write a breife description of the project',
    name: 'cre'
},
{
    type:'list',
    message:'select your licence',
    name: 'lic',
    choices: [
        "None",
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License"
    ]
},
{
    type:'input',
    message:'Please provide this application features',
    name: 'fea'
},
{
    type:'input',
    message:'Please tell how people can contribute',
    name: 'con'
},
{
    type:'input',
    message:'Please provide your application tests',
    name:'tes'
},
{
    type:'input',
    message:'What is your email?',
    name:'que'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("Success"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        //make a ref to this unlink
        unlink('../Develop/README.md', (err) => {
            err ? console.error(err) : console.log('Terminanted');
        })
        writeToFile('../Develop/README.md', genMardow(responses));
    })
}

// Function call to initialize app
init();

// inquirer.prompt(questions).then(responses => {
//     const {nam, des, mot, res, sol, les, install, instruct, cre, lic, fea, con, tes, que} = responses;
//     fs.writeFile("README.md", (
//         `
//         #${nam}

//         ## Description

//         ${des}
//          - ${mot}
//          - ${res}
//          - ${sol}
//          - ${les}

//         ## Table of Contents

//          - Installation
//          - Usage
//          - Credits
//          - License
//          - Badges
//          - Features
//          - How to Contribute
//          - Tests

//         ## Installation
        
//         ${install}

//         ## Usage

//         ${instruct}

//         ## Credits

//         ${cre}

//         ## License

//         ${lic}

//         ## Badges

//         ## Features

//         ${fea}

//         ## How to Contribute

//         ${con}

//         ## Tests

//         ${tes}

//         ## Questions

//         ${que}

//         `
//     ), 
//     (error) => {if (error) 
//         console.log("ERROR")
//     })
// })