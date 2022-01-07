const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ownable", function () {

  beforeEach(async function(){
    [this.martin,this.juana] = await ethers.getSigner();
    this.Ownable = await ethers.getContractFactory("Ownable");
    this.ownable = await Greeter.deploy("Hello, world!");
    await ownable.deployed();

  });
  it("Tenga owner", async function () {
    const owner = await this.ownable.owner();
    expect(owner).to.not.be(undefined);
  });
});
  /* it("Tenga owner", async function () {
    const owner = await this.ownable.owner();
    expect(owner).to.not.be(undefined);
  }); */
  /*     expect(await greeter.greet()).to.equal("Hello, world!");
  
      const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
  
      // wait until the transaction is mined
      await setGreetingTx.wait();
  
      expect(await greeter.greet()).to.equal("Hola, mundo!");
    }); */