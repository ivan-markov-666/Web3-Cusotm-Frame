/**
 * Description: This class shows usage of function modifiers.
 */

//01. Provide the license.
// SPDX-License-Identifier: MIT.

//02. Provide the version of the solidity.
pragma solidity ^0.8.9;

//03. Define a new contract.
contract A09FunctionModifiers {
    //04. Declares all of the instance variables (including their types) that will exist in the contract
    uint256 a;
    uint256 b;
    uint256 result;

    //05. Define different functions that will be members of this contract here.
    // Function one.
    function calculateTwoIntegersFunction1() private sum {
        // We call the modifier with given name "sum".
        a = 10;
        b = 24;
    }

    // Function two.
    function calculateTwoIntegersFunction2() private sum {
        // We call the modifier with given name "sum".
        a = 0;
        b = 11;
    }

    //06. Declare a function modifier.
    modifier sum() {
        _; // This means that all code of the functions will be executed before the modifier logyc.
        result = a * b; // This code will be executed in every function that calls the modifier.
    }
}
