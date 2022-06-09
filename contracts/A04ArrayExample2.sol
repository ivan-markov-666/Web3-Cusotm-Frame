/**
 *  Description: This class shows a specific problem by working with nested dynamic arrays. Some IDEs will not be able to execute this class, because communication (the bridge) between Solidity and JavaScript has a limitation. 
 * 
 *      Array Reference Types in Solidity:
 *      fixed aaray     -   Array that contains a single type of element. Has an unchanging length. Examples: int[3] -> [1,2,3] ; bool[2] -> [true, false]
 *      dynamic array   -   Array that contains a single type of element. Can change in size over time. Examples: int[] -> [1,2,3] ; bool[] -> [true, false]
 */
 
//01. Provide the license.
// SPDX-License-Identifier: MIT.

//02. Provide the version of the solidity.
pragma solidity ^0.8.9;

//03. Define a new contract.
contract A04ArrayExample2 {
    //04. Declares array.
    string[] public array; // Declare dynamic array.
    
    //05. Define a constructor.
    constructor() { // Create a new instance of the contract.
        array.push("Test that feature!"); // We can add new value to the array with "push()" method.
    }

    //06. Define different functions that will be members of this contract here.
    function getWholeArray() public view returns (string[] memory) {
        return array; // Return the all array values.
    }
}