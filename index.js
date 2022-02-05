// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');
const writeFile = require('./utils/generateMarkdown');
// inquirer prompt to collect user data
const promptReadme = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the title of your project?',
                validate: projectInput => {
                    if (projectInput) {
                        return true;
                    } else {
                        console.log('You need to eneter a project name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of your project.',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('You must provide a description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: 'Provide installation instructions.',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    } else {
                        console.log('Please enter installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide usage instructions.',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please enter usage instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Provide ways to contribute to the project.',
                validate: contribInput => {
                    if (contribInput) {
                        return true;
                    } else {
                        console.log('Please enter contribution information!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Provide tests and examples on how to run the project.',
                validate: testInput => {
                    if (testInput) {
                        return true;
                    } else {
                        console.log('Please provide test examples');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license you would like to add.',
                choices: [
                    'Apache License 2.0',
                    'GNU General Public License v3.0',
                    'MIT License',
                    'None'
                ],
            },
            {
                type: 'input',
                name: 'username',
                message: 'Enter your GitHub username.',
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    } else {
                        console.log('Please enter your username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your contact email address.',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            }
        ])
        .then(readmeData => {
            return readmeData;
        })

}
// Function call to initialize app
promptReadme()
    .then(readmeData => {
        return generateReadme(readmeData);
    })
    .then(markDown => {
        return writeFile(markDown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });