const express = require('express');
require('dotenv').config();

const app = express();
const port = 5000;

const mySecretKey = process.env.MY_SECRETKEY;

app.get('/', (req, res) => {
    res.send(`Here is the secret key ${mySecretKey}`);
})

app.listen(port, () => {
    console.log(`Your server is listening on ${port}`);
})