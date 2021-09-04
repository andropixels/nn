# nxtag

curl http://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d '
{
"jsonrpc": "2.0",
"id": 1,
"method": "getSignaturesForAddress",
"params": [
"2DE4QP6yaQdaU2WYSF1DjkvFpai71bjQaS1Tk5Jg4eUz",
{
"limit": 1
}
]
}
'

curl http://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d '
{
"jsonrpc": "2.0",
"id": 1,
"method": "getConfirmedSignaturesForAddress2",
"params": [
"2DE4QP6yaQdaU2WYSF1DjkvFpai71bjQaS1Tk5Jg4eUz",
{
"limit": 3
}
]
}
'

curl http://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d '
{
"jsonrpc": "2.0",
"id": 1,
"method": "getTransaction",
"params": [
"3Z2149QGP1Lo97W9q6KroKH5Tm1ZJdPnvPrb5KuZ5QaqZeE57r7Rb9xWCmmS6Z5H3bGMuBdUgdHXijEK4SRVwHfu",
"json"
]
}
'

curl http://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d '
{
"jsonrpc": "2.0",
"id": 1,
"method": "getSignaturesForAddress",
"params": [
"2DE4QP6yaQdaU2WYSF1DjkvFpai71bjQaS1Tk5Jg4eUz",
{
"limit": 1
}
]
}
'

curl http://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d '
{"jsonrpc":"2.0", "id":1, "method":"getTokenLargestAccounts", "params": ["498YdCwnQ9EPSQ76JEADbMEcAvczg2Bye382XfjP2SfM"]}
'

curl http://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d '
{
"jsonrpc": "2.0",
"id": 1,
"method": "getProgramAccounts",
"params": [
"498YdCwnQ9EPSQ76JEADbMEcAvczg2Bye382XfjP2SfM",
{
"encoding": "jsonParsed",
"filters": [
{
"dataSize": 165
},
{
"memcmp": {
"offset": 32,
"bytes": "EbeourjESYjSB89KchMV3gozfgBBAyxKd1Zt5nkCwbJJ"
}
}
]
}
]
}
