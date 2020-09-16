// Import methods from other files (express does not support new ES import syntax)
const connectDB = require("../util/database");
const Cache = require("../models/Cache");
const data = require("./data");

// Custom method to populate database with seed (hard-coded data)
const seed = () => {
  connectDB()
    .then(() => {
      return Cache.find().estimatedDocumentCount();
    })
    .then((cacheCount) => {
      if (cacheCount > 0) {
        throw new Error("Cache Collection is not empty.");
      }

      return Cache.create(data);
    })
    .then(() => console.log("DB Seeded."))
    .catch((error) => {
      console.log("Error while seeding database", error);
    })
    .finally(() => process.exit());
};

seed();
