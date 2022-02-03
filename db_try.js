const express = require('express')
const Mongopepol = require('mongodb').MongoClient
const app = express()
const port = 3000
const url = "mongodb+srv://TheGhaplaMan:Lu Yb Tm@cluster0.pnyuc.mongodb.net/dbNami?retryWrites=true&w=majority"
const client = new Mongopepol(url);

//w3school
// Mongopepol.connect(url, (err, db) => {
//     if (err) throw err;
//     console.log("working" , db);
//     const dbo = db.db('dbNami');
//     dbo.createCollection("newCollection", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//       });
//     const dbobj = {
//         name : "Adit",
//         "Marital Status" : false
//     }
//     dbo.collection("newCollection").insertOne(dbobj, (err, res) => {
//         if(err) throw err;
//         console.log(res);
//     });
//     db.close();
// })

//npm official doc
async function main () {
    await client.connect();
    console.log("paiseeeh");
    const  db = client.db("dbNami");
    const coll = db.collection("newCollection");
    const dbobj = {
                name : "Adit",
                "Marital Status" : false
            }
    db.collection("newCollection").insertOne(dbobj)
    console.log("insert hoise");

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());



app.get('/', (req, res) => {
    res.send ("noiceee"); 
})

app.listen(port, () => {
console.log("shuni")
})