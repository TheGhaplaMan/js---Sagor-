const express = require ('express')
const app = express()
const port = 2000

app.get('/', (req,res) => {
    res.send("1 <br/> yoooo")
})

app.listen(port, () =>{
    console.log(`listening from ${port}`);
})