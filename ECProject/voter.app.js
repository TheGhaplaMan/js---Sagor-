const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./ECProject/config.env" });

const port = process.env.PORT || 3000;
const ecpUrl = process.env.DBURL;
console.log(process.env.PORT);

mongoose.connect(ecpUrl).then(() => {
  console.log("Mongoose paisi");
});

app.listen(port, () => {
  console.log("project pardeee");
});

const centerRouter = require("./routes/center.routes");

app.use(express.json());

app.use("/api/v1/center", centerRouter);
