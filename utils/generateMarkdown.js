const Choices = require("inquirer/lib/objects/choices");

//Data that will be included in the README
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

Here is a link to view the repository from Github:
https://github.com/${data.Username}/${data.Title}

`


};



module.exports = generatorMarkdown;