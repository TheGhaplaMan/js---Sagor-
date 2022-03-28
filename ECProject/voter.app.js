const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./ECProject/config.env" });

const port = process.env.PORT || 3000;
const url = process.env.DBURL;

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(url).then(() => {
  console.log("Paisi DB");
});

const centerRouter = require("./routes/center.routes");
const adminRouter = require("./routes/admin.routes");
const voterRouter = require("./routes/voter.routes");

app.use(express.json());

app.use("/api/v1/voter", voterRouter);
app.use("/api/v1/center", centerRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(port, () => {
  console.log("shunbooooo");
});
