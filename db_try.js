const express = require('express')
const Mongopepol = require('mongodb').MongoClient
const app = express()
const port = 3000
const url = "mongodb+srv://TheGhaplaMan:Lu Yb Tm@cluster0.pnyuc.mongodb.net/dbName?retryWrites=true&w=majority"

Mongopepol.connect(url, (err, db) => {
    if (err) throw err;
    console.log("working");
    const dbo = db.db('dbName');
    dbo.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    const dbobj = {
        name : "Adit",
        "Marital Status" : false
    }
    dbo.collection("newCollection").insertOne(dbobj, (err, res) => {
        if(err) throw err;
        console.log(res);
    });
    db.close();
})


app.get('/', (req, res) => {
    res.send ("noiceee");
})

app.listen(port, () => {
console.log("shuni")
})