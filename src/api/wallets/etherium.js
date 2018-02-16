// import Web3 from 'Web3';
const Web3 = require('web3')

const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('https://api.myetherapi.com/eth'));

const getBalance = address => web3.eth.getBalance(address)//.toNumber();

getBalance(process.env.ETH_ADD).then(console.dir).catch(console.dir)


