// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project?',
    }, {
        type: 'input',
        name: 'Description',
        message: 'What is the project about?Please give a detailed description',
    }, {
        type: 'input',
        name: 'Installation',
        message: 'What does the user need to install on the app?',
    }, {
        type: 'input',
        name: 'Usage',
        message: 'How is the app used? Give instructions',
    }, {
        type: 'list',
        name: 'License',
        message: 'What license is being used?',
        choices: [
          'Apache license 2.0',
          'GNU General Public License v3.0',
          'MIT License',
          'Boost Software License 1.0',
          'ISC',
          'Mozilla Public License 2.0',
        ]
    }, {
        type: 'input',
        name: 'Contributors',
        message: 'Who contributed to the project?',
    }, {
      type: 'input',
      name: 'Tests',
      message: 'What commands are needed to test this app?',
    }, {
      type: 'input',
      name: 'Phone',
      message: 'What is your phone number for recruiters to contact you at?',
    }, {
      type: 'input',
      name: 'Username',
      message: 'What is your Github Username?',
    }, {
      type: 'input',
      name: 'Email',
      message: 'What is your e-mail address?',
},


];

//function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, function(err) {
console.log(fileName)
console.log(data)

if (err) {
return console.log(err)

} else {
console.log('success')

}
})

};

//creates licenses based on choices

if (condition) {
  
};

//function call to initialize program
function init() {
inquirer.prompt(questions)
.then(function(data) {
  writeToFile('README.md', generatorMarkdown(data));
  console.log(data)
})

};


//function to call initialize program
init();