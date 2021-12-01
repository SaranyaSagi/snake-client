const connect = require("./client");
let connection;


// setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  
  connection = conn;

  return stdin;
};

const handleUserInput = function(key) {
  console.log(key)
  //specify what happens when paricular key is pressed
  if (key === '\u0003') {
    process.exit();
  }
  //w - "Move: up"
  //a - "Move: left"
  //s - "Move: down"
  //d - "Move: right"
  if (key === 'w') {
    //console.log('Move: up')
    //connection = ("Move: up")
    connection.write("Move: up")
  }

  if (key === 'a') {
    //console.log('a')
    connection.write("Move: left")
  }

  if (key === 's') {
    //console.log('s')
    connection.write("Move: down")
  }

  if (key === 'd') {
    //console.log('d')
    connection.write("Move: right")
  }


};

module.exports = setupInput;

