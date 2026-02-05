/**
 * Simple deployment script for Hardhat or Truffle environments.
 * Focuses on deploying the SimpleNFT contract to a local or test network.
 */

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const NFT = await ethers.getContractFactory("SimpleNFT");
  const nft = await NFT.deploy();

  console.log("NFT Contract deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
