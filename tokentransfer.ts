import { PublicKey } from "@solana/web3.js";

var web3 = require('@solana/web3.js');
var splToken = require('@solana/spl-token');
import * as bip39 from 'bip39';
import nacl from 'tweetnacl';
import { memoprogram } from "./memo";
import { RetriveMemo } from "./transactio";
const NodeRsa= require("node-rsa");



const key = new NodeRsa({b:1024});
let secret ="scret";
var encryptedString= key.encrypt(secret, 'base64');

// var wallet = new web3.keyPair.generate()










export async function tokenTransfer(){
// Connect to cluster


const SENDER_SECRETKEY = new Uint8Array([
  219,199,92,212,40,116,100,188,60,34,102,255,71,58,121,109,195,217,193,0,251,210,175,130,6,219,118,159,67,186,142,81,197,208,76,117,128,73,87,225,88,17,10,78,13,214,226,24,92,61,102,164,185,206,17,69,203,12,65,147,146,27,0,19
  ]);

 const HOLDER_KEY = new Uint8Array([
  224,154,166,218,4,63,215,112,123,130,174,95,119,178,152,7,215,57,198,247,47,102,100,110,156,113,209,71,39,117,182,24,129,83,94,111,106,30,204,14,170,77,35,252,5,89,93,252,108,153,26,195,159,111,38,200,143,87,10,238,113,181,68,182
  ]);


// const REcivermnemonic ="produce affair stuff rubber practice door dilemma laugh corn junior ginger rack opera setup light address embody sausage aisle buzz coyote misery beach scale"

// const se = await bip39.mnemonicToSeed(mnemonic);
// const k = nacl.sign.keyPair.fromSeed(se.slice(0, 32));
// var sk=k.secretKey;
// console.log(`${sk}`);


// const senderMnemonic = " east mechanic despair wheel note alter blast deer sell cube pretty torch"

// const s = await bip39.mnemonicToSeed(senderMnemonic);
// const ke = nacl.sign.keyPair.fromSeed(s.slice(0, 32));
// var ske=ke.secretKey;
// console.log(`${ske}`);


var connection = new web3.Connection(
    "https://api.devnet.solana.com",
    'confirmed',
  );
  const myNFT = new  web3.PublicKey("AGRL6fxxDaYjHusgrdfeDnAZUfjX8Cq882Bzp4Z8dPyz");
  const NFT_OWNER_ACCOUNT = new PublicKey("FySLEAhi2jayVk4SiVAaCu14fd2ypLbPC4q7TEGEQmYx");
   const destination = new web3.PublicKey("8QqnVgc78vFCd5cLXA5eJnKwyTKb6QhHQSZEqZt3CYZn");
  // Generate a new wallet keypair and airdrop SOL
  // var fromWallet = web3.Keypair.generate();
  // var fromAirdropSignature = await connection.requestAirdrop(
  //   fromWallet.publicKey,
  //   web3.LAMPORTS_PER_SOL,
  // );

  //wait for airdrop confirmation




  // await connection.confirmTransaction(fromAirdropSignature);

  //create new token mint
//   let mint = await splToken.Token.createMint(
//     connection,
//     fromWallet,
//     fromWallet.publicKey,
//     null,
//     0,
//     splToken.TOKEN_PROGRAM_ID,
//   );
// console.log(`${(mint).toString()}  my NFT`);
  //get the token account of the fromWallet Solana address, if it does not exist, create it
//   let fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
//     fromWallet.publicKey,
//   );


    

   // Generate a new wallet to receive newly minted token
//    var toWallet = web3.Keypair.generate();

  //get the token account of the toWallet Solana address, if it does not exist, create it
//   var toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
//     toWallet.publicKey,
//   );


var fromWallet = web3.Keypair.fromSecretKey(HOLDER_KEY);///NFT HOLDER WALLET 
console.log(`${fromWallet.publicKey}`);
// await connection.requestAirdrop(fromWallet.publicKey, 1000000000);
// var toWallet = web3.Keypair.fromSecretKey(SENDER_SECRETKEY);//destinatiion wallet 
var toWallet = web3.Keypair.generate();
var myToken = new splToken.Token(
    connection,
    myNFT,
    splToken.TOKEN_PROGRAM_ID,
    fromWallet
  );
  // console.log(`${myToken.publicKey}`);


  var fromTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
    fromWallet.publicKey
  )

  // console.log(`${fromTokenAccount.address}`);

  var toTokenAccount = await myToken.getOrCreateAssociatedAccountInfo(
    toWallet.publicKey
  )
  console.log(`${toWallet.publicKey}`);
//  await connection.requestAirdrop(toTokenAccount.address,  1000000000);

//   const seed = await bip39.mnemonicToSeed(mnemonic);
//   const keyPair = nacl.sign.keyPair.fromSeed(seed.slice(0, 32));

  //minting 1 new token to the "fromTokenAccount" account we just returned/created
//   await mint.mintTo(
//     fromTokenAccount.address, //who it goes to
//     fromWallet.publicKey, // minting authority
//     [], // multisig
//     1, // how many
//   );

//   await mint.setAuthority(
//     mint.publicKey,
//     null,
//     "MintTokens",
//     fromWallet.publicKey,
//     []
//   )
// var Wallet = web3.Keypair.generate();
// await connection.requestAirdrop(fromTokenAccount.address,  1000000000);
  // Add token transfer instructions to transaction
// var t =await connection.getBalance(fromTokenAccount.address);
// var ts =await connection.getBalance(fromWallet.publicKey);

// console.log(`${fromWallet.publicKey}  sjcdhsbh`);
// console.log(`${t}`);

  var transaction = new web3.Transaction().add(
    splToken.Token.createTransferInstruction(
      splToken.TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      fromTokenAccount.address,
      fromWallet.publicKey,
      [],
      1,
    ),
  );
                                                                        
      transaction.add(await memoprogram.wriiteutf8(fromWallet.publicKey,"RSA:MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeuDfPaQCBWq6o9+SEr3Hy8rzUZ3l3Im6vcYMU6bp1VF/pOB+q5cd0RWZi/i/rBWIAnrDZ6OOCbLhMUmt0lvB9RmgnULTNtsg8jT2A2WC6B+9ScSPzoneQaWAf/qtB5rHDFz3fv5taGy00o4hY+c2kVRodRRtsvbKdynvdW9LnIQIDAQAB"));
     
        // 1024 bit 
       

    // console.log(`${}`)
  // Sign transaction, broadcast, and confirm
  // await connection.requestAirdrop(fromTokenAccount.address,  1000000000);

  var signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet],
   
  );
  console.log('SIGNATURE', signature);

  const res =await connection.getTransaction(signature.toString());
  console.log("RES",res);

  const memo =  res.meta.logMessages[6];
console.log(`${ memo} memeo `);

var strFirstThree = memo.substring(30,34);

// console.log(`${ strFirstThree} memeo `);

  // @ts-ignore: Object is po
  // var memo = await RetriveMemo(signature.toString());
  // console.log(memo.toString());

  // if(from ==send ){


  // }
  
  if(strFirstThree ==="RSA"){

     console.log(`yes`);
  }

// }
}

