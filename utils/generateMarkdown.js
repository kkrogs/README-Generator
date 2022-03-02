const Choices = require("inquirer/lib/objects/choices");


// function getLicenseBadge(answers) {
//     console.log(answers)
//     let licenseBadge = "";
//     let licenseURL = "";
//       switch (answers.License) {
//     case 'MIT':
//           licenseBadge = '![badge](https://img.shields.io/badge/License--brightgreen)'
//         //   licenseURL = 'https://opensource.org/licenses/MIT' 
//     break;
//           case 'ISC':
//             licenseBadge = 'https://img.shields.io/badge/License-MIT-brightgreen'
//             // licenseURL = 'https://opensource.org/licenses/MIT' 
//     break;
          
//         };
//         console.log(licenseBadge)
//         return licenseBadge
//       };

function generatorMarkdown(data) { 
 return`# ${data.Title}
 ![badge](https://img.shields.io/badge/License-${data.License}-brightgreen)

# Description
${data.Description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application ${data.Installation}
# Usage
In order to use this app, ${data.Usage}
# License
This project is licensed under the ${data.License} license.


# Contributors
 ${data.Contributors}
# Tests
The following is needed to run the test: ${data.Tests}
# Questions
If you have any questions about the repository, feel free to contact me at ${data.Phone} or ${data.Email}.

Here is a link to view my project from Github:
https://github.com/${data.Username}/${data.Title}

`

// getLicenseBadge();

};



module.exports = generatorMarkdown;