const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'display once enrich six sausage rabbit sense evil toward kiwi category mountain',
  'https://rinkeby.infura.io/v3/299e2cf66cb941fa9d6c0789d0a6c7c1'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi There!']})
    .send({gas: 1000000, from: accounts[0]});
  console.log('deployed to ', result.options.address);
  provider.engine.stop();
};
deploy();
