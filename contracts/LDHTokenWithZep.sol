pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";


contract LDHTokenWithZep is StandardToken, DetailedERC20 {
    constructor(string _name, string _symbol, uint8 _decimals){
        
    }
}
