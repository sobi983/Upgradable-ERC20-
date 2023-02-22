const { ethers, upgrades} = require("hardhat");

const proxy = "0x702d1D3d6D03C60a6B58280eB410C1a590f9136E"

const main = async ()=>{

const ERC20Upgradable = await ethers.getContractFactory("AURAv2")
await upgrades.upgradeProxy(proxy, ERC20Upgradable)

}


main()