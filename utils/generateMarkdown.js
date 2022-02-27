const Choices = require("inquirer/lib/objects/choices");

function generatorMarkdown(data) {
 return`# ${data.Title}
https://github.com/${data.Username}/${data.Title}
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
If you have any questions about the repo, open an issue or contact ${data.Phone} or ${data.Email}.
`
}



module.exports = generatorMarkdown;