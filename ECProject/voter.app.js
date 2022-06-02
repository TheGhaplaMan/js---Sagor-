const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./ECProject/config.env" });

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const port = process.env.PORT || 4000;
const url = process.env.EC_DBURL;

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(url).then(() => {
  console.log("Paisi DB");
});

io.on("connection", (socket) => {
  console.log("user connected");
  // socket.on("chat message", (msg) => {
  //   io.emit("chat message", msg);
  // });
});

const centerRouter = require("./routes/center.routes");
const adminRouter = require("./routes/admin.routes");
const voterRouter = require("./routes/voter.routes");
const candidateRouter = require("./routes/candidate.routes");

app.use(express.json());
app.use(cors());
// app.get("/");

app.use("/api/v1/voter", voterRouter);
app.use("/api/v1/center", centerRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/candidate", candidateRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(port, () => {
  console.log("shunbooooo");
});
