const { ethers, upgrades} = require("hardhat");

const main = async ()=>{

const ERC20 = await ethers.getContractFactory("AURA")
const erc20 = await upgrades.deployProxy(ERC20, ["sohaib", "S"],{
    initializer: "initialize"
})

await erc20.deployed()



}


main()