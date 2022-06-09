/**
 * Description: This class shows a basic contract.
 */

//01. Provide the license.
// SPDX-License-Identifier: MIT.

//02. Provide the version of the solidity.
pragma solidity ^0.8.9;

//03. Define a new contract.
contract Inbox {
    //04. Declares all of the instance variables (including their types) that will exist in the contract.
    string public message;

    //05. Define different functions that will be members of this contract here.
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string calldata newMessage) public {
        message = newMessage;
    }
}
