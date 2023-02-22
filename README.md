# To run this project:-
1.npm install
2.npx hardhat run --network testnet scripts/deploy_ERC20.js
3.npx hardhat verify --network testnet [Address]
4.npx hardhat run --network testnet scripts/deploy_ERC20Upgradable.js
5.npx hardhat verify --network testnet [Address]


# Few points should be noted before development of the contract
1. Once an ERC20 contract is deployed then there is no way it could be UPGRADED.
2. It could only be upgraded while you are deploying the very first contract.

I am using OpenZeppelin Upgrdable Proxy approach to make my ERC20 contract Upgradable.


# https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#upgrade-proxy
Transparent Upgradable Proxy:- https://testnet.bscscan.com/address/0x702d1d3d6d03c60a6b58280eb410c1a590f9136e#writeProxyContract
Proxy Admin:- https://testnet.bscscan.com/address/0x9d69aa383b4a23e4e3d9e04d5e55230e8a5f8f9b#writeContract
ERC20:- https://testnet.bscscan.com/address/0x506a8985c3c60206ff53eb9fdc9795327b8504c6#readContract
ERC20Upgradable:- https://testnet.bscscan.com/address/0x7c67535ff98cd05af46f38b2a79a0a58f182856b#code


