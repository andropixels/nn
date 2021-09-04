import * as Name from "@bonfida/spl-name-service"
import { createInstruction, getFilteredProgramAccounts, getHashedName, getNameAccountKey, NameRegistryState, NAME_PROGRAM_ID, Numberu32, Numberu64, updateInstruction } from "@bonfida/spl-name-service";
import state from "@project-serum/anchor/dist/program/namespace/state";
import * as web3 from "@solana/web3.js"
import { uint64 } from "@solana/web3.js/src/layout";
import {memoprogram } from  "./memo"
import { sleep } from "./sleep";
import { deserialize, deserializeUnchecked, Schema, serialize } from 'borsh';
const connection = new web3.Connection("https://api.devnet.solana.com", "confirmed");


const HOLDER_KEY = new Uint8Array([
    224,154,166,218,4,63,215,112,123,130,174,95,119,178,152,7,215,57,198,247,47,102,100,110,156,113,209,71,39,117,182,24,129,83,94,111,106,30,204,14,170,77,35,252,5,89,93,252,108,153,26,195,159,111,38,200,143,87,10,238,113,181,68,182
    ]);
    var DATA:object[] = [];
    // var listArray = new listArray();
// Address: 9vpsmXhZYMpvhCKiVoX5U8b1iKpfwJaFpPEEXF7hRm9N
const DEMO_WALLET_SECRET_KEY = new Uint8Array([
  37, 21, 197, 185, 105, 201, 212, 148, 164, 108, 251, 159, 174, 252, 43, 246,
  225, 156, 38, 203, 99, 42, 244, 73, 252, 143, 34, 239, 15, 222, 217, 91, 132,
  167, 105, 60, 17, 211, 120, 243, 197, 99, 113, 34, 76, 127, 190, 18, 91, 246,
  121, 93, 189, 55, 165, 129, 196, 104, 25, 157, 209, 168, 165, 149,
]);

    const  subdomainClass =  web3.Keypair.fromSecretKey(DEMO_WALLET_SECRET_KEY);
    const myWallet = web3.Keypair.fromSecretKey(HOLDER_KEY);
    
export  async  function createnameRegistry(){
 
////////////////////////////////////////////////////////////////////////////////
///////////Root 
console.log(`${NAME_PROGRAM_ID}   program id `);

     
    console.log(`${myWallet.publicKey} admin public key`);
     


//     const regdata=  await getTwitterRegistryData(connection,myWallet.publicKey);
// console.log(`${regdata} pleqase cisneh`);

const mywalley = web3.Keypair.generate();
const payer = web3.Keypair.generate();

var className = myWallet.publicKey; //
const rootName ="   final.name ";//xyz
// const rsaKey = "rsa key";
// const ipfsHash=" ipfshash ";
  var transaction =  new web3.Transaction()
    // var instruction =  await Name.createNameRegistry(connection, rootName, 1000,
    // myWallet.publicKey, myWallet.publicKey,
    // 10000000,
    // myWallet.publicKey,
    // undefined
    
    // )   //main domain .sol 

    // 
// transaction.add(instruction);
  


  

const RootHashName = await Name.getHashedName(rootName);
var check =RootHashName.toString('hex');
console.log(`${check} root name -hex value `);

// 9Pcd97xgKZ64V3CSaH49e1HcGUv5txPdC9QjUqYqgMXZ  9Pcd97xgKZ64V3CSaH49e1HcGUv5txPdC9QjUqYqgMXZ
  const ROOT_PARENT_REGISTRY_KEY = await Name.getNameAccountKey(RootHashName,className,undefined );
  const ROOT_VERIFICATIO_AUTORITY = myWallet.publicKey;
  
// xyz

  console.log(`${ROOT_PARENT_REGISTRY_KEY
  }   ROOT PARENT  FOR PUBKEY `);

  console.log(`${ROOT_VERIFICATIO_AUTORITY
  }   ROOT VERIFICATIO`);
  // var transaction =  new web3.Transaction()
  // var signature = await web3.sendAndConfirmTransaction(
  //   connection,
  //   transaction,
  //   [myWallet],
   
  // );
//xyz
// console.log(`${signature}`);

/////////////////////////////////////////////////////////////////////////////////////////////////

//child call 


// let child  = "rahul";//
// let child = "pratik";
// let child ="shenoy"
// let child ="polkamusic";
// let child =" rahul@punkmail.io";
// let child =" solana india ";
// let child ="sangeet";
// let child ="xhashtag";
// let child ="sdiidwoddvn";
// let child ="somone";

// let child ="Qmc8c9oSiLPp3Yn9w1StNnUCxgYaR5g4gPpVBfj1Nq3H ";
// let child ="Qmc8c9oSiLPp3Yn9w1StNnUCxgYaR5g4gPpVBfj1Nq3 ";
let child ="tgyiyhuijkbfiiredgfhdtjmis";

console.log(`${ subdomainClass }  store it `);
  // await connection.requestAirdrop(subdomainClass.publicKey, 1000000000);
 
if(subdomainClass.publicKey === null){

  console.log(`  not good` );
  
}else {
  console.log(`${subdomainClass.publicKey} owner verified  ` );
}
  

//   ///////////////////////////////////////////////
   //getting Name Account Key


 
    //  Name.getTwitterRegistry
  // console.log(`${childRegistryKey}   check me   `);
  await connection.requestAirdrop(subdomainClass.publicKey, 1000000000);
//create transactio 
await connection.requestAirdrop(myWallet.publicKey, 1000000000);

// for(let i =0 ;i<3;i++){

  
  
//   child+="Avfftfh";
// }
const hashechild = await getHashedName(child);
const childRegistryKey = await getNameAccountKey(
  hashechild,
  undefined,
   ROOT_PARENT_REGISTRY_KEY
);

let instructions = 
createInstruction(
  NAME_PROGRAM_ID,//
  web3.SystemProgram.programId,
  childRegistryKey,
  subdomainClass.publicKey,
  subdomainClass.publicKey,
  hashechild,
  
  new Numberu64(await connection.getMinimumBalanceForRentExemption(1000)),
  new Numberu32(1000),
  undefined,
  ROOT_PARENT_REGISTRY_KEY,//xyz
 ROOT_VERIFICATIO_AUTORITY//admin pubkey
);//pratik.sol 

// // pratikxyz
const childname  = await getHashedName(child);
// const childRegistryKey2 = await getNameAccountKey(
// childname,

// ROOT_PARENT_REGISTRY_KEY
// );
// const ntrans= new web3.Transaction();
// const transc= await   createReverseTwitterRegistry(
//  connection,
//  child,
//  childRegistryKey2,
//  subdomainClass.publicKey,
//  subdomainClass.publicKey,
//  ROOT_PARENT_REGISTRY_KEY,
//  ROOT_VERIFICATIO_AUTORITY,
//  ntrans
// );


//  shenoy.ipfs.spl    

console.log(`${subdomainClass.publicKey}  verified public keyv`);

await connection.requestAirdrop(subdomainClass.publicKey, 1000000000);

//create transactio 
await connection.requestAirdrop(myWallet.publicKey, 1000000000);
// transaction.add(instrucs)

// transaction.add(transc);
transaction.add(instructions)
var signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [myWallet,subdomainClass],
 
);



