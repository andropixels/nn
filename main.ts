import {
    // createVerifiedTwitterRegistry,
    // getTwitterRegistryKey,
    // getTwitterRegistry,
    // createVerifiedTwitterRegistry,
    // getHandleAndRegistryKey,
    // TWITTER_VERIFICATION_AUTHORITY,
    // getTwitterRegistryData,
    // // getTwitterHandleandRegistryKeyViaFilters

}from './index'

 import { transfer,RetriveMemo,TokenAccount, check  } from './transactio';

import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram } from '@solana/web3.js'
import { tokenTransfer } from './tokentransfer';
import { call, changeTwitterRegistryData, createnameRegistry, getRegistry, getTwitterRegistryData, transfeOwnerr } from './NameRegistry';
import { web3 } from '@project-serum/anchor';

const verifiedPubkey = new PublicKey("FySLEAhi2jayVk4SiVAaCu14fd2ypLbPC4q7TEGEQmYx");

let connection = new Connection ("https://api.devnet.solana.com", "confirmed");
async function main (){
  // const sig = await transfer()
  // RetriveMemo(sig)
      // await transfer()

      // await tokenTransfer()
      // var txnsign = await transfer();
      // await RetriveMemo(txnsign);

// 
const admin= new  web3.PublicKey("9hqKqtbMewhbGQuT4FZqKAiYSt7DdtNznwcfL2pZ495P");

      await createnameRegistry()
      let child ="gan  ";
      const rootparent  ="GSHHQ1oGMRWYgZNnHX7m1Aqj5zEEwhjiAryB1TabPqa7";
      // const testownerkey = new web3.PublicKey("8UKKq7ocdAqcxb8xkCQt936riNogVgQckFk7Xii4pY6a");
   
    // console.log(`${json}`);
const verified = new web3.PublicKey("9vpsmXhZYMpvhCKiVoX5U8b1iKpfwJaFpPEEXF7hRm9N");
let bufferOne = Buffer.from('This r example.');

      // await call()
  
  // const regdata=  await getTwitterRegistryData(connection);
  // console.log(`${rjsj}  we are putting data with register `);

  const ROOT_PARENT  = new web3.PublicKey("He8545XmsuPabXzk3VkrRQdXdCVsgMsauKAXyZtvGWz4");
  const newOwner = web3.Keypair.generate();
  const currentOwner = new web3.PublicKey("8UKKq7ocdAqcxb8xkCQt936riNogVgQckFk7Xii4pY6a");
  //  await transfeOwnerr(child,ROOT_PARENT,newOwner,currentOwner);
  // TokenAccount('8QqnVgc78vFCd5cLXA5eJnKwyTKb6QhHQSZEqZt3CYZn')
 
}

main();
