// packages for using application
const fs = require('fs');
const inquirer = require('inquirer');

// function to initialize app
function init() {

  // Prompt user for input using inquirer to get read me details
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter the title of your project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for your project:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines for your project:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions for your project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ])
    .then((answers) => {
      // Generate README content using user inputted answers and project title
      const readmeContent = `# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For questions or inquiries, please contact me via GitHub or email:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;

      // Write README file
      fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md file has been generated successfully!');
      });
    })
    .catch((error) => {
      console.error(error);
    });

}

// Call the init() function to initialize the app
init();