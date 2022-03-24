const app = require('express');
const http = require('http').Server(app);
const port = process.env.port || 3000;

http.listen(port,()=>{
    console.log('Socket.IO server running at http://localhost:'+port+'/');
});