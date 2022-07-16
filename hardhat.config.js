// const fs = require('fs');
// // eslint-disable-next-line import/no-extraneous-dependencies
// require('@nomiclabs/hardhat-waffle');

// const privatekey = fs.readFileSync('.secret').toString().trim();

// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },

//   },
//   solidity: '0.8.4',
// };

require('@nomiclabs/hardhat-waffle');

module.exports = {
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/U3iiPIsSHCWuVkjBQODZQFlLFaaZ_QHu',
      accounts: ['34dcd36d7af393c3d32d1a1667dcdaeea1f624517c1a4a72300e088c93530eb2'],
    },

  },
  solidity: '0.8.4',
};
