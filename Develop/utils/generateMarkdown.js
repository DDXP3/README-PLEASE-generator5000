// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.nam}

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

        ${data.lic}

## Badges

## Features

        ${data.fea}

## How to Contribute

        ${data.con}

## Tests

        ${data.tes}

## Questions

        ${data.que}
`;
}

module.exports = generateMarkdown;
