/**
 * @description         This class shows how to generate fake eth accounts.
 */

//01. Call library modules.
const ganache = require('ganache'); // Declare a ganache library module. This is local test network, that we will use for testing purposes.
const Web3 = require('web3'); // Declare a web3 library module with constructor.

//02. Create an instances.
const web3 = new Web3(ganache.provider()); // Declare an instance for Web3 including ganache.

//03. Declare the "beforeEach" function. This function will be executed before every "it" test.
beforeEach(() => {
    // Get a list of all accounts.
    web3.eth.getAccounts()
        .then(fetchedAccounts => { // Get an access to all of the accounts. We use then, because "getAccounts()" function is returning a promise.
            console.log(fetchedAccounts);
        });
});

//04. Create a test suite using "describe" function.
describe('Generate fake eth accounts example 1', () => {
    //05. Add tests using "it" function.
    it('A0.1. example 1', () => {
    });
});