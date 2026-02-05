# Simple NFT Minting Contract

This repository provides a clean, flat-structured Solidity smart contract for deploying an ERC-721 NFT collection. It focuses on readability and security, making it an ideal template for creators launching their first digital art collection.

## Features
- **ERC-721 Standard**: Fully compatible with marketplaces like OpenSea and Rarible.
- **Ownership Control**: Only the contract owner can mint new tokens or change the base URI.
- **Gas Optimized**: Streamlined logic to reduce deployment and transaction costs.
- **Flat Structure**: All necessary components are kept in the root directory.

## Technical Overview
The contract tracks ownership using a mapping of unique Token IDs to Ethereum addresses:
$$\text{ownerOf}(ID) \rightarrow \text{Address}$$

It also ensures that each $ID$ is unique and cannot be minted twice, satisfying the non-fungible property of the token.

## License
MIT
