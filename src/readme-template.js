// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}



module.exports = data => {
    return `
# ${data.name}

## Badges
    
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
## Description
    
${data.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${data.install}
    
## Usage
    
${data.usage}
    
## License
    
${data.license}
    
## Features
    
If your project has a lot of features, list them here.
    
## How to Contribute
    
${data.contribution}
    
## Tests
    
${data.test}
    
## Questions?
    
Contact me via [Github](https://github.com/${data.username}) or Email: <${data.email}>
`;

}