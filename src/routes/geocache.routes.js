const express = require("express");
const Geocache = express.Router();

const Cache = require("../models/Cache");

Geocache.post("/", (request, response) => {
  Cache.create(request.body)
    .then((cacheItem) => {
      return response.status(200).json({ result: cacheItem });
    })
    .catch((err) => {
      return response.status(err.statusCode || 500).json({
        error: err.message,
      });
    });
});

module.exports = Geocache;
