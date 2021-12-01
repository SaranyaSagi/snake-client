const net = require("net");
//let connection; 

const connect = require('./client');
const setupInput = require('./input')

console.log("Connecting ...");
let val = connect();

// const setupInput = (conn) => {
//   connection = conn;
// }

setupInput(val);


