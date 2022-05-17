const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.port || 3000;

app.get('/', (req, res) => { 
  //to send response as a file whereever it is.
    res.sendFile(__dirname + '/index.html');
  });
  
  //using the declared var socket from connection 
  //while connection is running we emit the message.
  io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });
  
http.listen(port,()=>{
    console.log('Socket.IO server running at http://localhost:'+port+'/');
});
