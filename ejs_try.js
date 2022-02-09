const express = require('express')
const path = require('path')
const Mongopepol = require('mongodb').MongoClient
const app = express()
const port = 3222
const url = "mongodb+srv://TheGhaplaMan:Lu Yb Tm@cluster0.pnyuc.mongodb.net/dbNami?retryWrites=true&w=majority"
const client = new Mongopepol(url);

app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render(path.join(__dirname, 'views/index')); //dorkar asey
})

app.get('/about', async(req, res) => {
    res.render(path.join(__dirname, 'views/about'), {
        "Age" : 29
    })
}) 

app.listen(3222);
console.log('Paoa Geseey');