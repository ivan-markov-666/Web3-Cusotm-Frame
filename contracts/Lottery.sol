/**
 *  Description: This class shows a basic contract.
 *
 */

//01. Provide the license.
// SPDX-License-Identifier: MIT.

//02. Provide the version of the solidity.
pragma solidity ^0.8.9;

//03. Define a new contract.
contract Lottery {
    //04. Declares all of the instance variables (including their types) that will exist in the contract.
    address public manager; // Declare a "manager" variable from "adress" data type. This variable will be used to handle the person's address who created the contract.
    address[] public players; // Decplare a "players" and add all values into a dynamic array. This will be used to handle array of addresses of people who have entered.

    //05. Define a constructor.
    constructor() {
        // Create a new instance of the contract.
        // Describe who is creating the new contract and assgin the address to their account to the manager variable.
        // This is possible by creating a global variable.
        manager = msg.sender;
    }

    //06. Define different functions that will be members of this contract here.
    function enter() public payable {
        // "require()" function is used for validation. We can pass in some boolean expressions to this required function.
        // When someone is trying to enter into that function, we need to ensure that he will send along at least 0.001 eth.
        require(msg.value > .01 ether);

        // Create a new function that will enters a player into the lottery. When we create a function that expects to receive eth, we have to mark the function as "patable".
        // Adding a new entry into the array by pushing a new record in. Then we get access to the person's address who is sending a transaction to this function. This is possible by calling the global variable "msg" and referencing the sender to it.
        players.push(msg.sender);
    }

    // Generate random number with function. We need this function to randomlly pick a winner from the "players" array.
    function generateRandomNumber() private view returns (uint256) {
        // Return the integer value.
        return
            uint256( // We need to convert the hash value from "keccak256()" to integer, that why we are putting all into the "uint256()" function.
                keccak256( // We need to reference the global "keccak256" algorithm. This returns hash value.
                    abi.encodePacked( // We need to pass sources inside the "keccak256" and because we will provide more than one souece we need to group them into the "encodePacked".
                        block.difficulty, // The difficulty will be a number that indicates how challenging it will be to seal or solve the current block.
                        block.timestamp, // Pass the current time using global variable.
                        players // Pass araay of players.
                    )
                )
            );
    }

    // This function will pick a winner.
    function chooseWinner() public onlyManagerCanRunThatFunction {
        uint256 index = generateRandomNumber() % players.length; // Select a winner.
        payable(players[index]).transfer(address(this).balance); // Send all balance to the address of the player that won. This will return to us address.
        players = new address[](0); // Create a new dynamic array from type "address" and add initial size of "0". Empty list of players. Get ready for the next round.
    }

    // This function returns all of the different players who have entered. We need to do this because it will be much easier to write a Web app that can quickly tell us exactly who is entered and how many people have entered.
    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    //06. Declare a function modifier.
    // This modifier will be used to guarantee that the function can be run only by the manager.
    modifier onlyManagerCanRunThatFunction() {
        require(msg.sender == manager); // Make sure that nobody can pick the winner except for the person who created the contract (manager).
        _;
    }
}
