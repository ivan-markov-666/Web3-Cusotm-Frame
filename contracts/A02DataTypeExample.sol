/**
 *  Description: This class shows different data types in Solidity.
 * 
 *      Data types in Solidity:
 *      string          -   Sequence of characters. Examples: "Example text" ; "It's not a bug it's a feature!"
 *      bool            -   Boolean value. Examples: true ; false
 *      int             -   Integer, positive or negative values can be assigned. No decimal support! Examples: 0 ; -30000 ; 59158
 *      uint            -   "Unsigned" integer can be an ONLY positive number. No decimal support! Examples: 0 ; 30000 ; 912319
 *      fixed / ufixed -   "Fixed" point number. Number with a decimal after it. Examples: 3.14, -12.5676, 12.001
 *      address         -   Has methods tied to it for sending money. Examples: 0x532c4fee8a6caee7df198d38242bbef33874a958
 */
 
//01. Provide the license.
// SPDX-License-Identifier: MIT.

//02. Provide the version of the solidity.
pragma solidity ^0.8.9;

//03. Define a new contract.
contract A02DataTypeExample {
    //04. Declares all of the instance variables (including their types) that will exist in the contract.
    string private message = 'some text message'; // Example shows how to use "string" data type.
    bool private trueOrFalse = true; // Example shows how to use "bool" data type.
    int private intNumber = -1000; // Example shows how to use "int" data type.
    uint private uintNumber = 1000; // Example shows how to use "uint" data type.
    fixed private floatingNumber = 3.14; // Example shows how to use "fixed" data type.
    ufixed private floatingNumber2 = 12.2444; // Example shows how to use "ufixed" data type.
    address public someone; // Example shows how to use "address" data type.
}