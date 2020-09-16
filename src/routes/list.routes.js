const express = require("express");
const List = express.Router();

const Cache = require("../models/Cache");

List.get("/", (request, response) => {
  Cache.find()
    .then((cacheItems) => {
      return response.json({ result: cacheItems });
    })
    .catch((error) => {
      return response.json(error.statusCode || 500).json({ error });
    });
});

module.exports = List;
