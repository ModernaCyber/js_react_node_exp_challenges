const express = require('express')
const app = express()
const port = 5000

const userRouter = require('./routes/user')
const postRouter = require('./routes/user_activity')

app.get('/', (req, res) => res.send('SocialMedia Simulator!'))

app.use('/user',userRouter);
app.use('/post', postRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))