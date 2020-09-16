const express = require("express");
const Routes = express.Router();

const Geocache = require("./geocache.routes");
const List = require("./list.routes");
const Log = require("./log.routes");

Routes.use("/geocache", Geocache);
Routes.use("/List", List);
Routes.use("/Log", Log);

module.exports = Routes;
