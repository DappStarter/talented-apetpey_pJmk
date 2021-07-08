require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain come grace phone bone video'; 
let testAccounts = [
"0x631b450fb7672b64a55c5d2b79cc19fcc1911510a186c809562b694fa7501c17",
"0x847cc522530e2e21192516c0df3722633d8b5f9196f25cf8c9aa6fe7222a840d",
"0x36d8dcb2e7597b30b3311ad3b60c708b7eb2027694df8f25457555b4dc97025a",
"0x0d18716ea44ab889bb75e27d93d859ce9e9ef0f4c9e63aca77492a77f6f4e2d7",
"0xcd6a5cb2003112e940cab148596121b72d021c112daedaccf6b3962b0c137916",
"0x2d618c055d61a001433a6385fda3dd5b848389b17079f6956b6c499a779671aa",
"0xe27cc241faf019a3b31ad8661f1c4fabd543a6ec358ae044bb3f4e61c514a621",
"0xf81c36cbfd7c6441fb3236e4db80fa1c04951659087f9ebadebb246e80c4d47a",
"0x364224eaec88169ebc07149bb1faf75050436b81c6c38905f5f82e9f2f2dceda",
"0xf2c44d051a8dc9680432693c3d75553e033a2902ba45ab63d64328151922b337"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

