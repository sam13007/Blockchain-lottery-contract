const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const {interface,bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async()=>{
    accounts = await web3.eth.getAccounts()
   inbox = new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:["hi there!!"]})
    .send({from:accounts[0],gas:'1000000'})
    
});

describe('inbox',()=>{
    it('deploys',()=>{
       console.log(accounts) //check whether transaction happens
    });
     
});