/**
 * @description         This class shows a basic test of testing if the contract was deployed.
 */

//01. Call library modules.
const ganache = require('ganache'); // Declare a ganache library module. This is local test network, that we will use for testing purposes.
const Web3 = require('web3'); // Declare a web3 library module with constructor.

//02. Create an instances.
const web3 = new Web3(ganache.provider()); // Declare an instance for Web3 including ganache.

//03. Create an interface.
const { abi, evm } = require('../compileInbox'); // Next, we can require in our interface, which is the ABI of our contract and the bytecode, which is the raw compiled contract from our compile file.

//04. Create a local variable.
let accounts; // This variable will hold a list of all accounts that are automatically generated.
let inbox; // This variable will hold our instance of our contract.

//05. Declare the "beforeEach" function. This function will be executed before every "it" test.
beforeEach(async () => {
    // Get a list of all accounts.
    accounts = await web3.eth.getAccounts(); // Assign the accounts to variable.
    // Use one of those accounts to deploy the contract and provide (in the new contract) the ABI.
    inbox = await new web3.eth.Contract(abi)
        // The deploy statement should contain the contracts bytecode and any initial arguments that we want to pass to the contract.
        // The arguments should be an array that contains all initial arguments for the contract. This will be the initial value (the initial message) that we want to publish inside the inbox contract.
        .deploy({ data: evm.bytecode.object, arguments: ['Testing Default Message'] })
        // Finally, we should send the transaction to the network.
        // Specify in which accounts this will be deployed.
        // Specify some initial gas that will be used..
        .send({ from: accounts[0], gas: '1000000' });
});

//06. Create a test suite using "describe" function.
describe('Deploy contract', () => {
    //07. Add tests using "it" function.
    it('A0.3. Example 1', (done) => { // We need to add "done" argument in the arrow function.
        console.log(inbox); // Print the accounts.
        done(); // We need to call the done method, because Mocha need this function to do async - await.
        // The done method is only used for testing callback-based or event-based code. You shouldn't use it to test Promise-based or async/await functions.  
    });
});