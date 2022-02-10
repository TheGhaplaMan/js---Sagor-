const express = require('express')
const Mongopepol = require('mongodb').MongoClient
const app = express()
const port = 3000
const url = "mongodb+srv://TheGhaplaMan:Lu Yb Tm@cluster0.pnyuc.mongodb.net/dbNami?retryWrites=true&w=majority"
const client = new Mongopepol(url);
const userRouter = require('./routes/user.routes');

app.use(express.json()); //converts all input from GET into json format 

app.use('/users', userRouter)

app.listen(port, () => {
console.log("shuni")
})