console.log(`${signature} created root sdsdhdhc  with child gan `);

let n:string='sdi';
//  for(let i =0;i<3;i++){
     
  // let reverseTwitterRegistryStateBuff = serialize(
  //   ReverseTwitterRegistryState.schema,
  //   new ReverseTwitterRegistryState({
  //     twitterRegistryKey: subdomainClass.publicKey.toBytes(),///spl + name 
  //     twitterHandle:child,
  //   })
  // );
  // DATA.push(reverseTwitterRegistryStateBuff);// store of spl + name 
  
  
  // console.log(`${  reverseTwitterRegistryStateBuff}`)
  let bufferOne = Buffer.from("DATA");
  
  await  changeTwitterRegistryData(child, subdomainClass.publicKey, 100, bufferOne,ROOT_PARENT_REGISTRY_KEY);
  
    // /await sleep(500 );
     console.log(`${DATA.length}`)
//  }


// console.log(`${DATA.length}  length `)
await sleep(500 );
const d= await getTwitterRegistryData(connection,subdomainClass.publicKey,ROOT_PARENT_REGISTRY_KEY);

console.log(`${d}  data we just update `)

      //  const wej=  await  getTwitterRegistryData(connection,subdomainClass.publicKey,ROOT_PARENT_REGISTRY_KEY);
                 
// console.log(`${wej}`);


// await sleep(500 );
// for( let i =0;i<DATA.length;i++){
    

//     console.log(`${DATA[i]}`);

// }
  

    //  const res =  await getRegistry(connection,child,ROOT_PARENT_REGISTRY_KEY);
 
    // let json = JSON.stringify(res.data);

    //  const data=  await getTwitterRegistryData(connection,subdomainClass.publicKey,ROOT_PARENT_REGISTRY_KEY);
    //  console.log(`${res.data}  `);
    //  for(let i= 0;i<res.data.length;i++){


    //         console.log(`${res.data[i]!!}`)
              

    //  }


  // Name.updateInstruction()


  // const an= await Name.NameRegistryState.retrieve(connection,ROOT_PARENT_REGISTRY_KEY);
  // console.log(`${an.data} edshjkxa`);




