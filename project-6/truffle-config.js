
const SEPOLIA_URL =
  "https://sepolia.infura.io/v3/" + process.env.INFURA_PROJECT_ID;
console.log(SEPOLIA_URL)

const HDWallet = require("truffle-hdwallet-provider");
// const infuraKey = "fj4jll3k.....";
//
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    sepolia: {
      provider: function () {
        return new HDWallet(mnemonic, SEPOLIA_URL);
      },
      gas: 8000000, // adjust the gas limit as needed
      gasPrice: 20000000000, // set your gas price
      networkCheckTimeout: 100000,
      network_id: "*" // Match any network ID
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12" // Fetch exact version from solc-bin
    }
  }
};