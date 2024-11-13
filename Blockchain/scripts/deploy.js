// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const IdentityRegistry = await hre.ethers.getContractFactory("IdentityRegistry");
  const identityRegistry = await IdentityRegistry.deploy();

  await identityRegistry.waitForDeployment();

  console.log("IdentityRegistry deployed to:", identityRegistry.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });