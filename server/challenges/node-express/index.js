const express = require('express')
const app = express()
const port = 3000

function PostFunction(req, res) {
    res.send('POST request to the homepage')
  }
function getFunction(req, res) {
    res.send(`Hello World! \n localhost:${port}`)
}
app.get('/', (req, res) => getFunction(req, res))
app.post('/', (req, res)=>PostFunction(req, res))
app.listen(port, () => console.log(`Example app listening on port ${port}! \n localhost:${port}`))