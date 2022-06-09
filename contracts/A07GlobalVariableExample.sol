/**
 *  Description: This class shows how to use "Global Variables".
 *
 *      The global varialbes can be call with keyword "msg". Global variable - means that we don't need to do any kind of declaration to use it.
 *      msg.data     -   "Data" field from the call or transaction that invoked the current function. This property is used to present any transaction.
 *      msg.gas      -   Amount of gas the current function invocation has available. We can figure how much gas we have available to run some code. We can make sure that we can run our code with the amount of available gas. But remember that this global variable is used very rarely because usually, we assume that an appropriate amount of gas has been sent along with the transaction with any function.
 *      msg.sender   -   Address of the account that started the current function invocation. This is the person's address or the account that just sent in a transaction or a call to the network. Any function inside the contract can access this property.
 *      msg.value    -   Amount of ether (in wei) that was sent along with the function invocation. 
 */
 
//01. Provide the license.
// SPDX-License-Identifier: MIT.

//02. Provide the version of the solidity.
pragma solidity ^0.8.9;

//03. Define a new contract.
contract A07GlobalVariableExample {
    //04. Declares all of the instance variables (including their types) that will exist in the contract.
    address public senderVariable; // Declare a "manager" variable from "adress" data type. This variable will be used to handle the person's address who created the contract.

    //05. Define a constructor.
    constructor() { // Create a new instance of the contract.
        // Describe who is creating the new contract and assgin the address to their account to the manager variable.
        // This is possible by creating a global variable.
        senderVariable = msg.sender;
    }
}