const http = require('http');
const url = require('url')
const uuid = require('uuid');

const uuidv4 = uuid.v4;

const { WebSocketServer } = require('ws')

// const { handleConnection } = require('./handlers');

const server = http.createServer()

const port = 8011;

const listenFunction =()=>{
    console.log(`Starting server on port ${port}`);
}

const wsServer = new WebSocketServer({server: server});

// all connections
const connections = {};
const users = {}; 
wsServer.on('connection',(connection,request) =>{
    const { username } = url.parse(request.url, true).query

    console.log(username)   //connected user in params query

    const uuid = uuidv4()

});

server.listen(port, listenFunction);
