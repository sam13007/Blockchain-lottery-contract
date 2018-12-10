const path = require("path");
const fs = require("fs");
const solc = require("solc");
const inboxpath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(inboxpath,'utf8');
//console.log(solc.compile(source,1).contracts[':Lottery']);
module.exports = solc.compile(source,1).contracts[':Lottery'];
console.log("done!!")
