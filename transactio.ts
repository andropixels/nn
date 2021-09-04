import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
import {createNameRegistry,signAndSendTransactionInstructions} from "@solana/spl-name-service"
import { newAccountWithLamports } from "./lamport";
// import *as crypto from "ebics-client"
const crypto = require('crypto');
import { convertPublicKey, convertSecretKey } from 'ed2curve-esm';
// import {crypto-js} from "@types/crypto-js";
// import { encryptCEKForDID } from "solarium";

// import  {encrypt} from "./encryotion.ts"
// const CryptoJS = require("crypto-js");

// const fs = require('fs')

// const publicKey = fs.readFileSync(absolutePath, 'utf8')

 

export function check(){




var wallet = web3.Keypair.generate();
const publickey=  wallet.publicKey;
const privatekey = wallet.secretKey;
// console.log(`${publickey }  wallet public kry`);
// console.log(`${privatekey }  wallet private kry`);


 const convertprivateKey  = convertSecretKey(privatekey);

// console.log(`${convertprivateKey} convert public key output`);
// const convertprivey=  convertPublicKey(privatekey);
// console.log(`${convertprivey} convert public key output`);
var toEncrypt= "hello world";
const buffer = Buffer.from(toEncrypt, 'utf8')
const encrypt = crypto.publicEncrypt({key: publickey}, buffer)

  
  e
  
  const encrypted = crypto.publicEncrypt(publickey, buffer)
  console.log(" encrypted value :")
  console.log( encrypted.toString('base64'));
  
  
  
    
  //  const toDecrypt =encrypted;
  
  // const buffer2 = Buffer.from(toDecrypt, 'base64')
  // const decrypted = CryptoJS.privateDecrypt(
  //   {
  //     key: privatekey.toString(),
  //     passphrase: '',
  //   },
  //   buffer,
  // )
  // console.log(" decrypted  value :");
  // console.log( decrypted.toString('utf8'))


  
}



// var encryptedAES = CryptoJS.AES.encrypt("data", "Pratik Saria");
//   console.log(typeof encryptedAES);

// var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "Pratik Saria");
// var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);

// await encrypt("rahul ", );
// Address: 9vpsmXhZYMpvhCKiVoX5U8b1iKpfwJaFpPEEXF7hRm9N
// const DEMO_WALLET_SECRET_KEY = new Uint8Array([
//     37, 21, 197, 185, 105, 201, 212, 148, 164, 108, 251, 159, 174, 252, 43, 246,
//     225, 156, 38, 203, 99, 42, 244, 73, 252, 143, 34, 239, 15, 222, 217, 91, 132,
//     167, 105, 60, 17, 211, 120, 243, 197, 99, 113, 34, 76, 127, 190, 18, 91, 246,
//     121, 93, 189, 55, 165, 129, 196, 104, 25, 157, 209, 168, 165, 149,
//   ]);
   

   export async function transfer (){


// Connect to cluster
var connection = new web3.Connection(web3.clusterApiUrl("devnet"));

var newsigner = await newAccountWithLamports(connection,1000000000)
var payer= await newAccountWithLamports(connection, 1000000000);
var toWallet = web3.Keypair.generate();
// Construct my token class
var myMint = new web3.PublicKey("Au8Axri4xiWyHwjpPpvfE2fwp4oY8ZjTULXz3rkTRJ4S");
var myToken = new splToken.Token(
  connection,
  myMint,
  splToken.TOKEN_PROGRAM_ID,
  payer
);
// Create associated token accounts for my token if they don't exist yet
var fromTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
  newsigner.publicKey
)
var toTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
  toWallet.publicKey
)
// Add token transfer instructions to transaction


// var transaction = new web3.Transaction()
//   .add(
//     splToken.Token.createTransferInstruction(
//       splToken.TOKEN_PROGRAM_ID,
//       fromTokenAccount.address,
//       toTokenAccount.address,
//       newsigner.publicKey,
//       [],
//       0
//     )
//   );


  // var encryptedAES = CryptoJS.AES.encrypt("Hello World", "Pratik Saria");
  // var encrypterd = 
  //  var _ciphertext = CryptoJS.AES.decrypt(encryptedAES.toString(), "Pratik Saria");
  //  console.log(_ciphertext.toString(CryptoJS.Utf8));

   
      // transaction.add(await memoprogram.wriiteutf8(newsigner.publicKey,encryptedAES.toString()));
      //  console.log(`memo added  ${newsigner.publicKey}`);

