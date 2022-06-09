/**
 * @description         This class is used to deploy the contract to not local (real) network.
 */

//01. Call library modules
const HDWalletProvider = require('@truffle/hdwallet-provider'); // Call "hdwallet-provider" from truffle.
const Web3 = require('web3'); // Call "web3" library.

//02. Create an interface.
const { abi, evm } = require('./compileLottery'); // Create an interface for compile class.
const config = require('./config'); // Create an interface for configuration class.

//03. Create a local variable.
const mnemonicPhase = config.mnemonic.phase; // Assign mnemonic phase from config.js class to a local variable.
const rinkebyApiUrl = config.network.rinkeby; // Assign rinkeby (testing network) URL from config.js class to a local variable.

//04. Create instances.
provider = new HDWalletProvider(
    // Add Metamask mnemonic (Secret Recovery Phrase) here.
    // Make sure that you added eth to this account. And because we are using testing (Rinkeby) network - you can add 0.1 ETH for testing purposes (in the testing network) from https://faucets.chain.link/ .
    mnemonicPhase,
    // Add URL where we want to connect.
    // This network should be get from "infura.io" system.
    // To use testing network, add URL for "RINKEBY" network.
    rinkebyApiUrl
);
const web3 = new Web3(provider); // Create an instance for web3.

//05. Create a functions.
const deploy = async () => {
    const accounts = await web3.eth.getAccounts(); // We get all accounts here because the mnemonic (Secret Recovery Phase) can be used to generate many accounts.
    console.log('Attempting to deploy from account', accounts[0]); // Show the first account that will be used.

    // Create a new contract and provide (in the new contract) the ABI.
    const result = await new web3.eth.Contract(abi)
        // The deploy statement should contain the contracts bytecode and any initial arguments that we want to pass to the contract.
        .deploy({ data: evm.bytecode.object })
        // Finally, we should send the transaction to the network.
        // Specify some initial gas that will be used.
        // Specify in which accounts this will be deployed.
        .send({ gas: '1000000', from: accounts[0] });

    // Show an address where the contract will be deployed on the ("RINKEBY" - testing) network.
    // If we don't record that address, it is unclear where this contract will be deployed. It will be deployed somewhere, but we don't know where it was deployed. We will print this information to see where the contact will be deployed.
    console.log('Contract deployed to', result.options.address);

    // This code will prevent a hanging deployment.
    provider.engine.stop();
};

//06. Execute functions.
// Execute the "deploy()" function.
deploy();