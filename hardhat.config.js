require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
require("@openzeppelin/hardhat-upgrades")
require("@nomiclabs/hardhat-ethers")
require('dotenv').config();


module.exports = {
  defaultNetwork: "testnet",
  networks: {
    hardhat: {
    },

    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`]
    },
    binance: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545"
    }
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan : {
    apiKey : process.env.BNBSCANAPI
  },
}