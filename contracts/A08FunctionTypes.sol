/**
 * Description: This class shows usage of different function types.
 */

//01. Provide the license.
// SPDX-License-Identifier: MIT.

//02. Provide the version of the solidity.
pragma solidity ^0.8.9;

//03. Define a new contract.
contract A08FunctionTypes {
    //04. Define different functions that will be members of this contract here.

    // Anyone can call this function.
    function publicFunctionExample() public {}

    // Only this contract can call this function.
    function privateFunctionExample() private {}

    // Function will not modify or even read the contract's data.
    function pureFunctionExample() public pure returns (uint256 data) {
        uint256 a = 1; // local variable
        uint256 b = 2; // local variable
        data = a + b;
    }

    // This function returns data and does not modify the contract's data.
    function viewFunctionExample() public view returns (uint256) {
        uint256 blocknumber = block.number;
        return blocknumber;
    }

    // When someone calls this function - they might send eth along.
    function payableFunctionExample() public payable {
        // Some busyness logyc.
    }
}
