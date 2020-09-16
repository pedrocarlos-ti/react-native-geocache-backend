const express = require("express");
const LogFind = express.Router();

const Cache = require("../models/Cache");

LogFind.put("/", (request, response) => {
  const { _id } = request.query;

  if (!_id) {
    return response.status(400).json({ error: "No document id specified" });
  }

  Cache.findOneAndUpdate(
    { _id },
    {
      $inc: { foundCount: 1 },
    },
    {
      useFindAndModify: true,
      new: true,
    }
  )
    .then((item) => response.status(200).json({ result: item }))
    .catch((error) => response.status(error.statusCode || 400).json({ error }));
});

module.exports = LogFind;
