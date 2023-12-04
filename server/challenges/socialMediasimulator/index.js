const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const corsOptions = require('./config/cors')    

const app = express()
const port = 5000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const userRouter = require('./routes/user')
const postRouter = require('./routes/user_activity')

app.get('/', (req, res) => res.send('SocialMedia Simulator!'))

app.use('/user',userRouter);
app.use('/post', postRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))