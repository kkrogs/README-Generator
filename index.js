// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your project.',

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
// Once the questions are passed, it will handle a promise, in which case a .then is needed
    inquirer.prompt(questions)
    .then((answers) => { 
        console.log(answers)
        // Use user feedback for... whatever!!
      })
      .catch((error) => {
        if (error) { console.log(error)
          // Prompt couldn't be rendered in the current environment
        } 
      });

};

// Function call to initialize app
init();
