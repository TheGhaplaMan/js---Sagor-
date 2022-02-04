const express = require('express')
const Mongopepol = require('mongodb').MongoClient
const app = express()
const port = 3000
const url = "mongodb+srv://TheGhaplaMan:Lu Yb Tm@cluster0.pnyuc.mongodb.net/dbNami?retryWrites=true&w=majority"
const client = new Mongopepol(url);

app.use(express.json()); //conerts all input from GET into json format 

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

// insert hoise
app.post('/', (req, res) =>{
    async function main () {
        await client.connect();
        console.log("paiseeeh");
        const  db = client.db("dbNami");
        const coll = db.collection("newCollection");

        const insertResult = await coll.insertOne(req.body)
        console.log(insertResult);
        return 'done.';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
    res.send(req.body);

})

// gono output
app.get('/', async (req, res) => {
    await client.connect();
    console.log("paiseeeh");
    const  db = client.db("dbNami");
    const coll = db.collection("newCollection");

    const findResult = await coll.find({}).toArray();
    client.close();
    res.send (findResult); 
})
 // specific data ber kore send korsi
app.get('/:naam', async (req, res) => {
    await client.connect();
    console.log("paiseeeh");
    const  db = client.db("dbNami");
    const coll = db.collection("newCollection");
    const findResult = await coll.findOne({name : req.params.naam});

    client.close();

    res.send(findResult);
})

app.listen(port, () => {
console.log("shuni")
})