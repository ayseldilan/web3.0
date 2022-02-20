require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6IEBgXSlqRFAbv69_gfCywqBWcUigRjA',
      accounts: ['af6bdc692bb0c8b00d4eca6c4931565b602a1dcbf662a8bbdb44f67cc089cedd'],
    },
  },
};