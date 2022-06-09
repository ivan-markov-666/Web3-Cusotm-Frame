/**
 * @description         This class shows tests for Inbox.sol.
 */

//01. Call library modules.
const assert = require('assert'); // Declare an assertion library module.
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
describe('Inbox', () => {
    //07. Add tests using "it" function.
    it('Verify that the contract is deployed.', () => {
        // The "ok" method is an assertion that verifies the value inside the method - exists (is this a defined value?).
        assert.ok(inbox.options.address); // We verify that the contract was deployed with this test (that the contract has an address). 
    });

    it('Verify that there is a default message.', async () => {
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, 'Testing Default Message');
    });

    it('Verify that the message can be changed.', async () => {
        // We need to test the "setMessage()" function.
        // We need to provide the string message inside the "setMessage()" function.
        // We need to specify where the transaction is coming from (who is issuing the transaction) using the method "send()".
        // We need to pass an object inside the "send()" method that describes who is paying (the gas) to modify the data inside the contract.
        // This message is coming from the array with accounts - and we provide the index of the first account from that array.
        // Because this is async 
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, 'bye');
    });
});