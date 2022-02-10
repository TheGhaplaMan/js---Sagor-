const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const url = "mongodb+srv://TheGhaplaMan:Lu Yb Tm@cluster0.pnyuc.mongodb.net/dbNami?retryWrites=true&w=majority"

mongoose.connect(url).then(()=> {
    console.log("Mongoose connected");
} );

const userRouter = require('./routes/user.routes');
const venueRouter = require('./routes/venue.routes');

app.use(express.json()); //converts all input from GET into json format 

app.use('/users', userRouter);
app.use('/venue', venueRouter);

app.listen(port, () => {
console.log("shuni")
})