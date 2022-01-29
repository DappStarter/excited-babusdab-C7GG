require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth maze clump install open blue shine'; 
let testAccounts = [
"0x47d93bf4cc5244f013028a64029af533b51bab0e0e54e1ba29c421244598d301",
"0x7a32eb0b6ae57c26ebae15a0075ac006c7e74d826f9a3478758cd3ddaa6e3f58",
"0xb79a81ab888eb1ee0265cbbe8da1efe3797a3351b16a4a6046c12f65c4fe6ed3",
"0xb587dc8e23a46fdffef52c725d433e5a4deaec0c1307e28eb53da8d5bdca1dc3",
"0xbec941427eb00332861330ab56e9fedd5983ddaf9a975cdc8a14adf0bad08e34",
"0x2b2821b0591a3ff5d1044f1842c41d5423ad608bc62cda28314c6a868a082b04",
"0x551e28ab47d720bfa6e39ad66010798ec1675b3bc113539cc31d78b7eb36f488",
"0xcb7cd24b63911d99190604df43c8113a6d519f71e618ad49e4e3b5d0d958daf4",
"0xc15b773f4c53f21d2195c869423081fca6cfb223c92b97379ad666f73bb72301",
"0x991654a688cd0f63c9f88f94aebc0aa804722b60ee47c8109fa93f84939d27ad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

