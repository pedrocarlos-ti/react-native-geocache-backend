const express = require("express");
const server = express();
const connectDB = require("./util/database");

const Routes = require("./routes");

const PORT = 3000;

server.use(express.json());
server.use(Routes);
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
  connectDB().then((_) => console.log("connected to database"));
  console.log("connected at port " + PORT);
});
