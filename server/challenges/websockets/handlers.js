const url = require('url')
const uuid = require('uuid');

const uuidv4 = uuid.v4;

function handleConnection  (connection,request){
    const { username } = url.parse(request.url, true).query.username

    console.log(username)   //connected user in params query

    const uuid = uuidv4()

}



module.exports = handleConnection