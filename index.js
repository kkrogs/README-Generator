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
        message: 'What is the project about? Please give a detailed description',
    }, {
        type: 'input',
        name: 'Installation',
        message: 'What does the user need to install in order to run the application?',
    }, {
        type: 'input',
        name: 'Usage',
        message: 'How is the app used? Please give detailed instructions.',
    }, {
        type: 'list',
        name: 'License',
        message: 'What license is being used?',
        choices: [
          'Apache_2.0',
          'Unlicense',
          'MIT',
          'Boost_1.0',
          'ISC',
          'Perl',
        ]
    }, {
        type: 'input',
        name: 'Contributors',
        message: 'Who contributed to the project?',
    }, {
      type: 'input',
      name: 'Tests',
      message: 'What tests and commands are needed in order to test this application?',
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