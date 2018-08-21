const LDHTokenWithZep = artifacts.require("LDHTokenWithZep.sol");
const BigNumber = web3.BigNumber;

require("chai")
  .use(require("chai-bignumber")(BigNumber))
  .should();

contract("LDHTokenWithZep", account => {
  const _name = "LDHTokenWithZep";
  const _symbol = "LDHTWZ";
  const _decimals = 18;

  beforeEach(async () => {
    this.tokensssssss = await LDHTokenWithZep.new(_name, _symbol, _decimals);
  });

  describe("token attributes", () => {
    it("has name we describe :", async () => {
      const name = await this.tokensssssss.name();
      name.should.equal("LDHTokenWithZep");
    });
    it("has symbol we describe :", async () => {
      const symbol = await this.tokensssssss.symbol();
      symbol.should.equal(_symbol);
    });
    it("has decimal we describe :", async () => {
      const decimals = await this.tokensssssss.decimals();
      decimals.should.be.bignumber.equal(18);
    });
  });
});
