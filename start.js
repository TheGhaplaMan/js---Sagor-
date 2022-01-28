const express = require ('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hellooooooo');
})

app.get('/users', (req,res) => {
    res.send('Yooo Adittt')
})
app.post('/', (req,res) => {
    res.send('POST request to home');
    console.log("noiceee");
})

app.listen(port, () => {
    console.log('Shoooob Shuni');
})