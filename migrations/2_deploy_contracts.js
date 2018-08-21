var LDHTokenWithZep = artifacts.require("./LDHTokenWithZep.sol");

module.exports = function(deployer) {
  var _name = "LDHTokenWithZep";
  var _symbol = "LDHTKZ";
  var _decimals = 18;
  deployer.deploy(LDHTokenWithZep, _name, _symbol, _decimals);
};
