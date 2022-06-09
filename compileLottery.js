/**
 * @description         This class compiles the contract (class located in the "contracts" folder).
 */

//01. Call library modules.
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//02. Declares constants that we will be using.
const contractsFolder = 'contracts';
const constractFileName = 'Lottery';
const contractExtension = '.sol';
const contract = constractFileName + contractExtension;
const inboxPath = path.resolve(__dirname, contractsFolder, contract);
const source = fs.readFileSync(inboxPath, 'utf8');

//03. Add the expected JSON formatted input, specifying the language, sources, and outputSelection.
const input = {
  language: 'Solidity',
  sources: {
    [contract]: {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[contract].Lottery;
// Uncomment next line of code to view the structure.
// console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts);