const { base58_to_binary } = require('base58-js');
const GuardaCosmoPrivateKey = 'InsertYourExportedCosmosPrivateKeyFromGuardaHere';
const bin = base58_to_binary(GuardaCosmoPrivateKey);
// console.log(bin);
let strChar = '';
bin.forEach(element => {
   let tC = element.toString(16).toUpperCase();
   if(tC.length == 1) {
    tC = '0' + tC;
   }
   strChar = strChar + tC;
});
const KeplrCosmosPrivateKey = strChar.substring(2, 66);
console.log("Your Cosmos Private Key is:");
console.log(KeplrCosmosPrivateKey);