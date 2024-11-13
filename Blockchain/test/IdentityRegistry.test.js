const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("IdentityRegistry", function () {
  let IdentityRegistry;
  let identityRegistry;
  let owner;
  let addr1;

  beforeEach(async function () {
    IdentityRegistry = await ethers.getContractFactory("IdentityRegistry");
    [owner, addr1] = await ethers.getSigners();
    identityRegistry = await IdentityRegistry.deploy();
    await identityRegistry.waitForDeployment(); // Atualização para ethers v6
  });

  it("Should register a new identity", async function () {
    await identityRegistry.registerIdentity("Alice", "alice@example.com", "123456789", "01/01/1990");

    const identity = await identityRegistry.getMyIdentity();

    expect(identity.name).to.equal("Alice");
    expect(identity.email).to.equal("alice@example.com");
    expect(identity.phoneNumber).to.equal("123456789");
    expect(identity.dateOfBirth).to.equal("01/01/1990");
  });

  it("Should not allow to register identity twice", async function () {
    await identityRegistry.registerIdentity("Alice", "alice@example.com", "123456789", "01/01/1990");

    await expect(
      identityRegistry.registerIdentity("Alice2", "alice2@example.com", "987654321", "02/02/1992")
    ).to.be.revertedWith("Identity already exists.");
  });

  it("Should update an existing identity", async function () {
    await identityRegistry.registerIdentity("Alice", "alice@example.com", "123456789", "01/01/1990");

    await identityRegistry.updateIdentity("Alice Updated", "alice_new@example.com", "555555555", "01/01/1990");

    const identity = await identityRegistry.getMyIdentity();

    expect(identity.name).to.equal("Alice Updated");
    expect(identity.email).to.equal("alice_new@example.com");
    expect(identity.phoneNumber).to.equal("555555555");
  });

  it("Should not allow updating non-existing identity", async function () {
    await expect(
      identityRegistry.updateIdentity("Bob", "bob@example.com", "111111111", "03/03/1993")
    ).to.be.revertedWith("Identity does not exist.");
  });

  it("Should retrieve identity of another user", async function () {
    await identityRegistry.connect(addr1).registerIdentity("Bob", "bob@example.com", "111111111", "03/03/1993");

    const identity = await identityRegistry.getIdentity(addr1.address);

    expect(identity.name).to.equal("Bob");
    expect(identity.email).to.equal("bob@example.com");
    expect(identity.phoneNumber).to.equal("111111111");
  });
});