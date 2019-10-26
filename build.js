'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Matthew LaFalce'),
  location: chalk.white('           Point Pleasant NJ, USA'),
  handle: chalk.white('MatthewLaFalce'),
  work: chalk.white('Software Engineer at Innovative Computer Solutions'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~matthewlafalce'),
  github: chalk.gray('https://github.com/') + chalk.green('MatthewLaFalce'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('MatthewLaFalce'),
  web: chalk.cyan('https://matthewlafalce.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('matthewlafalce'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelDev: chalk.white.bold('       Blog:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const location = `${data.location}`
const professional = `${data.labelWork}  ${data.work}`
const npm = `${data.labelnpm}  ${data.npm}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const website = `${data.labelWeb}  ${data.web}`
const card = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + // data.name + data.handle
               location + newline +
               newline + // Add one whole blank line
               professional + newline + // data.labelWork + data.work
               npm + newline + // data.labelnpm + data.npm
               github + newline + // data.labelGitHub + data.github
               linkedin + newline + // data.labelLinkedIn + data.linkedin
               website + newline + newline + // data.labelWeb + data.web
               card // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
