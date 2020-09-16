const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let isConnected;

const DB_URL = "MONGO CREDENTIALS";

const connection = async () => {
  if (isConnected) {
    return Promise.resolve();
  }

  const db = await mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = db.connections[0].readyState;
};

module.exports = connection;
