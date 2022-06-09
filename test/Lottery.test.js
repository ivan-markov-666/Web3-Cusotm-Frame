/**
 * @description         This class shows tests for Lottery.sol.
 */

//01. Call library modules.
const assert = require('assert'); // Declare an assertion library module.
const ganache = require('ganache'); // Declare a ganache library module. This is local test network, that we will use for testing purposes.
const Web3 = require('web3'); // Declare a web3 library module with constructor.

//02. Create an instances.
const web3 = new Web3(ganache.provider()); // Declare an instance for Web3 including ganache.

//03. Create an interface.
const { abi, evm } = require('../compileLottery'); // Next, we can require in our interface, which is the ABI of our contract and the bytecode, which is the raw compiled contract from our compile file.

//04. Create a local variable.
let accounts; // This variable will hold a list of all accounts that are automatically generated.
let lottery; // This variable will hold our instance of our contract.

//05. Declare the "beforeEach" function. This function will be executed before every "it" test.
beforeEach(async () => {
    // Get a list of all accounts.
    accounts = await web3.eth.getAccounts(); // Assign the accounts to variable.
    // Use one of those accounts to deploy the contract and provide (in the new contract) the ABI.
    lottery = await new web3.eth.Contract(abi)
        // The deploy statement should contain the contracts bytecode and any initial arguments that we want to pass to the contract.
        // The arguments should be an array that contains all initial arguments for the contract. This will be the initial value (the initial message) that we want to publish inside the inbox contract.
        .deploy({ data: evm.bytecode.object })
        // Finally, we should send the transaction to the network.
        // Specify in which accounts this will be deployed.
        // Specify some initial gas that will be used..
        .send({ from: accounts[0], gas: '1000000' });
});

//06. Create a test suite using "describe" function.
describe('Lottery Contract', () => {
    //07. Add tests using "it" function.
    it('Verify that the contract is deployed.', () => {
        // The "ok" method is an assertion that verifies the value inside the method - exists (is this a defined value?).
        assert.ok(lottery.options.address); // We verify that the contract was deployed with this test (that the contract has an address). 
    });

    // Verify that, when the "enter()" function is executed - the address gets added to the player's array.
    it('Allows only one account to enter.', async () => {

        await lottery.methods.enter().send({ // Call the function that we are testing.
            from: accounts[0], // Pick the first account from the accounts array.
            value: web3.utils.toWei('0.02', 'ether') // Account send a minimum amount of 0.02 eth.
        });

        const players = await lottery.methods.getPlayers().call({ // Call the function that we are testing.
            from: accounts[0] // Pick the first account from the accounts array.
        })

        assert.equal(accounts[0], players[0]); // Assert that the first account from the accounts array is the first account from the players array.
        assert.equal(1, players.length); // Assert that there is only one account in the players array.
    });

    it('Allows multiple accounts to enter.', async () => {

        await lottery.methods.enter().send({ // Call the function that we are testing.
            from: accounts[0], // Pick the first account from the accounts array.
            value: web3.utils.toWei('0.02', 'ether') // Account send a minimum amount of 0.02 eth.
        });

        await lottery.methods.enter().send({ // Call the function that we are testing.
            from: accounts[1], // Pick the second account from the accounts array.
            value: web3.utils.toWei('0.02', 'ether') // Account send a minimum amount of 0.02 eth.
        });

        await lottery.methods.enter().send({ // Call the function that we are testing.
            from: accounts[2], // Pick the third account from the accounts array.
            value: web3.utils.toWei('0.02', 'ether') // Account send a minimum amount of 0.02 eth.
        });

        const players = await lottery.methods.getPlayers().call({ // Call the function that we are testing.
            from: accounts[0] // Pick the first account from the accounts array.
        })

        assert.equal(accounts[0], players[0]); // Assert that the first account from the accounts array is the first account from the players array.
        assert.equal(accounts[1], players[1]); // Assert that the second account from the accounts array is the second account from the players array.
        assert.equal(accounts[2], players[2]); // Assert that the third account from the accounts array is the third account from the players array.
        assert.equal(3, players.length); // Assert that there is three accounts in the players array.
    });

    // Verify that, the user pay's ether (verify that the gas mechanism is working as expected).
    it('Requires a minimum amount of enter to enter.', async () => {
        try {
            await lottery.methods.enter().send({ // Call the function that we are testing.
                from: accounts[0], // Pick the first account from the accounts array.
                value: 0 // Account send a minimum amount of 0 eth.
            });
            // If the try statement is executed without any error - that means the user doesn't pay any eth for executing the function. So we need to catch this as an error.
            assert(false);
        } catch (error) {
            // If the catch-statement is executed - that means the user pays eth for executing the function.
            assert(error);
        };
    });

    // Verify that, the manager pick a winner.
    it('Verify only the manager can call chooseWinner() function.', async () => {
        try {
            await lottery.methods.pickWinner().send({ // Call the function that we are testing.
                from: accounts[1] // Pick some random account that is not a manager.
            });
            // If the try statement is executed without any error - that means other user picks a winner. So we need to catch this as an error.
            assert(false);
        } catch (error) {
            // If the catch-statement is executed - that means the manager pick a winner.
            assert(error);
        };
    });

    // End-to-end test.
    // Verify that a player entered into the contract and then attempts to pick a winner.
    // Because the "chooseWinner()" function is random by nature we need we need to verify that only one player enter into the contract. By this verification we will be sure that only one player will be the winner, when we call "chooseWinner()" function.
    it('Verify that money ware send to the winner and the player\'s array was reset.', async () => {
        await lottery.methods.enter().send({ // Call the function that we are testing. 
            from: accounts[0], // Pick the first account from the accounts array.
            value: web3.utils.toWei('2', 'ether') // Account send a minimum amount of 2 eths.
        });

        // Figuring out who is going to win the contract.
        const initialBalance = await web3.eth.getBalance(accounts[0]); // Get the initial balance of account at zero or the amount of ether that this account controls.
        await lottery.methods.chooseWinner().send({ from: accounts[0] }); // Pick a winner to receive back the 2 eths that were sent.
        const finalBalance = await web3.eth.getBalance(accounts[0]); // Get the final balance of account.
        // Compare the difference between "initialBalance" and "finalBalance". The difference between "initialBalance" and "finalBalance" its not 2 eths, because it still costs gas to execute this operation. So the difference between "initialBalance" and "finalBalance" is less than 2 eths. 
        const difference = finalBalance - initialBalance; // Get the difference between "finalBalance" and "initialBalance".
        console.log(difference); // Print how was the difference between "finalBalance" and "initialBalance".

        // Assert that the difference is greater than we have.
        assert(difference > web3.utils.toWei('1.8', 'ether')); // We pick '1.8' because as we said - to execute the function costs gas and we need to make sure that the received eths are close to 2. 
    });
});