//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Ownable {
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    modifier onlyOwner(){
        require(msg.sender == owner, "No es el Owner");
        _;
    }

    constructor(){
     owner = msg.sender;
    }

    function transferOwnership(address newOwner) onlyOwner public {
        address previousOwner = owner;
     owner = newOwner;
        emit OwnershipTransferred(previousOwner,newOwner);
    }
}