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