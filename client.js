const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541  // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  process.stdin.on('data', function(message){
    client.write(message);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: SOS");
  })
  
  conn.on('data',function(message){
    console.log('server sent:',message);
  });


  // conn.on('end', function(){
  //   console.log('client got disconnected:');
  // });

  return conn;
};

module.exports = connect;