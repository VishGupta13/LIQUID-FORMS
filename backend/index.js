const express = require('express');
const api_config = require('./config');

const app = express();
const port = api_config.port;

const FormRouter = require('./routers/FormRouter')
const userRouter = require('./routers/userRouter');
const cors = require('cors');


// to allow react frontend to access the backend
app.use(cors({origin: 'http://localhost:3000'}));

// to parse json data
app.use(express.json());

// middlewares - to intercept the request
app.use('/user', userRouter);
app.use('/form', FormRouter)


app.get( '/home', (req, res) => { 
    res.send('Hello Express!');
})

app.use(express.static('./static/uploads'))

app.listen(port, () => {
    console.log('the server has started');
});