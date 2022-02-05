// function to pull license badge
const renderLicenseBadge = license => {
    if (license === 'Apache License 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU General Public License v3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'MIT License') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else {
        return '';
    }
}
// function to pull link to license information
const renderLicenseLink = license => {
    if (license === 'Apache License 2.0') {
        return 'https://www.apache.org/licenses/LICENSE-2.0';
    } else if (license === 'GNU General Public License v3.0') {
        return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    } else if (license === 'MIT License') {
        return 'https://choosealicense.com/licenses/mit/';
    } else {
        return '';
    }
}
//function to render license section of readme
const renderLicenseSection = license => {
    if (license === 'None') {
        return '';
    }
    return `
## License
This application is covered under: ${license}, [License Link](${renderLicenseLink(license)})
`;

}
// function to render entire readme page.
module.exports = data => {
    return `
# ${data.name} ${renderLicenseBadge(data.license)}

## About the Project:
    
${data.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation:
    
${data.install}
    
## Usage Information:
    
${data.usage} 
${renderLicenseSection(data.license)}
    
## Features:
    
If your project has a lot of features, list them here.
    
## How to Contribute:
    
${data.contribution}
    
## Tests:
    
${data.test}
    
## Questions?
    
Contact me via [Github](https://github.com/${data.username}) or Email: <${data.email}>
`;

}