// Sign transaction, broadcast, and confirm
// var signature = await web3.sendAndConfirmTransaction(
//   connection,
//   // transaction,
//   [newsigner]
// );
// console.log("SIGNATURE",signature);
// return signature;

const amount = 100000;
const transaction = new web3.Transaction();
transaction.add(
  web3.SystemProgram.transfer({
    fromPubkey: payer.publicKey,
    toPubkey: toWallet.publicKey,
    lamports: amount,
  }),
);
let testAccountOwner: web3.Account;
let testAccount: web3.PublicKey;
let testMintAuthority: web3.Account;
// let NFT_OWNER_ACCOUNT:PublicKey;
const myNFT = new  web3.PublicKey("6dDcmortzjzAQcDudmFKPMe6TL6En4knJYATqrGNqH4Q")

   const NFT = new splToken.Token(connection,myNFT,splToken.TOKEN_PROGRAM_ID,payer);//NFT TOKEN FROM ITS MINT
  //  NFT_OWNER_ACCOUNT = new PublicKey("FySLEAhi2jayVk4SiVAaCu14fd2ypLbPC4q7TEGEQmYx");

   testAccountOwner = new web3.Account();
   testMintAuthority = new web3.Account();
   testAccount = await NFT.createAccount(testAccountOwner.publicKey);
    
 

      

       const destination = new web3.PublicKey("8QqnVgc78vFCd5cLXA5eJnKwyTKb6QhHQSZEqZt3CYZn");
      //  var sign =await NFT.transfer(NFT_OWNER_ACCOUNT, destination, NFT_OWNER_ACCOUNT, [], 1);

      //  console.log(`${sign } NFT  transfer`);
      //  transaction.addInstruction(
      //   MemoProgram.writeUtf8(feePayer.getPublicKey(),"Hello from SolanaJ :)")
      // );
      
// return sign;
console.log("SUCCESS");
}

  
  // Add instruction to write memo


    


export async function RetriveMemo (sig:web3.TransactionSignature) {
  var connection = new web3.Connection(web3.clusterApiUrl("devnet"));
  const res =await connection.getTransaction(sig);
  console.log("RES",res);
  // @ts-ignore: Object is possibly 'null'
  // console.log(res.meta.logMessages[6])
const memo =  res.meta.logMessages[6];
console.log(`${memo} memeo `);


return memo 
//   var decryptedBytes = CryptoJS.AES.decrypt(memo?.toString() , "Pratik Saria");
// var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);

// console.log(`${plaintext}   print `);

}

export async function TokenAccount (address:String) {
  var connection = new web3.Connection(web3.clusterApiUrl('devnet'))
  const key = new web3.PublicKey('498YdCwnQ9EPSQ76JEADbMEcAvczg2Bye382XfjP2SfM')
  const pubaddress = new web3.PublicKey(address)
  const res = await connection.getTokenAccountsByOwner(pubaddress,{mint:key})
  console.log("TOKENACCOUNT",res);
}

<<<<<<< HEAD
=======

export async function Test_Name_Service(){
  const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
  const keypair = new web3.Keypair()
  const address = keypair.publicKey;
  console.log("ADDRESS",address.toString());
  const secret = keypair.secretKey;
  const hashID = await connection.requestAirdrop(address, web3.LAMPORTS_PER_SOL)
    await connection.confirmTransaction(hashID);
  const payerKey = new web3.PublicKey('EbeourjESYjSB89KchMV3gozfgBBAyxKd1Zt5nkCwbJJ')
  const tx =await createNameRegistry(connection,"polkamusic",0,address,address)
  const signers = [
    {
      publicKey: address,
      secretKey:secret
    }
  ];

  const transact = new web3.Transaction().add(tx)
  console.log("Transaction",transact);
  const hash = await web3.sendAndConfirmTransaction(connection,
    transact,signers)
}


export function generate_keypair()
{
  const bStr = "PratikSaria123453256325145325633"
  var buf = Buffer.from(bStr, 'utf-8');
  console.log(buf.length);
  const keyPair = web3.Keypair.fromSeed(buf);
  console.log(keyPair.publicKey);
  console.log(keyPair.secretKey)
  console.log(buf);
}


>>>>>>> 1d77a5dff4a96ed42dde7da0778fa62118285b82