//////////////////////////////////////////////////////////////////////////////////////////////

// transsfer
    
          
//////////////////////////////////////////////
  

//////////////////////////////////////////////
// get registry key 



/////////////////////////////////////////////////

// const obj = new ReverseTwitterRegistryState(ROOT_PARENT_REGISTRY_KEY);






}


export async function transfeOwnerr(child:string,ROOT_PARENT_REGISTRY_KEY:web3.PublicKey,newOwner:web3.Keypair,currentOwner:web3.PublicKey) {
 
  // const newOwner = web3.Keypair.generate();
  var transaction =  new web3.Transaction();
  await connection.requestAirdrop(newOwner.publicKey, 1000000000);
  const childname  = await getHashedName(child);
  const childRegistryKey2 = await getNameAccountKey(
    childname,
    undefined,
     ROOT_PARENT_REGISTRY_KEY
  );
     console.log(`${childRegistryKey2}   check me   `);
  console.log(`  getNameAccountKey`);
// const transferOwnership = await  Name.transferNameOwnership(connection,child,newOwner.publicKey,subdomainClass.publicKey,ROOT_PARENT_REGISTRY_KEY);
const transferOwnership = await Name.transferInstruction(NAME_PROGRAM_ID,childRegistryKey2,
  newOwner.publicKey,
  currentOwner,
  undefined
  );

          transaction.add(transferOwnership);
          // console.log(`  lets see`);
var signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [newOwner],
 
); 
// console.log(`  what happende`);
console.log(`${signature}  ownership transfer `);
}
////////////////////////////////////////////
export async function call() {

 const tr=  await  getHandleAndRegistryKey(connection,subdomainClass.publicKey);
 console.log(`${tr}`);
  
}
export async function getRegistry(
  connection: web3.Connection,
  twitter_handle: string,
  ROOT_HANDLE:web3.PublicKey
): Promise<NameRegistryState> {
  // const ROOT_PARENT  = new web3.PublicKey("6BvocFUMJ947hFisrocx1zhpfBYz8fM3j3UmteJrdSDa");
  // const ROOT_AUTHORIITY = new web3.PublicKey("9hqKqtbMewhbGQuT4FZqKAiYSt7DdtNznwcfL2pZ495P");
  const hashedTwitterHandle = await getHashedName(twitter_handle);
  const twitterHandleRegistryKey = await getNameAccountKey(
    hashedTwitterHandle,
    undefined,
    ROOT_HANDLE
  );
  const registry = await Name.NameRegistryState.retrieve(
    connection,
    twitterHandleRegistryKey
  );
  return registry;
}
// Name.NameRegistryState
///////////////////////////////////////////////////////////////////////////

export async function getTwitterRegistryData(
  connection: web3.Connection,
  verifiedPubkey: web3.PublicKey,
  ROOT_PARENT :web3.PublicKey

): Promise<Buffer> {
  // const ROOT_PARENT_key  = new web3.PublicKey("9Pcd97xgKZ64V3CSaH49e1HcGUv5txPdC9QjUqYqgMXZ");
// const ROOT_AUTHORIITY = new web3.PublicKey("9hqKqtbMewhbGQuT4FZqKAiYSt7DdtNznwcfL2pZ495P");
  const filters = [
    {
      memcmp: {
        offset: 0,
        bytes: ROOT_PARENT.toBase58(),
      },
    },
    {
      memcmp: {
        offset: 0,
        bytes: verifiedPubkey?.toBase58(),
      },
    },
    {
      memcmp: {
        offset: 0,
        bytes: new web3.PublicKey(Buffer.alloc(32, 0)).toBase58(),
      },
    },
  ];

  const filteredAccounts = await getFilteredProgramAccounts(
    connection,
    NAME_PROGRAM_ID,
    filters
  );

  if (filteredAccounts.length > 1) {
    throw new Error('Found more than one registry.');
  }

  return filteredAccounts[2]?.accountInfo.data.slice(
    NameRegistryState.HEADER_LEN
  );
}


/////////////////////////////////////////////////////////////////////////////
export async function changeTwitterRegistryData(
  twitterHandle: string,
  verifiedPubkey: web3.PublicKey,
  offset: number, // The offset at which to write the input data into the NameRegistryData
  input_data: Buffer,
  ROOT_HANDLE:web3.PublicKey
) {
  const ROOT_PARENT  = new web3.PublicKey("GSHHQ1oGMRWYgZNnHX7m1Aqj5zEEwhjiAryB1TabPqa7");
  const hashedTwitterHandle = await getHashedName(twitterHandle);
  const twitterHandleRegistryKey = await getNameAccountKey(
    hashedTwitterHandle,
    undefined,
    ROOT_HANDLE
  );

  const instructions = 
    updateInstruction(
      NAME_PROGRAM_ID,
      twitterHandleRegistryKey,
      new Numberu32(offset),
      input_data,
      verifiedPubkey
    );
  
  var transaction =  new web3.Transaction()

  transaction.add(instructions);
  var signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [subdomainClass ],
   
  );

  console.log(`${signature}  update done `);
  // return instructions;
}



