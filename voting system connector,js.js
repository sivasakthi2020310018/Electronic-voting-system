const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "voterId",
    "type": "string"
   }
  ],
  "name": "CountVote",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "string",
    "name": "voterId",
    "type": "string"
   }
  ],
  "name": "VoterList",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "string",
    "name": "voterId",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "voterName",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "origin",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "sentTimestamp",
    "type": "uint256"
   }
  ],
  "name": "VoteListSent",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "string",
    "name": "voterId",
    "type": "string"
   }
  ],
  "name": "VotedListVerified",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "voteId",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "voterName",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "origin",
    "type": "string"
   }
  ],
  "name": "votedList",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   }
  ],
  "name": "verifyVoterName",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   }
  ],
  "name": "Voternames",
  "outputs": [
   {
    "internalType": "string",
    "name": "VoterId",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "votersName",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "origin",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "sentTimestamp",
    "type": "uint256"
   },
   {
    "internalType": "enum Votingsystem.voterliststatus",
    "name": "status",
    "type": "uint8"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   }
  ],
  "name": "getvoterDetails",
  "outputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "enum Votingsystem.voterliststatus",
    "name": "",
    "type": "uint8"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "owner",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0xF6a3Ad4bB5ecdDf6F4f2852Fd9ee153696b98B1E"

export const contract = new ethers.Contract(address, abi, signer)