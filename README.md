- The contract address: https://sepolia.etherscan.io/address/0x999d41c177b3b3ce0235e05a6fae8dfc950482ad
- If libraries were used, include why these libraries were adopted.
  - truffle-hdwallet-provider to deploy contract to sepolia
- If IPFS is used, include how IPFS is used in this project.
  - not used
- Program version numbers (This information will help your reviewer troubleshoot your project if any issues arise):
  - node version number: 16.20.2
  - Truffle version number: v5.11.5
  - web3 version number: (.min file is for frontend) v1.10.0
- Diagrams:
  - [Activity diagram](./project-6/uml-diagrams/activity-diagram.drawio)
  - [Class diagram](./project-6/uml-diagrams/class-diagram.drawio)
  - [Sequence diagram](./project-6/uml-diagrams/sequence-diagram.drawio)
  - [State diagram](./project-6/uml-diagrams/state-diagram.drawio)

# GUIDE TO RUN THE PROJECT:

## Running the front end

- Change directories into the project-6 folder
- In one terminal run truffle develop
- In metamask ensure you have a connection to truffles server on port 8545
- Import one of the private keys to setup metamask with an account that has eth
- In another terminal run npm run dev
- The local UI will display (if not navigate to localhost:3000)
- Now you can exercise the contract via the ui and try various operations.