////////////////////
export async function getHandleAndRegistryKey(
  connection: web3.Connection,
  verifiedPubkey: web3.PublicKey
): Promise<[string, web3.PublicKey]> {
  const hashedVerifiedPubkey = await getHashedName(verifiedPubkey.toString());
  const reverseRegistryKey = await getNameAccountKey(
    hashedVerifiedPubkey,
    new web3.PublicKey("9hqKqtbMewhbGQuT4FZqKAiYSt7DdtNznwcfL2pZ495P"),
    new web3.PublicKey("39UZ1vcpDrwwHNEhYSUjjjk3UtWFizwk7aTpPc1uaVa3")
  
  );

  let reverseRegistryState = await ReverseTwitterRegistryState.retrieve(
    connection,
    reverseRegistryKey
  );
  return [
    reverseRegistryState.twitterHandle,
    new web3.PublicKey(reverseRegistryState.twitterRegistryKey),
  ];
}

export class ReverseTwitterRegistryState {
  twitterRegistryKey: Uint8Array;
  twitterHandle: string;

  static schema: Schema = new Map([
    [
      ReverseTwitterRegistryState,
      {
        kind: 'struct',
        fields: [
          ['twitterRegistryKey', [32]],
          ['twitterHandle', 'string'],
        ],
      },
    ],
  ]);
  constructor(obj: { twitterRegistryKey: Uint8Array; twitterHandle: string }) {
    this.twitterRegistryKey = obj.twitterRegistryKey;
    this.twitterHandle = obj.twitterHandle;
  }

  public static async retrieve(
    connection: web3.Connection,
    reverseTwitterAccountKey: web3.PublicKey
  ): Promise<ReverseTwitterRegistryState> {
    let reverseTwitterAccount = await connection.getAccountInfo(
      reverseTwitterAccountKey,
      'processed'
    );
    if (!reverseTwitterAccount) {
      throw new Error('Invalid reverse Twitter account provided');
    }

    let res: ReverseTwitterRegistryState = deserializeUnchecked(
      this.schema,
      ReverseTwitterRegistryState,
      reverseTwitterAccount.data.slice(NameRegistryState.HEADER_LEN)
    );

    return res;
  }
}

export async function createReverseTwitterRegistry(
  connection: web3.Connection,
  twitterHandle: string,
  twitterRegistryKey: web3.PublicKey,
  verifiedPubkey: web3.PublicKey,
  payerKey: web3.PublicKey,
  ROOT_PARENT: web3.PublicKey,
  ROOT_PARENT_AUTHORITY:web3.PublicKey,
  transaction:web3.Transaction
  
){


  // Create the reverse lookup registry
  const hashedVerifiedPubkey = await getHashedName(verifiedPubkey.toString());
  const reverseRegistryKey = await getNameAccountKey(
    hashedVerifiedPubkey,
    
    ROOT_PARENT
  );

  let reverseTwitterRegistryStateBuff = serialize(
    ReverseTwitterRegistryState.schema,
    new ReverseTwitterRegistryState({
      twitterRegistryKey: twitterRegistryKey.toBytes(),
      twitterHandle,
    })
  );

  transaction.add(
    createInstruction(
      NAME_PROGRAM_ID,
      web3.SystemProgram.programId,
      reverseRegistryKey,
      verifiedPubkey,
      payerKey,
      hashedVerifiedPubkey,
      new Numberu64(
        await connection.getMinimumBalanceForRentExemption(
          reverseTwitterRegistryStateBuff.length
        )
      ),
      new Numberu32(reverseTwitterRegistryStateBuff.length),
      ROOT_PARENT_AUTHORITY, // Twitter authority acts as class for all reverse-lookup registries
      ROOT_PARENT, // Reverse registries are also children of the root
      ROOT_PARENT_AUTHORITY
    )
  )
  

  transaction.add(
    updateInstruction(
      NAME_PROGRAM_ID,
      reverseRegistryKey,
      new Numberu32(0),
      Buffer.from(reverseTwitterRegistryStateBuff),
      ROOT_PARENT_AUTHORITY
    )

  )
  //  var signature = await web3.sendAndConfirmTransaction(
  //     connection,
  //     transaction,
  //     [myWallet,subdomainClass],
     
  //   );
  
  //   console.log(`${signature}   reverse created `);


  return transaction
  
}

