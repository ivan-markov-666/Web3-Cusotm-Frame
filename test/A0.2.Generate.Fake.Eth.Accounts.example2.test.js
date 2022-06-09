/**
 * @description         This class shows how to generate fake eth accounts using async-wait.
 */

//01. Call library modules.
const ganache = require('ganache'); // Declare a ganache library module. This is local test network, that we will use for testing purposes.
const Web3 = require('web3'); // Declare a web3 library module with constructor.

//02. Create an instances.
const web3 = new Web3(ganache.provider()); // Declare an instance for Web3 including ganache.

//03. Create a local variable.
let accounts; // Declare variable for accounts.

//04. Declare the "beforeEach" function. This function will be executed before every "it" test.
beforeEach(async () => {
    // Get a list of all accounts.
    accounts = await web3.eth.getAccounts(); // Assign the accounts to variable.
});

//05. Create a test suite using "describe" function.
describe('Generate fake eth accounts example 1 using async-await', () => {
    //06. Add tests using "it" function.
    it('A0.2. Example 2', (done) => { // We need to add "done" argument in the arrow function.
        console.log(accounts); // Print the accounts.
        done(); // We need to call the done method, because Mocha need this function to do async - await.
        // The done method is only used for testing callback-based or event-based code. You shouldn't use it to test Promise-based or async/await functions.  
    });
});