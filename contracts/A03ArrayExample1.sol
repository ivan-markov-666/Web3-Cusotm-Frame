/**
 *  Description: This class shows how to work with arrays in Solidity.
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
contract A03ArrayExample1 {
    //04. Declares array.
    uint[] public array; // Declare dynamic array.
    
    //05. Define a constructor.
    constructor() { // Create a new instance of the contract.
        array.push(1); // We can add new value to the array with "push()" method.
        array.push(2);
        array.push(23);
    }

    //06. Define different functions that will be members of this contract here.
    function getWholeArray() public view returns (uint[] memory) {
        return array; // Return the all array values.
    }

    function getArrayLength() public view returns (uint) {
        return array.length; // We can get the length of the array by calling the "length" property.
    }

    function getFirstElement() public view returns (uint) {
        return array[0]; // We can get the first value of the array with "[{integer argument}]".
    }
}