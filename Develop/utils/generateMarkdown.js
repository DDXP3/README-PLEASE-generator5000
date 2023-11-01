// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
        if (license === "Apache 2.0 License"){
                return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]('+renderLicenseLink+')'
        } 
        else if (license === "Boost Software License 1.0"){
                return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]('+renderLicenseLink+')'
        }
        else if (license === "BSD 3-Clause License"){
                return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]('+renderLicenseLink+')'
        }
        else if (license === "BSD 2-Clause License"){
                return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]('+renderLicenseLink+')'
        }
        else {return ''}
        // let bad = "";

        // if (license != "None"){
        //         bad = "!["
        // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
        if (license === "Apache 2.0 License"){
                return 'https://opensource.org/licenses/Apache-2.0'
        }
        else if (license === "Boost Software License 1.0"){
                return 'https://www.boost.org/LICENSE_1_0.txt'
        }
        else if (license === "BSD 3-Clause License"){
                return 'https://opensource.org/licenses/BSD-3-Clause'
        }
        else if (license === "BSD 2-Clause License"){
                return 'https://opensource.org/licenses/BSD-2-Clause'
        }
        else {return ''}
        // let licLink;

        // switch(license)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
        return `
        ${license}
        `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.nam}
${renderLicenseBadge(data.lic)}

## Description

        ${data.des}
         - ${data.mot}
         - ${data.res}
         - ${data.sol}
         - ${data.les}

## Table of Contents

         - Installation
         - Usage
         - Credits
         - License
         - Badges
         - Features
         - How to Contribute
         - Tests

## Installation
        
        ${data.install}

## Usage

        ${data.instruct}

## Credits

        ${data.cre}

## License

        ${renderLicenseSection(data.lic)}

## Badges

        ${renderLicenseBadge(data.lic)}

## Features

        ${data.fea}

## How to Contribute

        ${data.con}

## Tests

        ${data.tes}

## Questions

        Contact Me @:
        ${data.que}
`;
}

module.exports = generateMarkdown;
