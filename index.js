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
        name: 'Table of Contents',
        message: 'Table of Contents',
    }, {
        type: 'input',
        name: 'Installation',
        message: 'What does the user need to install on the app?',
    }, {
        type: 'input',
        name: 'Usage',
        message: 'How is the app used? Give instructions',
    }, {
        type: 'input',
        name: 'License',
        message: 'What license is being used?',
    }, {
        type: 'input',
        name: 'Contributing',
        message: 'Who contributed to the project?',
    }, {
      type: 'input',
      name: 'Tests',
      message: 'What commands are needed to test this app?',
    }, {
      type: 'input',
      name: 'Questions',
      message: 'Contact info for inquiries',
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