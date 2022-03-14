const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;
const url = process.env.DBURL;
// const port = 3000;
// const url =
//   "mongodb+srv://TheGhaplaMan:Lu Yb Tm@cluster0.pnyuc.mongodb.net/dbNami?retryWrites=true&w=majority";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(url).then(() => {
  console.log("Mongoose connected");
});

const userRouter = require("./routes/user.routes");
const venueRouter = require("./routes/venue.routes");
const viewRouter = require("./routes/view.routes");

app.use(express.json()); //converts all input from GET into json format
app.use(cookieParser());

app.use("/", viewRouter);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/venue", venueRouter);

app.listen(port, () => {
  console.log("shuni");
});
