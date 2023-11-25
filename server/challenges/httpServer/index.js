const http = require('node:http');

const hostname = '127.0.0.1';
const port = 8010;

const serverFunction = (req, res) =>{
    // console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
}
const listenFunction =()=>{
    console.log(`server running on port ${port}`);
}
const server = http.createServer(serverFunction);

server.listen(port,hostname,listenFunction);