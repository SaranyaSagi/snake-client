const net = require("net");
const { IP, PORT } = require('./constants');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT  // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: SOS");
    // conn.write("Move: right");
    // conn.write("Move: left");
    // conn.write("Move: up");
    // conn.write("Move: right");
  })
  
  conn.on('data',function(message){
    console.log('server sent:',message);
  });

  return conn;
};

module.exports = connect;


////Experimental code/////
// let array = ["Move: right", "Move: left", "Move: up", "Move: right"]
// let delay = 0;

// for (const item of array) {
//   delay += 1000;
//   setTimeout(() => {
//     conn.write(item);
//   }, delay)
// };
// setTimeout(() => {
//   conn.write("Move: right");
// }, 1000);