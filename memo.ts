import{
    PublicKey,
    TransactionInstruction,
    AccountMeta,
    // Programs,
    
} from '@solana/web3.js'



export class memoprogram {

 


// constructor();//constructor ??
   public static async   wriiteutf8(params:PublicKey, memo:string ) {

    const programid= new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");


   const keys =[{
     
    pubkey: params,
    isSigner: true,
    isWritable: false,

   }]
  //  var bytes = new Uint8Array(1024);

   // convert memo to byte array  var buf = Buffer.from('abc');
   const data = Buffer.from(memo );

   return new TransactionInstruction({
    keys,
    programId: programid,
    data,
  });

  }



}

