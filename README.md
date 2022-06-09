# Introduction 
This project is a custom Web3 frame using the Mocha testing frame.  
The framework supports JS and Solidity languages.  

# Precondition
* You need to know how to write code on Solidity, so make sure that you read the documentation located here: https://docs.soliditylang.org/en/v0.8.9/. We are using the 0.8.9 version - so read the documentation for that version.  
* You need to know how to write code on JavaScript, so make sure that you read the documentation located here: https://www.javascript.com/.  
* Because we are using the Mocha testing framework - it will be good to cover this documentation too: https://mochajs.org/.  
* We are using node.js, so it will be good to have a basic knowledge of it: https://nodejs.org/en/.  
* This is a Web3 frame, so you need to read the documentation for it: https://web3js.readthedocs.io/.  
* You need to know what is MetaMask and how to use it: https://infura.io.  
* Review https://infura.io because we use this system to connect to the testing network where the contracts are deployed.  
For any questions, refer to the original documentation. This framework doesn't have anything unique. It uses technologies that are combined with working together. For any questions about the technologies, refer to their official documentation.  

# Getting Started
Please follow the steps to set up the project:  
### Installation process
1. Clone the repository.  
2. If you don't have Node.js - download and install it: https://nodejs.org/en/.  
3. Open the project from your IDE.  
4. Navigate to the project root folder from the terminal.  
5. Get all dependencies:  

> npm install  

    5.1. If you are using Windows, make sure you have installed windows-build-tools: https://www.microsoft.com/en-us/download/details.aspx?id=48159. 
    
6. Open the "config.js" class.  
7. Create an account at https://infura.io.  
    7.1. Create a new project for the "Ethereum" product.  
    7.2. Use "RINKEBY" endpoints for testing purposes.  
8. Add the "mnemonic phase" as a string. The "mnemonic phase" is 12 words. If you don't have one, you can create a MetaMask account (MetaMask is a Chrome addon - https://metamask.io). After making the account, you will get the mnemonic phase (Secret Recovery Phrase).  
    8.1. Change MetaMask network to Rinkeby (because this is the test network you will need to use to develop a new "sol" file and test them with test classes).  
9. Send testing ETH from https://faucets.chain.link/rinkeby to your MetaMask account (the ETH will be sent to the Rinkeby network because this is only testing ETH).  
10. Read the readme.rd file to understand how to use the framework.  
11. Enjoy and use the framework with pleasure!  

### Software dependencies
The dependency will be downloaded automatically by NodeJS.  
Solc@0.8.9 is a package used for the SOL compiler: https://www.npmjs.com/package/solc.  
Mocha is a testing framework we are using to test the "SOL" functions: https://www.npmjs.com/package/mocha.  
Ganache is an Ethereum simulator that makes developing Ethereum applications faster, easier, and safer: https://www.npmjs. com/package/ganache. You may need to install windows-build-tools manually.  
Web3 is the Ethereum JavaScript API used to develop Web3 projects: https://www.npmjs.com/package/web3.  
@truffle/hdwallet-provider enabled Web3 provider. It is used to sign transactions for addresses derived from 12 or 24 word mnemonic phases: https://www.npmjs.com/package/@truffle/hdwallet-provider.  
Express is a Fast, unopinionated, minimalist web framework for NodeJS. We are using it for supporting config files: https://www.npmjs.com/package/express.  

# Build and Test
To use the frame, you must be familiar with all technologies mentioned in the precondition section.  
1. You can add new contracts in the "contracts" folder. The contracts must be placed in the "sol" classes and written in Solidity language. Review the comments in the example classes in the "contracts" folder for more details.  
2. When the contract is ready - it should be compiled first. You can add a new "js" class to the frame's root folder. For more details, review the comments in the example compiled classes.  
3. When compile class is ready, you need to deploy the contract. To do this, you can add a new "js" class in the frame's root. For more details, review the comments in the example deployed classes.  
4. Finally, you can write tests using the Mocha testing frame. The tests need to be placed in the "test" folder. Review the comments in the example classes set in the "test" folder for more details.  

# What this framework contains
Because this is a custom framework - the following section shows what was added to the frame and how it can be used.  
If you have questions about the technologies, refer to the official documentation.  

### Configuration:
This frame has a "config.js" class. Read the "config.js" is based on the "express" package. Read the official documentation for more details: https://expressjs.com/.  

### Commands:
Because working with NodeJS and Mocha is related to executing different commands inside the terminal, we collect them in the "./commands/commands.txt" file.  

# Contribute
You can use the framework for free and make changes to it. I hope the frame will save configuration time and develop the custom commands.
